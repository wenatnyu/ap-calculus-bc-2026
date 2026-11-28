(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const stage = document.getElementById('stage');
  const picker = document.getElementById('pageChoice');
  const counter = document.getElementById('counter');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const fullscreen = document.getElementById('fullscreen');
  const sources = document.querySelector('.sources');
  let current = 0;
  const returnLink = document.querySelector('.return-paper');
  const group = new URLSearchParams(location.search).get('notes');
  if (returnLink && /^[1-9]\d*$/.test(group)) returnLink.hash = 'q-' + group;

  function pageFromUrl() {
    const requested = Number(location.hash.slice(1));
    return Number.isInteger(requested) && requested > 0 ? Math.min(slides.length, requested) - 1 : 0;
  }

  function show(index, updateUrl = true) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    picker.selectedIndex = current;
    const video = document.getElementById('video');
    const time = Number(slides[current].dataset.videoTime);
    if (Number.isInteger(time) && time >= 0) {
      video.href = video.dataset.url + '&t=' + time + 's';
      const stamp = Math.floor(time / 60) + ':' + String(time % 60).padStart(2, '0');
      video.textContent = '本页视频 · ' + stamp + ' ↗';
    } else {
      video.href = video.dataset.url;
      video.textContent = '原视频 ↗';
    }
    counter.textContent = (current + 1) + ' / ' + slides.length;
    prev.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    document.getElementById('progress').style.width = ((current + 1) / slides.length * 100) + '%';
    stage.scrollTop = 0;
    sources.open = false;
    if (updateUrl) location.replace('#' + (current + 1));
  }

  picker.addEventListener('change', () => show(picker.selectedIndex));
  prev.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  window.addEventListener('hashchange', () => show(pageFromUrl(), false));
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.target.closest('input,select,textarea,[contenteditable]')) return;
    if (event.key === ' ' && event.target.closest('summary,button,a')) return;
    const destinations = {ArrowRight: current + 1, PageDown: current + 1, ' ': current + 1, ArrowLeft: current - 1, PageUp: current - 1, Home: 0, End: slides.length - 1};
    if (Object.hasOwn(destinations, event.key)) {
      event.preventDefault();
      show(destinations[event.key]);
    } else if (event.key.toLowerCase() === 'r') {
      const reveal = slides[current].querySelector('details');
      if (reveal) reveal.open = !reveal.open;
    } else if (event.key === 'Escape') {
      sources.open = false;
    }
  });
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
  show(pageFromUrl(), false);
})();
