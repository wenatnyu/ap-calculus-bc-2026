window.AP_CALCULUS_QUESTION_BANK_8 = Object.freeze([
  {
    "id": "8.1-01",
    "topic": "8.1",
    "label": "Average Value Formula / 平均值公式",
    "difficulty": "easy",
    "question": "Find the average value of f(x)=x² on [0,3].",
    "hint": "Divide the definite integral by the interval length.",
    "answer": "3",
    "explanation": "(1/3)∫₀³x²dx=(1/3)(9)=3. / 定积分除以区间长度。"
  },
  {
    "id": "8.1-02",
    "topic": "8.1",
    "label": "Trigonometric Average / 三角函数平均值",
    "difficulty": "medium",
    "question": "Find the average value of sin x on [0,π].",
    "hint": "The interval length is π.",
    "answer": "2/π",
    "explanation": "(1/π)∫₀^π sin x dx=2/π. / 先积分，再除以 π。"
  },
  {
    "id": "8.1-03",
    "topic": "8.1",
    "label": "Integral to Average / 由积分求平均值",
    "difficulty": "easy",
    "question": "If ∫₂⁸f(x)dx=30, what is the average value of f on [2,8]?",
    "hint": "Use b−a=6.",
    "answer": "5",
    "explanation": "f_avg=30/(8−2)=5. / 累积量除以区间长度。"
  },
  {
    "id": "8.1-04",
    "topic": "8.1",
    "label": "Units / 单位",
    "difficulty": "easy",
    "question": "If f is measured in liters per minute and t in minutes, what are the units of the average value of f?",
    "hint": "Average value has the same units as the function.",
    "answer": "liters per minute",
    "explanation": "The integral has liters; dividing by minutes returns liters/minute. / 平均值单位与原函数相同。"
  },
  {
    "id": "8.1-05",
    "topic": "8.1",
    "label": "Integral MVT / 积分中值定理",
    "difficulty": "medium",
    "question": "A continuous function has average value 4 on [1,7]. What does the Mean Value Theorem for Integrals guarantee?",
    "hint": "State an existence conclusion.",
    "answer": "There exists c∈[1,7] such that f(c)=4.",
    "explanation": "Continuity guarantees at least one point attaining the average value. / 连续性保证存在这样的 c。"
  },
  {
    "id": "8.1-06",
    "topic": "8.1",
    "label": "Find c / 求 c",
    "difficulty": "medium",
    "question": "For f(x)=x² on [0,3], find all c in the interval for which f(c)=f_avg.",
    "hint": "First use f_avg=3.",
    "answer": "c=√3",
    "explanation": "c²=3 gives ±√3, but only √3 lies in [0,3]. / 要检查区间。"
  },
  {
    "id": "8.2-01",
    "topic": "8.2",
    "label": "Displacement / 位移",
    "difficulty": "easy",
    "question": "A particle has v(t)=t²−4 on [0,3]. Find its displacement.",
    "hint": "Integrate velocity without absolute value.",
    "answer": "−3",
    "explanation": "∫₀³(t²−4)dt=[t³/3−4t]₀³=−3. / 位移是速度的有向积分。"
  },
  {
    "id": "8.2-02",
    "topic": "8.2",
    "label": "Initial Position / 初始位置",
    "difficulty": "easy",
    "question": "If s(0)=5 and ∫₀⁴v(t)dt=−7, find s(4).",
    "hint": "Final position = initial position + displacement.",
    "answer": "−2",
    "explanation": "s(4)=5+(−7)=−2. / 初始位置加位移。"
  },
  {
    "id": "8.2-03",
    "topic": "8.2",
    "label": "Total Distance / 总路程",
    "difficulty": "medium",
    "question": "For v(t)=t−1 on [0,3], find total distance traveled.",
    "hint": "Split where v changes sign.",
    "answer": "5/2",
    "explanation": "∫₀¹(1−t)dt+∫₁³(t−1)dt=1/2+2=5/2. / 对速度取绝对值。"
  },
  {
    "id": "8.2-04",
    "topic": "8.2",
    "label": "Velocity from Acceleration / 由加速度求速度",
    "difficulty": "medium",
    "question": "If a(t)=6t and v(0)=2, find v(2).",
    "hint": "Add accumulated acceleration to the initial velocity.",
    "answer": "14",
    "explanation": "v(2)=2+∫₀²6t dt=14. / 加速度积分给出速度变化。"
  },
  {
    "id": "8.2-05",
    "topic": "8.2",
    "label": "Speeding Up / 加速判断",
    "difficulty": "medium",
    "question": "At an instant, v=−3 and a=−2. Is the particle speeding up or slowing down?",
    "hint": "Compare the signs of velocity and acceleration.",
    "answer": "Speeding up.",
    "explanation": "v and a have the same sign, so |v| is increasing. / 速度与加速度同号。"
  },
  {
    "id": "8.2-06",
    "topic": "8.2",
    "label": "Direction Change / 改变方向",
    "difficulty": "hard",
    "question": "A velocity function is zero at t=2 but positive on both sides of t=2. Does the particle change direction there?",
    "hint": "A zero alone is not enough.",
    "answer": "No.",
    "explanation": "Direction changes only when velocity changes sign. / 速度为零但不变号时不改变方向。"
  },
  {
    "id": "8.3-01",
    "topic": "8.3",
    "label": "Initial Plus Change / 初值加变化",
    "difficulty": "easy",
    "question": "A tank has 20 liters initially and net inflow R(t). Write the amount at time 5.",
    "hint": "Add the accumulated net rate to the initial amount.",
    "answer": "20+∫₀⁵R(t)dt",
    "explanation": "The integral is net change; the initial 20 gives the total. / 积分是变化量，别漏初值。"
  },
  {
    "id": "8.3-02",
    "topic": "8.3",
    "label": "Net Rate / 净变化率",
    "difficulty": "easy",
    "question": "Material enters at E(t) kg/min and leaves at L(t) kg/min. What rate should be integrated to find net change?",
    "hint": "Additions minus removals.",
    "answer": "E(t)−L(t)",
    "explanation": "Net rate equals inflow minus outflow. / 净变化率等于流入率减流出率。"
  },
  {
    "id": "8.3-03",
    "topic": "8.3",
    "label": "Evaluate Accumulation / 计算累积量",
    "difficulty": "medium",
    "question": "If Q(0)=10 and Q′(t)=4+t, find Q(3).",
    "hint": "Use Q(3)=Q(0)+∫₀³Q′(t)dt.",
    "answer": "53/2",
    "explanation": "10+∫₀³(4+t)dt=10+33/2=53/2. / 初值加净变化。"
  },
  {
    "id": "8.3-04",
    "topic": "8.3",
    "label": "Integral Units / 积分单位",
    "difficulty": "easy",
    "question": "A rate is measured in cars per hour and time in hours. What are the units of its definite integral?",
    "hint": "Multiply the units.",
    "answer": "cars",
    "explanation": "(cars/hour)(hours)=cars. / 变化率积分后得到数量。"
  },
  {
    "id": "8.3-05",
    "topic": "8.3",
    "label": "Accumulator Behavior / 累积函数性质",
    "difficulty": "medium",
    "question": "If A′(t)=R(t) changes from positive to negative at t=4, what happens to A at t=4?",
    "hint": "Use the first derivative sign change.",
    "answer": "A has a local maximum at t=4.",
    "explanation": "A increases before 4 and decreases after 4. / 导数由正变负。"
  },
  {
    "id": "8.3-06",
    "topic": "8.3",
    "label": "Context Interpretation / 情境解释",
    "difficulty": "medium",
    "question": "R(t) is a net population rate in people/year. Interpret ∫₂⁷R(t)dt.",
    "hint": "Name quantity, interval, and units.",
    "answer": "The net change in population from year 2 to year 7, in people.",
    "explanation": "A definite integral of a net rate gives net accumulated change. / 净变化率积分表示人口净变化。"
  },
  {
    "id": "8.4-01",
    "topic": "8.4",
    "label": "Top Minus Bottom / 上减下",
    "difficulty": "easy",
    "question": "On [a,b], f(x)≥g(x). Write the area between the curves using dx.",
    "hint": "Use vertical height times thickness.",
    "answer": "∫ₐᵇ[f(x)−g(x)]dx",
    "explanation": "A vertical slice has height top−bottom. / 竖直切片的高度是上减下。"
  },
  {
    "id": "8.4-02",
    "topic": "8.4",
    "label": "Polynomial Area / 多项式面积",
    "difficulty": "medium",
    "question": "Find the area between y=x and y=x² on [0,1].",
    "hint": "x≥x² on this interval.",
    "answer": "1/6",
    "explanation": "∫₀¹(x−x²)dx=1/2−1/3=1/6. / 上方函数是 x。"
  },
  {
    "id": "8.4-03",
    "topic": "8.4",
    "label": "Find Intersections / 求交点",
    "difficulty": "easy",
    "question": "Find the x-coordinates where y=4−x² and y=x² intersect.",
    "hint": "Set the expressions equal.",
    "answer": "x=±√2",
    "explanation": "4−x²=x² gives x²=2. / 积分上下限来自交点。"
  },
  {
    "id": "8.4-04",
    "topic": "8.4",
    "label": "Enclosed Area / 封闭区域面积",
    "difficulty": "hard",
    "question": "Find the area enclosed by y=4−x² and y=x².",
    "hint": "The upper curve is 4−x² between the intersections.",
    "answer": "16√2/3",
    "explanation": "∫_{−√2}^{√2}(4−2x²)dx=16√2/3. / 利用对称性也可。"
  },
  {
    "id": "8.4-05",
    "topic": "8.4",
    "label": "Area Against Axis / 与坐标轴围成面积",
    "difficulty": "medium",
    "question": "Why can ∫ₐᵇf(x)dx fail to equal the area between y=f(x) and the x-axis?",
    "hint": "Think about portions below the axis.",
    "answer": "The integral is signed; regions below the x-axis contribute negatively.",
    "explanation": "Geometric area uses |f(x)| or a split integral. / 面积非负，定积分有符号。"
  },
  {
    "id": "8.4-06",
    "topic": "8.4",
    "label": "Area Units / 面积单位",
    "difficulty": "easy",
    "question": "If both axes are measured in meters, what units should an area-between-curves answer have?",
    "hint": "Multiply vertical and horizontal units.",
    "answer": "square meters (m²)",
    "explanation": "A slice has meters×meters. / 面积单位是平方米。"
  },
  {
    "id": "8.5-01",
    "topic": "8.5",
    "label": "Right Minus Left / 右减左",
    "difficulty": "easy",
    "question": "For c≤y≤d, the region runs from x=ℓ(y) to x=r(y). Write its area.",
    "hint": "Use a horizontal slice.",
    "answer": "∫_c^d[r(y)−ℓ(y)]dy",
    "explanation": "Horizontal width is right−left. / 水平切片宽度是右减左。"
  },
  {
    "id": "8.5-02",
    "topic": "8.5",
    "label": "Find y-Bounds / 求 y 上下限",
    "difficulty": "easy",
    "question": "At what y-values do x=y² and x=2y intersect?",
    "hint": "Set y²=2y.",
    "answer": "y=0 and y=2",
    "explanation": "y(y−2)=0. / dy 积分的上下限是交点的 y 坐标。"
  },
  {
    "id": "8.5-03",
    "topic": "8.5",
    "label": "Horizontal Area / 水平切片面积",
    "difficulty": "medium",
    "question": "Find the area bounded by x=y² and x=2y.",
    "hint": "On 0≤y≤2, 2y is the right boundary.",
    "answer": "4/3",
    "explanation": "∫₀²(2y−y²)dy=4/3. / 右减左。"
  },
  {
    "id": "8.5-04",
    "topic": "8.5",
    "label": "Symmetric Branches / 对称分支",
    "difficulty": "medium",
    "question": "For 0≤y≤4, what is the horizontal width inside x²≤y?",
    "hint": "Solve x²=y for both branches.",
    "answer": "2√y",
    "explanation": "Right x=√y and left x=−√y, so width is 2√y. / 不要漏掉负分支。"
  },
  {
    "id": "8.5-05",
    "topic": "8.5",
    "label": "Parabola and Line / 抛物线与直线",
    "difficulty": "medium",
    "question": "Find the area for −2≤y≤2 between x=y² and x=4.",
    "hint": "The right boundary is x=4.",
    "answer": "32/3",
    "explanation": "∫_{−2}^{2}(4−y²)dy=32/3. / 可利用对称性。"
  },
  {
    "id": "8.5-06",
    "topic": "8.5",
    "label": "Choose Orientation / 选择积分方向",
    "difficulty": "hard",
    "question": "Why might integrating with respect to y be preferable for a sideways parabola?",
    "hint": "Think about how many formulas describe the boundary.",
    "answer": "Horizontal slices may use one right-minus-left integral, while vertical slices may require separate branches or pieces.",
    "explanation": "Choose the orientation that describes the region most simply. / 选择分段更少的方向。"
  },
  {
    "id": "8.6-01",
    "topic": "8.6",
    "label": "Split Points / 分段点",
    "difficulty": "easy",
    "question": "At which points should an area integral for y=sin x and y=0 on [0,2π] be split?",
    "hint": "Find interior zeros where the sign changes.",
    "answer": "At x=π.",
    "explanation": "sin x changes from positive to negative at π. / 在内部变号点分段。"
  },
  {
    "id": "8.6-02",
    "topic": "8.6",
    "label": "Sine Area / 正弦面积",
    "difficulty": "medium",
    "question": "Find the total area between y=sin x and the x-axis on [0,2π].",
    "hint": "Do not let the two lobes cancel.",
    "answer": "4",
    "explanation": "Each lobe has area 2, so total area is 4. / 总面积相加，不作有向抵消。"
  },
  {
    "id": "8.6-03",
    "topic": "8.6",
    "label": "Polynomial Roots / 多项式交点",
    "difficulty": "easy",
    "question": "List the zeros of x³−x on [−1,1].",
    "hint": "Factor x³−x.",
    "answer": "−1, 0, 1",
    "explanation": "x³−x=x(x−1)(x+1). / 所有交点都要列出。"
  },
  {
    "id": "8.6-04",
    "topic": "8.6",
    "label": "Polynomial Total Area / 多项式总面积",
    "difficulty": "hard",
    "question": "Find the total area between y=x³−x and the x-axis on [−1,1].",
    "hint": "Use symmetry and the sign on (0,1).",
    "answer": "1/2",
    "explanation": "2∫₀¹(x−x³)dx=1/2. / 有向积分为零，但总面积不是零。"
  },
  {
    "id": "8.6-05",
    "topic": "8.6",
    "label": "Absolute Difference / 差的绝对值",
    "difficulty": "medium",
    "question": "Write one compact integral for total area between y=f(x) and y=g(x) on [a,b].",
    "hint": "Use an absolute value.",
    "answer": "∫ₐᵇ|f(x)−g(x)|dx",
    "explanation": "Absolute difference makes each vertical width nonnegative. / 绝对值保证面积为非负。"
  },
  {
    "id": "8.6-06",
    "topic": "8.6",
    "label": "Root Workflow / 求根流程",
    "difficulty": "medium",
    "question": "After numerically finding several intersections of two curves, what must be checked before integrating area?",
    "hint": "The upper curve may change.",
    "answer": "Determine which curve is above on every interval between consecutive intersections.",
    "explanation": "Use a sign chart or test point, then integrate top−bottom piecewise. / 每段都要判断上下关系。"
  },
  {
    "id": "8.7-01",
    "topic": "8.7",
    "label": "Volume Model / 体积模型",
    "difficulty": "easy",
    "question": "What integral gives volume when cross-sectional area perpendicular to the x-axis is A(x)?",
    "hint": "Add thin slabs.",
    "answer": "V=∫ₐᵇA(x)dx",
    "explanation": "Area times thickness gives volume. / 截面积乘厚度后积分。"
  },
  {
    "id": "8.7-02",
    "topic": "8.7",
    "label": "Square Area / 正方形截面积",
    "difficulty": "easy",
    "question": "A square cross section has side length w(x). What is A(x)?",
    "hint": "Area of a square is side squared.",
    "answer": "A(x)=[w(x)]²",
    "explanation": "Square the complete length expression. / 整个边长表达式要平方。"
  },
  {
    "id": "8.7-03",
    "topic": "8.7",
    "label": "Square Volume / 正方形截面体积",
    "difficulty": "medium",
    "question": "The base lies between y=x and y=x² on [0,1]. Square cross sections are perpendicular to the x-axis. Find the volume.",
    "hint": "The side length is x−x².",
    "answer": "1/30",
    "explanation": "∫₀¹(x−x²)²dx=1/30. / 先上减下得到边长，再平方。"
  },
  {
    "id": "8.7-04",
    "topic": "8.7",
    "label": "Rectangle Ratio / 矩形比例",
    "difficulty": "medium",
    "question": "A rectangle has base w(x) in the region and height three times its base. What is its cross-sectional area?",
    "hint": "Multiply base by height.",
    "answer": "3[w(x)]²",
    "explanation": "A=w·3w=3w². / 长乘宽。"
  },
  {
    "id": "8.7-05",
    "topic": "8.7",
    "label": "Perpendicular Direction / 垂直方向",
    "difficulty": "easy",
    "question": "Cross sections perpendicular to the y-axis normally lead to integration with respect to which variable?",
    "hint": "The slabs have thickness along the y-direction.",
    "answer": "y (use dy)",
    "explanation": "Use horizontal base segments and y-bounds. / 水平底边配合 dy。"
  },
  {
    "id": "8.7-06",
    "topic": "8.7",
    "label": "Cubic Units / 立方单位",
    "difficulty": "easy",
    "question": "Why does ∫A(x)dx have cubic units?",
    "hint": "Track area units and thickness units.",
    "answer": "Square units times units equal cubic units.",
    "explanation": "Cross-sectional area × thickness = volume. / 截面积乘厚度得到体积。"
  },
  {
    "id": "8.8-01",
    "topic": "8.8",
    "label": "Semicircle Area / 半圆面积",
    "difficulty": "easy",
    "question": "A semicircle has diameter d. Express its area in terms of d.",
    "hint": "Its radius is d/2.",
    "answer": "πd²/8",
    "explanation": "A=(1/2)π(d/2)²=πd²/8. / 直径先除以 2 得半径。"
  },
  {
    "id": "8.8-02",
    "topic": "8.8",
    "label": "Equilateral Area / 等边三角形面积",
    "difficulty": "easy",
    "question": "An equilateral triangle has side length s. What is its area?",
    "hint": "Use height (√3/2)s.",
    "answer": "(√3/4)s²",
    "explanation": "A=(1/2)s(√3s/2)=√3s²/4. / 等边三角形面积公式。"
  },
  {
    "id": "8.8-03",
    "topic": "8.8",
    "label": "Right Triangle Leg / 直角边",
    "difficulty": "medium",
    "question": "An isosceles right triangle has leg length w. What is its area?",
    "hint": "The two legs are perpendicular base and height.",
    "answer": "w²/2",
    "explanation": "A=(1/2)w·w=w²/2. / 两条直角边相等。"
  },
  {
    "id": "8.8-04",
    "topic": "8.8",
    "label": "Right Triangle Hypotenuse / 斜边",
    "difficulty": "hard",
    "question": "An isosceles right triangle has hypotenuse w. What is its area?",
    "hint": "Each leg has length w/√2.",
    "answer": "w²/4",
    "explanation": "A=(1/2)(w/√2)²=w²/4. / 先由斜边求直角边。"
  },
  {
    "id": "8.8-05",
    "topic": "8.8",
    "label": "Semicircle Volume / 半圆截面体积",
    "difficulty": "medium",
    "question": "Semicircular cross sections have diameter √x for 0≤x≤4. Find the volume.",
    "hint": "Use A=πd²/8.",
    "answer": "π",
    "explanation": "V=(π/8)∫₀⁴x dx=π. / 代入直径公式后积分。"
  },
  {
    "id": "8.8-06",
    "topic": "8.8",
    "label": "Equilateral Volume / 等边截面体积",
    "difficulty": "medium",
    "question": "Equilateral-triangle cross sections have side x for 0≤x≤2. Find the volume.",
    "hint": "Use A=(√3/4)x².",
    "answer": "2√3/3",
    "explanation": "(√3/4)∫₀²x²dx=2√3/3. / 截面积积分。"
  },
  {
    "id": "8.9-01",
    "topic": "8.9",
    "label": "Disc Formula / 圆盘公式",
    "difficulty": "easy",
    "question": "Write the disc-method volume formula in terms of radius R(x) on [a,b].",
    "hint": "Integrate circular area.",
    "answer": "V=π∫ₐᵇ[R(x)]²dx",
    "explanation": "Each perpendicular cross section has area πR². / 截面积是圆面积。"
  },
  {
    "id": "8.9-02",
    "topic": "8.9",
    "label": "x-Axis Disc / 绕 x 轴圆盘",
    "difficulty": "medium",
    "question": "Rotate 0≤y≤√x, 0≤x≤4 about the x-axis. Find the volume.",
    "hint": "The radius is √x.",
    "answer": "8π",
    "explanation": "π∫₀⁴(√x)²dx=π∫₀⁴x dx=8π. / 半径平方后积分。"
  },
  {
    "id": "8.9-03",
    "topic": "8.9",
    "label": "y-Axis Setup / 绕 y 轴列式",
    "difficulty": "medium",
    "question": "Rotate 0≤x≤y², 0≤y≤2 about the y-axis. Write the disc-method integral.",
    "hint": "Use horizontal slices.",
    "answer": "π∫₀²y⁴dy",
    "explanation": "Radius x=y², so R²=y⁴ and thickness is dy. / 绕 y 轴用水平切片。"
  },
  {
    "id": "8.9-04",
    "topic": "8.9",
    "label": "y-Axis Volume / 绕 y 轴体积",
    "difficulty": "medium",
    "question": "Evaluate π∫₀²y⁴dy.",
    "hint": "Use the power rule.",
    "answer": "32π/5",
    "explanation": "π[y⁵/5]₀²=32π/5. / 精确体积。"
  },
  {
    "id": "8.9-05",
    "topic": "8.9",
    "label": "Disc or Washer / 圆盘还是垫圈",
    "difficulty": "easy",
    "question": "When is the disc method appropriate rather than a washer with a positive inner radius?",
    "hint": "Look for a gap from the axis.",
    "answer": "When the region touches the axis of rotation, so the inner radius is 0.",
    "explanation": "A disc has no central hole. / 区域接触旋转轴时内半径为零。"
  },
  {
    "id": "8.9-06",
    "topic": "8.9",
    "label": "Slice Orientation / 切片方向",
    "difficulty": "easy",
    "question": "For discs around the x-axis, should the slices be parallel or perpendicular to the x-axis?",
    "hint": "Disc faces are perpendicular to the axis.",
    "answer": "Perpendicular to the x-axis.",
    "explanation": "Vertical slices produce disc cross sections and a dx integral. / 竖直切片配合 dx。"
  },
  {
    "id": "8.10-01",
    "topic": "8.10",
    "label": "Shifted Radius / 平移半径",
    "difficulty": "easy",
    "question": "What is the distance from y=f(x) to the horizontal line y=5?",
    "hint": "Distance is the absolute difference of coordinates.",
    "answer": "|f(x)−5|",
    "explanation": "Radius must be a nonnegative distance. / 半径是到旋转轴的垂直距离。"
  },
  {
    "id": "8.10-02",
    "topic": "8.10",
    "label": "Horizontal Shift / 水平轴平移",
    "difficulty": "medium",
    "question": "Rotate the region between y=x and y=2 for 0≤x≤2 about y=2. Find the volume.",
    "hint": "The radius is 2−x.",
    "answer": "8π/3",
    "explanation": "π∫₀²(2−x)²dx=8π/3. / 先写到 y=2 的距离。"
  },
  {
    "id": "8.10-03",
    "topic": "8.10",
    "label": "Vertical Shift Setup / 竖直轴平移列式",
    "difficulty": "medium",
    "question": "Rotate the region between x=−1 and x=y² for 0≤y≤1 about x=−1. Write the volume integral.",
    "hint": "Use horizontal slices and radius y²+1.",
    "answer": "π∫₀¹(y²+1)²dy",
    "explanation": "The region touches x=−1, so the sections are discs. / 内半径为零。"
  },
  {
    "id": "8.10-04",
    "topic": "8.10",
    "label": "Vertical Shift Volume / 竖直轴平移体积",
    "difficulty": "hard",
    "question": "Evaluate π∫₀¹(y²+1)²dy.",
    "hint": "Expand y⁴+2y²+1.",
    "answer": "28π/15",
    "explanation": "π(1/5+2/3+1)=28π/15. / 展开后逐项积分。"
  },
  {
    "id": "8.10-05",
    "topic": "8.10",
    "label": "Disc Condition / 圆盘条件",
    "difficulty": "easy",
    "question": "What geometric feature makes the inner radius zero for a shifted-axis rotation?",
    "hint": "Look at whether the region reaches the axis.",
    "answer": "The region touches the axis of rotation.",
    "explanation": "No gap means a solid disc rather than a washer. / 区域接触旋转轴。"
  },
  {
    "id": "8.10-06",
    "topic": "8.10",
    "label": "Variable Choice / 积分变量",
    "difficulty": "easy",
    "question": "For discs about a vertical line x=h, which integration variable is normally used?",
    "hint": "Disc faces are perpendicular to the vertical axis.",
    "answer": "y (use dy)",
    "explanation": "Horizontal slices generate discs about a vertical line. / 水平切片配合 dy。"
  },
  {
    "id": "8.11-01",
    "topic": "8.11",
    "label": "Washer Formula / 垫圈公式",
    "difficulty": "easy",
    "question": "State the cross-sectional area of a washer with outer radius R and inner radius r.",
    "hint": "Subtract the inner disc area from the outer disc area.",
    "answer": "π(R²−r²)",
    "explanation": "A=πR²−πr². / 外圆面积减内圆面积。"
  },
  {
    "id": "8.11-02",
    "topic": "8.11",
    "label": "Not a Square of Difference / 不是差的平方",
    "difficulty": "easy",
    "question": "Which is correct for washer area: π(R²−r²) or π(R−r)²?",
    "hint": "Subtract areas, not radii.",
    "answer": "π(R²−r²)",
    "explanation": "The hole removes area πr² from area πR². / 不能把半径差整体平方。"
  },
  {
    "id": "8.11-03",
    "topic": "8.11",
    "label": "x-Axis Washer / 绕 x 轴垫圈",
    "difficulty": "medium",
    "question": "Rotate 1≤y≤x+1, 0≤x≤2 about the x-axis. Find the volume.",
    "hint": "R=x+1 and r=1.",
    "answer": "20π/3",
    "explanation": "π∫₀²[(x+1)²−1]dx=20π/3. / 外半径平方减内半径平方。"
  },
  {
    "id": "8.11-04",
    "topic": "8.11",
    "label": "y-Axis Washer / 绕 y 轴垫圈",
    "difficulty": "medium",
    "question": "Rotate 1≤x≤y+2, 0≤y≤1 about the y-axis. Find the volume.",
    "hint": "Use horizontal slices.",
    "answer": "16π/3",
    "explanation": "π∫₀¹[(y+2)²−1]dy=16π/3. / 绕 y 轴使用 dy。"
  },
  {
    "id": "8.11-05",
    "topic": "8.11",
    "label": "Outer Radius / 外半径",
    "difficulty": "medium",
    "question": "For a region above the x-axis between y=f(x) and y=g(x), with f(x)>g(x)>0, which is the outer radius when revolving about the x-axis?",
    "hint": "Choose the farther boundary.",
    "answer": "R(x)=f(x)",
    "explanation": "The upper curve is farther from y=0. / 外半径取离旋转轴更远的边界。"
  },
  {
    "id": "8.11-06",
    "topic": "8.11",
    "label": "Disc Special Case / 圆盘特例",
    "difficulty": "easy",
    "question": "How does the washer formula simplify when the inner radius is zero?",
    "hint": "Set r=0.",
    "answer": "A=πR², the disc formula.",
    "explanation": "A disc is a washer with no hole. / 圆盘是内半径为零的垫圈。"
  },
  {
    "id": "8.12-01",
    "topic": "8.12",
    "label": "Axis Above Region / 旋转轴在上方",
    "difficulty": "medium",
    "question": "A region lies between y=f(x) above and y=g(x) below, with both below y=5. Which curve determines the outer radius about y=5?",
    "hint": "Outer means farther from the axis.",
    "answer": "The lower curve g(x), with R=5−g(x).",
    "explanation": "The lower boundary is farther from an axis above the region. / 旋转轴在上方时，下方曲线对应外半径。"
  },
  {
    "id": "8.12-02",
    "topic": "8.12",
    "label": "Shifted Washer Setup / 平移垫圈列式",
    "difficulty": "medium",
    "question": "Rotate the region between y=x and y=x² on [0,1] about y=2. Write the volume integral.",
    "hint": "The axis is above both curves.",
    "answer": "π∫₀¹[(2−x²)²−(2−x)²]dx",
    "explanation": "R=2−x² and r=2−x. / 先比较到 y=2 的距离。"
  },
  {
    "id": "8.12-03",
    "topic": "8.12",
    "label": "Shifted Washer Volume / 平移垫圈体积",
    "difficulty": "hard",
    "question": "Evaluate π∫₀¹[(2−x²)²−(2−x)²]dx.",
    "hint": "The simplified integrand is 4x−5x²+x⁴.",
    "answer": "8π/15",
    "explanation": "π[2−5/3+1/5]=8π/15. / 展开后逐项积分。"
  },
  {
    "id": "8.12-04",
    "topic": "8.12",
    "label": "Vertical Shift Washer / 竖直平移垫圈",
    "difficulty": "hard",
    "question": "Rotate y≤x≤1 for 0≤y≤1 about x=−1. Find the volume.",
    "hint": "R=2 and r=y+1.",
    "answer": "5π/3",
    "explanation": "π∫₀¹[4−(y+1)²]dy=5π/3. / 绕竖直轴用 dy。"
  },
  {
    "id": "8.12-05",
    "topic": "8.12",
    "label": "Axis Crosses Region / 旋转轴穿过区域",
    "difficulty": "medium",
    "question": "Why can a washer setup need to be split when the axis of rotation crosses the region?",
    "hint": "The cross-sectional geometry or controlling radius may change.",
    "answer": "Some slices become discs, and the farther side determining the outer radius can change.",
    "explanation": "Split wherever the cross-sectional radius rule changes. / 截面几何变化时必须分段。"
  },
  {
    "id": "8.12-06",
    "topic": "8.12",
    "label": "Radius Crossover / 半径关系变化",
    "difficulty": "medium",
    "question": "How do you locate a point where the outer boundary changes between two competing sides of a shifted axis?",
    "hint": "Compare their distances from the axis.",
    "answer": "Set the two distance expressions equal and solve.",
    "explanation": "Then test which distance is larger on each side. / 解距离相等点并分段比较。"
  },
  {
    "id": "8.13-01",
    "topic": "8.13",
    "label": "Arc-Length Formula / 弧长公式",
    "difficulty": "easy",
    "question": "State the arc-length formula for y=f(x) on [a,b].",
    "hint": "Use the derivative inside a square root.",
    "answer": "L=∫ₐᵇ√(1+[f′(x)]²)dx",
    "explanation": "The formula comes from the distance formula and a limit. / 由微小线段长度累积得到。"
  },
  {
    "id": "8.13-02",
    "topic": "8.13",
    "label": "Exact Arc Length / 精确弧长",
    "difficulty": "medium",
    "question": "Find the arc length of y=(2/3)x^(3/2) on [0,3].",
    "hint": "f′(x)=√x.",
    "answer": "14/3",
    "explanation": "∫₀³√(1+x)dx=(2/3)(8−1)=14/3. / 代入弧长公式。"
  },
  {
    "id": "8.13-03",
    "topic": "8.13",
    "label": "Sine Setup / 正弦曲线列式",
    "difficulty": "medium",
    "question": "Set up the arc length of y=sin x on [0,π] without evaluating.",
    "hint": "f′(x)=cos x.",
    "answer": "∫₀^π√(1+cos²x)dx",
    "explanation": "Square the derivative inside the radical. / 根号内是 1 加导数平方。"
  },
  {
    "id": "8.13-04",
    "topic": "8.13",
    "label": "Horizontal Segment / 水平线段",
    "difficulty": "easy",
    "question": "Use the arc-length formula to find the length of y=5 from x=2 to x=9.",
    "hint": "The derivative is zero.",
    "answer": "7",
    "explanation": "∫₂⁹√(1+0²)dx=7. / 与普通线段长度一致。"
  },
  {
    "id": "8.13-05",
    "topic": "8.13",
    "label": "Perimeter / 周长",
    "difficulty": "medium",
    "question": "A region has one curved boundary y=f(x) on [a,b] and three straight boundary segments. What must be added to find its perimeter?",
    "hint": "Perimeter includes every boundary piece.",
    "answer": "The arc length of f plus the lengths of all three straight segments.",
    "explanation": "Arc length handles only the curved piece. / 周长要加上所有边界。"
  },
  {
    "id": "8.13-06",
    "topic": "8.13",
    "label": "Reasonableness Check / 合理性检查",
    "difficulty": "medium",
    "question": "How should an arc length compare with the straight-line distance between the same endpoints?",
    "hint": "The direct segment is the shortest path.",
    "answer": "Arc length must be at least the straight-line distance.",
    "explanation": "A curve cannot be shorter than the direct segment joining its endpoints. / 可用于检查结果合理性。"
  }
]);
