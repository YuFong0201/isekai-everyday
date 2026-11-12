// js/components/StoryRecorder.js
export class StoryRecorder {
  constructor(textareaEl, finishBtnEl, onFinishCallback) {
    this.textarea = textareaEl;
    this.finishBtn = finishBtnEl;
    this.onFinish = onFinishCallback;

    if (this.finishBtn) {
      this.finishBtn.addEventListener('click', () => {
        if (this.onFinish) {
          this.onFinish(this.getText());
        }
      });
    }
  }

  getText() {
    return this.textarea ? this.textarea.value.trim() : '';
  }

  appendLog(playerName, cardName) {
    if (!this.textarea) return;
    const logText = `\n【${playerName} 使用了卡牌：${cardName}】\n`;
    this.textarea.value += logText;
    this.textarea.scrollTop = this.textarea.scrollHeight;
  }
}