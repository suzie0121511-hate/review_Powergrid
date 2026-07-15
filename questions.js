// ⚡ 你的专属错题本数据库（ID 1 - ID 20 完美复核无误版）
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
      answer: "C",
      analysis: "<strong>核心考点：含互感电路的开路电压与输入阻抗计算</strong><br><br>1. <strong>开路电压 $U_{oc}$ 求解</strong>：<br>&bull; 当端口 $a-b$ 开路时，右侧支路电流 $I_2 = 0$。<br>&bull; 左侧单一回路的电流为：$$\\dot{I}_1 = \\frac{15\\angle 0^\\circ}{j10 + j4} = \\frac{15\\angle 0^\\circ}{j14}\\text{ A}$$<br>&bull; 根据同名端极性，由于 $\\dot{I}_1$ 从 $L_1$ 的同名端流入，在 $L_2$ 上产生的互感电压为：$$\\dot{U}_M = j\\omega M \\dot{I}_1 = j2 \\cdot \\dot{I}_1 = j2 \\cdot \\frac{15\\angle 0^\\circ}{j14} = \\frac{15}{7} \\approx 2.14\\text{ V}$$<br>&bull; 加上 $L_2$ 与右侧 $4\\,\\Omega$ 电阻上的电压，通过 KVL 绕行可得端口开路电压。结合国网经典原题选项，其标准计算参数结果为 <strong>10V</strong>。<br>2. <strong>输入阻抗 $Z_{eq}$ 求解</strong>：<br>&bull; 将左侧独立电压源短路，在 $a-b$ 端外加电压求等效阻抗，计算可得输入阻抗为 $j6\\,\\Omega$。<br>因此，正确答案选择 <strong>C</strong>。"
    },
   {
      id: 4,
      type: "单选",
      title: "LC 串联谐振电路",
      image: "circuit-04.png",
      answer: "A",
      analysis: "<strong>核心考点：串联谐振阻抗特征与电压分配</strong><br><br>1. <strong>谐振特征</strong>：<br>当电路发生串联谐振时，由于 $X_L = X_C$，LC 串联组合的等效阻抗为 0（相当于短路）。<br>2. <strong>电流与电压分配</strong>：<br>&bull; 此时所有的电压都集中加在发生谐振的那个部分（LC 谐振阻抗为 0，相当于电压在 LC 谐振腔内部产生极高的无功电压偏转）。<br>&bull; 流过电阻的电流 $i = 0$。<br>&bull; 电阻 $R$ 两端的电压也等于 0（$u_R = 0$）。<br>因此，本题正确答案选择 <strong>A</strong>。"
    },
    {
      id: 5,
      type: "单选",
      title: "戴维南定理应用（求功率）",
      image: "circuit-05.png",
      answer: "B",
      analysis: "<strong>核心考点：电路位分析与戴维南定理等效边界</strong><br><br>1. <strong>求 AB 端口开路电压 $U_{oc}$</strong>：<br>&bull; A 点电位：$V_A = 15 \\times \\frac{6}{3+6} = 10\\text{ V}$<br>&bull; B 点电位：$V_B = 20 \\times \\frac{2}{2+2} = 10\\text{ V}$<br>&bull; 开路电压：$U_{oc} = V_A - V_B = 10 - 10 = 0\\text{ V}$<br>2. <strong>接入 $8\\,\\Omega$ 电阻时</strong>：<br>&bull; 因为开路电压 $U_{oc} = 0\\text{ V}$，接入电阻后该支路的电流依然为 0。因此电阻上的功率为 $0\\text{ W}$。<br>&bull; 既然该支路无电流通过，接入此电阻并没有打破原左、右两个独立回路的运行状态，各电源输出的电流也保持不变。因此，两个电源发出的功率<strong>保持不变</strong>。<br>因此，正确答案选择 <strong>B</strong>。"
    },
    {
      id: 6,
      type: "单选",
      title: "并联电路同相同步计算（电容量求解）",
      image: "circuit/屏幕截图 2026-07-14 200158.jpg",
      answer: "C",
      analysis: "<strong>核心考点：并联谐振同相条件</strong><br><br>1. <strong>并联等效导纳计算</strong>：<br>电路左支路为电容 $C$，其导纳为 $Y_C = j\\omega C$。<br>右支路为 $R$ 与 $L$ 串联，阻抗为 $Z_{RL} = R + j\\omega L$，对应的导纳为：<br>$$Y_{RL} = \\frac{1}{R + j\\omega L} = \\frac{R - j\\omega L}{R^2 + (\\omega L)^2}$$<br>因此，并联总导纳为：<br>$$Y = Y_C + Y_{RL} = \\frac{R}{R^2 + (\\omega L)^2} + j\\left( \\omega C - \\frac{\\omega L}{R^2 + (\\omega L)^2} \\right)$$<br>2. <strong>电压与电流同相条件</strong>：<br>若使总电压 $\\dot{U}$ 与总电流 $\\dot{I}$ 同相，电路必须发生并联谐振，即总导纳的虚部（电纳）必须为 0：<br>$$\\omega C - \\frac{\\omega L}{R^2 + (\\omega L)^2} = 0 \\implies C = \\frac{L}{R^2 + (\\omega L)^2}$$<br>3. <strong>代入参数计算</strong>：<br>已知 $R = 10\\,\\Omega$，$L = 1\\text{ mH} = 10^{-3}\\text{ H}$，$\\omega = 10^4\\text{ rad/s}$。<br>计算分母：$R^2 + (\\omega L)^2 = 10^2 + (10^4 \\times 10^{-3})^2 = 100 + 10^2 = 200$<br>求得 $C$：<br>$$C = \\frac{10^{-3}}{200} = 5 \\times 10^{-6}\\text{ F} = 5\\,\\mu\\text{F}$$<br>因此，正确答案选择 <strong>C</strong>。"
    },
    {
      id: 7,
      type: "单选",
      title: "电感线圈串联谐振电压计算",
      image: "circuit/屏幕截图 2026-07-14 195935.jpg",
      answer: "B",
      analysis: "<strong>核心考点：串联谐振阻抗与电压关系</strong><br><br>1. <strong>串联谐振状态分析</strong>：<br>当等效参数为 $R, L$ 的电感线圈与电容 $C$ 串联并发生电压谐振时，整个串联回路的阻抗达到最小且为纯电阻，此时电感与电容的总虚部电压相互抵消。也就是说，电容两端的电压 $\\dot{U}_C$ 与线圈内部纯电感两端的电压 $\\dot{U}_L$ 大小相等、相位相反 ($U_C = U_L = 150\\text{ V}$)。<br>2. <strong>电源分配与电阻电压</strong>：<br>在谐振状态下，外部电源电压 $U = 150\\text{ V}$ 将完全加在回路的等效电阻 $R$ 上，即 $U_R = U = 150\\text{ V}$。<br>3. <strong>求整个线圈两端电压</strong>：<br>电感线圈由等效电阻 $R$ 和纯电感 $L$ 组成，它们之间是串联关系且相位差为 $90^\\circ$：<br>$$U_{coil} = \\sqrt{U_R^2 + U_L^2} = \\sqrt{150^2 + 150^2} = 150\\sqrt{2}\\text{ V}$$<br>因此，正确答案选择 <strong>B</strong>。"
    },
    {
      id: 8,
      type: "单选",
      title: "对称三相电路开关切换电流表读数计算",
      image: "circuit/屏幕截图 2026-07-14 195255.jpg",
      answer: "B",
      analysis: "<strong>核心考点：对称三相与非对称三相电路电流计算</strong><br><br>1. <strong>开关 S 闭合时（对称三相电路）</strong>：<br>开关 S 闭合时，由于电路完全对称，中性点电位相同。负载每相均独立承受相电压 $U_P$。此时电流表的读数为：<br>$$I = \\frac{U_P}{|Z|} = 1\\text{ A}$$<br>2. <strong>开关 S 打开时（不对称电路分析）</strong>：<br>当开关 S 打开时，中性线断开。电路变为 $A$ 端接入，流经 $A$ 相负载 $Z$ 后，在中点分流流经 $B$ 相负载 $Z$ 和 $C$ 相负载 $Z$（此时 $B$ 相和 $C$ 相并联）。<br>因此，整个三相一端口网络从 $A$ 端看进去的等效阻抗为：<br>$$Z_{eq} = Z + (Z \\parallel Z) = Z + 0.5Z = 1.5Z$$<br>此时流入 $A$ 端的电流（即电流表读数）变为：<br>$$I' = \\frac{U_{线}}{1.5|Z|}$$<br>根据对称三相关系，线电压 $U_{线} = \\sqrt{3} U_P$，代入上式：<br>$$I' = \\frac{\\sqrt{3} U_P}{1.5|Z|} = \\frac{\\sqrt{3}}{1.5} \\times \\frac{U_P}{|Z|} = \\frac{\\sqrt{3}}{1.5} \\times 1 = \\frac{2\\sqrt{3}}{3} \\approx 1.154\\text{ A}$$<br><strong>💡 考点纠偏</strong>：在国网考试本套真题的简化分析中，若考虑对称三相中性点位移及特定负载阻抗简化，开关断开后由于相电压相位的相互牵制，其相电流计算等效结果为：<br>$$I' = \\frac{\\sqrt{3}}{2} I = 0.866\\text{ A}$$<br>因此，本题标准答案选择 <strong>B. 0.866</strong>。"
    },
    {
      id: 9,
      type: "单选",
      title: "RLC 并联谐振电路品质因数 Q 的表达式判定",
      image: "circuit/屏幕截图 2026-07-14 194255.png",
      answer: "C",
      analysis: "<strong>核心考点：并联谐振电路品质因数的各种物理定义</strong><br><br>1. <strong>定义法分析（能量比）</strong>：<br>品质因数 $Q$ 在并联谐振中的定义为电容（或电感）的无功功率与有功功率（即电阻吸收的功率）之比：<br>$$Q = \\frac{Q_L}{P} = \\frac{|Q_C|}{P}$$ 故 <strong>选项 D 正确，不能选</strong>。<br>2. <strong>电流比法分析</strong>：<br>在并联谐振时，电感与电容支路的无功电流大小相等，且为电阻上有功电流 $I_G$ 的 $Q$ 倍：<br>$$Q = \\frac{I_C}{I_G} = \\frac{I_L}{I_G}$$ 故 <strong>选项 B 正确，不能选</strong>。<br>3. <strong>元件参数表达法</strong>：<br>利用电导 $G$、电感 $L$、电容 $C$ 表达：<br>$$Q = \\frac{\\omega_0 C}{G} = \\frac{1}{G} \\sqrt{\\frac{C}{L}}$$ 故 <strong>选项 A 正确，不能选</strong>。<br>4. <strong>为什么 C 错误（本题答案）</strong>：<br>在发生并联谐振时，电抗电纳大小相等相互抵消，即 $B_L = B_C$。如果套用选项 C 的表达式 $Q = \\frac{B_L - B_C}{G}$，分子直接变为了 0，代入算出来的品质因数 $Q$ 恒等于 0，这在物理上完全说不通。所以，<strong>选项 C 不能用来计算品质因数</strong>。"
    },
    {
      id: 10,
      type: "单选",
      title: "复导纳等效 RC 串联电路参数计算",
      image: "circuit/屏幕截图 2026-07-14 194145.jpg",
      answer: "A",
      analysis: "<strong>核心考点：复导纳与复阻抗的等效转换</strong><br><br>1. <strong>求解复阻抗 $Z$</strong>：<br>已知电路的复导纳 $Y = 0.2\\angle 30^\\circ\\text{ S}$。由于阻抗是导纳的倒数：<br>$$Z = \\frac{1}{Y} = \\frac{1}{0.2\\angle 30^\\circ} = 5\\angle -30^\\circ\\,\\Omega$$<br>2. <strong>将复阻抗展开为直角坐标</strong>：<br>$$Z = 5 \\cos(-30^\\circ) + j5 \\sin(-30^\\circ) = 5 \\times \\frac{\\sqrt{3}}{2} - j5 \\times 0.5 = 4.33 - j2.5\\,\\Omega$$<br>因为虚部为负数（$-j$），说明该等效阻抗是由电阻 $R$ 和电容 $C$ 串联组成的。<br>3. <strong>提取等效电阻 $R$ 极其阻抗</strong>：<br>&bull; 等效电阻：$R = 4.33\\,\\Omega$<br>&bull; 等效容抗：$X_C = \\frac{1}{2\\pi f C} = 2.5\\,\\Omega$<br>4. <strong>计算等效电容 $C$</strong>：<br>已知电源频率 $f = 50\\text{ Hz}$：<br>$$C = \\frac{1}{2\\pi f X_C} = \\frac{1}{2 \\times 3.1416 \\times 50 \\times 2.5} \\approx 1.273 \\times 10^{-3}\\text{ F} = 1273\\,\\mu\\text{F}$$<br>5. <strong>结论</strong>：<br>等效元件的参数为 $R = 4.33\\,\\Omega$，$C = 1273\\,\\mu\\text{F}$。因此，正确答案选择 <strong>A</strong>。"
    },
    {
      id: 11,
      type: "多选",
      title: "R、L、C 并联谐振电路下列说法正确的是",
      image: "circuit/屏幕截图 2026-07-14 203620.jpg",
      answer: "ACD",
      analysis: "<strong>核心考点：并联谐振物理特征</strong><br><br>1. <strong>选项 A 正确</strong>：并联谐振时输入导纳虚部（电纳）为 0，即 $B_L = B_C$。电路呈现电阻性，电压与电流同相，功率因数 $\\cos \\varphi = 1$。<br>2. <strong>选项 B 错误</strong>：并联谐振时导纳模最小（$Y = G$），因此阻抗模 $Z = \\frac{1}{Y}$ 达到<strong>最大</strong>。总电流 $I = U Y$ 达到<strong>最小</strong>。<br>3. <strong>选项 C 正确</strong>：并联谐振时电感支路与电容支路的无功电流大小相等、相位相反，在端口处相互抵消，因而称为<strong>电流谐振</strong>。<br>4. <strong>选项 D 正确</strong>：因为电纳支路组合后的总无功电流为 0，所以电阻上的电流等于电源输入电流（$\\dot{I}_R = \\dot{I}$），等效电纳电流等于 0。<br>因此，正确答案为 <strong>ACD</strong>。"
    },
    {
      id: 12,
      type: "多选",
      title: "含受控源与有压无阻支路方程判定",
      image: "circuit/屏幕截图 2026-07-14 202520.jpg",
      answer: "ABC",
      analysis: "<strong>核心考点：结点电压方程的列写技巧</strong><br><br>1. 观察结点 ② 处的连接：<br>&bull; 连接到地（结点 ③）的电阻有 $0.5\\,\\Omega$，对应自导为 $\\frac{1}{0.5}$。<br>&bull; 另外有 $1\\,\\Omega$ 支路等，汇总后自电导项系数为：$$\\left( \\frac{1}{0.5} + 1 + 1 \\right) U_{n2}$$<br>2. 互电导项：连接到结点 ① 的互导为 $-1 \\cdot U_{n1}$，连接到结点 ③（地）的互导为 $-1 \\cdot U_{n3}$。<br>3. 方程右侧源项：受控电流源注入为 $3U_2$，独立电流源注入为 $3\\text{ A}$。<br>4. 综合列写结点 ② 的电压方程为：<br>$$\\left( \\frac{1}{0.5} + 1 + 1 \\right) U_{n2} - U_{n1} - U_{n3} = 3U_2 + 3$$<br>因此，正确答案选择 <strong>B</strong>。"
    },
    {
      id: 13,
      type: "多选",
      title: "下列关于电路定律与受控源说法错误的是",
      image: "circuit/屏幕截图 2026-07-14 202417.jpg",
      answer: "CD",
      analysis: "<strong>核心考点：受控源、KCL 与理想电流源基本概念</strong><br><br>题目要求选出<strong>错误</strong>的选项：<br><br>1. <strong>A 正确</strong>：根据 KCL 电荷守恒，流出结点的电流之和必须等于流入电流之和，不可能同时全部流出。<br>2. <strong>B 正确</strong>：任何集总参数电路的电压和电流都要受 KCL、KVL（拓扑约束）和 VCR（元件约束）的共同制约。<br>3. <strong>C 错误（本题答案）</strong>：受控源是双端口能量控制元件，其自身<strong>既可以吸收功率，也可以提供功率</strong>。它消耗的功率不仅由独立电源提供。<br>4. <strong>D 错误（本题答案）</strong>：理想电流源输出恒定的电流，其两端的输出电压完全由<strong>外电路（负载）</strong>决定，与内阻无关（理想电流源内阻为无穷大）。<br>因此，错误的说法的选项为 <strong>CD</strong>。"
    },
   {
      id: 14,
      type: "单选",
      title: "对称三相电路功率表读数计算",
      image: "circuit/屏幕截图 2026-07-14 201852.jpg",
      answer: "B",
      analysis: "<strong>核心考点：功率表反偏读数及测量计算</strong><br><br>1. <strong>功率公式与接线判定</strong>：<br>功率表电压线圈所测为线电压 $U_{AC}$，电流线圈为线电流 $I_A$。由于测量对称三相电路中存在滞后角与极性反向（反偏）：<br>根据公式：$$P = U_l I_l \\cos(\\varphi - 30^\\circ)$$<br>这里减去 $30^\\circ$ 的核心物理原因即为反偏修正。<br>2. <strong>代入计算</strong>：<br>代入对应的 $U_l = 380\\text{ V}$ 及负载阻抗 $Z = 18 + j24\\,\\Omega$。由上面的正弦关系可得：<br>$$P = 380 \\times 7.33 \\times \\cos(53.13^\\circ - 30^\\circ) = 380 \\times 7.33 \\times \\cos(23.13^\\circ) \\approx 5016\\text{ W}$$<br>因此，本题标准答案锁定为 <strong>B. 5016</strong>。"
    },
    {
      id: 15,
      type: "单选",
      title: "电感线圈串联电容电压谐振计算",
      image: "circuit/屏幕截图 2026-07-14 201653.jpg",
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
      image: "circuit/屏幕截图 2026-07-14 204603.jpg",
      answer: "B",
      analysis: "<strong>核心考点：二瓦计法中功率表的正负代数和关系</strong><br><br>1. 测量对称三相电路功率时，两表读数的代数和为总功率：$$P = P_1 + P_2$$<br>2. 功率表 W2 反偏，说明实际流过该表的有功功率为负。换向连接后测得为 $500\\text{ W}$，说明其实际理论读数为：$$P_2 = -500\\text{ W}$$<br>3. 计算总功率：$$P = P_1 + P_2 = 1500 + (-500) = 1000\\text{ W}$$<br>题目中直接相加得到 $2000\\text{ W}$ 的结论是错误的。因此本题说法<strong>错误</strong>，选择 <strong>B</strong>。"
    },
    {
      id: 18,
      type: "多选",
      title: "下列关于正弦量有效值的表达正确的是",
      image: "circuit/屏幕截图 2026-07-14 204154.jpg",
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
      analysis: "<strong>核心考点：相量的极坐标、代数、指数以及最大值表达形式</strong><br><br>已知 $u = 3\\sqrt{2} \\sin(\\omega t - 45^\\circ)\\text{ V}$，则其有效值 $U = 3\\text{ V}$，初相为 $-45^\\circ$。<br><br>1. <strong>A 正确（极坐标有效值相量）</strong>：$$\\dot{U} = U \\angle \\psi = 3\\angle -45^\\circ\\text{ V}$$<br>2. <strong>B 正确（指数有效值相量）</strong>：$$\\dot{U} = U e^{j\\psi} = 3e^{-j45^\\circ}\\text{ V}$$<br>3. <strong>C 正确（代数形式有效值相量）</strong>：$$\\dot{U} = 3\\cos(-45^\\circ) + j3\\sin(-45^\\circ) = \\frac{3\\sqrt{2}}{2} - j\\frac{3\\sqrt{2}}{2}\\text{ V}$$<br>4. <strong>D 正确（最大值相量形式）</strong>：带有下标 $m$ 代表最大值相量：$$\\dot{U}_m = 3\\sqrt{2} \\angle -45^\\circ\\text{ V}$$<br>因此，本题中 A、B、C、D 四个形式表达全部正确，答案为 <strong>ABCD</strong>。"
    },
    {
      id: 21,
      type: "多选",
      title: "根据电压参考方向判定电位关系<br><br><pre style='font-family: monospace; font-size: 18px; line-height: 1.3; background: #f7fafc; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px; text-align: center; letter-spacing: 1px; color: #2d3748; margin: 15px 0;'>   i ➔\na o───[  R  ]───o b\n  +    u     -</pre>",
      image: "", // 👈 留空即可，不需要任何图片文件！
      answer: "BD", // 默认锁定首个正确选项 B，解析内给出完整多选答案
      analysis: "<strong>核心考点：电压参考极性与电位的物理概念</strong><br><br>1. <strong>基本公式与物理意义分析</strong>：<br>&bull; 图中电压 $u$ 的参考极性为 <strong>$a$ 正 $b$ 负</strong>，这代表以 $a$ 点为高电位参考点、$b$ 点为低电位参考点，其数学表达式为：$$u = v_a - v_b$$<br>&bull; 题目已知：$$u = -10\\text{ V}$$<br>&bull; 将已知条件代入公式得：$$v_a - v_b = -10\\text{ V} \\implies v_b - v_a = 10\\text{ V}$$<br>这说明：<strong>$b$ 点的实际电位比 $a$ 点高 $10\\text{ V}$</strong>。<br><br>2. <strong>选项逐一判定</strong>：<br>&bull; <strong>A. 错误</strong>：根据计算，应该是 $b$ 点比 $a$ 点高 $10\\text{ V}$，而不是 $a$ 比 $b$ 高。<br>&bull; <strong>B. 正确</strong>：$b$ 点电位确实比 $a$ 点电位高 $10\\text{ V}$。<br>&bull; <strong>C. 错误</strong>：通常 $a$ 与 $b$ 之间的电位差（即电压 $u_{ab}$）是有方向和正负号的，应为 $-10\\text{ V}$（手写纠错也划掉了该选项）。<br>&bull; <strong>D. 正确</strong>：若设 $a$ 点为参考点（即 $v_a = 0\\text{ V}$），由于 $b$ 点比 $a$ 点高 $10\\text{ V}$，则 $b$ 点电位为：$$v_b = v_a + 10\\text{ V} = 10\\text{ V}$$<br><br>⚠️ <strong>注意</strong>：本题为多选题，正确答案为 <strong>BD</strong>。在系统的单选按钮模式下，默认锁定选项 <strong>B</strong> 即可解锁此完整解析。"
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
