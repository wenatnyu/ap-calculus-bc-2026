window.AP_CALCULUS_QUESTION_BANK_9 = Object.freeze([
  {
    "id": "9.1-01",
    "topic": "9.1",
    "label": "Evaluate a Parametrization / 代入参数",
    "difficulty": "easy",
    "question": "For x=t²−1 and y=3t+2, find the point when t=−2.",
    "hint": "Substitute the same t into both components.",
    "answer": "(3,−4).",
    "explanation": "x=4−1=3 and y=−6+2=−4. / 同一个参数值代入两个分量。"
  },
  {
    "id": "9.1-02",
    "topic": "9.1",
    "label": "Eliminate the Parameter / 消去参数",
    "difficulty": "easy",
    "question": "Eliminate t from x=4t−1, y=2t+3.",
    "hint": "Solve the first equation for t.",
    "answer": "y=(x+7)/2.",
    "explanation": "t=(x+1)/4, so y=(x+1)/2+3=(x+7)/2. / 先用 x 表示 t。"
  },
  {
    "id": "9.1-03",
    "topic": "9.1",
    "label": "Parametric Slope / 参数斜率",
    "difficulty": "easy",
    "question": "For x=t²+2 and y=t³, find dy/dx when t=1.",
    "hint": "Use (dy/dt)/(dx/dt).",
    "answer": "3/2.",
    "explanation": "dy/dt=3t² and dx/dt=2t, so the ratio at t=1 is 3/2. / 分子是 y 对 t 的导数。"
  },
  {
    "id": "9.1-04",
    "topic": "9.1",
    "label": "Tangent Line / 参数切线",
    "difficulty": "medium",
    "question": "For x=cos t, y=sin t, find the tangent line at t=π/4.",
    "hint": "Find both the point and the slope.",
    "answer": "y−√2/2=−(x−√2/2), or y=−x+√2.",
    "explanation": "dy/dx=cos t/(−sin t)=−1 at t=π/4. / 点斜式需使用曲线上的点。"
  },
  {
    "id": "9.1-05",
    "topic": "9.1",
    "label": "Horizontal Tangent / 水平切线",
    "difficulty": "medium",
    "question": "For x=t²−2t and y=t³−3t, determine whether the tangent at t=−1 is horizontal, vertical, or neither.",
    "hint": "Evaluate x′ and y′ separately.",
    "answer": "Horizontal.",
    "explanation": "x′=2t−2=−4≠0 and y′=3t²−3=0. / y′=0 且 x′≠0。"
  },
  {
    "id": "9.1-06",
    "topic": "9.1",
    "label": "Singular Parameter / 奇异参数",
    "difficulty": "challenge",
    "question": "At a parameter value t₀, both x′(t₀) and y′(t₀) are zero. Can you conclude that the tangent is horizontal?",
    "hint": "The quotient gives 0/0.",
    "answer": "No; the basic derivative test is inconclusive.",
    "explanation": "One must simplify, use limits, or inspect higher-order behavior. / 0/0 不能直接判定切线方向。"
  },
  {
    "id": "9.2-01",
    "topic": "9.2",
    "label": "Formula Recall / 公式回忆",
    "difficulty": "easy",
    "question": "Complete the formula: d²y/dx² = ____ for x=x(t), y=y(t).",
    "hint": "Differentiate dy/dx with respect to t, then convert from t-change to x-change.",
    "answer": "[d/dt(dy/dx)]/(dx/dt).",
    "explanation": "The outer derivative is with respect to x, so divide the t-derivative by dx/dt. / 对 t 求导后还要除以 dx/dt。"
  },
  {
    "id": "9.2-02",
    "topic": "9.2",
    "label": "Constant Concavity / 常量凹凸",
    "difficulty": "easy",
    "question": "For x=2t and y=t², find d²y/dx².",
    "hint": "First find dy/dx.",
    "answer": "1/2.",
    "explanation": "dy/dx=t; d(t)/dt=1 and dx/dt=2. / 二阶导数为 1÷2。"
  },
  {
    "id": "9.2-03",
    "topic": "9.2",
    "label": "Concavity at t / 参数点凹凸",
    "difficulty": "medium",
    "question": "For x=t²+1 and y=t³, is the curve concave up or down at t=3?",
    "hint": "Use d²y/dx²=3/(4t).",
    "answer": "Concave up.",
    "explanation": "At t=3 the second derivative is 1/4>0. / 二阶导数为正。"
  },
  {
    "id": "9.2-04",
    "topic": "9.2",
    "label": "Trig Second Derivative / 三角参数二阶导",
    "difficulty": "medium",
    "question": "For x=cos t and y=sin t with sin t≠0, find d²y/dx².",
    "hint": "dy/dx=−cot t; differentiate and divide by −sin t.",
    "answer": "−csc³t.",
    "explanation": "d(−cot t)/dt=csc²t, and csc²t/(−sin t)=−csc³t. / 最后仍需除以 x′。"
  },
  {
    "id": "9.2-05",
    "topic": "9.2",
    "label": "Inflection Logic / 拐点逻辑",
    "difficulty": "medium",
    "question": "If d²y/dx²=0 at t=2, must the curve have an inflection point there?",
    "hint": "Recall the definition of inflection.",
    "answer": "No; concavity must actually change.",
    "explanation": "A zero is only a candidate. / 二阶导数为零只是候选条件。"
  },
  {
    "id": "9.2-06",
    "topic": "9.2",
    "label": "Undefined Formula / 公式未定义",
    "difficulty": "challenge",
    "question": "Why must x′(t)≠0 when using the standard parametric second-derivative formula?",
    "hint": "The conversion d/dx=(1/x′)d/dt is used twice.",
    "answer": "Because division by x′ converts change in t to change in x; if x′=0, that quotient is not defined.",
    "explanation": "The curve may need a separate local analysis at such a parameter. / x′=0 时要单独研究曲线。"
  },
  {
    "id": "9.3-01",
    "topic": "9.3",
    "label": "Arc-Length Setup / 弧长列式",
    "difficulty": "easy",
    "question": "Set up the length of x=t², y=3t for 0≤t≤2.",
    "hint": "Differentiate both components and square them.",
    "answer": "∫₀²√(4t²+9) dt.",
    "explanation": "Speed is √[(2t)²+3²]. / 被积函数是速度大小。"
  },
  {
    "id": "9.3-02",
    "topic": "9.3",
    "label": "Constant Speed / 常速弧长",
    "difficulty": "easy",
    "question": "Find the length of x=5t−1, y=12t+4 for 1≤t≤3.",
    "hint": "The speed is constant.",
    "answer": "26.",
    "explanation": "Speed is √(25+144)=13 and the time interval has length 2. / 弧长=速率×时间。"
  },
  {
    "id": "9.3-03",
    "topic": "9.3",
    "label": "Circle Arc / 圆弧",
    "difficulty": "easy",
    "question": "Find the length of x=4cos t, y=4sin t for 0≤t≤π/2.",
    "hint": "The speed simplifies to 4.",
    "answer": "2π.",
    "explanation": "This is one quarter of a circle of radius 4. / 四分之一圆周长。"
  },
  {
    "id": "9.3-04",
    "topic": "9.3",
    "label": "Repeated Trace / 重复描迹",
    "difficulty": "medium",
    "question": "What length does x=cos t, y=sin t produce on 0≤t≤6π?",
    "hint": "Count revolutions.",
    "answer": "6π.",
    "explanation": "The unit circle is traced three times; the integral counts distance traveled. / 三圈路程为 6π。"
  },
  {
    "id": "9.3-05",
    "topic": "9.3",
    "label": "Exact Integral / 精确积分",
    "difficulty": "medium",
    "question": "Find the length of x=t²/2, y=t³/3 for 0≤t≤1.",
    "hint": "Speed is √(t²+t⁴)=t√(1+t²) on this interval.",
    "answer": "(2√2−1)/3.",
    "explanation": "Integrate t√(1+t²) using u=1+t². / 注意 t≥0，可写成 t√(1+t²)。"
  },
  {
    "id": "9.3-06",
    "topic": "9.3",
    "label": "Geometric vs Traced Length / 几何长度与路程",
    "difficulty": "challenge",
    "question": "A smooth parametrization pauses at one instant but does not reverse or retrace. Does x′=y′=0 at that instant automatically make the arc-length integral invalid?",
    "hint": "Piecewise smooth curves may have isolated zero speed.",
    "answer": "No; an isolated zero speed can still be compatible with a finite, well-defined arc length.",
    "explanation": "The integrand is zero at that instant; check overall regularity and the stated theorem conditions. / 孤立停顿不等于弧长不存在。"
  },
  {
    "id": "9.4-01",
    "topic": "9.4",
    "label": "Vector Magnitude / 向量大小",
    "difficulty": "easy",
    "question": "Find the magnitude of ⟨−5,12⟩.",
    "hint": "Use the Pythagorean theorem.",
    "answer": "13.",
    "explanation": "√[(-5)²+12²]=13. / 向量大小是非负标量。"
  },
  {
    "id": "9.4-02",
    "topic": "9.4",
    "label": "Componentwise Derivative / 分量求导",
    "difficulty": "easy",
    "question": "Differentiate r(t)=⟨t³, e^{2t}⟩.",
    "hint": "Differentiate each component.",
    "answer": "r′(t)=⟨3t²,2e^{2t}⟩.",
    "explanation": "Vector differentiation is componentwise. / 每个分量分别求导。"
  },
  {
    "id": "9.4-03",
    "topic": "9.4",
    "label": "Velocity at a Time / 时刻速度",
    "difficulty": "easy",
    "question": "If r(t)=⟨cos t,sin t⟩, find v(π/2).",
    "hint": "Differentiate, then substitute.",
    "answer": "⟨−1,0⟩.",
    "explanation": "v(t)=⟨−sin t,cos t⟩. / 速度指向参数增大的方向。"
  },
  {
    "id": "9.4-04",
    "topic": "9.4",
    "label": "Acceleration / 加速度",
    "difficulty": "medium",
    "question": "For r(t)=⟨t², t³−3t⟩, find a(1).",
    "hint": "Differentiate twice.",
    "answer": "⟨2,6⟩.",
    "explanation": "r″(t)=⟨2,6t⟩. / 加速度是位置的二阶导数。"
  },
  {
    "id": "9.4-05",
    "topic": "9.4",
    "label": "Path Slope from v / 由速度求斜率",
    "difficulty": "medium",
    "question": "A particle has velocity ⟨−4,6⟩. What is the slope of its path at that instant?",
    "hint": "Use v_y/v_x.",
    "answer": "−3/2.",
    "explanation": "dy/dx=6/(−4)=−3/2. / 斜率是纵向速度除以横向速度。"
  },
  {
    "id": "9.4-06",
    "topic": "9.4",
    "label": "Zero Velocity / 零速度",
    "difficulty": "challenge",
    "question": "If r′(2)=⟨0,0⟩, can the velocity vector determine a tangent direction at t=2?",
    "hint": "A zero vector has no direction.",
    "answer": "No; additional local analysis is required.",
    "explanation": "The path may pause, reverse, or have a singular point. / 零向量不能直接给出切向方向。"
  },
  {
    "id": "9.5-01",
    "topic": "9.5",
    "label": "Vector Antiderivative / 向量原函数",
    "difficulty": "easy",
    "question": "Find ∫⟨3t²,2t⟩dt.",
    "hint": "Integrate each component and include constants.",
    "answer": "⟨t³+C₁,t²+C₂⟩.",
    "explanation": "Each component has its own integration constant. / 每个分量各有一个常数。"
  },
  {
    "id": "9.5-02",
    "topic": "9.5",
    "label": "Definite Vector Integral / 向量定积分",
    "difficulty": "easy",
    "question": "Evaluate ∫₀¹⟨2t,4⟩dt.",
    "hint": "Integrate both components over the same bounds.",
    "answer": "⟨1,4⟩.",
    "explanation": "The result is a vector of signed component changes. / 结果是两个方向的净变化。"
  },
  {
    "id": "9.5-03",
    "topic": "9.5",
    "label": "Position from Velocity / 由速度求位置",
    "difficulty": "medium",
    "question": "If v(t)=⟨2t,−1⟩ and r(0)=⟨3,5⟩, find r(t).",
    "hint": "Use r(t)=r(0)+∫₀ᵗv(u)du.",
    "answer": "r(t)=⟨t²+3,5−t⟩.",
    "explanation": "The initial position fixes both constants. / 初始位置确定两个积分常数。"
  },
  {
    "id": "9.5-04",
    "topic": "9.5",
    "label": "Acceleration to Velocity / 加速度到速度",
    "difficulty": "medium",
    "question": "Given a(t)=⟨6t,2⟩ and v(0)=⟨−1,4⟩, find v(t).",
    "hint": "Integrate acceleration once.",
    "answer": "v(t)=⟨3t²−1,2t+4⟩.",
    "explanation": "Use the initial velocity after integrating. / 积分后代入初速度。"
  },
  {
    "id": "9.5-05",
    "topic": "9.5",
    "label": "Displacement / 位移",
    "difficulty": "medium",
    "question": "A particle has velocity ⟨cos t,sin t⟩ on 0≤t≤π. Find its displacement.",
    "hint": "Integrate components with bounds.",
    "answer": "⟨0,2⟩.",
    "explanation": "∫₀^πcos t dt=0 and ∫₀^πsin t dt=2. / 位移是向量。"
  },
  {
    "id": "9.5-06",
    "topic": "9.5",
    "label": "Distance Setup / 路程列式",
    "difficulty": "challenge",
    "question": "For velocity v(t)=⟨t−1,2⟩ on 0≤t≤3, write the total-distance integral.",
    "hint": "Take the magnitude before integrating.",
    "answer": "∫₀³√((t−1)²+4)dt.",
    "explanation": "Distance integrates speed, not the components separately. / 路程积分的是速度大小。"
  },
  {
    "id": "9.6-01",
    "topic": "9.6",
    "label": "Displacement Vector / 位移向量",
    "difficulty": "easy",
    "question": "For r(t)=⟨t²,3t⟩, find the displacement from t=1 to t=3.",
    "hint": "Compute r(3)−r(1).",
    "answer": "⟨8,6⟩",
    "explanation": "r(3)=⟨9,9⟩ and r(1)=⟨1,3⟩, so the displacement is ⟨8,6⟩. / 位移是终点减起点。"
  },
  {
    "id": "9.6-02",
    "topic": "9.6",
    "label": "Constant-Speed Distance / 恒定速率下的路程",
    "difficulty": "easy",
    "question": "A particle has velocity v=⟨3,4⟩ for 2≤t≤5. Find the total distance traveled.",
    "hint": "First find ‖v‖.",
    "answer": "15",
    "explanation": "Speed is 5 and the time interval has length 3, so distance=15. / 路程是速率的积分。"
  },
  {
    "id": "9.6-03",
    "topic": "9.6",
    "label": "Distance vs Displacement / 路程与位移",
    "difficulty": "medium",
    "question": "For r(t)=⟨cos t,sin t⟩ on [0,π], find displacement and total distance.",
    "hint": "Use endpoints for displacement and integrate speed for distance.",
    "answer": "Displacement ⟨−2,0⟩; distance π",
    "explanation": "r(π)−r(0)=⟨−2,0⟩ and ‖r′(t)‖=1. / 位移有方向，路程是标量。"
  },
  {
    "id": "9.6-04",
    "topic": "9.6",
    "label": "Speeding Test / 加速判定",
    "difficulty": "medium",
    "question": "At t=−3, a particle has v(t)=⟨t,2⟩ and a(t)=⟨1,0⟩. Is it speeding up or slowing down?",
    "hint": "Check v·a.",
    "answer": "Slowing down",
    "explanation": "v·a=t=−3&lt;0, so speed is decreasing. / 点积为负，速率减小。"
  },
  {
    "id": "9.6-05",
    "topic": "9.6",
    "label": "Collision / 碰撞",
    "difficulty": "medium",
    "question": "Do r₁(t)=⟨t,t²⟩ and r₂(t)=⟨2−t,2t−1⟩ collide for t≥0?",
    "hint": "Both coordinate equations must hold at the same t.",
    "answer": "Yes; at t=1 at (1,1)",
    "explanation": "The x-equation forces t=1, and both y-values are then 1. / 两个分量必须在同一时刻相等。"
  },
  {
    "id": "9.6-06",
    "topic": "9.6",
    "label": "First Return Time / 首次返回时刻",
    "difficulty": "challenge",
    "question": "For r(t)=⟨cos(2t),sin(2t)⟩, what is the first positive time at which the particle returns to r(0)?",
    "hint": "The angle 2t must increase by 2π.",
    "answer": "π",
    "explanation": "A full revolution requires 2t=2π, so t=π. / 两个坐标同时回到初值。"
  },
  {
    "id": "9.7-01",
    "topic": "9.7",
    "label": "Polar to Cartesian / 极坐标转直角坐标",
    "difficulty": "easy",
    "question": "Convert (r,θ)=(3,π/3) to Cartesian coordinates.",
    "hint": "Use x=r cosθ and y=r sinθ.",
    "answer": "(3/2,3√3/2)",
    "explanation": "x=3/2 and y=3√3/2. / 分别计算 r cosθ 与 r sinθ。"
  },
  {
    "id": "9.7-02",
    "topic": "9.7",
    "label": "Cartesian to Polar / 直角坐标转极坐标",
    "difficulty": "easy",
    "question": "Give a polar representation with r&gt;0 and 0≤θ&lt;2π for (−1,√3).",
    "hint": "Find r, then use the quadrant.",
    "answer": "(2,2π/3)",
    "explanation": "r=2 and the point is in Quadrant II, so θ=2π/3. / 必须检查象限。"
  },
  {
    "id": "9.7-03",
    "topic": "9.7",
    "label": "Negative Radius / 负半径",
    "difficulty": "medium",
    "question": "Rewrite (−2,π/6) using a positive radius and an angle in [0,2π).",
    "hint": "Add π to the angle when changing the sign of r.",
    "answer": "(2,7π/6)",
    "explanation": "(−r,θ)=(r,θ+π), so (−2,π/6)=(2,7π/6). / 负半径方向相反。"
  },
  {
    "id": "9.7-04",
    "topic": "9.7",
    "label": "Polar Slope / 极坐标斜率",
    "difficulty": "medium",
    "question": "For r=θ, find dy/dx at θ=π/2.",
    "hint": "Use the polar slope formula with r′=1.",
    "answer": "−2/π",
    "explanation": "The numerator is 1 and the denominator is −π/2, giving −2/π. / 分母是 dx/dθ。"
  },
  {
    "id": "9.7-05",
    "topic": "9.7",
    "label": "Vertical Tangent / 竖直切线",
    "difficulty": "medium",
    "question": "For r=2cosθ, classify the tangent at θ=0 and give its equation.",
    "hint": "Compute both dx/dθ and dy/dθ.",
    "answer": "Vertical tangent x=2",
    "explanation": "At θ=0, dx/dθ=0, dy/dθ=2, and the point is (2,0). / 分子非零，故为竖直切线。"
  },
  {
    "id": "9.7-06",
    "topic": "9.7",
    "label": "Polar Tangent Line / 极坐标切线方程",
    "difficulty": "challenge",
    "question": "Find the tangent line to r=1+cosθ at θ=π/2.",
    "hint": "Find the Cartesian point and dy/dx.",
    "answer": "y=x+1",
    "explanation": "The point is (0,1), dx/dθ=−1, and dy/dθ=−1, so the slope is 1. / 点与斜率都要计算。"
  },
  {
    "id": "9.8-01",
    "topic": "9.8",
    "label": "Polar Sector / 极坐标扇形",
    "difficulty": "easy",
    "question": "Find the area swept by r=4 for 0≤θ≤π/3.",
    "hint": "Use (1/2)∫r²dθ.",
    "answer": "8π/3",
    "explanation": "A=(1/2)(16)(π/3)=8π/3. / 不要漏掉二分之一。"
  },
  {
    "id": "9.8-02",
    "topic": "9.8",
    "label": "Polar Circle / 极坐标圆",
    "difficulty": "easy",
    "question": "Find the area enclosed by r=2sinθ.",
    "hint": "The circle is traced once for 0≤θ≤π.",
    "answer": "π",
    "explanation": "A=(1/2)∫₀^π4sin²θdθ=π. / 区间不能把圆描两遍。"
  },
  {
    "id": "9.8-03",
    "topic": "9.8",
    "label": "One Rose Petal / 一片玫瑰花瓣",
    "difficulty": "medium",
    "question": "Find the area of the petal of r=2cos(3θ) centered on the positive x-axis.",
    "hint": "Use the zero-to-zero interval [−π/6,π/6].",
    "answer": "π/3",
    "explanation": "A=(1/2)∫<sub>−π/6</sub><sup>π/6</sup>4cos²(3θ)dθ=π/3. / 先确定单瓣区间。"
  },
  {
    "id": "9.8-04",
    "topic": "9.8",
    "label": "Cardioid Area / 心形线面积",
    "difficulty": "medium",
    "question": "Find the total area enclosed by r=1+cosθ.",
    "hint": "The cardioid is traced once on [0,2π].",
    "answer": "3π/2",
    "explanation": "A=(1/2)∫₀^{2π}(1+cosθ)²dθ=3π/2. / 展开平方并积分。"
  },
  {
    "id": "9.8-05",
    "topic": "9.8",
    "label": "Specified Sweep / 指定扫过区域",
    "difficulty": "medium",
    "question": "Find the area swept by r=1+sinθ for 0≤θ≤π.",
    "hint": "Use the stated interval exactly.",
    "answer": "3π/4+2",
    "explanation": "(1/2)∫₀^π(1+2sinθ+sin²θ)dθ=3π/4+2. / 注意中间项不为零。"
  },
  {
    "id": "9.8-06",
    "topic": "9.8",
    "label": "Inner Loop / 内环",
    "difficulty": "challenge",
    "question": "Find the area of the inner loop of r=1−2cosθ.",
    "hint": "The inner loop is traced between the zeros θ=−π/3 and θ=π/3.",
    "answer": "π−3√3/2",
    "explanation": "A=(1/2)∫<sub>−π/3</sub><sup>π/3</sup>(1−2cosθ)²dθ=π−3√3/2. / 负半径仍用 r²，但必须选对区间。"
  },
  {
    "id": "9.9-01",
    "topic": "9.9",
    "label": "Constant Polar Annulus / 恒定半径之间的区域",
    "difficulty": "easy",
    "question": "Find the area between r=3 and r=1 for 0≤θ≤π/2.",
    "hint": "Use one-half times outer squared minus inner squared.",
    "answer": "2π",
    "explanation": "A=(1/2)(9−1)(π/2)=2π. / 外半径平方减内半径平方。"
  },
  {
    "id": "9.9-02",
    "topic": "9.9",
    "label": "Intersection Angles / 交角",
    "difficulty": "easy",
    "question": "Find the intersection angles in [−π/2,π/2] of r=2cosθ and r=1.",
    "hint": "Set the positive radii equal on this interval.",
    "answer": "θ=−π/3 and θ=π/3",
    "explanation": "2cosθ=1 gives cosθ=1/2. / 在指定区间内有两个对称解。"
  },
  {
    "id": "9.9-03",
    "topic": "9.9",
    "label": "Inside One, Outside Another / 一内一外",
    "difficulty": "medium",
    "question": "Find the area inside r=2cosθ and outside r=1.",
    "hint": "Use θ∈[−π/3,π/3] and test θ=0.",
    "answer": "π/3+√3/2",
    "explanation": "A=(1/2)∫<sub>−π/3</sub><sup>π/3</sup>(4cos²θ−1)dθ=π/3+√3/2. / 先确认外内曲线。"
  },
  {
    "id": "9.9-04",
    "topic": "9.9",
    "label": "Specified Sector / 指定扇区",
    "difficulty": "medium",
    "question": "On 0≤θ≤π/3, find the area inside r=2 and outside r=2cosθ.",
    "hint": "The constant radius is outer on the stated interval.",
    "answer": "π/3−√3/4",
    "explanation": "A=(1/2)∫₀^{π/3}(4−4cos²θ)dθ=π/3−√3/4. / 分别平方后相减。"
  },
  {
    "id": "9.9-05",
    "topic": "9.9",
    "label": "Changing Radial Order / 径向次序变化",
    "difficulty": "medium",
    "question": "Find the total area between r=1 and r=2sinθ over 0≤θ≤π/2, counting the radial gap on every ray.",
    "hint": "The curves switch order at θ=π/6, so split the integral.",
    "answer": "π/12+√3/2",
    "explanation": "Use (1/2)[∫₀^{π/6}(1−4sin²θ)dθ+∫<sub>π/6</sub><sup>π/2</sup>(4sin²θ−1)dθ]. / 外内次序改变时必须分段。"
  },
  {
    "id": "9.9-06",
    "topic": "9.9",
    "label": "Negative-Radius Intersection Trap / 负半径交点陷阱",
    "difficulty": "challenge",
    "question": "Why does solving r₁(θ)=r₂(θ) fail to reveal that r=1 and r=−1 describe the same geometric circle?",
    "hint": "Recall that (r,θ)=(−r,θ+π).",
    "answer": "Polar coordinates are nonunique; opposite signed radii at angles differing by π represent the same points.",
    "explanation": "The formulas never have equal radii at the same θ, yet (1,θ)=(−1,θ+π). / 极坐标交点必须考虑负半径的等价表示。"
  }
]);
