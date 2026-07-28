import { useEffect, useRef } from "react";
import * as THREE from "three";

export function FriendlyBotCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Group for the entire bot
    const botGroup = new THREE.Group();
    scene.add(botGroup);

    // Group for head (to rotate towards cursor)
    const headGroup = new THREE.Group();
    botGroup.add(headGroup);

    // Materials
    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf8fafc,
      roughness: 0.15,
      metalness: 0.1,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0x4f46e5, // Primary indigo
      roughness: 0.2,
      metalness: 0.3,
    });

    const screenMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Dark screen
      roughness: 0.1,
      metalness: 0.8,
    });

    const glowEyeMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8, // Cyan glow
    });

    const antennaGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
    });

    // --- HEAD ---
    // Rounded Head Base
    const headGeometry = new THREE.BoxGeometry(2.0, 1.5, 1.5, 8, 8, 8);
    const headMesh = new THREE.Mesh(headGeometry, bodyMaterial);
    headMesh.castShadow = true;
    headGroup.add(headMesh);

    // Screen (Front Face)
    const screenGeometry = new THREE.PlaneGeometry(1.6, 1.1);
    const screenMesh = new THREE.Mesh(screenGeometry, screenMaterial);
    screenMesh.position.set(0, 0, 0.76);
    headGroup.add(screenMesh);

    // Digital Eyes (Cute Pill/Oval Shapes)
    const eyeGeometry = new THREE.CapsuleGeometry(0.12, 0.22, 8, 16);
    
    // Left Eye
    const leftEye = new THREE.Mesh(eyeGeometry, glowEyeMaterial);
    leftEye.position.set(-0.4, 0.05, 0.78);
    leftEye.rotation.z = Math.PI / 12;
    headGroup.add(leftEye);

    // Right Eye
    const rightEye = new THREE.Mesh(eyeGeometry, glowEyeMaterial);
    rightEye.position.set(0.4, 0.05, 0.78);
    rightEye.rotation.z = -Math.PI / 12;
    headGroup.add(rightEye);

    // Mouth (Cute curve / smile)
    const mouthGeometry = new THREE.TorusGeometry(0.1, 0.025, 8, 16, Math.PI);
    const mouthMesh = new THREE.Mesh(mouthGeometry, glowEyeMaterial);
    mouthMesh.position.set(0, -0.25, 0.78);
    mouthMesh.rotation.z = Math.PI;
    headGroup.add(mouthMesh);

    // Ears / Side Knobs
    const earGeometry = new THREE.CylinderGeometry(0.22, 0.22, 0.2, 16);
    
    const leftEar = new THREE.Mesh(earGeometry, accentMaterial);
    leftEar.position.set(-1.1, 0, 0);
    leftEar.rotation.z = Math.PI / 2;
    headGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeometry, accentMaterial);
    rightEar.position.set(1.1, 0, 0);
    rightEar.rotation.z = Math.PI / 2;
    headGroup.add(rightEar);

    // Antenna Base & Pole
    const poleGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.4, 8);
    const antennaPole = new THREE.Mesh(poleGeometry, accentMaterial);
    antennaPole.position.set(0, 0.95, 0);
    headGroup.add(antennaPole);

    // Antenna Bulb
    const bulbGeometry = new THREE.SphereGeometry(0.16, 16, 16);
    const antennaBulb = new THREE.Mesh(bulbGeometry, antennaGlowMaterial);
    antennaBulb.position.set(0, 1.2, 0);
    headGroup.add(antennaBulb);

    headGroup.position.set(0, 0.5, 0);

    // --- BODY ---
    const bodyGroup = new THREE.Group();
    botGroup.add(bodyGroup);

    // Neck Ring
    const neckGeometry = new THREE.CylinderGeometry(0.35, 0.45, 0.2, 16);
    const neckMesh = new THREE.Mesh(neckGeometry, accentMaterial);
    neckMesh.position.set(0, -0.45, 0);
    bodyGroup.add(neckMesh);

    // Main Torso
    const torsoGeometry = new THREE.SphereGeometry(1.0, 32, 16);
    torsoGeometry.scale(1, 1.1, 0.85);
    const torsoMesh = new THREE.Mesh(torsoGeometry, bodyMaterial);
    torsoMesh.position.set(0, -1.2, 0);
    torsoMesh.castShadow = true;
    bodyGroup.add(torsoMesh);

    // Chest Badge/Light
    const badgeGeometry = new THREE.CircleGeometry(0.2, 32);
    const badgeMesh = new THREE.Mesh(badgeGeometry, antennaGlowMaterial);
    badgeMesh.position.set(0, -1.0, 0.86);
    bodyGroup.add(badgeMesh);

    // Arms
    const armGeometry = new THREE.CapsuleGeometry(0.14, 0.5, 8, 16);
    
    const leftArm = new THREE.Mesh(armGeometry, bodyMaterial);
    leftArm.position.set(-1.15, -1.1, 0);
    leftArm.rotation.z = Math.PI / 6;
    bodyGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, bodyMaterial);
    rightArm.position.set(1.15, -1.1, 0);
    rightArm.rotation.z = -Math.PI / 6;
    bodyGroup.add(rightArm);

    // Floating Base Shadow Glow
    const shadowGeo = new THREE.PlaneGeometry(2.5, 2.5);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x4f46e5,
      transparent: true,
      opacity: 0.25,
      map: createRadialTexture(),
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, -2.5, 0);
    scene.add(shadowMesh);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.2);
    mainLight.position.set(5, 8, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const purpleRimLight = new THREE.PointLight(0x818cf8, 4, 10);
    purpleRimLight.position.set(-4, 2, -2);
    scene.add(purpleRimLight);

    const cyanFrontLight = new THREE.PointLight(0x38bdf8, 2.5, 8);
    cyanFrontLight.position.set(0, 0, 4);
    scene.add(cyanFrontLight);

    // --- MOUSE TRACKING ---
    const mouse = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.x = Math.max(-1, Math.min(1, x));
      mouse.y = Math.max(-1, Math.min(1, y));
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth floating motion (Up and Down)
      botGroup.position.y = Math.sin(elapsedTime * 2.2) * 0.12;
      botGroup.rotation.z = Math.sin(elapsedTime * 1.5) * 0.02;

      // Arms sway slightly
      leftArm.rotation.z = Math.PI / 6 + Math.sin(elapsedTime * 2.2) * 0.06;
      rightArm.rotation.z = -Math.PI / 6 - Math.sin(elapsedTime * 2.2) * 0.06;

      // Smooth Mouse Look-At for Head
      targetRotation.y = mouse.x * 0.5;
      targetRotation.x = -mouse.y * 0.35;

      headGroup.rotation.y += (targetRotation.y - headGroup.rotation.y) * 0.08;
      headGroup.rotation.x += (targetRotation.x - headGroup.rotation.x) * 0.08;

      // Body slight reaction
      bodyGroup.rotation.y += (targetRotation.y * 0.25 - bodyGroup.rotation.y) * 0.05;

      // Pulse antenna bulb opacity
      antennaGlowMaterial.opacity = 0.8 + Math.sin(elapsedTime * 4) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[400px] lg:min-h-[550px] relative flex items-center justify-center"
    />
  );
}

// Helper to create radial gradient texture for shadow
function createRadialTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, "rgba(79, 70, 229, 0.7)");
    gradient.addColorStop(0.5, "rgba(79, 70, 229, 0.2)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
  }
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}
