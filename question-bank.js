window.AP_CALCULUS_QUESTION_BANK = Object.freeze([
  {
    id: "1.1-01",
    topic: "1.1",
    label: "Secant Slope / 割线斜率",
    difficulty: "easy",
    question: "What does the slope of a secant line represent?",
    hint: "割线斜率表示什么？",
    answer: "The average rate of change over an interval. / 一个区间上的平均变化率。",
    explanation: "A secant joins two graph points, so its slope is change in output divided by change in input. / 割线连接图像上的两个点。"
  },
  {
    id: "1.1-02",
    topic: "1.1",
    label: "Average Rate / 平均变化率",
    difficulty: "easy",
    question: "A particle has position s(t) = t² meters, where t is measured in seconds. Find its average velocity on [1, 3].",
    hint: "求平均速度，并写出单位。",
    answer: "4 m/s / 4 米/秒",
    explanation: "[s(3) − s(1)] / (3 − 1) = (9 − 1) / 2 = 4."
  },
  {
    id: "1.1-03",
    topic: "1.1",
    label: "Table Estimate / 表格估计",
    difficulty: "medium",
    question: "Given s(1.9)=3.61, s(2)=4.00, and s(2.1)=4.41 meters, where t is measured in seconds, estimate the instantaneous velocity at t=2 using a symmetric interval.",
    hint: "用 t=2 两侧等距离的数据。",
    answer: "4.0 m/s / 约 4.0 米/秒",
    explanation: "[s(2.1) − s(1.9)] / (2.1 − 1.9) = 0.80 / 0.20 = 4.0."
  },
  {
    id: "1.1-04",
    topic: "1.1",
    label: "Difference Quotient / 差商",
    difficulty: "medium",
    question: "For s(t)=t², simplify [s(2+h)−s(2)]/h. What value does it approach as h approaches 0?",
    hint: "先化简，再让 h→0。",
    answer: "The quotient is 4+h, and it approaches 4. / 差商为 4+h，趋近于 4。",
    explanation: "[(2+h)²−4]/h = (4h+h²)/h = 4+h for h≠0."
  },
  {
    id: "1.1-05",
    topic: "1.1",
    label: "Meaning of Sign / 正负号含义",
    difficulty: "medium",
    question: "The average rate of change of a cyclist’s distance from home is −65 m/min. What does the negative sign mean?",
    hint: "结合“离家距离”解释。",
    answer: "The cyclist ended closer to home over the interval. / 在该区间结束时，骑行者离家更近。",
    explanation: "Distance from home decreased by an average of 65 meters per minute; speed itself is not negative. / 离家距离平均每分钟减少 65 米。"
  },
  {
    id: "1.1-06",
    topic: "1.1",
    label: "Instantaneous Rate / 瞬时变化率",
    difficulty: "easy",
    question: "Why can’t [D(2)−D(2)]/(2−2) be used as the instantaneous rate at t=2?",
    hint: "分母会发生什么？",
    answer: "It is 0/0, which is undefined. / 得到 0/0，差商无定义。",
    explanation: "Use nearby secant slopes approaching a tangent slope; do not divide by a zero time interval. / 应让附近割线斜率趋近切线斜率。"
  },
  {
    id: "1.2-01",
    topic: "1.2",
    label: "Limit Notation / 极限记号",
    difficulty: "easy",
    question: "Read aloud: lim as x→7 of f(x) = 10.",
    hint: "用完整英文句子读出。",
    answer: "The limit of f(x) as x approaches 7 is 10.",
    explanation: "The input target is 7; the output target is 10. / 7 是输入目标，10 是输出目标。"
  },
  {
    id: "1.2-02",
    topic: "1.2",
    label: "Limit vs. Value / 极限与点值",
    difficulty: "easy",
    question: "If lim as x→2 of f(x)=5, what must f(2) equal?",
    hint: "只知道极限，能否确定点值？",
    answer: "It cannot be determined. / 无法确定。",
    explanation: "f(2) could be 5, a different number, or undefined. / 点值可以等于 5、其他数或无定义。"
  },
  {
    id: "1.2-03",
    topic: "1.2",
    label: "Hole and Filled Point / 空心点与实心点",
    difficulty: "easy",
    question: "Near x=3, both graph branches approach the open circle (3,4), while the filled point is (3,−1). Find the limit and f(3).",
    hint: "分别读附近趋势和实心点。",
    answer: "The limit is 4, and f(3)=−1. / 极限为 4，f(3)=−1。",
    explanation: "The open circle records the nearby trend; the filled point records the function value. / 空心点看趋势，实心点看点值。"
  },
  {
    id: "1.2-04",
    topic: "1.2",
    label: "Undefined Point / 点值无定义",
    difficulty: "easy",
    question: "Can a limit exist when f(a) is undefined?",
    hint: "极限看点值还是附近趋势？",
    answer: "Yes. / 可以。",
    explanation: "A limit depends on values arbitrarily close to a, not necessarily on the value at a. / 极限取决于 a 附近。"
  },
  {
    id: "1.2-05",
    topic: "1.2",
    label: "Changing One Point / 改变单个点",
    difficulty: "medium",
    question: "Only the single value f(a) is changed; all nearby values stay the same. Does lim as x→a of f(x) change?",
    hint: "附近图像没有改变。",
    answer: "No. / 不会。",
    explanation: "Changing one isolated function value does not change nearby behavior. / 改变一个孤立点不改变趋近趋势。"
  },
  {
    id: "1.2-06",
    topic: "1.2",
    label: "Input and Output / 输入与输出",
    difficulty: "easy",
    question: "In lim as x→−2 of g(x)=6, identify the input target and the output target.",
    hint: "谁趋近 −2？谁趋近 6？",
    answer: "Input target: −2; output target: 6. / 输入目标 −2；输出目标 6。",
    explanation: "x approaches −2 while g(x) approaches 6. / x 趋近 −2，而 g(x) 趋近 6。"
  },
  {
    id: "1.3-01",
    topic: "1.3",
    label: "One-Sided Notation / 单侧极限",
    difficulty: "easy",
    question: "In lim as x→a⁻ of f(x), which x-values should you follow?",
    hint: "上标负号表示哪一侧？",
    answer: "Values with x<a, approaching a from the left. / 看 x<a 的点，从左侧趋近。",
    explanation: "The superscript minus indicates direction, not a negative function value. / 负号表示方向。"
  },
  {
    id: "1.3-02",
    topic: "1.3",
    label: "Jump Discontinuity / 跳跃",
    difficulty: "easy",
    question: "If the left-hand limit at x=3 is −1 and the right-hand limit is 2, find the two-sided limit.",
    hint: "左右极限不相等。",
    answer: "DNE / 不存在",
    explanation: "A two-sided limit exists only when the two one-sided limits are equal. / 左右极限相等时双侧极限才存在。"
  },
  {
    id: "1.3-03",
    topic: "1.3",
    label: "Equal Sides / 左右一致",
    difficulty: "easy",
    question: "Both one-sided limits at x=a equal 5, but f(a)=9. Find lim as x→a of f(x).",
    hint: "点值不决定极限。",
    answer: "5",
    explanation: "Matching nearby trends determine the two-sided limit, not f(a). / 双侧极限由一致的附近趋势决定。"
  },
  {
    id: "1.3-04",
    topic: "1.3",
    label: "Missing Side / 缺少一侧",
    difficulty: "medium",
    question: "Near x=2, the graph has values only for x>2 and approaches y=1; there are no domain values approaching 2 from the left. Using our AP graph-reading convention, find the right-hand and two-sided limits.",
    hint: "按本课规则：右侧有趋势，左侧没有邻近图像。",
    answer: "Right-hand limit = 1; two-sided limit = DNE. / 右极限 1；双侧极限不存在。",
    explanation: "A two-sided limit needs nearby graph values from both sides. / 双侧极限要求左右两侧都有邻近函数值。"
  },
  {
    id: "1.3-05",
    topic: "1.3",
    label: "Meaning of DNE / DNE 的含义",
    difficulty: "easy",
    question: "True or false: If a limit is DNE, then the limit equals 0.",
    hint: "DNE 是数值吗？",
    answer: "False. / 错误。",
    explanation: "DNE means no single limit exists; it is not a numerical value. / DNE 不是数字 0。"
  },
  {
    id: "1.3-06",
    topic: "1.3",
    label: "Build a Graph / 按条件作图",
    difficulty: "challenge",
    question: "Describe one graph marking that satisfies lim as x→3 of g(x)=4 and g(3)=−1.",
    hint: "空心点和实心点分别放在哪里？",
    answer: "Both branches approach an open circle at (3,4); place a filled point at (3,−1). / 左右分支趋近空心点 (3,4)，并在 (3,−1) 放实心点。",
    explanation: "The open circle shows the approached height; the filled point defines g(3). / 空心点表示趋势，实心点定义点值。"
  },
  {
    id: "1.4-01",
    topic: "1.4",
    label: "Limit vs. Value / 表格中的极限与点值",
    difficulty: "easy",
    question: "A table gives f(1.99)=3.99, f(2)=10, and f(2.01)=4.01. Estimate lim as x→2 of f(x), and state f(2).",
    hint: "附近数据与 x=2 处的数据分开看。",
    answer: "The limit is approximately 4, and f(2)=10. / 极限约为 4，f(2)=10。",
    explanation: "Values on both sides suggest a limit near 4; the x=2 entry gives the function value. / 两侧数据支持极限约为 4，x=2 那一列给出点值。"
  },
  {
    id: "1.4-02",
    topic: "1.4",
    label: "Unequal Sides / 表格中的跳跃",
    difficulty: "medium",
    question: "As x approaches 9 from the left, table values approach 1. From the right, they approach 2. Find the two-sided limit.",
    hint: "先比较左右趋势。",
    answer: "DNE / 不存在",
    explanation: "The left-hand and right-hand estimates disagree. / 左右极限不相等。"
  },
  {
    id: "1.4-03",
    topic: "1.4",
    label: "Nearest Values / 最近邻数据",
    difficulty: "easy",
    question: "Near x=3, the closest table values are f(2.999)=7.998 and f(3.001)=8.002. Estimate the limit.",
    hint: "优先使用目标两侧最接近的数据。",
    answer: "Approximately 8. / 约为 8。",
    explanation: "The closest values from opposite sides bracket 8. / 两侧数据分别略小于和略大于 8。"
  },
  {
    id: "1.4-04",
    topic: "1.4",
    label: "Removable Hole / 可去间断",
    difficulty: "medium",
    question: "For f(x)=(x²−4)/(x−2), a table gives f(1.99)=3.99, f(1.999)=3.999, f(2.001)=4.001, and f(2.01)=4.01. Estimate the limit as x→2.",
    hint: "目标点无定义，但观察附近趋势。",
    answer: "Approximately 4. / 约为 4。",
    explanation: "Values from both sides suggest a limit near 4 even though f(2) is undefined. / 两侧数据支持极限约为 4；点值无定义不妨碍该极限存在。"
  },
  {
    id: "1.4-05",
    topic: "1.4",
    label: "Composite Limit / 复合函数极限",
    difficulty: "medium",
    question: "A table suggests lim as x→2 of f(x)=5. Estimate lim as x→2 of cos(f(x)), using radians.",
    hint: "先求内层极限，再计算外层。",
    answer: "cos(5) ≈ 0.284 / 弧度制",
    explanation: "Cosine is continuous, so apply it to the inner limiting value 5. / 余弦连续，可代入内层趋近值。"
  },
  {
    id: "1.4-06",
    topic: "1.4",
    label: "Insufficient Data / 数据不足",
    difficulty: "medium",
    question: "A table lists only x-values less than a. Can it determine the two-sided limit as x approaches a?",
    hint: "只有左侧数据。",
    answer: "No; it can only suggest the left-hand limit. / 不能；最多只能支持对左极限的估计。",
    explanation: "The right-hand behavior could be different, so data from both sides are required. / 右侧趋势可能不同，因此判断双侧极限需要两侧数据。"
  },
  {
    id: "1.5-01",
    topic: "1.5",
    label: "Limit Laws / 极限定律",
    difficulty: "easy",
    question: "As x→a, suppose f(x)→3 and g(x)→−2. Find the limit of 4f(x)+g(x).",
    hint: "使用常数倍与和法则。",
    answer: "10",
    explanation: "4(3)+(−2)=10."
  },
  {
    id: "1.5-02",
    topic: "1.5",
    label: "Quotient Condition / 商法则条件",
    difficulty: "medium",
    question: "As x→a, suppose p(x)→6 and q(x)→0. What can you conclude about the limit of p(x)/q(x) from the quotient law alone?",
    hint: "分母极限为 0。",
    answer: "The quotient law cannot be applied; the original limit is not determined. / 商法则不能使用，原极限仍无法判断。",
    explanation: "A denominator limit of zero does not by itself prove DNE. / 分母极限为零不能单独证明极限不存在。"
  },
  {
    id: "1.5-03",
    topic: "1.5",
    label: "Input Mapping / 输入映射",
    difficulty: "challenge",
    question: "Given lim as u→−1 of f(u)=2 and lim as x→1 of g(x)=6, find lim as x→1 of [f(−x)+g(x)/2].",
    hint: "先判断 −x 趋近哪里。",
    answer: "5",
    explanation: "As x→1, −x→−1. Therefore f(−x)→2 and g(x)/2→3. / 结果为 2+6/2=5。"
  },
  {
    id: "1.5-04",
    topic: "1.5",
    label: "Limit vs. Point Data / 极限数据与点值",
    difficulty: "challenge",
    question: "As x→5, suppose f(x)→6, g(x)→−1, and h(x)→5, while h(5)=3. Evaluate the limit of h(x)[f(x)+2g(x)] minus h(5).",
    hint: "极限内部用极限数据，最后一项用点值。",
    answer: "17",
    explanation: "5[6+2(−1)]−3 = 5(4)−3 = 17."
  },
  {
    id: "1.5-05",
    topic: "1.5",
    label: "Composition / 复合函数",
    difficulty: "medium",
    question: "If lim as x→2 of g(x)=−1 and f is continuous at −1 with f(−1)=4, find lim as x→2 of f(g(x)).",
    hint: "先找内层趋近值。",
    answer: "4",
    explanation: "The inner function approaches −1, so continuity gives f(g(x))→f(−1)=4. / 外层在 −1 连续。"
  },
  {
    id: "1.5-06",
    topic: "1.5",
    label: "Piecewise Limit / 分段函数极限",
    difficulty: "challenge",
    question: "Let f(x)=x+2 for x<1 and f(x)=5−x for x≥1. Find the left-hand limit, right-hand limit, two-sided limit, and f(1).",
    hint: "按方向选择分支；等号决定点值。",
    answer: "Left: 3; right: 4; two-sided: DNE; f(1)=4. / 左 3；右 4；双侧 DNE；f(1)=4。",
    explanation: "The branches approach different heights. The second branch includes x=1, so it supplies the function value. / 两段趋近值不同；第二段含等号，因此给出 f(1)。"
  },
  {
    id: "1.6-01",
    topic: "1.6",
    label: "Direct Substitution / 直接代入",
    difficulty: "easy",
    question: "Evaluate lim as x→−1 of (x²+2x−4).",
    hint: "多项式在目标点连续，可以直接代入。",
    answer: "−5",
    explanation: "Substitute x=−1: (−1)²+2(−1)−4 = 1−2−4 = −5. / 直接代入即可。"
  },
  {
    id: "1.6-02",
    topic: "1.6",
    label: "Factor and Cancel / 因式分解约分",
    difficulty: "medium",
    question: "Evaluate lim as x→−7 of (2x²+13x−7)/(x+7).",
    hint: "分子含有因式 x+7。",
    answer: "−15",
    explanation: "2x²+13x−7=(2x−1)(x+7). Cancel x+7 for nearby x, then 2(−7)−1=−15. / 先因式分解并约分，再代入。"
  },
  {
    id: "1.6-03",
    topic: "1.6",
    label: "Nonzero over a Vanishing Denominator / 非零量除以趋近 0 的量",
    difficulty: "challenge",
    question: "Evaluate the two-sided limit as x→−6 of (x²+4x+3)/(x+6).",
    hint: "分子趋近 15；分母从左右两侧趋近 0。",
    answer: "DNE / 不存在",
    explanation: "The left-hand limit is −∞ and the right-hand limit is +∞, so no single two-sided limit exists. / 左右趋势相反，因此双侧极限不存在。"
  },
  {
    id: "1.6-04",
    topic: "1.6",
    label: "Special Trig Limit / 特殊三角极限",
    difficulty: "medium",
    question: "Using radians, evaluate lim as x→0 of sin(3x)/x.",
    hint: "把式子改写成 3·sin(3x)/(3x)。",
    answer: "3",
    explanation: "sin(3x)/x = 3[sin(3x)/(3x)], and the bracketed limit is 1. / 配成 sin u/u 的形式。"
  },
  {
    id: "1.6-05",
    topic: "1.6",
    label: "Ratio of Sines / 正弦比",
    difficulty: "medium",
    question: "Using radians, evaluate lim as x→0 of sin(7x)/sin(9x).",
    hint: "上下分别配成 sin(kx)/(kx)。",
    answer: "7/9",
    explanation: "[sin(7x)/(7x)]·[9x/sin(9x)]·(7/9) → 1·1·(7/9). / 分别使用特殊三角极限。"
  },
  {
    id: "1.6-06",
    topic: "1.6",
    label: "Trig Identity / 三角恒等式",
    difficulty: "challenge",
    question: "Using radians, evaluate lim as x→0 of (cos²x−1)/[x(cos x+1)].",
    hint: "先把 cos²x−1 写成平方差。",
    answer: "0",
    explanation: "Factor and cancel cos x+1 to get (cos x−1)/x, whose limit is 0. / 用平方差约分后套用特殊极限。"
  },
  {
    id: "1.7-01",
    topic: "1.7",
    label: "Choose Direct Substitution / 选择直接代入",
    difficulty: "easy",
    question: "Evaluate lim as x→−3 of (x−2)/(x²−3x+2).",
    hint: "先代入检查分母是否为 0。",
    answer: "−1/4",
    explanation: "Direct substitution gives (−5)/(9+9+2)=−5/20=−1/4. / 分母不为 0，直接代入。"
  },
  {
    id: "1.7-02",
    topic: "1.7",
    label: "Rationalize the Numerator / 分子有理化",
    difficulty: "medium",
    question: "Evaluate lim as x→5 of [√(x+4)−3]/(x−5).",
    hint: "分子分母同乘分子的共轭式。",
    answer: "1/6",
    explanation: "Rationalizing gives 1/[√(x+4)+3], which approaches 1/6. / 有理化并约去 x−5。"
  },
  {
    id: "1.7-03",
    topic: "1.7",
    label: "Rationalize the Denominator / 分母有理化",
    difficulty: "challenge",
    question: "Evaluate lim as x→10 of (x−10)/[3−√(x−1)].",
    hint: "分子分母同乘 3+√(x−1)，并留意 10−x 的符号。",
    answer: "−6",
    explanation: "The expression simplifies to −[3+√(x−1)], so the limit is −6. / 有理化后 10−x=−(x−10)。"
  },
  {
    id: "1.7-04",
    topic: "1.7",
    label: "Complex Fraction / 复合分式",
    difficulty: "challenge",
    question: "Evaluate lim as x→0 of x / [1/(x−4)+1/4].",
    hint: "先把中括号里的两个分数通分。",
    answer: "−16",
    explanation: "1/(x−4)+1/4 = x/[4(x−4)], so the full expression becomes 4(x−4)→−16. / 先通分，再把除法改成乘倒数。"
  },
  {
    id: "1.7-05",
    topic: "1.7",
    label: "Fraction Difference Quotient / 分式差商",
    difficulty: "medium",
    question: "Evaluate lim as x→0 of [1/(x+3)−1/3]/x.",
    hint: "先合并分子中的两个分数。",
    answer: "−1/9",
    explanation: "The numerator is −x/[3(x+3)]; after dividing by x, −1/[3(x+3)]→−1/9. / 通分后约去 x。"
  },
  {
    id: "1.7-06",
    topic: "1.7",
    label: "Procedure Check / 方法选择",
    difficulty: "easy",
    question: "After direct substitution gives 0/0, choose the usual next step for (A) a factorable polynomial quotient, (B) a quotient containing a difference of radicals, and (C) a complex fraction.",
    hint: "在 factor, rationalize, combine fractions 中选择。",
    answer: "A: factor and cancel; B: rationalize; C: combine fractions. / A 因式分解约分；B 有理化；C 通分。",
    explanation: "The form of the expression—not 0/0 alone—determines the useful algebraic procedure. / 先识别结构，再选方法。"
  },
  {
    id: "1.8-01",
    topic: "1.8",
    label: "Squeeze Theorem / 夹逼定理",
    difficulty: "easy",
    question: "State the three facts needed to use the Squeeze Theorem for g(x)≤f(x)≤h(x) near x=a.",
    hint: "检查上下界的极限是否相同。",
    answer: "g(x)≤f(x)≤h(x) near a, lim g(x)=L, and lim h(x)=L. Then lim f(x)=L. / 夹在中间，且上下界都趋近同一个 L。",
    explanation: "The inequalities only need to hold in a punctured neighborhood of a. The value at x=a is irrelevant. / 不等式只需在 a 附近成立，不要求点值。"
  },
  {
    id: "1.8-02",
    topic: "1.8",
    label: "Oscillation with x² / 振荡与 x²",
    difficulty: "medium",
    question: "Evaluate lim as x→0 of x²cos(1/x).",
    hint: "使用 −1≤cos(1/x)≤1。",
    answer: "0",
    explanation: "−x²≤x²cos(1/x)≤x², and both outer functions approach 0. / 上下界都趋近 0，所以中间函数也趋近 0。"
  },
  {
    id: "1.8-03",
    topic: "1.8",
    label: "Absolute-Value Bound / 绝对值界",
    difficulty: "medium",
    question: "Evaluate lim as x→0 of x sin(1/x²).",
    hint: "跨过 x=0 时，使用 |x| 作上下界。",
    answer: "0",
    explanation: "Because |sin(1/x²)|≤1, we have −|x|≤x sin(1/x²)≤|x|. Both bounds approach 0. / 用绝对值界可避免 x<0 时不等号方向错误。"
  },
  {
    id: "1.8-04",
    topic: "1.8",
    label: "Matching Bounds / 相同上下界",
    difficulty: "medium",
    question: "Near x=2, suppose −2−(x−2)²≤f(x)≤−2+(x−2)². Find lim as x→2 of f(x).",
    hint: "分别求两个外层函数在 x=2 的极限。",
    answer: "−2",
    explanation: "Both −2−(x−2)² and −2+(x−2)² approach −2, so the Squeeze Theorem gives lim f(x)=−2. / 上下界同趋近 −2。"
  },
  {
    id: "1.8-05",
    topic: "1.8",
    label: "When Squeeze Does Not Decide / 不能判定",
    difficulty: "challenge",
    question: "Near x=−1, suppose x²+x−1≤f(x)≤−x²−4x−2. What can the Squeeze Theorem conclude?",
    hint: "先比较两个外层极限，不要直接写 DNE。",
    answer: "It cannot determine the limit. / 夹逼定理不能确定该极限。",
    explanation: "The lower bound approaches −1 while the upper bound approaches 1. Different bounds mean the theorem is inconclusive; they do not prove that lim f(x) is DNE. / 上下界不同，只能说本定理无法判定。"
  },
  {
    id: "1.8-06",
    topic: "1.8",
    label: "Odd-Power Envelope / 奇次幂包络",
    difficulty: "challenge",
    question: "Evaluate lim as x→0 of x⁵cos(1/x³).",
    hint: "写成 |x⁵cos(1/x³)|≤|x|⁵。",
    answer: "0",
    explanation: "−|x|⁵≤x⁵cos(1/x³)≤|x|⁵, and both bounds approach 0. / 双侧邻域中应使用绝对值界。"
  },
  {
    id: "1.9-01",
    topic: "1.9",
    label: "Absolute Value from the Left / 左侧绝对值",
    difficulty: "easy",
    question: "Evaluate lim as x→7⁻ of |x−7|/(x−7).",
    hint: "从左侧靠近时，x−7<0。",
    answer: "−1",
    explanation: "For x<7, |x−7|=−(x−7), so the quotient equals −1 near 7 from the left. / 先根据方向拆绝对值。"
  },
  {
    id: "1.9-02",
    topic: "1.9",
    label: "Absolute Value from the Right / 右侧绝对值",
    difficulty: "easy",
    question: "Evaluate lim as x→8⁺ of |x−8|/(x−8).",
    hint: "从右侧靠近时，x−8>0。",
    answer: "1",
    explanation: "For x>8, |x−8|=x−8, so the quotient equals 1 near 8 from the right. / 右侧时绝对值内为正。"
  },
  {
    id: "1.9-03",
    topic: "1.9",
    label: "Sign Quotient / 符号商",
    difficulty: "medium",
    question: "Evaluate lim as x→−9⁻ of (x+9)/|x+9|.",
    hint: "当 x<−9 时，x+9<0。",
    answer: "−1",
    explanation: "On the left of −9, |x+9|=−(x+9), so the quotient is −1. / 根据趋近方向判断符号。"
  },
  {
    id: "1.9-04",
    topic: "1.9",
    label: "Piecewise Agreement / 分段一致",
    difficulty: "medium",
    question: "Let f(x)=2x−1 for x<5 and f(x)=14−x for x>5. Find lim as x→5 of f(x).",
    hint: "分别代入左右分支；f(5) 不必有定义。",
    answer: "9",
    explanation: "The left branch approaches 2(5)−1=9 and the right branch approaches 14−5=9. The two-sided limit exists even though f(5) is not given. / 左右趋势一致即可。"
  },
  {
    id: "1.9-05",
    topic: "1.9",
    label: "Table vs. Point Value / 表格趋势与点值",
    difficulty: "medium",
    question: "Table values from both sides suggest that f(x) approaches 0.25 as x approaches 5, while f(5)=4. Based on the table, estimate the limit and state f(5).",
    hint: "附近趋势与点值是两个不同问题。",
    answer: "Estimated limit ≈0.25; f(5)=4. / 估计极限约为 0.25，函数值为 4。",
    explanation: "A finite table suggests nearby behavior rather than proving it. The separate point value does not change the estimate. / 有限表格用于估计趋势；单独的点值不改变这一估计。"
  },
  {
    id: "1.9-06",
    topic: "1.9",
    label: "Algebra to Behavior / 代数连接趋势",
    difficulty: "challenge",
    question: "Evaluate lim as x→3 of [(x−3)²(x²+1)]/|x−3|.",
    hint: "当 x≠3 时，(x−3)²/|x−3|=|x−3|。",
    answer: "0",
    explanation: "The expression becomes |x−3|(x²+1) near x=3. The first factor approaches 0 and the second approaches 10, so the product approaches 0. / 化简后的形式直接显示趋势。"
  },
  {
    id: "1.10-01",
    topic: "1.10",
    label: "Removable Discontinuity / 可去间断",
    difficulty: "easy",
    question: "What feature identifies a removable discontinuity?",
    hint: "什么情况下可通过补一个点修复？",
    answer: "A finite two-sided limit exists, but the function value is missing or different. / 双侧极限为有限值，但点值缺失或不等于该极限。",
    explanation: "Defining or changing only f(c) to the limit value removes the hole. / 把 f(c) 定义为极限值即可补上空洞。"
  },
  {
    id: "1.10-02",
    topic: "1.10",
    label: "Factor and Classify / 因式分解分类",
    difficulty: "medium",
    question: "Classify every discontinuity of f(x)=(x−2)(x+1)/[(x−2)(x−4)].",
    hint: "约掉的因子和保留在分母的因子分别说明什么？",
    answer: "A hole at x=2 and a vertical asymptote at x=4. / x=2 是空洞，x=4 是竖直渐近线。",
    explanation: "The x−2 factor cancels for nearby x, but x−4 remains in the denominator. / 被约掉的因子产生空洞，未约掉的分母因子产生竖直渐近线。"
  },
  {
    id: "1.10-03",
    topic: "1.10",
    label: "Jump Discontinuity / 跳跃间断",
    difficulty: "easy",
    question: "If lim as x→3⁻ of f(x)=2 and lim as x→3⁺ of f(x)=7, classify the discontinuity at x=3.",
    hint: "左右极限都是有限值，但不相等。",
    answer: "A jump discontinuity at x=3. / x=3 处是跳跃间断。",
    explanation: "When unequal finite one-sided limits exist, the graph has a jump and the two-sided limit does not exist. / 左右有限极限不相等形成跳跃。"
  },
  {
    id: "1.10-04",
    topic: "1.10",
    label: "Tangent Asymptotes / 正切函数渐近线",
    difficulty: "medium",
    question: "Where does tan(2x) have vertical asymptotes on 0≤x≤2π?",
    hint: "令 cos(2x)=0。",
    answer: "x=π/4, 3π/4, 5π/4, and 7π/4.",
    explanation: "cos(2x)=0 when 2x=π/2+kπ; keep the four solutions in the given interval. / 解 cos(2x)=0，并保留区间内四个解。"
  },
  {
    id: "1.10-05",
    topic: "1.10",
    label: "Continuous Function / 连续函数",
    difficulty: "easy",
    question: "How many discontinuities does p(x)=x³−4x have on the real numbers?",
    hint: "多项式在其定义域上连续。",
    answer: "None. / 没有。",
    explanation: "Every polynomial is continuous for all real x. / 多项式在所有实数处连续。"
  },
  {
    id: "1.10-06",
    topic: "1.10",
    label: "Wrong Point Value / 错误点值",
    difficulty: "medium",
    question: "Suppose lim as x→1 of f(x)=4 but f(1)=−2. What type of discontinuity occurs at x=1?",
    hint: "极限存在且有限，但不等于点值。",
    answer: "A removable discontinuity (hole) at x=1. / x=1 处为可去间断（空洞）。",
    explanation: "Changing the single value f(1) to 4 would make the function continuous there. / 只需把 f(1) 改为 4 即可连续。"
  },
  {
    id: "1.11-01",
    topic: "1.11",
    label: "Three Conditions / 连续三条件",
    difficulty: "easy",
    question: "State the three conditions for f to be continuous at x=c.",
    hint: "点值、极限、二者关系。",
    answer: "f(c) is defined; lim as x→c of f(x) exists; and the limit equals f(c). / f(c) 有定义；双侧极限存在；极限等于 f(c)。",
    explanation: "All three conditions are required. / 三个条件缺一不可。"
  },
  {
    id: "1.11-02",
    topic: "1.11",
    label: "Table Test / 表格判断连续",
    difficulty: "easy",
    question: "At x=2, the left- and right-hand limits both equal 5, while f(2)=8. Is f continuous at x=2?",
    hint: "检查极限是否等于点值。",
    answer: "No. / 不连续。",
    explanation: "The two-sided limit exists and equals 5, but 5≠f(2)=8. / 极限存在但不等于点值。"
  },
  {
    id: "1.11-03",
    topic: "1.11",
    label: "Piecewise Boundary / 分段交界",
    difficulty: "medium",
    question: "Let f(x)=x+2 for x<1 and f(x)=3x for x≥1. Is f continuous at x=1?",
    hint: "比较左右极限与 f(1)。",
    answer: "Yes. / 连续。",
    explanation: "The left limit is 3; the right limit and f(1) are also 3. / 左右极限与点值都为 3。"
  },
  {
    id: "1.11-04",
    topic: "1.11",
    label: "Find k / 求连续参数",
    difficulty: "medium",
    question: "Let h(x)=2−x² for x≤−2 and h(x)=4x+k for x>−2. Find k so h is continuous at x=−2.",
    hint: "令两个分段在 x=−2 的趋近值相等。",
    answer: "k=6.",
    explanation: "2−(−2)²=−2 and 4(−2)+k=−8+k, so −8+k=−2. / 令左右表达式在交界处同值。"
  },
  {
    id: "1.11-05",
    topic: "1.11",
    label: "Missing Point / 缺失点值",
    difficulty: "easy",
    question: "If lim as x→c of f(x)=7 but f(c) is undefined, which continuity condition fails?",
    hint: "极限已经存在。",
    answer: "The first condition: f(c) must be defined. / 第一条失败：f(c) 必须有定义。",
    explanation: "The function has a removable discontinuity if assigning f(c)=7 is the only issue. / 若只有点值缺失，则为可去间断。"
  },
  {
    id: "1.11-06",
    topic: "1.11",
    label: "One-Sided Failure / 单侧极限失败",
    difficulty: "medium",
    question: "If lim as x→c⁻ of f(x)=−1 and lim as x→c⁺ of f(x)=−1, but f(c)=3, which of the three continuity conditions fail?",
    hint: "双侧极限是否存在？它等于点值吗？",
    answer: "Only condition 3 fails: the limit does not equal f(c). / 只有第三条失败：极限不等于点值。",
    explanation: "The two-sided limit exists and equals −1, and f(c) is defined, but −1≠3. / 前两条成立，第三条不成立。"
  },
  {
    id: "1.12-01",
    topic: "1.12",
    label: "Denominator Restriction / 分母限制",
    difficulty: "easy",
    question: "Find the domain of f(x)=(x−7)/(x²−9x+14).",
    hint: "因式分解分母，但保留原式的全部限制。",
    answer: "All real x except 2 and 7: (−∞,2)∪(2,7)∪(7,∞). / 除 2、7 外的所有实数。",
    explanation: "x²−9x+14=(x−7)(x−2); cancellation does not restore x=7 to the original domain. / 约分不能恢复原式排除的 x=7。"
  },
  {
    id: "1.12-02",
    topic: "1.12",
    label: "Even Root Domain / 偶次根式定义域",
    difficulty: "easy",
    question: "Find the domain of g(x)=√(12−2x).",
    hint: "被开方数必须大于或等于 0。",
    answer: "x≤6, or (−∞,6].",
    explanation: "12−2x≥0 gives x≤6; remember the inequality reverses when dividing by −2. / 除以负数时不等号反向。"
  },
  {
    id: "1.12-03",
    topic: "1.12",
    label: "Logarithm Domain / 对数定义域",
    difficulty: "easy",
    question: "Find the domain of f(x)=ln(2x+5).",
    hint: "对数真数必须严格大于 0。",
    answer: "x>−5/2, or (−5/2,∞).",
    explanation: "Solve 2x+5>0; equality is not allowed for a logarithm. / 解真数严格大于 0。"
  },
  {
    id: "1.12-04",
    topic: "1.12",
    label: "Combined Restrictions / 组合限制",
    difficulty: "medium",
    question: "Find the domain of h(t)=√(t−1)/(t²−2t−48).",
    hint: "同时检查根式和分母。",
    answer: "[1,8)∪(8,∞).",
    explanation: "The radical requires t≥1; the denominator (t−8)(t+6) excludes 8 (and −6 is already outside t≥1). / 根式要求 t≥1，分母再排除 8。"
  },
  {
    id: "1.12-05",
    topic: "1.12",
    label: "Log Quotient / 对数商",
    difficulty: "challenge",
    question: "Find the domain of ln[x/(x−4)].",
    hint: "解 x/(x−4)>0；分子分母同号。",
    answer: "(−∞,0)∪(4,∞).",
    explanation: "The quotient is positive when x<0 or x>4; x=0 makes the argument 0 and x=4 is undefined. / 商为正的两个区间，端点都不能取。"
  },
  {
    id: "1.12-06",
    topic: "1.12",
    label: "Continuous on an Interval / 区间连续",
    difficulty: "medium",
    question: "Is f(x)=(x−4)/(x²−16) continuous on the entire interval 1<x<6?",
    hint: "检查原式在区间内是否有被排除的点。",
    answer: "No; it is undefined at x=4. / 不连续；x=4 无定义。",
    explanation: "Although it simplifies to 1/(x+4) for x≠4, the original function has a hole at x=4 inside the interval. / 约分后仍要保留原式在 x=4 的空洞。"
  },
  {
    id: "1.13-01",
    topic: "1.13",
    label: "Removable or Not / 是否可去",
    difficulty: "easy",
    question: "A finite two-sided limit L exists at x=c, but f(c) is undefined. Classify the discontinuity.",
    hint: "有限双侧极限已存在。",
    answer: "Removable / 可去间断",
    explanation: "Define f(c)=L; changing one point repairs continuity. / 令 f(c)=L 即可补洞。"
  },
  {
    id: "1.13-02",
    topic: "1.13",
    label: "Fill the Hole / 补洞",
    difficulty: "easy",
    question: "For x≠1, f(x)=(x²−1)/(x−1). What value of f(1) makes f continuous?",
    hint: "先因式分解。",
    answer: "f(1)=2",
    explanation: "(x²−1)/(x−1)=x+1 for x≠1, so the limit is 2. / 附近等价于 x+1。"
  },
  {
    id: "1.13-03",
    topic: "1.13",
    label: "Preserve the Domain / 保留定义域",
    difficulty: "medium",
    question: "For r(x)=(x²−4)/(x²−x−2), identify the hole and vertical asymptote.",
    hint: "分子分母都因式分解。",
    answer: "Hole at (2,4/3); vertical asymptote x=−1. / 空洞在 (2,4/3)，竖直渐近线为 x=−1。",
    explanation: "r=(x−2)(x+2)/[(x−2)(x+1)]=(x+2)/(x+1), but x=2 remains excluded. / 约掉的因子给空洞，未约掉分母零点给竖直渐近线。"
  },
  {
    id: "1.13-04",
    topic: "1.13",
    label: "Piecewise Parameter / 分段参数",
    difficulty: "medium",
    question: "f(x)=(x²−3x−18)/(x−6) for x≠6 and f(6)=a. Find a for continuity.",
    hint: "x²−3x−18=(x−6)(x+3).",
    answer: "a=9",
    explanation: "Nearby f(x)=x+3, so lim as x→6 of f(x)=9. / 点值必须等于极限。"
  },
  {
    id: "1.13-05",
    topic: "1.13",
    label: "Trig Extension / 三角补洞",
    difficulty: "medium",
    question: "f(x)=sin(4x)/(6x) for x≠0 and f(0)=c. Find c for continuity (radians).",
    hint: "sin(4x)/(6x)=(4/6)[sin(4x)/(4x)].",
    answer: "c=2/3",
    explanation: "sin u/u→1 as u→0. / 用基本三角极限。"
  },
  {
    id: "1.13-06",
    topic: "1.13",
    label: "Cannot Repair a Jump / 跳跃不可补",
    difficulty: "challenge",
    question: "lim as x→2⁻ of f(x)=1 and lim as x→2⁺ of f(x)=4. Can any choice of f(2) make f continuous at 2?",
    hint: "先判断双侧极限。",
    answer: "No. / 不能。",
    explanation: "The one-sided limits disagree, so no two-sided limit exists; changing one point cannot remove a jump. / 左右极限不同，改点值无效。"
  },
  {
    id: "1.14-01",
    topic: "1.14",
    label: "One-Sided Sign / 单侧符号",
    difficulty: "easy",
    question: "Evaluate lim as x→3⁻ of 1/(x−3) and lim as x→3⁺ of 1/(x−3).",
    hint: "分母从负小量或正小量趋近 0。",
    answer: "−∞; +∞",
    explanation: "The numerator is positive; the denominator changes sign across 3. / 分母左右变号。"
  },
  {
    id: "1.14-02",
    topic: "1.14",
    label: "Two-Sided Infinite Limit / 双侧无穷极限",
    difficulty: "easy",
    question: "Evaluate lim as x→1 of (x−3)/(x−1)².",
    hint: "平方分母两侧都为正。",
    answer: "−∞",
    explanation: "Numerator→−2 while denominator→0+ from both sides. / 分子负，平方分母趋近 0+。"
  },
  {
    id: "1.14-03",
    topic: "1.14",
    label: "Hole or VA / 空洞还是渐近线",
    difficulty: "medium",
    question: "For f(x)=(x²+2x−8)/(x²+x−12), identify holes and vertical asymptotes.",
    hint: "Factor both quadratics. / 分子分母都因式分解。",
    answer: "Hole at (−4,6/7); vertical asymptote x=3. / 空洞在 (−4,6/7)，竖直渐近线为 x=3。",
    explanation: "Cancel x+4: the expression is (x−2)/(x−3) for x≠−4, so the hole is (−4,6/7); the surviving denominator gives x=3 as the vertical asymptote. / 约掉 x+4 后，x=−4 是空洞，x=3 是竖直渐近线。"
  },
  {
    id: "1.14-04",
    topic: "1.14",
    label: "Opposite Infinities / 异号无穷",
    difficulty: "medium",
    question: "If lim as x→2⁻ of f(x)=+∞ and lim as x→2⁺ of f(x)=−∞, find lim as x→2 of f(x) and state whether x=2 is a vertical asymptote.",
    hint: "双侧极限与渐近线条件不同。",
    answer: "The two-sided limit is DNE; yes, x=2 is a vertical asymptote. / 双侧极限不存在；x=2 是竖直渐近线。",
    explanation: "Opposite one-sided infinities do not form one two-sided limit; either infinite side is enough for a vertical asymptote. / 异号无穷使双侧极限不存在，但仍有竖直渐近线。"
  },
  {
    id: "1.14-05",
    topic: "1.14",
    label: "Tangent Asymptotes / 正切渐近线",
    difficulty: "medium",
    question: "Find all vertical asymptotes of tan(2x) on [0,π].",
    hint: "cos(2x)=0.",
    answer: "x=π/4 and x=3π/4",
    explanation: "2x=π/2+kπ; keep values in [0,π]. / 解余弦为零并限制区间。"
  },
  {
    id: "1.14-06",
    topic: "1.14",
    label: "Sign Chart / 符号表",
    difficulty: "challenge",
    question: "Evaluate lim as x→−2⁻ of (x+1)/[(x+2)(x−3)] and lim as x→−2⁺ of the same function.",
    hint: "Near −2, x+1<0 and x−3<0.",
    answer: "Left: −∞; right: +∞. / 左极限 −∞；右极限 +∞。",
    explanation: "Left: denominator is small positive and numerator negative; right: denominator is small negative and numerator negative. / 逐因子判断符号。"
  },
  {
    id: "1.15-01",
    topic: "1.15",
    label: "Lower Degree / 低次分子",
    difficulty: "easy",
    question: "Evaluate lim as x→∞ of (3x+1)/(x²−4) and name the horizontal asymptote.",
    hint: "分母次数更高。",
    answer: "0; y=0",
    explanation: "Divide by x²; every numerator term tends to 0. / 分母增长更快。"
  },
  {
    id: "1.15-02",
    topic: "1.15",
    label: "Equal Degrees / 同次数",
    difficulty: "easy",
    question: "Evaluate lim as x→−∞ of (5x²−x)/(2x²+7) and name the horizontal asymptote.",
    hint: "比较最高次项系数。",
    answer: "5/2; y=5/2",
    explanation: "Equal degrees give the ratio of leading coefficients at both ends. / 同次数取首项系数比。"
  },
  {
    id: "1.15-03",
    topic: "1.15",
    label: "Higher Numerator Degree / 高次分子",
    difficulty: "medium",
    question: "Does f(x)=(x²+1)/(3x−2) have a horizontal asymptote?",
    hint: "分子次数比分母高。",
    answer: "No. / 没有。",
    explanation: "The function behaves like x/3, so no finite limit exists at ±∞. / 函数像 x/3 一样无界增长。"
  },
  {
    id: "1.15-04",
    topic: "1.15",
    label: "Radical and Absolute Value / 根式与绝对值",
    difficulty: "medium",
    question: "Evaluate lim as x→∞ of √(4x²+1)/x and lim as x→−∞ of the same expression.",
    hint: "√(x²)=|x|.",
    answer: "2; −2",
    explanation: "√(4x²+1)/x≈2|x|/x; |x|/x is 1 on the right and −1 on the left. / 负无穷方向不能把 √(x²) 写成 x。"
  },
  {
    id: "1.15-05",
    topic: "1.15",
    label: "Different End Behavior / 两端不同",
    difficulty: "medium",
    question: "Find both horizontal asymptotes of f(x)=(5+2^x)/(1−2^x).",
    hint: "分别令 x→∞ 和 x→−∞。",
    answer: "y=−1 as x→∞; y=5 as x→−∞. / 正无穷处 y=−1，负无穷处 y=5。",
    explanation: "At +∞, 2^x dominates; at −∞, 2^x→0. / 两端主导项不同。"
  },
  {
    id: "1.15-06",
    topic: "1.15",
    label: "Bounded Oscillation / 有界振荡",
    difficulty: "challenge",
    question: "Evaluate lim as x→∞ of sin x/x and lim as x→∞ of x cos x.",
    hint: "一个可夹逼，一个振幅增长。",
    answer: "0; DNE",
    explanation: "|sin x/x|≤1/x→0, while x cos x oscillates with unbounded amplitude. / 前者夹逼到 0，后者振荡且振幅增大。"
  },
  {
    id: "1.16-01",
    topic: "1.16",
    label: "IVT Conditions / IVT 条件",
    difficulty: "easy",
    question: "State the two hypotheses needed to apply the Intermediate Value Theorem to a target value k on [a,b].",
    hint: "先检查连续性，再检查 k 的位置。",
    answer: "f is continuous on [a,b], and k lies between f(a) and f(b). / f 在 [a,b] 上连续，且 k 位于 f(a) 与 f(b) 之间。",
    explanation: "Only after both conditions hold does IVT guarantee at least one c with f(c)=k. / 两个条件都满足后，IVT 才保证存在解。"
  },
  {
    id: "1.16-02",
    topic: "1.16",
    label: "Guaranteed Zero / 保证零点",
    difficulty: "medium",
    question: "The function f is continuous on [−2,1], with f(−2)=−1 and f(1)=2. What does IVT guarantee?",
    hint: "0 位于两个端点值之间。",
    answer: "There is at least one c in (−2,1) such that f(c)=0. / 在 (−2,1) 内至少存在一个 c 使 f(c)=0。",
    explanation: "Continuity and the sign change satisfy IVT. The theorem does not guarantee that the zero is unique. / IVT 只保证存在，不保证唯一。"
  },
  {
    id: "1.16-03",
    topic: "1.16",
    label: "Continuity Check / 连续性检查",
    difficulty: "medium",
    question: "For g(x)=1/x on [−1,1], g(−1)=−1 and g(1)=1. Does IVT guarantee a zero?",
    hint: "检查区间内部 x=0。",
    answer: "No. / 不能。",
    explanation: "g is not continuous on [−1,1] because it is undefined at 0, so IVT does not apply; in fact 1/x never equals 0. / 区间内部不连续，端点异号也不能套用 IVT。"
  },
  {
    id: "1.16-04",
    topic: "1.16",
    label: "Minimum Zeros / 最少零点",
    difficulty: "challenge",
    question: "A continuous function has f(0)=3, f(2)=−1, f(5)=4, and f(8)=−2. What is the minimum number of zeros on (0,8)?",
    hint: "逐个检查相邻表格区间的符号变化。",
    answer: "3 zeros / 至少 3 个零点",
    explanation: "IVT forces at least one zero in each disjoint interval (0,2), (2,5), and (5,8). / 三个互不重叠的变号区间各保证至少一个零点。"
  },
  {
    id: "1.16-05",
    topic: "1.16",
    label: "Existence, Not Uniqueness / 存在但不唯一",
    difficulty: "easy",
    question: "True or false: If IVT guarantees a value c with f(c)=k, then that c is unique.",
    hint: "IVT 的结论是 at least one。",
    answer: "False. / 错误。",
    explanation: "IVT guarantees existence only. A continuous graph may cross the level y=k several times. / 连续图像可能多次穿过 y=k。"
  },
  {
    id: "1.16-06",
    topic: "1.16",
    label: "Build an IVT Function / 构造 IVT 函数",
    difficulty: "challenge",
    question: "A continuous function satisfies f(1)=7 and f(7)=1. Let g(x)=f(x)−x. Explain why f(c)=c for some c in (1,7).",
    hint: "计算 g(1) 和 g(7)。",
    answer: "g(1)=6 and g(7)=−6, so IVT gives a c in (1,7) with g(c)=0; hence f(c)=c. / g 两端异号，因此存在不动点。",
    explanation: "g is continuous because f and x are continuous; 0 lies between its endpoint values. / g 连续且端点值跨过 0。"
  },
  {
    id: "2.1-01",
    topic: "2.1",
    label: "Average Rate / 平均变化率",
    difficulty: "easy",
    question: "Find the average rate of change of f(x)=x²−2 on [−1,3].",
    hint: "Use [f(3)−f(−1)]/[3−(−1)].",
    answer: "2",
    explanation: "f(3)=7 and f(−1)=−1, so (7−(−1))/4=2. / 输出变化量除以输入变化量。"
  },
  {
    id: "2.1-02",
    topic: "2.1",
    label: "Units / 单位",
    difficulty: "easy",
    question: "A(t) is measured in dollars and t in years. What are the units of the average rate of change of A?",
    hint: "因变量单位 per 自变量单位。",
    answer: "Dollars per year / 美元/年",
    explanation: "Every rate-of-change quotient has output units divided by input units. / 变化率单位是因变量单位除以自变量单位。"
  },
  {
    id: "2.1-03",
    topic: "2.1",
    label: "Instantaneous Rate / 瞬时变化率",
    difficulty: "medium",
    question: "Use a difference quotient to find the instantaneous rate of change of f(x)=x²−x at x=−1.",
    hint: "Use lim as h→0 of [f(−1+h)−f(−1)]/h.",
    answer: "−3",
    explanation: "[f(−1+h)−f(−1)]/h=(−3h+h²)/h=−3+h, which approaches −3. / 化简后令 h→0。"
  },
  {
    id: "2.1-04",
    topic: "2.1",
    label: "Two Quotient Forms / 两种差商",
    difficulty: "medium",
    question: "Write both limit forms for the instantaneous rate of change of f at x=a.",
    hint: "一种令 h→0；另一种令 x→a。",
    answer: "lim h→0 [f(a+h)−f(a)]/h and lim x→a [f(x)−f(a)]/(x−a).",
    explanation: "The forms describe the same shrinking secant interval and therefore the same tangent slope. / 两种形式都让割线趋近切线。"
  },
  {
    id: "2.1-05",
    topic: "2.1",
    label: "Read a Quotient / 识别差商",
    difficulty: "medium",
    question: "In lim as h→0 of [3sin(2+h)−3sin(2)]/h, identify the original function and the x-value of the instantaneous rate.",
    hint: "Match f(a+h) and f(a).",
    answer: "f(x)=3sin(x), at x=2. / 函数为 3sin(x)，位置是 x=2。",
    explanation: "The numerator is f(2+h)−f(2), so the base point is a=2. / 对照 f(a+h)−f(a)。"
  },
  {
    id: "2.1-06",
    topic: "2.1",
    label: "Position vs. Distance / 位置与路程",
    difficulty: "medium",
    question: "A particle's position s(t), measured in meters, has average rate of change −4 m/s on [2,5]. What does this mean?",
    hint: "position 可以有方向；distance traveled 不能为负。",
    answer: "Its average velocity is −4 m/s: its position changed by −12 m over the interval. / 平均速度为 −4 米/秒，位置共变化 −12 米。",
    explanation: "The negative sign describes direction of displacement, not negative distance traveled. / 负号表示位移方向，不能说路程是负数。"
  }
]);
