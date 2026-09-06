window.AP_CALCULUS_QUESTION_BANK_7 = Object.freeze([
  {
    "id": "7.1-01",
    "topic": "7.1",
    "label": "Direct Proportion / 正比建模",
    "difficulty": "easy",
    "question": "Write a differential equation: the rate of change of Y with respect to t is proportional to t².",
    "hint": "Begin with dY/dt and include k.",
    "answer": "dY/dt=kt².",
    "explanation": "Proportional means multiply by a constant k. / 正比关系要乘比例常数 k。"
  },
  {
    "id": "7.1-02",
    "topic": "7.1",
    "label": "Inverse Proportion / 反比建模",
    "difficulty": "easy",
    "question": "The rate dS/dy is proportional to √y and inversely proportional to a fixed positive parameter v. Write the model.",
    "hint": "Place the inverse factor in the denominator.",
    "answer": "dS/dy=k√y/v.",
    "explanation": "Direct factors go in the numerator; inverse factors go in the denominator. / 正比项进分子，反比项进分母。"
  },
  {
    "id": "7.1-03",
    "topic": "7.1",
    "label": "Calibrate k / 求比例常数",
    "difficulty": "medium",
    "question": "If h″(t)=k∛t and h″(8)=6, find k.",
    "hint": "Substitute t=8 and ∛8=2.",
    "answer": "k=3.",
    "explanation": "The condition gives 6=2k. / 代入给定导数值求 k。"
  },
  {
    "id": "7.1-04",
    "topic": "7.1",
    "label": "Decay Model / 衰减模型",
    "difficulty": "easy",
    "question": "A quantity B decreases at a rate proportional to the amount present. Write a model using k>0.",
    "hint": "Decreasing requires a negative derivative.",
    "answer": "dB/dt=−kB, k>0.",
    "explanation": "The explicit minus sign records decay. / 负号表示衰减。"
  },
  {
    "id": "7.1-05",
    "topic": "7.1",
    "label": "Linear vs Exponential / 线性与指数",
    "difficulty": "medium",
    "question": "Which model represents constant-rate linear growth: Y′=c or Y′=kY?",
    "hint": "Ask whether the absolute rate or relative rate is constant.",
    "answer": "Y′=c.",
    "explanation": "A constant derivative produces a linear solution. / 常数导数对应线性函数。"
  },
  {
    "id": "7.1-06",
    "topic": "7.1",
    "label": "Units of k / k 的单位",
    "difficulty": "challenge",
    "question": "Population P is measured in organisms and t in days. What are the units of k in P′=kP?",
    "hint": "Make both sides have matching units.",
    "answer": "day⁻¹.",
    "explanation": "(organisms/day)/organisms=1/day. / 等式两边量纲一致。"
  },
  {
    "id": "7.2-01",
    "topic": "7.2",
    "label": "Verify First Order / 验证一阶方程",
    "difficulty": "easy",
    "question": "Verify whether y=e^{3x} solves y′=3y.",
    "hint": "Differentiate the candidate.",
    "answer": "Yes; y′=3e^{3x}=3y.",
    "explanation": "The identity holds for every real x. / 等式在整个定义域成立。"
  },
  {
    "id": "7.2-02",
    "topic": "7.2",
    "label": "Reject a Candidate / 排除候选函数",
    "difficulty": "easy",
    "question": "Does y=x² solve y′=2y on an interval?",
    "hint": "Compare 2x with 2x².",
    "answer": "No. It would require 2x=2x² for all x, which is false.",
    "explanation": "Agreement at isolated points is insufficient. / 只在个别点成立不算函数解。"
  },
  {
    "id": "7.2-03",
    "topic": "7.2",
    "label": "Initial Condition / 初始条件",
    "difficulty": "medium",
    "question": "Find the member of y=Ce^{−x} that passes through (0,5).",
    "hint": "Substitute x=0 and y=5.",
    "answer": "y=5e^{−x}.",
    "explanation": "The initial condition selects C=5. / 初始条件确定常数。"
  },
  {
    "id": "7.2-04",
    "topic": "7.2",
    "label": "Parameter Verification / 参数验证",
    "difficulty": "challenge",
    "question": "Find k so y=ke^{−3x}+8sin(2x) solves y″+4y=26e^{−3x}.",
    "hint": "Compute y″; the sine terms cancel.",
    "answer": "k=2.",
    "explanation": "Substitution gives 13ke^{−3x}=26e^{−3x}. / 比较指数项系数。"
  },
  {
    "id": "7.2-05",
    "topic": "7.2",
    "label": "Equilibrium Solution / 平衡解",
    "difficulty": "medium",
    "question": "Find a horizontal solution of y′=(y−4)³sin(πx/2).",
    "hint": "A horizontal solution has y′=0 for all x.",
    "answer": "y=4.",
    "explanation": "The factor (y−4)³ vanishes everywhere on y=4. / 平衡解使右侧恒为零。"
  },
  {
    "id": "7.2-06",
    "topic": "7.2",
    "label": "Domain Check / 定义域检查",
    "difficulty": "medium",
    "question": "On what kinds of intervals does y=ln|x|+C solve y′=1/x?",
    "hint": "The formula and DE are undefined at x=0.",
    "answer": "Any interval contained in (−∞,0) or (0,∞).",
    "explanation": "A solution interval cannot cross x=0. / 解区间不能跨过未定义点。"
  },
  {
    "id": "7.3-01",
    "topic": "7.3",
    "label": "Local Slope / 局部斜率",
    "difficulty": "easy",
    "question": "For y′=x+y, what slope belongs at (2,−1)?",
    "hint": "Substitute the ordered pair.",
    "answer": "1.",
    "explanation": "2+(−1)=1, so the segment rises. / 代入坐标求局部斜率。"
  },
  {
    "id": "7.3-02",
    "topic": "7.3",
    "label": "Nullcline / 零斜率轨迹",
    "difficulty": "easy",
    "question": "Where are segments horizontal for y′=y−2x?",
    "hint": "Set the derivative equal to zero.",
    "answer": "Along y=2x.",
    "explanation": "Horizontal segments have slope zero. / 令导数为零。"
  },
  {
    "id": "7.3-03",
    "topic": "7.3",
    "label": "Row Pattern / 横行图案",
    "difficulty": "medium",
    "question": "A slope field has identical slopes across each horizontal row. What dependency does this suggest?",
    "hint": "Ask which coordinate remains fixed in a row.",
    "answer": "The derivative likely depends only on y: y′=g(y).",
    "explanation": "Changing x does not change the slope. / 同一 y 值斜率相同。"
  },
  {
    "id": "7.3-04",
    "topic": "7.3",
    "label": "Undefined Slope / 未定义斜率",
    "difficulty": "medium",
    "question": "For y′=x/y, where is the differential equation undefined?",
    "hint": "Inspect the denominator.",
    "answer": "Along y=0.",
    "explanation": "No finite slope is assigned where the denominator is zero. / 分母为零处斜率未定义。"
  },
  {
    "id": "7.3-05",
    "topic": "7.3",
    "label": "Tangent from DE / 由方程写切线",
    "difficulty": "medium",
    "question": "For y′=1−xy, write the tangent line to a solution through (−1,−2).",
    "hint": "First find the local slope.",
    "answer": "y+2=−(x+1).",
    "explanation": "The slope is 1−(−1)(−2)=−1. / 代点得斜率 −1。"
  },
  {
    "id": "7.3-06",
    "topic": "7.3",
    "label": "Field Fingerprint / 斜率场指纹",
    "difficulty": "challenge",
    "question": "For y′=xy, describe the slope signs in quadrants I–IV.",
    "hint": "Use the sign of the product xy.",
    "answer": "Positive, negative, positive, negative.",
    "explanation": "The axes have zero slope and the product changes sign by quadrant. / 象限符号由 xy 决定。"
  },
  {
    "id": "7.4-01",
    "topic": "7.4",
    "label": "Increasing Region / 递增区域",
    "difficulty": "easy",
    "question": "For y′=y−2x, where are solution curves increasing?",
    "hint": "Solve y−2x>0.",
    "answer": "Where y>2x.",
    "explanation": "Positive derivative means increasing along a solution. / 导数为正时解递增。"
  },
  {
    "id": "7.4-02",
    "topic": "7.4",
    "label": "Equilibrium / 平衡解",
    "difficulty": "easy",
    "question": "Find the equilibrium solutions of y′=y(2−y).",
    "hint": "Set the autonomous rate equal to zero.",
    "answer": "y=0 and y=2.",
    "explanation": "Each constant function makes y′=0. / 两个水平函数都是平衡解。"
  },
  {
    "id": "7.4-03",
    "topic": "7.4",
    "label": "Initial Direction / 初始方向",
    "difficulty": "medium",
    "question": "For y′=x/y, does the solution through (3,2) initially rise or fall?",
    "hint": "Evaluate the slope at the point.",
    "answer": "It rises; the slope is 3/2>0.",
    "explanation": "The field direction at the initial point is positive. / 初始点斜率为正。"
  },
  {
    "id": "7.4-04",
    "topic": "7.4",
    "label": "Solution Crossing / 解曲线相交",
    "difficulty": "medium",
    "question": "Under the usual local uniqueness conditions, can two distinct solution curves cross at one point?",
    "hint": "One initial point would otherwise have two solutions.",
    "answer": "No.",
    "explanation": "A locally unique IVP selects one trajectory through the point. / 局部唯一性排除相交。"
  },
  {
    "id": "7.4-05",
    "topic": "7.4",
    "label": "Concavity Along a Curve / 沿曲线看凹凸",
    "difficulty": "challenge",
    "question": "How should concavity be inferred from a slope field?",
    "hint": "Track one solution rather than a fixed row.",
    "answer": "Follow a solution curve: increasing slopes mean concave up; decreasing slopes mean concave down.",
    "explanation": "Concavity describes how slope changes along the trajectory. / 凹凸性要沿同一条解曲线观察。"
  },
  {
    "id": "7.4-06",
    "topic": "7.4",
    "label": "Autonomous Field Check / 自治场检查",
    "difficulty": "medium",
    "question": "What must a field for y′=−0.3y look like above, on, and below y=0?",
    "hint": "Use the sign of −0.3y.",
    "answer": "Negative slopes above, zero slopes on, positive slopes below.",
    "explanation": "Slopes repeat by horizontal row because the equation depends only on y. / 自治方程按横行重复。"
  },
  {
    "id": "7.5-01",
    "topic": "7.5",
    "label": "Euler Update / 欧拉更新",
    "difficulty": "easy",
    "question": "State the Euler y-update for y′=F(x,y) with step h.",
    "hint": "Use the old point.",
    "answer": "y_{n+1}=y_n+F(x_n,y_n)h.",
    "explanation": "Slope times step gives the predicted change in y. / 当前斜率乘步长得到 y 的变化。"
  },
  {
    "id": "7.5-02",
    "topic": "7.5",
    "label": "Step Size / 步长",
    "difficulty": "easy",
    "question": "From x=1 to x=3 in 8 equal Euler steps, what is h?",
    "hint": "Divide interval length by the number of steps.",
    "answer": "h=1/4.",
    "explanation": "(3−1)/8=0.25. / 区间长度除以步数。"
  },
  {
    "id": "7.5-03",
    "topic": "7.5",
    "label": "One Euler Step / 一步欧拉法",
    "difficulty": "medium",
    "question": "For y′=x+y and y(0)=1, use h=0.2 for one Euler step.",
    "hint": "The starting slope is 1.",
    "answer": "y(0.2)≈1.2.",
    "explanation": "1+(0+1)(0.2)=1.2. / 用旧点 (0,1) 的斜率。"
  },
  {
    "id": "7.5-04",
    "topic": "7.5",
    "label": "Two Euler Steps / 两步欧拉法",
    "difficulty": "medium",
    "question": "For y′=x+y, y(0)=1, and h=0.2, estimate y(0.4).",
    "hint": "After the first step, recompute the slope at (0.2,1.2).",
    "answer": "y(0.4)≈1.48.",
    "explanation": "The slopes are 1 and 1.4. / 第二步用新点重新算斜率。"
  },
  {
    "id": "7.5-05",
    "topic": "7.5",
    "label": "Backward Euler / 向后欧拉",
    "difficulty": "medium",
    "question": "What is h when moving from x=1.5 to x=1 in two equal Euler steps?",
    "hint": "The destination is to the left.",
    "answer": "h=−0.25.",
    "explanation": "(1−1.5)/2=−0.25. / 向左走步长为负。"
  },
  {
    "id": "7.5-06",
    "topic": "7.5",
    "label": "Euler Error Direction / 欧拉误差方向",
    "difficulty": "challenge",
    "question": "A solution is concave up throughout a forward Euler interval. Is the tangent-line estimate typically over or under the curve?",
    "hint": "Recall the position of tangent lines for a concave-up graph.",
    "answer": "Underestimate.",
    "explanation": "Tangents lie below a concave-up curve, provided concavity stays consistent. / 凹向上时切线通常在曲线下方。"
  },
  {
    "id": "7.6-01",
    "topic": "7.6",
    "label": "Test Separability / 判断可分离",
    "difficulty": "easy",
    "question": "Which is directly separable: y′=xy or y′=x+y?",
    "hint": "Look for an x-only factor times a y-only factor.",
    "answer": "y′=xy.",
    "explanation": "The sum x+y cannot be separated directly. / 可分离形式需要乘积结构。"
  },
  {
    "id": "7.6-02",
    "topic": "7.6",
    "label": "Exponential Family / 指数解族",
    "difficulty": "easy",
    "question": "Find the general solution of y′=2xy.",
    "hint": "Separate dy/y=2x dx.",
    "answer": "y=Ce^{x²}.",
    "explanation": "Integrating gives ln|y|=x²+C. / 积分后指数化。"
  },
  {
    "id": "7.6-03",
    "topic": "7.6",
    "label": "Implicit Family / 隐式通解",
    "difficulty": "medium",
    "question": "Find an implicit general solution of y′=3x²/y.",
    "hint": "Multiply by y dx.",
    "answer": "y²=2x³+C.",
    "explanation": "Integrate y dy=3x²dx and absorb constants. / 两边积分并合并常数。"
  },
  {
    "id": "7.6-04",
    "topic": "7.6",
    "label": "Shifted Family / 平移解族",
    "difficulty": "medium",
    "question": "Solve y′=−2x(y−3).",
    "hint": "Separate using y−3.",
    "answer": "y=3+Ce^{−x²}.",
    "explanation": "ln|y−3|=−x²+C. / 指数化后回加平衡值 3。"
  },
  {
    "id": "7.6-05",
    "topic": "7.6",
    "label": "Lost Equilibrium / 遗漏平衡解",
    "difficulty": "medium",
    "question": "When separating y′=e^x y², which solution can be lost by dividing by y²?",
    "hint": "Set the divided factor equal to zero.",
    "answer": "y=0.",
    "explanation": "The constant zero function satisfies the original equation. / 被除因子为零可能给出平衡解。"
  },
  {
    "id": "7.6-06",
    "topic": "7.6",
    "label": "Absorb Constants / 合并积分常数",
    "difficulty": "challenge",
    "question": "Why is one integration constant enough after integrating both sides of a separable equation?",
    "hint": "Subtract the two arbitrary constants.",
    "answer": "Their difference is another arbitrary constant.",
    "explanation": "C₂−C₁ may be renamed C. / 两个任意常数之差仍是任意常数。"
  },
  {
    "id": "7.7-01",
    "topic": "7.7",
    "label": "Apply Initial Condition / 代初值",
    "difficulty": "easy",
    "question": "Solve y′=y cos x with y(0)=4.",
    "hint": "Use y=Ce^{sin x}.",
    "answer": "y=4e^{sin x}.",
    "explanation": "The condition gives C=4. / 初值确定常数。"
  },
  {
    "id": "7.7-02",
    "topic": "7.7",
    "label": "Choose a Branch / 选择分支",
    "difficulty": "medium",
    "question": "If y²=4x³+4 and y(0)=−2, which explicit branch is required?",
    "hint": "Match the sign at x=0.",
    "answer": "y=−2√(x³+1).",
    "explanation": "The negative initial value selects the negative branch. / 负初值决定负分支。"
  },
  {
    "id": "7.7-03",
    "topic": "7.7",
    "label": "Shifted Particular Solution / 平移特解",
    "difficulty": "medium",
    "question": "Solve y′=(1/5)(8−y) with y(0)=6.",
    "hint": "Use the family y=8+Ce^{−x/5}.",
    "answer": "y=8−2e^{−x/5}.",
    "explanation": "The condition gives C=−2. / 特解从 6 向平衡值 8 靠近。"
  },
  {
    "id": "7.7-04",
    "topic": "7.7",
    "label": "Maximal Interval / 最大解区间",
    "difficulty": "challenge",
    "question": "For y=1/(1−x²/2) with initial point x=0, give the maximal interval.",
    "hint": "Find denominator zeros and choose the connected interval containing 0.",
    "answer": "(−√2,√2).",
    "explanation": "The solution cannot cross either singularity. / 解不能跨过分母为零的点。"
  },
  {
    "id": "7.7-05",
    "topic": "7.7",
    "label": "Verify Particular Solution / 验证特解",
    "difficulty": "medium",
    "question": "Verify y=3+e^{−2x} for y′=6−2y and y(0)=4.",
    "hint": "Check both the DE and initial value.",
    "answer": "y′=−2e^{−2x}=6−2(3+e^{−2x}), and y(0)=4.",
    "explanation": "Both requirements hold. / 方程与初值均满足。"
  },
  {
    "id": "7.7-06",
    "topic": "7.7",
    "label": "Exact vs Tangent / 精确解与切线",
    "difficulty": "challenge",
    "question": "For y′=6−2y and y(0)=4, write the tangent line at x=0.",
    "hint": "Compute the initial slope.",
    "answer": "L(x)=4−2x.",
    "explanation": "The initial slope is 6−2(4)=−2. / 用初始点斜率写切线。"
  },
  {
    "id": "7.8-01",
    "topic": "7.8",
    "label": "General Exponential Model / 指数通解",
    "difficulty": "easy",
    "question": "Solve Y′=kY.",
    "hint": "Separate variables and retain the zero solution.",
    "answer": "Y=Ce^{kt}.",
    "explanation": "The family has constant relative rate k. / 相对变化率恒为 k。"
  },
  {
    "id": "7.8-02",
    "topic": "7.8",
    "label": "Two-Point Parameter / 两点求参数",
    "difficulty": "medium",
    "question": "If Y(0)=10 and Y(4)=30 in an exponential model, find k.",
    "hint": "Use 30=10e^{4k}.",
    "answer": "k=ln3/4.",
    "explanation": "Take the logarithm of the ratio 3. / 对数量比取对数。"
  },
  {
    "id": "7.8-03",
    "topic": "7.8",
    "label": "Doubling Time / 倍增时间",
    "difficulty": "easy",
    "question": "A population doubles every 7 years. Find k in Y′=kY.",
    "hint": "Set e^{7k}=2.",
    "answer": "k=ln2/7 year⁻¹.",
    "explanation": "The exponent kt is dimensionless. / k 的单位是 year⁻¹。"
  },
  {
    "id": "7.8-04",
    "topic": "7.8",
    "label": "Half-Life / 半衰期",
    "difficulty": "medium",
    "question": "A decay model has k=−0.3 hour⁻¹. Find its half-life.",
    "hint": "Use T_h=ln2/|k|.",
    "answer": "T_h=ln2/0.3 hours.",
    "explanation": "The half-life is positive although k is negative. / 衰减参数为负，半衰期为正。"
  },
  {
    "id": "7.8-05",
    "topic": "7.8",
    "label": "Repeated Factor / 重复倍数",
    "difficulty": "medium",
    "question": "An exponential quantity is 200 now and 300 after 5 days. What will it be after 10 days?",
    "hint": "Equal time intervals have the same multiplicative factor.",
    "answer": "450.",
    "explanation": "Each 5-day interval multiplies by 1.5. / 等长时间段乘相同倍数。"
  },
  {
    "id": "7.8-06",
    "topic": "7.8",
    "label": "Initial-Time Convention / 初始时刻约定",
    "difficulty": "challenge",
    "question": "In Y=Ce^{kt}, when does C equal a reported value Y(t₀)?",
    "hint": "Evaluate the formula at t₀.",
    "answer": "Only when t₀=0 (or after shifting time so t₀ becomes 0).",
    "explanation": "In general use Y(t)=Y(t₀)e^{k(t−t₀)}. / 任意初始时刻应使用时间差。"
  },
  {
    "id": "7.9-01",
    "topic": "7.9",
    "label": "Carrying Capacity / 环境容纳量",
    "difficulty": "easy",
    "question": "For P′=0.4P(1−P/500), identify the carrying capacity.",
    "hint": "Read K from 1−P/K.",
    "answer": "K=500.",
    "explanation": "The positive equilibrium is the carrying capacity. / 正平衡值为容纳量。"
  },
  {
    "id": "7.9-02",
    "topic": "7.9",
    "label": "Logistic Equilibria / 逻辑斯蒂平衡值",
    "difficulty": "easy",
    "question": "Find the equilibria of P′=kP(1−P/K).",
    "hint": "Set the rate equal to zero.",
    "answer": "P=0 and P=K.",
    "explanation": "Both factors can make the rate zero. / 两个因子分别给出平衡值。"
  },
  {
    "id": "7.9-03",
    "topic": "7.9",
    "label": "Inflection Level / 拐点高度",
    "difficulty": "medium",
    "question": "For a standard logistic trajectory that passes through it, at what population level does the inflection occur?",
    "hint": "Maximize the rate as a function of P.",
    "answer": "P=K/2.",
    "explanation": "The rate changes from increasing to decreasing at half capacity. / 容纳量一半处变化率关于 P 最大。"
  },
  {
    "id": "7.9-04",
    "topic": "7.9",
    "label": "Maximum Logistic Rate / 最大逻辑增长率",
    "difficulty": "medium",
    "question": "For P′=0.2P(1−P/400), find the maximum rate as a function of P.",
    "hint": "Use kK/4.",
    "answer": "20 units per time, at P=200.",
    "explanation": "0.2(400)/4=20. / 在 K/2 处代入。"
  },
  {
    "id": "7.9-05",
    "topic": "7.9",
    "label": "Calibrate Logistic k / 校准逻辑参数",
    "difficulty": "challenge",
    "question": "For K=1000, the rate is 120 when P=400. Find k in P′=kP(1−P/K).",
    "hint": "Substitute P and P′ at the same time.",
    "answer": "k=1/2 time⁻¹.",
    "explanation": "120=k(400)(0.6)=240k. / 同时刻的数量与速率确定 k。"
  },
  {
    "id": "7.9-06",
    "topic": "7.9",
    "label": "Future Inflection Caveat / 未来拐点条件",
    "difficulty": "challenge",
    "question": "A logistic model has K=600 and P(0)=450. Will the trajectory reach its inflection level for t≥0?",
    "hint": "Compare P(0) with K/2 and use the direction of growth.",
    "answer": "No. K/2=300, and the solution increases from 450 toward 600.",
    "explanation": "K/2 maximizes rate as a function of P, but this forward trajectory never visits it. / 初值已超过 K/2，未来不会经过拐点高度。"
  }
]);
