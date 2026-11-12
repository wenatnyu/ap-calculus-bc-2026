/* First-party classroom calculator: no network services or third-party code. */
(() => {
  "use strict";
  const root = document.querySelector(".local-calculator");
  if (!root) return;
  const byId = (id) => root.querySelector("#" + id);

  const calculatorStorageKey = "ap-calculus-classroom-calculator-v1";
  const calculatorExpression = byId("calc-expression");
  const calculatorResult = byId("calc-result");
  const calculatorStatus = byId("calc-status");
  const calculatorModeButton = byId("calc-angle-mode");
  const calculatorFunctions = new Set(["sin", "cos", "tan", "asin", "acos", "atan", "ln", "log", "sqrt", "abs"]);
  const calculatorConstants = new Set(["pi", "e", "ans"]);
  let calculatorJustEvaluated = false;
  let calculatorState = loadCalculatorState();
  let graphTraceX = null;

  function defaultCalculatorState() {
    return { angle:"RAD", answer:0, history:[] };
  }

  function loadCalculatorState() {
    try {
      const saved = JSON.parse(localStorage.getItem(calculatorStorageKey) || "null");
      if (!saved) return defaultCalculatorState();
      const history = Array.isArray(saved.history)
        ? saved.history.filter((entry) =>
            entry &&
            typeof entry.expression === "string" &&
            typeof entry.result === "string" &&
            Number.isFinite(entry.value)
          ).slice(0, 8)
        : [];
      return {
        angle:saved.angle === "DEG" ? "DEG" : "RAD",
        answer:Number.isFinite(saved.answer) ? saved.answer : 0,
        history
      };
    } catch (error) {
      return defaultCalculatorState();
    }
  }

  function saveCalculatorState() {
    try {
      localStorage.setItem(calculatorStorageKey, JSON.stringify(calculatorState));
    } catch (error) {
      /* Calculator remains usable when browser storage is unavailable. */
    }
  }

  function normalizeCalculatorExpression(source) {
    return String(source)
      .replace(/[×·]/g, "*")
      .replace(/÷/g, "/")
      .replace(/[−–—]/g, "-")
      .replace(/π/g, "pi")
      .replace(/√/g, "sqrt")
      .trim();
  }

  function tokenizeCalculator(source) {
    const input = normalizeCalculatorExpression(source);
    if (!input) return [];
    if (input.length > 160) throw new Error("Expression is too long / 表达式过长");
    const rawTokens = [];
    let index = 0;

    while (index < input.length) {
      const character = input[index];
      if (/\s/.test(character)) {
        index += 1;
        continue;
      }

      const numberMatch = input.slice(index).match(/^(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/);
      if (numberMatch) {
        const value = Number(numberMatch[0]);
        if (!Number.isFinite(value)) throw new Error("Number is out of range / 数值超出范围");
        rawTokens.push({ type:"number", value });
        index += numberMatch[0].length;
        continue;
      }

      const identifierMatch = input.slice(index).match(/^[A-Za-z]+/);
      if (identifierMatch) {
        const identifier = identifierMatch[0].toLowerCase();
        if (calculatorFunctions.has(identifier)) rawTokens.push({ type:"function", value:identifier });
        else if (calculatorConstants.has(identifier)) rawTokens.push({ type:"constant", value:identifier });
        else if (identifier === "x") rawTokens.push({ type:"variable", value:"x" });
        else throw new Error("Unknown name: " + identifier + " / 未知名称");
        index += identifierMatch[0].length;
        continue;
      }

      if ("+-*/^".includes(character)) rawTokens.push({ type:"operator", value:character });
      else if (character === "(") rawTokens.push({ type:"left", value:character });
      else if (character === ")") rawTokens.push({ type:"right", value:character });
      else throw new Error("Unsupported symbol: " + character + " / 不支持的符号");
      index += 1;
    }

    const tokens = [];
    rawTokens.forEach((token) => {
      const previous = tokens[tokens.length - 1];
      const previousEndsValue = previous && ["number", "constant", "variable", "right"].includes(previous.type);
      const currentStartsValue = ["constant", "variable", "function", "left"].includes(token.type);
      if (previousEndsValue && currentStartsValue) tokens.push({ type:"operator", value:"*" });
      tokens.push(token);
    });
    return tokens;
  }

  function applyCalculatorFunction(name, value) {
    if (name === "sqrt") {
      if (value < 0) throw new Error("Square root needs a nonnegative input / 根号内须非负");
      return Math.sqrt(value);
    }
    if (name === "ln" || name === "log") {
      if (value <= 0) throw new Error("Logarithms need a positive input / 对数真数须为正");
      return name === "ln" ? Math.log(value) : Math.log(value) / Math.LN10;
    }
    if (name === "abs") return Math.abs(value);

    if (name === "asin" || name === "acos") {
      if (value < -1 || value > 1) throw new Error("Inverse trig input must be from -1 to 1 / 反三角函数输入须在 -1 到 1 之间");
      const radians = name === "asin" ? Math.asin(value) : Math.acos(value);
      return calculatorState.angle === "DEG" ? radians * 180 / Math.PI : radians;
    }
    if (name === "atan") {
      const radians = Math.atan(value);
      return calculatorState.angle === "DEG" ? radians * 180 / Math.PI : radians;
    }

    const angle = calculatorState.angle === "DEG" ? value * Math.PI / 180 : value;
    if (name === "sin") return Math.sin(angle);
    if (name === "cos") return Math.cos(angle);
    if (name === "tan") {
      if (Math.abs(Math.cos(angle)) < 1e-12) throw new Error("Tangent is undefined here / 此处正切无定义");
      return Math.tan(angle);
    }
    throw new Error("Unknown function / 未知函数");
  }

  function parseCalculatorExpression(source, variables = {}, preparedTokens = null) {
    const tokens = preparedTokens || tokenizeCalculator(source);
    if (!tokens.length) throw new Error("Enter an expression / 请输入表达式");
    let position = 0;

    function current() {
      return tokens[position];
    }

    function take(type, value) {
      const token = current();
      if (!token || token.type !== type || (value !== undefined && token.value !== value)) return null;
      position += 1;
      return token;
    }

    function require(type, value) {
      const token = take(type, value);
      if (!token) throw new Error("Syntax error / 表达式错误");
      return token;
    }

    function parsePrimary() {
      const number = take("number");
      if (number) return number.value;

      const constant = take("constant");
      if (constant) {
        if (constant.value === "pi") return Math.PI;
        if (constant.value === "e") return Math.E;
        return calculatorState.answer;
      }

      const variable = take("variable");
      if (variable) {
        if (!Number.isFinite(variables.x)) throw new Error("x is available only in Graph view / x 仅用于图像");
        return variables.x;
      }

      const functionToken = take("function");
      if (functionToken) {
        require("left");
        const value = parseAddSubtract();
        require("right");
        return applyCalculatorFunction(functionToken.value, value);
      }

      if (take("left")) {
        const value = parseAddSubtract();
        require("right");
        return value;
      }
      throw new Error("Expected a number or function / 需要数字或函数");
    }

    function parsePower() {
      let value = parsePrimary();
      if (take("operator", "^")) value = Math.pow(value, parseUnary());
      return value;
    }

    function parseUnary() {
      if (take("operator", "+")) return parseUnary();
      if (take("operator", "-")) return -parseUnary();
      return parsePower();
    }

    function parseMultiplyDivide() {
      let value = parseUnary();
      while (current() && current().type === "operator" && ["*", "/"].includes(current().value)) {
        const operator = current().value;
        position += 1;
        const right = parseUnary();
        if (operator === "*") value *= right;
        else {
          if (right === 0) throw new Error("Cannot divide by zero / 不能除以零");
          value /= right;
        }
      }
      return value;
    }

    function parseAddSubtract() {
      let value = parseMultiplyDivide();
      while (current() && current().type === "operator" && ["+", "-"].includes(current().value)) {
        const operator = current().value;
        position += 1;
        const right = parseMultiplyDivide();
        value = operator === "+" ? value + right : value - right;
      }
      return value;
    }

    const value = parseAddSubtract();
    if (position !== tokens.length) throw new Error("Syntax error / 表达式错误");
    if (!Number.isFinite(value)) throw new Error("Math error or result out of range / 数学错误或结果超出范围");
    return value;
  }

  function formatCalculatorNumber(value, significantDigits = 12) {
    let cleanValue = Math.abs(value) < 1e-14 ? 0 : value;
    if (Object.is(cleanValue, -0)) cleanValue = 0;
    const absolute = Math.abs(cleanValue);
    if (absolute && (absolute >= 1e12 || absolute < 1e-9)) {
      return cleanValue.toExponential(Math.max(1, significantDigits - 2)).replace(/\.?0+e/, "e");
    }
    return String(Number(cleanValue.toPrecision(significantDigits)));
  }

  function updateCalculatorMode(message) {
    calculatorModeButton.textContent = calculatorState.angle;
    calculatorModeButton.setAttribute("aria-label", "Angle mode " + calculatorState.angle + ". Switch mode.");
    calculatorStatus.textContent = calculatorState.angle + (message ? " · " + message : " · Ready / 就绪");
  }

  function showCalculatorError(message) {
    calculatorResult.classList.add("error");
    calculatorResult.textContent = message;
    updateCalculatorMode("Error / 错误");
    calculatorJustEvaluated = false;
  }

  function renderCalculatorHistory() {
    const list = byId("calc-history-list");
    const empty = byId("calc-history-empty");
    list.replaceChildren();
    calculatorState.history.forEach((entry) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", "Reuse " + entry.expression + ", result " + entry.result);
      const expression = document.createElement("span");
      expression.className = "history-expression";
      expression.textContent = entry.expression;
      const result = document.createElement("span");
      result.className = "history-result";
      result.textContent = "= " + entry.result;
      button.append(expression, result);
      button.addEventListener("click", () => {
        calculatorState.angle = entry.angle === "DEG" ? "DEG" : "RAD";
        updateCalculatorMode("History restored / 已恢复历史模式");
        calculatorExpression.value = entry.expression;
        calculatorResult.classList.remove("error");
        calculatorResult.textContent = entry.result;
        calculatorJustEvaluated = false;
        calculatorExpression.focus();
      });
      item.append(button);
      list.append(item);
    });
    empty.hidden = calculatorState.history.length > 0;
  }

  function insertCalculatorText(text) {
    const isOperator = /^[+\-*/^]$/.test(text);
    if (calculatorJustEvaluated) {
      calculatorExpression.value = isOperator ? "Ans" : "";
      calculatorJustEvaluated = false;
    }
    const start = calculatorExpression.selectionStart ?? calculatorExpression.value.length;
    const end = calculatorExpression.selectionEnd ?? start;
    calculatorExpression.setRangeText(text, start, end, "end");
    calculatorResult.classList.remove("error");
    updateCalculatorMode("Editing / 输入中");
    calculatorExpression.focus();
  }

  function backspaceCalculator() {
    const start = calculatorExpression.selectionStart ?? calculatorExpression.value.length;
    const end = calculatorExpression.selectionEnd ?? start;
    if (start !== end) calculatorExpression.setRangeText("", start, end, "end");
    else if (start > 0) calculatorExpression.setRangeText("", start - 1, start, "end");
    calculatorJustEvaluated = false;
    calculatorExpression.focus();
  }

  function wrapCalculatorExpression(prefix, suffix) {
    const expression = calculatorExpression.value.trim() || "Ans";
    calculatorExpression.value = prefix + expression + suffix;
    calculatorJustEvaluated = false;
    calculatorExpression.focus();
  }

  function calculateCurrentExpression() {
    const expression = calculatorExpression.value.trim();
    if (!expression) return;
    try {
      const value = parseCalculatorExpression(expression);
      const formatted = formatCalculatorNumber(value);
      calculatorState.answer = value;
      calculatorState.history.unshift({
        expression:expression.slice(0, 160),
        result:formatted,
        value,
        angle:calculatorState.angle
      });
      calculatorState.history = calculatorState.history.slice(0, 8);
      saveCalculatorState();
      renderCalculatorHistory();
      calculatorResult.classList.remove("error");
      calculatorResult.textContent = formatted;
      updateCalculatorMode("Saved as Ans / 已存为 Ans");
      calculatorJustEvaluated = true;
    } catch (error) {
      showCalculatorError(error instanceof Error ? error.message : "Calculator error / 计算错误");
    }
  }

  calculatorModeButton.addEventListener("click", () => {
    calculatorState.angle = calculatorState.angle === "RAD" ? "DEG" : "RAD";
    saveCalculatorState();
    updateCalculatorMode();
    if (!byId("calc-panel-graph").hidden) drawCalculatorGraph(graphTraceX);
    else if (window.matchMedia("(pointer:fine)").matches) calculatorExpression.focus();
  });

  calculatorExpression.addEventListener("input", () => {
    calculatorJustEvaluated = false;
    calculatorResult.classList.remove("error");
    updateCalculatorMode("Editing / 输入中");
  });
  calculatorExpression.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === "=") {
      event.preventDefault();
      calculateCurrentExpression();
    }
  });

  byId("calc-keypad").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.insert !== undefined) {
      insertCalculatorText(button.dataset.insert);
      return;
    }
    const action = button.dataset.action;
    if (action === "calculate") calculateCurrentExpression();
    else if (action === "clear") {
      calculatorExpression.value = "";
      calculatorResult.classList.remove("error");
      calculatorResult.textContent = "0";
      calculatorJustEvaluated = false;
      updateCalculatorMode();
      calculatorExpression.focus();
    } else if (action === "backspace") backspaceCalculator();
    else if (action === "square") wrapCalculatorExpression("(", ")^2");
    else if (action === "reciprocal") wrapCalculatorExpression("1/(", ")");
    else if (action === "negate") {
      const expression = calculatorExpression.value.trim();
      if (expression.startsWith("-(") && expression.endsWith(")")) {
        calculatorExpression.value = expression.slice(2, -1);
        calculatorExpression.focus();
      } else wrapCalculatorExpression("-(", ")");
    }
  });

  byId("calc-clear-history").addEventListener("click", () => {
    calculatorState.history = [];
    saveCalculatorState();
    renderCalculatorHistory();
  });

  function setCalculatorTab(name, focusTab = false) {
    const scientific = name === "scientific";
    byId("calc-panel-scientific").hidden = !scientific;
    byId("calc-panel-graph").hidden = scientific;
    byId("calc-tab-scientific").setAttribute("aria-selected", String(scientific));
    byId("calc-tab-graph").setAttribute("aria-selected", String(!scientific));
    byId("calc-tab-scientific").tabIndex = scientific ? 0 : -1;
    byId("calc-tab-graph").tabIndex = scientific ? -1 : 0;
    if (focusTab) byId(scientific ? "calc-tab-scientific" : "calc-tab-graph").focus();
    else if (scientific && window.matchMedia("(pointer:fine)").matches) calculatorExpression.focus();
    if (!scientific) window.requestAnimationFrame(() => drawCalculatorGraph(graphTraceX));
  }

  byId("calc-tab-scientific").addEventListener("click", () => setCalculatorTab("scientific"));
  byId("calc-tab-graph").addEventListener("click", () => setCalculatorTab("graph"));
  [byId("calc-tab-scientific"), byId("calc-tab-graph")].forEach((tab) => {
    tab.addEventListener("keydown", (event) => {
      if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        const target = event.key === "Home"
          ? "scientific"
          : event.key === "End"
            ? "graph"
            : tab.id === "calc-tab-scientific" ? "graph" : "scientific";
        setCalculatorTab(target, true);
      }
    });
  });

  function readGraphWindow() {
    const values = {
      xMin:Number(byId("graph-x-min").value),
      xMax:Number(byId("graph-x-max").value),
      yMin:Number(byId("graph-y-min").value),
      yMax:Number(byId("graph-y-max").value)
    };
    if (!Object.values(values).every(Number.isFinite)) throw new Error("Window values must be numbers / 窗口须为数字");
    if (values.xMin >= values.xMax || values.yMin >= values.yMax) throw new Error("Minimum must be less than maximum / 最小值须小于最大值");
    if (values.xMax - values.xMin > 1e9 || values.yMax - values.yMin > 1e9) throw new Error("Window is too large / 窗口范围过大");
    return values;
  }

  function niceGraphStep(span) {
    const raw = Math.abs(span) / 8;
    const power = Math.pow(10, Math.floor(Math.log10(raw)));
    const fraction = raw / power;
    const multiple = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return multiple * power;
  }

  function drawCalculatorGraph(traceX = null) {
    const canvas = byId("graph-canvas");
    const rectangle = canvas.getBoundingClientRect();
    const width = Math.round(rectangle.width);
    const height = Math.round(rectangle.height);
    if (width < 180 || height < 100 || byId("calc-panel-graph").hidden) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    const context = canvas.getContext("2d");
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#060a16";
    context.fillRect(0, 0, width, height);

    const message = byId("graph-message");
    const readout = byId("graph-readout");
    try {
      const windowValues = readGraphWindow();
      const curves = [{ ...currentGraphEvaluator(), label:"Y₁", color:"#79edbb" }];
      if (byId("graph-expression-two").value.trim()) {
        curves.push({ ...currentGraphEvaluator("graph-expression-two", "Y₂"), label:"Y₂", color:"#e0aaff" });
      }
      const xSpan = windowValues.xMax - windowValues.xMin;
      const ySpan = windowValues.yMax - windowValues.yMin;
      const toPixelX = (x) => (x - windowValues.xMin) / xSpan * width;
      const toPixelY = (y) => height - (y - windowValues.yMin) / ySpan * height;

      context.lineWidth = 1;
      context.strokeStyle = "rgba(183,195,218,.13)";
      context.fillStyle = "rgba(183,195,218,.58)";
      context.font = "10px -apple-system, sans-serif";
      const xStep = niceGraphStep(xSpan);
      const yStep = niceGraphStep(ySpan);
      let lineCount = 0;

      for (let value = Math.ceil(windowValues.xMin / xStep) * xStep; value <= windowValues.xMax + xStep * .001 && lineCount < 50; value += xStep, lineCount += 1) {
        const pixel = toPixelX(value);
        context.beginPath();
        context.moveTo(pixel, 0);
        context.lineTo(pixel, height);
        context.stroke();
        context.fillText(formatCalculatorNumber(value, 5), Math.min(width - 34, pixel + 3), height - 6);
      }
      lineCount = 0;
      for (let value = Math.ceil(windowValues.yMin / yStep) * yStep; value <= windowValues.yMax + yStep * .001 && lineCount < 50; value += yStep, lineCount += 1) {
        const pixel = toPixelY(value);
        context.beginPath();
        context.moveTo(0, pixel);
        context.lineTo(width, pixel);
        context.stroke();
        context.fillText(formatCalculatorNumber(value, 5), 4, Math.max(11, pixel - 3));
      }

      context.strokeStyle = "rgba(248,248,255,.5)";
      context.lineWidth = 1.25;
      if (windowValues.xMin <= 0 && windowValues.xMax >= 0) {
        const axis = toPixelX(0);
        context.beginPath();
        context.moveTo(axis, 0);
        context.lineTo(axis, height);
        context.stroke();
      }
      if (windowValues.yMin <= 0 && windowValues.yMax >= 0) {
        const axis = toPixelY(0);
        context.beginPath();
        context.moveTo(0, axis);
        context.lineTo(width, axis);
        context.stroke();
      }

      context.lineWidth = 2;
      for (const curve of curves) {
        context.strokeStyle = curve.color;
        context.setLineDash(curve.label === "Y₂" ? [6, 4] : []);
        context.beginPath();
        let validPoints = 0;
        let previousPixelY = null;
        let firstError = null;
        for (let pixelX = 0; pixelX <= width; pixelX += 1) {
          const x = windowValues.xMin + pixelX / width * xSpan;
          try {
            const pixelY = toPixelY(curve.evaluate(x));
            const visibleEnough = pixelY > -height * 2 && pixelY < height * 3;
            if (!visibleEnough || previousPixelY === null || Math.abs(pixelY - previousPixelY) > height * 1.4) context.moveTo(pixelX, pixelY);
            else context.lineTo(pixelX, pixelY);
            previousPixelY = visibleEnough ? pixelY : null;
            validPoints += 1;
          } catch (error) {
            if (!firstError) firstError = error;
            previousPixelY = null;
          }
        }
        context.stroke();
        if (validPoints < 2) throw firstError || new Error(curve.label + ": No real-valued points / 没有可绘制的实数点");
      }
      context.setLineDash([]);

      if (Number.isFinite(traceX) && traceX >= windowValues.xMin && traceX <= windowValues.xMax) {
        const readings = curves.map(curve => {
          try {
            const traceY = curve.evaluate(traceX);
            const pixelY = toPixelY(traceY);
            if (pixelY >= 0 && pixelY <= height) {
              context.fillStyle = curve.color;
              context.beginPath();
              context.arc(toPixelX(traceX), pixelY, 4.5, 0, Math.PI * 2);
              context.fill();
            }
            return curve.label + " = " + formatCalculatorNumber(traceY, 7);
          } catch {
            return curve.label + " 无定义";
          }
        });
        readout.textContent = ["x = " + formatCalculatorNumber(traceX, 7), ...readings].join(" · ");
      } else {
        readout.textContent = [...curves.map(curve => curve.label + " = " + curve.expression), calculatorState.angle].join(" · ");
      }
      message.textContent = "Click or drag to trace. / 点击或拖动读取坐标。";
    } catch (error) {
      readout.textContent = "Graph error / 作图错误";
      message.textContent = error instanceof Error ? error.message : "Unable to graph / 无法作图";
    }
  }

  function currentGraphEvaluator(id = "graph-expression", label = "Y₁") {
    const expression = byId(id).value.trim();
    if (!expression) throw new Error("Enter " + label + " as a function of x / 请输入 " + label);
    const preparedTokens = tokenizeCalculator(expression);
    if (!preparedTokens.length) throw new Error("Enter a function of x / 请输入关于 x 的函数");
    return {
      expression,
      evaluate:(x) => parseCalculatorExpression(expression, { x }, preparedTokens)
    };
  }

  function readNumericField(id, label) {
    const source = byId(id).value.trim();
    if (!source) throw new Error(label + " is required / 请输入" + label);
    return parseCalculatorExpression(source);
  }

  function showNumericResult(id, label, value) {
    const output = byId(id);
    const formatted = formatCalculatorNumber(value, 11);
    output.classList.remove("error");
    output.textContent = label + " ≈ " + formatted + " · " + calculatorState.angle + " · saved as Ans / 已存为 Ans";
    calculatorState.answer = value;
    saveCalculatorState();
  }

  function showNumericError(id, error) {
    const output = byId(id);
    output.classList.add("error");
    output.textContent = error instanceof Error ? error.message : "Numerical method failed / 数值计算失败";
  }

  function findVerifiedZero(evaluate, left, right) {
    if (!(left < right)) throw new Error("Left bound must be less than right bound / 左端点须小于右端点");
    if (right - left > 1e9) throw new Error("Search interval is too large / 搜索区间过大");
    const sampleCount = 400;
    const step = (right - left) / sampleCount;
    const directRoots = [];
    const brackets = [];
    let previous = null;
    let best = null;
    let invalidSamples = 0;

    for (let index = 0; index <= sampleCount; index += 1) {
      const x = index === sampleCount ? right : left + index * step;
      try {
        const y = evaluate(x);
        const magnitude = Math.abs(y);
        if (!best || magnitude < best.magnitude) best = { x, magnitude };
        if (magnitude <= 1e-10) {
          if (!directRoots.length || Math.abs(x - directRoots[directRoots.length - 1]) > step * .55) directRoots.push(x);
          previous = null;
          continue;
        }
        if (previous && Math.sign(previous.y) !== Math.sign(y)) brackets.push([previous.x, x, previous.y, y]);
        previous = { x, y };
      } catch (error) {
        invalidSamples += 1;
        previous = null;
      }
    }

    if (directRoots.length + brackets.length > 1) throw new Error("More than one zero found; use a smaller interval / 检出多个零点，请缩小区间");
    if (directRoots.length === 1) return directRoots[0];

    if (brackets.length === 1) {
      let [a, b, fa, fb] = brackets[0];
      for (let iteration = 0; iteration < 100; iteration += 1) {
        const midpoint = (a + b) / 2;
        const fm = evaluate(midpoint);
        if (Math.abs(fm) <= 1e-11 || Math.abs(b - a) <= 1e-11 * Math.max(1, Math.abs(midpoint))) {
          if (Math.abs(fm) > 1e-7) throw new Error("Sign change may be a discontinuity, not a zero / 变号处可能是不连续点而非零点");
          return midpoint;
        }
        if (Math.sign(fa) === Math.sign(fm)) {
          a = midpoint;
          fa = fm;
        } else {
          b = midpoint;
          fb = fm;
        }
      }
      const root = (a + b) / 2;
      if (Math.abs(evaluate(root)) <= 1e-7) return root;
      throw new Error("Zero did not converge / 零点计算未收敛");
    }

    if (best) {
      let a = Math.max(left, best.x - step);
      let b = Math.min(right, best.x + step);
      const ratio = (Math.sqrt(5) - 1) / 2;
      let c = b - ratio * (b - a);
      let d = a + ratio * (b - a);
      let fc = Math.abs(evaluate(c));
      let fd = Math.abs(evaluate(d));
      for (let iteration = 0; iteration < 80; iteration += 1) {
        if (fc <= fd) {
          b = d;
          d = c;
          fd = fc;
          c = b - ratio * (b - a);
          fc = Math.abs(evaluate(c));
        } else {
          a = c;
          c = d;
          fc = fd;
          d = a + ratio * (b - a);
          fd = Math.abs(evaluate(d));
        }
      }
      const candidate = fc <= fd ? c : d;
      if (Math.abs(evaluate(candidate)) <= 1e-8) return candidate;
    }

    if (invalidSamples) throw new Error("Function is undefined in the interval; use a continuous interval / 区间内函数无定义，请选连续区间");
    throw new Error("No verified zero found; try a smaller interval / 未找到可验证零点，请缩小区间");
  }

  function numericalDerivative(evaluate, x) {
    let h = Math.cbrt(Number.EPSILON) * Math.max(1, Math.abs(x));
    while (x + h === x || x - h === x) h *= 2;
    const center = evaluate(x);
    const leftValue = evaluate(x - h);
    const rightValue = evaluate(x + h);
    const leftSlope = (center - leftValue) / h;
    const rightSlope = (rightValue - center) / h;
    const sideScale = Math.max(1, Math.abs(leftSlope), Math.abs(rightSlope));
    if (Math.abs(leftSlope - rightSlope) > 1e-4 * sideScale) throw new Error("Left and right slopes disagree; derivative may not exist / 左右斜率不一致，导数可能不存在");

    const half = h / 2;
    const d1 = (rightValue - leftValue) / (2 * h);
    const d2 = (evaluate(x + half) - evaluate(x - half)) / (2 * half);
    const result = d2 + (d2 - d1) / 3;
    if (!Number.isFinite(result)) throw new Error("Derivative did not converge / 导数计算未收敛");
    return result;
  }

  function numericalIntegral(evaluate, lower, upper) {
    if (lower === upper) return 0;
    let sign = 1;
    let a = lower;
    let b = upper;
    if (a > b) {
      sign = -1;
      [a, b] = [b, a];
    }
    if (b - a > 1e9) throw new Error("Integration interval is too large / 积分区间过大");
    let evaluations = 0;
    const safeEvaluate = (x) => {
      evaluations += 1;
      if (evaluations > 50000) throw new Error("Integral exceeded the calculation limit / 积分超过计算上限");
      return evaluate(x);
    };
    const simpson = (left, right, fLeft, fMiddle, fRight) => (right - left) * (fLeft + 4 * fMiddle + fRight) / 6;

    function adapt(left, right, fLeft, fMiddle, fRight, whole, tolerance, depth) {
      const middle = (left + right) / 2;
      const leftMiddle = (left + middle) / 2;
      const rightMiddle = (middle + right) / 2;
      const fLeftMiddle = safeEvaluate(leftMiddle);
      const fRightMiddle = safeEvaluate(rightMiddle);
      const leftEstimate = simpson(left, middle, fLeft, fLeftMiddle, fMiddle);
      const rightEstimate = simpson(middle, right, fMiddle, fRightMiddle, fRight);
      const delta = leftEstimate + rightEstimate - whole;
      if (Math.abs(delta) <= 15 * tolerance) return leftEstimate + rightEstimate + delta / 15;
      if (depth <= 0) throw new Error("Integral did not converge; check for a discontinuity / 积分未收敛，请检查不连续点");
      return adapt(left, middle, fLeft, fLeftMiddle, fMiddle, leftEstimate, tolerance / 2, depth - 1)
        + adapt(middle, right, fMiddle, fRightMiddle, fRight, rightEstimate, tolerance / 2, depth - 1);
    }

    const panels = 16;
    const panelWidth = (b - a) / panels;
    let total = 0;
    let compensation = 0;
    for (let index = 0; index < panels; index += 1) {
      const left = a + index * panelWidth;
      const right = index === panels - 1 ? b : left + panelWidth;
      const middle = (left + right) / 2;
      const fLeft = safeEvaluate(left);
      const fMiddle = safeEvaluate(middle);
      const fRight = safeEvaluate(right);
      const whole = simpson(left, right, fLeft, fMiddle, fRight);
      const tolerance = (1e-10 + 1e-9 * Math.abs(whole)) / panels;
      const panelValue = adapt(left, right, fLeft, fMiddle, fRight, whole, tolerance, 18);
      const adjusted = panelValue - compensation;
      const next = total + adjusted;
      compensation = (next - total) - adjusted;
      total = next;
    }
    return sign * total;
  }

  byId("numeric-zero").addEventListener("click", () => {
    try {
      const { evaluate } = currentGraphEvaluator();
      const left = readNumericField("zero-left", "left bound");
      const right = readNumericField("zero-right", "right bound");
      showNumericResult("zero-result", "x", findVerifiedZero(evaluate, left, right));
    } catch (error) {
      showNumericError("zero-result", error);
    }
  });

  byId("numeric-intersection").addEventListener("click", () => {
    const id = "intersection-result";
    try {
      const first = currentGraphEvaluator();
      const second = currentGraphEvaluator("graph-expression-two", "Y₂");
      const left = readNumericField("intersection-left", "left bound");
      const right = readNumericField("intersection-right", "right bound");
      const x = findVerifiedZero(t => first.evaluate(t) - second.evaluate(t), left, right);
      const y = first.evaluate(x);
      const output = byId(id);
      output.classList.remove("error");
      output.textContent = "x ≈ " + formatCalculatorNumber(x, 11) + " · y ≈ " + formatCalculatorNumber(y, 11);
      graphTraceX = x;
      drawCalculatorGraph(x);
    } catch (error) {
      showNumericError(id, error instanceof Error
        ? new Error(error.message.replace("More than one zero found", "More than one intersection found").replace("检出多个零点", "检出多个交点"))
        : error);
    }
  });

  byId("numeric-derivative").addEventListener("click", () => {
    try {
      const { evaluate } = currentGraphEvaluator();
      const x = readNumericField("derivative-x", "x");
      showNumericResult("derivative-result", "f′(" + formatCalculatorNumber(x, 7) + ")", numericalDerivative(evaluate, x));
    } catch (error) {
      showNumericError("derivative-result", error);
    }
  });

  byId("numeric-integral").addEventListener("click", () => {
    try {
      const { evaluate } = currentGraphEvaluator();
      const lower = readNumericField("integral-a", "lower bound");
      const upper = readNumericField("integral-b", "upper bound");
      showNumericResult("integral-result", "Integral", numericalIntegral(evaluate, lower, upper));
    } catch (error) {
      showNumericError("integral-result", error);
    }
  });

  root.querySelectorAll(".numeric-tools input").forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      input.closest(".numeric-row").querySelector("button").click();
    });
  });

  let traceFrame = 0;
  let pendingTraceX = null;

  function traceGraphAtEvent(event) {
    const canvas = byId("graph-canvas");
    const rectangle = canvas.getBoundingClientRect();
    try {
      const windowValues = readGraphWindow();
      const fraction = Math.max(0, Math.min(1, (event.clientX - rectangle.left) / rectangle.width));
      pendingTraceX = windowValues.xMin + fraction * (windowValues.xMax - windowValues.xMin);
      if (!traceFrame) {
        traceFrame = window.requestAnimationFrame(() => {
          traceFrame = 0;
          graphTraceX = pendingTraceX;
          drawCalculatorGraph(graphTraceX);
        });
      }
    } catch (error) {
      byId("graph-message").textContent = error instanceof Error ? error.message : "Unable to trace / 无法读取";
    }
  }

  let graphTracing = false;
  byId("graph-canvas").addEventListener("pointerdown", (event) => {
    graphTracing = true;
    byId("graph-canvas").setPointerCapture(event.pointerId);
    traceGraphAtEvent(event);
  });
  byId("graph-canvas").addEventListener("pointermove", (event) => {
    if (graphTracing) traceGraphAtEvent(event);
  });
  byId("graph-canvas").addEventListener("pointerup", () => { graphTracing = false; });
  byId("graph-canvas").addEventListener("pointercancel", () => { graphTracing = false; });

  byId("graph-draw").addEventListener("click", () => {
    graphTraceX = null;
    drawCalculatorGraph();
  });
  for (const id of ["graph-expression", "graph-expression-two"]) {
    byId(id).addEventListener("keydown", event => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      byId("graph-draw").click();
    });
  }
  byId("graph-standard").addEventListener("click", () => {
    byId("graph-x-min").value = "-10";
    byId("graph-x-max").value = "10";
    byId("graph-y-min").value = "-10";
    byId("graph-y-max").value = "10";
    graphTraceX = null;
    drawCalculatorGraph();
  });

  renderCalculatorHistory();
  updateCalculatorMode();
  calculatorResult.textContent = formatCalculatorNumber(calculatorState.answer);

  let resizeFrame = 0;
  function resizeGraph() {
    if (byId("calc-panel-graph").hidden || resizeFrame) return;
    resizeFrame = window.requestAnimationFrame(() => {
      resizeFrame = 0;
      drawCalculatorGraph(graphTraceX);
    });
  }

  if (typeof ResizeObserver === "function") {
    new ResizeObserver(resizeGraph).observe(byId("graph-canvas").parentElement);
  } else {
    window.addEventListener("resize", resizeGraph);
  }
  resizeGraph();
})();
