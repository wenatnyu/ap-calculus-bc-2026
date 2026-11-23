/* Real-number operations for the AP keypad exercises. */
(() => {
  'use strict';

  const mathFunctions = {
    abs: Math.abs, sqrt: Math.sqrt, cbrt: Math.cbrt,
    exp: Math.exp, ln: Math.log, log: Math.log10,
    int: Math.floor, ipart: Math.trunc, round: Math.round,
    sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh,
    min: Math.min, max: Math.max
  };
  const tokenPattern = /(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|nderiv|fnint|asin|acos|atan|sqrt|cbrt|sinh|cosh|tanh|sin|cos|tan|ipart|int|round|abs|exp|ln|log|min|max|ans|pi|y\d|[a-z]|[+\-*/^(),!²³]/y;

  function finite(value) {
    if (!Number.isFinite(value)) throw Error('Domain error');
    return value;
  }

  function factorial(value) {
    if (!Number.isInteger(value) || value < 0 || value > 170) return NaN;
    let result = 1;
    for (let i = 2; i <= value; i++) result *= i;
    return result;
  }

  function compile(expression, options = {}) {
    const source = String(expression).trim().toLowerCase()
      .replaceAll('−', '-').replaceAll('×', '*').replaceAll('÷', '/')
      .replaceAll('π', 'pi').replaceAll('θ', 'x').replaceAll('√', 'sqrt');
    if (!source || source.length > 300) throw Error('Syntax error');

    const tokens = [];
    let previousNumber = false;
    for (let pos = 0; pos < source.length;) {
      if (/\s/.test(source[pos])) { pos++; continue; }
      tokenPattern.lastIndex = pos;
      const match = tokenPattern.exec(source);
      if (!match) throw Error('Syntax error');
      const isNumber = /^[\d.]/.test(match[0]);
      if (isNumber && previousNumber) throw Error('Invalid number');
      previousNumber = isNumber;
      tokens.push(match[0]);
      pos = tokenPattern.lastIndex;
    }
    const degree = ['deg', 'degree', 'degrees'].includes(String(options.angle).toLowerCase());
    const radians = degree ? Math.PI / 180 : 1;
    const variables = options.variables ?? {};
    let cursor = 0;
    const peek = () => tokens[cursor];
    function take(token) {
      if (peek() !== token) return false;
      cursor++;
      return true;
    }
    function expect(token) {
      if (!take(token)) throw Error('Syntax error');
    }

    function primary() {
      const token = tokens[cursor++];
      if (!token) throw Error('Syntax error');
      if (token === '(') {
        const value = sum();
        expect(')');
        return value;
      }
      if (/^(?:\d|\.)/.test(token)) {
        const value = Number(token);
        return () => value;
      }
      if (token === 'pi') return () => Math.PI;
      if (token === 'e') return () => Math.E;
      if (token === 'ans') return () => options.ans ?? 0;
      if (token === 'x' || token === 't') return x => x;
      if (token === 'nderiv' || token === 'fnint') {
        expect('(');
        const body = sum();
        expect(',');
        if (!take('x') && !take('t')) throw Error('Use X as the variable');
        expect(',');
        const first = sum();
        if (token === 'nderiv') {
          expect(')');
          return (x, budget) => derivative(at => sampled(body, at, budget), first(x, budget));
        }
        expect(',');
        const last = sum();
        expect(')');
        return (x, budget) => integral(at => sampled(body, at, budget), first(x, budget), last(x, budget));
      }
      if (Object.hasOwn(mathFunctions, token) || ['sin', 'cos', 'tan', 'asin', 'acos', 'atan'].includes(token)) {
        expect('(');
        const argument = sum();
        if (token === 'min' || token === 'max') {
          expect(',');
          const second = sum();
          expect(')');
          return (x, budget) => mathFunctions[token](argument(x, budget), second(x, budget));
        }
        expect(')');
        if (token === 'tan') {
          return (x, budget) => {
            const angle = argument(x, budget) * radians;
            return Math.abs(Math.cos(angle)) < 2 * Number.EPSILON ? NaN : Math.tan(angle);
          };
        }
        if (token === 'sin' || token === 'cos') return (x, budget) => Math[token](argument(x, budget) * radians);
        if (token === 'asin' || token === 'acos' || token === 'atan') {
          return (x, budget) => Math[token](argument(x, budget)) / radians;
        }
        return (x, budget) => mathFunctions[token](argument(x, budget));
      }
      if (/^[a-z]$|^y\d$/.test(token)) {
        const key = Object.hasOwn(variables, token) ? token : token.toUpperCase();
        if (!Object.hasOwn(variables, key)) throw Error('Undefined variable');
        return x => typeof variables[key] === 'function' ? variables[key](x) : variables[key];
      }
      throw Error('Syntax error');
    }

    function unary() {
      if (take('-')) {
        const argument = unary();
        return (x, budget) => -argument(x, budget);
      }
      if (take('+')) return unary();
      let base = primary();
      while (['!', '²', '³'].includes(peek())) {
        const fn = base;
        const token = tokens[cursor++];
        const power = token === '²' ? 2 : 3;
        base = token === '!'
          ? (x, budget) => factorial(fn(x, budget))
          : (x, budget) => fn(x, budget) ** power;
      }
      if (!take('^')) return base;
      const exponent = unary();
      return (x, budget) => finite(base(x, budget)) ** finite(exponent(x, budget));
    }
    function product() {
      let value = unary();
      while (peek() && !['+', '-', ')', ','].includes(peek())) {
        const division = take('/');
        if (!division) take('*'); // Adjacent factors imply multiplication.
        const left = value;
        const right = unary();
        value = division
          ? (x, budget) => finite(left(x, budget) / finite(right(x, budget)))
          : (x, budget) => left(x, budget) * right(x, budget);
      }
      return value;
    }
    function sum() {
      let value = product();
      while (peek() === '+' || peek() === '-') {
        const sign = tokens[cursor++];
        const left = value;
        const right = product();
        value = sign === '+'
          ? (x, budget) => left(x, budget) + right(x, budget)
          : (x, budget) => left(x, budget) - right(x, budget);
      }
      return value;
    }
    const expressionFn = sum();
    if (cursor !== tokens.length) throw Error('Syntax error');
    return (x = options.x ?? 0) => {
      try {
        const result = expressionFn(x, { remaining: 25000 });
        return Number.isFinite(result) ? result : NaN;
      } catch {
        return NaN;
      }
    };
  }

  function sampled(expression, x, budget) {
    if (--budget.remaining < 0) throw Error('Calculation limit');
    return finite(expression(x, budget));
  }

  function evaluate(expression, options = {}) {
    return finite(compile(expression, options)(options.x));
  }

  function derivative(fn, x) {
    const middle = finite(fn(finite(x)));
    let h = Math.max(.0001, Math.min(.01, Math.abs(x) * .00001), Math.abs(x) * 32 * Number.EPSILON);
    for (let step = 0; step < 8; step++, h /= 4) {
      if (x + h / 2 === x || x - h / 2 === x) break;
      const left = (middle - fn(x - h)) / (x - (x - h));
      const right = (fn(x + h) - middle) / ((x + h) - x);
      const leftHalf = (middle - fn(x - h / 2)) / (x - (x - h / 2));
      const rightHalf = (fn(x + h / 2) - middle) / ((x + h / 2) - x);
      const estimate = (4 * (rightHalf + leftHalf) - right - left) / 6;
      const mismatch = Math.abs((2 * rightHalf - right) - (2 * leftHalf - left));
      const tolerance = 2e-6 * Math.max(1, Math.abs(estimate)) + 16 * Number.EPSILON * Math.abs(middle) / h;
      if (Number.isFinite(estimate) && mismatch <= tolerance && Math.abs((left + right) / 2 - estimate) <= tolerance) return estimate;
    }
    throw Error('Derivative undefined');
  }

  // The embedded seven-point Gauss and fifteen-point Kronrod rules share samples.
  const nodes = [.9914553711208126,.9491079123427585,.8648644233597691,.7415311855993945,
    .5860872354676911,.4058451513773972,.2077849550078985];
  const kronrod = [.02293532201052922,.06309209262997855,.1047900103222502,.1406532597155259,
    .1690047266392679,.1903505780647854,.2044329400752989,.2094821410847278];
  const gauss = [.1294849661688697,.2797053914892766,.3818300505051189,.4179591836734694];

  function integral(fn, lo, hi) {
    finite(lo); finite(hi);
    if (lo === hi) return 0;
    if (hi < lo) return -integral(fn, hi, lo);
    finite(fn(lo)); finite(fn(hi));
    let remaining = 16000;
    function integrate(a, b, tolerance, depth) {
      remaining -= 15;
      if (remaining < 0) throw Error('Integral did not converge');
      const half = (b - a) / 2;
      const mid = a + half;
      const center = finite(fn(mid));
      let coarse = gauss[3] * center;
      let fine = kronrod[7] * center;
      for (let i = 0; i < nodes.length; i++) {
        const delta = half * nodes[i];
        const pair = finite(fn(mid - delta)) + finite(fn(mid + delta));
        fine += kronrod[i] * pair;
        if (i % 2 === 1) coarse += gauss[(i-1)/2] * pair;
      }
      const area = finite(half * fine);
      if (Math.abs(half * (fine - coarse)) <= Math.max(tolerance, 1e-12) + 1e-9 * Math.abs(area)) return area;
      if (depth === 0) throw Error('Integral did not converge');
      return integrate(a,mid,tolerance/2,depth-1) + integrate(mid,b,tolerance/2,depth-1);
    }
    return integrate(lo,hi,1e-9,30);
  }

  function bounds(lo, hi) {
    if (!Number.isFinite(lo) || !Number.isFinite(hi) || lo >= hi || !Number.isFinite(hi-lo)) throw Error('Invalid bounds');
  }

  function goldenMinimum(fn, a, b) {
    const ratio = (Math.sqrt(5)-1)/2;
    let left = b-ratio*(b-a), right = a+ratio*(b-a);
    let fl = finite(fn(left)), fr = finite(fn(right));
    for (let step = 0; step < 80 && right > left; step++) {
      if (fl < fr) {
        b = right; right = left; fr = fl;
        left = b-ratio*(b-a); fl = finite(fn(left));
      } else {
        a = left; left = right; fl = fr;
        right = a+ratio*(b-a); fr = finite(fn(right));
      }
    }
    return fl <= fr ? left : right;
  }

  function bisect(fn, a, b, fa, fb) {
    const baseline = Math.min(Math.abs(fa), Math.abs(fb));
    for (let step = 0; step < 100; step++) {
      const mid = a + (b-a)/2;
      if (mid === a || mid === b) break;
      const value = fn(mid);
      if (!Number.isFinite(value)) return NaN;
      if (value === 0) return mid;
      if (Math.sign(value) === Math.sign(fa)) { a = mid; fa = value; }
      else { b = mid; fb = value; }
    }
    // A sign change at an asymptote cannot pass a decreasing-residual check.
    if (Math.min(Math.abs(fa), Math.abs(fb)) > baseline * 1e-5) return NaN;
    return Math.abs(fa) < Math.abs(fb) ? a : b;
  }

  function root(fn, lo, hi, guess = lo+(hi-lo)/2) {
    bounds(lo,hi);
    finite(guess);
    const points = Array.from({length:129}, (_,i) => i === 128 ? hi : lo+(hi-lo)*i/128);
    if (guess > lo && guess < hi && !points.includes(guess)) {
      points.push(guess);
      points.sort((a,b) => a-b);
    }
    const values = points.map(x => fn(x));
    const roots = [];
    for (let i = 0; i < points.length; i++) {
      const y = values[i];
      if (!Number.isFinite(y)) continue;
      if (y === 0) { roots.push(points[i]); continue; }
      if (i > 0 && Number.isFinite(values[i-1]) && values[i-1] !== 0 && Math.sign(values[i-1]) !== Math.sign(y)) {
        const candidate = bisect(fn, points[i-1], points[i], values[i-1], y);
        if (Number.isFinite(candidate)) roots.push(candidate);
      }
      const left = Math.max(0, i - 1);
      const right = Math.min(points.length - 1, i + 1);
      const previous = values[left], next = values[right];
      if (Math.sign(previous) !== Math.sign(y) || Math.sign(next) !== Math.sign(y)) continue;
      const nearest = Math.min(Math.abs(previous), Math.abs(next));
      const furthest = Math.max(Math.abs(previous), Math.abs(next));
      if (Math.abs(y) > nearest || Math.abs(y) === furthest) continue;

      // Touching zero (e.g. a repeated root) can leave the sign unchanged.
      try {
        const candidate = goldenMinimum(x => Math.abs(fn(x)), points[left], points[right]);
        const relativeTolerance = i === left || i === right ? 1e-6 : 1e-14;
        if (Math.abs(fn(candidate)) <= nearest * relativeTolerance) roots.push(candidate);
      } catch { /* A gap in the domain is not a candidate. */ }
    }
    if (!roots.length) throw Error('No zero in bounds');
    return roots.reduce((best, x) => Math.abs(x-guess) < Math.abs(best-guess) ? x : best);
  }

  function intersection(f, g, lo, hi, guess) {
    return root(x => f(x)-g(x), lo, hi, guess);
  }

  function extreme(fn, lo, hi, kind = 'min') {
    bounds(lo,hi);
    if (kind !== 'min' && kind !== 'max') throw Error('Unknown extremum');
    const score = kind === 'max' ? x => -fn(x) : fn;
    const points = Array.from({length:65}, (_,i) => i === 64 ? hi : lo+(hi-lo)*i/64);
    const values = points.map(x => finite(score(x)));
    let best = values[0] <= values[64] ? lo : hi;
    let bestScore = Math.min(values[0],values[64]);
    for (let i=1; i<64; i++) {
      if (values[i] > values[i-1] || values[i] > values[i+1] || (values[i] === values[i-1] && values[i] === values[i+1])) continue;
      const x = goldenMinimum(score,points[i-1],points[i+1]);
      const y = finite(score(x));
      if (y < bestScore) { best=x; bestScore=y; }
    }
    return best;
  }

  globalThis.TI84Math = Object.freeze({compile, evaluate, derivative, integral, root, intersection, extreme});
})();
