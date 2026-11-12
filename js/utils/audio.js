// js/utils/audio.js

// 1. 原音效播放控制
class SoundEffects {
  constructor() {
    this.ctx = null;
    // 🎵 實體音效物件：點擊卡牌 / 按鈕音效
    this.clickAudio = new Audio('./assets/audio/click_the_card.mp3');
    this.clickAudio.volume = 0.6; // 預設獨立音量 (可自由調整)
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  // 🎵 專屬點擊音效 (點擊抽牌、選擇卡牌、說得好、不行)
  playClickCard() {
    try {
      this.clickAudio.currentTime = 0; // 重置進度，確保快速連續點擊時流暢發聲
      const playPromise = this.clickAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // 捕捉瀏覽器自動播放阻擋限制
        });
      }
    } catch (e) {}
  }

  playTurn() {
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, this.ctx.currentTime + 0.15); // E5
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch (e) {}
  }

  playCardSelect() {
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch (e) {}
  }
}

export const sfx = new SoundEffects();

// 2. 智慧音量背景音樂管理器 (BGM Manager)
class BGMManager {
  constructor() {
    this.audio = new Audio();
    this.audio.loop = true;
    this.masterVolume = 0.2; // 預設小聲
    this.normalGameVolume = 0.2;
    this.storytellingVolume = 0.08; // 說故事環節再降低
    this.isMuted = false;
    this.hasUserAdjustedVolume = false; // 手動切換鎖定標記
    this.currentTrack = null;

    // 🏆 新增結算專屬 BGM (僅播放一次)
    this.endBgmAudio = new Audio('./assets/audio/bgm_end.mp3');
    this.endBgmAudio.loop = false; // 🎯 不重複播放
    this.endBgmAudio.volume = 0.5;

    // 定義首頁與各牌組背景音樂路徑
    this.tracks = {
      home: './assets/audio/bgm_home.mp3',
      school: './assets/audio/bgm_school.mp3',
      magic: './assets/audio/bgm_magic.mp3',
      detective: './assets/audio/bgm_detective.mp3',
      warm: './assets/audio/bgm_warm.mp3',
      suspense: './assets/audio/bgm_suspense.mp3',
      default: './assets/audio/bgm_default.mp3'
    };
  }

  // 手動調整音量時調用 (會鎖定自動調音)
  setUserVolume(vol) {
    this.hasUserAdjustedVolume = true;
    this.masterVolume = Math.max(0, Math.min(1, vol));
    this.audio.volume = this.isMuted ? 0 : this.masterVolume;
    if (this.endBgmAudio) {
      this.endBgmAudio.volume = this.isMuted ? 0 : this.masterVolume;
    }
  }

  // 進入/離開 說故事環節
  setStorytellingMode(isStorytelling) {
    if (this.hasUserAdjustedVolume) return;
    const targetVol = isStorytelling ? this.storytellingVolume : this.normalGameVolume;
    this.masterVolume = targetVol;
    this.audio.volume = this.isMuted ? 0 : this.masterVolume;
  }

  toggleMute() {
    this.hasUserAdjustedVolume = true;
    this.isMuted = !this.isMuted;
    this.audio.volume = this.isMuted ? 0 : this.masterVolume;
    if (this.endBgmAudio) {
      this.endBgmAudio.volume = this.isMuted ? 0 : this.masterVolume;
    }
    return this.isMuted;
  }

  // 回到首頁時重置手動鎖定
  resetUserOverride() {
    this.hasUserAdjustedVolume = false;
    this.masterVolume = 0.2;
    this.audio.volume = this.isMuted ? 0 : this.masterVolume;
    if (this.endBgmAudio) {
      this.endBgmAudio.pause();
      this.endBgmAudio.currentTime = 0;
    }
  }

  playTrack(trackKeyOrPath) {
    if (this.endBgmAudio) {
      this.endBgmAudio.pause();
      this.endBgmAudio.currentTime = 0;
    }

    let src = this.tracks[trackKeyOrPath] || trackKeyOrPath;
    if (!src || src === 'undefined') src = this.tracks['school'];

    if (this.currentTrack === src && !this.audio.paused) return;

    this.currentTrack = src;
    this.audio.src = src;
    this.audio.volume = this.isMuted ? 0 : this.masterVolume;

    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }

  // 🏆 播放結算專屬 BGM (播放單次)
  playEndBGM() {
    this.stop();
    if (this.isMuted) return;
    this.endBgmAudio.currentTime = 0;
    const playPromise = this.endBgmAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}

export const bgm = new BGMManager();