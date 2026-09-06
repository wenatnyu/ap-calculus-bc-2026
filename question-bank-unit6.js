window.AP_CALCULUS_QUESTION_BANK_6 = Object.freeze([
  {
    "id": "6.1-01",
    "topic": "6.1",
    "label": "Units of Accumulation / 累积量单位",
    "difficulty": "easy",
    "question": "A flow rate is measured in liters per minute and time in minutes. What are the units of accumulated change?",
    "hint": "Multiply the vertical and horizontal units.",
    "answer": "liters",
    "explanation": "(liters/minute)(minutes)=liters. / 变化率单位乘时间单位。"
  },
  {
    "id": "6.1-02",
    "topic": "6.1",
    "label": "Constant Rate / 恒定变化率",
    "difficulty": "easy",
    "question": "A car travels at 55 miles per hour for 3 hours. What change in position is accumulated?",
    "hint": "Use a rectangular area.",
    "answer": "165 miles",
    "explanation": "55·3=165. / 恒定速率图像下是矩形。"
  },
  {
    "id": "6.1-03",
    "topic": "6.1",
    "label": "Signed Pieces / 有向分段面积",
    "difficulty": "medium",
    "question": "A rate is 4 on [0,3] and −2 on (3,7]. Find the net change.",
    "hint": "Add signed rectangular areas.",
    "answer": "4(3)−2(4)=4",
    "explanation": "The negative rectangle subtracts from accumulation. / 横轴下方记负。"
  },
  {
    "id": "6.1-04",
    "topic": "6.1",
    "label": "Initial Plus Change / 初值加变化",
    "difficulty": "medium",
    "question": "A tank starts with 90 gallons and gains 24 gallons of net accumulation. How much is in the tank?",
    "hint": "Add accumulation to the initial amount.",
    "answer": "114 gallons",
    "explanation": "Final=initial+net change. / 最终量等于初值加净变化。"
  },
  {
    "id": "6.1-05",
    "topic": "6.1",
    "label": "Displacement and Distance / 位移与路程",
    "difficulty": "medium",
    "question": "Velocity is 2 m/s for 5 s and −1 m/s for 4 s. Find displacement and distance.",
    "hint": "Use signed area for displacement and absolute area for distance.",
    "answer": "displacement 6 m; distance 14 m",
    "explanation": "2(5)−1(4)=6 while 2(5)+1(4)=14. / 位移保留符号，路程取绝对值。"
  },
  {
    "id": "6.1-06",
    "topic": "6.1",
    "label": "Table Estimate / 表格估计",
    "difficulty": "challenge",
    "question": "At t=0,2,4 a rate has values 3,5,4. Use a left-endpoint sum to estimate accumulation on [0,4].",
    "hint": "There are two intervals of width 2.",
    "answer": "16",
    "explanation": "3(2)+5(2)=16. / 左端点高度为3和5。"
  },
  {
    "id": "6.2-01",
    "topic": "6.2",
    "label": "Subinterval Width / 子区间宽度",
    "difficulty": "easy",
    "question": "Find Δx for [−2,6] divided into 4 equal subintervals.",
    "hint": "Use (b−a)/n.",
    "answer": "2",
    "explanation": "(6−(−2))/4=2. / 区间长度除以份数。"
  },
  {
    "id": "6.2-02",
    "topic": "6.2",
    "label": "Left Sum / 左端点和",
    "difficulty": "easy",
    "question": "For f(x)=x² on [0,4] with n=4, find L₄.",
    "hint": "Use x=0,1,2,3.",
    "answer": "14",
    "explanation": "Δx=1 and 0²+1²+2²+3²=14. / 使用四个左端点。"
  },
  {
    "id": "6.2-03",
    "topic": "6.2",
    "label": "Right Sum / 右端点和",
    "difficulty": "medium",
    "question": "For f(x)=x² on [0,4] with n=4, find R₄.",
    "hint": "Use x=1,2,3,4.",
    "answer": "30",
    "explanation": "1+4+9+16=30. / 使用四个右端点。"
  },
  {
    "id": "6.2-04",
    "topic": "6.2",
    "label": "Midpoint Sum / 中点和",
    "difficulty": "medium",
    "question": "For f(x)=x² on [0,4] with n=4, find M₄.",
    "hint": "Use 0.5,1.5,2.5,3.5.",
    "answer": "21",
    "explanation": "0.25+2.25+6.25+12.25=21. / 中点高度相加。"
  },
  {
    "id": "6.2-05",
    "topic": "6.2",
    "label": "Unequal Trapezoids / 不等宽梯形",
    "difficulty": "medium",
    "question": "Use a trapezoidal sum for x=0,2,5 with f(x)=4,7,3.",
    "hint": "Treat each width separately.",
    "answer": "26",
    "explanation": "2(4+7)/2+3(7+3)/2=26. / 宽度分别为2和3。"
  },
  {
    "id": "6.2-06",
    "topic": "6.2",
    "label": "Error Direction / 误差方向",
    "difficulty": "challenge",
    "question": "If f is increasing and concave up, classify Lₙ, Rₙ, Mₙ, and Tₙ as under- or overestimates.",
    "hint": "Use monotonicity for L/R and concavity for M/T.",
    "answer": "Lₙ and Mₙ under; Rₙ and Tₙ over",
    "explanation": "Increasing controls endpoint sums; concave up controls midpoint/trapezoid. / 单调性与凹凸性分别判断。"
  },
  {
    "id": "6.3-01",
    "topic": "6.3",
    "label": "Expand Sigma / 展开求和",
    "difficulty": "easy",
    "question": "Evaluate Σᵢ₌₁⁴(2i−1).",
    "hint": "List the four terms.",
    "answer": "16",
    "explanation": "1+3+5+7=16. / 展开四项。"
  },
  {
    "id": "6.3-02",
    "topic": "6.3",
    "label": "Integral Parts / 定积分组成",
    "difficulty": "easy",
    "question": "In ∫₁⁵f(x)dx, identify the lower bound, upper bound, integrand, and variable.",
    "hint": "Read each part of the notation.",
    "answer": "lower 1; upper 5; integrand f(x); variable x",
    "explanation": "The differential dx names the integration variable. / dx 指明积分变量。"
  },
  {
    "id": "6.3-03",
    "topic": "6.3",
    "label": "Sum to Integral / 和式转积分",
    "difficulty": "medium",
    "question": "Rewrite limₙ→∞(3/n)Σᵢ₌₁ⁿ[1+(3i/n)²] as an integral.",
    "hint": "Match Δx=3/n and xᵢ=3i/n.",
    "answer": "∫₀³(1+x²)dx",
    "explanation": "The right endpoints fill [0,3]. / 右端点覆盖区间[0,3]。"
  },
  {
    "id": "6.3-04",
    "topic": "6.3",
    "label": "Reverse Limits / 交换上下限",
    "difficulty": "medium",
    "question": "If ∫₂⁷f(x)dx=9, find ∫₇²f(x)dx.",
    "hint": "Reverse the orientation.",
    "answer": "−9",
    "explanation": "Reversing limits changes the sign. / 交换上下限变号。"
  },
  {
    "id": "6.3-05",
    "topic": "6.3",
    "label": "Signed Geometry / 有向面积",
    "difficulty": "medium",
    "question": "The graph of f encloses area 8 above the axis and area 3 below on [a,b]. Find ∫ₐᵇf(x)dx.",
    "hint": "Above is positive; below is negative.",
    "answer": "5",
    "explanation": "8−3=5. / 定积分计算有向面积。"
  },
  {
    "id": "6.3-06",
    "topic": "6.3",
    "label": "Riemann Recognition / 黎曼和识别",
    "difficulty": "challenge",
    "question": "Write the right-endpoint Riemann-sum limit representing ∫₂⁶√(1+x)dx.",
    "hint": "For n equal subintervals, Δx=4/n and xᵢ=2+4i/n.",
    "answer": "limₙ→∞(4/n)Σᵢ₌₁ⁿ√(3+4i/n)",
    "explanation": "Substitute the right endpoint into √(1+x). / 把右端点代入被积函数。"
  },
  {
    "id": "6.4-01",
    "topic": "6.4",
    "label": "Direct FTC / 直接基本定理",
    "difficulty": "easy",
    "question": "If G(x)=∫₂ˣ(t³−4t)dt, find G′(x).",
    "hint": "Copy the integrand at t=x.",
    "answer": "x³−4x",
    "explanation": "FTC Part 1 gives G′=f. / 累积函数求导回到被积函数。"
  },
  {
    "id": "6.4-02",
    "topic": "6.4",
    "label": "Upper Chain Rule / 上限链式法则",
    "difficulty": "medium",
    "question": "Differentiate F(x)=∫₁ˣ²√(1+t³)dt.",
    "hint": "Evaluate at x², then multiply by 2x.",
    "answer": "2x√(1+x⁶)",
    "explanation": "The moving endpoint is a composite function. / 上限是复合函数。"
  },
  {
    "id": "6.4-03",
    "topic": "6.4",
    "label": "Lower Limit / 变量下限",
    "difficulty": "medium",
    "question": "Differentiate H(x)=∫ₓ⁴e^(t²)dt.",
    "hint": "A moving lower limit contributes a minus sign.",
    "answer": "−e^(x²)",
    "explanation": "Upper contribution is zero; subtract the lower contribution. / 下限项带负号。"
  },
  {
    "id": "6.4-04",
    "topic": "6.4",
    "label": "Both Limits / 两个变量限",
    "difficulty": "medium",
    "question": "Differentiate K(x)=∫ₓˣ²(1+t³)dt.",
    "hint": "Upper term minus lower term.",
    "answer": "2x(1+x⁶)−(1+x³)",
    "explanation": "Apply the chain rule to both limits. / 对两个端点分别使用链式法则。"
  },
  {
    "id": "6.4-05",
    "topic": "6.4",
    "label": "Starting Value / 起点函数值",
    "difficulty": "easy",
    "question": "If G(x)=∫₅ˣf(t)dt, what is G(5)?",
    "hint": "The interval has zero width.",
    "answer": "0",
    "explanation": "∫₅⁵f=0. / 相同上下限的积分为零。"
  },
  {
    "id": "6.4-06",
    "topic": "6.4",
    "label": "Continuity Condition / 连续性条件",
    "difficulty": "challenge",
    "question": "What condition on f supports G′(c)=f(c) for G(x)=∫ₐˣf(t)dt?",
    "hint": "State the local FTC condition.",
    "answer": "f is continuous at c",
    "explanation": "A jump can make the accumulation function nondifferentiable at c. / 被积函数在该点连续。"
  },
  {
    "id": "6.5-01",
    "topic": "6.5",
    "label": "Increase from Integrand / 由被积函数判断递增",
    "difficulty": "easy",
    "question": "For g(x)=∫₀ˣf(t)dt, where is g increasing?",
    "hint": "Use g′=f.",
    "answer": "where f(x)&gt;0",
    "explanation": "The sign of f is the sign of g′. / f 的符号决定 g 的单调性。"
  },
  {
    "id": "6.5-02",
    "topic": "6.5",
    "label": "Local Maximum / 局部最大值",
    "difficulty": "easy",
    "question": "If f changes from positive to negative at x=2, what happens to g(x)=∫₀ˣf(t)dt?",
    "hint": "Track g′.",
    "answer": "g has a local maximum at x=2",
    "explanation": "g′ changes + to −. / 一阶导数由正变负。"
  },
  {
    "id": "6.5-03",
    "topic": "6.5",
    "label": "Concavity / 凹凸性",
    "difficulty": "medium",
    "question": "If f is increasing on (1,4), describe the concavity of g(x)=∫₀ˣf(t)dt there.",
    "hint": "Use the fact that g′=f is increasing.",
    "answer": "g is concave up",
    "explanation": "Because g′=f is increasing; where f′ exists, g″=f′≥0. / g的一阶导数递增，因此g凹向上。"
  },
  {
    "id": "6.5-04",
    "topic": "6.5",
    "label": "Mixed Behavior / 综合行为",
    "difficulty": "medium",
    "question": "If f&lt;0 and f is increasing on (1,4), describe g.",
    "hint": "Use f for slope and the trend of f for concavity.",
    "answer": "decreasing and concave up",
    "explanation": "g′=f&lt;0, while g′=f is increasing. / 分别用f的符号与趋势判断单调性和凹凸性。"
  },
  {
    "id": "6.5-05",
    "topic": "6.5",
    "label": "Inflection Candidate / 拐点候选",
    "difficulty": "medium",
    "question": "What feature of f is a candidate for an inflection point of g(x)=∫₀ˣf(t)dt?",
    "hint": "An inflection of g needs a sign change in g″=f′.",
    "answer": "a point where f changes from increasing to decreasing or vice versa",
    "explanation": "A local extremum of f can mark a concavity change of g. / f 的单调趋势改变。"
  },
  {
    "id": "6.5-06",
    "topic": "6.5",
    "label": "Absolute Extrema / 绝对极值",
    "difficulty": "challenge",
    "question": "On [a,b], which x-values should be checked for absolute extrema of g(x)=C+∫ₐˣf(t)dt?",
    "hint": "Apply the Candidates Test to g.",
    "answer": "endpoints and interior points where f=0 or f is undefined",
    "explanation": "Because g′=f, those are critical candidates. / g 的临界点来自 f=0 或无定义。"
  },
  {
    "id": "6.6-01",
    "topic": "6.6",
    "label": "Adjacent Intervals / 相邻区间",
    "difficulty": "easy",
    "question": "If ∫₀³f=5 and ∫₃⁷f=−2, find ∫₀⁷f.",
    "hint": "Add adjacent intervals.",
    "answer": "3",
    "explanation": "5+(−2)=3. / 利用区间可加性。"
  },
  {
    "id": "6.6-02",
    "topic": "6.6",
    "label": "Reverse Orientation / 反向",
    "difficulty": "easy",
    "question": "If ∫₀³f=5, find ∫₃⁰f.",
    "hint": "Reverse the limits.",
    "answer": "−5",
    "explanation": "Orientation reversal changes sign. / 交换上下限变号。"
  },
  {
    "id": "6.6-03",
    "topic": "6.6",
    "label": "Constant Multiple / 常数倍",
    "difficulty": "easy",
    "question": "If ∫₀³f=5, find ∫₀³4f(x)dx.",
    "hint": "Move the constant outside.",
    "answer": "20",
    "explanation": "4∫₀³f=4(5). / 常数可提出积分号。"
  },
  {
    "id": "6.6-04",
    "topic": "6.6",
    "label": "Linearity / 线性性质",
    "difficulty": "medium",
    "question": "If ∫₀³f=5 and ∫₀³g=−1, find ∫₀³(4f−2g)dx.",
    "hint": "Apply both coefficients.",
    "answer": "22",
    "explanation": "4(5)−2(−1)=22. / 注意负负得正。"
  },
  {
    "id": "6.6-05",
    "topic": "6.6",
    "label": "Odd Symmetry / 奇函数对称",
    "difficulty": "medium",
    "question": "If f is odd and integrable, evaluate ∫₋₄⁴f(x)dx.",
    "hint": "The interval is symmetric.",
    "answer": "0",
    "explanation": "Opposite signed areas cancel. / 奇函数在对称区间积分为零。"
  },
  {
    "id": "6.6-06",
    "topic": "6.6",
    "label": "Absolute Bound / 绝对值估计",
    "difficulty": "challenge",
    "question": "Compare |∫ₐᵇf| with ∫ₐᵇ|f| for a&lt;b.",
    "hint": "Net change versus total magnitude.",
    "answer": "|∫ₐᵇf|≤∫ₐᵇ|f|",
    "explanation": "Cancellation can only reduce the magnitude of the net integral. / 抵消只会减小净积分的绝对值。"
  },
  {
    "id": "6.7-01",
    "topic": "6.7",
    "label": "FTC Evaluation / 基本定理计算",
    "difficulty": "easy",
    "question": "Evaluate ∫₀²3x²dx.",
    "hint": "Use [x³]₀².",
    "answer": "8",
    "explanation": "An antiderivative of 3x² is x³. / 上限值减下限值。"
  },
  {
    "id": "6.7-02",
    "topic": "6.7",
    "label": "Trig Definite Integral / 三角定积分",
    "difficulty": "easy",
    "question": "Evaluate ∫₀^πsin x dx.",
    "hint": "Use −cos x.",
    "answer": "2",
    "explanation": "[−cos x]₀^π=2. / 注意正弦原函数的负号。"
  },
  {
    "id": "6.7-03",
    "topic": "6.7",
    "label": "Polynomial Integral / 多项式积分",
    "difficulty": "medium",
    "question": "Evaluate ∫₀²(3x²−4x+1)dx.",
    "hint": "Integrate term by term.",
    "answer": "2",
    "explanation": "[x³−2x²+x]₀²=2. / 逐项求原函数。"
  },
  {
    "id": "6.7-04",
    "topic": "6.7",
    "label": "Net Change Value / 净变化求函数值",
    "difficulty": "medium",
    "question": "If f′(x)=x²−2 and f(1)=−2, find f(3).",
    "hint": "Use f(3)=f(1)+∫₁³f′.",
    "answer": "8/3",
    "explanation": "The accumulated derivative change is 14/3. / 初值加导数的累积。"
  },
  {
    "id": "6.7-05",
    "topic": "6.7",
    "label": "Reverse Power / 反向幂法则",
    "difficulty": "easy",
    "question": "Give an antiderivative of x^(−1/2).",
    "hint": "Add one to the exponent and divide.",
    "answer": "2√x",
    "explanation": "d(2√x)/dx=1/√x. / 求导可验证。"
  },
  {
    "id": "6.7-06",
    "topic": "6.7",
    "label": "Piecewise Strategy / 分段策略",
    "difficulty": "challenge",
    "question": "A formula changes at x=0 inside [−2,3]. How should ∫₋₂³f(x)dx be evaluated?",
    "hint": "Split where the formula changes.",
    "answer": "∫₋₂⁰f(x)dx+∫₀³f(x)dx, using the appropriate formula on each piece",
    "explanation": "FTC is applied separately to each continuous formula. / 在分界点拆分。"
  },
  {
    "id": "6.8-01",
    "topic": "6.8",
    "label": "Power Antiderivative / 幂函数原函数",
    "difficulty": "easy",
    "question": "Find ∫(4x³−3x²)dx.",
    "hint": "Use the reverse power rule term by term.",
    "answer": "x⁴−x³+C",
    "explanation": "Differentiate to verify. / 逐项积分并写C。"
  },
  {
    "id": "6.8-02",
    "topic": "6.8",
    "label": "Log Form / 对数形式",
    "difficulty": "easy",
    "question": "Find ∫5/x dx.",
    "hint": "Use the special n=−1 case.",
    "answer": "5ln|x|+C",
    "explanation": "Absolute value is required. / 对数内写绝对值。"
  },
  {
    "id": "6.8-03",
    "topic": "6.8",
    "label": "Exponential Base / 一般底数指数",
    "difficulty": "medium",
    "question": "Find ∫3ˣdx.",
    "hint": "The derivative of 3ˣ contains ln3.",
    "answer": "3ˣ/ln3+C",
    "explanation": "Divide by ln3. / 一般底数需除以其自然对数。"
  },
  {
    "id": "6.8-04",
    "topic": "6.8",
    "label": "Trig Pair / 三角积分对",
    "difficulty": "easy",
    "question": "Find ∫(sec²x−sin x)dx.",
    "hint": "Use two basic derivative pairs.",
    "answer": "tan x+cos x+C",
    "explanation": "∫−sin x dx=cos x. / 注意符号。"
  },
  {
    "id": "6.8-05",
    "topic": "6.8",
    "label": "Particular Solution / 特解",
    "difficulty": "medium",
    "question": "If y′=2x+3 and y(0)=5, find y.",
    "hint": "Integrate, then use the condition.",
    "answer": "y=x²+3x+5",
    "explanation": "The initial condition determines C. / 初值确定积分常数。"
  },
  {
    "id": "6.8-06",
    "topic": "6.8",
    "label": "Two Constants / 两个常数",
    "difficulty": "challenge",
    "question": "If f″(x)=6x, write the general form of f(x).",
    "hint": "Integrate twice.",
    "answer": "f(x)=x³+C₁x+C₂",
    "explanation": "Each integration introduces an independent constant. / 每积分一次增加一个常数。"
  },
  {
    "id": "6.9-01",
    "topic": "6.9",
    "label": "Power u-Sub / 幂式换元",
    "difficulty": "easy",
    "question": "Find ∫6x(x²+4)⁵dx.",
    "hint": "Let u=x²+4.",
    "answer": "(1/2)(x²+4)⁶+C",
    "explanation": "6x dx=3du. / 配平du的系数。"
  },
  {
    "id": "6.9-02",
    "topic": "6.9",
    "label": "Log u-Sub / 对数型换元",
    "difficulty": "easy",
    "question": "Find ∫cos x/(1+sin x)dx.",
    "hint": "Let u=1+sin x.",
    "answer": "ln|1+sin x|+C",
    "explanation": "The numerator is du. / 分子正好是内函数导数。"
  },
  {
    "id": "6.9-03",
    "topic": "6.9",
    "label": "Exponential u-Sub / 指数换元",
    "difficulty": "medium",
    "question": "Find ∫sin x·e^(cos x)dx.",
    "hint": "Let u=cos x and track the minus sign.",
    "answer": "−e^(cos x)+C",
    "explanation": "du=−sin x dx. / 注意负号。"
  },
  {
    "id": "6.9-04",
    "topic": "6.9",
    "label": "Radical u-Sub / 根式换元",
    "difficulty": "medium",
    "question": "Find ∫x/√(x²+9)dx.",
    "hint": "Let u=x²+9.",
    "answer": "√(x²+9)+C",
    "explanation": "The factor 1/2 is canceled by integrating u^(−1/2). / 系数化简后得到根式。"
  },
  {
    "id": "6.9-05",
    "topic": "6.9",
    "label": "Changed Bounds / 更换上下限",
    "difficulty": "medium",
    "question": "Evaluate ∫₀¹2x e^(x²)dx.",
    "hint": "Use u=x² and change both bounds.",
    "answer": "e−1",
    "explanation": "The u-bounds are 0 and 1. / 换元后上下限同步变化。"
  },
  {
    "id": "6.9-06",
    "topic": "6.9",
    "label": "Technique Fit / 方法适配",
    "difficulty": "challenge",
    "question": "What test suggests that u=g(x) is a useful substitution?",
    "hint": "Check what remains after forming du.",
    "answer": "g′(x)dx is present up to a constant factor, and the integral becomes entirely a function of u",
    "explanation": "No x should remain in the u-integral. / 换元后不应残留x。"
  },
  {
    "id": "6.10-01",
    "topic": "6.10",
    "label": "Division Trigger / 长除触发条件",
    "difficulty": "easy",
    "question": "When should polynomial long division be used before integrating a rational function?",
    "hint": "Compare degrees.",
    "answer": "when numerator degree is at least denominator degree",
    "explanation": "The result becomes a polynomial plus a proper fraction. / 分子次数不低于分母。"
  },
  {
    "id": "6.10-02",
    "topic": "6.10",
    "label": "Long Division / 长除法",
    "difficulty": "medium",
    "question": "Rewrite (x²+1)/(x−1).",
    "hint": "Divide and check the remainder.",
    "answer": "x+1+2/(x−1)",
    "explanation": "(x−1)(x+1)+2=x²+1. / 乘回验证。"
  },
  {
    "id": "6.10-03",
    "topic": "6.10",
    "label": "Division Integral / 长除后积分",
    "difficulty": "medium",
    "question": "Integrate (x²+1)/(x−1).",
    "hint": "Use the rewritten form.",
    "answer": "x²/2+x+2ln|x−1|+C",
    "explanation": "Integrate the quotient and remainder term. / 对商和余项分别积分。"
  },
  {
    "id": "6.10-04",
    "topic": "6.10",
    "label": "Complete Square / 配方",
    "difficulty": "easy",
    "question": "Complete the square: x²+6x+13.",
    "hint": "Half 6, square it, and balance.",
    "answer": "(x+3)²+4",
    "explanation": "The shift is 3. / 一次项系数的一半是3。"
  },
  {
    "id": "6.10-05",
    "topic": "6.10",
    "label": "Inverse Tangent / 反正切积分",
    "difficulty": "medium",
    "question": "Evaluate ∫dx/(x²+6x+13).",
    "hint": "Complete the square first.",
    "answer": "(1/2)tan⁻¹((x+3)/2)+C",
    "explanation": "Use ∫du/(u²+a²). / 匹配a=2。"
  },
  {
    "id": "6.10-06",
    "topic": "6.10",
    "label": "Mixed Quadratic / 混合二次式",
    "difficulty": "challenge",
    "question": "Evaluate ∫(2x+7)/(x²+6x+13)dx.",
    "hint": "Split 2x+7=(2x+6)+1.",
    "answer": "ln(x²+6x+13)+(1/2)tan⁻¹((x+3)/2)+C",
    "explanation": "Use u-sub for the first piece and completing the square for the second. / 一题组合两种方法。"
  },
  {
    "id": "6.11-01",
    "topic": "6.11",
    "label": "Parts Formula / 分部积分公式",
    "difficulty": "easy",
    "question": "State the integration-by-parts formula.",
    "hint": "Reverse the product rule.",
    "answer": "∫u dv=uv−∫v du",
    "explanation": "The minus sign is essential. / 注意减号。"
  },
  {
    "id": "6.11-02",
    "topic": "6.11",
    "label": "Exponential Product / 指数乘积",
    "difficulty": "easy",
    "question": "Find ∫xeˣdx.",
    "hint": "Choose u=x and dv=eˣdx.",
    "answer": "eˣ(x−1)+C",
    "explanation": "The remaining integral is ∫eˣdx. / 新积分更简单。"
  },
  {
    "id": "6.11-03",
    "topic": "6.11",
    "label": "Log Integral / 对数积分",
    "difficulty": "medium",
    "question": "Find ∫ln x dx for x&gt;0.",
    "hint": "Treat the second factor as 1.",
    "answer": "xln x−x+C",
    "explanation": "Choose u=ln x and dv=dx. / 把1作为另一因子。"
  },
  {
    "id": "6.11-04",
    "topic": "6.11",
    "label": "Trig Product / 三角乘积",
    "difficulty": "medium",
    "question": "Find ∫x cos(2x)dx.",
    "hint": "v=(1/2)sin(2x).",
    "answer": "(x/2)sin(2x)+(1/4)cos(2x)+C",
    "explanation": "Track the nested negative when integrating sine. / 连续两个负号变正。"
  },
  {
    "id": "6.11-05",
    "topic": "6.11",
    "label": "Repeated Parts / 重复分部积分",
    "difficulty": "medium",
    "question": "Find ∫x²eˣdx.",
    "hint": "Use parts twice or a table.",
    "answer": "eˣ(x²−2x+2)+C",
    "explanation": "The polynomial degree falls to zero. / 多项式次数逐次降低。"
  },
  {
    "id": "6.11-06",
    "topic": "6.11",
    "label": "Definite Parts / 定积分分部",
    "difficulty": "challenge",
    "question": "Evaluate ∫₀¹xeˣdx.",
    "hint": "Apply bounds to uv and the remaining integral.",
    "answer": "1",
    "explanation": "[xeˣ]₀¹−[eˣ]₀¹=e−(e−1)=1. / 两部分都使用端点。"
  },
  {
    "id": "6.12-01",
    "topic": "6.12",
    "label": "Proper Rational / 真有理式",
    "difficulty": "easy",
    "question": "What degree condition makes P(x)/Q(x) a proper rational function?",
    "hint": "Compare numerator and denominator degrees.",
    "answer": "degree P&lt;degree Q",
    "explanation": "Otherwise long divide first. / 否则先做长除法。"
  },
  {
    "id": "6.12-02",
    "topic": "6.12",
    "label": "Basic Decomposition / 基本分解",
    "difficulty": "easy",
    "question": "Decompose 1/[(x−1)(x+2)].",
    "hint": "Use A/(x−1)+B/(x+2).",
    "answer": "(1/3)/(x−1)−(1/3)/(x+2)",
    "explanation": "Substitute x=1 and x=−2. / 代两个根求系数。"
  },
  {
    "id": "6.12-03",
    "topic": "6.12",
    "label": "Integrate Decomposition / 分解后积分",
    "difficulty": "medium",
    "question": "Integrate 1/[(x−1)(x+2)].",
    "hint": "Integrate each linear fraction.",
    "answer": "(1/3)ln|x−1|−(1/3)ln|x+2|+C",
    "explanation": "Linear denominators produce logarithms. / 一次分母对应对数。"
  },
  {
    "id": "6.12-04",
    "topic": "6.12",
    "label": "Numerator with x / 含x分子",
    "difficulty": "medium",
    "question": "Decompose (2x+3)/[(x+2)(x−1)].",
    "hint": "Clear denominators and substitute roots.",
    "answer": "(1/3)/(x+2)+(5/3)/(x−1)",
    "explanation": "Recombining gives numerator 2x+3. / 合并可验证。"
  },
  {
    "id": "6.12-05",
    "topic": "6.12",
    "label": "Domain Check / 定义域检查",
    "difficulty": "medium",
    "question": "Why must a definite integral of a rational function be checked for denominator zeros on its interval?",
    "hint": "A zero may create an infinite discontinuity.",
    "answer": "The integral may be improper and require one-sided limits",
    "explanation": "Ordinary FTC cannot cross a vertical asymptote directly. / 区间内渐近线需按反常积分处理。"
  },
  {
    "id": "6.12-06",
    "topic": "6.12",
    "label": "Three Factors / 三个线性因式",
    "difficulty": "challenge",
    "question": "Write the decomposition form for P(x)/[(x−1)(x+2)(x−4)], assuming it is proper.",
    "hint": "Assign one constant numerator per distinct linear factor.",
    "answer": "A/(x−1)+B/(x+2)+C/(x−4)",
    "explanation": "Solve A, B, C after clearing denominators. / 每个互异一次因式对应一个常数项。"
  },
  {
    "id": "6.13-01",
    "topic": "6.13",
    "label": "Definition at Infinity / 无穷端点定义",
    "difficulty": "easy",
    "question": "Rewrite ∫₁^∞f(x)dx as a limit.",
    "hint": "Replace infinity with a variable bound.",
    "answer": "limᵦ→∞∫₁ᵦf(x)dx",
    "explanation": "Infinity is not substituted as a number. / 无穷不是可直接代入的数。"
  },
  {
    "id": "6.13-02",
    "topic": "6.13",
    "label": "Convergent Tail / 收敛尾积分",
    "difficulty": "easy",
    "question": "Evaluate and classify ∫₁^∞1/x²dx.",
    "hint": "Use an upper-bound limit.",
    "answer": "converges to 1",
    "explanation": "limᵦ→∞(−1/b+1)=1. / 极限为有限值。"
  },
  {
    "id": "6.13-03",
    "topic": "6.13",
    "label": "Harmonic Tail / 调和尾积分",
    "difficulty": "easy",
    "question": "Classify ∫₁^∞1/x dx.",
    "hint": "Its antiderivative is ln x.",
    "answer": "diverges",
    "explanation": "ln b grows without bound. / 对数无界增长。"
  },
  {
    "id": "6.13-04",
    "topic": "6.13",
    "label": "p-Integral / p型积分",
    "difficulty": "medium",
    "question": "For which p does ∫₁^∞1/xᵖdx converge?",
    "hint": "Recall the threshold.",
    "answer": "p&gt;1",
    "explanation": "It diverges for p≤1. / 临界值为1。"
  },
  {
    "id": "6.13-05",
    "topic": "6.13",
    "label": "Improper Endpoint / 反常端点",
    "difficulty": "medium",
    "question": "Evaluate and classify ∫₀¹x^(−1/2)dx.",
    "hint": "Use a right-hand limit at 0.",
    "answer": "converges to 2",
    "explanation": "limₐ→0⁺[2√x]ₐ¹=2. / 在0处用右极限。"
  },
  {
    "id": "6.13-06",
    "topic": "6.13",
    "label": "Interior Asymptote / 内部渐近线",
    "difficulty": "challenge",
    "question": "Classify ∫₋₁¹1/x²dx.",
    "hint": "Split at x=0 and test both sides.",
    "answer": "diverges",
    "explanation": "Each one-sided integral diverges; no cancellation is allowed. / 两侧必须分别收敛。"
  },
  {
    "id": "6.14-01",
    "topic": "6.14",
    "label": "Choose u-Sub / 选择换元",
    "difficulty": "easy",
    "question": "Choose the first method for ∫2x/(x²+5)dx and evaluate.",
    "hint": "The denominator's derivative is present.",
    "answer": "u-substitution; ln(x²+5)+C",
    "explanation": "Let u=x²+5. / 分母导数在分子出现。"
  },
  {
    "id": "6.14-02",
    "topic": "6.14",
    "label": "Choose Parts / 选择分部积分",
    "difficulty": "easy",
    "question": "Choose the first method for ∫xeˣdx and evaluate.",
    "hint": "One product factor simplifies when differentiated.",
    "answer": "integration by parts; eˣ(x−1)+C",
    "explanation": "Choose u=x. / 多项式求导后简化。"
  },
  {
    "id": "6.14-03",
    "topic": "6.14",
    "label": "Choose Division / 选择长除",
    "difficulty": "medium",
    "question": "Choose the first method for ∫(x²+4)/(x+1)dx and evaluate.",
    "hint": "Compare polynomial degrees.",
    "answer": "long division; x²/2−x+5ln|x+1|+C",
    "explanation": "Rewrite as x−1+5/(x+1). / 分子次数更高。"
  },
  {
    "id": "6.14-04",
    "topic": "6.14",
    "label": "Choose Square / 选择配方",
    "difficulty": "medium",
    "question": "Choose the first method for ∫dx/(x²+4x+8) and evaluate.",
    "hint": "Rewrite the quadratic.",
    "answer": "complete the square; (1/2)tan⁻¹((x+2)/2)+C",
    "explanation": "x²+4x+8=(x+2)²+4. / 匹配反正切形式。"
  },
  {
    "id": "6.14-05",
    "topic": "6.14",
    "label": "Choose Fractions / 选择部分分式",
    "difficulty": "medium",
    "question": "Choose the first method for ∫(3x+1)/(x²−x−2)dx and evaluate.",
    "hint": "Factor the denominator into distinct linear factors.",
    "answer": "partial fractions; (7/3)ln|x−2|+(2/3)ln|x+1|+C",
    "explanation": "The coefficients are 7/3 and 2/3. / 因式为(x−2)(x+1)。"
  },
  {
    "id": "6.14-06",
    "topic": "6.14",
    "label": "Choose Improper Limit / 选择反常极限",
    "difficulty": "challenge",
    "question": "Evaluate and classify ∫₁^∞1/x³dx.",
    "hint": "Rewrite with an upper-bound limit.",
    "answer": "converges to 1/2",
    "explanation": "The p-integral has p=3&gt;1. / 用极限计算并说明收敛。"
  }
]);
