window.AP_CALCULUS_QUESTION_BANK_10 = Object.freeze([
  {
    "id": "10.1-01",
    "topic": "10.1",
    "label": "Partial Sum",
    "difficulty": "easy",
    "question": "For a series Σa_n, what does S_N represent?",
    "hint": "Add only the first N terms.",
    "answer": "S_N=Σ_(n=1)^(N)a_n.",
    "explanation": "It is a finite sum used to define the infinite series. / 它是定义无穷级数的前 N 项和。"
  },
  {
    "id": "10.1-02",
    "topic": "10.1",
    "label": "Sum from Partial Sums",
    "difficulty": "easy",
    "question": "If S_N=7-1/N, find the series sum.",
    "hint": "Take the limit as N tends to infinity.",
    "answer": "7",
    "explanation": "lim S_N=7, so the series converges to 7. / 部分和极限为 7。"
  },
  {
    "id": "10.1-03",
    "topic": "10.1",
    "label": "Oscillating Partial Sums",
    "difficulty": "medium",
    "question": "A series has S_N=2+(-1)^(N)/2. Convergent or divergent?",
    "hint": "Check whether the partial sums have one limit.",
    "answer": "Divergent",
    "explanation": "The partial sums alternate between 3/2 and 5/2, so no limit exists. / 部分和振荡。"
  },
  {
    "id": "10.1-04",
    "topic": "10.1",
    "label": "Recover a Term",
    "difficulty": "medium",
    "question": "If S_n=3-2/n, find a_n for n≥2.",
    "hint": "Use a_n=S_n-S_(n-1).",
    "answer": "2/[n(n-1)]",
    "explanation": "(3-2/n)-[3-2/(n-1)]=2/(n-1)-2/n=2/[n(n-1)]. / 用相邻部分和相减。"
  },
  {
    "id": "10.1-05",
    "topic": "10.1",
    "label": "Telescoping Sum",
    "difficulty": "medium",
    "question": "Find Σ_(n=1)^(∞)1/[n(n+1)].",
    "hint": "Rewrite as 1/n-1/(n+1).",
    "answer": "1",
    "explanation": "S_N=1-1/(N+1)→1. / 裂项后中间项相消。"
  },
  {
    "id": "10.1-06",
    "topic": "10.1",
    "label": "Necessary Condition",
    "difficulty": "hard",
    "question": "A student says, 'a_n→0, so Σa_n converges.' Diagnose the claim.",
    "hint": "Recall the direction of the necessary-condition implication.",
    "answer": "The claim is invalid.",
    "explanation": "A zero term limit is necessary but not sufficient; the harmonic series is a counterexample. / 通项趋零不能单独证明收敛。"
  },
  {
    "id": "10.2-01",
    "topic": "10.2",
    "label": "Geometric Sum",
    "difficulty": "easy",
    "question": "Find Σ_(n=0)^(∞)3(1/2)^(n).",
    "hint": "Use a/(1-r).",
    "answer": "6",
    "explanation": "a=3, r=1/2, so 3/(1-1/2)=6. / 首项除以 1-r。"
  },
  {
    "id": "10.2-02",
    "topic": "10.2",
    "label": "Convergence Condition",
    "difficulty": "easy",
    "question": "For what real r does Σ5r^(n) converge?",
    "hint": "Use the strict geometric condition.",
    "answer": "|r|<1",
    "explanation": "A nonzero geometric series converges exactly when the ratio magnitude is below 1. / 公比绝对值必须小于 1。"
  },
  {
    "id": "10.2-03",
    "topic": "10.2",
    "label": "Index Start",
    "difficulty": "medium",
    "question": "Find Σ_(n=2)^(∞)8(1/2)^(n).",
    "hint": "Substitute n=2 to get the first included term.",
    "answer": "4",
    "explanation": "The first term is 2 and r=1/2, so the sum is 2/(1-1/2)=4. / 先代入起始指标。"
  },
  {
    "id": "10.2-04",
    "topic": "10.2",
    "label": "Negative Ratio",
    "difficulty": "medium",
    "question": "Find 6-3+3/2-3/4+... .",
    "hint": "Identify a=6 and r=-1/2.",
    "answer": "4",
    "explanation": "6/[1-(-1/2)]=6/(3/2)=4. / 负公比仍满足 |r|<1。"
  },
  {
    "id": "10.2-05",
    "topic": "10.2",
    "label": "Repeating Decimal",
    "difficulty": "medium",
    "question": "Write 0.181818... as a fraction.",
    "hint": "Use 0.18+0.0018+... .",
    "answer": "2/11",
    "explanation": "(18/100)/(1-1/100)=18/99=2/11. / 两位循环对应公比 1/100。"
  },
  {
    "id": "10.2-06",
    "topic": "10.2",
    "label": "Bouncing Distance",
    "difficulty": "hard",
    "question": "A ball drops 10 m and rebounds to 60% of each previous height. Find its total travel distance.",
    "hint": "Count the first drop once and later heights twice.",
    "answer": "40 m",
    "explanation": "10+2(6+3.6+...)=10+12/(1-0.6)=40. / 首次下落一次，后续反弹上下各一次。"
  },
  {
    "id": "10.3-01",
    "topic": "10.3",
    "label": "Nonzero Term Limit",
    "difficulty": "easy",
    "question": "Classify Σ(n+2)/(2n-1) using the nth-term test.",
    "hint": "Find the leading-coefficient ratio.",
    "answer": "Divergent",
    "explanation": "The term limit is 1/2, not zero. / 通项极限非零，级数发散。"
  },
  {
    "id": "10.3-02",
    "topic": "10.3",
    "label": "Oscillating Terms",
    "difficulty": "easy",
    "question": "Classify Σcos(nπ) using the nth-term test.",
    "hint": "cos(nπ)=(-1)^(n).",
    "answer": "Divergent",
    "explanation": "The terms alternate between -1 and 1, so their limit does not exist. / 通项振荡。"
  },
  {
    "id": "10.3-03",
    "topic": "10.3",
    "label": "Zero-Limit Logic",
    "difficulty": "medium",
    "question": "What does the nth-term test conclude for Σ1/n^(3)?",
    "hint": "A zero term limit gives only one possible response from this test.",
    "answer": "Inconclusive",
    "explanation": "The term limit is zero, so this test alone gives no conclusion. / 第 n 项判别法无法判定。"
  },
  {
    "id": "10.3-04",
    "topic": "10.3",
    "label": "Radical Limit",
    "difficulty": "medium",
    "question": "Use the nth-term test on Σ√(n^(2)+1)/n.",
    "hint": "Factor n^(2) inside the radical.",
    "answer": "Divergent",
    "explanation": "The term limit is 1, so the series diverges. / 通项趋于 1 而非 0。"
  },
  {
    "id": "10.3-05",
    "topic": "10.3",
    "label": "Exponential Term",
    "difficulty": "medium",
    "question": "Use the nth-term test on Σ(2^(n)+1)/(3·2^(n)-4).",
    "hint": "Divide by 2^(n).",
    "answer": "Divergent",
    "explanation": "The term limit is 1/3, so the series diverges. / 指数主导项之比为 1/3。"
  },
  {
    "id": "10.3-06",
    "topic": "10.3",
    "label": "Repair the Argument",
    "difficulty": "hard",
    "question": "Repair: 'Since 1/n tends to zero, the harmonic series converges.'",
    "hint": "State what the test really says, then use known behavior.",
    "answer": "The test is inconclusive; the harmonic series diverges.",
    "explanation": "Zero is not sufficient. A separate theorem establishes harmonic divergence. / 通项趋零只是必要条件。"
  },
  {
    "id": "10.4-01",
    "topic": "10.4",
    "label": "Integral-Test Conditions",
    "difficulty": "easy",
    "question": "List the three standard conditions on f for the integral test.",
    "hint": "Think CPC/CPD on a tail.",
    "answer": "Continuous, positive, and decreasing on a tail.",
    "explanation": "Also require f(n)=a_n. / 还要保证函数在整数处对应通项。"
  },
  {
    "id": "10.4-02",
    "topic": "10.4",
    "label": "Convergent Integral",
    "difficulty": "easy",
    "question": "Classify Σ_(n=1)^(∞)1/(n+1)^(2) by the integral test.",
    "hint": "Integrate (x+1)^(-2).",
    "answer": "Convergent",
    "explanation": "The improper integral is finite and the hypotheses hold. / 反常积分有限。"
  },
  {
    "id": "10.4-03",
    "topic": "10.4",
    "label": "Logarithmic Divergence",
    "difficulty": "medium",
    "question": "Classify Σ1/(2n+1) by the integral test.",
    "hint": "The antiderivative is logarithmic.",
    "answer": "Divergent",
    "explanation": "∫dx/(2x+1)=(1/2)ln(2x+1), which is unbounded. / 对数型反常积分发散。"
  },
  {
    "id": "10.4-04",
    "topic": "10.4",
    "label": "Not the Same Value",
    "difficulty": "medium",
    "question": "True or false: if the integral test applies, Σf(n)=∫f(x)dx.",
    "hint": "The theorem compares behavior, not exact values.",
    "answer": "False",
    "explanation": "The series and integral share convergence behavior but generally have different values. / 收敛性相同不代表数值相等。"
  },
  {
    "id": "10.4-05",
    "topic": "10.4",
    "label": "Eventual Decrease",
    "difficulty": "medium",
    "question": "If f is positive and decreasing only for x≥5, can the integral test still be used?",
    "hint": "Finite initial terms do not control convergence.",
    "answer": "Yes, start at n=5.",
    "explanation": "A finite prefix may change the sum but not convergence. / 可从满足条件的尾部开始。"
  },
  {
    "id": "10.4-06",
    "topic": "10.4",
    "label": "Improper Limit",
    "difficulty": "hard",
    "question": "Use the integral test on Σn/(n^(2)+9).",
    "hint": "Use u=n^(2)+9 in the integral.",
    "answer": "Divergent",
    "explanation": "The integral is (1/2)ln(x^(2)+9), unbounded as x tends to infinity. / 反常积分呈对数发散。"
  },
  {
    "id": "10.5-01",
    "topic": "10.5",
    "label": "p Greater Than One",
    "difficulty": "easy",
    "question": "Classify Σ1/n^(7/4).",
    "hint": "Compare p with 1.",
    "answer": "Convergent",
    "explanation": "p=7/4>1. / p 大于 1，级数收敛。"
  },
  {
    "id": "10.5-02",
    "topic": "10.5",
    "label": "p Below One",
    "difficulty": "easy",
    "question": "Classify Σ1/n^(0.4).",
    "hint": "Compare p with 1.",
    "answer": "Divergent",
    "explanation": "p=0.4≤1. / p 不大于 1，级数发散。"
  },
  {
    "id": "10.5-03",
    "topic": "10.5",
    "label": "Harmonic Boundary",
    "difficulty": "medium",
    "question": "Classify Σ9/n.",
    "hint": "A constant multiple does not repair harmonic divergence.",
    "answer": "Divergent",
    "explanation": "It is 9 times the harmonic series. / 调和级数的非零常数倍仍发散。"
  },
  {
    "id": "10.5-04",
    "topic": "10.5",
    "label": "Radical Rewrite",
    "difficulty": "medium",
    "question": "Classify Σ1/∛(n^(5)).",
    "hint": "Rewrite as n^(-5/3).",
    "answer": "Convergent",
    "explanation": "p=5/3>1. / 根式改写后指数大于 1。"
  },
  {
    "id": "10.5-05",
    "topic": "10.5",
    "label": "Shifted p-Series",
    "difficulty": "medium",
    "question": "Classify Σ4/(n+10)^(3/2).",
    "hint": "Use tail equivalence to a p-series.",
    "answer": "Convergent",
    "explanation": "The shift and constant do not change the p=3/2 convergence. / 平移和常数倍不改变收敛性。"
  },
  {
    "id": "10.5-06",
    "topic": "10.5",
    "label": "Nested Radical",
    "difficulty": "hard",
    "question": "Classify Σ1/√(∛n).",
    "hint": "Combine the exponents 1/2 and 1/3.",
    "answer": "Divergent",
    "explanation": "√(∛n)=n^(1/6); p=1/6≤1. / 合并根式指数得到 p=1/6。"
  },
  {
    "id": "10.6-01",
    "topic": "10.6",
    "label": "Useful Upper Bound",
    "difficulty": "easy",
    "question": "Classify Σ1/(n^(2)+7) by direct comparison.",
    "hint": "Compare with 1/n^(2).",
    "answer": "Convergent",
    "explanation": "The term is at most 1/n^(2), a convergent p-series. / 用收敛上界。"
  },
  {
    "id": "10.6-02",
    "topic": "10.6",
    "label": "Useful Lower Bound",
    "difficulty": "easy",
    "question": "Classify Σ(n+3)/n^(2) by direct comparison.",
    "hint": "Compare from below with 1/n.",
    "answer": "Divergent",
    "explanation": "(n+3)/n^(2)≥1/n, and the harmonic series diverges. / 用发散下界。"
  },
  {
    "id": "10.6-03",
    "topic": "10.6",
    "label": "Limit Comparison p=2",
    "difficulty": "medium",
    "question": "Classify Σ(5n+1)/(n^(3)+2) by limit comparison.",
    "hint": "Use b_n=1/n^(2).",
    "answer": "Convergent",
    "explanation": "The ratio to 1/n^(2) tends to 5, so both series converge. / 极限为有限正数 5。"
  },
  {
    "id": "10.6-04",
    "topic": "10.6",
    "label": "Limit Comparison p=1",
    "difficulty": "medium",
    "question": "Classify Σ(n^(2)+1)/(n^(3)-4) for large n.",
    "hint": "Use b_n=1/n.",
    "answer": "Divergent",
    "explanation": "The ratio to 1/n tends to 1, so behavior matches the harmonic series. / 与调和级数同阶。"
  },
  {
    "id": "10.6-05",
    "topic": "10.6",
    "label": "Invalid Direction",
    "difficulty": "medium",
    "question": "Why does 1/n^(2)≤1/n not prove that Σ1/n^(2) converges?",
    "hint": "Identify the behavior of the larger benchmark.",
    "answer": "A convergent series cannot be proved by an upper bound that diverges.",
    "explanation": "Being below a divergent series is inconclusive. / 小于发散级数不能推出收敛。"
  },
  {
    "id": "10.6-06",
    "topic": "10.6",
    "label": "Radical Comparison",
    "difficulty": "hard",
    "question": "Classify Σ1/√(n^(2)+n) by limit comparison.",
    "hint": "Compare with 1/n.",
    "answer": "Divergent",
    "explanation": "[1/√(n^(2)+n)]/(1/n)=n/√(n^(2)+n)→1. / 与调和级数极限比较。"
  },
  {
    "id": "10.7-01",
    "topic": "10.7",
    "label": "AST Conditions",
    "difficulty": "easy",
    "question": "Assuming b_n≥0, what two additional conditions prove convergence of Σ(-1)^(n)b_n?",
    "hint": "State a size trend and a limit.",
    "answer": "b_n eventually decreases and tends to zero.",
    "explanation": "Together with b_n at least zero, both conditions are required. / 在 b_n 非负的前提下，还需最终递减且趋于零。"
  },
  {
    "id": "10.7-02",
    "topic": "10.7",
    "label": "Alternating Harmonic",
    "difficulty": "easy",
    "question": "Does Σ(-1)^(n-1)/n converge by AST?",
    "hint": "Check b_n=1/n.",
    "answer": "Yes",
    "explanation": "1/n is positive, decreasing, and tends to zero. / 满足交错级数判别的两个条件。"
  },
  {
    "id": "10.7-03",
    "topic": "10.7",
    "label": "Term Limit Failure",
    "difficulty": "medium",
    "question": "Classify Σ(-1)^(n)(n+1)/(n+2).",
    "hint": "Check the magnitude limit first.",
    "answer": "Divergent",
    "explanation": "The magnitude tends to 1, so the terms do not approach zero. / 通项不趋零。"
  },
  {
    "id": "10.7-04",
    "topic": "10.7",
    "label": "Eventually Decreasing",
    "difficulty": "medium",
    "question": "If b_n decreases only after n=20 and tends to zero, can AST apply?",
    "hint": "Finite initial behavior does not control convergence.",
    "answer": "Yes",
    "explanation": "Eventual decrease is sufficient; finitely many early terms do not matter. / 最终递减即可。"
  },
  {
    "id": "10.7-05",
    "topic": "10.7",
    "label": "Derivative Check",
    "difficulty": "medium",
    "question": "Show b_n=1/(n+1)^(1/3) decreases.",
    "hint": "Use f(x)=(x+1)^(-1/3).",
    "answer": "f'(x)=-(1/3)(x+1)^(-4/3)<0.",
    "explanation": "Thus b_n is decreasing and also tends to zero. / 导数为负说明递减。"
  },
  {
    "id": "10.7-06",
    "topic": "10.7",
    "label": "AST Scope",
    "difficulty": "hard",
    "question": "AST proves Σ(-1)^(n)/n^(3/4) converges. Does that alone prove absolute convergence?",
    "hint": "AST analyzes the signed series.",
    "answer": "No",
    "explanation": "AST proves ordinary convergence only; the absolute-value series needs a separate test. / 还需单独检验绝对值级数。"
  },
  {
    "id": "10.8-01",
    "topic": "10.8",
    "label": "Ratio Less Than One",
    "difficulty": "easy",
    "question": "If the ratio-test limit is 0.7, classify the series.",
    "hint": "Recall what L<1 proves.",
    "answer": "Absolutely convergent",
    "explanation": "A ratio limit below 1 proves absolute convergence. / 比值极限小于 1。"
  },
  {
    "id": "10.8-02",
    "topic": "10.8",
    "label": "Ratio Greater Than One",
    "difficulty": "easy",
    "question": "If the ratio-test limit is 3, classify the series.",
    "hint": "Recall the L>1 case.",
    "answer": "Divergent",
    "explanation": "Successive magnitudes eventually grow, so the series diverges. / 项的绝对值最终增长，因此级数发散。"
  },
  {
    "id": "10.8-03",
    "topic": "10.8",
    "label": "Factorial Denominator",
    "difficulty": "medium",
    "question": "Use the ratio test on Σ2^(n)/n!.",
    "hint": "Cancel (n+1)! against n!.",
    "answer": "Absolutely convergent",
    "explanation": "L=lim 2/(n+1)=0. / 比值趋于 0。"
  },
  {
    "id": "10.8-04",
    "topic": "10.8",
    "label": "Factorial Numerator",
    "difficulty": "medium",
    "question": "Use the ratio test on Σn!/10^(n).",
    "hint": "The ratio becomes (n+1)/10.",
    "answer": "Divergent",
    "explanation": "L=∞>1. / 阶乘最终超过固定底数的指数。"
  },
  {
    "id": "10.8-05",
    "topic": "10.8",
    "label": "Inconclusive Ratio",
    "difficulty": "medium",
    "question": "The ratio-test limit for Σ1/n^(4) is 1. What can the ratio test conclude?",
    "hint": "Do not import the p-series result into the ratio-test statement.",
    "answer": "Inconclusive",
    "explanation": "L=1 gives no conclusion, although another test shows convergence. / 比值判别本身无法判定。"
  },
  {
    "id": "10.8-06",
    "topic": "10.8",
    "label": "n-th Power",
    "difficulty": "hard",
    "question": "Use the ratio test on Σn!/n^(n).",
    "hint": "Simplify to [n/(n+1)]^(n).",
    "answer": "Absolutely convergent",
    "explanation": "L=e^(-1)<1. / 利用标准极限得到 1/e。"
  },
  {
    "id": "10.9-01",
    "topic": "10.9",
    "label": "Definition: Absolute",
    "difficulty": "easy",
    "question": "What must converge for Σa_n to converge absolutely?",
    "hint": "Take absolute values term by term.",
    "answer": "Σ|a_n|",
    "explanation": "Absolute convergence is defined through the absolute-value series. / 检验绝对值级数。"
  },
  {
    "id": "10.9-02",
    "topic": "10.9",
    "label": "Definition: Conditional",
    "difficulty": "easy",
    "question": "State the two conclusions required for conditional convergence.",
    "hint": "One concerns the signed series and one its absolute values.",
    "answer": "Σa_n converges, but Σ|a_n| diverges.",
    "explanation": "Both parts are necessary. / 原级数收敛而绝对值级数发散。"
  },
  {
    "id": "10.9-03",
    "topic": "10.9",
    "label": "Absolute p-Series",
    "difficulty": "medium",
    "question": "Classify Σ(-1)^(n)/n^(5/4).",
    "hint": "Test the absolute-value p-series.",
    "answer": "Absolutely convergent",
    "explanation": "Σ1/n^(5/4) converges because p>1. / 绝对值级数为收敛 p 级数。"
  },
  {
    "id": "10.9-04",
    "topic": "10.9",
    "label": "Conditional p-Series",
    "difficulty": "medium",
    "question": "Classify Σ(-1)^(n-1)/n^(3/4).",
    "hint": "Use AST, then test absolute values.",
    "answer": "Conditionally convergent",
    "explanation": "AST gives convergence, while the p=3/4 absolute series diverges. / 原级数收敛但绝对值级数发散。"
  },
  {
    "id": "10.9-05",
    "topic": "10.9",
    "label": "Positive Terms",
    "difficulty": "medium",
    "question": "Can a convergent series with a_n≥0 be conditionally convergent?",
    "hint": "Compare a_n with |a_n|.",
    "answer": "No",
    "explanation": "For nonnegative terms, the original and absolute-value series are identical. / 正项级数不可能条件收敛。"
  },
  {
    "id": "10.9-06",
    "topic": "10.9",
    "label": "Three-Way Classification",
    "difficulty": "hard",
    "question": "Classify Σ(-1)^(n)(n+1)/n.",
    "hint": "Check the original term limit before testing absolute values.",
    "answer": "Divergent",
    "explanation": "The terms do not approach zero because their magnitudes approach 1; it is not conditionally convergent. / 通项不趋零，直接发散。"
  },
  {
    "id": "10.10-01",
    "topic": "10.10",
    "label": "First omitted term",
    "difficulty": "easy",
    "question": "The convergent alternating series Σ(−1)^(n+1)/(3n+1) is approximated by S_8. Give an error bound. 写出误差界。",
    "hint": "Use the magnitude of term 9.",
    "answer": "|R_8|≤1/28.",
    "explanation": "The first omitted term has n=9, so its magnitude is 1/(3·9+1)=1/28."
  },
  {
    "id": "10.10-02",
    "topic": "10.10",
    "label": "Terms required",
    "difficulty": "medium",
    "question": "Find the least number of terms needed so that Σ(−1)^(n+1)/n² has error below 0.001. 求最少项数。",
    "hint": "Solve 1/(N+1)²<0.001.",
    "answer": "N=31 terms.",
    "explanation": "We need N+1>√1000≈31.623. The least integer N+1 is 32, so N=31."
  },
  {
    "id": "10.10-03",
    "topic": "10.10",
    "label": "Over or under",
    "difficulty": "medium",
    "question": "For Σ(−1)^(n+1)b_n with decreasing b_n→0, is S_6 an overestimate or underestimate? 判断偏高或偏低。",
    "hint": "Check the sign of term 7.",
    "answer": "An underestimate.",
    "explanation": "Term 7 is positive, so the remainder S−S_6 is positive. Hence S>S_6."
  },
  {
    "id": "10.10-04",
    "topic": "10.10",
    "label": "Bracket the sum",
    "difficulty": "medium",
    "question": "An alternating series starts positive. If S_5=0.72 and b_6=0.02, give an interval guaranteed to contain S. 写出无穷和所在区间。",
    "hint": "The sixth term is negative.",
    "answer": "0.70≤S≤0.72.",
    "explanation": "S_6=0.72−0.02=0.70, and consecutive partial sums bracket the limit."
  },
  {
    "id": "10.10-05",
    "topic": "10.10",
    "label": "Check hypotheses",
    "difficulty": "medium",
    "question": "Can the alternating-series error bound be applied if the term magnitudes do not approach zero? 项的绝对值不趋零时能否使用？",
    "hint": "Recall the Alternating Series Test hypotheses.",
    "answer": "No.",
    "explanation": "The bound requires positive magnitudes that decrease to zero. If they do not approach zero, the series itself cannot converge."
  },
  {
    "id": "10.10-06",
    "topic": "10.10",
    "label": "Strict tolerance",
    "difficulty": "hard",
    "question": "For Σ_(n=1)^(∞)(−1)^(n+1)/(2n³−1), find the least N such that the error is below 10^(−3). 求满足严格误差要求的最小 N。",
    "hint": "Solve 1/[2(N+1)³−1]<0.001.",
    "answer": "N=7.",
    "explanation": "The inequality gives N+1>∛500.5≈7.94. Thus the least integer is N+1=8, so N=7."
  },
  {
    "id": "10.11-01",
    "topic": "10.11",
    "label": "Build P₂",
    "difficulty": "easy",
    "question": "If f(0)=1, f′(0)=2, f″(0)=−6, find the second-degree Maclaurin polynomial. 写出二次麦克劳林多项式。",
    "hint": "Divide the second derivative by 2!.",
    "answer": "P_2(x)=1+2x−3x².",
    "explanation": "Use f(0)+f′(0)x+f″(0)x²/2!."
  },
  {
    "id": "10.11-02",
    "topic": "10.11",
    "label": "Recover f⁽⁴⁾",
    "difficulty": "easy",
    "question": "A Taylor polynomial about x=1 contains −2(x−1)⁴. Find f^((4))(1). 由系数求四阶导数。",
    "hint": "Multiply the coefficient by 4!.",
    "answer": "f^((4))(1)=−48.",
    "explanation": "The coefficient equals f^((4))(1)/4!=−2."
  },
  {
    "id": "10.11-03",
    "topic": "10.11",
    "label": "Approximate eˣ",
    "difficulty": "medium",
    "question": "Use the third-degree Maclaurin polynomial for e^(x) to approximate e^(0.1). 用三次多项式近似。",
    "hint": "Use 1+x+x²/2+x³/6.",
    "answer": "1.105166…",
    "explanation": "Substitution gives 1+0.1+0.005+0.000166…=1.105166…."
  },
  {
    "id": "10.11-04",
    "topic": "10.11",
    "label": "Nonzero center",
    "difficulty": "medium",
    "question": "Use the second-degree Taylor polynomial for ln x about x=1 to approximate ln(1.2). 注意展开中心。",
    "hint": "P_2(x)=(x−1)−(x−1)²/2.",
    "answer": "0.18.",
    "explanation": "At x=1.2, x−1=0.2, so 0.2−0.04/2=0.18."
  },
  {
    "id": "10.11-05",
    "topic": "10.11",
    "label": "Derivative data",
    "difficulty": "medium",
    "question": "Given f(−1)=0, f′(−1)=4, f″(−1)=−2, find P_2(x) about x=−1. 由导数值构造多项式。",
    "hint": "The repeated factor is x+1.",
    "answer": "P_2(x)=4(x+1)−(x+1)².",
    "explanation": "The quadratic coefficient is −2/2!=−1."
  },
  {
    "id": "10.11-06",
    "topic": "10.11",
    "label": "Coefficient and value",
    "difficulty": "hard",
    "question": "For P_3(x)=2−3h+4h²−5h³, where h=x−a, find f‴(a) and P_3(a+0.2). 同时求导数值与近似值。",
    "hint": "Multiply the cubic coefficient by 3!, then use h=0.2.",
    "answer": "f‴(a)=−30 and P_3(a+0.2)=1.52.",
    "explanation": "3!(−5)=−30. Evaluation gives 2−0.6+0.16−0.04=1.52."
  },
  {
    "id": "10.12-01",
    "topic": "10.12",
    "label": "Direct bound",
    "difficulty": "easy",
    "question": "A third-degree Taylor polynomial is centered at a. If |f^((4))|≤5 and |x−a|=0.2, give the Lagrange bound. 直接计算误差界。",
    "hint": "Use 5(0.2)⁴/4!.",
    "answer": "1/3000≈0.0003333.",
    "explanation": "5(0.2)⁴/24=0.008/24=1/3000."
  },
  {
    "id": "10.12-02",
    "topic": "10.12",
    "label": "Relevant interval",
    "difficulty": "easy",
    "question": "A Taylor polynomial is centered at 3 and estimates f(2.4). On what interval must the derivative bound hold? 确定 M 所需区间。",
    "hint": "Use every point between the center and target.",
    "answer": "[2.4,3].",
    "explanation": "The Lagrange theorem needs a bound between a=3 and x=2.4."
  },
  {
    "id": "10.12-03",
    "topic": "10.12",
    "label": "Exponential bound",
    "difficulty": "medium",
    "question": "Use P_2 for e^(x) centered at 0 to approximate e^(0.5). Give a Lagrange bound. 确定 M 并计算。",
    "hint": "On [0,0.5], use M=e^(0.5).",
    "answer": "|R_2(0.5)|≤e^(0.5)/48≈0.03435.",
    "explanation": "The third derivative is e^(x), so the bound is e^(0.5)(0.5)³/3!."
  },
  {
    "id": "10.12-04",
    "topic": "10.12",
    "label": "Least degree",
    "difficulty": "hard",
    "question": "With M=1, find the least degree n that makes the Lagrange bound at distance 0.5 less than 10^(−4). 求最小次数。",
    "hint": "Test 0.5^(n+1)/(n+1)!.",
    "answer": "n=5.",
    "explanation": "For n=4, the bound is about 2.604×10^(−4). For n=5, it is about 2.170×10^(−5)."
  },
  {
    "id": "10.12-05",
    "topic": "10.12",
    "label": "Meaning of a bound",
    "difficulty": "medium",
    "question": "If the Lagrange bound equals 0.002, must the actual error equal 0.002? 误差界是否等于实际误差？",
    "hint": "Read the inequality symbol.",
    "answer": "No; the actual absolute error is at most 0.002.",
    "explanation": "The theorem gives an upper bound, not an equality. The actual error can be much smaller."
  },
  {
    "id": "10.12-06",
    "topic": "10.12",
    "label": "Table bound",
    "difficulty": "hard",
    "question": "For a fourth-degree Taylor polynomial centered at 0, suppose |f^((5))(z)|≤3.6 on [0,0.2]. Bound the error at 0.2. 利用表中导数上界。",
    "hint": "Use 3.6(0.2)⁵/5!.",
    "answer": "9.6×10^(−6).",
    "explanation": "3.6(0.00032)/120=0.001152/120=0.0000096."
  },
  {
    "id": "10.13-01",
    "topic": "10.13",
    "label": "Geometric interval",
    "difficulty": "easy",
    "question": "Find the interval of convergence of Σ[(x−3)/2]^(n). 求收敛区间。",
    "hint": "A geometric series converges when the common ratio has magnitude below 1.",
    "answer": "(1,5).",
    "explanation": "|(x−3)/2|<1 gives 1<x<5. At both endpoints the terms fail to approach zero."
  },
  {
    "id": "10.13-02",
    "topic": "10.13",
    "label": "Endpoint asymmetry",
    "difficulty": "medium",
    "question": "Find the interval of convergence of Σ_(n=1)^(∞)(x+1)^(n)/(n·3^(n)). 分别检验两个端点。",
    "hint": "First solve |x+1|<3.",
    "answer": "[−4,2).",
    "explanation": "At x=2 the series is harmonic and diverges. At x=−4 it is alternating harmonic and converges."
  },
  {
    "id": "10.13-03",
    "topic": "10.13",
    "label": "Infinite radius",
    "difficulty": "medium",
    "question": "Find the radius of convergence of Σx^(n)/n!. 求收敛半径。",
    "hint": "Use the Ratio Test.",
    "answer": "R=∞.",
    "explanation": "The ratio is |x|/(n+1)→0 for every real x."
  },
  {
    "id": "10.13-04",
    "topic": "10.13",
    "label": "Zero radius",
    "difficulty": "medium",
    "question": "Find the radius of convergence of Σn!x^(n). 求收敛半径。",
    "hint": "The ratio contains (n+1)|x|.",
    "answer": "R=0.",
    "explanation": "For any x≠0, the ratio grows without bound. The series converges only at its center x=0."
  },
  {
    "id": "10.13-05",
    "topic": "10.13",
    "label": "Known radius",
    "difficulty": "easy",
    "question": "A power series centered at 2 has radius 4. What can be concluded at x=−2 and x=6? 仅由半径能否判断端点？",
    "hint": "Both points lie exactly R units from the center.",
    "answer": "Nothing definite; each endpoint must be tested from the coefficients.",
    "explanation": "The radius guarantees convergence only for |x−2|<4 and divergence for |x−2|>4."
  },
  {
    "id": "10.13-06",
    "topic": "10.13",
    "label": "Endpoint change",
    "difficulty": "hard",
    "question": "The series Σ_(n=1)^(∞)x^(n)/n² converges on [−1,1]. Find the interval of convergence of its term-by-term derivative. 求导后重新检验端点。",
    "hint": "Differentiate to get Σx^(n−1)/n.",
    "answer": "[−1,1).",
    "explanation": "The radius remains 1. At x=1 the derivative series is harmonic and diverges; at x=−1 it is alternating harmonic up to an overall sign and converges."
  },
  {
    "id": "10.14-01",
    "topic": "10.14",
    "label": "Sine series",
    "difficulty": "easy",
    "question": "Write the Maclaurin series for sin x. 写出 sin x 的麦克劳林级数。",
    "hint": "Only odd powers appear and the signs alternate.",
    "answer": "Σ_(n=0)^(∞)(−1)^(n)x^(2n+1)/(2n+1)!.",
    "explanation": "The expanded form is x−x³/3!+x⁵/5!−⋯, valid for all real x."
  },
  {
    "id": "10.14-02",
    "topic": "10.14",
    "label": "Coefficient in cos(2x)",
    "difficulty": "medium",
    "question": "Find the coefficient of x⁸ in the Maclaurin series for cos(2x). 求 x⁸ 的系数。",
    "hint": "Use the n=4 cosine term.",
    "answer": "2/315.",
    "explanation": "The term is (2x)⁸/8!=256x⁸/40320=(2/315)x⁸."
  },
  {
    "id": "10.14-03",
    "topic": "10.14",
    "label": "Coefficient in e³ˣ",
    "difficulty": "medium",
    "question": "Find the coefficient of x⁴ in the Maclaurin series for e^(3x). 求 x⁴ 的系数。",
    "hint": "Use (3x)⁴/4!.",
    "answer": "27/8.",
    "explanation": "3⁴/4!=81/24=27/8."
  },
  {
    "id": "10.14-04",
    "topic": "10.14",
    "label": "Geometric transformation",
    "difficulty": "medium",
    "question": "Write a power series for 1/(1+2x) and state its interval of convergence. 写出幂级数与收敛区间。",
    "hint": "Use common ratio −2x.",
    "answer": "Σ_(n=0)^(∞)(−2x)^(n), for −1/2<x<1/2.",
    "explanation": "The geometric condition is |−2x|<1. Both endpoints diverge because the terms do not approach zero."
  },
  {
    "id": "10.14-05",
    "topic": "10.14",
    "label": "Taylor center",
    "difficulty": "medium",
    "question": "Write the first four nonzero terms of the Taylor series for e^(x) about x=1. 以 1 为中心展开。",
    "hint": "Factor e^(x)=e·e^(x−1).",
    "answer": "e[1+(x−1)+(x−1)²/2!+(x−1)³/3!+⋯].",
    "explanation": "Every derivative at 1 equals e, so each Taylor coefficient is e/n!."
  },
  {
    "id": "10.14-06",
    "topic": "10.14",
    "label": "Recognize a series",
    "difficulty": "easy",
    "question": "Identify the function represented by x−x³/3!+x⁵/5!−x⁷/7!+⋯. 识别函数。",
    "hint": "Compare odd powers and alternating signs.",
    "answer": "sin x.",
    "explanation": "These are exactly the Maclaurin coefficients and powers of the sine series."
  },
  {
    "id": "10.15-01",
    "topic": "10.15",
    "label": "Differentiate a series",
    "difficulty": "medium",
    "question": "Differentiate f(x)=Σ_(n=1)^(∞)x^(2n)/n! and list four nonzero terms. 逐项求导。",
    "hint": "Differentiate x^(2n), then test n=1 through 4.",
    "answer": "f′(x)=Σ2n x^(2n−1)/n!=2x+2x³+x⁵+x⁷/3+⋯.",
    "explanation": "For n=1,2,3,4 the coefficients simplify to 2, 2, 1, and 1/3."
  },
  {
    "id": "10.15-02",
    "topic": "10.15",
    "label": "Integrate a geometric series",
    "difficulty": "medium",
    "question": "Use a power series to represent ln(1+x) for |x|<1. 从 1/(1+x) 逐项积分。",
    "hint": "Integrate 1−x+x²−x³+⋯ from 0 to x.",
    "answer": "ln(1+x)=x−x²/2+x³/3−x⁴/4+⋯=Σ_(n=1)^(∞)(−1)^(n+1)x^(n)/n.",
    "explanation": "The definite integral fixes the constant because ln(1+0)=0."
  },
  {
    "id": "10.15-03",
    "topic": "10.15",
    "label": "Rational representation",
    "difficulty": "easy",
    "question": "Represent x²/(1+x²) as a power series and state its interval. 用几何级数表示。",
    "hint": "Use common ratio −x².",
    "answer": "Σ_(n=0)^(∞)(−1)^(n)x^(2n+2), for −1<x<1.",
    "explanation": "Multiply 1/(1+x²)=Σ(−1)^(n)x^(2n) by x². Both endpoints diverge by the nth-term test."
  },
  {
    "id": "10.15-04",
    "topic": "10.15",
    "label": "Integrate a composition",
    "difficulty": "hard",
    "question": "Write the first three nonzero terms of ∫_0^(x)cos(t⁶)dt. 先代换再逐项积分。",
    "hint": "cos(t⁶)=1−t¹²/2!+t²⁴/4!−⋯.",
    "answer": "x−x¹³/(2!·13)+x²⁵/(4!·25)+⋯.",
    "explanation": "Integrate powers 0, 12, and 24 from 0 to x."
  },
  {
    "id": "10.15-05",
    "topic": "10.15",
    "label": "Differentiate a Taylor polynomial",
    "difficulty": "medium",
    "question": "Let T(x)=7−3h+5h²−2h³+6h⁴, h=x−3. Find T′(3.3). 对多项式求导并代入。",
    "hint": "Use T′=−3+10h−6h²+24h³ and h=0.3.",
    "answer": "0.108.",
    "explanation": "−3+3−0.54+0.648=0.108."
  },
  {
    "id": "10.15-06",
    "topic": "10.15",
    "label": "Product coefficient",
    "difficulty": "hard",
    "question": "Find the coefficient of x⁴ in the Maclaurin series for sin²x. 求级数乘积中的系数。",
    "hint": "Square x−x³/6+⋯ and keep only degree 4.",
    "answer": "−1/3.",
    "explanation": "The x⁴ contribution is 2·x·(−x³/6)=−x⁴/3."
  }
]);
