import initCore, { WasmEmu } from './vendor/emu_core.js';

const FULL_ROM_SIZE = 4 * 1024 * 1024;
const FRAME_MS = 1000 / 60;
const CYCLES_PER_FRAME = 800_000;

// Row and column are the CE hardware key matrix, independent of the visual layout.
const functionKeys = [
  ['Y=', 1, 4, 'STAT PLOT'], ['WINDOW', 1, 3, 'TBLSET'], ['ZOOM', 1, 2, 'FORMAT'],
  ['TRACE', 1, 1, 'CALC'], ['GRAPH', 1, 0, 'TABLE'],
  ['2nd', 1, 5, '', 'second'], ['MODE', 1, 6, 'QUIT'], ['DEL', 1, 7, 'INS'],
  ['ALPHA', 2, 7, 'A-LOCK', 'alpha-key'], ['X,T,θ,n', 3, 7, 'LINK'], ['STAT', 4, 7, 'LIST']
];
const arrows = [
  ['↑', 7, 3, '', 'up', 'Up'], ['←', 7, 1, '', 'left', 'Left'],
  ['→', 7, 2, '', 'right', 'Right'], ['↓', 7, 0, '', 'down', 'Down']
];
const mainKeys = [
  ['MATH', 2, 6, 'TEST'], ['APPS', 3, 6, 'ANGLE'], ['PRGM', 4, 6, 'DRAW'], ['VARS', 5, 6, 'DISTR'], ['CLEAR', 6, 6],
  ['x⁻¹', 2, 5, 'MATRIX'], ['SIN', 3, 5, 'SIN⁻¹'], ['COS', 4, 5, 'COS⁻¹'], ['TAN', 5, 5, 'TAN⁻¹'], ['^', 6, 5, 'π', 'operator', 'Power'],
  ['x²', 2, 4, '√'], [',', 3, 4, 'EE'], ['(', 4, 4, '{'], [')', 5, 4, '}'], ['÷', 6, 4, 'e', 'operator', 'Divide'],
  ['LOG', 2, 3, '10ˣ'], ['7', 3, 3, 'u', 'number'], ['8', 4, 3, 'v', 'number'], ['9', 5, 3, 'w', 'number'], ['×', 6, 3, '[', 'operator', 'Multiply'],
  ['LN', 2, 2, 'eˣ'], ['4', 3, 2, 'L₄', 'number'], ['5', 4, 2, 'L₅', 'number'], ['6', 5, 2, 'L₆', 'number'], ['−', 6, 2, ']', 'operator', 'Subtract'],
  ['STO→', 2, 1, 'RCL'], ['1', 3, 1, 'L₁', 'number'], ['2', 4, 1, 'L₂', 'number'], ['3', 5, 1, 'L₃', 'number'], ['+', 6, 1, 'MEM', 'operator', 'Add'],
  ['ON', 2, 0, 'OFF'], ['0', 3, 0, 'CATALOG', 'number'], ['.', 4, 0, 'i', 'number', 'Decimal point'], ['(−)', 5, 0, 'ANS', '', 'Negation'], ['ENTER', 6, 0, 'ENTRY']
];
const alphaLabels = new Map(Object.entries({
  'Y=': 'F1', WINDOW: 'F2', ZOOM: 'F3', TRACE: 'F4', GRAPH: 'F5',
  MATH: 'A', APPS: 'B', PRGM: 'C', 'x⁻¹': 'D', SIN: 'E', COS: 'F', TAN: 'G', '^': 'H',
  'x²': 'I', ',': 'J', '(': 'K', ')': 'L', '÷': 'M', LOG: 'N', '7': 'O', '8': 'P', '9': 'Q', '×': 'R',
  LN: 'S', '4': 'T', '5': 'U', '6': 'V', '−': 'W', 'STO→': 'X', '1': 'Y', '2': 'Z', '3': 'θ',
  '+': '"', '0': 'SPACE', '.': ':', '(−)': '?', ENTER: 'SOLVE'
}));
const shortcut = new Map(Object.entries({
  '+': '+', '-': '−', '*': '×', '/': '÷', '^': '^', '(': '(', ')': ')', ',': ',', '.': '.',
  x: 'X,T,θ,n', o: 'ON', ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→',
  Escape: 'CLEAR', Backspace: 'DEL', Delete: 'DEL', Enter: 'ENTER'
}));
for (let i = 0; i <= 9; i += 1) shortcut.set(String(i), String(i));

const shell = document.querySelector('.device');
const keypad = document.querySelector('#keypad');
const canvas = document.querySelector('#lcd');
const screenMessage = document.querySelector('#screen-message');
const romInput = document.querySelector('#rom');
const status = document.querySelector('#status');
const pauseButton = document.querySelector('#pause');
const unloadButton = document.querySelector('#unload');
const ctx = canvas.getContext('2d', { alpha: false });
const keys = new Map();
const queue = [];
const holds = new Map();
let image;
let emu;
let corePromise;
let generation = 0;
let paused = false;
let faulted = false;
let powered = false;
let seenLcd = false;
let hasImage = false;
let startFrames = 0;
let frameRequest = 0;
let lastTime = 0;
let elapsed = 0;
let activeKey;
let waitFrames = 0;

function makeKey(spec, directional = false) {
  const [label, row, col, second, style, accessibleName] = spec;
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = label;
  button.disabled = true;
  if (style) button.classList.add(style);
  const alpha = alphaLabels.get(label);
  button.setAttribute('aria-label', `${accessibleName || label}${second ? ` · 2nd: ${second}` : ''}${alpha ? ` · Alpha: ${alpha}` : ''}`);
  button.setAttribute('aria-pressed', 'false');
  keys.set(label, { label, row, col, button });
  if (directional) return button;
  const wrap = document.createElement('div');
  wrap.className = 'key';
  const caption = document.createElement('span');
  caption.className = 'key-caption';
  caption.textContent = second || '';
  caption.setAttribute('aria-hidden', 'true');
  if (alpha) {
    const mark = document.createElement('span');
    mark.className = 'alpha';
    mark.textContent = alpha;
    caption.append(mark);
  }
  wrap.append(caption, button);
  return wrap;
}

const pad = document.createElement('div');
pad.className = 'pad';
keypad.append(...functionKeys.map((spec) => makeKey(spec)));
pad.append(...arrows.map((spec) => makeKey(spec, true)));
keypad.append(pad, ...mainKeys.map((spec) => makeKey(spec)));

function announce(message, error = false) {
  status.textContent = message;
  status.toggleAttribute('data-error', error);
}

function showScreenMessage(message = '') {
  if (screenMessage.textContent !== message) screenMessage.textContent = message;
  screenMessage.hidden = !message;
}

function clearImage() {
  if (!hasImage) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hasImage = false;
}

function toggleControls() {
  for (const key of keys.values()) key.button.disabled = !emu || paused || faulted;
  pauseButton.disabled = !emu || faulted;
  pauseButton.textContent = paused ? '继续' : '暂停';
  unloadButton.disabled = !emu;
}

function setPressed(key, down) {
  key.button.setAttribute('aria-pressed', String(down));
  emu.set_key(key.row, key.col, down);
}

function clearKeys() {
  queue.length = 0;
  holds.clear();
  waitFrames = 0;
  if (!activeKey) return;
  const { key } = activeKey;
  activeKey = null;
  key.button.setAttribute('aria-pressed', 'false');
  if (emu && !faulted) emu.set_key(key.row, key.col, false);
}

function queueKey(label, source) {
  if (!emu || paused || faulted || (!powered && label !== 'ON') || queue.length >= 64) return;
  const entry = { key: keys.get(label), held: Boolean(source), cancelled: false };
  if (source) holds.set(source, entry);
  queue.push(entry);
}

function releaseKey(source, cancelled = false) {
  const entry = holds.get(source);
  if (!entry) return;
  holds.delete(source);
  entry.held = false;
  if (cancelled) entry.cancelled = true;
}

// Give the firmware enough cycles to scan a short tap. Keep a release gap so
// rapid taps are separate key presses (including repeated keys such as 1, 1).
function tick() {
  if (!activeKey) {
    if (waitFrames) waitFrames -= 1;
    else {
      while (queue[0]?.cancelled) queue.shift();
      const entry = queue.shift();
      if (entry) {
        setPressed(entry.key, true);
        if (entry.key.label === 'ON') {
          powered = true;
          startFrames = 0;
        }
        activeKey = { entry, key: entry.key, remaining: entry.key.label === 'ON' ? 12 : 3 };
      }
    }
  }
  if (!powered) return;
  emu.run_cycles(CYCLES_PER_FRAME);
  startFrames += 1;
  if (activeKey) activeKey.remaining = Math.max(0, activeKey.remaining - 1);
  if (activeKey && !activeKey.remaining && !activeKey.entry.held) {
    setPressed(activeKey.key, false);
    activeKey = null;
    waitFrames = 1;
  }
}

function paint() {
  if (!powered) return;
  if (emu.is_lcd_on() && !emu.is_device_off()) {
    image.data.set(emu.get_framebuffer_rgba());
    ctx.putImageData(image, 0, 0);
    hasImage = true;
    if (!seenLcd) {
      seenLcd = true;
      announce('计算器已开机。可以使用屏幕下方的按键。');
    }
    showScreenMessage();
  } else {
    clearImage();
    if (emu.is_device_off()) showScreenMessage('屏幕已关闭，按 ON 唤醒');
    else if (startFrames > 480) showScreenMessage('屏幕未点亮 · 请检查 ROM 型号');
    else showScreenMessage('启动中…');
  }
}

function fail() {
  faulted = true;
  clearKeys();
  toggleControls();
  showScreenMessage('模拟已停止');
  announce('模拟器无法继续运行。请重新导入兼容的 ROM，或使用备用模拟器。', true);
}

function stopLoop() {
  cancelAnimationFrame(frameRequest);
  frameRequest = 0;
  lastTime = 0;
  elapsed = 0;
}

function startLoop() {
  if (!frameRequest && emu && !paused && !faulted && !document.hidden) {
    frameRequest = requestAnimationFrame(step);
  }
}

function step(time) {
  frameRequest = 0;
  if (!emu || paused || faulted || document.hidden) return;
  elapsed += lastTime ? Math.min(50, time - lastTime) : FRAME_MS;
  lastTime = time;
  try {
    let advanced = false;
    while (elapsed >= FRAME_MS) {
      tick();
      elapsed -= FRAME_MS;
      advanced = true;
    }
    if (advanced) paint();
  } catch (error) {
    console.error(error);
    fail();
    return;
  }
  startLoop();
}

function disposeSession() {
  stopLoop();
  clearKeys();
  if (emu) emu.free();
  emu = null;
  paused = false;
  faulted = false;
  powered = false;
  seenLcd = false;
  startFrames = 0;
  clearImage();
  toggleControls();
}

function getCore() {
  if (!corePromise) {
    corePromise = initCore().catch((error) => {
      corePromise = null;
      throw error;
    });
  }
  return corePromise;
}

romInput.addEventListener('change', async () => {
  const file = romInput.files[0];
  romInput.value = '';
  if (!file) return;
  const request = ++generation;
  if (/\.8[ce]u$/i.test(file.name) || file.size !== FULL_ROM_SIZE) {
    announce('请选择 4 MiB 的 TI‑84 Plus CE 完整 ROM。系统升级包无法导入。', true);
    return;
  }
  announce('正在读取本地 ROM…');
  let candidate;
  try {
    const [data] = await Promise.all([file.arrayBuffer(), getCore()]);
    if (request !== generation) return;
    const bytes = new Uint8Array(data);
    const signature = String.fromCharCode(...bytes.subarray(0, 8));
    if (signature === '**TIFL**' || bytes.every((value) => value === bytes[0])) {
      announce('这不是可启动的完整 ROM 镜像。请检查文件。', true);
      return;
    }
    candidate = new WasmEmu();
    if (candidate.load_rom(bytes) !== 0) throw new Error('ROM rejected');
    const nextImage = ctx.createImageData(candidate.framebuffer_width(), candidate.framebuffer_height());
    disposeSession();
    emu = candidate;
    candidate = null;
    image = nextImage;
    toggleControls();
    showScreenMessage('按 ON 开机');
    announce('ROM 已导入。按模拟器的 ON 开机。');
    keys.get('ON').button.focus({ preventScroll: true });
    startLoop();
  } catch (error) {
    if (candidate) candidate.free();
    if (request !== generation) return;
    console.error(error);
    announce('无法导入 ROM。请检查文件，或使用支持 WebAssembly 的新版浏览器。', true);
  }
});

for (const { label, button } of keys.values()) {
  button.addEventListener('pointerdown', (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    button.setPointerCapture(event.pointerId);
    queueKey(label, `pointer:${event.pointerId}`);
  });
  button.addEventListener('pointerup', (event) => releaseKey(`pointer:${event.pointerId}`));
  button.addEventListener('pointercancel', (event) => releaseKey(`pointer:${event.pointerId}`, true));
  button.addEventListener('lostpointercapture', (event) => releaseKey(`pointer:${event.pointerId}`));
  button.addEventListener('click', (event) => {
    // Keyboard and assistive technology clicks have no preceding pointerdown.
    if (event.detail === 0) queueKey(label);
  });
}

shell.addEventListener('keydown', (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.isComposing) return;
  if (event.key === 'Enter' && event.target instanceof HTMLButtonElement) return;
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  const label = shortcut.get(key);
  if (!label) return;
  event.preventDefault();
  if (!event.repeat) queueKey(label, `keyboard:${event.code || event.key}`);
});

window.addEventListener('keyup', (event) => releaseKey(`keyboard:${event.code || event.key}`));
window.addEventListener('blur', () => clearKeys());

pauseButton.addEventListener('click', () => {
  paused = !paused;
  if (paused) {
    stopLoop();
    clearKeys();
    announce('已暂停。');
  } else {
    announce(powered ? '模拟已继续。' : '模拟已继续。按 ON 开机。');
    startLoop();
  }
  toggleControls();
});

unloadButton.addEventListener('click', () => {
  generation += 1;
  disposeSession();
  showScreenMessage('等待导入 ROM');
  announce('已卸载。本站不保存 ROM。');
  romInput.focus();
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    stopLoop();
    clearKeys();
  } else {
    startLoop();
  }
});

if (!ctx) {
  romInput.disabled = true;
  announce('浏览器无法初始化屏幕。可返回 Calculator Lab 使用备用模拟器。', true);
}
