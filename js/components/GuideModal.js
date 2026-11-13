// js/components/GuideModal.js
import { sfx } from '../utils/audio.js';

export class GuideModal {
  constructor() {
    this.modalEl = null;
    this.initModal();
  }

  initModal() {
    this.modalEl = document.createElement('div');
    this.modalEl.id = 'guide-modal-overlay';
    this.modalEl.className = 'guide-modal-overlay hidden';

    this.modalEl.innerHTML = `
      <div class="guide-modal-content">
        <!-- 頂部標題與關閉按鈕 -->
        <div class="guide-modal-header">
          <h2 class="guide-modal-title">📖 遊戲冒險指南</h2>
          <button type="button" class="btn-guide-close" id="btn-close-guide" aria-label="關閉">✖</button>
        </div>

        <!-- 滾動內容區 -->
        <div class="guide-modal-body">
          <div class="guide-story-box">
            <p>在看似平凡的校園生活背後，其實隱藏著一個巨大的秘密！</p>
            <p>據說，每當放學鐘聲響起，學校舊圖書館角落那張刻有閃耀魔法陣的古木桌就會悄悄發光。這是一扇通往奇幻異世界的「時空之門」！</p>
            <p>今天放學後，魔法陣再次亮起了璀璨的極光，召喚你們前往未知的異世界！</p>
            <p>然而，進入異世界的唯一方法，就是大家圍坐在魔法陣旁，合力講出一個最精彩、最刺激的冒險故事！每一次抽出的卡牌，都是異世界給予你們的命運考驗。</p>
            <p class="guide-highlight">同學們，準備好了嗎？今天也要前往異世界囉！</p>
          </div>

          <hr class="guide-divider" />

          <h3 class="guide-section-title">🎲 冒險四步驟</h3>
          
          <div class="guide-steps-grid">
            <div class="guide-step-card">
              <div class="step-num">1</div>
              <div class="step-info">
                <h4>創立小隊</h4>
                <ul>
                  <li><strong>選擇隊員人數：</strong>支援 2 ~ 6 位玩家或小組一起遊玩。</li>
                  <li><strong>輸入名字與選頭像：</strong>輸入自己的姓名或組別名稱，挑選一張你最喜歡的動物角色！</li>
                  <li><strong>選擇冒險地圖：</strong>挑選今天想去的異世界故事主題，並設定冒險時間。</li>
                </ul>
              </div>
            </div>

            <div class="guide-step-card">
              <div class="step-num">2</div>
              <div class="step-info">
                <h4>第一位勇者出發</h4>
                <p>由第 1 位玩家點擊中央的 <strong>「召喚卡牌」</strong> 按鈕。</p>
              </div>
            </div>

            <div class="guide-step-card">
              <div class="step-num">3</div>
              <div class="step-info">
                <h4>選牌組合與說故事大爆發</h4>
                <p><strong>每位玩家輪到自己的回合時：</strong></p>
                <ul>
                  <li><strong>抽牌（1 ~ 3 張）：</strong>畫面會出現 <strong>5 張故事卡 + 1 張放棄牌</strong>，你可以挑選 <strong>1 到 3 張</strong>想放入故事的元素（例如：人物＋地點＋事件），按下「確定選牌」（若沒靈感也可點「放棄牌」跳過喔）。</li>
                  <li><strong>展開冒險故事：</strong>選完牌後，進入你的說故事時間！發揮想像力，把選中的這幾張卡牌全部串連講進同一個故事裡！</li>
                </ul>
                <div class="guide-tip-box">
                  💡 <strong>小秘訣：</strong>可以安排一位同學，在文字框打字記錄故事，這樣忘記故事發展時，就能隨時點擊左下角 <strong>「📜 瀏覽故事記錄」</strong>，查看之前隊員說過的故事，方便你接下去講喔！
                </div>
              </div>
            </div>

            <div class="guide-step-card">
              <div class="step-num">4</div>
              <div class="step-info">
                <h4>說故事評分環節 (由同學和老師決定)</h4>
                <ul>
                  <li><span class="tag-good">👍 說得好 (+1 ~ +3 分)</span>：同學們覺得故事太讚了！選幾張牌就獲得幾分（1張 +1分、2張 +2分、3張 +3分）。</li>
                  <li><span class="tag-fail">👎 不行 / 放棄 (+0 分)</span>：同學們覺得故事講得太勉強、離題，或選擇放棄牌，這次不加分。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 底部確認按鈕 -->
        <div class="guide-modal-footer">
          <button type="button" class="btn-pixel-primary" id="btn-guide-confirm">我知道了，開始冒險</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.modalEl);

    const btnClose = this.modalEl.querySelector('#btn-close-guide');
    const btnConfirm = this.modalEl.querySelector('#btn-guide-confirm');

    if (btnClose) btnClose.addEventListener('click', () => this.close());
    if (btnConfirm) btnConfirm.addEventListener('click', () => this.close());
    
    this.modalEl.addEventListener('click', (e) => {
      if (e.target === this.modalEl) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalEl && !this.modalEl.classList.contains('hidden')) {
        this.close();
      }
    });
  }

  open() {
    if (sfx && sfx.playClickCard) sfx.playClickCard();
    if (this.modalEl) {
      this.modalEl.classList.remove('hidden');
      const bodyEl = this.modalEl.querySelector('.guide-modal-body');
      if (bodyEl) bodyEl.scrollTop = 0;
    }
  }

  close() {
    if (sfx && sfx.playClickCard) sfx.playClickCard();
    if (this.modalEl) {
      this.modalEl.classList.add('hidden');
    }
  }
}