<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>⚡ 我的电气工程错题本</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    :root {
      --primary-color: #42b983;
      --primary-hover: #359469;
      --bg-color: #f7fafc;
      --card-bg: #ffffff;
      --text-main: #2d3748;
      --text-muted: #718096;
      --border-color: #e2e8f0;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg-color);
      color: var(--text-main);
      display: flex;
      min-height: 100vh;
    }
    /* 侧边栏样式 */
    .sidebar {
      width: 260px;
      background-color: #1a202c;
      color: #fff;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
    }
    .sidebar-title {
      font-size: 18px;
      font-weight: bold;
      padding: 10px 24px 20px;
      border-bottom: 1px solid #2d3748;
      color: var(--primary-color);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .menu-list { list-style: none; margin-top: 15px; }
    .menu-item {
      padding: 14px 24px;
      cursor: pointer;
      font-size: 14px;
      color: #cbd5e0;
      transition: all 0.2s;
      border-left: 4px solid transparent;
    }
    .menu-item:hover, .menu-item.active {
      background-color: #2d3748;
      color: #fff;
    }
    .menu-item.active {
      border-left-color: var(--primary-color);
      font-weight: bold;
    }
    /* 主显示区 */
    .main-content {
      flex-grow: 1;
      padding: 40px;
      overflow-y: auto;
      display: flex;
      justify-content: center;
    }
    .quiz-container {
      width: 100%;
      max-width: 800px;
    }
    /* 进度条 */
    .progress-wrapper { margin-bottom: 25px; }
    .progress-bar-bg {
      width: 100%;
      height: 8px;
      background-color: #e2e8f0;
      border-radius: 10px;
      overflow: hidden;
    }
    .progress-bar-fill {
      height: 100%;
      background-color: var(--primary-color);
      width: 0%;
      transition: width 0.3s ease;
    }
    .progress-text {
      font-size: 13px;
      color: var(--text-muted);
      text-align: right;
      margin-top: 6px;
      font-weight: bold;
    }
    /* 卡片 */
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.02);
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 12px;
    }
    .tag {
      background-color: #ebf8ff;
      color: #2b6cb0;
      font-size: 11px;
      font-weight: bold;
      padding: 4px 10px;
      border-radius: 20px;
    }
    .title { font-size: 18px; font-weight: bold; margin-bottom: 15px; }
    img {
      max-width: 100%;
      height: auto;
      margin: 20px auto;
      display: block;
      border: 1px solid #edf2f7;
      border-radius: 8px;
    }
    /* 选项组 */
    .options-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
      margin: 25px 0;
    }
    .option-btn {
      background-color: #f7fafc;
      border: 2px solid var(--border-color);
      border-radius: 12px;
      padding: 16px 0;
      font-size: 20px;
      font-weight: 800;
      color: #4a5568;
      cursor: pointer;
      transition: all 0.15s;
    }
    .option-btn:hover {
      background-color: #edf2f7;
      border-color: #cbd5e0;
    }
    .option-btn.correct {
      background-color: #f0fff4 !important;
      border-color: #38a169 !important;
      color: #276749 !important;
    }
    .option-btn.wrong {
      background-color: #fff5f5 !important;
      border-color: #e53e3e !important;
      color: #9b2c2c !important;
    }
    /* 底部反馈及按钮 */
    .footer-zone {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      margin-top: 20px;
    }
    .feedback { font-weight: bold; font-size: 16px; min-height: 24px; }
    .feedback.correct { color: #38a169; }
    .feedback.wrong { color: #e53e3e; }
    
    .action-btn {
      background-color: var(--primary-color);
      color: white;
      border: none;
      padding: 12px 32px;
      border-radius: 8px;
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(66,185,131,0.25);
      transition: all 0.2s;
    }
    .action-btn:hover {
      background-color: var(--primary-hover);
      transform: translateY(-1px);
    }
    /* 解析 */
    .analysis-box {
      margin-top: 25px;
      padding-top: 25px;
      border-top: 2px dashed var(--border-color);
      line-height: 1.7;
    }
    .empty-state {
      text-align: center;
      color: var(--text-muted);
      padding: 40px 0;
    }
  </style>
</head>
<body>

  <!-- 1. 左侧硬核分类导航栏 -->
  <div class="sidebar">
    <div class="sidebar-title">⚡ 电气错题本</div>
    <ul class="menu-list">
      <li class="menu-item active" onclick="switchCategory('circuit', this)">电路 (Circuit)</li>
      <li class="menu-item" onclick="switchCategory('power-system', this)">电力系统分析 (Power System)</li>
      <li class="menu-item" onclick="switchCategory('machines', this)">电机学 (Machines)</li>
      <li class="menu-item" onclick="switchCategory('power-electronics', this)">电力电子 (Power Electronics)</li>
      <li class="menu-item" onclick="switchCategory('high-voltage', this)">高电压技术 (High Voltage)</li>
      <li class="menu-item" onclick="switchCategory('protection', this)">继电保护 (Protection)</li>
      <li class="menu-item" onclick="switchCategory('equipment', this)">电气设备 (Equipment)</li>
      <li class="menu-item" onclick="switchCategory('general-aptitude', this)">一般能力 (General Aptitude)</li>
    </ul>
  </div>

  <!-- 2. 右侧主体刷题区 -->
  <div class="main-content">
    <div class="quiz-container">
      <!-- 进度条 -->
      <div class="progress-wrapper">
        <div class="progress-bar-bg">
          <div id="progress-fill" class="progress-bar-fill"></div>
        </div>
        <div id="progress-txt" class="progress-text">进度：0% (0/0)</div>
      </div>

      <!-- 题目展示卡片 -->
      <div id="quiz-card" class="card">
        <!-- 动态渲染内容 -->
      </div>
    </div>
  </div>

  <!-- 3. 引入题库脚本 -->
  <script src="questions.js"></script>

  <script>
    // ⚡ 自动化配置：自动获取当前 GitHub 仓库的用户名和仓库名，完美适配 jsDelivr 极速 CDN 通道！
    const pathSegments = window.location.pathname.split('/');
    const repoName = pathSegments[1] || 'review_Powergrid';
    const userName = window.location.hostname.split('.')[0] || 'suzie0121511-hate';
    const cdnBase = `https://cdn.jsdelivr.net/gh/${userName}/${repoName}@main/`;

    let activeQuestions = [];
    let currentIdx = 0;

    // 初始化加载“电路”板块
    window.onload = function() {
      loadCategory('circuit');
    };

    // 切换科目板块
    function switchCategory(catKey, menuEl) {
      document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
      menuEl.classList.add('active');
      loadCategory(catKey);
    }

    // 加载对应科目题目并洗牌打乱
    function loadCategory(catKey) {
      const rawData = quizData[catKey] || [];
      if (rawData.length === 0) {
        showEmptyState();
        return;
      }
      
      // 深度拷贝题目数据，避免破坏原始题库
      activeQuestions = JSON.parse(JSON.stringify(rawData));
      
      // 🔮 Fisher-Yates 完美打乱算法
      for (let i = activeQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [activeQuestions[i], activeQuestions[j]] = [activeQuestions[j], activeQuestions[i]];
      }

      currentIdx = 0;
      renderQuestion();
    }

    // 渲染当题界面
    function renderQuestion() {
      const card = document.getElementById('quiz-card');
      const q = activeQuestions[currentIdx];
      
      // CDN 图片极速加速链接合成
      const imgUrl = `${cdnBase}${q.image}`;

      card.innerHTML = `
        <div class="card-header">
          <span class="tag">${q.type || '单选题'}</span>
          <span style="font-size: 13px; font-weight: bold; color: var(--text-muted)">第 ${currentIdx + 1} / ${activeQuestions.length} 题</span>
        </div>
        <div class="title">${q.title}</div>
        <img src="${imgUrl}" alt="电路图" onerror="this.src='${q.image}'">
        <div class="options-grid">
          <button class="option-btn" data-letter="A" onclick="checkAnswer(this)">A</button>
          <button class="option-btn" data-letter="B" onclick="checkAnswer(this)">B</button>
          <button class="option-btn" data-letter="C" onclick="checkAnswer(this)">C</button>
          <button class="option-btn" data-letter="D" onclick="checkAnswer(this)">D</button>
        </div>
        <div class="footer-zone">
          <div id="feedback-txt" class="feedback"></div>
          <button id="next-btn" class="action-btn" style="display: none;" onclick="goNext()">下一题 ➔</button>
        </div>
        <div id="analysis-section" class="analysis-box" style="display: none;">
          <strong style="color: #2b6cb0;">✨ 标准答案：${q.answer}</strong><br><br>
          ${q.analysis}
        </div>
      `;
      
      updateProgress();
    }

    // 判断对错
    function checkAnswer(btn) {
      const q = activeQuestions[currentIdx];
      const feedback = document.getElementById('feedback-txt');
      const nextBtn = document.getElementById('next-btn');
      const analysisSection = document.getElementById('analysis-section');
      const allButtons = document.querySelectorAll('.option-btn');
      
      const selected = btn.getAttribute('data-letter');
      allButtons.forEach(b => b.className = 'option-btn'); // 复位颜色

      if (selected === q.answer) {
        btn.classList.add('correct');
        feedback.innerHTML = '🎉 回答正确！已解锁解析。';
        feedback.className = 'feedback correct';
        analysisSection.style.display = 'block';
        nextBtn.style.display = 'block';
      } else {
        btn.classList.add('wrong');
        feedback.innerHTML = '❌ 答案错误，再换一个选项试试！';
        feedback.className = 'feedback wrong';
      }
    }

    // 下一题
    function goNext() {
      currentIdx++;
      if (currentIdx < activeQuestions.length) {
        renderQuestion();
      } else {
        // 通关啦
        document.getElementById('progress-fill').style.width = '100%';
        document.getElementById('progress-txt').innerText = `进度：100% (${activeQuestions.length}/${activeQuestions.length})`;
        document.getElementById('quiz-card').innerHTML = `
          <div style="text-align: center; padding: 40px 0;">
            <h2 style="color: var(--primary-color); margin-bottom: 15px;">🎉 完美通关！</h2>
            <p style="color: var(--text-muted); font-size: 15px;">当前板块的所有错题已经全部攻克！</p>
            <button class="action-btn" style="margin-top: 25px;" onclick="location.reload()">重新打乱再练一次</button>
          </div>
        `;
      }
    }

    // 更新进度
    function updateProgress() {
      const fill = document.getElementById('progress-fill');
      const txt = document.getElementById('progress-txt');
      const percent = Math.round((currentIdx / activeQuestions.length) * 100);
      fill.style.width = `${percent}%`;
      txt.innerText = `当前进度：${percent}% (${currentIdx}/${activeQuestions.length} 题已完成)`;
    }

    // 无题目空状态显示
    function showEmptyState() {
      document.getElementById('progress-fill').style.width = '0%';
      document.getElementById('progress-txt').innerText = `进度：0% (0/0)`;
      document.getElementById('quiz-card').innerHTML = `
        <div class="empty-state">
          <h3>📭 当前板块暂无错题</h3>
          <p style="margin-top: 10px; font-size: 14px;">你可以通过修改 <code>questions.js</code> 往里面塞入错题数据哦！</p>
        </div>
      `;
    }
  </script>
</body>
</html>
