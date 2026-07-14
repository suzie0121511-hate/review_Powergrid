# ⚡ 电路板块

---

## 1. 感性设备功率计算

当 3A 电流通过复阻抗模为 50Ω，R=30Ω 的感性用电设备时，该设备与电源交换的功率是（  ）。

<!-- ⚡ 以下是 jsDelivr CDN 加速图片，利用你的 GitHub 路径直接飞速加载 -->
<img src="https://cdn.jsdelivr.net/gh/suzie0121511-hate/review_Powergrid@main/circuit-01.png" width="600px">

* A. 120var
* B. 240var
* C. 360 var
* D. -360 var

<details>
<summary>🔍 点击展开查看答案与详细解析</summary>

**正确答案：C**

**核心考点**：复阻抗三角形与无功功率计算

**详细解析**：
1. 根据阻抗三角形，电抗 $X = \sqrt{|Z|^2 - R^2} = \sqrt{50^2 - 30^2} = 40\,\Omega$。因为设备为感性，所以 $X = X_L = 40\,\Omega$。
2. “该设备与电源交换的功率”指的是**无功功率 $Q$**：
   $$Q = I^2 X = 3^2 \times 40 = 360\text{ var}$$
</details>

---

## 2. 等效电感计算（互感电路）

图示一端口网络的等效电感为（  ）。

<img src="https://cdn.jsdelivr.net/gh/suzie0121511-hate/review_Powergrid@main/circuit-02.png" width="600px">

* A. 11H
* B. 9H
* C. 8H
* D. 10H

<details>
<summary>🔍 点击展开查看答案与详细解析</summary>

**正确答案：D**

**核心考点**：同名端判定与互感消去法

**详细解析**：
1. 设电流从 $a$ 端流入，流经 $L_1$ 时从非同名端（下端）流出，接着流入 $L_2$ 的同名端（下端）。
2. 由于电流进出同名端的状态相反（一进一出），此串联方式为**反向串联（去磁）**。
3. 等效电感公式：
   $$L_{eq} = L_1 + L_2 - 2M = 10 + 4 - 2 \times 2 = 10\text{ H}$$
</details>

---

## 3. 戴维南等效电路（含互感）

图示电路的戴维南等效电路参数为（  ）。

<img src="https://cdn.jsdelivr.net/gh/suzie0121511-hate/review_Powergrid@main/circuit-03.png" width="600px">

* A. $5\angle 0^\circ\text{ V},\, j6\Omega$
* B. $10\angle 0^\circ\text{ V},\, j4\Omega$
* C. $10\angle 0^\circ\text{ V},\, j6\Omega$
* D. $5\angle 90^\circ\text{ V},\, j6\Omega$

<details>
<summary>🔍 点击展开查看答案与详细解析</summary>

**正确答案：C**

**核心考点**：含互感电路的开路电压与输入阻抗计算

**详细解析**：
1. **开路电压 $U_{oc}$**：端口 $a-b$ 开路时，右侧支路电流 $I_2 = 0$。左侧回路电流 $I_1 = \frac{15\angle 0^\circ}{j14}\text{ A}$。通过互感耦合在右侧产生的感应电压为 $U_M = \pm j2 \cdot I_1$，结合同名端判定极性后，求得端口开路电压。
2. **等效阻抗 $Z_{eq}$**：将电压源短路，在 $a-b$ 端外加电压 $U$ 求输入电流 $I$。列写 KVL 可得等效阻抗。
</details>

---

## 4. LC 串联谐振电路

图示电路中，$R=X_C=X_L$，则有（  ）。

<img src="https://cdn.jsdelivr.net/gh/suzie0121511-hate/review_Powergrid@main/circuit-04.png" width="600px">

* A. $U=U_s$
* B. $U=0$
* C. $I = I_L + I_C$
* D. $I = \infty$

<details>
<summary>🔍 点击展开查看答案与详细解析</summary>

**正确答案：B**

**核心考点**：串联谐振特征

**详细解析**：
1. 当 $X_L = X_C$ 时，RLC 串联电路发生**串联谐振**。
2. 谐振时，电感电压 $\dot{U}_L$ 与电容电压 $\dot{U}_C$ 大小相等、相位相反，即 $\dot{U}_L = -\dot{U}_C$。
3. 题目中的 $U$ 是 L 与 C 串联端口的总电压：
   $$U = U_L + U_C = 0$$
</details>

---

## 5. 戴维南定理应用（求功率）

电路如图所示，当在 AB 间接入 $8\Omega$ 电阻时，其功率为（  ），两个电源发出的功率（  ）。

<img src="https://cdn.jsdelivr.net/gh/suzie0121511-hate/review_Powergrid@main/circuit-05.png" width="600px">

* A. 0W，增加
* B. 0W，不变
* C. 4W，减小
* D. 10W，不变

<details>
<summary>🔍 点击展开查看答案与详细解析</summary>

**正确答案：B**

**核心考点**：电位与平衡状态分析、戴维南定理等效边界

**详细解析**：
1. **求 AB 开路电压 $U_{oc}$**：
   * A 点电位：$V_A = 15 \times \frac{6}{3+6} = 10\text{ V}$
   * B 点电位：$V_B = 20 \times \frac{2}{2+2} = 10\text{ V}$
   * 开路电压：$U_{oc} = V_A - V_B = 10 - 10 = 0\text{ V}$
2. **接入 $8\Omega$ 电阻时**：
   * 既然开路电压为 0V，接入电阻后该支路电流依然为 0。因此电阻功率为 $0\text{ W}$。
   * 支路无电流通过，意味着连接后没有打破原左、右两个独立回路运行状态，各电源输出电流未变。因此，两个电源发出的功率**保持不变**。
</details>
