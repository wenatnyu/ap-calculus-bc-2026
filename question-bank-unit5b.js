window.AP_CALCULUS_QUESTION_BANK_5B = Object.freeze([
  {
    "id": "5.8-01",
    "topic": "5.8",
    "label": "Slope to Height / 斜率变高度",
    "difficulty": "easy",
    "question": "If every tangent slope of f is positive on (−3,2), where does the graph of f′ lie on that interval?",
    "hint": "The value of f′ equals the tangent slope of f.",
    "answer": "Above the x-axis: f′(x)>0 on (−3,2).",
    "explanation": "The y-coordinate of f′ records the slope of f. / 切线斜率为正时，导函数图像在横轴上方。"
  },
  {
    "id": "5.8-02",
    "topic": "5.8",
    "label": "Extrema and Zeros / 极值与零点",
    "difficulty": "easy",
    "question": "A smooth function changes from increasing to decreasing at x=4. What happens to f′ there?",
    "hint": "Track the sign of f′ on each side.",
    "answer": "f′ changes from positive to negative and f′(4)=0, so f has a local maximum.",
    "explanation": "A smooth turning point becomes a zero of the derivative. / 平滑极大点对应导数由正变负并等于零。"
  },
  {
    "id": "5.8-03",
    "topic": "5.8",
    "label": "Concavity and f′ / 凹凸性与一阶导",
    "difficulty": "medium",
    "question": "If f is concave up on an interval, what must be true about f′ there?",
    "hint": "Ask how the tangent slopes change.",
    "answer": "f′ is increasing on that interval.",
    "explanation": "Concave up means slopes increase from left to right. / 凹向上表示斜率递增。"
  },
  {
    "id": "5.8-04",
    "topic": "5.8",
    "label": "Antiderivative Family / 原函数族",
    "difficulty": "medium",
    "question": "Give one possible function f if f′(x)=x²−4.",
    "hint": "Reverse the power rule and include a constant if desired.",
    "answer": "f(x)=x³/3−4x+C, for any constant C.",
    "explanation": "All vertical shifts have the same derivative. / 相差常数的函数导数相同。"
  },
  {
    "id": "5.8-05",
    "topic": "5.8",
    "label": "Derivative Sign Chart / 导数符号表",
    "difficulty": "medium",
    "question": "If f′(x)=(x+2)(x−1), classify the critical numbers of f by location.",
    "hint": "Test the sign of f′ on the three intervals.",
    "answer": "Local maximum at x=−2; local minimum at x=1.",
    "explanation": "The sign pattern is +, −, +. / 导数先由正变负，再由负变正。"
  },
  {
    "id": "5.8-06",
    "topic": "5.8",
    "label": "Nondifferentiable Point / 不可导点",
    "difficulty": "challenge",
    "question": "The graph of f has a sharp corner at x=1. How should the graph of f′ be shown there?",
    "hint": "Compare the one-sided slopes.",
    "answer": "f′(1) is undefined, so the derivative graph should have a break or open point at x=1.",
    "explanation": "A corner has unequal one-sided derivatives. / 尖点处左右导数不相等。"
  },
  {
    "id": "5.9-01",
    "topic": "5.9",
    "label": "Intersect Conditions / 条件取交集",
    "difficulty": "easy",
    "question": "Translate “f is decreasing and concave up” into derivative inequalities.",
    "hint": "Decreasing uses f′; concavity uses f′′.",
    "answer": "f′(x)<0 and f′′(x)>0.",
    "explanation": "Both inequalities must hold on the same interval. / 两个条件必须同时成立。"
  },
  {
    "id": "5.9-02",
    "topic": "5.9",
    "label": "Speeding Up / 加速",
    "difficulty": "easy",
    "question": "A particle has v(t)<0 and a(t)<0. Is it speeding up or slowing down?",
    "hint": "Compare the signs.",
    "answer": "Speeding up.",
    "explanation": "Velocity and acceleration have the same sign, so |v| increases. / 同号时速率增大。"
  },
  {
    "id": "5.9-03",
    "topic": "5.9",
    "label": "Motion Sign Chart / 运动符号表",
    "difficulty": "medium",
    "question": "For v(t)=(t−2)(t−5) and a(t)=2t−7, t>0, where is the particle speeding up?",
    "hint": "Use breakpoints 2, 7/2, and 5.",
    "answer": "(2,7/2)∪(5,∞).",
    "explanation": "v and a are both negative on (2,7/2) and both positive on (5,∞). / 同号区间即答案。"
  },
  {
    "id": "5.9-04",
    "topic": "5.9",
    "label": "Table Concavity / 表格判断凹凸",
    "difficulty": "medium",
    "question": "At equally spaced x-values 0,1,2,3, f has values 0,1,3,6. What behavior is supported?",
    "hint": "Compute successive differences.",
    "answer": "Increasing and concave up.",
    "explanation": "The values rise and the differences 1,2,3 increase. / 函数值递增且平均斜率递增。"
  },
  {
    "id": "5.9-05",
    "topic": "5.9",
    "label": "Combined Polynomial / 多项式综合条件",
    "difficulty": "medium",
    "question": "For f(x)=x³−3x², where is f decreasing and concave up?",
    "hint": "Intersect f′<0 with f′′>0.",
    "answer": "(1,2).",
    "explanation": "f′=3x(x−2)<0 on (0,2), while f′′=6(x−1)>0 on (1,∞). / 取交集。"
  },
  {
    "id": "5.9-06",
    "topic": "5.9",
    "label": "Increasing Most Rapidly / 增长最快",
    "difficulty": "challenge",
    "question": "What quantity should be maximized when a problem asks where f is increasing most rapidly?",
    "hint": "The rate of increase is a derivative.",
    "answer": "Maximize f′, checking critical points of f′ and endpoints.",
    "explanation": "Candidates often occur where f′′=0 or is undefined, but verification is still required. / 求一阶导数的最大值。"
  },
  {
    "id": "5.10-01",
    "topic": "5.10",
    "label": "Objective and Constraint / 目标与约束",
    "difficulty": "easy",
    "question": "Two nonnegative numbers sum to 30. Write their product as a one-variable objective.",
    "hint": "Let the first number be x.",
    "answer": "P(x)=x(30−x), 0≤x≤30.",
    "explanation": "The sum is the constraint and the product is the objective. / 用和约束消去第二个数。"
  },
  {
    "id": "5.10-02",
    "topic": "5.10",
    "label": "Open-Top Box / 无盖盒模型",
    "difficulty": "easy",
    "question": "A 10-by-18 sheet has x-inch squares cut from each corner. Write the box-volume model.",
    "hint": "The three dimensions are x, 10−2x, and 18−2x.",
    "answer": "V(x)=x(10−2x)(18−2x), 0<x<5.",
    "explanation": "Both ends of each base dimension lose x. / 两个方向都减去 2x。"
  },
  {
    "id": "5.10-03",
    "topic": "5.10",
    "label": "Distance Squared / 距离平方",
    "difficulty": "medium",
    "question": "Write an objective for the point (x,x²) on y=x² that is closest to (2,1/2).",
    "hint": "Minimize squared distance to avoid a radical.",
    "answer": "D²(x)=(x−2)²+(x²−1/2)².",
    "explanation": "Minimizing D and D² gives the same point. / 平方根单调递增。"
  },
  {
    "id": "5.10-04",
    "topic": "5.10",
    "label": "Three-Sided Fence / 三边围栏",
    "difficulty": "medium",
    "question": "A pen beside a wall uses 300 ft of fence on three sides. If x is each perpendicular side, write the area model.",
    "hint": "The side parallel to the wall is 300−2x.",
    "answer": "A(x)=x(300−2x), 0<x<150.",
    "explanation": "The wall replaces the fourth side. / 约束为 2x+y=300。"
  },
  {
    "id": "5.10-05",
    "topic": "5.10",
    "label": "Rectangle under a Parabola / 抛物线下矩形",
    "difficulty": "medium",
    "question": "A symmetric rectangle has upper corners on y=6−x². Write its area model.",
    "hint": "The full width is 2x.",
    "answer": "A(x)=2x(6−x²)=12x−2x³, 0≤x≤√6.",
    "explanation": "The upper corners are (±x,6−x²). / 宽为 2x。"
  },
  {
    "id": "5.10-06",
    "topic": "5.10",
    "label": "Closed Cylinder Model / 闭圆柱模型",
    "difficulty": "challenge",
    "question": "A closed cylinder has volume 512. Express its surface area as a function of radius r.",
    "hint": "Use h=512/(πr²).",
    "answer": "A(r)=2πr²+1024/r, r>0.",
    "explanation": "Substitute the volume constraint into A=2πr²+2πrh. / 用体积约束消去 h。"
  },
  {
    "id": "5.11-01",
    "topic": "5.11",
    "label": "Fixed Sum Optimization / 定和最优化",
    "difficulty": "easy",
    "question": "Find two positive numbers with sum 20 and greatest product.",
    "hint": "Differentiate P=x(20−x).",
    "answer": "10 and 10.",
    "explanation": "P′=20−2x=0 at x=10 and P′′=−2<0. / 二阶导数为负，得到最大值。"
  },
  {
    "id": "5.11-02",
    "topic": "5.11",
    "label": "Feasible Candidate / 可行候选值",
    "difficulty": "easy",
    "question": "For a 16-by-16 open-top box, V′(x)=0 gives x=8/3 and x=8. Why must x=8 be rejected?",
    "hint": "Find the geometric domain.",
    "answer": "The cut size must satisfy 0<x<8; x=8 collapses the base because 16−2x=0.",
    "explanation": "Algebraic critical numbers outside the feasible domain are not physical solutions. / 超出可行域且盒底退化。"
  },
  {
    "id": "5.11-03",
    "topic": "5.11",
    "label": "Three-Sided Pen Solution / 三边围栏求解",
    "difficulty": "medium",
    "question": "A three-sided pen beside a wall uses 120 m of fence. Find the dimensions of maximum area.",
    "hint": "Use A=x(120−2x).",
    "answer": "30 m by 60 m.",
    "explanation": "A′=120−4x=0 gives x=30 and the remaining side is 60. / 两条垂直边各 30 米。"
  },
  {
    "id": "5.11-04",
    "topic": "5.11",
    "label": "Closest Point / 最近点",
    "difficulty": "medium",
    "question": "Find the point on y=x² closest to (2,1/2).",
    "hint": "Minimize D²=(x−2)²+(x²−1/2)².",
    "answer": "(1,1).",
    "explanation": "(D²)′=4x³−4, whose only real zero is x=1. / 回代得到坐标点。"
  },
  {
    "id": "5.11-05",
    "topic": "5.11",
    "label": "Maximum Speed / 最大速率",
    "difficulty": "medium",
    "question": "On a closed time interval, which values must be checked to find maximum speed?",
    "hint": "Speed is |v|.",
    "answer": "Check |v| at interval endpoints and at interior candidates where |v| can have an extremum, including times when a(t)=0, v(t)=0, or the rate is undefined when applicable.",
    "explanation": "Maximizing velocity alone can miss a large negative velocity. / 必须比较速度绝对值。"
  },
  {
    "id": "5.11-06",
    "topic": "5.11",
    "label": "Cylinder Minimum / 圆柱最小用料",
    "difficulty": "challenge",
    "question": "A closed cylinder has volume 54π. Find the radius and height minimizing surface area.",
    "hint": "Use h=54/r² and A=2πr²+108π/r.",
    "answer": "r=3 and h=6.",
    "explanation": "A′=4πr−108π/r²=0 gives r³=27, and A″=4π+216π/r³>0 for r>0, so r=3 gives the minimum. / 二阶导数在可行域内为正，因此 r=3 给出最小值。"
  },
  {
    "id": "5.12-01",
    "topic": "5.12",
    "label": "Implicit Slope / 隐式斜率",
    "difficulty": "easy",
    "question": "For x²+4y²=20, find dy/dx.",
    "hint": "Differentiate both sides with respect to x.",
    "answer": "dy/dx=−x/(4y).",
    "explanation": "2x+8y(dy/dx)=0. / y 项求导要乘 dy/dx。"
  },
  {
    "id": "5.12-02",
    "topic": "5.12",
    "label": "Horizontal Tangents / 水平切线",
    "difficulty": "easy",
    "question": "Find all horizontal-tangent points on x²+4y²=20.",
    "hint": "Set the numerator of dy/dx=−x/(4y) to zero, then use the original equation.",
    "answer": "(0,√5) and (0,−√5).",
    "explanation": "x=0 and 4y²=20. The denominator is nonzero at both points. / 回代原方程。"
  },
  {
    "id": "5.12-03",
    "topic": "5.12",
    "label": "Vertical Tangents / 竖直切线",
    "difficulty": "medium",
    "question": "Find all vertical-tangent points on x²+4y²=20.",
    "hint": "Set the denominator of dy/dx to zero, then use the original equation.",
    "answer": "(2√5,0) and (−2√5,0).",
    "explanation": "y=0 and x²=20; the numerator is nonzero. / 分母为零且分子不为零。"
  },
  {
    "id": "5.12-04",
    "topic": "5.12",
    "label": "Implicit Curvature / 隐式凹凸",
    "difficulty": "medium",
    "question": "For x²+y²=25, the second derivative is y′′=−25/y³. What is the concavity on the upper semicircle?",
    "hint": "On the upper branch, y>0.",
    "answer": "Concave down.",
    "explanation": "When y>0, −25/y³<0. / 上半圆二阶导数为负。"
  },
  {
    "id": "5.12-05",
    "topic": "5.12",
    "label": "Classify an Implicit Point / 隐式极值分类",
    "difficulty": "medium",
    "question": "On a smooth solution branch, y′=0 and y′′>0 at (a,b). What can be concluded?",
    "hint": "Use the second derivative test.",
    "answer": "The branch has a relative minimum at (a,b).",
    "explanation": "The curve is concave up at a horizontal tangent. / 水平切线处凹向上。"
  },
  {
    "id": "5.12-06",
    "topic": "5.12",
    "label": "Implicit Rate Relation / 隐式变化率",
    "difficulty": "challenge",
    "question": "If x²−y²−5xy=25 and x,y depend on t, write the differentiated rate equation.",
    "hint": "Use product rule on xy.",
    "answer": "(2x−5y) dx/dt + (−2y−5x) dy/dt = 0.",
    "explanation": "Differentiate every x- and y-term with respect to t, then group rates. / xy 项使用乘积法则。"
  }
]);
