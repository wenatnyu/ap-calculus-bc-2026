(() => {
  'use strict';
  const { createGraphScreen } = globalThis.TI84Graph;

  const math = globalThis.TI84Math;
  const screen = document.getElementById('screen');
  const keypad = document.getElementById('keypad');
  const soundButton = document.getElementById('sound');
  const fullButton = document.getElementById('fullscreen');
  const keys = new Map();
  const alternate = new Map();
  const history = [];
  let text = '';
  let caret = 0;
  let historyIndex = 0;
  let answer = 0;
  let page = 'home';
  let shifted = false;
  let choice = 0;
  let hint = '';
  let error = '';
  let justEvaluated = false;

  function readPreference(key, fallback) {
    try { return localStorage.getItem('bc-classroom-' + key) ?? fallback; }
    catch { return fallback; }
  }
  function savePreference(key, value) {
    try { localStorage.setItem('bc-classroom-' + key, value); } catch {}
  }
  let angle = readPreference('angle', 'rad') === 'deg' ? 'deg' : 'rad';
  let soundOn = readPreference('sound', 'on') !== 'off';
  let audio;

  function clickTone() {
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!soundOn || !Context) return;
    try {
      audio ??= new Context();
      const play = () => {
        if (!soundOn || audio.state !== 'running') return;
        const now = audio.currentTime;
        const oscillator = audio.createOscillator();
        const volume = audio.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(780, now);
        oscillator.frequency.exponentialRampToValueAtTime(520, now + .048);
        volume.gain.setValueAtTime(.0001, now);
        volume.gain.exponentialRampToValueAtTime(.095, now + .004);
        volume.gain.exponentialRampToValueAtTime(.0001, now + .052);
        oscillator.connect(volume).connect(audio.destination);
        oscillator.onended = () => { oscillator.disconnect(); volume.disconnect(); };
        oscillator.start(now);
        oscillator.stop(now + .055);
      };
      if (audio.state === 'running') play();
      else audio.resume().then(play).catch(() => {});
    } catch { /* Input also works on devices without audio output. */ }
  }

  const keyRows = [
    [['Y=', 'Y=', 'route'], ['WINDOW', 'WINDOW', 'route'], ['ZOOM', 'ZOOM', 'route'], ['TRACE', 'TRACE', 'route', 'CALC', 'CALC'], ['GRAPH', 'GRAPH', 'route', 'TABLE', 'TABLE']],
    [['2nd', '2nd', 'shift'], ['MODE', 'MODE', 'word', 'QUIT', 'HOME'], ['DEL', 'DEL', 'word'], ['UP', '↑', 'nav arrow'], ['CLEAR', 'CLEAR', 'word']],
    [['MATH', 'MATH', 'word'], ['X', 'X', 'nav'], ['LEFT', '←', 'nav arrow'], ['DOWN', '↓', 'nav arrow'], ['RIGHT', '→', 'nav arrow']],
    [['RECIP', 'x⁻¹', '', 'abs', 'abs('], ['sin(', 'sin', '', 'sin⁻¹', 'asin('], ['cos(', 'cos', '', 'cos⁻¹', 'acos('], ['tan(', 'tan', '', 'tan⁻¹', 'atan('], ['^', '^', 'operator', 'π', 'pi']],
    [['SQUARE', 'x²', '', '√', 'sqrt('], [',', ','], ['(', '('], [')', ')'], ['/', '÷', 'operator', 'e', 'e']],
    [['log(', 'log', '', '10ˣ', '10^('], ['7', '7', 'digit'], ['8', '8', 'digit'], ['9', '9', 'digit'], ['*', '×', 'operator']],
    [['ln(', 'ln', '', 'eˣ', 'exp('], ['4', '4', 'digit'], ['5', '5', 'digit'], ['6', '6', 'digit'], ['-', '−', 'operator']],
    [['pi', 'π'], ['1', '1', 'digit'], ['2', '2', 'digit'], ['3', '3', 'digit'], ['+', '+', 'operator']],
    [['Ans', 'Ans'], ['0', '0', 'digit'], ['.', '.', 'digit'], ['NEG', '(−)', '', 'Ans', 'Ans'], ['ENTER', 'ENTER', 'enter word', 'ENTRY', 'ENTRY']]
  ];

  function node(tag, cls, value) {
    const element = document.createElement(tag);
    if (cls) element.className = cls;
    if (value != null) element.textContent = value;
    return element;
  }
  const descriptions = { UP: '向上', DOWN: '向下', LEFT: '向左', RIGHT: '向右', DEL: '删除', CLEAR: '清除', NEG: '负号', ENTER: '确认' };
  for (const row of keyRows) {
    for (const [key, label, type, secondLabel, secondKey] of row) {
      const button = node('button', 'key ' + (type || ''));
      button.type = 'button';
      button.dataset.key = key;
      button.setAttribute('aria-label', label);
      button.title = [label, descriptions[key], secondLabel && '2nd → ' + secondLabel].filter(Boolean).join(' · ');
      if (secondKey) {
        button.dataset.alt = secondLabel;
        alternate.set(key, secondKey);
        button.append(node('span', 'key-alt', secondLabel));
      }
      button.append(node('span', 'key-main', label));
      keys.set(key, button);
      keypad.append(button);
    }
  }

  function updateStrip() {
    document.getElementById('angle-state').textContent = angle.toUpperCase();
    document.getElementById('shift-state').hidden = !shifted;
    keys.get('2nd').setAttribute('aria-pressed', String(shifted));
    keypad.classList.toggle('shifted', shifted);
    for (const [key] of alternate) {
      const button = keys.get(key);
      button.setAttribute('aria-label', shifted ? button.dataset.alt : button.querySelector('.key-main').textContent);
    }
  }
  function lineWithCursor(value, cursor, emptyDigit) {
    const line = node('div', 'command');
    line.append(value.slice(0, cursor), node('span', 'lcd-cursor', value[cursor] || emptyDigit || ' '), value.slice(cursor + 1));
    return line;
  }
  function renderHome() {
    document.getElementById('view-name').textContent = 'HOME';
    const log = node('div', 'history');
    for (const item of history) {
      const entry = node('div', 'entry');
      entry.append(node('div', 'expression', item.text), node('div', 'result', item.result));
      log.append(entry);
    }
    const command = lineWithCursor(text, caret, !history.length && !text ? '0' : '');
    command.setAttribute('aria-label', '输入 ' + (text || '空'));
    screen.replaceChildren(log, command);
    if (error || hint) screen.append(node('div', error ? 'lcd-error' : 'lcd-hint', error || hint));
    screen.scrollTop = screen.scrollHeight;
  }
  function home() {
    if (page === 'graph') graph.close();
    page = 'home';
    error = '';
    hint = '';
    renderHome();
  }
  const graph = createGraphScreen({ screen, math, angleMode: () => angle, answer: () => answer, home });
  const graphPages = new Set(['Y=', 'WINDOW', 'ZOOM', 'TRACE', 'GRAPH', 'CALC', 'TABLE']);

  function format(value) {
    return Number(value.toPrecision(12)).toString();
  }
  function insert(token) {
    if (text.length + token.length > 200) { error = '表达式已达长度上限'; return; }
    text = text.slice(0, caret) + token + text.slice(caret);
    caret += token.length;
    historyIndex = history.length;
  }
  function recall(direction) {
    historyIndex = Math.min(history.length, Math.max(0, historyIndex + direction));
    text = history[historyIndex]?.text || '';
    caret = text.length;
  }
  function evaluateEntry() {
    const input = text.trim() || history.at(-1)?.text;
    if (!input) return;
    try {
      answer = math.evaluate(input, {angle, ans: answer});
      history.push({text: input, result: format(answer)});
      if (history.length > 40) history.shift();
      historyIndex = history.length;
      text = '';
      caret = 0;
      justEvaluated = true;
      hint = '';
    } catch (err) {
      error = '计算错误 · ' + (err.message || '请检查表达式');
    }
  }
  const templates = { SQUARE: '^2', RECIP: '^(-1)', NEG: '-', X: 'X' };
  function homePress(key) {
    error = '';
    if (key === 'ENTER') evaluateEntry();
    else if (key === 'CLEAR') {
      if (!text) history.length = 0;
      text = ''; caret = 0; hint = ''; historyIndex = history.length;
    } else if (key === 'DEL' || key === 'BACKSPACE') {
      const index = key === 'DEL' && caret < text.length ? caret : caret - 1;
      if (index >= 0) { text = text.slice(0, index) + text.slice(index + 1); caret = index; }
    } else if (key === 'LEFT') caret = Math.max(0, caret - 1);
    else if (key === 'RIGHT') caret = Math.min(text.length, caret + 1);
    else if (key === 'UP' || key === 'ENTRY') recall(-1);
    else if (key === 'DOWN') recall(1);
    else {
      const token = templates[key] ?? key;
      if (!text && justEvaluated && ['+', '-', '*', '/', '^', 'SQUARE', 'RECIP'].includes(key)) insert('Ans');
      insert(token);
    }
    if (key !== 'ENTER') justEvaluated = false;
    renderHome();
  }
  const mathItems = [
    { digit: '8', name: 'nDeriv(', syntax: 'nDeriv(f(X),X,a)' },
    { digit: '9', name: 'fnInt(', syntax: 'fnInt(f(X),X,a,b)' }
  ];
  function menuItems() {
    return page === 'mode' ? ['1  Radian', '2  Degree'] : mathItems.map(item => item.digit + '  ' + item.name);
  }
  function renderMenu() {
    document.getElementById('view-name').textContent = page.toUpperCase();
    screen.replaceChildren(node('div', 'lcd-title', page === 'mode' ? '角度单位' : '数值微积分'));
    menuItems().forEach((item, i) => screen.append(node('div', i === choice ? 'lcd-line lcd-selected' : 'lcd-line', item)));
  }
  function selectMenu(index) {
    if (page === 'mode') {
      angle = ['rad', 'deg'][index];
      savePreference('angle', angle);
      updateStrip();
      home();
    } else {
      const item = mathItems[index];
      page = 'home'; hint = item.syntax; error = ''; justEvaluated = false;
      insert(item.name);
      renderHome();
    }
  }
  function press(key) {
    if (key === '2nd') { shifted = !shifted; updateStrip(); return; }
    if (shifted) { key = alternate.get(key) ?? key; shifted = false; updateStrip(); }
    if (key === 'HOME') return home();
    if (graphPages.has(key)) {
      page = 'graph';
      document.getElementById('view-name').textContent = key;
      graph.open(key);
      return;
    }
    if (key === 'MODE' || key === 'MATH') {
      if (page === 'graph') graph.close();
      page = key.toLowerCase(); choice = page === 'mode' && angle === 'deg' ? 1 : 0;
      return renderMenu();
    }
    if (page === 'graph') { graph.press(key === 'RECIP' ? '^(-1)' : key); return; }
    if (page === 'home') return homePress(key);
    if (key === 'CLEAR') return home();
    if (['UP', 'DOWN', 'LEFT', 'RIGHT'].includes(key)) { choice = 1 - choice; renderMenu(); }
    else if (key === 'ENTER') selectMenu(choice);
    else {
      const index = page === 'math' ? mathItems.findIndex(item => item.digit === key) : ['1','2'].indexOf(key);
      if (index >= 0) selectMenu(index);
    }
  }

  function activate(key) {
    clickTone();
    const button = keys.get(key === 'BACKSPACE' ? 'DEL' : key);
    if (button) {
      button.classList.add('pressed');
      setTimeout(() => button.classList.remove('pressed'), 100);
    }
    press(key);
  }
  keypad.addEventListener('click', event => {
    const button = event.target.closest('button[data-key]');
    if (button) activate(button.dataset.key);
  });
  soundButton.setAttribute('aria-pressed', String(soundOn));
  soundButton.addEventListener('click', () => {
    soundOn = !soundOn;
    soundButton.setAttribute('aria-pressed', String(soundOn));
    savePreference('sound', soundOn ? 'on' : 'off');
    if (soundOn) clickTone();
  });
  if (document.fullscreenEnabled) {
    fullButton.hidden = false;
    fullButton.addEventListener('click', async () => {
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else await document.documentElement.requestFullscreen();
      } catch { /* The calculator still fits the tab when fullscreen is unavailable. */ }
    });
    document.addEventListener('fullscreenchange', () => {
      fullButton.setAttribute('aria-pressed', String(Boolean(document.fullscreenElement)));
      document.getElementById('full-label').textContent = document.fullscreenElement ? '退出全屏' : '全屏';
    });
  }
  const shortcuts = {Enter:'ENTER', '=':'ENTER', Backspace:'BACKSPACE', Delete:'DEL', Escape:'CLEAR', ArrowLeft:'LEFT', ArrowRight:'RIGHT', ArrowUp:'UP', ArrowDown:'DOWN', F1:'Y=', F2:'WINDOW', F3:'ZOOM', F4:'TRACE', F5:'GRAPH', F6:'2nd', x:'X', X:'X', 'π':'pi'};
  let tabFocus = false;
  document.addEventListener('pointerdown', () => { tabFocus = false; });
  document.addEventListener('keydown', event => {
    if (event.metaKey || event.ctrlKey || event.altKey || event.isComposing) return;
    if (event.key === 'Tab') { tabFocus = true; return; }
    if (tabFocus && event.key === 'Enter' && event.target.closest('button')) return;
    const key = shortcuts[event.key] ?? (/^[0-9a-zA-Z.+*/^(),-]$/.test(event.key) ? event.key : null);
    if (!key) return;
    tabFocus = false;
    event.preventDefault();
    if (!event.repeat || ['DEL','BACKSPACE','UP','DOWN','LEFT','RIGHT'].includes(key)) activate(key);
  });
  document.addEventListener('paste', event => {
    if (page !== 'home' && page !== 'graph') return;
    const value = event.clipboardData?.getData('text/plain').trim();
    if (!value || value.length > 200) return;
    event.preventDefault();
    if (page === 'home') { error = ''; insert(value); justEvaluated = false; renderHome(); }
    else graph.paste(value);
  });
  updateStrip();
  renderHome();
})();
