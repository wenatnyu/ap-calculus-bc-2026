const viewport = document.getElementById('viewport');
const faceplate = document.getElementById('faceplate');

function fitCalculator() {
  const scale = Math.min(viewport.clientWidth / faceplate.offsetWidth,
                         viewport.clientHeight / faceplate.offsetHeight);
  faceplate.style.setProperty('--fit', scale);
}

fitCalculator();
new ResizeObserver(fitCalculator).observe(viewport);

const frame = faceplate.querySelector('iframe');
const loading = document.getElementById('loading');
loading.hidden = false;
frame.addEventListener('load', () => { loading.hidden = true; }, { once: true });
frame.src = frame.dataset.src;
