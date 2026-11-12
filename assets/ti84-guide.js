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

const calculatorExamples = {
  zero: { first:'x^3-x-1', window:[0,2.2,-2,6], fields:{ 'zero-left':1, 'zero-right':2 } },
  intersect: { first:'x^2', second:'x+2', window:[-2,3,-1,8], fields:{ 'intersection-left':1, 'intersection-right':3 } },
  derivative: { first:'sin(x)', window:[-4,4,-2,2], fields:{ 'derivative-x':1 }, radians:true },
  integral: { first:'x^2', window:[-1,3,-1,9], fields:{ 'integral-a':0, 'integral-b':2 } }
};
for (const button of document.querySelectorAll('[data-calculator-example]')) {
  button.addEventListener('click', () => {
    const example = calculatorExamples[button.dataset.calculatorExample];
    document.getElementById('graph-expression').value = example.first;
    document.getElementById('graph-expression-two').value = example.second || '';
    ['graph-x-min', 'graph-x-max', 'graph-y-min', 'graph-y-max'].forEach((id, i) => {
      document.getElementById(id).value = example.window[i];
    });
    for (const [id, value] of Object.entries(example.fields)) document.getElementById(id).value = value;
    for (const output of document.querySelectorAll('.local-calculator .numeric-result')) {
      output.textContent = '';
      output.classList.remove('error');
    }
    const mode = document.getElementById('calc-angle-mode');
    if (example.radians && mode.textContent === 'DEG') mode.click();
    document.querySelector('.local-calculator .numeric-tools').open = true;
    document.getElementById('calc-tab-graph').click();
    document.getElementById('graph-draw').click();
  });
}
