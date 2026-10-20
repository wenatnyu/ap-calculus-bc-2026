(() => {
  'use strict';
  const titles = [
    'Transformations of functions', 'One point, two changes', 'Vertical translation',
    'Why a minus sign moves the graph right', 'Checkpoint: input or output?',
    'Vertical scale and reflection', 'Horizontal scale uses the reciprocal',
    'Reflection across the y-axis', 'A claim to challenge', 'Combining transformations',
    'A new graph from four anchor points', 'Domain and range move too',
    'Partner task: build the transformation', 'Partner task: compare your reasoning',
    'Exit ticket', 'The point tells the story', 'Extension: factor the input first',
    'Exit ticket: answers', 'Practice and reference material'
  ];
  const image = document.getElementById('slide-image');
  const status = document.getElementById('slide-status');
  const picker = document.getElementById('slide-picker');
  const previous = document.getElementById('previous');
  const next = document.getElementById('next');
  const fullscreen = document.getElementById('fullscreen');
  const presentation = document.getElementById('presentation');
  const url = n => `../resources/precal/1.12/slides/slide-${String(n).padStart(2, '0')}.png`;
  let current = 1;
  picker.replaceChildren(...titles.map((title, i) => new Option(`${i + 1}. ${title}`, String(i + 1))));
  function show(n) {
    current = Math.max(1, Math.min(titles.length, Number.isFinite(n) ? Math.trunc(n) : 1));
    image.src = url(current);
    image.alt = `Slide ${current}: ${titles[current - 1]}`;
    status.textContent = `${current} / ${titles.length}`;
    picker.value = String(current);
    previous.disabled = current === 1;
    next.disabled = current === titles.length;
    history.replaceState(null, '', `#slide-${current}`);
    document.title = `${current}. ${titles[current - 1]} · Precal`;
    if (current < titles.length) new Image().src = url(current + 1);
  }
  function fromHash() {
    const match = location.hash.match(/^#slide-(\d+)$/);
    show(match ? Number(match[1]) : 1);
  }
  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  picker.addEventListener('change', () => show(Number(picker.value)));
  window.addEventListener('hashchange', fromHash);
  window.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('select, input, textarea, [contenteditable]')) return;
    if (event.key === ' ' && event.target.closest('button, a')) return;
    const actions = {ArrowRight: current + 1, PageDown: current + 1, ' ': current + 1, ArrowLeft: current - 1, PageUp: current - 1, Home: 1, End: titles.length};
    if (Object.hasOwn(actions, event.key)) { event.preventDefault(); show(actions[event.key]); }
  });
  fullscreen.hidden = !document.fullscreenEnabled;
  fullscreen.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await presentation.requestFullscreen();
    } catch { fullscreen.textContent = 'Fullscreen unavailable'; }
  });
  document.addEventListener('fullscreenchange', () => {
    fullscreen.textContent = document.fullscreenElement ? 'Exit fullscreen' : 'Fullscreen';
  });
  fromHash();
})();
