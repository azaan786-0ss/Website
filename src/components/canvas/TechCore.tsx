import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function TechCore() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Create a high-tech abstract geometric core
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0x4f46e5,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const core = new THREE.Mesh(geometry, material);
    scene.add(core);

    // Inner core
    const innerGeo = new THREE.SphereGeometry(0.5, 32, 32);
    const innerMat = new THREE.MeshPhongMaterial({ color: 0x4f46e5, emissive: 0x4f46e5, emissiveIntensity: 0.5 });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 3;

    let animationId: number;
    function animate() {
      animationId = requestAnimationFrame(animate);
      core.rotation.x += 0.005;
      core.rotation.y += 0.005;
      innerSphere.rotation.y -= 0.01;
      renderer.render(scene, camera);
    }

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
