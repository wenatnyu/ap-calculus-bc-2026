window.AP_CALCULUS_QUESTION_BANK_2A = Object.freeze([
  {
    id: "2.2-01",
    topic: "2.2",
    label: "Derivative Definition / 导数定义",
    difficulty: "easy",
    question: "Write the h-form definition of f′(x).",
    hint: "分子是函数值之差，分母是 h。",
    answer: "f′(x)=lim as h→0 of [f(x+h)−f(x)]/h.",
    explanation: "This is the limit of nearby secant slopes. / 这是附近割线斜率的极限。"
  },
  {
    id: "2.2-02",
    topic: "2.2",
    label: "Definition Algebra / 定义法求导",
    difficulty: "medium",
    question: "Use the limit definition to find f′(x) for f(x)=x²+3x.",
    hint: "展开 f(x+h)，整体减去 f(x)，再约 h。",
    answer: "f′(x)=2x+3.",
    explanation: "The quotient simplifies to 2x+h+3, whose limit as h→0 is 2x+3."
  },
  {
    id: "2.2-03",
    topic: "2.2",
    label: "Derivative Meaning / 导数含义",
    difficulty: "easy",
    question: "If d(t) is distance in meters and t is seconds, interpret d′(4)=6.",
    hint: "写出时刻、变化方向、数值和单位。",
    answer: "At 4 seconds, distance is increasing at 6 m/s. / 第4秒时，距离以6米/秒增加。",
    explanation: "A derivative value is an instantaneous rate with output-units per input-unit."
  },
  {
    id: "2.2-04",
    topic: "2.2",
    label: "Tangent Line / 切线方程",
    difficulty: "easy",
    question: "Given f(−1)=2 and f′(−1)=5, write the tangent line at x=−1.",
    hint: "点是 (−1,2)，斜率是 5。",
    answer: "y−2=5(x+1).",
    explanation: "Use y−f(a)=f′(a)(x−a). / 使用切线点斜式。"
  },
  {
    id: "2.2-05",
    topic: "2.2",
    label: "Recognize a Derivative / 识别导数极限",
    difficulty: "medium",
    question: "Evaluate lim as h→0 of [(2+h)³−8]/h by recognizing a derivative.",
    hint: "这是 f(x)=x³ 在 x=2 处的导数。",
    answer: "12",
    explanation: "Expand first: [(2+h)³−8]/h=(12h+6h²+h³)/h=12+6h+h², which approaches 12. / 用定义展开并约去 h。"
  },
  {
    id: "2.2-06",
    topic: "2.2",
    label: "Units / 导数单位",
    difficulty: "easy",
    question: "Temperature T is measured in °C and time t in minutes. What are the units of T′(t)?",
    hint: "输出单位除以输入单位。",
    answer: "°C per minute / 摄氏度每分钟",
    explanation: "Derivative units are output-units per input-unit. / 导数单位是因变量单位除以自变量单位。"
  },
  {
    id: "2.3-01",
    topic: "2.3",
    label: "Table Estimate / 表格估计",
    difficulty: "easy",
    question: "A table gives f(2)=7 and f(4)=15. Estimate f′(3) using the bracketing values.",
    hint: "计算连接 (2,7) 与 (4,15) 的割线斜率。",
    answer: "4",
    explanation: "[15−7]/[4−2]=8/2=4."
  },
  {
    id: "2.3-02",
    topic: "2.3",
    label: "Numerical Derivative / 数值导数",
    difficulty: "easy",
    question: "In radian mode, estimate p′(1) for p(x)=sin x to three decimals.",
    hint: "使用计算器的数值求导命令。",
    answer: "0.540",
    explanation: "The numerical derivative agrees with cos(1)≈0.540302."
  },
  {
    id: "2.3-03",
    topic: "2.3",
    label: "Rate Units / 速率的导数单位",
    difficulty: "medium",
    question: "Flow rate w(t) is measured in gallons per second and t in seconds. What are the units of w′(t)?",
    hint: "原函数单位本身已经含有“每秒”。",
    answer: "gallons per second squared (gal/s²) / 加仑/秒²",
    explanation: "(gal/s)/s=gal/s²."
  },
  {
    id: "2.3-04",
    topic: "2.3",
    label: "Estimated Tangent / 近似切线",
    difficulty: "medium",
    question: "If g(2)=5 and a table estimate gives g′(2)≈4, write a tangent-line approximation at x=2.",
    hint: "点 (2,5)，近似斜率 4。",
    answer: "y−5=4(x−2).",
    explanation: "Insert the estimated derivative into point-slope form. / 把近似导数作为斜率。"
  },
  {
    id: "2.3-05",
    topic: "2.3",
    label: "Choose Data / 选择数据点",
    difficulty: "easy",
    question: "Available inputs are 1, 4, 6, and 10. Which pair is usually best for estimating f′(5)?",
    hint: "选择 5 两侧最近的点。",
    answer: "x=4 and x=6 / 选 x=4 与 x=6",
    explanation: "They are the closest available inputs that bracket 5. / 它们最近且从两侧夹住5。"
  },
  {
    id: "2.3-06",
    topic: "2.3",
    label: "Misleading Estimate / 误导性估计",
    difficulty: "challenge",
    question: "For f(x)=|x|, the symmetric quotient [f(h)−f(−h)]/(2h) equals 0. Does this prove f′(0)=0?",
    hint: "分别检查左右导数。",
    answer: "No; f′(0) does not exist. / 不能；f′(0)不存在。",
    explanation: "The left-hand derivative is −1 and the right-hand derivative is 1. A symmetric secant can hide a corner."
  },
  {
    id: "2.4-01",
    topic: "2.4",
    label: "One-Way Implication / 单向推论",
    difficulty: "easy",
    question: "Complete the theorem: If f is differentiable at c, then f is ______ at c.",
    hint: "可导比连续更强。",
    answer: "continuous / 连续",
    explanation: "Differentiability implies continuity; the converse is false. / 可导推出连续，逆命题不成立。"
  },
  {
    id: "2.4-02",
    topic: "2.4",
    label: "Corner / 折角",
    difficulty: "easy",
    question: "Is h(x)=|x−3| differentiable at x=3? Explain.",
    hint: "比较左右斜率。",
    answer: "No. / 不可导。",
    explanation: "It is continuous, but the left slope is −1 and the right slope is 1, so there is a corner."
  },
  {
    id: "2.4-03",
    topic: "2.4",
    label: "Discontinuity / 间断点",
    difficulty: "easy",
    question: "A function has a jump discontinuity at x=2. Can it be differentiable at x=2?",
    hint: "使用“可导推出连续”的逆否命题。",
    answer: "No. / 不能。",
    explanation: "Not continuous at 2 implies not differentiable at 2. / 在该点不连续，因此在该点不可导。"
  },
  {
    id: "2.4-04",
    topic: "2.4",
    label: "Vertical Tangent / 竖直切线",
    difficulty: "medium",
    question: "For f(x)=∛x, classify continuity and differentiability at x=0 in the usual finite-slope sense.",
    hint: "函数连续，但切线方向竖直。",
    answer: "Continuous but not differentiable at 0. / 在0连续但不可导。",
    explanation: "The slope magnitude is unbounded near 0, so no finite derivative exists."
  },
  {
    id: "2.4-05",
    topic: "2.4",
    label: "Piecewise Join / 分段拼接",
    difficulty: "challenge",
    question: "Let f(x)=x+1 for x<1 and f(x)=ax+b for x≥1. Find a and b so f is differentiable at 1.",
    hint: "先匹配函数值，再匹配左右导数。",
    answer: "a=1, b=1",
    explanation: "Continuity gives a+b=2; equal slopes give a=1, hence b=1."
  },
  {
    id: "2.4-06",
    topic: "2.4",
    label: "Absolute Value Properties / 绝对值性质",
    difficulty: "medium",
    question: "For h(x)=|x−4|, which are true at x=4: continuous, differentiable, absolute minimum?",
    hint: "V形顶点是否断开？左右斜率是否相同？",
    answer: "Continuous and an absolute minimum, but not differentiable. / 连续且有绝对最小值，但不可导。",
    explanation: "The value is 0 and the graph is connected, but one-sided slopes are −1 and 1."
  },
  {
    id: "2.5-01",
    topic: "2.5",
    label: "Power Rule / 幂法则",
    difficulty: "easy",
    question: "Differentiate y=x⁹.",
    hint: "指数乘到前面，指数减1。",
    answer: "y′=9x⁸",
    explanation: "By the power rule, d(xⁿ)/dx=nxⁿ⁻¹."
  },
  {
    id: "2.5-02",
    topic: "2.5",
    label: "Negative Power / 负指数",
    difficulty: "easy",
    question: "Differentiate f(x)=1/x⁶.",
    hint: "先写成 x⁻⁶。",
    answer: "f′(x)=−6x⁻⁷=−6/x⁷",
    explanation: "Rewrite x⁻⁶, then multiply by −6 and subtract one from the exponent."
  },
  {
    id: "2.5-03",
    topic: "2.5",
    label: "Fractional Power / 分数指数",
    difficulty: "medium",
    question: "Differentiate y=⁴√(x³).",
    hint: "改写为 x^(3/4)。",
    answer: "y′=(3/4)x^(−1/4)=3/[4·⁴√x], for x>0",
    explanation: "The exponent changes from 3/4 to −1/4. The derivative formula is finite for x>0; at x=0 the original function is defined but has no finite derivative."
  },
  {
    id: "2.5-04",
    topic: "2.5",
    label: "Evaluate a Derivative / 导数求值",
    difficulty: "easy",
    question: "If f(x)=√x, find f′(16).",
    hint: "f′(x)=1/(2√x)。",
    answer: "1/8",
    explanation: "f′(16)=1/[2√16]=1/8."
  },
  {
    id: "2.5-05",
    topic: "2.5",
    label: "Parallel Tangents / 平行切线",
    difficulty: "challenge",
    question: "For f(x)=x⁴ and g(x)=x³, at which x-values are their tangent lines parallel?",
    hint: "令 4x³=3x²；不要直接除以 x²。",
    answer: "x=0 and x=3/4",
    explanation: "4x³=3x² gives x²(4x−3)=0, so both solutions must be kept."
  },
  {
    id: "2.5-06",
    topic: "2.5",
    label: "Power-Rule Tangent / 幂法则切线",
    difficulty: "medium",
    question: "Find the tangent line to f(x)=1/x⁴ at x=2.",
    hint: "点为 (2,1/16)，斜率为 f′(2)。",
    answer: "y−1/16=−(1/8)(x−2)",
    explanation: "f′(x)=−4/x⁵, so f′(2)=−4/32=−1/8."
  }
]);
