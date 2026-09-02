window.AP_CALCULUS_QUESTION_BANK_2B = Object.freeze([
  {
    id: "2.6-01",
    topic: "2.6",
    label: "Sum and Difference / 和差法则",
    difficulty: "easy",
    question: "Find f′(x) if f(x)=5x⁴−3x²+7.",
    hint: "逐项求导；常数项的导数是多少？",
    answer: "f′(x)=20x³−6x.",
    explanation: "Apply the power rule term by term, and the derivative of 7 is 0. / 逐项使用幂法则，常数 7 的导数为 0。"
  },
  {
    id: "2.6-02",
    topic: "2.6",
    label: "Roots and Reciprocals / 根式与分式",
    difficulty: "medium",
    question: "Differentiate f(x)=6√x−4/x.",
    hint: "先改写为 6x^(1/2)−4x^(−1)。",
    answer: "f′(x)=3/√x+4/x².",
    explanation: "6(1/2)x^(−1/2)=3/√x, and (−4x^(−1))′=4x^(−2). / 注意第二项的两个负号相消。"
  },
  {
    id: "2.6-03",
    topic: "2.6",
    label: "Horizontal Tangent / 水平切线",
    difficulty: "medium",
    question: "At which x-values does g(x)=x³−3x have horizontal tangent lines?",
    hint: "令 g′(x)=0。",
    answer: "x=−1 and x=1. / x=−1 与 x=1。",
    explanation: "g′(x)=3x²−3=3(x−1)(x+1), so its zeros are ±1. / 水平切线对应导数为 0。"
  },
  {
    id: "2.6-04",
    topic: "2.6",
    label: "Normal Line / 法线",
    difficulty: "medium",
    question: "Find the normal line to y=x² at x=1.",
    hint: "先求点与切线斜率，再取负倒数。",
    answer: "y−1=−(1/2)(x−1).",
    explanation: "The point is (1,1), the tangent slope is 2, and the perpendicular slope is −1/2. / 法线与切线经过同一点。"
  },
  {
    id: "2.6-05",
    topic: "2.6",
    label: "Piecewise Differentiability / 分段函数可导",
    difficulty: "medium",
    question: "Is p(x)={x²+2 for x<1; 2x+1 for x≥1} differentiable at x=1?",
    hint: "先比较两侧函数值，再比较两侧导数。",
    answer: "Yes. / 是。",
    explanation: "Both pieces give value 3 at the join, and both one-sided derivatives equal 2. / 连接点连续且左右导数相等。"
  },
  {
    id: "2.6-06",
    topic: "2.6",
    label: "Smooth Join Parameters / 光滑连接参数",
    difficulty: "challenge",
    question: "Find a and b so p(x)={x²+a for x<1; bx+1 for x≥1} is differentiable at x=1.",
    hint: "连续性给一个方程，左右导数相等再给一个方程。",
    answer: "a=2 and b=2.",
    explanation: "Continuity gives 1+a=b+1, so a=b. Matching derivatives gives 2=b. / 两个条件联立得到 a=b=2。"
  },
  {
    id: "2.7-01",
    topic: "2.7",
    label: "Sine and Cosine / 正弦与余弦",
    difficulty: "easy",
    question: "Differentiate f(x)=4sin x−3cos x.",
    hint: "cos x 的导数带负号。",
    answer: "f′(x)=4cos x+3sin x.",
    explanation: "(sin x)′=cos x and (−3cos x)′=+3sin x. / 余弦项出现双负号。"
  },
  {
    id: "2.7-02",
    topic: "2.7",
    label: "Exponential and Log / 指数与对数",
    difficulty: "easy",
    question: "Find g′(x) if g(x)=3ˣ+ln x.",
    hint: "一般底数指数函数需要乘 ln 3。",
    answer: "g′(x)=3ˣln3+1/x.",
    explanation: "Use (aˣ)′=aˣln a and (ln x)′=1/x. / 两项分别使用指数与对数导数公式。"
  },
  {
    id: "2.7-03",
    topic: "2.7",
    label: "Exact Derivative Value / 导数精确值",
    difficulty: "medium",
    question: "If f(x)=3cos x+(sin x)/2, find f′(π).",
    hint: "先求导，再使用 sinπ=0、cosπ=−1。",
    answer: "f′(π)=−1/2.",
    explanation: "f′(x)=−3sin x+(cos x)/2, so f′(π)=0−1/2. / 使用单位圆精确值。"
  },
  {
    id: "2.7-04",
    topic: "2.7",
    label: "Tangent to eˣ / 指数函数切线",
    difficulty: "medium",
    question: "Find the tangent line to y=eˣ at x=0.",
    hint: "点为 (0,e⁰)，斜率为 (eˣ)′ 在 0 处的值。",
    answer: "y=x+1.",
    explanation: "The point is (0,1) and the slope is e⁰=1, so y−1=x. / 原函数给点，导函数给斜率。"
  },
  {
    id: "2.7-05",
    topic: "2.7",
    label: "Difference Quotient / 差商识别",
    difficulty: "medium",
    question: "Evaluate lim as h→0 of [ln(4+h)−ln4]/h.",
    hint: "这是 f′(4)，其中 f(x)=ln x。",
    answer: "1/4.",
    explanation: "The limit is the derivative of ln x at x=4, and (ln x)′=1/x. / 识别导数定义即可。"
  },
  {
    id: "2.7-06",
    topic: "2.7",
    label: "Logarithm Base / 对数底数",
    difficulty: "challenge",
    question: "Differentiate y=log₅x and state its real domain.",
    hint: "一般底数对数的导数分母含 ln 5。",
    answer: "y′=1/(x ln5), with x>0. / y′=1/(x ln5)，且 x>0。",
    explanation: "For log base a, the derivative is 1/(x ln a); differentiation does not remove the original domain. / 求导后仍保留定义域。"
  },
  {
    id: "2.8-01",
    topic: "2.8",
    label: "Product Rule / 乘积法则",
    difficulty: "easy",
    question: "Complete the rule: if h(x)=f(x)g(x), then h′(x)=____.",
    hint: "每一项只对一个因子求导。",
    answer: "h′(x)=f′(x)g(x)+f(x)g′(x).",
    explanation: "Both changing factors contribute one term. / 两个因子的变化各贡献一项。"
  },
  {
    id: "2.8-02",
    topic: "2.8",
    label: "Polynomial Times Trig / 多项式乘三角函数",
    difficulty: "easy",
    question: "Differentiate h(x)=x²sin x.",
    hint: "写成 f′g+fg′。",
    answer: "h′(x)=2xsin x+x²cos x.",
    explanation: "Differentiate x² in the first term and sin x in the second. / 两项中轮流对一个因子求导。"
  },
  {
    id: "2.8-03",
    topic: "2.8",
    label: "Product Rule from a Table / 表格乘积法则",
    difficulty: "medium",
    question: "At x=2, f=3, f′=−1, g=4, and g′=5. If p=2fg, find p′(2).",
    hint: "p′=2(f′g+fg′)。",
    answer: "22.",
    explanation: "p′(2)=2[(−1)(4)+(3)(5)]=2(11)=22. / 代入同一行的四个数值。"
  },
  {
    id: "2.8-04",
    topic: "2.8",
    label: "Product Tangent Line / 乘积函数切线",
    difficulty: "medium",
    question: "Find the tangent line to y=xeˣ at x=0.",
    hint: "先用乘积法则求 y′。",
    answer: "y=x.",
    explanation: "y(0)=0 and y′=eˣ+xeˣ gives y′(0)=1. / 点为 (0,0)，斜率为 1。"
  },
  {
    id: "2.8-05",
    topic: "2.8",
    label: "Log Times Cosine / 对数乘余弦",
    difficulty: "medium",
    question: "Differentiate q(x)=(ln x)cos x.",
    hint: "cos x 的导数是 −sin x。",
    answer: "q′(x)=(cos x)/x−(ln x)sin x.",
    explanation: "q′=(1/x)cos x+(ln x)(−sin x). / 保留乘积法则两项与余弦导数负号。"
  },
  {
    id: "2.8-06",
    topic: "2.8",
    label: "Three Factors / 三个因子",
    difficulty: "challenge",
    question: "Differentiate F(x)=xeˣsin x.",
    hint: "三个因子产生三项，每项只对一个因子求导。",
    answer: "F′(x)=eˣsin x+xeˣsin x+xeˣcos x.",
    explanation: "Differentiate x, eˣ, and sin x in turn while keeping the other factors. / 轮流求导三个因子。"
  },
  {
    id: "2.9-01",
    topic: "2.9",
    label: "Quotient Rule / 商法则",
    difficulty: "easy",
    question: "Complete the rule: if q=f/g, then q′=____, where g≠0.",
    hint: "分子顺序固定，分母整体平方。",
    answer: "q′=(f′g−fg′)/g².",
    explanation: "Derivative of the top times the bottom minus the top times derivative of the bottom, over the bottom squared. / 注意减法顺序。"
  },
  {
    id: "2.9-02",
    topic: "2.9",
    label: "Algebraic Quotient / 代数商函数",
    difficulty: "medium",
    question: "Differentiate h(x)=(x²+1)/(x−1).",
    hint: "分母写成 (x−1)²。",
    answer: "h′(x)=(x²−2x−1)/(x−1)².",
    explanation: "[2x(x−1)−(x²+1)]/(x−1)² simplifies to the stated result. / 先保留结构，再化简分子。"
  },
  {
    id: "2.9-03",
    topic: "2.9",
    label: "Quotient from a Table / 表格商法则",
    difficulty: "medium",
    question: "At x=1, f=2, f′=3, g=−1, and g′=4. Find (f/g)′ at x=1.",
    hint: "负数代入时加括号。",
    answer: "−11.",
    explanation: "[(3)(−1)−(2)(4)]/(−1)²=−11. / 分母使用 g(1)²。"
  },
  {
    id: "2.9-04",
    topic: "2.9",
    label: "Simplify First / 先化简",
    difficulty: "easy",
    question: "For q(x)=x³/x with x≠0, find q′(x) and keep the domain restriction.",
    hint: "先约分，但不能补回 x=0。",
    answer: "q′(x)=2x for x≠0. / q′(x)=2x，且 x≠0。",
    explanation: "On its original domain, q(x)=x², so q′(x)=2x; x=0 remains excluded. / 化简不改变原定义域限制。"
  },
  {
    id: "2.9-05",
    topic: "2.9",
    label: "Trig Quotient Tangent / 三角商函数切线",
    difficulty: "challenge",
    question: "Find the tangent line to y=(sin x)/x at x=π/2.",
    hint: "先求点 (π/2,2/π)，再用商法则求斜率。",
    answer: "y−2/π=−(4/π²)(x−π/2).",
    explanation: "y′=[xcos x−sin x]/x², so y′(π/2)=−4/π². / 原函数给点，导函数给斜率。"
  },
  {
    id: "2.9-06",
    topic: "2.9",
    label: "Instantaneous Rate / 瞬时变化率",
    difficulty: "medium",
    question: "Find the instantaneous rate of change at x=4 for f(x)=(x²−1)/(x−2).",
    hint: "求 f′(x) 后再代入 4。",
    answer: "f′(4)=1/4.",
    explanation: "f′=[2x(x−2)−(x²−1)]/(x−2)², which equals 1/4 at x=4. / 瞬时变化率是该点导数值。"
  },
  {
    id: "2.10-01",
    topic: "2.10",
    label: "Tan and Cot Derivatives / 正切与余切导数",
    difficulty: "easy",
    question: "State the derivatives of tan x and cot x.",
    hint: "tan/sec 为正号组，cot/csc 为负号组。",
    answer: "(tan x)′=sec²x; (cot x)′=−csc²x.",
    explanation: "Tangent pairs with secant; cotangent pairs with cosecant and carries a minus sign. / 按搭档与正负号记忆。"
  },
  {
    id: "2.10-02",
    topic: "2.10",
    label: "Cosecant Sign / 余割导数符号",
    difficulty: "easy",
    question: "Differentiate y=5−csc x.",
    hint: "(csc x)′=−csc x cot x，注意双负号。",
    answer: "y′=csc x cot x.",
    explanation: "0−(−csc x cot x)=csc x cot x. / 外部负号与公式负号相消。"
  },
  {
    id: "2.10-03",
    topic: "2.10",
    label: "Product with Tangent / 正切乘积",
    difficulty: "medium",
    question: "Differentiate h(x)=2x tan x.",
    hint: "使用乘积法则，并保留 sec²x。",
    answer: "h′(x)=2tan x+2xsec²x.",
    explanation: "Differentiate 2x in the first contribution and tan x in the second. / 两项分别来自两个因子的变化。"
  },
  {
    id: "2.10-04",
    topic: "2.10",
    label: "Exact Trig Derivative / 三角导数精确值",
    difficulty: "medium",
    question: "If f(x)=3tan x, find f′(2π/3).",
    hint: "sec(2π/3)=−2，但 sec² 为正。",
    answer: "12.",
    explanation: "f′=3sec²x, so f′(2π/3)=3(−2)²=12. / 使用单位圆精确值。"
  },
  {
    id: "2.10-05",
    topic: "2.10",
    label: "Vertical Normal / 竖直法线",
    difficulty: "medium",
    question: "For y=sec x at x=π, find the tangent line and the normal line.",
    hint: "该点切线斜率为 0，因此法线竖直。",
    answer: "Tangent: y=−1; normal: x=π. / 切线 y=−1；法线 x=π。",
    explanation: "The point is (π,−1), and y′=sec x tan x gives slope 0 at π. / 水平切线的垂线是竖直线。"
  },
  {
    id: "2.10-06",
    topic: "2.10",
    label: "Secant Difference Quotient / 正割差商",
    difficulty: "challenge",
    question: "Evaluate lim as h→0 of [sec(π/6+h)−sec(π/6)]/h.",
    hint: "这是 sec x 在 x=π/6 处的导数。",
    answer: "2/3.",
    explanation: "(sec x)′=sec x tan x, and sec(π/6)tan(π/6)=(2/√3)(1/√3)=2/3. / 识别导数定义后代单位圆值。"
  }
]);
