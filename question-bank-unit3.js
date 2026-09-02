window.AP_CALCULUS_QUESTION_BANK_3 = Object.freeze([
  {
    id: "3.1-01",
    topic: "3.1",
    label: "Recognize a Composite / 识别复合函数",
    difficulty: "easy",
    question: "For y=(2x³−5)⁴, identify the outer function and the inner function.",
    hint: "把括号内整体记作 u。",
    answer: "Outer: u⁴; inner: u=2x³−5. / 外层为 u⁴，内层为 2x³−5。",
    explanation: "The fourth power acts on the entire expression 2x³−5, so the chain rule is required. / 四次幂作用于整个内层。"
  },
  {
    id: "3.1-02",
    topic: "3.1",
    label: "Power Chain / 幂函数复合",
    difficulty: "easy",
    question: "Differentiate f(x)=(x²+1)⁴.",
    hint: "外层求导后乘 2x。",
    answer: "f′(x)=8x(x²+1)³.",
    explanation: "4(x²+1)³·2x=8x(x²+1)³. / 外层导数乘内层导数。"
  },
  {
    id: "3.1-03",
    topic: "3.1",
    label: "Radical Chain / 根式复合",
    difficulty: "medium",
    question: "Differentiate g(x)=√(5x−2).",
    hint: "把根式写成 (5x−2)^(1/2)。",
    answer: "g′(x)=5/[2√(5x−2)].",
    explanation: "(1/2)(5x−2)^(−1/2)·5. / 幂函数法则后乘内层导数 5。"
  },
  {
    id: "3.1-04",
    topic: "3.1",
    label: "Trig Chain / 三角复合",
    difficulty: "medium",
    question: "Differentiate h(x)=sin(3x²).",
    hint: "sin(u) 的导数是 cos(u)·u′。",
    answer: "h′(x)=6x cos(3x²).",
    explanation: "Keep 3x² inside cosine and multiply by its derivative 6x. / 内层原样保留并乘 6x。"
  },
  {
    id: "3.1-05",
    topic: "3.1",
    label: "Chain Rule Table / 表格链式法则",
    difficulty: "medium",
    question: "Let F(x)=p(q(x)). If q(2)=5, q′(2)=−3, and p′(5)=4, find F′(2).",
    hint: "F′(2)=p′(q(2))q′(2)。",
    answer: "F′(2)=−12.",
    explanation: "p′(q(2))q′(2)=p′(5)(−3)=4(−3)=−12. / 先找内层输出，再查外层导数。"
  },
  {
    id: "3.1-06",
    topic: "3.1",
    label: "Tangent after Chain Rule / 链式法则与切线",
    difficulty: "hard",
    question: "Find the tangent line to y=e^(x²) at x=1.",
    hint: "先求点 (1,e)，再求 y′(1)。",
    answer: "y−e=2e(x−1).",
    explanation: "y′=2xe^(x²), so y′(1)=2e and the point is (1,e). / 函数值给点，导数值给斜率。"
  },
  {
    id: "3.2-01",
    topic: "3.2",
    label: "Implicit Circle / 圆的隐函数导数",
    difficulty: "easy",
    question: "For x²+y²=16, find dy/dx.",
    hint: "对 y² 求导要乘 y′。",
    answer: "dy/dx=−x/y.",
    explanation: "2x+2y(dy/dx)=0, then solve for dy/dx. / 两边对 x 求导并解出 y′。"
  },
  {
    id: "3.2-02",
    topic: "3.2",
    label: "Implicit Tangent / 隐函数切线",
    difficulty: "medium",
    question: "Find the tangent line to x²+4y²=20 at (2,2).",
    hint: "先验证点，再代入 y′=−x/(4y)。",
    answer: "y−2=−(1/4)(x−2).",
    explanation: "2x+8yy′=0, so y′=−x/(4y)=−1/4 at (2,2). / 使用点斜式。"
  },
  {
    id: "3.2-03",
    topic: "3.2",
    label: "Implicit Product / 隐式乘积",
    difficulty: "medium",
    question: "Differentiate x²+xy+y²=7 implicitly and solve for y′.",
    hint: "(xy)′=xy′+y。",
    answer: "y′=−(2x+y)/(x+2y).",
    explanation: "2x+xy′+y+2yy′=0; collect the y′ terms. / 收集含 y′ 的项后提取。"
  },
  {
    id: "3.2-04",
    topic: "3.2",
    label: "Horizontal Tangents / 水平切线",
    difficulty: "medium",
    question: "Find all horizontal-tangent points on x²+9y²=9.",
    hint: "y′=−x/(9y)，令分子为 0。",
    answer: "(0,1) and (0,−1).",
    explanation: "Horizontal tangents require x=0 and y≠0; the original equation then gives y=±1. / 候选值要代回原方程。"
  },
  {
    id: "3.2-05",
    topic: "3.2",
    label: "Implicit Trig / 三角隐函数",
    difficulty: "hard",
    question: "For sin(x+y)=x, find the tangent slope at (0,0).",
    hint: "cos(x+y)(1+y′)=1。",
    answer: "The tangent slope is 0.",
    explanation: "At (0,0), cos0(1+y′)=1, so y′=0. / 先链式求导，再代入点。"
  },
  {
    id: "3.2-06",
    topic: "3.2",
    label: "Normal Line / 法线",
    difficulty: "medium",
    question: "On x²+y²=25, find the normal line at (3,4).",
    hint: "切线斜率为 −3/4，法线斜率取负倒数。",
    answer: "y−4=(4/3)(x−3).",
    explanation: "The tangent slope is −x/y=−3/4, so the normal slope is 4/3. / 法线与切线垂直。"
  },
  {
    id: "3.3-01",
    topic: "3.3",
    label: "Inverse vs. Reciprocal / 反函数与倒数",
    difficulty: "easy",
    question: "Explain the difference between f⁻¹(x) and [f(x)]⁻¹.",
    hint: "一个交换输入输出，一个取函数值的倒数。",
    answer: "f⁻¹ is the inverse function; [f(x)]⁻¹=1/f(x) is the reciprocal. / 前者是反函数，后者是倒数。",
    explanation: "The superscript −1 has different meanings depending on its position. / 必须结合括号位置读记号。"
  },
  {
    id: "3.3-02",
    topic: "3.3",
    label: "Inverse Derivative Formula / 反函数导数公式",
    difficulty: "easy",
    question: "If f(4)=9 and f′(4)=6, find (f⁻¹)′(9).",
    hint: "先写 f⁻¹(9)=4。",
    answer: "(f⁻¹)′(9)=1/6.",
    explanation: "Use 1/f′(f⁻¹(9))=1/f′(4)=1/6. / 在对应原函数输入处取导数倒数。"
  },
  {
    id: "3.3-03",
    topic: "3.3",
    label: "Inverse from a Table / 表格反函数",
    difficulty: "medium",
    question: "A table gives g(2)=7 and g′(2)=−5. Find (g⁻¹)′(7).",
    hint: "在输出列找到 7。",
    answer: "(g⁻¹)′(7)=−1/5.",
    explanation: "Because g⁻¹(7)=2, the required reciprocal slope is 1/g′(2). / 先反查对应输入 2。"
  },
  {
    id: "3.3-04",
    topic: "3.3",
    label: "Inverse Tangent Line / 反函数切线",
    difficulty: "medium",
    question: "Given p(3)=8 and p′(3)=4, write the tangent line to y=p⁻¹(x) at x=8.",
    hint: "反函数点为 (8,3)。",
    answer: "y−3=(1/4)(x−8).",
    explanation: "Swap the coordinates and use the reciprocal slope 1/4. / 坐标交换，斜率取倒数。"
  },
  {
    id: "3.3-05",
    topic: "3.3",
    label: "Find an Algebraic Inverse / 求反函数解析式",
    difficulty: "easy",
    question: "Find the inverse of f(x)=3x−5.",
    hint: "令 y=3x−5，交换 x 与 y 后解出 y。",
    answer: "f⁻¹(x)=(x+5)/3.",
    explanation: "x=3y−5 implies y=(x+5)/3. / 交换输入输出后解方程。"
  },
  {
    id: "3.3-06",
    topic: "3.3",
    label: "Zero Original Slope / 原函数斜率为零",
    difficulty: "hard",
    question: "If f is one-to-one near a, f(a)=b, and f′(a)=0, why can the usual inverse-derivative formula not give a finite value at b?",
    hint: "公式会要求计算 1/f′(a)。",
    answer: "It would require division by zero; the inverse may have a vertical tangent. / 会出现除以零，反函数可能有竖直切线。",
    explanation: "Reflecting across y=x swaps a horizontal tangent with a vertical tangent. / 反函数图像关于 y=x 对称。"
  },
  {
    id: "3.4-01",
    topic: "3.4",
    label: "Arcsine Derivative / 反正弦导数",
    difficulty: "easy",
    question: "Differentiate y=arcsin(2x).",
    hint: "u′/√(1−u²)。",
    answer: "y′=2/√(1−4x²).",
    explanation: "Use u=2x, so u′=2 and u²=4x². / 分子是内层导数。"
  },
  {
    id: "3.4-02",
    topic: "3.4",
    label: "Arccosine Sign / 反余弦符号",
    difficulty: "easy",
    question: "Differentiate y=arccos(3x).",
    hint: "arccos 导数前有负号。",
    answer: "y′=−3/√(1−9x²).",
    explanation: "The arccosine formula is −u′/√(1−u²). / 负号来自反余弦公式。"
  },
  {
    id: "3.4-03",
    topic: "3.4",
    label: "Arctangent Chain / 反正切复合",
    difficulty: "medium",
    question: "Differentiate y=arctan(x²).",
    hint: "u′/(1+u²)。",
    answer: "y′=2x/(1+x⁴).",
    explanation: "With u=x², u′=2x and u²=x⁴. / 分母要平方完整内层。"
  },
  {
    id: "3.4-04",
    topic: "3.4",
    label: "Arcsecant Absolute Value / 反正割绝对值",
    difficulty: "hard",
    question: "Differentiate y=arcsec(4x).",
    hint: "u′/[|u|√(u²−1)]。",
    answer: "y′=1/[|x|√(16x²−1)].",
    explanation: "4/[|4x|√(16x²−1)]=1/[|x|√(16x²−1)]. / |4x|=4|x|。"
  },
  {
    id: "3.4-05",
    topic: "3.4",
    label: "Inverse Trig Value / 反三角函数值",
    difficulty: "easy",
    question: "Evaluate arccos(−1/2) using the principal range [0,π].",
    hint: "在 [0,π] 中找余弦为 −1/2 的角。",
    answer: "2π/3.",
    explanation: "cos(2π/3)=−1/2 and 2π/3 lies in the principal arccos range. / 反余弦输出主值角。"
  },
  {
    id: "3.4-06",
    topic: "3.4",
    label: "Inverse Trig Tangent / 反三角切线",
    difficulty: "hard",
    question: "Write the tangent line to y=arcsin x at x=1/2.",
    hint: "点为 (1/2,π/6)，斜率为 1/√(1−1/4)。",
    answer: "y−π/6=(2/√3)(x−1/2).",
    explanation: "arcsin(1/2)=π/6 and y′(1/2)=2/√3. / 函数值给点，导数值给斜率。"
  },
  {
    id: "3.5-01",
    topic: "3.5",
    label: "Product or Chain? / 乘积还是链式",
    difficulty: "easy",
    question: "Which main rule starts each derivative: x²sin x and sin(x²)?",
    hint: "看最外层连接方式。",
    answer: "x²sin x starts with the product rule; sin(x²) starts with the chain rule. / 前者乘积，后者复合。",
    explanation: "Adjacent factors form a product; one expression inside another forms a composite. / 最外层结构决定第一步。"
  },
  {
    id: "3.5-02",
    topic: "3.5",
    label: "Product with Log / 对数乘积",
    difficulty: "medium",
    question: "Differentiate f(x)=x²ln x.",
    hint: "两个因子都依赖 x。",
    answer: "f′(x)=2x ln x+x.",
    explanation: "Product rule gives 2x ln x+x²(1/x), which simplifies to 2x ln x+x. / 使用乘积法则。"
  },
  {
    id: "3.5-03",
    topic: "3.5",
    label: "Log Quotient / 对数商",
    difficulty: "medium",
    question: "Differentiate f(x)=ln x/x for x>0.",
    hint: "商法则分子为 (1/x)x−ln x。",
    answer: "f′(x)=(1−ln x)/x².",
    explanation: "Apply the quotient rule and simplify; retain the original domain x>0. / 化简后仍保留定义域。"
  },
  {
    id: "3.5-04",
    topic: "3.5",
    label: "Nested Radical / 嵌套根式",
    difficulty: "hard",
    question: "Differentiate f(x)=√(1+√x), x>0.",
    hint: "有两层根号。",
    answer: "f′(x)=1/[4√x√(1+√x)].",
    explanation: "Multiply 1/[2√(1+√x)] by 1/(2√x). / 两层链式导数相乘。"
  },
  {
    id: "3.5-05",
    topic: "3.5",
    label: "Select Implicit Differentiation / 选择隐函数求导",
    difficulty: "medium",
    question: "Find the tangent slope to 9x²+16y²=52 at (2,−1).",
    hint: "18x+32yy′=0。",
    answer: "The tangent slope is 9/8.",
    explanation: "y′=−18x/(32y), so at (2,−1) the slope is −36/(−32)=9/8. / 隐函数求导后代点。"
  },
  {
    id: "3.5-06",
    topic: "3.5",
    label: "Product plus Chain / 乘积加链式",
    difficulty: "hard",
    question: "Differentiate y=x e^(x²).",
    hint: "最外层是乘积，第二因子内部是复合。",
    answer: "y′=e^(x²)(1+2x²).",
    explanation: "y′=e^(x²)+x[e^(x²)·2x], then factor e^(x²). / 乘积法则与链式法则结合。"
  },
  {
    id: "3.6-01",
    topic: "3.6",
    label: "Second-Derivative Notation / 二阶导数记号",
    difficulty: "easy",
    question: "What does d²y/dx² mean, and what does it not mean?",
    hint: "它是 y′ 再对 x 求导。",
    answer: "It is the second derivative of y with respect to x; it is not (dy/dx)². / 它是二阶导数，不是一阶导数平方。",
    explanation: "Higher-order notation records repeated differentiation. / 高阶记号表示重复求导。"
  },
  {
    id: "3.6-02",
    topic: "3.6",
    label: "Polynomial Second Derivative / 多项式二阶导数",
    difficulty: "easy",
    question: "For f(x)=x⁴−3x²+2x, find f″(x).",
    hint: "连续求导两次。",
    answer: "f″(x)=12x²−6.",
    explanation: "f′(x)=4x³−6x+2, then f″(x)=12x²−6. / 注意题目要求双撇号。"
  },
  {
    id: "3.6-03",
    topic: "3.6",
    label: "Exponential Pattern / 指数高阶模式",
    difficulty: "medium",
    question: "If f(x)=e^(3x), find f⁽ⁿ⁾(x).",
    hint: "每求一次导都会乘 3。",
    answer: "f⁽ⁿ⁾(x)=3ⁿe^(3x).",
    explanation: "Repeated chain differentiation contributes one factor of 3 each time. / n 次求导产生 3ⁿ。"
  },
  {
    id: "3.6-04",
    topic: "3.6",
    label: "Trig Derivative Cycle / 三角导数循环",
    difficulty: "medium",
    question: "Find the 10th derivative of f(x)=sin x.",
    hint: "sin 的导数循环长度为 4；10 mod 4=2。",
    answer: "f⁽¹⁰⁾(x)=−sin x.",
    explanation: "The 2nd derivative is −sin x, and every four derivatives the cycle repeats. / 用模 4 判断循环位置。"
  },
  {
    id: "3.6-05",
    topic: "3.6",
    label: "Implicit Second Derivative / 隐式二阶导数",
    difficulty: "hard",
    question: "For x²+y²=25, find y″ at (3,4).",
    hint: "先得 y′=−x/y，再求导一次。",
    answer: "y″=−25/64.",
    explanation: "Differentiating y′=−x/y gives y″=−(x²+y²)/y³=−25/y³; at y=4 this is −25/64. / 二次求导后使用原方程化简。"
  },
  {
    id: "3.6-06",
    topic: "3.6",
    label: "Position and Acceleration / 位置与加速度",
    difficulty: "medium",
    question: "A particle has position s(t)=t³−6t²+4t meters. Find its acceleration at t=2 seconds.",
    hint: "速度是 s′，加速度是 s″。",
    answer: "a(2)=0 m/s².",
    explanation: "s′(t)=3t²−12t+4 and s″(t)=6t−12, so s″(2)=0. / 加速度是位置的二阶导数。"
  }
]);
