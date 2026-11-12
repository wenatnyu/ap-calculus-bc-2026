const ti84Toggle = document.getElementById('ti84calc-toggle');
const ti84Panel = document.getElementById('ti84calc-panel');

ti84Toggle.hidden = false;
ti84Toggle.addEventListener('click', () => {
  const opening = ti84Panel.hidden;
  if (opening) {
    const frame = ti84Panel.querySelector('iframe');
    if (!frame.hasAttribute('src')) frame.src = frame.dataset.src;
  }
  ti84Panel.hidden = !opening;
  ti84Toggle.setAttribute('aria-expanded', String(opening));
});
