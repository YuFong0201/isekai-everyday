// js/engine/Timer.js
export class GameTimer {
  constructor(durationMinutes, onTickCallback, onEndCallback) {
    this.remainingSeconds = durationMinutes * 60;
    this.onTick = onTickCallback;
    this.onEnd = onEndCallback;
    this.intervalId = null;
    this.isRunning = false;
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.intervalId = setInterval(() => {
      this.remainingSeconds--;
      if (this.onTick) this.onTick(this.formatTime());
      
      if (this.remainingSeconds <= 0) {
        this.stop();
        if (this.onEnd) this.onEnd();
      }
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning = false;
  }

  formatTime() {
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
}