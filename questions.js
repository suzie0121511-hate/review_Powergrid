// ⚡ 你的专属错题本数据库（数据与网页控制彻底分离）
const quizData = {
  // 1. 电路板块
  "circuit": [
    {
      id: 1,
      type: "单选",
      title: "感性设备功率计算",
      image: "circuit-01.png",
      answer: "C",
      analysis: "1. 根据阻抗三角形，电抗 $X = \\sqrt{|Z|^2 - R^2} = \\sqrt{50^2 - 30^2} = 40\\,\\Omega$。因为设备为感性，所以 $X = X_L = 40\\,\\Omega$。<br>2. “该设备与电源交换的功率”指的是**无功功率 $Q$**：$$Q = I^2 X = 3^2 \\times 40 = 360\\text{ var}$$"
    },
    {
      id: 2,
      type: "单选",
      title: "等效电感计算（互感电路）",
      image: "circuit-02.png",
      answer: "D",
      analysis: "1. 设电流从 $a$ 端流入，流经 $L_1$ 时从非同名端（下端）流出，接着流入 $L_2$ 的同名端（下端）。<br>2. 由于电流进出同名端的状态相反（一进一出），此串联方式为**反向串联（去磁）**。<br>3. 等效电感公式：$$L_{eq} = L_1 + L_2 - 2M = 10 + 4 - 2 \\times 2 = 10\\text{ H}$$"
    },
    {
      id: 3,
      type: "单选",
      title: "戴维南等效电路（含互感）",
      image: "circuit-03.png",
      answer: "C",
      analysis: "1. **开路电压 $U_{oc}$**：端口 $a-b$ 开路时，右侧支路电流 $I_2 = 0$。左侧回路电流 $I_1 = \\frac{15\\angle 0^\\circ}{j14}\\text{ A}$。通过电感耦合在右侧产生的感应电压为 $U_M = \\pm j2 \\cdot I_1$。<br>2. **等效阻抗 $Z_{eq}$**：将电压源短路，在 $a-b$ 端外加电压 $U$ 求输入电流 $I$。列写 KVL 可得等效阻抗。"
    },
    {
      id: 4,
      type: "单选",
      title: "LC 串联谐振电路",
      image: "circuit-04.png",
      answer: "B",
      analysis: "1. 当 $X_L = X_C$ 时，RLC 串联电路发生**串联谐振**。<br>2. 谐振时，电感电压 $\\dot{U}_L$ 与电容电压 $\\dot{U}_C$ 大小相等、相位相反，即 $\\dot{U}_L = -\\dot{U}_C$。<br>3. 题目中的 $U$ 是 L 与 C 串联端口的总电压：$$U = U_L + U_C = 0$$"
    },
    {
      id: 5,
      type: "单选",
      title: "戴维南定理应用（求功率）",
      image: "circuit-05.png",
      answer: "B",
      analysis: "1. **求 AB 开路电压 $U_{oc}$**：<br>&bull; A 点电位：$V_A = 15 \\times \\frac{6}{3+6} = 10\\text{ V}$<br>&bull; B 点电位：$V_B = 20 \\times \\frac{2}{2+2} = 10\\text{ V}$<br>&bull; 开路电压：$U_{oc} = V_A - V_B = 10 - 10 = 0\\text{ V}$<br>2. **接入 $8\\Omega$ 电阻时**：<br>&bull; 既然开路电压为 0V，接入电阻后该支路电流依然为 0。因此电阻功率为 $0\\text{ W}$。<br>&bull; 支路无电流通过，原左、右两个独立回路运行状态未变，各电源输出电流未变。因此，两个电源发出的功率**保持不变**。"
    }
  ],
  "power-system": [],
  "machines": [],
  "power-electronics": [],
  "high-voltage": [],
  "protection": [],
  "equipment": [],
  "general-aptitude": []
};
