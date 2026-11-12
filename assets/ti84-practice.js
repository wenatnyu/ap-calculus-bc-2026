(() => {
  'use strict';

  const root = document.getElementById('ti84-practice');
  if (!root) return;
  const lessons = (Array.isArray(window.TI84_PRACTICE_LESSONS) ? window.TI84_PRACTICE_LESSONS : [])
    .filter(lesson => lesson?.id && ['graph', 'zero', 'intersect', 'derivative', 'integral'].includes(lesson.mode)
      && lesson.functions?.[0]?.expression);
  if (!lessons.length) {
    root.textContent = '单元练习暂未加载。请刷新页面，或使用下方备用模拟器。';
    return;
  }

  const mathMenu = ['1:►Frac', '2:►Dec', '3:³', '4:³√(', '5:x√', '6:fMin(', '7:fMax(', '8:nDeriv(', '9:fnInt('];
  const calcMenu = ['1:value', '2:zero', '3:minimum', '4:maximum', '5:intersect', '6:dy/dx', '7:∫f(x)dx'];
  const modePaths = {
    graph: 'Y= → GRAPH',
    zero: 'Y= → GRAPH → 2nd → TRACE → 2:zero',
    intersect: 'Y= → GRAPH → 2nd → TRACE → 5:intersect',
    derivative: 'MATH → 8:nDeriv(',
    integral: 'MATH → 9:fnInt('
  };
  const phaseNames = {
    home: 'HOME', editor: 'Y= EDITOR', graph: 'GRAPH', window: 'WINDOW', mode: 'MODE',
    math: 'MATH', calc: 'CALCULATE', left: 'Left Bound?', right: 'Right Bound?', guess: 'Guess?',
    first: 'First curve?', second: 'Second curve?', command: 'HOME', result: 'RESULT'
  };
  const compact = value => String(value ?? '').trim().toLowerCase().replace(/\s+/g, '')
    .replaceAll('−', '-').replaceAll('×', '*').replaceAll('÷', '/').replaceAll('²', '^2').replaceAll('³', '^3')
    .replaceAll('π', 'pi').replaceAll('θ', 'x');
  const normalizeFunction = value => compact(value).replace(/^(?:y[12₁₂]?|[fgrv]\([xt]\))=/, '');
  const numeric = value => Number(typeof value === 'object' && value !== null ? value.value : value);
  const showNumber = value => Number.isFinite(value) ? Number(value.toPrecision(9)).toString() : '—';
  const isGraphLesson = lesson => !['derivative', 'integral'].includes(lesson.mode);
  const bounds = lesson => ({ xMin: -10, xMax: 10, yMin: -10, yMax: 10, ...lesson.window });

  // Restricted arithmetic only: no eval, Function, imports, or global lookup.
  function compile(expression) {
    const source = compact(expression);
    if (!source || source.length > 200) throw Error('expression');
    const tokenPattern = /(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|[a-z]+|[+\-*/^()]/y;
    const tokens = [];
    for (let i = 0; i < source.length;) {
      tokenPattern.lastIndex = i;
      const match = tokenPattern.exec(source);
      if (!match) throw Error('token');
      tokens.push(match[0]);
      i = tokenPattern.lastIndex;
    }
    const fns = { sin: Math.sin, cos: Math.cos, tan: Math.tan, abs: Math.abs, sqrt: Math.sqrt,
      exp: Math.exp, ln: Math.log, log: Math.log10, asin: Math.asin, acos: Math.acos, atan: Math.atan };
    let i = 0;
    const peek = () => tokens[i];
    const take = token => peek() === token && Boolean(++i);
    function primary() {
      const token = tokens[i++];
      if (token === '(') {
        const f = sum();
        if (!take(')')) throw Error('parenthesis');
        return f;
      }
      if (token === 'x' || token === 't') return x => x;
      if (token === 'pi') return () => Math.PI;
      if (token === 'e') return () => Math.E;
      if (token && /^\d|^\./.test(token)) return () => Number(token);
      if (Object.hasOwn(fns, token) && take('(')) {
        const f = sum();
        if (!take(')')) throw Error('parenthesis');
        return x => fns[token](f(x));
      }
      throw Error('value');
    }
    function unary() {
      if (take('-')) { const f = unary(); return x => -f(x); }
      if (take('+')) return unary();
      const base = primary();
      if (take('^')) { const power = unary(); return x => base(x) ** power(x); }
      return base;
    }
    function product() {
      let f = unary();
      while (peek() && !['+', '-', ')'].includes(peek())) {
        const op = peek();
        if (op === '*' || op === '/') i += 1;
        const left = f;
        const right = unary();
        f = op === '/' ? x => left(x) / right(x) : x => left(x) * right(x);
      }
      return f;
    }
    function sum() {
      let f = product();
      while (peek() === '+' || peek() === '-') {
        const op = tokens[i++];
        const left = f;
        const right = product();
        f = op === '+' ? x => left(x) + right(x) : x => left(x) - right(x);
      }
      return f;
    }
    const fn = sum();
    if (i !== tokens.length) throw Error('expression');
    return fn;
  }

  function checkedFunction(entry, expected, lesson) {
    const input = normalizeFunction(entry);
    if (!input) return false;
    if ([expected.expression, ...(expected.aliases || [])].some(expression => normalizeFunction(expression) === input)) return true;
    try {
      const a = compile(input);
      const b = compile(expected.expression);
      const { xMin, xMax } = bounds(lesson);
      let matches = 0;
      for (const fraction of [0.023, 0.119, 0.227, 0.379, 0.531, 0.683, 0.811, 0.947]) {
        const x = xMin + (xMax - xMin) * fraction;
        const left = a(x);
        const right = b(x);
        if (Number.isFinite(left) !== Number.isFinite(right)) return false;
        if (!Number.isFinite(right)) continue;
        if (Math.abs(left - right) > 1e-7 * Math.max(1, Math.abs(right))) return false;
        matches++;
      }
      return matches >= 4;
    } catch {
      return false;
    }
  }

  function checkedNumber(entry) {
    const source = compact(entry);
    if (!source || /(?:^|[^a-z])[xt](?:$|[^a-z])/.test(source)) return NaN;
    try { return compile(source)(0); } catch { return NaN; }
  }

  function commandArgs(input, prefix) {
    const content = compact(input);
    if (!content.startsWith(prefix) || !content.endsWith(')')) return [];
    const body = content.slice(prefix.length, -1);
    let depth = 0;
    let start = 0;
    const fields = [];
    for (let i = 0; i < body.length; i++) {
      if (body[i] === '(') depth++;
      if (body[i] === ')') depth--;
      if (depth < 0) return [];
      if (body[i] === ',' && depth === 0) { fields.push(body.slice(start, i)); start = i + 1; }
    }
    if (depth !== 0) return [];
    fields.push(body.slice(start));
    return fields;
  }

  const dom = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  };
  const add = (parent, tag, className, text) => {
    const el = dom(tag, className, text);
    parent.append(el);
    return el;
  };
  const layout = add(root, 'div', 'tp-layout');
  const lessonPanel = add(layout, 'section', 'tp-lesson');
  const selectLabel = add(lessonPanel, 'label', 'tp-select-label', '选择单元练习');
  const picker = add(selectLabel, 'select', 'tp-picker');
  for (const [i, lesson] of lessons.entries()) {
    const option = add(picker, 'option', '', [lesson.unit, lesson.title].filter(Boolean).join(' · '));
    option.value = i;
  }
  const prompt = add(lessonPanel, 'p', 'tp-prompt');
  const formula = add(lessonPanel, 'p', 'tp-formula');
  const source = add(lessonPanel, 'a', 'tp-source');
  source.target = '_blank';
  source.rel = 'noopener noreferrer';
  const setup = add(lessonPanel, 'details', 'tp-hint');
  add(setup, 'summary', '', '按键与输入提示');
  const sequence = add(setup, 'p', 'tp-sequence');
  const nextHint = add(setup, 'p', 'tp-next');
  add(setup, 'p', 'tp-next', '可点按模拟键或直接输入表达式；用 Classic 线性格式。');
  const feedback = add(lessonPanel, 'p', 'tp-feedback');
  feedback.setAttribute('role', 'status');
  feedback.setAttribute('aria-live', 'polite');
  const result = add(lessonPanel, 'div', 'tp-answer');
  const answer = add(result, 'p', 'tp-answer-main');
  const explanation = add(result, 'p', 'tp-explanation');
  const challenge = add(result, 'form', 'tp-challenge');
  const challengeLabel = add(challenge, 'label', 'tp-challenge-label');
  const challengePrompt = add(challengeLabel, 'span');
  const challengeEntry = add(challengeLabel, 'input', 'tp-challenge-entry');
  challengeEntry.type = 'text';
  challengeEntry.inputMode = 'decimal';
  challengeEntry.maxLength = 80;
  challengeEntry.autocomplete = 'off';
  const challengeSubmit = add(challenge, 'button', 'tp-reset', '核对');
  challengeSubmit.type = 'submit';
  const reveal = add(challenge, 'button', 'tp-reveal', '查看解答');
  reveal.type = 'button';
  const challengeStatus = add(challenge, 'p', 'tp-challenge-status');
  challengeStatus.setAttribute('role', 'status');
  const reset = add(lessonPanel, 'button', 'tp-reset', '重做本题');
  reset.type = 'button';
  const device = add(layout, 'div', 'tp-device');
  device.setAttribute('role', 'group');
  device.setAttribute('aria-label', 'TI‑84 按键练习面板');
  const bezel = add(device, 'div', 'tp-bezel');
  const bezelTop = add(bezel, 'div', 'tp-bezel-title');
  add(bezelTop, 'span', 'tp-brand', '84 KEY PRACTICE');
  const shifted = add(bezelTop, 'span', 'tp-shift');
  const lcd = add(bezel, 'div', 'tp-lcd');
  const lcdTop = add(lcd, 'div', 'tp-lcd-top');
  const phaseTitle = add(lcdTop, 'strong', 'tp-phase');
  add(lcdTop, 'span', '', 'RAD · CLASSIC');
  const content = add(lcd, 'div', 'tp-content');
  const canvas = add(lcd, 'canvas', 'tp-chart');
  canvas.width = 560;
  canvas.height = 216;
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', '根据所选练习绘制的函数图像');
  const inputRow = add(lcd, 'label', 'tp-input-row');
  const inputCaption = add(inputRow, 'span', 'tp-input-caption');
  const field = add(inputRow, 'input', 'tp-input');
  field.type = 'text';
  field.inputMode = 'text';
  field.maxLength = 200;
  field.autocomplete = 'off';
  field.autocapitalize = 'off';
  field.spellcheck = false;

  const keypad = add(device, 'div', 'tp-keypad');
  const top = add(keypad, 'div', 'tp-top-keys');
  const controls = add(keypad, 'div', 'tp-controls');
  const direction = add(controls, 'div', 'tp-direction');
  const digits = add(keypad, 'div', 'tp-digits');
  function key(parent, id, label, secondary, tone) {
    const button = add(parent, 'button', `tp-key${tone ? ' tp-key--' + tone : ''}`);
    button.type = 'button';
    button.dataset.tpKey = id;
    if (secondary) add(button, 'span', 'tp-secondary', secondary);
    add(button, 'span', 'tp-key-label', label);
    const accessible = { LEFT: '← 左移', RIGHT: '→ 右移', UP: '↑ 上移', DOWN: '↓ 下移', DEL: 'DEL 删除', CLEAR: 'CLEAR 清除' };
    button.setAttribute('aria-label', accessible[id] || (secondary ? `${label}（2nd: ${secondary}）` : label));
    return button;
  }
  for (const [id, label, secondary] of [['Y=', 'Y=', 'STAT PLOT'], ['WINDOW', 'WINDOW', 'TBLSET'], ['ZOOM', 'ZOOM', 'FORMAT'],
    ['TRACE', 'TRACE', 'CALC'], ['GRAPH', 'GRAPH', 'TABLE']]) key(top, id, label, secondary, 'top');
  key(controls, '2nd', '2nd', '', 'shift');
  key(controls, 'MODE', 'MODE', 'QUIT');
  key(controls, 'DEL', 'DEL', 'INS');
  for (const [id, glyph] of [['UP', '↑'], ['LEFT', '←'], ['DOWN', '↓'], ['RIGHT', '→']]) key(direction, id, glyph, '', 'arrow');
  for (const [id, label, secondary] of [['MATH', 'MATH', 'TEST'], ['X', 'X,T,θ,n', ''], ['sin', 'sin', 'sin⁻¹'], ['cos', 'cos', 'cos⁻¹'], ['^', '^', 'π'],
    ['ln', 'ln', 'eˣ'], [',', ',', 'EE'], ['(', '(', '{'], [')', ')', '}'], ['/', '÷', 'e'],
    ['7', '7'], ['8', '8'], ['9', '9'], ['*', '×'], ['CLEAR', 'CLEAR'],
    ['4', '4'], ['5', '5'], ['6', '6'], ['-', '−'], ['^2', 'x²', '√'],
    ['1', '1'], ['2', '2'], ['3', '3'], ['+', '+'], ['abs', 'abs'],
    ['0', '0'], ['.', '.'], ['neg', '(−)', 'ANS'], ['ENTER', 'ENTER']]) key(digits, id, label, secondary, id === 'ENTER' ? 'enter' : (/^\d$/.test(id) ? 'number' : ''));

  let lesson = lessons[0];
  let state;
  let detail = '';
  let tone = '';
  let challengeRevealed = false;

  function fresh() {
    const w = bounds(lesson);
    state = { phase: 'home', second: false, cursor: 0, graphEntered: false, expressions: lesson.functions.map(() => ''),
      curve: 0, chosen: -1, x: (w.xMin + w.xMax) / 2, left: null, right: null, window: w, entries: new Set() };
    detail = '';
    tone = '';
    field.value = '';
    challengeRevealed = false;
    challengeEntry.value = '';
    challengeStatus.textContent = '';
    renderLesson();
    render();
  }

  function renderLesson() {
    prompt.textContent = lesson.prompt || lesson.title;
    formula.textContent = lesson.formula || lesson.functions.map((f, i) => `Y${i + 1} = ${f.expression}`).join('\n');
    source.hidden = !lesson.sourceUrl;
    if (lesson.sourceUrl) {
      const url = new URL(lesson.sourceUrl, document.baseURI);
      const localFile = url.protocol === 'file:' && document.baseURI.startsWith('file:');
      source.href = localFile || /^https?:$/.test(url.protocol) ? url.href : '#';
      source.textContent = `${lesson.sourceLabel || '原题来源'} ↗`;
    }
    sequence.textContent = modePaths[lesson.mode];
    challenge.hidden = !lesson.challenge;
    challengePrompt.textContent = lesson.challenge?.prompt || '';
  }

  function pointX() {
    return numeric(lesson.point?.x ?? (lesson.mode === 'zero' ? lesson.value : lesson.guess));
  }

  function expectedInput(phase) {
    if (phase === 'editor') return lesson.functions[state.curve]?.expression;
    if (phase === 'left') return showNumber(numeric(lesson.left ?? (pointX() + bounds(lesson).xMin) / 2));
    if (phase === 'right') return showNumber(numeric(lesson.right ?? (pointX() + bounds(lesson).xMax) / 2));
    if (phase === 'guess') return showNumber(numeric(lesson.guess ?? pointX()));
    if (phase === 'command') {
      const f = lesson.functions[0].expression;
      return lesson.mode === 'derivative' ? `nDeriv(${f},X,${showNumber(numeric(lesson.at))})`
        : `fnInt(${f},X,${showNumber(numeric(lesson.lower))},${showNumber(numeric(lesson.upper))})`;
    }
    return '';
  }

  function instruction() {
    switch (state.phase) {
      case 'home': return isGraphLesson(lesson) ? '按 Y= 打开函数编辑器。' : '按 MATH 打开数学菜单。';
      case 'editor': return `输入 Y${state.curve + 1}：${expectedInput('editor')}。按 ENTER 确认，按 GRAPH 作图。`;
      case 'graph': return '按 2nd，再按 TRACE 打开 CALCULATE 菜单。';
      case 'calc': return `选择 ${lesson.mode === 'zero' ? '2:zero' : '5:intersect'}。`;
      case 'math': return `选择 ${lesson.mode === 'derivative' ? '8:nDeriv(' : '9:fnInt('}。`;
      case 'left': return `选零点左边的 x，再按 ENTER，例如 ${expectedInput('left')}。`;
      case 'right': return `选零点右边的 x，再按 ENTER，例如 ${expectedInput('right')}。`;
      case 'guess': return `用左右方向键移动，或输入接近目标的 x（例如 ${expectedInput('guess')}），再按 ENTER。`;
      case 'first': return '用上下键选第一条曲线，按 ENTER。';
      case 'second': return '用上下键选另一条曲线，按 ENTER。';
      case 'command': return `填写完整命令：${expectedInput('command')}，再按 ENTER。`;
      case 'window': return '窗口已为本题预设。检查范围，按 GRAPH 绘图，或按 Y= 返回。';
      case 'mode': return '练习使用 RADIAN（弧度）和 CLASSIC；按 2nd MODE 退出。';
      default: return '本题完成。选择下一题或按「重做本题」。';
    }
  }

  function render(focusInput = false) {
    const phase = state.phase;
    phaseTitle.textContent = phaseNames[phase];
    shifted.textContent = state.second ? '2nd' : '';
    shifted.classList.toggle('is-active', state.second);
    keypad.querySelector('[data-tp-key="2nd"]').setAttribute('aria-pressed', String(state.second));
    const hasInput = ['editor', 'left', 'right', 'guess', 'command'].includes(phase);
    inputRow.hidden = !hasInput;
    field.placeholder = phase === 'editor' ? '输入函数' : phase === 'command' ? '填写参数并闭合括号' : showNumber(state.x);
    inputCaption.textContent = phase === 'editor' ? `Y${state.curve + 1} =` : phase === 'command' ? '命令' : 'X =';
    canvas.hidden = !['graph', 'left', 'right', 'guess', 'first', 'second'].includes(phase)
      && !(phase === 'result' && isGraphLesson(lesson));
    content.replaceChildren();
    if (phase === 'math' || phase === 'calc') {
      const menu = phase === 'math' ? mathMenu : calcMenu;
      const entries = add(content, 'div', 'tp-menu');
      for (const [i, item] of menu.entries()) {
        const button = add(entries, 'button', `tp-menu-item${i === state.cursor ? ' is-cursor' : ''}`, item);
        button.type = 'button';
        button.dataset.tpKey = String(i + 1);
      }
    } else if (phase === 'home') {
      add(content, 'p', 'tp-home', isGraphLesson(lesson) ? 'Press Y= to enter a function.' : 'Press MATH to choose a command.');
    } else if (phase === 'editor') {
      for (const [i, expression] of state.expressions.entries()) {
        add(content, 'p', i === state.curve ? 'tp-editor-line is-cursor' : 'tp-editor-line', `Y${i + 1} = ${expression}`);
      }
    } else if (phase === 'window') {
      add(content, 'p', 'tp-home', `Xmin=${state.window.xMin}    Xmax=${state.window.xMax}\nYmin=${state.window.yMin}    Ymax=${state.window.yMax}`);
    } else if (phase === 'mode') {
      add(content, 'p', 'tp-home', 'NORMAL   FLOAT\nRADIAN   CLASSIC');
    } else if (['first', 'second'].includes(phase)) {
      add(content, 'p', 'tp-home', `Y${state.curve + 1} · ${state.expressions[state.curve]}`);
    } else if (phase === 'result') {
      add(content, 'p', 'tp-readout', lesson.display || (lesson.point ? `X=${showNumber(numeric(lesson.point.x))}    Y=${showNumber(numeric(lesson.point.y))}`
        : lesson.mode === 'zero' ? `X=${showNumber(numeric(lesson.value))}    Y=0`
          : Number.isFinite(numeric(lesson.value)) ? showNumber(numeric(lesson.value)) : 'Graph ready'));
    }
    if (!canvas.hidden) draw();
    result.hidden = phase !== 'result';
    answer.textContent = lesson.answer || '按键与输入正确。';
    explanation.textContent = lesson.explanation || '';
    answer.hidden = Boolean(lesson.challenge && !challengeRevealed);
    explanation.hidden = !lesson.explanation || answer.hidden;
    reveal.hidden = challengeRevealed;
    feedback.textContent = detail || (phase === 'result' ? '完成 ✓' : '按实际计算器顺序操作。需要时展开提示。');
    feedback.dataset.tone = tone;
    nextHint.textContent = instruction();
    if (focusInput && !inputRow.hidden) field.focus({ preventScroll: true });
  }

  function draw() {
    const context = canvas.getContext('2d');
    if (!context) return;
    const { xMin, xMax, yMin, yMax } = state.window;
    const width = canvas.width, height = canvas.height;
    const px = x => (x - xMin) / (xMax - xMin) * width;
    const py = y => height - (y - yMin) / (yMax - yMin) * height;
    const line = (ax, ay, bx, by) => { context.beginPath(); context.moveTo(ax, ay); context.lineTo(bx, by); context.stroke(); };
    context.clearRect(0, 0, width, height);
    context.lineWidth = 1;
    context.strokeStyle = '#aec5bc';
    for (let i = 1; i < 10; i++) line(width * i / 10, 0, width * i / 10, height);
    for (let i = 1; i < 6; i++) line(0, height * i / 6, width, height * i / 6);
    context.strokeStyle = '#617b72';
    if (xMin <= 0 && xMax >= 0) line(px(0), 0, px(0), height);
    if (yMin <= 0 && yMax >= 0) line(0, py(0), width, py(0));
    for (const [i, expression] of state.expressions.entries()) {
      const fn = graphFunction(expression, i);
      if (!fn) continue;
      context.beginPath();
      context.strokeStyle = i ? '#a44321' : '#175e91';
      context.lineWidth = 2.7;
      let prior = null;
      for (let j = 0; j <= width; j++) {
        const y = py(fn(xMin + (xMax - xMin) * j / width));
        if (!Number.isFinite(y) || Math.abs(y) > height * 10) { prior = null; continue; }
        if (prior === null || Math.abs(y - prior) > height) context.moveTo(j, y); else context.lineTo(j, y);
        prior = y;
      }
      context.stroke();
    }
    context.strokeStyle = '#566956';
    context.lineWidth = 1.8;
    for (const value of [state.left, state.right]) {
      if (Number.isFinite(value)) line(px(value), 0, px(value), height);
    }
    if (['left', 'right', 'guess', 'first', 'second', 'result'].includes(state.phase)) {
      const candidate = state.phase === 'result' ? pointX() : state.x;
      if (Number.isFinite(candidate)) {
        const cx = px(candidate);
        const cy = py(graphFunction(state.expressions[state.curve], state.curve)?.(candidate));
        if (Number.isFinite(cy)) {
          context.strokeStyle = '#204238';
          line(cx - 7, cy, cx + 7, cy);
          line(cx, cy - 7, cx, cy + 7);
        }
      }
    }
  }

  function graphFunction(expression, index) {
    try { return compile(normalizeFunction(expression || lesson.functions[index].expression)); }
    catch { return null; }
  }

  function message(text, style = 'error') {
    detail = text;
    tone = style;
    render();
  }

  function move(phase, value = '', focus = false) {
    state.phase = phase;
    state.second = false;
    field.value = value;
    detail = '';
    tone = '';
    render(focus);
  }

  function complete() {
    move('result');
    message('按键与输入正确 · 本题完成', 'ok');
  }

  function saveCurve() {
    if (!checkedFunction(field.value, lesson.functions[state.curve], lesson)) {
      message(`Y${state.curve + 1} 的输入和本题函数不符。检查括号、乘号和指数。`);
      return false;
    }
    state.expressions[state.curve] = normalizeFunction(field.value);
    state.entries.add(state.curve);
    return true;
  }

  function graph() {
    if (!isGraphLesson(lesson)) return message('本题在主屏幕上用 MATH 菜单；按 2nd MODE 退出。');
    if (state.phase === 'editor' && field.value.trim() && !saveCurve()) return;
    const missing = lesson.functions.findIndex((_, i) => !state.entries.has(i));
    if (missing >= 0) {
      state.curve = missing;
      move('editor', state.expressions[missing], true);
      return message(`请先输入 Y${missing + 1}，再按 GRAPH。`);
    }
    state.graphEntered = true;
    state.left = state.right = null;
    state.curve = 0;
    if (lesson.mode === 'graph') return complete();
    move('graph');
    message('已绘制函数。按 2nd → TRACE 查找数值工具。', 'ok');
  }

  function chooseMenu(index) {
    const phase = state.phase;
    const expected = phase === 'calc' ? (lesson.mode === 'zero' ? 2 : 5) : (lesson.mode === 'derivative' ? 8 : 9);
    if (index !== expected) return message(`这个命令不能完成本题。${instruction()}`);
    if (phase === 'math') return move('command', lesson.mode === 'derivative' ? 'nDeriv(' : 'fnInt(', true);
    state.left = state.right = null;
    if (lesson.mode === 'zero') return move('left', '', true);
    state.curve = 0;
    state.chosen = -1;
    move('first');
  }

  function processCommand() {
    const derivative = lesson.mode === 'derivative';
    const fields = commandArgs(field.value, derivative ? 'nderiv(' : 'fnint(');
    if (fields.length !== (derivative ? 3 : 4) || !['x', 't'].includes(fields[1])) {
      return message(derivative ? '格式：nDeriv(函数, X, 求导点)，记得右括号。' : '格式：fnInt(函数, X, 下限, 上限)，记得右括号。');
    }
    if (!checkedFunction(fields[0], lesson.functions[0], lesson)) return message('函数输入不符。检查正负号、括号和指数。');
    const expected = derivative ? [lesson.at] : [lesson.lower, lesson.upper];
    if (expected.some((wanted, i) => {
      const actual = checkedNumber(fields[i + 2]);
      const target = numeric(wanted);
      return !Number.isFinite(actual) || !Number.isFinite(target) || Math.abs(actual - target) > 1e-7 * Math.max(1, Math.abs(target));
    })) return message(derivative ? '求导点不符。请使用题目给出的 X 值。' : '积分上下限不符。注意参数顺序是先下限、后上限。');
    complete();
  }

  function enter() {
    switch (state.phase) {
      case 'editor': {
        if (!saveCurve()) return;
        const next = Math.min(state.curve + 1, lesson.functions.length - 1);
        state.curve = next;
        move('editor', state.expressions[next], true);
        return message('函数已确认。输入其余函数，或按 GRAPH。', 'ok');
      }
      case 'math': case 'calc': return chooseMenu(state.cursor + 1);
      case 'command': return processCommand();
      case 'first':
        state.chosen = state.curve;
        state.curve = (state.curve + 1) % lesson.functions.length;
        return move('second');
      case 'second':
        if (state.curve === state.chosen) return message('请用上下键选择另一条曲线。');
        return move('guess', '', true);
      case 'left': case 'right': case 'guess': {
        const x = field.value.trim() ? checkedNumber(field.value) : state.x;
        const target = pointX();
        const { xMin, xMax } = state.window;
        if (!Number.isFinite(x) || x < xMin || x > xMax) return message(`请输入窗口内的 x：${xMin} 到 ${xMax}。`);
        if (lesson.mode === 'zero' && !Number.isFinite(graphFunction(state.expressions[state.curve], state.curve)?.(x))) {
          return message('函数在这个 x 处无定义。请在图像上另选一点。');
        }
        if (state.phase === 'left') {
          if (x >= target) return message('左界须在目标零点左侧。');
          state.left = x;
          state.x = x;
          return move('right', '', true);
        }
        if (state.phase === 'right') {
          if (x <= target) return message('右界须在目标零点右侧。');
          const fn = graphFunction(state.expressions[state.curve], state.curve);
          if (Math.sign(fn(state.left)) === Math.sign(fn(x))) {
            return message('左右界的函数值同号。请选一个更靠近目标零点的右界。');
          }
          state.right = x;
          state.x = x;
          return move('guess', '', true);
        }
        if (lesson.mode === 'zero' && (x < state.left || x > state.right)) return message('猜测值必须在左右界之间。');
        if (lesson.mode === 'intersect' && Math.abs(x - target) > Math.max((xMax - xMin) / 9, 0.05)) {
          return message('把光标移近题目要求的交点，再按 ENTER。');
        }
        return complete();
      }
      default: return message(instruction(), 'hint');
    }
  }

  function arrow(keyName) {
    const delta = keyName === 'UP' || keyName === 'LEFT' ? -1 : 1;
    if (state.phase === 'calc' || state.phase === 'math') {
      const size = state.phase === 'calc' ? calcMenu.length : mathMenu.length;
      state.cursor = (state.cursor + size + delta) % size;
    } else if (state.phase === 'editor' && ['UP', 'DOWN'].includes(keyName)) {
      if (field.value.trim() && !saveCurve()) return;
      state.curve = (state.curve + lesson.functions.length + delta) % lesson.functions.length;
      field.value = state.expressions[state.curve];
    } else if (['first', 'second'].includes(state.phase) && ['UP', 'DOWN'].includes(keyName)) {
      state.curve = (state.curve + lesson.functions.length + delta) % lesson.functions.length;
    } else if (['left', 'right', 'guess'].includes(state.phase) && ['LEFT', 'RIGHT'].includes(keyName)) {
      const { xMin, xMax } = state.window;
      state.x = Math.min(xMax, Math.max(xMin, state.x + delta * (xMax - xMin) / 40));
      field.value = showNumber(state.x);
    } else if (!inputRow.hidden && ['LEFT', 'RIGHT'].includes(keyName)) {
      const cursor = Math.max(0, Math.min(field.value.length, (field.selectionStart ?? field.value.length) + delta));
      field.focus({ preventScroll: true });
      field.setSelectionRange(cursor, cursor);
    } else return message(instruction(), 'hint');
    detail = '';
    render();
  }

  function edit(text, remove = false) {
    if (inputRow.hidden) return message(instruction(), 'hint');
    const end = field.selectionEnd ?? field.value.length;
    let start = field.selectionStart ?? end;
    if (remove && start === end) start = Math.max(0, start - 1);
    if (field.value.length - (end - start) + text.length > field.maxLength) return;
    field.setRangeText(text, start, end, 'end');
    detail = '';
    tone = '';
    render();
  }

  function press(keyName) {
    if (keyName === '2nd') { state.second = !state.second; return render(); }
    const second = state.second;
    state.second = false;
    if (keyName === 'MODE') return move(second ? 'home' : 'mode');
    if (keyName === 'Y=' && !second) {
      if (!isGraphLesson(lesson)) return message('本题用 MATH 菜单。按 2nd MODE 回主屏幕。');
      state.curve = 0;
      return move('editor', state.expressions[0], true);
    }
    if (keyName === 'MATH' && !second) {
      if (isGraphLesson(lesson)) return message('本题从 Y= 与 GRAPH 开始，再用 2nd TRACE。');
      if (state.phase !== 'home') return message('先按 2nd MODE 返回主屏幕，再按 MATH。');
      state.cursor = 0;
      return move('math');
    }
    if (keyName === 'WINDOW' && !second) return move('window');
    if (keyName === 'GRAPH' && !second) return graph();
    if (keyName === 'TRACE' && second) {
      if (!state.graphEntered || state.phase !== 'graph') return message('先按 GRAPH 显示函数图像，再按 2nd TRACE。');
      state.cursor = 0;
      return move('calc');
    }
    if (keyName === 'ENTER') return enter();
    if (['LEFT', 'RIGHT', 'UP', 'DOWN'].includes(keyName)) return arrow(keyName);
    if (keyName === 'CLEAR') {
      if (!inputRow.hidden) { field.value = ''; return message('已清除当前输入。', 'hint'); }
      return move(state.graphEntered && isGraphLesson(lesson) ? 'graph' : 'home');
    }
    if (keyName === 'DEL') return edit('', true);
    if (['calc', 'math'].includes(state.phase) && /^[1-9]$/.test(keyName)) return chooseMenu(Number(keyName));
    if (keyName === 'X') return edit('X');
    if (keyName === 'neg') return edit('-');
    if (['sin', 'cos', 'ln', 'abs'].includes(keyName)) return edit(second && keyName === 'ln' ? 'e^(' : `${second && ['sin','cos'].includes(keyName) ? 'a' : ''}${keyName}(`);
    if (keyName === '^' && second) return edit('pi');
    if (keyName === '^2' && second) return edit('sqrt(');
    if (/^[0-9.,()+*/^-]$/.test(keyName) || keyName === '^2') return edit(keyName);
    return message(instruction(), 'hint');
  }

  picker.addEventListener('change', () => { lesson = lessons[Number(picker.value)] || lessons[0]; fresh(); });
  reset.addEventListener('click', fresh);
  challenge.addEventListener('submit', event => {
    event.preventDefault();
    if (!lesson.challenge) return;
    const { value, tolerance, answer: solution } = lesson.challenge;
    const actual = checkedNumber(challengeEntry.value);
    const correct = Number.isFinite(actual) && Math.abs(actual - value) <= tolerance;
    challengeStatus.dataset.tone = correct ? 'ok' : 'error';
    challengeStatus.textContent = correct ? `正确 · ${solution}` : '再算一次，输入数值并保留三位小数。';
    if (correct) {
      challengeRevealed = true;
      render();
    }
  });
  reveal.addEventListener('click', () => { challengeRevealed = true; render(); });
  device.addEventListener('click', event => {
    const button = event.target.closest('[data-tp-key]');
    if (button) press(button.dataset.tpKey);
  });
  device.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.isComposing) return;
    if (event.target === field && event.key !== 'Enter' && event.key !== 'Escape' && !/^F[1-9]$/.test(event.key)) return;
    if (event.target instanceof HTMLButtonElement && ['Enter', ' '].includes(event.key)) return;
    const map = { Enter:'ENTER', Escape:'CLEAR', Backspace:'DEL', ArrowLeft:'LEFT', ArrowRight:'RIGHT', ArrowUp:'UP', ArrowDown:'DOWN',
      F1:'Y=', F2:'WINDOW', F4:'TRACE', F5:'GRAPH', F6:'2nd', F7:'MATH', F8:'MODE', x:'X', X:'X' };
    const input = map[event.key] || (/^[0-9.,()+*/^-]$/.test(event.key) ? event.key : null);
    if (input) { event.preventDefault(); press(input); }
  });
  field.addEventListener('input', () => { detail = ''; tone = ''; feedback.textContent = '继续输入，完成后按 ENTER。'; feedback.dataset.tone = 'hint'; });
  fresh();
})();
