// js/components/TableView.js
import { sfx } from '../utils/audio.js';

export class TableView {
  constructor(canvasEl) {
    this.canvas = canvasEl;
    if (!this.canvas || typeof THREE === 'undefined') return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 16, 17);
    this.camera.lookAt(0, 1, 0);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.seatGroup = new THREE.Group();
    this.scene.add(this.seatGroup);
    this.avatarImageCache = {};

    this.initScene();
    this.initAuroraMagicCircle();
    this.initParticles();
    this.bindDrawButton();
    this.animate();
    window.addEventListener('resize', () => this.onWindowResize());
  }

  bindDrawButton() {
    const drawBtn = document.querySelector('.btn-draw-main');
    if (drawBtn) {
      drawBtn.addEventListener('click', () => {
        sfx.playClickCard();
      });
    }
  }

  initScene() {
    // 1. 背景沉浸深紫色
    this.scene.background = new THREE.Color(0x0a081d);

    // 2. 環境光與方向光
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 0.55);
    this.scene.add(ambientLight);

    this.spotLight1 = new THREE.SpotLight(0xfebd59, 1.6);
    this.spotLight1.position.set(0, 25, 5);
    this.spotLight1.angle = Math.PI / 3;
    this.spotLight1.penumbra = 0.8;
    this.scene.add(this.spotLight1);

    this.spotLight2 = new THREE.SpotLight(0xa855f7, 1.0);
    this.spotLight2.position.set(-15, 20, -10);
    this.spotLight2.angle = Math.PI / 4;
    this.spotLight2.penumbra = 0.9;
    this.scene.add(this.spotLight2);

    this.auroraPointLight = new THREE.PointLight(0x4ade80, 0, 15);
    this.auroraPointLight.position.set(0, 1.5, 0);
    this.scene.add(this.auroraPointLight);

    const tableTexture = this.createTableCanvasTexture();

    const tableGeometry = new THREE.CylinderGeometry(7.2, 7.4, 0.4, 64);
    const tableMaterial = new THREE.MeshStandardMaterial({
      map: tableTexture,
      roughness: 0.45,
      metalness: 0.1
    });
    this.tableMesh = new THREE.Mesh(tableGeometry, tableMaterial);
    this.tableMesh.position.set(0, -0.2, 0);
    this.scene.add(this.tableMesh);

    const borderGeometry = new THREE.CylinderGeometry(7.7, 7.7, 0.5, 64);
    const borderMaterial = new THREE.MeshStandardMaterial({ color: 0x2e1065, roughness: 0.2, metalness: 0.3 });
    const border = new THREE.Mesh(borderGeometry, borderMaterial);
    border.position.set(0, -0.26, 0);
    this.scene.add(border);
  }

  initAuroraMagicCircle() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, 1024, 1024);
    ctx.save();
    ctx.translate(512, 512);

    const auroraGrad = ctx.createRadialGradient(0, 0, 50, 0, 0, 500);
    auroraGrad.addColorStop(0, 'rgba(250, 204, 21, 0.75)');
    auroraGrad.addColorStop(0.3, 'rgba(52, 211, 153, 0.7)');
    auroraGrad.addColorStop(0.65, 'rgba(56, 189, 248, 0.6)');
    auroraGrad.addColorStop(0.88, 'rgba(168, 85, 247, 0.45)');
    auroraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.strokeStyle = auroraGrad;
    ctx.shadowColor = '#10b981';
    ctx.shadowBlur = 15;
    ctx.lineWidth = 12;

    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * 144 - 90) * (Math.PI / 180);
      const x = Math.cos(angle) * 460;
      const y = Math.sin(angle) * 460;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();

    ctx.lineWidth = 6;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * 144 - 90 + 36) * (Math.PI / 180);
      const x = Math.cos(angle) * 280;
      const y = Math.sin(angle) * 280;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();

    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(0, 0, 475, 0, Math.PI * 2);
    ctx.stroke();

    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, 270, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    const planeGeo = new THREE.PlaneGeometry(13.2, 13.2);
    this.auroraMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });

    this.auroraCircleMesh = new THREE.Mesh(planeGeo, this.auroraMaterial);
    this.auroraCircleMesh.rotation.x = -Math.PI / 2;
    this.auroraCircleMesh.position.set(0, 0.05, 0);
    this.scene.add(this.auroraCircleMesh);
  }

  createTableCanvasTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#3259d8';
    ctx.fillRect(0, 0, 1024, 1024);

    ctx.beginPath();
    ctx.arc(512, 512, 480, 0, Math.PI * 2);
    ctx.lineWidth = 32;
    ctx.strokeStyle = '#d97706';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(512, 512, 460, 0, Math.PI * 2);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#fef08a';
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  triggerMagicCircleGlow() {
    if (window.gsap && this.auroraCircleMesh) {
      gsap.to(this.auroraPointLight, { intensity: 1.8, duration: 0.35, yoyo: true, repeat: 1 });
      gsap.to(this.spotLight1, { intensity: 2.1, duration: 0.35, yoyo: true, repeat: 1 });

      gsap.to(this.auroraCircleMesh.rotation, {
        z: this.auroraCircleMesh.rotation.z + Math.PI * 2,
        duration: 1.2,
        ease: "power2.out"
      });

      gsap.to(this.auroraCircleMesh.position, {
        y: 1.0,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut"
      });

      gsap.to(this.auroraMaterial, {
        opacity: 0.68,
        duration: 0.35,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
        onComplete: () => {
          this.auroraMaterial.opacity = 0.35;
        }
      });
    }
  }

  triggerGrandEndingSequence(onTransitionComplete) {
    let whiteOverlay = document.getElementById('ending-white-overlay');
    if (!whiteOverlay) {
      whiteOverlay = document.createElement('div');
      whiteOverlay.id = 'ending-white-overlay';
      document.body.appendChild(whiteOverlay);
    }
    whiteOverlay.classList.remove('active', 'fade-out');

    if (window.gsap && this.auroraCircleMesh) {
      gsap.to(this.auroraPointLight, { intensity: 6, duration: 2.8, ease: "power2.in" });
      gsap.to(this.spotLight1, { intensity: 3.2, duration: 2.8 });
      gsap.to(this.spotLight2, { intensity: 2.5, duration: 2.8 });

      gsap.to(this.auroraCircleMesh.rotation, {
        z: this.auroraCircleMesh.rotation.z + Math.PI * 6,
        duration: 3.2,
        ease: "power2.in"
      });

      gsap.to(this.auroraCircleMesh.position, {
        y: 4.5,
        duration: 3.0,
        ease: "power1.in"
      });

      gsap.to(this.auroraCircleMesh.scale, {
        x: 1.8,
        y: 1.8,
        duration: 3.0,
        ease: "power1.in"
      });

      gsap.to(this.auroraMaterial, {
        opacity: 0.85,
        duration: 2.5
      });

      setTimeout(() => {
        whiteOverlay.classList.add('active');
      }, 2200);

      setTimeout(() => {
        if (onTransitionComplete) onTransitionComplete();

        this.auroraCircleMesh.position.set(0, 0.05, 0);
        this.auroraCircleMesh.scale.set(1, 1, 1);
        this.auroraMaterial.opacity = 0.35;
        this.auroraPointLight.intensity = 0;
        this.spotLight1.intensity = 1.6;
        this.spotLight2.intensity = 1.0;

        setTimeout(() => {
          whiteOverlay.classList.add('fade-out');
          setTimeout(() => {
            whiteOverlay.classList.remove('active', 'fade-out');
          }, 800);
        }, 100);
      }, 3200);

    } else {
      whiteOverlay.classList.add('active');
      setTimeout(() => {
        if (onTransitionComplete) onTransitionComplete();
        whiteOverlay.classList.remove('active');
      }, 2000);
    }
  }

  scrollToLatestCard() {
    const container = document.getElementById('drawn-cards');
    if (!container) return;
    setTimeout(() => {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: 'smooth'
      });
    }, 80);
  }

  // 初始化浮空螢火粒子系統
  initParticles() {
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xfbbf24);
    const emeraldColor = new THREE.Color(0x34d399);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = Math.random() * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 35;

      const pColor = Math.random() > 0.4 ? goldColor : emeraldColor;
      colors[i * 3] = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, particleMaterial);
    this.scene.add(this.particles);
  }

  getLoadedAvatarImage(avatarUrl) {
    if (this.avatarImageCache[avatarUrl]) {
      return this.avatarImageCache[avatarUrl];
    }
    const img = new Image();
    img.src = avatarUrl;
    img.onload = () => {
      this.avatarImageCache[avatarUrl] = img;
    };
    return img;
  }

  createPlayerTexture(player, isActive, flashEffect = null) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, 512, 512);

    ctx.fillStyle = '#000000';
    ctx.fillRect(20, 20, 480, 480);

    ctx.fillStyle = '#2e1065';
    ctx.fillRect(10, 10, 480, 480);

    let borderColor = '#6b21a8';
    if (flashEffect === 'good') borderColor = '#22c55e';
    else if (flashEffect === 'fail') borderColor = '#ef4444';
    else if (isActive) borderColor = '#f59e0b';

    ctx.lineWidth = isActive ? 24 : 12;
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(20, 20, 460, 460);

    if (isActive) {
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#fef08a';
      ctx.strokeRect(32, 32, 436, 436);
    }

    ctx.save();
    ctx.beginPath();
    ctx.arc(256, 170, 100, 0, Math.PI * 2);
    ctx.fillStyle = '#1e1b4b';
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = isActive ? '#facc15' : '#4338ca';
    ctx.stroke();

    const avatarImg = this.getLoadedAvatarImage(player.avatar);
    if (avatarImg && avatarImg.complete && avatarImg.naturalWidth !== 0) {
      ctx.beginPath();
      ctx.arc(256, 170, 92, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(avatarImg, 164, 78, 184, 184);
    } else {
      ctx.font = '120px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('👤', 256, 170);
    }
    ctx.restore();

    ctx.fillStyle = '#fef08a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';

    let fontSize = 48;
    let displayName = player.name || '玩家';
    ctx.font = `900 ${fontSize}px "Press Start 2P", "Microsoft JhengHei", sans-serif`;
    
    while (ctx.measureText(displayName).width > 420 && fontSize > 24) {
      fontSize -= 4;
      ctx.font = `900 ${fontSize}px "Press Start 2P", "Microsoft JhengHei", sans-serif`;
    }
    if (ctx.measureText(displayName).width > 420) {
      displayName = displayName.substring(0, 10) + '...';
    }

    ctx.fillText(displayName, 256, 330);

    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 44px "Microsoft JhengHei", sans-serif';
    ctx.fillText(`⭐ ${player.score} 分`, 256, 415);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  renderSeats(players, activeIndex, effectType = null) {
    while (this.seatGroup.children.length > 0) {
      this.seatGroup.remove(this.seatGroup.children[0]);
    }

    if (effectType === 'good') {
      this.triggerMagicCircleGlow();
      this.scrollToLatestCard();
    }

    const total = players.length;
    const radius = 5.8;

    players.forEach((player, i) => {
      const angle = (i / total) * Math.PI * 2;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      const isActive = (i === activeIndex);

      const planeGeo = new THREE.PlaneGeometry(3.1, 3.1);
      const isTargetEffect = (isActive && effectType);
      const texture = this.createPlayerTexture(player, isActive, isTargetEffect ? effectType : null);
      const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide });

      const cardMesh = new THREE.Mesh(planeGeo, mat);
      cardMesh.position.set(x, isActive ? 1.5 : 0.8, z);
      cardMesh.lookAt(this.camera.position);

      if (isTargetEffect && effectType === 'fail' && window.gsap) {
        gsap.to(cardMesh.position, {
          x: x + 0.35,
          duration: 0.08,
          yoyo: true,
          repeat: 5,
          onComplete: () => cardMesh.position.set(x, isActive ? 1.5 : 0.8, z)
        });
      }

      this.seatGroup.add(cardMesh);
    });

    const targetAngle = (activeIndex / total) * Math.PI * 2;
    const camRadius = 15;
    const targetX = Math.sin(targetAngle) * camRadius;
    const targetZ = Math.cos(targetAngle) * camRadius;

    if (window.gsap) {
      gsap.to(this.camera.position, {
        x: targetX, y: 16, z: targetZ, duration: 1.2, ease: "power2.inOut",
        onUpdate: () => {
          this.camera.lookAt(0, 1.0, 0);
          this.seatGroup.children.forEach(mesh => mesh.lookAt(this.camera.position));
        }
      });
    } else {
      this.camera.position.set(targetX, 16, targetZ);
      this.camera.lookAt(0, 1.0, 0);
    }
  }

  onWindowResize() {
    if (!this.canvas || !this.renderer || !this.camera) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.auroraCircleMesh) {
      this.auroraCircleMesh.rotation.z += 0.003;
    }

    if (this.particles) {
      const positions = this.particles.geometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += 0.012;
        if (positions[i] > 20) positions[i] = 0;
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
    }

    if (this.renderer && this.scene && this.camera) {
      this.seatGroup.children.forEach(mesh => mesh.lookAt(this.camera.position));
      this.renderer.render(this.scene, this.camera);
    }
  }
}