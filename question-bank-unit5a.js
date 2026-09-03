window.AP_CALCULUS_QUESTION_BANK_5A = Object.freeze([
  {
    id: "5.1-01",
    topic: "5.1",
    label: "State the MVT / 陈述中值定理",
    difficulty: "easy",
    question: "State the hypotheses and conclusion of the Mean Value Theorem on [a,b].",
    hint: "区分闭区间连续、开区间可导与内部点 c。",
    answer: "If f is continuous on [a,b] and differentiable on (a,b), then some c∈(a,b) satisfies f′(c)=[f(b)−f(a)]/(b−a).",
    explanation: "The theorem matches an interior tangent slope to the endpoint secant slope. / 某个内部切线斜率等于端点割线斜率。"
  },
  {
    id: "5.1-02",
    topic: "5.1",
    label: "Polynomial MVT / 多项式中值定理",
    difficulty: "easy",
    question: "For f(x)=x²−4x on [0,4], find every c guaranteed by the MVT.",
    hint: "先算端点割线斜率，再令 f′(c) 等于它。",
    answer: "c=2.",
    explanation: "The average slope is 0 and f′(x)=2x−4, so 2c−4=0. A polynomial satisfies both hypotheses. / 多项式满足条件。"
  },
  {
    id: "5.1-03",
    topic: "5.1",
    label: "Check the Hypotheses / 检查条件",
    difficulty: "medium",
    question: "Can the MVT be applied to f(x)=|x| on [−1,1]? Explain.",
    hint: "检查开区间内 x=0 处的可导性。",
    answer: "No. f is continuous, but it is not differentiable at x=0.",
    explanation: "The corner lies inside (−1,1), so the differentiability hypothesis fails. / 内部尖角使 MVT 不能使用。"
  },
  {
    id: "5.1-04",
    topic: "5.1",
    label: "Rate from Endpoints / 端点求必达速率",
    difficulty: "medium",
    question: "A differentiable position function s, with t measured in seconds, satisfies s(2)=7 m and s(8)=31 m. What velocity must occur at some time in (2,8)?",
    hint: "速度值等于该区间平均变化率。",
    answer: "4 m/s.",
    explanation: "[31−7]/[8−2]=4, so the MVT guarantees some c∈(2,8) with s′(c)=4 m/s. / MVT 保证某时刻瞬时速度等于平均速度。"
  },
  {
    id: "5.1-05",
    topic: "5.1",
    label: "Radical Endpoint / 根式端点",
    difficulty: "hard",
    question: "For f(x)=√(15−5x) on [1,3], find the MVT value c.",
    hint: "端点 x=3 不要求可导；只要求开区间可导。",
    answer: "c=5/2.",
    explanation: "The secant slope is −√10/2 and f′(x)=−5/[2√(15−5x)]. Solving gives c=5/2. / 端点导数不存在不影响本题条件。"
  },
  {
    id: "5.1-06",
    topic: "5.1",
    label: "Existence, Not Uniqueness / 存在不等于唯一",
    difficulty: "medium",
    question: "If the MVT applies, does it guarantee exactly one value of c? Explain.",
    hint: "关注英文 there exists 的逻辑含义。",
    answer: "No. It guarantees at least one c∈(a,b), but there may be several.",
    explanation: "The derivative equation can have multiple interior solutions. / 定理只保证至少存在一个内部解。"
  },
  {
    id: "5.2-01",
    topic: "5.2",
    label: "State the EVT / 陈述最值定理",
    difficulty: "easy",
    question: "What does the Extreme Value Theorem guarantee for a function continuous on [a,b]?",
    hint: "关键词是 both、attains、absolute。",
    answer: "The function attains both an absolute maximum and an absolute minimum on [a,b].",
    explanation: "The theorem guarantees existence, not the locations or numerical values. / EVT 保证存在，但不直接给位置。"
  },
  {
    id: "5.2-02",
    topic: "5.2",
    label: "Local versus Global / 局部与全局",
    difficulty: "easy",
    question: "Explain the difference between a local maximum and an absolute maximum.",
    hint: "比较范围分别是 nearby inputs 与 the entire domain。",
    answer: "A local maximum is at least as large as nearby values; an absolute maximum is at least as large as every value in the domain.",
    explanation: "The words differ by the comparison set. / 局部只比较附近，全局比较整个定义域。"
  },
  {
    id: "5.2-03",
    topic: "5.2",
    label: "Cubic Critical Points / 三次函数临界点",
    difficulty: "medium",
    question: "Find the critical points of f(x)=x³/3−9x+24.",
    hint: "先解 f′=0，再代回 f 求完整坐标。",
    answer: "(−3,42) and (3,6).",
    explanation: "f′(x)=x²−9, so the critical numbers are ±3; evaluating f gives 42 and 6. / 临界点必须包含纵坐标。"
  },
  {
    id: "5.2-04",
    topic: "5.2",
    label: "Domain before Critical / 定义域优先",
    difficulty: "medium",
    question: "Find every critical number of g(x)=1/√(4−x²).",
    hint: "原函数定义域是 (−2,2)。",
    answer: "x=0 only.",
    explanation: "g′(x)=x/(4−x²)^(3/2), so g′=0 at 0. The inputs ±2 are not in the domain and are not critical numbers. / 函数未定义处不能成为临界数。"
  },
  {
    id: "5.2-05",
    topic: "5.2",
    label: "Cusp Critical Number / 尖点临界数",
    difficulty: "medium",
    question: "Why is x=0 a critical number of f(x)=x^(2/3)?",
    hint: "检查 f(0) 与 f′(0)。",
    answer: "Because f(0) is defined, while f′(0) does not exist.",
    explanation: "Critical numbers include domain inputs where the derivative is zero or undefined. / 函数有定义而导数不存在也属于临界数。"
  },
  {
    id: "5.2-06",
    topic: "5.2",
    label: "Logarithmic Critical Point / 对数临界点",
    difficulty: "medium",
    question: "Find the critical point of f(x)=(ln x)².",
    hint: "定义域 x>0，且 f′(x)=2ln(x)/x。",
    answer: "(1,0).",
    explanation: "ln x=0 gives x=1; x=0 is not in the domain. Then f(1)=0. / 先限制定义域，再求完整坐标。"
  },
  {
    id: "5.3-01",
    topic: "5.3",
    label: "Derivative Sign / 导数符号",
    difficulty: "easy",
    question: "If f′(x)<0 for every x in (2,7), what can be concluded about f there?",
    hint: "负斜率对应从左到右下降。",
    answer: "f is decreasing on (2,7).",
    explanation: "A negative derivative means the original function decreases. / 导数为负则原函数递减。"
  },
  {
    id: "5.3-02",
    topic: "5.3",
    label: "Cubic Monotonicity / 三次函数增减",
    difficulty: "medium",
    question: "Find the intervals where f(x)=x³−12x+1 is increasing and decreasing.",
    hint: "f′(x)=3(x−2)(x+2)。",
    answer: "Increasing on (−∞,−2)∪(2,∞); decreasing on (−2,2).",
    explanation: "The sign pattern of f′ is +,−,+ across −2 and 2. / 导数符号表为正、负、正。"
  },
  {
    id: "5.3-03",
    topic: "5.3",
    label: "Graph of f Prime / 读导数图",
    difficulty: "easy",
    question: "The graph of f′ lies above the x-axis on (−4,1) and below it on (1,5). State the behavior of f.",
    hint: "看 f′ 的正负，不看 f′ 自己是否上升。",
    answer: "f increases on (−4,1) and decreases on (1,5).",
    explanation: "Above the axis means f′>0; below means f′<0. / 导数图高度翻译为原函数增减。"
  },
  {
    id: "5.3-04",
    topic: "5.3",
    label: "Domain Break / 定义域断点",
    difficulty: "medium",
    question: "On what intervals is f(x)=1/x decreasing?",
    hint: "f′=−1/x²<0，但 x=0 不在定义域。",
    answer: "(−∞,0) and (0,∞).",
    explanation: "The domain break at 0 prevents combining the two intervals. / 即使两侧导数同号，也不能跨过未定义点。"
  },
  {
    id: "5.3-05",
    topic: "5.3",
    label: "Rate in Context / 情境中的变化率",
    difficulty: "medium",
    question: "A quantity changes at rate R(t)=2t cos(t²). Is the quantity increasing or decreasing at t=3?",
    hint: "R 已经是该数量的变化率；以弧度计算。",
    answer: "Decreasing, because R(3)=6cos(9)≈−5.467<0.",
    explanation: "The sign of the rate determines the direction of the underlying quantity. / 不需要再对 R 求导。"
  },
  {
    id: "5.3-06",
    topic: "5.3",
    label: "Trig Monotonicity / 三角函数增减",
    difficulty: "medium",
    question: "On [0,2π], where is f(x)=cos x increasing and decreasing?",
    hint: "f′(x)=−sin x。",
    answer: "Decreasing on (0,π); increasing on (π,2π).",
    explanation: "−sin x is negative on (0,π) and positive on (π,2π). / 用单位圆判断导数符号。"
  },
  {
    id: "5.4-01",
    topic: "5.4",
    label: "Read a Sign Change / 读符号变化",
    difficulty: "easy",
    question: "If f′ changes from positive to negative at x=3, what occurs there?",
    hint: "原函数先递增后递减。",
    answer: "f has a relative maximum at x=3.",
    explanation: "The direction changes from increasing to decreasing. / 正变负对应局部最大。"
  },
  {
    id: "5.4-02",
    topic: "5.4",
    label: "Factored Derivative / 因式导数",
    difficulty: "medium",
    question: "If g′(x)=(x−3)(x+1), classify every relative extremum of g.",
    hint: "符号表为正、负、正。",
    answer: "A relative maximum at x=−1 and a relative minimum at x=3.",
    explanation: "At −1 the sign is +→−; at 3 it is −→+. / 只能确定位置和类型，不能求 g 的函数值。"
  },
  {
    id: "5.4-03",
    topic: "5.4",
    label: "No Sign Change / 无符号变化",
    difficulty: "easy",
    question: "Suppose f′(2)=0 and f′ is positive on both sides of 2. What does the First Derivative Test conclude?",
    hint: "原函数在两侧方向相同。",
    answer: "x=2 is neither a relative maximum nor a relative minimum.",
    explanation: "The sign pattern +→+ shows no turn. / 临界数存在，但没有局部极值。"
  },
  {
    id: "5.4-04",
    topic: "5.4",
    label: "Cusp Minimum / 尖点极小",
    difficulty: "medium",
    question: "Use the First Derivative Test to classify x=5 for f(x)=(x−5)^(2/3).",
    hint: "f′ 在 5 左侧为负、右侧为正。",
    answer: "f has a relative minimum at x=5; the point is (5,0).",
    explanation: "Although f′(5) does not exist, the sign changes −→+ and f(5) exists. / 尖点仍可用两侧符号分类。"
  },
  {
    id: "5.4-05",
    topic: "5.4",
    label: "Negative Unknown Factor / 未知负因子",
    difficulty: "hard",
    question: "For all x, g(x)<0. If f′(x)=(x−4)(x+3)g(x), classify the extrema of f.",
    hint: "g<0 会把二次因式的符号整体翻转。",
    answer: "A relative minimum at x=−3 and a relative maximum at x=4.",
    explanation: "The signs of f′ are −,+,−, so the changes are −→+ at −3 and +→− at 4. / 先列二次式符号，再乘负因子。"
  },
  {
    id: "5.4-06",
    topic: "5.4",
    label: "Derivative Graph Crossing / 导数图穿轴",
    difficulty: "medium",
    question: "The graph of f′ crosses the x-axis upward at x=−2 and merely touches the axis at x=1 without changing sign. Classify both inputs for f.",
    hint: "upward crossing 是负变正；touching 无变号。",
    answer: "f has a relative minimum at x=−2; x=1 is neither.",
    explanation: "Only the upward crossing changes the sign from negative to positive. / f′ 的峰谷不是重点，穿轴方向才是。"
  },
  {
    id: "5.5-01",
    topic: "5.5",
    label: "Candidate List / 候选列表",
    difficulty: "easy",
    question: "A continuous function on [−3,4] has interior critical numbers −1 and 2. Which inputs belong in the Candidates Test?",
    hint: "两个端点加全部内部临界数。",
    answer: "x=−3,−1,2,4.",
    explanation: "Absolute extrema can occur at endpoints or interior critical numbers. / 两类候选都不能漏。"
  },
  {
    id: "5.5-02",
    topic: "5.5",
    label: "Cubic Absolute Extrema / 三次函数绝对极值",
    difficulty: "hard",
    question: "Find all absolute extrema of f(x)=x³−3x on [−2,2].",
    hint: "候选输入为 −2、−1、1、2。",
    answer: "Absolute maximum 2 at x=−1 and x=2; absolute minimum −2 at x=−2 and x=1.",
    explanation: "The candidate values are −2,2,−2,2. Report every input where a tied extreme value is attained. / 并列位置全部写出。"
  },
  {
    id: "5.5-03",
    topic: "5.5",
    label: "Rational Absolute Extrema / 有理函数绝对极值",
    difficulty: "medium",
    question: "Find the absolute extrema of f(x)=x/(x²+1) on [−2,2].",
    hint: "f′=(1−x²)/(x²+1)²，内部临界数为 ±1。",
    answer: "Absolute minimum −1/2 at x=−1; absolute maximum 1/2 at x=1.",
    explanation: "Compare f(−2)=−2/5, f(−1)=−1/2, f(1)=1/2, and f(2)=2/5. / 用原函数值比较。"
  },
  {
    id: "5.5-04",
    topic: "5.5",
    label: "Trig Absolute Extrema / 三角函数绝对极值",
    difficulty: "hard",
    question: "Find the absolute extrema of f(x)=sin(x+π/4) on [0,7π/4].",
    hint: "f′=cos(x+π/4)，内部零点为 π/4 与 5π/4。",
    answer: "Absolute maximum 1 at x=π/4; absolute minimum −1 at x=5π/4.",
    explanation: "Evaluate both critical numbers and both endpoints. / 端点值为 √2/2 与 0，也要列入比较。"
  },
  {
    id: "5.5-05",
    topic: "5.5",
    label: "Not Attained / 未取得的上界",
    difficulty: "medium",
    question: "Let f(x)=x² for 0≤x<1 and f(x)=0 for 1≤x≤2. Does f have an absolute maximum on [0,2]?",
    hint: "x→1⁻ 时函数值接近 1，但检查 f(1)。",
    answer: "No. The supremum is 1, but the function never attains 1.",
    explanation: "The jump at x=1 prevents EVT from applying; f(1)=0. / 最高上界不是实际函数值。"
  },
  {
    id: "5.5-06",
    topic: "5.5",
    label: "Minimum Velocity / 最小速度",
    difficulty: "medium",
    question: "Find the absolute minimum of v(t)=2(t−2)(t−5) on [0,6].",
    hint: "对 v 求导；不要令 v=0。",
    answer: "The absolute minimum is −4.5 at t=3.5.",
    explanation: "v′(t)=4t−14 gives t=3.5; compare v(0)=20, v(3.5)=−4.5, and v(6)=8. / 比较速度函数在候选点的值。"
  },
  {
    id: "5.6-01",
    topic: "5.6",
    label: "Second Derivative Sign / 二阶导符号",
    difficulty: "easy",
    question: "If f″(x)>0 on (−1,4), what can be concluded?",
    hint: "同时描述 f′ 与 f。",
    answer: "f′ is increasing and f is concave up on (−1,4).",
    explanation: "A positive second derivative means tangent slopes are increasing. / 切线斜率越来越大。"
  },
  {
    id: "5.6-02",
    topic: "5.6",
    label: "Quartic Concavity / 四次函数凹向",
    difficulty: "hard",
    question: "For f(x)=x⁴/4−6x²+x−3, find all concavity intervals and inflection points.",
    hint: "f″(x)=3(x−2)(x+2)。",
    answer: "Concave up on (−∞,−2)∪(2,∞), concave down on (−2,2); inflection points (−2,−25) and (2,−21).",
    explanation: "The sign pattern of f″ is +,−,+, and f is defined at both sign changes. / 拐点要写原函数坐标。"
  },
  {
    id: "5.6-03",
    topic: "5.6",
    label: "Zero without Inflection / 二阶导为零但无拐点",
    difficulty: "medium",
    question: "Is (0,0) an inflection point of f(x)=x⁴? Explain.",
    hint: "f″(x)=12x²，检查 0 两侧符号。",
    answer: "No. f″ is positive on both sides of 0, so concavity does not change.",
    explanation: "The equation f″(0)=0 gives only a candidate. / 二阶导为零不是充分条件。"
  },
  {
    id: "5.6-04",
    topic: "5.6",
    label: "Undefined Second Derivative / 二阶导不存在",
    difficulty: "hard",
    question: "Explain why (0,0) is an inflection point of f(x)=x^(1/3), even though f″(0) does not exist.",
    hint: "检查函数是否定义，以及 0 两侧凹向。",
    answer: "f is defined at 0, concave up for x<0, and concave down for x>0; therefore concavity changes at (0,0).",
    explanation: "An inflection point requires a defined point and a concavity change, not an existing second derivative. / 定义核心是凹向改变。"
  },
  {
    id: "5.6-05",
    topic: "5.6",
    label: "Tangent-Line Comparison / 切线与曲线比较",
    difficulty: "medium",
    question: "For f(x)=xe^(−x), is the tangent line at x=1 locally above or below the graph?",
    hint: "f″(x)=e^(−x)(x−2)。",
    answer: "Above the graph.",
    explanation: "f″(1)=−e^(−1)<0, so the graph is concave down near 1 and lies locally below its tangent line. / 凹向下时切线局部在图像上方。"
  },
  {
    id: "5.6-06",
    topic: "5.6",
    label: "Asymptote Is Not Inflection / 渐近线不是拐点",
    difficulty: "medium",
    question: "For g(x)=x/(x−1), state the concavity intervals and decide whether x=1 is an inflection input.",
    hint: "g″(x)=2/(x−1)³，且 g(1) 不存在。",
    answer: "Concave down on (−∞,1), concave up on (1,∞), and no inflection point at x=1.",
    explanation: "Although the sign changes, x=1 is not in the domain, so there is no point on the graph. / 拐点必须在函数图像上。"
  },
  {
    id: "5.7-01",
    topic: "5.7",
    label: "State the SDT / 陈述二阶导数检验",
    difficulty: "easy",
    question: "State the Second Derivative Test at a critical number c where f′(c)=0.",
    hint: "分别说明 f″(c)>0、<0、=0。",
    answer: "If f″(c)>0, f has a local minimum; if f″(c)<0, f has a local maximum; if f″(c)=0, the test is inconclusive.",
    explanation: "The first-derivative condition is part of the test. / 必须先有水平临界点。"
  },
  {
    id: "5.7-02",
    topic: "5.7",
    label: "Quartic SDT / 四次函数二阶检验",
    difficulty: "hard",
    question: "Use the SDT to classify every critical point of f(x)=x⁴−2x².",
    hint: "f′=4x(x−1)(x+1)，f″=12x²−4。",
    answer: "Local minima at (−1,−1) and (1,−1); local maximum at (0,0).",
    explanation: "f″(±1)=8>0 and f″(0)=−4<0. / 二阶导正判极小，负判极大。"
  },
  {
    id: "5.7-03",
    topic: "5.7",
    label: "Inconclusive Case / 无法判定情形",
    difficulty: "medium",
    question: "If f′(2)=0 and f″(2)=0, what does the Second Derivative Test conclude?",
    hint: "inconclusive 不等于 neither。",
    answer: "The test is inconclusive; use another method such as the First Derivative Test.",
    explanation: "A zero second derivative can occur at a minimum, maximum, or neither. / 需要改查一阶导数符号或直接分析。"
  },
  {
    id: "5.7-04",
    topic: "5.7",
    label: "Cubic SDT / 三次函数二阶检验",
    difficulty: "medium",
    question: "Use the SDT to find the relative extrema of f(x)=5+3x²−x³.",
    hint: "f′=3x(2−x)，f″=6−6x。",
    answer: "Relative minimum at (0,5); relative maximum at (2,9).",
    explanation: "f″(0)=6>0 and f″(2)=−6<0. / 分类后代回原函数求点。"
  },
  {
    id: "5.7-05",
    topic: "5.7",
    label: "Trig SDT / 三角函数二阶检验",
    difficulty: "hard",
    question: "For g(x)=x+2sin x on (0,2π), classify all critical points using the SDT.",
    hint: "g′=1+2cos x，g″=−2sin x。",
    answer: "Relative maximum at (2π/3, 2π/3+√3); relative minimum at (4π/3, 4π/3−√3).",
    explanation: "g″(2π/3)=−√3<0 and g″(4π/3)=√3>0. / 保留弧度精确值。"
  },
  {
    id: "5.7-06",
    topic: "5.7",
    label: "Maximum of f Prime / 导函数的最大值",
    difficulty: "hard",
    question: "For f(x)=3x²−x³, find the local maximum value of f′.",
    hint: "把 h=f′ 当作目标函数；h′=f″，h″=f‴。",
    answer: "The local maximum value of f′ is 3, attained at x=1.",
    explanation: "f′=6x−3x², f″=6−6x gives x=1, and f‴=−6<0; then f′(1)=3. / 目标函数改变时，导数阶数也随之上移。"
  }
]);
