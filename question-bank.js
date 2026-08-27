window.UNIT1_QUESTION_BANK = Object.freeze([
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
  }
]);
