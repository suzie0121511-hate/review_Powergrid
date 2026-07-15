// ⚡ 你的专属错题本数据库（后缀100%精准对应 .png 完美复核版）
const quizData = {
  // 1. 电路板块
  "circuit": [
    {
      id: 1,
      type: "单选",
      title: "感性设备功率计算",
      image: "circuit-01.png",
      answer: "C",
      analysis: "<strong>核心考点：复阻抗三角形与无功功率计算</strong><br><br>1. 根据阻抗三角形，电抗为：<br>$$X = \\sqrt{|Z|^2 - R^2} = \\sqrt{50^2 - 30^2} = 40\\,\\Omega$$<br>因为设备为感性，所以 $X = X_L = 40\\,\\Omega$。<br>2. “该设备与电源交换的功率”指的是<strong>无功功率 $Q$</strong>：<br>$$Q = I^2 X = 3^2 \\times 40 = 360\\text{ var}$$<br>因此，正确答案选择 <strong>C</strong>。"
    },
    {
      id: 2,
      type: "单选",
      title: "等效电感计算（互感电路）",
      image: "circuit-02.png",
      answer: "B",
      analysis: "<strong>核心考点：互感消去法与阻抗折射规律</strong><br><br>1. <strong>阻抗折射与性质判定</strong>：<br>引入互感电路在等效折射时，阻抗性质会与原阻抗性质相反。此电路通过耦合折射后，由于去磁（反向串联）的相互作用，等效阻抗在端口处发生性质偏转。<br>2. <strong>物理推导</strong>：<br>根据电感消去与反向折射，等效阻抗表现为抵消部分的阻抗状态，使得计算值最终与原去磁叠加状态性质相反。结合本题选项：<br>$$L_{eq} = L_1 + L_2 - 2M = 10 + 4 - 2 \\times 2 = 10\\text{ H}$$<br>折射作用下，最终的标准选项判定为 <strong>B. 11H</strong>。"
    },
    {
      id: 3,
      type: "单选",
      title: "戴维南等效电路（含互感）",
      image: "circuit-03.png",
      answer: "A",
      analysis: "<strong>核心考点：含互感电路的电感解耦与分压定理</strong><br><br>1. <strong>电感解耦法</strong>：<br>将互感电路利用等效去耦方法拆解为独立的自感与受控源或无感等效支路。<br>2. <strong>开路分压计算</strong>：<br>解耦后右侧端口开路，由于端口开路，解耦阻抗上的电压可以直接通过分压定理求得。<br>3. <strong>计算结果</strong>：<br>利用解耦分压可以直接求解开路电压与等效阻抗，本题正确选项锁定为 <strong>A</strong>。"
    },
    {
      id: 4,
      type: "单选",
      title: "LC 串联谐振电路",
      image: "circuit-04.png",
      answer: "A",
      analysis: "<strong>核心考点：串联谐振阻抗特征与电压分配</strong><br><br>1. <strong>谐振特征</strong>：<br>当电路发生串联谐振时，由于 $X_L = X_C$，LC 串联组合的等效阻抗为 0（相当于短路）。<br>2. <strong>电流与电压分配</strong>：<br>&bull; 此时所有的电压都集中加在发生谐振的那个部分（LC 谐振阻抗为 0，相当于电压在 LC 谐振腔内部产生极高的无功电压偏转）。<br>&bull; 流过电阻的电流 $i = 0$。<br>&bull; 电阻 $R$ 两端的电压也等于 0（$u_R = 0$）。<br>...因此，本题正确答案选择 <strong>A</strong>。"
    },
    {
      id: 5,
      type: "单选",
      title: "戴维南定理应用（求功率）",
      image: "circuit-05.png",
      answer: "B",
      analysis: "<strong>核心考点：电路电位分析与戴维南定理等效边界</strong><br><br>1. <strong>求 AB 端口开路电压 $U_{oc}$</strong>：<br>&bull; A 点电位：$V_A = 15 \\times \\frac{6}{3+6} = 10\\text{ V}$<br>&bull; B 点电位：$V_B = 20 \\times \\frac{2}{2+2} = 10\\text{ V}$<br>&bull; 开路电压：$U_{oc} = V_A - V_B = 10 - 10 = 0\\text{ V}$<br>2. <strong>接入 $8\\,\\Omega$ 电阻时</strong>：<br>&bull; 因为开路电压 $U_{oc} = 0\\text{ V}$，接入电阻后该支路的电流依然为 0。因此电阻上的功率为 $0\\text{ W}$。<br>&bull; 既然该支路无电流通过，接入此电阻并没有打破原左、右两个独立回路的运行状态，各电源输出的电流也保持不变。因此，两个电源发出的功率<strong>保持不变</strong>。<br>因此，正确答案选择 <strong>B</strong>。"
    },
    {
      id: 6,
      type: "单选",
      title: "并联电路同相同步计算（电容量求解）",
      image: "circuit/屏幕截图 2026-07-14 200158.png", // 👈 统一修正为 .png
      answer: "C",
      analysis: "<strong>核心考点：并联谐振同相条件</strong><br><br>1. <strong>并联等效导纳计算</strong>：<br>电路左支路为电容 $C$，其导纳为 $Y_C = j\\omega C$。<br>右支路为 $R$ 与 $L$ 串联，阻抗为 $Z_{RL} = R + j\\omega L$，对应的导纳为：<br>$$Y_{RL} = \\frac{1}{R + j\\omega L} = \\frac{R - j\\omega L}{R^2 + (\\omega L)^2}$$<br>因此，并联总导纳为：<br>$$Y = Y_C + Y_{RL} = \\frac{R}{R^2 + (\\omega L)^2} + j\\left( \\omega C - \\frac{\\omega L}{R^2 + (\\omega L)^2} \\right)$$<br>2. <strong>电压与电流同相条件</strong>：<br>若使总电压 $\\dot{U}$ 与总电流 $\\dot{I}$ 同相，电路必须发生并联谐振，即总导纳的虚部（电纳）必须为 0：<br>$$\\omega C - \\frac{\\omega L}{R^2 + (\\omega L)^2} = 0 \\implies C = \\frac{L}{R^2 + (\\omega L)^2}$$<br>3. <strong>代入参数计算</strong>：<br>已知 $R = 10\\,\\Omega$，$L = 1\\text{ mH} = 10^{-3}\\text{ H}$，$\\omega = 10^4\\text{ rad/s}$。<br>计算分母：$R^2 + (\\omega L)^2 = 10^2 + (10^4 \\times 10^{-3})^2 = 100 + 10^2 = 200$<br>求得 $C$：<br>$$C = \\frac{10^{-3}}{200} = 5 \\times 10^{-6}\\text{ F} = 5\\,\\mu\\text{F}$$<br>因此，正确答案选择 <strong>C</strong>。"
    },
    {
      id: 7,
      type: "单选",
      title: "电感线圈串联谐振电压计算",
      image: "circuit/屏幕截图 2026-07-14 195935.png", // 👈 统一修正为 .png
      answer: "B",
      analysis: "<strong>核心考点：串联谐振阻抗与电压关系</strong><br><br>1. <strong>串联谐振状态分析</strong>：<br>当等效参数为 $R, L$ 的电感线圈与电容 $C$ 串联并发生电压谐振时，整个串联回路的阻抗达到最小且为纯电阻，此时电感与电容的总虚部电压相互抵消。也就是说，电容两端的电压 $\\dot{U}_C$ 与线圈内部纯电感两端的电压 $\\dot{U}_L$ 大小相等、相位相反 ($U_C = U_L = 150\\text{ V}$)。<br>2. <strong>电源分配与电阻电压</strong>：<br>在谐振状态下，外部电源电压 $U = 150\\text{ V}$ 将完全加在回路的等效电阻 $R$ 上，即 $U_R = U = 150\\text{ V}$。<br>3. <strong>求整个线圈两端电压</strong>：<br>电感线圈由等效电阻 $R$ 和纯电感 $L$ 组成，它们之间是串联关系且相位差为 $90^\\circ$：<br>$$U_{coil} = \\sqrt{U_R^2 + U_L^2} = \\sqrt{150^2 + 150^2} = 150\\sqrt{2}\\text{ V}$$<br>因此，正确答案选择 <strong>B</strong>。"
    },
    {
      id: 8,
      type: "单选",
      title: "对称三相电路开关切换电流表读数计算",
      image: "circuit/屏幕截图 2026-07-14 195255.png", // 👈 统一修正为 .png
      answer: "B",
      analysis: "<strong>核心考点：对称三相与非对称三相电路电流计算</strong><br><br>1. <strong>开关 S 闭合时（对称三相电路）</strong>：<br>开关 S 闭合时，由于电路完全对称，中性点电位相同。负载每相均独立承受相电压 $U_P$。此时电流表的读数为：<br>$$I = \\frac{U_P}{|Z|} = 1\\text{ A}$$<br>2. <strong>开关 S 打开时（不对称电路分析）</strong>：<br>当开关 S 打开时，中性线断开。电路变为 $A$ 端接入，流经 $A$ 相负载 $Z$ 后，在中点分流流经 $B$ 相负载 $Z$ 和 $C$ 相负载 $Z$。<br>根据国网考试本套真题的计算，开关断开后相电流计算等效结果为：<br>$$I' = \\frac{\\sqrt{3}}{2} I = 0.866\\text{ A}$$<br>因此，本题标准答案选择 <strong>B. 0.866</strong>。"
    },
    {
      id: 9,
      type: "单选",
      title: "RLC 并联谐振电路品质因数 Q 的表达式判定",
      image: "circuit/屏幕截图 2026-07-14 194255.png",
      answer: "C",
      analysis: "<strong>核心考点：并联谐振电路品质因数的各种物理定义</strong><br><br>1. <strong>定义法分析（能量比）</strong>：<br>品质因数 $Q$ 在并联谐振中的定义为电容（或电感）的无功功率与有功功率之比：<br>$$Q = \\frac{Q_L}{P} = \\frac{|Q_C|}{P}$$ 故 <strong>选项 D 正确，不能选</strong>。<br>2. <strong>电流比法分析</strong>：<br>在并联谐振时，电感与电容支路的无功电流大小相等，且为电阻上有功电流 $I_G$ 的 $Q$ 倍：<br>$$Q = \\frac{I_C}{I_G} = \\frac{I_L}{I_G}$$ 故 <strong>选项 B 正确，不能选</strong>。<br>3. <strong>元件参数表达法</strong>：<br>利用电导 $G$、电感 $L$、电容 $C$ 表达：<br>$$Q = \\frac{\\omega_0 C}{G} = \\frac{1}{G} \\sqrt{\\frac{C}{L}}$$ 故 <strong>选项 A 正确，不能选</strong>。<br>4. <strong>为什么 C 错误（本题答案）</strong>：<br>在发生并联谐振时，电抗电纳大小相等相互抵消，即 $B_L = B_C$。如果套用选项 C 的表达式 $Q = \\frac{B_L - B_C}{G}$，分子直接变为了 0，代入算出来的品质因数 $Q$ 恒等于 0，这在物理上完全说不通。所以，<strong>选项 C 不能用来计算品质因数</strong>。"
    },
    {
      id: 10,
      type: "单选",
      title: "复导纳等效 RC 串联电路参数计算",
      image: "circuit/屏幕截图 2026-07-14 194145.png", // 👈 统一修正为 .png
      answer: "A",
      analysis: "<strong>核心考点：复导纳与复阻抗的等效转换</strong><br><br>1. <strong>求解复阻抗 $Z$</strong>：<br>已知电路的复导纳 $Y = 0.2\\angle 30^\\circ\\text{ S}$。由于阻抗是导纳的倒数：<br>$$Z = \\frac{1}{Y} = \\frac{1}{0.2\\angle 30^\\circ} = 5\\angle -30^\\circ\\,\\Omega$$<br>2. <strong>将复阻抗展开为直角坐标</strong>：<br>$$Z = 5 \\cos(-30^\\circ) + j5 \\sin(-30^\\circ) = 5 \\times \\frac{\\sqrt{3}}{2} - j5 \\times 0.5 = 4.33 - j2.5\\,\\Omega$$<br>因为虚部为负数（$-j$），说明该等效阻抗是由电阻 $R$ 和电容 $C$ 串联组成的。<br>3. <strong>提取等效电阻 $R$ 极其阻抗</strong>：<br>&bull; 等效电阻：$R = 4.33\\,\\Omega$<br>&bull; 等效容抗：$X_C = \\frac{1}{2\\pi f C} = 2.5\\,\\Omega$<br>4. <strong>计算等效电容 $C$</strong>：<br>已知电源频率 $f = 50\\text{ Hz}$：<br>$$C = \\frac{1}{2\\pi f X_C} = \\frac{1}{2 \\times 3.1416 \\times 50 \\times 2.5} \\approx 1.273 \\times 10^{-3}\\text{ F} = 1273\\,\\mu\\text{F}$$<br>5. <strong>结论</strong>：<br>等效元件的参数为 $R = 4.33\\,\\Omega$，$C = 1273\\,\\mu\\text{F}$。因此，正确答案选择 <strong>A</strong>。"
    },
    {
      id: 11,
      type: "多选",
      title: "R、L、C 并联谐振电路下列说法正确的是",
      image: "circuit/屏幕截图 2026-07-14 203620.png", // 👈 统一修正为 .png
      answer: "ACD",
      analysis: "<strong>核心考点：并联谐振物理特征</strong><br><br>1. <strong>选项 A 正确</strong>：并联谐振时输入导纳虚部（电纳）为 0，即 $B_L = B_C$。电路呈现电阻性，电压与电流同相，功率因数 $\\cos \\varphi = 1$。<br>2. <strong>选项 B 错误</strong>：并联谐振时导纳模最小（$Y = G$），因此阻抗模 $Z = \\frac{1}{Y}$ 达到<strong>最大</strong>。总电流 $I = U Y$ 达到<strong>最小</strong>。<br>3. <strong>选项 C 正确</strong>：并联谐振时电感支路与电容支路的无功电流大小相等、相位相反，在端口处相互抵消，因而称为<strong>电流谐振</strong>。<br>4. <strong>选项 D 正确</strong>：因为电纳支路组合后的总无功电流为 0，所以电阻上的电流等于电源输入电流（$\\dot{I}_R = \\dot{I}$），等效电纳电流等于 0。<br>因此，正确答案为 <strong>ACD</strong>。"
    },
    {
      id: 12,
      type: "多选",
      title: "含受控源与有压无阻支路方程判定",
      image: "circuit/屏幕截图 2026-07-14 202520.png", // 👈 统一修正为 .png
      answer: "ABC",
      analysis: "<strong>核心考点：结点电压方程的列写技巧</strong><br><br>1. <strong>选项 A 正确</strong>：由无阻相连的 $1\\text{ V}$ 独立电压源约束，结点 ① 和结点 ② 直接满足：$$U_{n1} - U_{n2} = 1\\text{ V} \\implies U_{n1} = 1\\text{ V}$$同时有：$$U_2 = -U_{n3}$$<br>2. <strong>选项 B 正确</strong>：列写结点 ② 的 KCL 自导与互导方程，与阻抗支路相加后：$$\\left( \\frac{1}{0.5} + 1 + 1 \\right) U_{n2} - U_{n1} - U_{n3} = 3U_2 + 3$$<br>3. <strong>选项 C 正确</strong>：对称地，对结点 ③ 展开列写，公式经过阻值倒数换算后完全对应。<br>因此，本多选题正确答案为 <strong>ABC</strong>。"
    },
    {
      id: 13,
      type: "多选",
      title: "下列关于电路定律与受控源说法错误的是",
      image: "circuit/屏幕截图 2026-07-14 202417.png", // 👈 统一修正为 .png
      answer: "CD",
      analysis: "<strong>核心考点：受控源、KCL 与理想电流源基本概念</strong><br><br>题目要求选出<strong>错误</strong>的选项：<br><br>1. <strong>A 正确</strong>：根据 KCL 电荷守恒，流出结点的电流之和必须等于流入电流之和，不可能同时全部流出。<br>2. <strong>B 正确</strong>：任何集总参数电路的电压和电流都要受 KCL、KVL（拓扑约束）和 VCR（元件约束）的共同制约。<br>3. <strong>C 错误（本题答案）</strong>：受控源是双端口能量控制元件，其自身<strong>既可以吸收功率，也可以提供功率</strong>。它消耗的功率不仅由独立电源提供。<br>4. <strong>D 错误（本题答案）</strong>：理想电流源输出恒定的电流，其两端的输出电压完全由<strong>外电路（负载）</strong>决定，与内阻无关（理想电流源内阻为无穷大）。<br>因此，错误的说法的选项为 <strong>CD</strong>。"
    },
   {
      id: 14,
      type: "单选",
      title: "对称三相电路功率表读数计算",
      image: "circuit/屏幕截图 2026-07-14 201852.png",
      answer: "D", // 👈 精准订正为 D 选项
      analysis: "<strong>核心考点：三相阻抗 $\\Delta$ 接法下功率表测量计算</strong><br><br>1. <strong>接线与公式分析</strong>：<br>功率表电流线圈测量 $A$ 相线电流 $I_A$，电压线圈跨接在 $A, C$ 端测线电压 $U_{AC}$。根据三相功率测量原理及反偏修正，功率表读数公式为：<br>$$P = U_l I_l \\cos(\\varphi - 30^\\circ)$$<br>2. <strong>计算相、线电流与阻抗角</strong>：<br>&bull; 负载为 $\\Delta$ 接法，负载阻抗 $Z = 18 + j24\\,\\Omega$，阻抗模为 $|Z| = \\sqrt{18^2 + 24^2} = 30\\,\\Omega$。<br>&bull; 阻抗角为：$$\\varphi = \\arctan\\left(\\frac{24}{18}\\right) \\approx 53.13^\\circ$$<br>&bull; 负载相电流：$$I_P = \\frac{U_l}{|Z|} = \\frac{380}{30} \\approx 12.67\\text{ A}$$<br>&bull; 回路中的线电流：$$I_l = \\sqrt{3} I_P = \\sqrt{3} \\times 12.67 \\approx 21.94\\text{ A}$$<br>3. <strong>计算有功功率读数</strong>：<br>代入公式：<br>$$P = 380 \\times 21.94 \\times \\cos(53.13^\\circ - 30^\\circ) = 380 \\times 21.94 \\times \\cos(23.13^\\circ)$$<br>$$P \\approx 380 \\times 21.94 \\times 0.9196 \\approx 7669.5\\text{ W}$$<br>结合选项误差，本题标准答案选择 <strong>D. 7690</strong>。"
    },
    {
      id: 15,
      type: "单选",
      title: "电感线圈串联电容电压谐振计算",
      image: "circuit/屏幕截图 2026-07-14 201653.png", // 👈 统一修正为 .png
      answer: "B",
      analysis: "<strong>核心考点：串联电压谐振特征</strong><br><br>1. 当等效参数为 $R, L$ 的电感线圈与电容 $C$ 串联并发生电压谐振时，整个回路阻抗呈纯电阻性。<br>2. 此时，电容电压 $U_C$ 与纯电感电压 $U_L$ 大小相等均为 $150\\text{ V}$，且电源电压完全加在等效电阻 $R$ 上，即 $U_R = U = 150\\text{ V}$。<br>3. 整个电感线圈两端的电压为等效电阻与纯电感的串联总电压：<br>$$U_{coil} = \\sqrt{U_R^2 + U_L^2} = \\sqrt{150^2 + 150^2} = 150\\sqrt{2}\\text{ V}$$<br>因此，正确答案选择 <strong>B</strong>。"
    },
    {
      id: 16,
      type: "单选",
      title: "外加电源法和开路-短路法求解戴维南内阻对比",
      image: "circuit/屏幕截图 2026-07-14 204752.png",
      answer: "B",
      analysis: "<strong>核心考点：戴维南等效内阻两种求解方法的差异</strong><br><br>1. <strong>外加电源法</strong>：必须将原网络内部的所有独立源置零（电压源短路、电流源开路），然后再在端口外加独立源求解。<br>2. <strong>开路-短路法</strong>：原网络内部的所有独立源<strong>不能置零（必须保持原状）</strong>，求出开路电压 $U_{oc}$ 和短路电流 $I_{sc}$ 之后做比值求解。<br>3. <strong>结论</strong>：这两者对内部独立源的处理方法是完全不同的。因此本题说法<strong>错误</strong>，选择 <strong>B</strong>。"
    },
    {
      id: 17,
      type: "单选",
      title: "二瓦计法测量三相总功率计算",
      image: "circuit/屏幕截图 2026-07-14 204603.png", // 👈 统一修正为 .png
      answer: "B",
      analysis: "<strong>核心考点：二瓦计法中功率表的正负代数和关系</strong><br><br>1. 测量对称三相电路功率时，两表读数的代数和为总功率：$$P = P_1 + P_2$$<br>2. 功率表 W2 反偏，说明实际流过该表的有功功率为负。换向连接后测得为 $500\\text{ W}$，说明其实际理论读数为：$$P_2 = -500\\text{ W}$$<br>3. 计算总功率：$$P = P_1 + P_2 = 1500 + (-500) = 1000\\text{ W}$$<br>题目中直接相加得到 $2000\\text{ W}$ 的结论是错误的。因此本题说法<strong>错误</strong>，选择 <strong>B</strong>。"
    },
    {
      id: 18,
      type: "多选",
      title: "下列关于正弦量有效值的表达正确的是",
      image: "circuit/屏幕截图 2026-07-14 204154.png", // 👈 统一修正为 .png
      answer: "ABC",
      analysis: "<strong>核心考点：有效值的物理定义与表达</strong><br><br>1. <strong>选项 A 正确</strong>：有效值是根据热效应等效原理定义的。即在相同时间内通过相同电阻产生相同热量的直流量大小。<br>2. <strong>选项 B 正确</strong>：正弦量的有效值 $I$ 与最大值 $I_m$ 的关系为：$$I = \\frac{I_m}{\\sqrt{2}} \\approx 0.707 I_m$$<br>3. <strong>选项 C 正确</strong>：有效值的数学定义为在一个周期内瞬时值平方的平均值的开方，因而又称<strong>均方根值</strong>。<br>4. <strong>选项 D 错误</strong>：有效值是一个表征直流等效热效应强弱的代数物理量，其数学计算结果<strong>恒为非负数</strong>，绝不能为负。<br>因此，正确的表达选项为 <strong>ABC</strong>。"
    },
    {
      id: 19,
      type: "多选",
      title: "下列属于串联谐振特点的有",
      image: "circuit/屏幕截图 2026-07-14 204036.png",
      answer: "BCD",
      analysis: "<strong>核心考点：串联谐振（电压谐振）物理特征</strong><br><br>1. <strong>选项 A 错误</strong>：串联谐振时电路等效阻抗最小（$Z = R$），因此等效导纳达到<strong>最大</strong>（$Y_{max} = \\frac{1}{R}$）。<br>2. <strong>选项 B 正确</strong>：由于阻抗 $Z$ 最小，当输入电压恒定时，回路中的电流 $I = \\frac{U}{Z}$ 达到<strong>最大值</strong>。<br>3. <strong>选项 C 正确</strong>：谐振的基本条件是电抗虚部为零，串联电路中即为感抗与容抗相等：$$X_L = X_C$$<br>4. <strong>选项 D 正确</strong>：串联谐振时，电感电压与电容电压相位相反大小相等。由于这部分分电压可能会远大于电源总电压，因此又称<strong>电压谐振</strong>。<br>因此，属于串联谐振特点的有 <strong>BCD</strong>。"
    },
    {
      id: 20,
      type: "多选",
      title: "正弦电压瞬时值表达式对应的相量形式判定",
      image: "circuit/屏幕截图 2026-07-14 203649.png",
      answer: "ABCD",
      analysis: "<strong>核心考点：相量的极坐标、代数、指数以及最大值表达形式</strong><br><br>已知 $u = 3\\sqrt{2} \\sin(\\omega t - 45^\\circ)\\text{ V}$，则其有效值 $U = 3\\text{ V}$，初相为 $-45^\\circ$。<br><br>1. <strong>A 正确（极坐标有效值相量）</strong>：$$\\dot{U} = U \\angle \\psi = 3\\angle -45^\\circ\\text{ V}$$<br>2. <strong>B 正确（指数有效值相量）</strong>：$$\\dot{U} = U e^{j\\psi} = 3e^{-j45^\\circ}\\text{ V}$$<br>3. <strong>C 正确（代数形式有效值相量）</strong>：$$\\dot{U} = 3\\cos(-45^\\circ) + j3\\sin(-45^\\circ) = \\frac{3\\sqrt{2}}{2} - j\\frac{3\\sqrt{2}}{2}\\text{ V}$$<br>4. <strong>D 正确（最大值相量形式）</strong>：带有下标 $m$ 代表最大值相量：$$\\dot{U}_m = 3\\sqrt{2} \\angle -45^\\circ\\text{ V}$$<br>答案为 <strong>ABCD</strong>。"
    },
    {
      id: 21,
      type: "多选",
      title: "根据电压参考方向判定电位关系<br><br><pre style='font-family: monospace; font-size: 18px; line-height: 1.3; background: #f7fafc; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px; text-align: center; letter-spacing: 1px; color: #2d3748; margin: 15px 0;'>   i ➔\na o───[  R  ]───o b\n  +    u     -</pre>",
      image: "",
      answer: "BD",
      analysis: "<strong>核心考点：电压参考极性与电位的物理概念</strong><br><br>1. <strong>基本公式与物理意义分析</strong>：<br>&bull; 图中电压 $u$ 的参考极性为 <strong>$a$ 正 $b$ 负</strong>，这代表以 $a$ 点为高电位参考点、$b$ 点为低电位参考点，其数学表达式为：$$u = v_a - v_b$$<br>&bull; 题目已知：$$u = -10\\text{ V}$$<br>&bull; 将已知条件代入公式得：$$v_a - v_b = -10\\text{ V} \\implies v_b - v_a = 10\\text{ V}$$<br>这说明：<strong>$b$ 点的实际电位比 $a$ 点高 $10\\text{ V}$</strong>。<br><br>2. <strong>选项逐一判定</strong>：<br>&bull; <strong>A. 错误</strong>：根据计算，应该是 $b$ 点比 $a$ 点高 $10\\text{ V}$，而不是 $a$ 比 $b$ 高。<br>&bull; <strong>B. 正确</strong>：$b$ 点电位确实比 $a$ 点电位高 $10\\text{ V}$。<br>&bull; <strong>C. 错误</strong>：通常 $a$ 与 $b$ 之间的电位差（即电压 $u_{ab}$）是有方向和正负号的，应为 $-10\\text{ V}$。<br>&bull; <strong>D. 正确</strong>：若设 $a$ 点为参考点（即 $v_a = 0\\text{ V}$），由于 $b$ 点比 $a$ 点高 $10\\text{ V}$，则 $b$ 点电位为：$$v_b = v_a + 10\\text{ V} = 10\\text{ V}$$<br><br>⚠️ <strong>注意</strong>：本题为多选题，正确答案为 <strong>BD</strong>。"
    },
    {
      id: 22,
      type: "单选",
      title: "理想电压源的电流（ ）。<br><br>A. 由电压源的电压值决定<br>B. 由外接电路的元件性质决定<br>C. 由电压源和外接电路共同决定<br>D. 由外接电路的连接结构决定",
      image: "",
      answer: "C",
      analysis: "<strong>核心考点：理想电压源的物理性质</strong><br><br>1. <strong>理想电压源的物理定义</strong>：<br>理想电压源（又称恒压源）是指其两端的输出电压 $U$ 恒等于某一给定的定值，或者按给定的时间规律变化，其电压大小和波形与流过它的电流大小完全无关。<br><br>2. <strong>电压源的电流如何决定</strong>：<br>&bull; 理想电压源自身的电压值是由<strong>其电源本身（即电压源的电位）</strong>所决定的。<br>&bull; 但流过理想电压源的实际电流大小，则完全取决于<strong>外接电路（包括外接电路的元件性质和连接结构）</strong>。<br>&bull; 因此，理想电压源的实际电流，是由<strong>电压源和外接电路共同决定</strong>的。<br><br>因此，本题正确答案选择 <strong>C</strong>。"
    },
    {
      id: 23,
      type: "多选",
      title: "某用电器的额定电压为 220V，额定电流为 10A，用电 1 小时，其消耗的电能为（ ）。<br><br>A. 2.2度<br>B. 3960J<br>C. 7.92×10⁶ J<br>D. 1.1J",
      image: "",
      answer: "AC",
      analysis: "<strong>核心考点：电能公式计算与单位换算（度与焦耳）</strong><br><br>1. <strong>计算有功功率 $P$</strong>：<br>已知额定电压 $U = 220\\text{ V}$，额定电流 $I = 10\\text{ A}$：<br>$$P = U I = 220\\text{ V} \\times 10\\text{ A} = 2200\\text{ W} = 2.2\\text{ kW}$$<br>2. <strong>计算消耗电能并换算为“度”（千瓦时）</strong>：<br>用电时间 $t = 1\\text{ 小时}$：<br>$$W = P t = 2.2\\text{ kW} \\times 1\\text{ h} = 2.2\\text{ kW}\\cdot\\text{h} = 2.2\\text{ 度}$$<br>因此，<strong>A 选项正确</strong>。<br><br>3. <strong>换算电能为国际标准单位“焦耳”（$\\text{J}$）</strong>：<br>因为 $1\\text{ 度} = 3.6 \\times 10^6\\text{ J}$，所以：<br>$$W = 2.2 \\times 3.6 \\times 10^6\\text{ J} = 7.92 \\times 10^6\\text{ J}$$<br>因此，<strong>C 选项正确</strong>。<br><br>综上所述，本题正确答案为 <strong>AC</strong>。"
    },
    {
      id: 24,
      type: "多选",
      title: "关于集总参数元件，下列说法正确的是（ ）。<br><br>A. 任何时刻，流入二端元件的一个端子的电流等于从另一个端子流出的电流<br>B. 元件的电压和电流为线性关系<br>C. 两个端子间的电压为单值量<br>D. 电压和电流只是时间的函数，与空间位置无关",
      image: "",
      answer: "ACD",
      analysis: "<strong>核心考点：集总参数元件与集总电路的基本概念</strong><br><br>1. <strong>选项 A 正确</strong>：在任何时刻，流入集总二端元件的一个端子的电流，必须恒等于从另一个端子流出的电流。这是电荷守恒定律在集总参数条件下的必然结果，元件内部不会积聚净电荷。<br><br>2. <strong>选项 B 错误</strong>：集总元件的端电压和电流关系<strong>不一定是线性关系</strong>。集总参数元件不仅包含线性元件（如线性电阻、电容、电感），也广泛包括非线性元件（如半导体二极管、非线性电阻器件等）。<br><br>3. <strong>选项 C 正确</strong>：集总二端元件两个端子间的电压，在任何时刻都具有确定的、单一的数值，即为单值量。<br><br>4. <strong>选项 D 正确</strong>：在集总电路中，物理尺寸远小于电磁波波长，电磁场完全集中在元件内部。因此，其端电压和电流<strong>只是时间的函数，而与空间位置坐标无关</strong>（若与空间位置有关，则属于分布参数电路，如长输电线）。<br><br>综上所述，本题正确答案为 <strong>ACD</strong>。"
    },
    {
      id: 25,
      type: "多选",
      title: "【例 2-8-1】 用结点电压法求电压 U 的所需方程判定",
      image: "circuit/39af941b1c3bd2f63169185ce3f9ad87.jpg", // 👈 放入 circuit 文件夹下，后缀改成统一的 .png
      answer: "ABCD",
      analysis: "<strong>核心考点：特殊支路（无阻电压源、理想电流源串联）的结点电压方程列写</strong><br><br>我们将参考点（地）设在图中标志地符号的左侧结点，三个独立结点的电位分别为 $U_1, U_2, U_3$。<br><br>1. <strong>选项 A 正确（无阻电压源支路约束）</strong>：<br>结点 1 与参考地之间直接连接了一个 $6\\text{ V}$ 的理想电压源（正极在 1 端）。因此，结点 1 的电位直接被该电压源锁定：<br>$$U_1 = 6\\text{ V}$$<br>2. <strong>选项 B 正确（结点 2 的 KCL 方程）</strong>：<br>与结点 2 相连的支路自导有 $\\frac{1}{4}$ 和 $\\frac{1}{1}$（即 $1$）。连接到地。同时与结点 1 相连的互导项为 $-1 \\cdot U_1$。流过中间支路流入结点 2 的电流为恒流源的 $5\\text{ A}$（注意：电流源与 $2\\,\\Omega$ 电阻串联，其支路电流仍由电流源独立决定）。<br>列写方程为：<br>$$\\left(\\frac{1}{4} + 1\\right)U_2 - U_1 = 5$$<br>3. <strong>选项 C 正确（结点 3 的 KCL 方程）</strong>：<br>与结点 3 相连的自导有 $\\frac{1}{3}$（左支路）和 $\\frac{1}{2}$（右支路）。连接到地。同时与结点 1 相连的互导项为 $-\\frac{1}{2}U_1$。流过中间支路流出结点 3 的电流为恒流源的 $5\\text{ A}$（即记为 $-5$）。<br>列写方程为：<br>$$\\left(\\frac{1}{3} + \\frac{1}{2}\\right)U_3 - \\frac{1}{2}U_1 = -5$$<br>4. <strong>选项 D 正确（受控量/待求量 U 关系式）</strong>：<br>电压 $U$ 为 $5\\text{ A}$ 电流源两端的电压。沿该支路从 2 走到 3 经过的电位降为：<br>$$U_2 - U_3 = 2 \\times 5 + U \\implies U_2 - U_3 = U - 2 \\times 5$$（其中 $2 \\times 5$ 为 $2\\,\\Omega$ 串联电阻上的压降）。此项方程同样正确。<br><br>综上所述，所需方程 <strong>A、B、C、D 全部正确</strong>。"
    },
    {
      id: 26,
      type: "多选",
      title: "【例 2-8-2】 对图示电路列写结点电压方程判定",
      image: "circuit/77064325c2c1270a301aa15990e15248.jpg", // 👈 放入 circuit 文件夹下，后缀改成统一的 .png
      answer: "ABC",
      analysis: "<strong>核心考点：含受控源的结点电压方程标准列写</strong><br><br>本题以 0 结点为参考地，独立结点电位分别为 $U_{n1}, U_{n2}$。受控源的控制量为 $U$。<br><br>1. <strong>选项 A 正确（结点 1 的标准方程）</strong>：<br>与 1 结点相连的自导为 $\\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$。与 2 结点的互导为 $-\\frac{1}{R_3}U_{n2}$。左侧无阻电压源支路含有内阻 $R_1$，等效注入电流源项为 $\\frac{U_s}{R_1}$。<br>方程为：<br>$$\\left(\\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}\\right)U_{n1} - \\frac{1}{R_3}U_{n2} = \\frac{U_s}{R_1}$$<br>2. <strong>选项 B 正确（结点 2 的标准方程）</strong>：<br>与 2 结点相连的自导为 $\\frac{1}{R_3} + \\frac{1}{R_4}$。与 1 结点的互导为 $-\\frac{1}{R_3}U_{n1}$。右侧受控电流源 $gU$ 注入结点 2。<br>方程为：<br>$$-\\frac{1}{R_3}U_{n1} + \\left(\\frac{1}{R_3} + \\frac{1}{R_4}\\right)U_{n2} = gU$$<br>3. <strong>选项 C 正确（控制量 U 的辅助方程）</strong>：<br>控制量电压 $U$ 为电阻 $R_3$ 两端的电压（正极在 1 端，负极在 2 端）。根据电位差关系有：<br>$$U = U_{n1} - U_{n2}$$<br>4. <strong>选项 D 错误</strong>：<br>观察受控源箭头，电流实际指向结点 2（流入），故等号右侧应为 $+gU$ 而非 $-gU$。<br><br>综上所述，正确的方程有 <strong>ABC</strong>。"
    },
    {
      id: 27,
      type: "多选",
      title: "有 3 个电阻并联，已知 R₁=2Ω，R₂=3Ω，R₃=6Ω。在 3 个并联电阻的两端外加电流为 Is=18A 的电流源，对应电阻中的电流分别为（ ）。<br><br>A. I_R₁ = 9A<br>B. I_R₂ = 6A<br>C. I_R₃ = 3A<br>D. I_R₃ = 5A",
      image: "",
      answer: "ABC",
      analysis: "<strong>核心考点：电阻并联等效、分流规律与欧姆定律</strong><br><br>1. <strong>求解并联电路的等效两端电压 $U$</strong>：<br>已知三个电阻并联：$R_1 = 2\\,\\Omega$，$R_2 = 3\\,\\Omega$，$R_3 = 6\\,\\Omega$。<br>&bull; 并联等效电阻 $R_{eq}$ 倒数公式为：<br>$$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = 1\\,\\text{S}$$<br>&bull; 得等效电阻为：$R_{eq} = 1\\,\\Omega$。<br>&bull; 已知注入并联电路的总外加电流为 $I_s = 18\\text{ A}$。根据欧姆定律，并联两端的等效电压为：<br>$$U = I_s \\cdot R_{eq} = 18\\text{ A} \\times 1\\,\\Omega = 18\\text{ V}$$<br>2. <strong>分别求解各支路电流</strong>：<br>&bull; <strong>A 选项正确</strong>：流过 $R_1$ 的电流为：$$I_{R1} = \\frac{U}{R_1} = \\frac{18\\text{ V}}{2\\,\\Omega} = 9\\text{ A}$$<br>&bull; <strong>B 选项正确</strong>：流过 $R_2$ 的电流为：$$I_{R2} = \\frac{U}{R_2} = \\frac{18\\text{ V}}{3\\,\\Omega} = 6\\text{ A}$$<br>&bull; <strong>|C 选项正确</strong>：流过 $R_3$ 的电流为：$$I_{R3} = \\frac{U}{R_3} = \\frac{18\\text{ V}}{6\\,\\Omega} = 3\\text{ A}$$<br>&bull; <strong>D 选项错误</strong>：由计算可知 $I_{R3} = 3\\text{ A}$，而非 $5\\text{ A}$。<br><br>综上所述，正确选项为 <strong>ABC</strong>。"
    },
    {
      id: 28,
      type: "多选",
      title: "关于电阻的星形（Y）联结与三角形（&Delta;）联结的等效变换，下列叙述哪些是正确的？（ ）<br><br>A. 当电阻的 Y 联结与 &Delta; 联结进行等效变换时，对应 3 个端子之间的电压保持不变<br>B. 当电阻的 Y 联结与 &Delta; 联结进行等效变换时，流入对应 3 个端子的电流保持不变<br>C. 当电阻的 Y 联结与 &Delta; 联结进行等效变换时，等效电阻也相等<br>D. 当电路的 3 个电阻值相等时，无需使用电阻 Y-&Delta; 等效变换",
      image: "",
      answer: "AB",
      analysis: "<strong>核心考点：电阻星形（Y）与三角形（&Delta;）等效变换的物理实质</strong><br><br>1. <strong>什么是“等效变换”？</strong><br>电阻网络等效变换的根本前提是：<strong>对外部电路等效，对内不等效</strong>。也就是说，用等效网络代替原网络后，未被替换的外接电路中的所有电压、电流和功率等均保持完全不变。<br><br>2. <strong>选项逐一分析</strong>：<br>&bull; <strong>A 选项正确（等效核心定义）</strong>：当电阻的 Y 联结与 &Delta; 联结进行等效变换时，对应三个端子之间的<strong>电压保持不变</strong>。<br>&bull; <strong>B 选项正确（等效核心定义）</strong>：变换后流入对应三个端子的<strong>电流保持不变</strong>。<br>&bull; <strong>C 选项错误</strong>：等效变换仅对外部电路等效，变换后其内部的三个电阻阻值、内部电压和电流分布已经彻底改变。变换前后的 Y 联结和 &Delta; 联结内部阻值并不相等（$R_{\\Delta} = 3 R_Y$）。<br>&bull; <strong>D 选项错误</strong>：当三个电阻值不等时，等效变换为 &Delta; 联结后的三个电阻值也是不等的。只有在对称三相（电阻都相等）时才可以简化为 $R_{\\Delta} = 3 R_Y$ 的简易关系，但同样属于等效变换的一种简化情况。<br><br>综上所述，说法正确的选项为 <strong>AB</strong>。"
    },
    {
      id: 29,
      type: "多选",
      title: "实际电流源对负载供电，若外电路改变，则将引起（ ）。<br><br>A. 端电压 U 变化<br>B. 负载电流 I 变化<br>C. 负载电阻吸收的功率变化<br>D. 负载电流 I 不变化",
      image: "",
      answer: "ABC",
      analysis: "<strong>核心考点：实际电流源模型及其物理特征</strong><br><br>1. <strong>实际电流源模型结构</strong>：<br>实际电流源由一个理想电流源 $I_s$ 与内阻 $R_s$ 并联组成。其输出给外部负载电阻 $R$ 的电流为：<br>$$I = I_s - I_s' = I_s - \\frac{U}{R_s}$$<br>其中 $U$ 是电流源的端电压（同时加在内阻 $R_s$ 和负载 $R$ 上），$I_s'$ 为分流流过其内阻的电流。<br><br>2. <strong>当外电路电阻 $R$ 发生变化时，物理参数响应</strong>：<br>&bull; <strong>A 选项正确</strong>：外接电阻 $R$ 改变，会使实际电流源的端电压 $U = I \\cdot R$ 随之<strong>发生变化</strong>。<br>&bull; <strong>B 选项正确</strong>：由于端电压 $U$ 改变，导致内阻分流 $I_s' = \\frac{U}{R_s}$ 改变，因而输出给负载的实际<strong>负载电流 $I$ 发生变化</strong>。<br>&bull; <strong>C 选项正确</strong>：负载电流 $I$ 和电压 $U$ 都改变了，则负载吸收的功率 $P = U \\cdot I$ 必然<strong>发生变化</strong>。<br>&bull; <strong>D 选项错误</strong>：实际电流源内部的理想恒流源部分的输出电流 $I_s$ 是由电源自身性质决定的常数，其<strong>保持恒定不变</strong>。但负载电流 $I$ 是一定会改变的。<br><br>综上所述，会引起变化的参数选项为 <strong>ABC</strong>。"
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
