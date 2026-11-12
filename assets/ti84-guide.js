const simulatorButtons = document.querySelectorAll('.sim-switch button');
for (const button of simulatorButtons) {
  button.addEventListener('click', () => {
    document.getElementById('sim-empty').hidden = true;
    for (const choice of simulatorButtons) {
      const active = choice === button;
      const panel = document.getElementById(choice.getAttribute('aria-controls'));
      choice.setAttribute('aria-pressed', String(active));
      panel.hidden = !active;
      if (active) {
        const frame = panel.querySelector('iframe');
        if (!frame.hasAttribute('src')) frame.src = frame.dataset.src;
      }
    }
  });
}
