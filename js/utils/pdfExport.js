// js/utils/pdfExport.js
export function generateStorybook(players, playedCards, storyText) {
  // 1. 整理排行榜資料
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const mvp = sortedPlayers[0] ? sortedPlayers[0].name : '無';

  // 2. 整理卡牌歷史 HTML
  const cardsListHtml = playedCards.map((card, idx) => `
    <div class="story-card-item">
      <span class="card-num">第 ${idx + 1} 步</span>
      <div class="card-icon">${card.icon || '📖'}</div>
      <div class="card-name">${card.name}</div>
      <div class="card-tag">${card.tag || '卡牌'}</div>
    </div>
  `).join('');

  // 3. 處理故事內文格式 (換行轉為 HTML 段落)
  const formattedStory = storyText
    ? storyText.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('')
    : '<p style="color: #94a3b8; text-align: center;">（本次大冒險未錄入故事內容）</p>';

  // 4. 生成繪本美化 HTML 結構
  const storybookContent = `
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
      <meta charset="UTF-8">
      <title>今天也要前往異世界?! · 故事繪本</title>
      <style>
        @page { size: A4; margin: 15mm; }
        body {
          font-family: "Microsoft JhengHei", "Heiti TC", sans-serif;
          color: #1e293b;
          background: #ffffff;
          padding: 20px;
          margin: 0;
        }
        .book-container {
          max-width: 800px;
          margin: 0 auto;
          border: 6px double #3b82f6;
          border-radius: 20px;
          padding: 30px;
        }
        .header-title {
          text-align: center;
          color: #1d4ed8;
          font-size: 28px;
          font-weight: 900;
          margin-bottom: 5px;
        }
        .header-subtitle {
          text-align: center;
          color: #64748b;
          font-size: 14px;
          margin-bottom: 25px;
        }
        .section-box {
          background: #f8fafc;
          border-radius: 12px;
          padding: 15px 20px;
          margin-bottom: 20px;
          border-left: 5px solid #3b82f6;
        }
        .section-title {
          font-size: 18px;
          font-weight: bold;
          color: #0f172a;
          margin-bottom: 10px;
        }
        .leaderboard-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }
        .leaderboard-table th, .leaderboard-table td {
          border: 1px solid #cbd5e1;
          padding: 8px 12px;
          text-align: center;
        }
        .leaderboard-table th { background: #e2e8f0; font-weight: bold; }
        .mvp-tag { color: #d97706; font-weight: bold; }

        .cards-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }
        .story-card-item {
          width: 110px;
          border: 2px solid #93c5fd;
          background: #eff6ff;
          border-radius: 10px;
          padding: 8px;
          text-align: center;
        }
        .card-num { font-size: 10px; color: #2563eb; font-weight: bold; }
        .card-icon { font-size: 28px; margin: 4px 0; }
        .card-name { font-size: 12px; font-weight: bold; color: #1e293b; }
        .card-tag { font-size: 9px; color: #64748b; }

        .story-body {
          line-height: 1.8;
          font-size: 15px;
          color: #334155;
          white-space: pre-line;
        }
        .story-body p { margin-bottom: 12px; }

        .footer-note {
          text-align: center;
          font-size: 12px;
          color: #94a3b8;
          margin-top: 30px;
          border-top: 1px dashed #cbd5e1;
          padding-top: 15px;
        }

        @media print {
          body { padding: 0; }
          .book-container { border: 2px solid #3b82f6; }
          .no-print { display: none !important; }
        }
      </style>
    </head>
    <body>
      <div class="book-container">
        <div class="header-title">遊玩記錄</div>
        <div class="header-subtitle">今天也要前往異世界?!</div>

        <div class="section-box">
          <div class="section-title">🏆 英雄榜 (MVP: <span class="mvp-tag">${mvp}</span>)</div>
          <table class="leaderboard-table">
            <thead>
              <tr>
                <th>名次</th>
                <th>玩家姓名</th>
                <th>獲得星數</th>
                <th>抽取的卡牌數</th>
              </tr>
            </thead>
            <tbody>
              ${sortedPlayers.map((p, idx) => `
                <tr>
                  <td>第 ${idx + 1} 名</td>
                  <td><b>${p.name}</b></td>
                  <td>⭐ ${p.score} 分</td>
                  <td>${p.drawnCards ? p.drawnCards.length : 0} 張</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="section-box">
          <div class="section-title">🃏 故事創作靈感軌跡</div>
          <div class="cards-grid">
            ${cardsListHtml || '<div style="color:#94a3b8;">無卡牌紀錄</div>'}
          </div>
        </div>

        <div class="section-box">
          <div class="section-title">✍️ 故事記錄簿</div>
          <div class="story-body">
            ${formattedStory}
          </div>
        </div>

        <div class="footer-note">
          © 2026 奇老師的資源教室 All Rights Reserved.
        </div>
      </div>
    </body>
    </html>
  `;

  // 5. 採用隱藏式 Iframe 自動注入並觸發 Print (避免 about:blank 視窗彈窗阻擋)
  let printFrame = document.getElementById('print-iframe');
  if (!printFrame) {
    printFrame = document.createElement('iframe');
    printFrame.id = 'print-iframe';
    printFrame.style.position = 'fixed';
    printFrame.style.right = '0';
    printFrame.style.bottom = '0';
    printFrame.style.width = '0';
    printFrame.style.height = '0';
    printFrame.style.border = '0';
    document.body.appendChild(printFrame);
  }

  const frameDoc = printFrame.contentWindow.document;
  frameDoc.open();
  frameDoc.write(storybookContent);
  frameDoc.close();

  // 等待樣式與圖片加載完成後觸發列印
  setTimeout(() => {
    printFrame.contentWindow.focus();
    printFrame.contentWindow.print();
  }, 400);
}