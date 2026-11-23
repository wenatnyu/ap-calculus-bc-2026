(() => {
  'use strict';

  const windowFields = ['Xmin', 'Xmax', 'Xscl', 'Ymin', 'Ymax', 'Yscl'];
  const standardWindow = [-10, 10, 1, -10, 10, 1];
  const zoomMenu = ['2:Zoom In', '3:Zoom Out', '6:ZStandard'];
  const calcMenu = ['1:value', '2:zero', '3:minimum', '4:maximum', '5:intersect', '6:dy/dx', '7:∫f(x)dx'];
  const curveNames = ['Y₁', 'Y₂'];
  const curveColors = ['#095389', '#a0393d'];

  function numberText(value) {
    if (!Number.isFinite(value)) return 'undef';
    return String(Number(value.toPrecision(8)));
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function graphic(tag, attributes) {
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, value);
    return node;
  }

  function editor(value = '', replace = false) {
    return { value, cursor: value.length, replace };
  }

  function insertText(field,text) {
    if (text.length + (field.replace ? 0 : field.value.length) > 200) throw Error('Expression too long');
    if (field.replace) { field.value = ''; field.cursor = 0; }
    field.value = field.value.slice(0,field.cursor) + text + field.value.slice(field.cursor);
    field.cursor += text.length;
    field.replace = false;
  }

  function edit(field, key) {
    const aliases = { NEG: '-', SQUARE: '^2', pi: 'π', ANS: 'Ans', RECIP: '^(-1)' };
    if (key === 'LEFT' || key === 'RIGHT') {
      field.cursor = Math.min(field.value.length, Math.max(0, field.cursor + (key === 'LEFT' ? -1 : 1)));
    } else if (key === 'CLEAR') {
      field.value = '';
      field.cursor = 0;
    } else if (key === 'DEL' || key === 'BACKSPACE') {
      const position = key === 'DEL' && field.cursor < field.value.length ? field.cursor : field.cursor - 1;
      if (position >= 0) {
        field.value = field.value.slice(0, position) + field.value.slice(position + 1);
        field.cursor = Math.min(position, field.value.length);
      }
    } else {
      const text = aliases[key] ?? key;
      if (!/^(?:[0-9a-z.+*/^(),πθ!%-]|[a-z][a-z0-9]*\(|Ans|Y[12]|10\^\(|\^2|\^\(-1\))$/i.test(text)) return false;
      insertText(field,text);
    }
    field.replace = false;
    return true;
  }

  function editorLine(prefix, field) {
    const line = element('div', 'lcd-line', prefix);
    const first = Math.max(0, field.cursor - 20);
    line.append(document.createTextNode((first ? '…' : '') + field.value.slice(first, field.cursor)));
    const cursor = element('span', 'lcd-cursor', field.value[field.cursor] || ' ');
    line.append(cursor, document.createTextNode(field.value.slice(field.cursor + 1, field.cursor + 24)));
    return line;
  }

  function createGraphScreen({ screen, math, angleMode, answer, home }) {
    const equations = [editor(), editor()];
    let bounds = [...standardWindow];
    let view = '';
    let activeCurve = 0;
    let traceX = 0;
    let fieldIndex = 0;
    let selection = 0;
    let tableX = 0;
    let input = editor();
    let error = '';
    let result = '';
    let operation = null;

    const line = message => screen.append(element('div', 'lcd-line', message));
    const title = message => screen.append(element('div', 'lcd-title', message));
    const options = () => ({ angle: angleMode(), ans: answer() });
    function curves() {
      return equations.map((field, index) => {
        if (!field.value.trim()) return null;
        try { return math.compile(field.value, options()); }
        catch (cause) { throw Error(curveNames[index] + ': ' + cause.message); }
      });
    }
    function validWindow() {
      if (!(bounds[0] < bounds[1] && bounds[3] < bounds[4] &&
        Number.isFinite(bounds[1] - bounds[0]) && Number.isFinite(bounds[4] - bounds[3]) &&
        bounds[2] > 0 && bounds[5] > 0)) throw Error('Check WINDOW bounds and scales');
    }
    function numeric(value) {
      if (!value.trim()) throw Error('Enter a value');
      const n = math.compile(value, options())(traceX);
      if (!Number.isFinite(n)) throw Error('Undefined value');
      return n;
    }
    function setActive(fns) {
      if (!fns[activeCurve]) activeCurve = fns.findIndex(Boolean);
      if (activeCurve < 0) { activeCurve = 0; throw Error('Enter a function in Y='); }
    }
    function center() { return bounds[0] + (bounds[1] - bounds[0]) / 2; }
    function commitWindow() {
      const value = numeric(input.value);
      if ((fieldIndex === 2 || fieldIndex === 5) && value <= 0) throw Error('Scale must be positive');
      bounds[fieldIndex] = value;
    }
    function enterWindow(index) {
      fieldIndex = Math.max(0, Math.min(windowFields.length - 1, index));
      input = editor(numberText(bounds[fieldIndex]), true);
    }
    function selectMenu(menu, key) {
      if (key === 'UP' || key === 'DOWN') {
        selection = (selection + menu.length + (key === 'UP' ? -1 : 1)) % menu.length;
        return null;
      }
      if (key === 'ENTER') return menu[selection][0];
      return menu.some(item => item[0] === key) ? key : null;
    }

    let plot = null;
    const plotObserver = new ResizeObserver(() => {
      if (plot && plot.svg.isConnected) paintPlot(plot);
    });

    function mountPlot(fns, cursor) {
      validWindow();
      const svg = graphic('svg', { class: 'lcd-plot', role: 'img',
        'aria-label': equations.map((f,i) => f.value ? curveNames[i] + '=' + f.value : '').filter(Boolean).join(', ') || 'Graph axes' });
      plot = { svg, fns, cursor };
      screen.append(svg);
    }

    function paintPlot({ svg, fns, cursor }) {
      const width = svg.clientWidth, height = svg.clientHeight;
      if (width < 20 || height < 20) return;
      svg.replaceChildren();
      svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
      const font = Math.max(10, Math.min(21, Math.round(width / 24), Math.round(height / 13)));
      const left = Math.min(font*3.4, width*.17), right = width - font*1.4;
      const top = font*1.3, bottom = Math.max(top+1, height - font*1.65);
      const [xmin, xmax, xscl, ymin, ymax, yscl] = bounds;
      const px = x => left + (x - xmin) / (xmax - xmin) * (right - left);
      const py = y => top + (ymax - y) / (ymax - ymin) * (bottom - top);
      const defs = graphic('defs', {}), clip = graphic('clipPath', { id:'lcd-plot-area' });
      clip.append(graphic('rect', { x:left, y:top, width:right-left, height:bottom-top }));
      defs.append(clip);
      const lines = graphic('g', { 'clip-path':'url(#lcd-plot-area)' });
      svg.append(defs, lines);

      function lineTo(x1, y1, x2, y2, color) {
        lines.append(graphic('line', { x1, y1, x2, y2, stroke:color, 'stroke-width':1 }));
      }
      function label(x, y, value, anchor, color='#39594d') {
        const text = graphic('text', { x, y, fill:color, 'font-size':font, 'text-anchor':anchor });
        text.textContent = value;
        svg.append(text);
      }
      function tickLabel(value, range) {
        if (Math.abs(value) < range*1e-10) return '0';
        return Number(value.toPrecision(6)).toString();
      }
      // Honor the selected scale, showing fewer labeled gridlines when marks would overlap.
      function ticks(low, high, scale, count, callback) {
        const multiplier = Math.max(1,(high - low) / scale / count);
        const power = 10 ** Math.floor(Math.log10(multiplier)), norm = multiplier / power;
        const step = scale * power * (norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10);
        if (!Number.isFinite(step) || step <= 0) return;
        const first = Math.ceil(low/step - 1e-12);
        for (let i = 0; i <= count+2; i++) {
          const v = (first+i)*step;
          if (v > high + step*1e-12) break;
          if (v >= low - step*1e-12) callback(v);
        }
      }
      ticks(xmin, xmax, xscl, Math.max(2, Math.min(8,Math.floor((right-left)/(font*4)))), x => {
        lineTo(px(x),top,px(x),bottom,'#c2d2c2');
        label(px(x),bottom+font*1.15,tickLabel(x,xmax-xmin),'middle');
      });
      ticks(ymin,ymax,yscl, Math.max(2,Math.min(6,Math.floor((bottom-top)/(font*2.7)))), y => {
        lineTo(left,py(y),right,py(y),'#c2d2c2');
        label(left-font*.4,py(y)+font*.32,tickLabel(y,ymax-ymin),'end');
      });
      if (ymin <= 0 && ymax >= 0) lineTo(left,py(0),right,py(0),'#778f80');
      if (xmin <= 0 && xmax >= 0) lineTo(px(0),top,px(0),bottom,'#778f80');
      label(right+font*.5, bottom+font*1.15, 'x','middle');
      label(left-font*.4, top-font*.4,'y','end');
      const available = fns.map((fn,i) => fn ? i : -1).filter(i => i>=0);
      available.forEach((i,n) => label(right-(available.length-1-n)*font*2.2,top-font*.35,curveNames[i],'end',curveColors[i]));

      const samples = Math.max(300,Math.min(1000,Math.ceil(right-left)));
      fns.forEach((fn, index) => {
        if (!fn) return;
        let path = '', previous = null;
        for (let i = 0; i <= samples; i++) {
          const x = xmin + (xmax - xmin) * (i/samples);
          const yPixel = py(fn(x));
          if (!Number.isFinite(yPixel)) { previous = null; continue; }
          if (previous && Math.abs(previous.yPixel - yPixel) > (bottom-top)/3) {
            // A steep straight line is continuous. A pole or domain gap is not.
            const middle = py(fn(previous.x + (x-previous.x)/2));
            if (!Number.isFinite(middle) || Math.abs(middle - (yPixel/2 + previous.yPixel/2)) > (bottom-top)/8) previous = null;
          }
          const clamped = Math.max(-2*height, Math.min(3*height, yPixel));
          path += (previous ? 'L' : 'M') + px(x).toFixed(2) + ',' + clamped.toFixed(2);
          previous = { x, yPixel };
        }
        if (path) lines.append(graphic('path', { d:path, fill:'none', stroke:curveColors[index], 'stroke-width':2.1 }));
      });
      if (cursor && fns[activeCurve]) {
        const x = px(traceX), y = py(fns[activeCurve](traceX));
        if (x >= left && x <= right) {
          lineTo(x,top,x,bottom,'#819d8e');
          if (y >= top && y <= bottom) lines.append(graphic('circle', { cx:x, cy:y, r:Math.max(3,font*.29), fill:curveColors[activeCurve] }));
        }
      }
    }

    function renderTable(fns) {
      title('TABLE');
      const table = element('table', 'lcd-table');
      const heading = table.createTHead().insertRow();
      for (const name of ['X', ...curveNames]) {
        const th = document.createElement('th');
        th.scope = 'col';
        th.textContent = name;
        heading.append(th);
      }
      const body = table.createTBody();
      for (let i = 0; i < 5; i++) {
        const x = tableX + i;
        const row = body.insertRow();
        const values = [numberText(x), ...fns.map(fn => fn ? numberText(fn(x)) : '—')];
        for (const value of values) row.insertCell().textContent = value;
      }
      screen.append(table);
      if (input.value) screen.append(editorLine('X=', input));
    }

    function refresh() {
      if (!view) return;
      plotObserver.disconnect();
      plot = null;
      screen.replaceChildren();
      try {
        if (view === 'Y=') {
          title('Y= EDITOR');
          equations.forEach((field, i) => {
            const prefix = curveNames[i] + '=';
            if (activeCurve === i) screen.append(editorLine(prefix, field));
            else line(prefix + field.value);
          });
        } else if (view === 'WINDOW') {
          title('WINDOW');
          windowFields.forEach((name, i) => {
            if (i === fieldIndex) screen.append(editorLine(name+'=', input));
            else line(name + '=' + numberText(bounds[i]));
          });
        } else if (view === 'ZOOM' || view === 'CALC') {
          title(view === 'CALC' ? 'CALCULATE' : 'ZOOM');
          const menu = view === 'CALC' ? calcMenu : zoomMenu;
          menu.forEach((item,i) => screen.append(element('div', 'lcd-line' + (i===selection?' lcd-selected':''), item)));
        } else if (view === 'TABLE') renderTable(curves());
        else {
          const fns = curves();
          if (view === 'TRACE' || view === 'CALC INPUT') setActive(fns);
          mountPlot(fns, view !== 'GRAPH');
          if (view === 'CALC INPUT') {
            const prompt = operation.steps[operation.index];
            line(operation.label + ' · ' + prompt);
            if (prompt.includes('curve?')) line(curveNames[activeCurve] + '=' + equations[activeCurve].value);
            else if (input.value) screen.append(editorLine('X=', input));
            else line('X=' + numberText(traceX));
          } else if (view === 'TRACE') {
            if (input.value) screen.append(editorLine('X=',input));
            else line(curveNames[activeCurve]+': X='+numberText(traceX)+'  Y='+numberText(fns[activeCurve](traceX)));
          } else if (result) line(result);
          else if (!fns.some(Boolean)) line('Enter a function in Y=');
        }
      } catch (cause) { screen.append(element('div', 'lcd-line lcd-error', cause.message)); }
      if (error) screen.append(element('div', 'lcd-line lcd-error', error));
      if (plot) { paintPlot(plot); plotObserver.observe(plot.svg); }
    }

    function close() {
      if (view === 'WINDOW') {
        try { commitWindow(); } catch { /* Leave invalid drafts on the WINDOW screen. */ }
      }
      view = '';
      plotObserver.disconnect();
      plot = null;
    }

    function open(key) {
      try {
        if (view === 'WINDOW' && key !== 'WINDOW') commitWindow();
        view = key; selection = 0; result = ''; error = ''; input = editor();
        if (key === 'WINDOW') enterWindow(0);
        if (key === 'GRAPH' || key === 'TRACE') {
          validWindow();
          if (traceX < bounds[0] || traceX > bounds[1]) traceX = center();
        }
      } catch (cause) { error = cause.message; }
      refresh();
    }

    const prompts = {
      '1': ['X value?'], '2': ['Left bound?', 'Right bound?', 'Guess?'],
      '3': ['Left bound?', 'Right bound?', 'Guess?'], '4': ['Left bound?', 'Right bound?', 'Guess?'],
      '5': ['First curve?', 'Second curve?', 'Guess?'], '6': ['At X?'], '7': ['Lower limit?', 'Upper limit?']
    };
    function beginCalc(code) {
      validWindow();
      const fns = curves();
      setActive(fns);
      if (code === '5' && !fns.every(Boolean)) throw Error('Enter both Y₁ and Y₂');
      operation = { code, label:calcMenu[Number(code)-1].slice(2), steps:prompts[code], index:0, values:[] };
      input = editor(); view = 'CALC INPUT';
      if (traceX < bounds[0] || traceX > bounds[1]) traceX = center();
    }
    function acceptCalc() {
      const fns = curves();
      const choice = operation.steps[operation.index].includes('curve?');
      const value = choice ? activeCurve : input.value ? numeric(input.value) : traceX;
      const vals = [...operation.values, value];
      if (choice && operation.index === 1 && value === vals[0]) throw Error('Choose a different curve');
      if (['2','3','4'].includes(operation.code) && operation.index === 1 && value <= vals[0]) throw Error('Right bound must exceed left');
      if (operation.index + 1 < operation.steps.length) {
        operation.values = vals;
        operation.index += 1;
        if (choice) activeCurve = 1 - activeCurve;
        else traceX = operation.steps[operation.index] === 'Guess?' ? vals[0] + (vals[1] - vals[0])/2 : value;
        input = editor(); return;
      }
      const f = fns[activeCurve], code = operation.code;
      let x = value, name = operation.label, valueText;
      if (code === '2') x = math.root(f, vals[0], vals[1], value);
      if (code === '3' || code === '4') x = math.extreme(f, vals[0], vals[1], code === '4' ? 'max' : 'min');
      if (code === '5') x = math.intersection(fns[vals[0]],fns[vals[1]],bounds[0],bounds[1],value);
      if (code === '6') valueText = numberText(math.derivative(f,value));
      else if (code === '7') valueText = numberText(math.integral(f,vals[0],value));
      else valueText = 'X='+numberText(x)+'  Y='+numberText(f(x));
      result = name+'  '+valueText;
      traceX = x; view = 'RESULT'; input = editor();
    }

    function press(key) {
      if (!view) return false;
      if (key === 'CLEAR' && error) { error=''; refresh(); return true; }
      error = '';
      try {
        if (view === 'Y=') {
          if (['UP','DOWN','ENTER'].includes(key)) activeCurve = key === 'UP' ? 0 : 1;
          else if (!edit(equations[activeCurve],key)) return false;
        } else if (view === 'WINDOW') {
          if (['UP','DOWN','ENTER'].includes(key)) {
            commitWindow(); enterWindow(fieldIndex + (key==='UP' ? -1 : 1));
          } else if (!edit(input,key)) return false;
        } else if (key === 'CLEAR') {
          if (input.value) input = editor();
          else if (view === 'CALC INPUT' || view === 'RESULT' || view === 'TRACE') open('GRAPH');
          else { view=''; home(); }
        } else if (view === 'ZOOM' || view === 'CALC') {
          const code = selectMenu(view === 'CALC' ? calcMenu : zoomMenu,key);
          if (code && view === 'CALC') beginCalc(code);
          else if (code) {
            if (code === '6') bounds = [...standardWindow];
            else {
              validWindow();
              const scale = code === '2' ? .5 : 2;
              for (const start of [0,3]) {
                const half = (bounds[start+1] - bounds[start])/2;
                const middle = bounds[start] + half;
                bounds[start] = middle - half*scale; bounds[start+1] = middle + half*scale;
              }
            }
            open('GRAPH');
          }
        } else if (view === 'TABLE') {
          if (key === 'UP' || key === 'DOWN') tableX += key === 'UP' ? -1 : 1;
          else if (key === 'ENTER' && input.value) { tableX=numeric(input.value); input=editor(); }
          else if (!edit(input,key)) return false;
        } else if (view === 'TRACE' || view === 'CALC INPUT') {
          const fns = curves(); setActive(fns);
          if (key === 'ENTER' && view === 'CALC INPUT') acceptCalc();
          else if (key === 'ENTER' && input.value) { traceX = numeric(input.value); input = editor(); }
          else if ((key === 'LEFT' || key === 'RIGHT') && !input.value) {
            traceX = Math.max(bounds[0],Math.min(bounds[1],traceX+(key==='LEFT'?-1:1)*(bounds[1]-bounds[0])/100));
          } else if (key==='UP' || key==='DOWN') {
            // Once bounds were accepted, continue the calculation on the selected curve.
            if (view === 'TRACE' || operation.index === 0 || operation.steps[operation.index].includes('curve?')) {
              if (fns[1-activeCurve]) activeCurve=1-activeCurve;
            }
          } else if (!edit(input,key)) return false;
        } else if (key==='LEFT' || key==='RIGHT' || key==='UP' || key==='DOWN') {
          open('TRACE'); return press(key);
        } else return false;
      } catch(cause) { error = cause.message; }
      refresh(); return true;
    }

    function paste(text) {
      const usingInput = ['WINDOW','TRACE','TABLE'].includes(view) ||
        (view === 'CALC INPUT' && !operation.steps[operation.index].includes('curve?'));
      if (view !== 'Y=' && !usingInput) return false;
      text = text.trim();
      if (!text) return false;
      try {
        if (!/^[a-z0-9 πθ²³√−×÷+*/^(),.!-]+$/i.test(text)) throw Error('Invalid expression');
        insertText(view === 'Y=' ? equations[activeCurve] : input, text);
        error = '';
      } catch(cause) { error=cause.message; }
      refresh();
      return true;
    }

    return { open, close, press, paste, refresh };
  }

  globalThis.TI84Graph = Object.freeze({ createGraphScreen });
})();
