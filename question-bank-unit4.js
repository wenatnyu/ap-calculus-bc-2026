window.AP_CALCULUS_QUESTION_BANK_4 = Object.freeze([
  {
    "id": "4.1-01",
    "topic": "4.1",
    "label": "Derivative Units / 导数单位",
    "difficulty": "easy",
    "question": "H(t) is measured in liters and t in minutes. What are the units of H′(t)?",
    "hint": "输出单位除以输入单位。",
    "answer": "liters/minute / 升/分钟",
    "explanation": "A derivative divides the output change by the input change. / 导数单位为输出单位除以输入单位。"
  },
  {
    "id": "4.1-02",
    "topic": "4.1",
    "label": "Negative Rate / 负变化率",
    "difficulty": "easy",
    "question": "H(t) is tank volume in gallons. Interpret H′(5)=−3, where t is minutes.",
    "hint": "负号应进入动词，不表示有负的水量。",
    "answer": "At minute 5, the amount of water is decreasing at 3 gallons per minute. / 第5分钟时，水量每分钟减少3加仑。",
    "explanation": "State the instant, changing quantity, direction, and units. / 解释需包含时刻、对象、方向和单位。"
  },
  {
    "id": "4.1-03",
    "topic": "4.1",
    "label": "Rate of a Rate / 速率的变化率",
    "difficulty": "medium",
    "question": "R(t) is measured in customers/hour and t in hours. What are the units of R′(t)?",
    "hint": "R 本身已经是变化率。",
    "answer": "customers/hour² / 顾客/小时²",
    "explanation": "Differentiating with respect to hours introduces a second per-hour factor. / 再对小时求导会多一个每小时。"
  },
  {
    "id": "4.1-04",
    "topic": "4.1",
    "label": "Derivative Sign / 导数符号",
    "difficulty": "easy",
    "question": "What does f′(7)>0 say about f at x=7?",
    "hint": "只描述该瞬间的一阶变化方向。",
    "answer": "f is increasing at x=7. / f 在 x=7 处递增。",
    "explanation": "A positive derivative means the output rises as the input increases near that point. / 正导数表示局部递增。"
  },
  {
    "id": "4.1-05",
    "topic": "4.1",
    "label": "Second-Derivative Context / 二阶导数情境",
    "difficulty": "medium",
    "question": "W(t) is a production rate in kg/day, and t is measured in days. Interpret W′(4)=−2.",
    "hint": "主语应是生产速率。",
    "answer": "On day 4, the production rate is decreasing by 2 kg/day each day. / 第4天，生产速率每天减少2千克/天。",
    "explanation": "W′ has units kg/day² and describes how the rate W changes. / W′ 描述速率本身的变化。"
  },
  {
    "id": "4.1-06",
    "topic": "4.1",
    "label": "Complete Interpretation / 完整解释",
    "difficulty": "medium",
    "question": "Improve the statement “P′(8)=15 means the population changes by 15.” Assume P is people and t is years.",
    "hint": "补上时刻、方向与单位。",
    "answer": "At year 8, the population is increasing at 15 people per year. / 第8年时，人口每年增加15人。",
    "explanation": "The number alone is incomplete without an instant, direction, and units. / 只有数字不构成完整情境解释。"
  },
  {
    "id": "4.2-01",
    "topic": "4.2",
    "label": "Motion Derivatives / 运动导数",
    "difficulty": "easy",
    "question": "For s(t)=t³−3t², find v(t) and a(t).",
    "hint": "位置连续求两次导。",
    "answer": "v(t)=3t²−6t; a(t)=6t−6.",
    "explanation": "Velocity is s′ and acceleration is s″. / 速度是一阶导数，加速度是二阶导数。"
  },
  {
    "id": "4.2-02",
    "topic": "4.2",
    "label": "Velocity and Speed / 速度与速率",
    "difficulty": "easy",
    "question": "If v=−7 m/s, state the direction and speed.",
    "hint": "speed=|v|。",
    "answer": "Moving left; speed 7 m/s. / 向左运动；速率7米/秒。",
    "explanation": "The sign of velocity gives direction, while speed is its magnitude. / 速度符号给方向，速率取绝对值。"
  },
  {
    "id": "4.2-03",
    "topic": "4.2",
    "label": "Speeding Up / 加速判断",
    "difficulty": "medium",
    "question": "At an instant v=−2 and a=−5. Is the particle speeding up or slowing down?",
    "hint": "比较 v 与 a 的符号。",
    "answer": "Speeding up. / 正在加速。",
    "explanation": "Velocity and acceleration have the same sign, so |v| is increasing. / 同号表示速率增加。"
  },
  {
    "id": "4.2-04",
    "topic": "4.2",
    "label": "Displacement and Average Velocity / 位移与平均速度",
    "difficulty": "easy",
    "question": "If position s is measured in meters, t is measured in seconds, s(0)=2, and s(4)=10, find displacement and average velocity on [0,4].",
    "hint": "位移除以总时间得到平均速度。",
    "answer": "Displacement 8 m; average velocity 2 m/s. / 位移8米；平均速度2米/秒。",
    "explanation": "s(4)−s(0)=8, and 8/(4−0)=2. / 使用端点差。"
  },
  {
    "id": "4.2-05",
    "topic": "4.2",
    "label": "At Rest / 静止时刻",
    "difficulty": "medium",
    "question": "For s(t)=t³−4t²+3 with t>0, when is the particle at rest?",
    "hint": "令 v(t)=0，并使用 t>0。",
    "answer": "t=8/3. / t=8/3。",
    "explanation": "v(t)=3t²−8t=t(3t−8); the positive solution is 8/3. / 正时间解为8/3。"
  },
  {
    "id": "4.2-06",
    "topic": "4.2",
    "label": "Acceleration from a Table / 表格估计加速度",
    "difficulty": "medium",
    "question": "A velocity table gives v(8)=7 and v(12)=5 m/min, where t is measured in minutes. Estimate a(10).",
    "hint": "用10两侧的数据估计 v′(10)。",
    "answer": "−0.5 m/min².",
    "explanation": "[v(12)−v(8)]/(12−8)=(5−7)/4=−0.5. / 对速度作中心差分。"
  },
  {
    "id": "4.3-01",
    "topic": "4.3",
    "label": "Central Difference / 中心差分",
    "difficulty": "easy",
    "question": "P(10)=120 and P(20)=150 people. Estimate P′(15).",
    "hint": "15是10和20的中点。",
    "answer": "3 people/year, if t is years. / 若t单位为年，则为3人/年。",
    "explanation": "(150−120)/(20−10)=3. / 使用中心区间斜率。"
  },
  {
    "id": "4.3-02",
    "topic": "4.3",
    "label": "Exact Applied Rate / 解析模型变化率",
    "difficulty": "medium",
    "question": "E(t)=0.3t⁴−14t³+110t² counts shoppers. Find E′(5).",
    "hint": "逐项求导后代5。",
    "answer": "200 shoppers/hour, if t is hours. / 200位顾客/小时。",
    "explanation": "E′=1.2t³−42t²+220t, and E′(5)=200. / 精确模型可直接求导。"
  },
  {
    "id": "4.3-03",
    "topic": "4.3",
    "label": "Units of a Second Rate / 二阶变化率单位",
    "difficulty": "easy",
    "question": "R(t) is measured in grams/minute, and t is measured in minutes. What are the units of R′(t)?",
    "hint": "R已是每分钟的量。",
    "answer": "grams/minute² / 克/分钟²",
    "explanation": "R′ measures the change per minute of a grams-per-minute rate. / 速率再对时间求导。"
  },
  {
    "id": "4.3-04",
    "topic": "4.3",
    "label": "Net Rate Decreasing / 净变化率下降",
    "difficulty": "hard",
    "question": "People enter at f(t) and exit at g(t), both in people/hour. What condition says the net population rate is decreasing?",
    "hint": "先写 N′=f−g，再求导。",
    "answer": "f′(t)−g′(t)<0.",
    "explanation": "N′=f−g, so N″=f′−g′; decreasing net rate means N″<0. / 对净变化率再求导。"
  },
  {
    "id": "4.3-05",
    "topic": "4.3",
    "label": "Trig Applied Rate / 三角模型变化率",
    "difficulty": "medium",
    "question": "D(t)=13−2.7cos(πt/4). Find D′(3).",
    "hint": "cos内层导数为π/4。",
    "answer": "2.7π√2/8 ≈ 1.499.",
    "explanation": "D′=(2.7π/4)sin(πt/4); use sin(3π/4)=√2/2. / 链式法则后代入。"
  },
  {
    "id": "4.3-06",
    "topic": "4.3",
    "label": "Exponential Applied Rate / 指数模型变化率",
    "difficulty": "medium",
    "question": "B(t)=50(1−e^(−0.7t²)). Find B′(2).",
    "hint": "对指数使用链式法则。",
    "answer": "140e^(−2.8) ≈ 8.513.",
    "explanation": "B′=70te^(−0.7t²), so B′(2)=140e^(−2.8). / 注意两个负号相消。"
  },
  {
    "id": "4.4-01",
    "topic": "4.4",
    "label": "Cube Rate Equation / 立方体变化率方程",
    "difficulty": "easy",
    "question": "Differentiate V=s³ with respect to time.",
    "hint": "s是时间的函数。",
    "answer": "dV/dt=3s²(ds/dt).",
    "explanation": "The chain rule attaches ds/dt to the derivative of s³. / 链式法则带出ds/dt。"
  },
  {
    "id": "4.4-02",
    "topic": "4.4",
    "label": "Rectangle Rate Equation / 长方形变化率方程",
    "difficulty": "easy",
    "question": "Differentiate A=LW when both L and W change with time.",
    "hint": "使用乘积法则。",
    "answer": "dA/dt=L(dW/dt)+W(dL/dt).",
    "explanation": "Each changing factor contributes one product-rule term. / 两个变化因子各贡献一项。"
  },
  {
    "id": "4.4-03",
    "topic": "4.4",
    "label": "Sphere Surface Rate / 球表面积变化率",
    "difficulty": "medium",
    "question": "Differentiate A=4πr² with respect to time.",
    "hint": "4π为常数。",
    "answer": "dA/dt=8πr(dr/dt).",
    "explanation": "Differentiate r² and multiply by dr/dt. / 对r²使用链式法则。"
  },
  {
    "id": "4.4-04",
    "topic": "4.4",
    "label": "Constant Radius / 固定半径",
    "difficulty": "medium",
    "question": "A cylinder has V=πr²h and constant radius r. Write dV/dt.",
    "hint": "constant radius means dr/dt=0。",
    "answer": "dV/dt=πr²(dh/dt).",
    "explanation": "Only height changes, so the cross-sectional area πr² is constant. / 只有高度变化。"
  },
  {
    "id": "4.4-05",
    "topic": "4.4",
    "label": "Constant Ladder / 固定长度梯子",
    "difficulty": "medium",
    "question": "A ladder has x²+y²=L² with constant L. Write the rate equation.",
    "hint": "dL/dt=0。",
    "answer": "2x(dx/dt)+2y(dy/dt)=0.",
    "explanation": "Differentiate all variables, then use the fact that L is constant. / 先完整求导，再令L′=0。"
  },
  {
    "id": "4.4-06",
    "topic": "4.4",
    "label": "Reciprocal Relationship / 倒数关系",
    "difficulty": "hard",
    "question": "If L=k/M and k is constant, find dL/dt.",
    "hint": "写成L=kM^(−1)。",
    "answer": "dL/dt=−(k/M²)(dM/dt).",
    "explanation": "The power and chain rules give −kM^(−2)M′. / 幂法则与链式法则同时使用。"
  },
  {
    "id": "4.5-01",
    "topic": "4.5",
    "label": "Rectangle Area Rate / 长方形面积变化率",
    "difficulty": "easy",
    "question": "W′=2 cm/s, L′=3 cm/s, W=4 cm, and L=5 cm. Find A′.",
    "hint": "A′=L′W+LW′。",
    "answer": "22 cm²/s.",
    "explanation": "A′=(3)(4)+(5)(2)=22. / 代入乘积法则的两项。"
  },
  {
    "id": "4.5-02",
    "topic": "4.5",
    "label": "Police-Car Related Rate / 警车追车",
    "difficulty": "hard",
    "question": "At a right-angle intersection x=0.8 mi, y=0.6 mi, z=1 mi, y′=−60 mph, and z′=20 mph. Find x′.",
    "hint": "Use xx′+yy′=zz′。",
    "answer": "70 mph.",
    "explanation": "0.8x′+0.6(−60)=1(20), so x′=70. / 注意警车到路口距离在减小。"
  },
  {
    "id": "4.5-03",
    "topic": "4.5",
    "label": "Melting Cube / 融化冰块",
    "difficulty": "medium",
    "question": "A cube melts at dV/dt=−5 cm³/hour. Find ds/dt when s=3 cm.",
    "hint": "V=s³。",
    "answer": "−5/27 cm/hour.",
    "explanation": "−5=3(3²)s′=27s′. / 融化对应负变化率。"
  },
  {
    "id": "4.5-04",
    "topic": "4.5",
    "label": "Balloon Area Rate / 气球表面积变化率",
    "difficulty": "hard",
    "question": "A sphere has dV/dt=60π in³/s. Find dA/dt when r=4 in.",
    "hint": "先由体积求r′，再求面积变化率。",
    "answer": "30π in²/s.",
    "explanation": "r′=15/16, then A′=8π(4)(15/16)=30π. / 分两步连接两个变化率。"
  },
  {
    "id": "4.5-05",
    "topic": "4.5",
    "label": "Sliding Ladder / 滑动梯子",
    "difficulty": "medium",
    "question": "A 17-ft ladder has y=8 ft, x=15 ft, and x′=3 ft/s. Find y′.",
    "hint": "xx′+yy′=0。",
    "answer": "−45/8 ft/s.",
    "explanation": "15(3)+8y′=0, so y′=−45/8. / 负号表示梯顶向下。"
  },
  {
    "id": "4.5-06",
    "topic": "4.5",
    "label": "Boat Approaching Dock / 船靠近码头",
    "difficulty": "hard",
    "question": "A pulley is 7 ft above a boat. When 25 ft of rope is out, it is hauled in at 4 ft/s. Find the boat's approaching speed.",
    "hint": "水平距离为24，绳长变化率为−4。",
    "answer": "25/6 ft/s toward the dock. / 以25/6英尺/秒靠近码头。",
    "explanation": "x′=rr′/x=25(−4)/24=−25/6, so the approaching speed is 25/6. / 报告速率时取正的大小。"
  },
  {
    "id": "4.6-01",
    "topic": "4.6",
    "label": "Linearization Formula / 线性化公式",
    "difficulty": "easy",
    "question": "Write the linearization L(x) of f at x=a.",
    "hint": "函数值加斜率乘输入改变量。",
    "answer": "L(x)=f(a)+f′(a)(x−a).",
    "explanation": "This is the tangent-line equation at x=a. / 线性化就是基点处的切线。"
  },
  {
    "id": "4.6-02",
    "topic": "4.6",
    "label": "Given-Data Estimate / 已知数据近似",
    "difficulty": "easy",
    "question": "If f(4)=5 and f′(4)=3, estimate f(3.8).",
    "hint": "x−a=−0.2。",
    "answer": "4.4.",
    "explanation": "L(3.8)=5+3(3.8−4)=4.4. / 注意输入改变量为负。"
  },
  {
    "id": "4.6-03",
    "topic": "4.6",
    "label": "Concavity and Error / 凹向性与误差",
    "difficulty": "easy",
    "question": "If f is concave down near a, is its tangent-line approximation an overestimate or underestimate?",
    "hint": "凹向下图像位于切线下方。",
    "answer": "Overestimate. / 高估。",
    "explanation": "The tangent line lies above a concave-down graph. / 凹向下时切线在曲线上方。"
  },
  {
    "id": "4.6-04",
    "topic": "4.6",
    "label": "Square-Root Approximation / 根式近似",
    "difficulty": "medium",
    "question": "Use linearization at a=4 to estimate √4.1 and classify the estimate.",
    "hint": "f′(4)=1/4，√x凹向下。",
    "answer": "2.025, an overestimate. / 2.025，为高估。",
    "explanation": "2+(1/4)(0.1)=2.025; concave down puts the tangent above the graph. / 用凹向性判断误差方向。"
  },
  {
    "id": "4.6-05",
    "topic": "4.6",
    "label": "ODE Linearization / 微分方程线性化",
    "difficulty": "medium",
    "question": "dy/dx=e^y(2x²−5x), f(2)=0. Use the tangent line to estimate f(2.2).",
    "hint": "先从微分方程求f′(2)。",
    "answer": "−0.4.",
    "explanation": "f′(2)=−2, so L(x)=−2(x−2) and L(2.2)=−0.4. / 无需显式解出f。"
  },
  {
    "id": "4.6-06",
    "topic": "4.6",
    "label": "Compute Approximation Error / 计算近似误差",
    "difficulty": "hard",
    "question": "For f(x)=3x²−4x+2, the tangent line at x=1 is used. Among 1.3, 1.4, 1.5, 1.6, which is the smallest x with error greater than 0.5?",
    "hint": "先求L(x)，再算f(x)−L(x)。",
    "answer": "1.5.",
    "explanation": "L=2x−1 and error=3(x−1)²; errors at 1.4 and 1.5 are 0.48 and 0.75. / 因此最小列出值为1.5。"
  },
  {
    "id": "4.7-01",
    "topic": "4.7",
    "label": "Direct Substitution First / 先直接代入",
    "difficulty": "easy",
    "question": "Evaluate lim as x→3 of (2x−5)/x.",
    "hint": "分母在3处不为0。",
    "answer": "1/3.",
    "explanation": "Direct substitution gives (6−5)/3=1/3; L’Hôpital is unnecessary. / 直接代入即可。"
  },
  {
    "id": "4.7-02",
    "topic": "4.7",
    "label": "One L’Hôpital Step / 一次洛必达",
    "difficulty": "easy",
    "question": "Evaluate lim as x→0 of sin(6x)/x.",
    "hint": "代入为0/0。",
    "answer": "6.",
    "explanation": "L’Hôpital gives lim 6cos(6x)/1=6. / 分子分母分别求导。"
  },
  {
    "id": "4.7-03",
    "topic": "4.7",
    "label": "Repeated L’Hôpital / 重复使用洛必达",
    "difficulty": "medium",
    "question": "Evaluate lim as x→0 of (1−cos x)/x².",
    "hint": "第一次求导后仍为0/0。",
    "answer": "1/2.",
    "explanation": "Differentiate twice: sinx/(2x), then cosx/2→1/2. / 每次使用前重新检查不定式。"
  },
  {
    "id": "4.7-04",
    "topic": "4.7",
    "label": "Not the Quotient Rule / 不是商法则",
    "difficulty": "medium",
    "question": "Differentiate y=sin(6x)/x. Do not use L’Hôpital's Rule.",
    "hint": "这是求导题，使用商法则。",
    "answer": "y′=[6x cos(6x)−sin(6x)]/x².",
    "explanation": "L’Hôpital applies to certain limits, not to ordinary differentiation. / 洛必达法则不是求商函数导数的公式。"
  },
  {
    "id": "4.7-05",
    "topic": "4.7",
    "label": "Log Ratio at Infinity / 无穷处对数比",
    "difficulty": "hard",
    "question": "Evaluate lim as x→∞ of ln(x²)/ln((x+4)³).",
    "hint": "可化为2lnx与3ln(x+4)，或用洛必达。",
    "answer": "2/3.",
    "explanation": "After differentiation the ratio is [2/x]/[3/(x+4)]→2/3. / 化简后取极限。"
  },
  {
    "id": "4.7-06",
    "topic": "4.7",
    "label": "Infer Missing Function Data / 反推函数数据",
    "difficulty": "hard",
    "question": "Assume f is twice differentiable near x=3. If h(x)=(x²−9)/[1−(f(x))³] and lim as x→3 h(x)=5 is evaluated by L’Hôpital, find f(3) and f′(3).",
    "hint": "先用0/0条件求f(3)，再对分子分母求导。",
    "answer": "f(3)=1 and f′(3)=−2/5.",
    "explanation": "The denominator must approach 0, so f(3)=1; then 5=6/[−3f(3)²f′(3)]=−2/f′(3). / 使用不定式条件与导数比。"
  }
]);
