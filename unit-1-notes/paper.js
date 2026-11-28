(() => {
  'use strict';
  const { topic, groups, pages } = JSON.parse(document.getElementById('sheet-data').textContent);
  const byId = id => document.getElementById(id);
  const stage = byId('paper-stage');
  const picker = byId('question-picker');
  const dialog = byId('whole-sheet');
  function pageNumber() { return groups[current].page || 1; }
  function pageBounds() { return [0, 0, 612, pages?.[pageNumber()] || 792]; }
  const opened = groups.map(() => new Set());
  let current = 0;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderMath(tex, displayMode = false) {
    const node = element('span');
    katex.render(tex, node, { displayMode, throwOnError: true, strict: 'ignore' });
    return node;
  }

  function typeset(text, target) {
    const math = /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g;
    let end = 0;
    for (const match of text.matchAll(math)) {
      target.append(text.slice(end, match.index), renderMath(match[1] ?? match[2], match[2] !== undefined));
      end = match.index + match[0].length;
    }
    target.append(text.slice(end));
  }

  function position(node, box, origin) {
    const [x, y, w, h] = box;
    Object.assign(node.style, { left: (x - origin[0]) + 'px', top: (y - origin[1]) + 'px',
      width: w + 'px', height: h + 'px' });
    return node;
  }

  function intersects(a, b) {
    return a[0] < b[0] + b[2] && b[0] < a[0] + a[2] && a[1] < b[1] + b[3] && b[1] < a[1] + a[3];
  }

  function writeInk(interior, crop, mark) {
    if (!intersects(crop, mark.box)) return;
    const holder = position(element('span', 'paper-ink'), mark.box, crop);
    holder.setAttribute('aria-hidden', 'true');
    const formula = renderMath(mark.tex);
    formula.className = 'ink-math';
    holder.append(formula);
    interior.append(holder);
  }

  function drawOverlay(interior, crop, shapes) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    const holder = position(element('span', 'paper-ink'), crop, crop);
    holder.setAttribute('aria-hidden', 'true');
    svg.setAttribute('viewBox', crop.join(' '));
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    for (const {type, ...attributes} of shapes) {
      const node = document.createElementNS(ns, type);
      for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, value);
      svg.append(node);
    }
    holder.append(svg);
    interior.append(holder);
  }

  // Original graph solution for Unit 1 pages saved with the single-sketch format.
  const limitSketch = [
    {type:'path', d:'M351 598.02H403.44 M403.44 619.32L456.78 587.28L498 607.9',
      fill:'none', stroke:'currentColor', 'stroke-width':1.9, 'stroke-linecap':'round'},
    {type:'path', d:'M355 595.8L351 598.02L355 600.25 M495.8 604L498 607.9L493.6 608.45',
      fill:'none', stroke:'currentColor', 'stroke-width':1.5},
    ...[[403.44,598.02,true],[403.44,619.32,false],[456.78,587.28,false],[456.78,640.62,true]].map(([cx,cy,filled]) =>
      ({type:'circle', cx, cy, r:2.75, fill:filled ? 'currentColor' : 'white', stroke:'currentColor', 'stroke-width':1.55}))
  ];

  function makeCrop(box, scale, overview = false) {
    const outer = element('div', 'paper-crop');
    const interior = element('div', 'paper-interior');
    outer.style.width = box[2] * scale + 'px';
    outer.style.height = box[3] * scale + 'px';
    interior.style.width = box[2] + 'px';
    interior.style.height = box[3] + 'px';
    interior.style.transform = 'scale(' + scale + ')';
    const image = element('img', 'paper-image');
    image.alt = overview ? topic + ' Notes 原讲义整页' : topic + ' Notes · ' + groups[current].label + ' 原讲义';
    image.src = 'sheets/' + topic + (pages ? '-p' + pageNumber() : '') + '.webp';
    image.draggable = false;
    interior.append(position(image, pageBounds(), box));
    const focus = groups[current].focus;
    if (focus && !overview && intersects(box, focus)) {
      interior.append(position(element('span', 'active-questions'), focus, box));
    }

    groups.forEach((group, g) => {
      if ((group.page || 1) !== pageNumber()) return;
      group.items.forEach((item, i) => {
        const visible = (overview || g === current) && opened[g].has(i);
        if (!visible) {
          for (const mask of item.masks || []) {
            if (intersects(box, mask)) interior.append(position(element('span', 'paper-mask'), mask, box));
          }
          return;
        }
        if (item.draw) drawOverlay(interior, box, item.draw);
        else if (item.sketch && intersects(item.loc, box)) drawOverlay(interior, box, limitSketch);
        const marks = typeof item.ink === 'string' ? [{ box: item.loc, tex: item.ink }] : item.ink || [];
        marks.forEach(mark => writeInk(interior, box, mark));
      });
    });
    if (overview) {
      const regions = focus ? [focus] : activeBoxes();
      for (const outline of regions) interior.append(position(element('span', 'map-outline'), outline, box));
    }
    outer.append(interior);
    return outer;
  }

  function fitInk() {
    document.querySelectorAll('.ink-math').forEach(node => {
      const holder = node.parentElement;
      const availableWidth = parseFloat(holder.style.width);
      const availableHeight = parseFloat(holder.style.height);
      const shrink = Math.min(1, (availableWidth - 1) / (node.offsetWidth || 1), availableHeight / (node.offsetHeight || 1));
      node.style.transform = 'translate(-50%,-50%) scale(' + shrink + ')';
    });
  }

  function activeBoxes() {
    const { box, context } = groups[current];
    return context ? [context, box] : [box];
  }

  function paint() {
    const boxes = activeBoxes();
    const phone = matchMedia('(max-width:780px)').matches;
    const gap = phone ? 8 : 12;
    const width = stage.clientWidth;
    const height = phone ? Infinity : stage.clientHeight;
    const widths = boxes.map(box => box[2]);
    const heights = boxes.map(box => box[3]);
    const sum = values => values.reduce((a, b) => a + b, 0);
    const stack = Math.min(width / Math.max(...widths), (height - gap * (boxes.length - 1)) / sum(heights));
    const side = Math.min((width - gap * (boxes.length - 1)) / sum(widths), height / Math.max(...heights));
    const horizontal = !phone && boxes.length > 1 && side > stack;
    const scale = Math.max(0.01, Math.min(4, horizontal ? side : stack));
    stage.style.flexDirection = horizontal ? 'row' : 'column';
    // Keep reference material and its question in worksheet reading order.
    if (boxes.length > 1) boxes.sort((a, b) => horizontal ? a[0] - b[0] : a[1] - b[1]);
    const { box: question, context } = groups[current];
    const headingStrip = context && context[2] > 1.5 * question[2] && context[3] < question[3] / 2;
    const separate = !horizontal && (phone || headingStrip);
    const referenceScale = context ? Math.min(4, width / context[2]) : scale;
    const roomBelowReference = context ? height - gap - context[3] * referenceScale : height;
    stage.replaceChildren(...boxes.map(box => {
      if (!separate) return makeCrop(box, scale);
      const available = box === context ? height : roomBelowReference;
      return makeCrop(box, Math.max(.01, Math.min(4, width / box[2], available / box[3])));
    }));
    if (dialog.open) {
      const mapHeight = window.innerHeight * .98 - dialog.querySelector('.map-head').offsetHeight - 19;
      const mapScale = Math.min((window.innerWidth * .96 - 19) / 612, mapHeight / pageBounds()[3], 2);
      byId('map-stage').replaceChildren(makeCrop(pageBounds(), Math.max(.1, mapScale), true));
    }
    fitInk();
  }

  function updateAnswers() {
    const answered = opened[current];
    document.querySelectorAll('.answer-toggle').forEach((button, index) => {
      const isOpen = answered.has(index);
      button.setAttribute('aria-expanded', String(isOpen));
      button.querySelector('.toggle-state').textContent = isOpen ? '收起 −' : '显示 +';
      byId(button.getAttribute('aria-controls')).hidden = !isOpen;
    });
    byId('toggle-all').textContent = answered.size === groups[current].items.length ? '全部收起' : '全部显示';
    paint();
  }

  function toggleAll() {
    const answered = opened[current];
    const count = groups[current].items.length;
    if (answered.size === count) answered.clear();
    else for (let i = 0; i < count; i++) answered.add(i);
    updateAnswers();
  }

  function renderAnswers() {
    const entries = groups[current].items.map((item, index) => {
      const section = element('div', 'answer-entry');
      const button = element('button', 'answer-toggle');
      const body = element('div', 'answer-body');
      const id = 'answer-' + current + '-' + index;
      body.id = id;
      button.type = 'button';
      button.setAttribute('aria-controls', id);
      button.append(element('span', 'answer-label', item.label), element('span', 'toggle-state'));
      button.addEventListener('click', () => {
        const answered = opened[current];
        if (answered.has(index)) answered.delete(index);
        else answered.add(index);
        updateAnswers();
      });
      typeset(item.answer, body);
      section.append(button, body);
      return section;
    });
    byId('answer-list').replaceChildren(...entries);
    byId('toggle-all').hidden = entries.length < 2;
    updateAnswers();
  }

  function groupFromHash() {
    const fragment = location.hash.slice(1);
    if (/^q-\d+$/.test(fragment)) return Number(fragment.slice(2)) - 1;
    if (/^\d+$/.test(fragment)) {
      const slide = Number(fragment);
      let index = 0;
      groups.forEach((group, i) => { if (group.slide <= slide) index = i; });
      return index;
    }
    return 0;
  }

  function show(index, updateUrl = true) {
    current = Math.min(groups.length - 1, Math.max(0, index));
    const group = groups[current];
    picker.selectedIndex = current;
    byId('group-title').textContent = group.label;
    byId('counter').textContent = (current + 1) + ' / ' + groups.length;
    byId('previous').disabled = !current;
    byId('next').disabled = current === groups.length - 1;
    byId('progress').style.width = (current + 1) / groups.length * 100 + '%';
    byId('lesson-link').href = topic + '-lesson.html?notes=' + (current + 1) + '#' + group.slide;
    byId('video').href = byId('video').dataset.url + (Number.isInteger(group.time) ? '&t=' + group.time + 's' : '');
    byId('video').textContent = Number.isInteger(group.time) ? '本题视频 ↗' : '本节视频 ↗';
    if (pages) {
      const page = pageNumber();
      const pdf = byId('packet');
      pdf.hash = 'page=' + page;
      pdf.textContent = 'Packet · Notes p. ' + page + ' ↗';
      document.querySelector('.paper-ref').textContent = 'FlippedMath · ' + topic + ' Notes · PDF 第 ' + page + ' 页';
      document.querySelector('.map-head small').textContent = 'FlippedMath · ' + topic + ' Notes · p. ' + page;
    }
    byId('map-title').textContent = group.label;
    document.querySelector('.sources').open = false;
    document.querySelector('.answer-panel').scrollTop = 0;
    stage.parentElement.scrollLeft = 0;
    renderAnswers();
    if (updateUrl) {
      history.replaceState(null, '', '#q-' + (current + 1));
      if (matchMedia('(max-width:780px)').matches) window.scrollTo(0, 0);
    }
  }

  groups.forEach((g, index) => picker.add(new Option(g.label, String(index + 1))));
  picker.addEventListener('change', () => show(picker.selectedIndex));
  byId('next').addEventListener('click', () => show(current + 1));
  byId('previous').addEventListener('click', () => show(current - 1));
  byId('toggle-all').addEventListener('click', toggleAll);
  byId('zoom-question').addEventListener('click', event => {
    const enlarged = stage.parentElement.classList.toggle('enlarged');
    event.currentTarget.textContent = enlarged ? '还原题面' : '放大题面';
    event.currentTarget.setAttribute('aria-pressed', String(enlarged));
    paint();
  });
  byId('locate').addEventListener('click', () => { dialog.showModal(); paint(); });
  byId('dismiss').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { byId('map-stage').replaceChildren(); });
  window.addEventListener('hashchange', () => show(groupFromHash(), false));
  document.addEventListener('keydown', event => {
    if (dialog.open || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.target.closest('select,input,textarea,[contenteditable]')) return;
    if (event.key === ' ' && event.target.closest('summary,button,a')) return;
    const destinations = {ArrowRight: current+1, ArrowLeft: current-1, PageDown: current+1, PageUp: current-1, ' ': current+1, Home:0, End:groups.length-1};
    if (Object.hasOwn(destinations, event.key)) {
      event.preventDefault();
      show(destinations[event.key]);
    } else if (event.key.toLowerCase() === 'r') {
      event.preventDefault();
      toggleAll();
    } else if (event.key === 'Escape') {
      document.querySelector('.sources').open = false;
    }
  });
  const fullscreen = byId('fullscreen');
  fullscreen.hidden = !document.fullscreenEnabled;
  fullscreen.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch { fullscreen.hidden = !document.fullscreenEnabled; }
  });
  document.addEventListener('fullscreenchange', () => {
    fullscreen.textContent = document.fullscreenElement ? '退出全屏' : '全屏';
  });
  let redraw = 0;
  function schedulePaint() {
    cancelAnimationFrame(redraw);
    redraw = requestAnimationFrame(paint);
  }
  new ResizeObserver(schedulePaint).observe(stage);
  window.addEventListener('resize', schedulePaint);
  document.fonts.addEventListener('loadingdone', fitInk);
  show(groupFromHash(), false);
})();
