import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function MobileTechCore() {
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
    const geometry = new THREE.IcosahedronGeometry(1.2, 1);
    const material = new THREE.MeshPhongMaterial({
        color: 0x4f46e5,
        wireframe: true,
        transparent: true,
        opacity: 0.5
    });
    const core = new THREE.Mesh(geometry, material);
    scene.add(core);

    // Inner core
    const innerGeo = new THREE.SphereGeometry(0.6, 32, 32);
    const innerMat = new THREE.MeshPhongMaterial({ 
      color: 0x4f46e5, 
      emissive: 0x4f46e5, 
      emissiveIntensity: 0.4, 
      transparent: true, 
      opacity: 0.8 
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);
    
    // Outer ring
    const ringGeo = new THREE.TorusGeometry( 1.8, 0.02, 16, 100 ); 
    const ringMat = new THREE.MeshBasicMaterial( { color: 0x777587, transparent: true, opacity: 0.3 } ); 
    const ring = new THREE.Mesh( ringGeo, ringMat );
    scene.add( ring );

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    camera.position.z = 4;

    let animationId: number;

    function animate() {
        animationId = requestAnimationFrame(animate);
        core.rotation.x += 0.002;
        core.rotation.y += 0.003;
        innerSphere.rotation.y -= 0.005;
        ring.rotation.x += 0.001;
        ring.rotation.y += 0.002;
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
