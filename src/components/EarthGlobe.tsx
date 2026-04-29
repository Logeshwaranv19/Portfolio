import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Public-domain NASA texture maps (via a CORS-friendly CDN)
const EARTH_DAY    = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg';
const EARTH_NIGHT  = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_lights_2048.png';
const EARTH_CLOUDS = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_2048.png';
const EARTH_SPEC   = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg';
const EARTH_BUMP   = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg';

export function EarthGlobe({ size = 420 }: { size?: number }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = size;
    const H = size;

    // ── Scene ──
    const scene = new THREE.Scene();

    // ── Camera ──
    const camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 1000);
    camera.position.z = 2.8;

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();

    // ── Stars ──
    const starGeo = new THREE.BufferGeometry();
    const starPositions: number[] = [];
    for (let i = 0; i < 12000; i++) {
      const r = 80 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
    }
    const starSizes = new Float32Array(12000);
    const starSpeeds = new Float32Array(12000);
    for (let i = 0; i < 12000; i++) {
        starSizes[i] = 0.1 + Math.random() * 0.2;
        starSpeeds[i] = 0.01 + Math.random() * 0.05;
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    starGeo.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
    
    const starMat = new THREE.PointsMaterial({ 
      color: 0xffffff, 
      size: 0.18, 
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // ── Lighting ──
    const sun = new THREE.DirectionalLight(0xfff5e0, 2.0);
    sun.position.set(5, 3, 5);
    scene.add(sun);
    scene.add(new THREE.AmbientLight(0x111133, 0.6));

    // ── Earth ──
    const earthGeo = new THREE.SphereGeometry(1, 64, 64);
    const earthMat = new THREE.MeshPhongMaterial({
      map: loader.load(EARTH_DAY),
      bumpMap: loader.load(EARTH_BUMP),
      bumpScale: 0.05,
      specularMap: loader.load(EARTH_SPEC),
      specular: new THREE.Color(0x2244aa),
      shininess: 18,
    });
    const earth = new THREE.Mesh(earthGeo, earthMat);
    scene.add(earth);

    // ── Cloud layer ──
    const cloudGeo = new THREE.SphereGeometry(1.012, 64, 64);
    const cloudMat = new THREE.MeshPhongMaterial({
      map: loader.load(EARTH_CLOUDS),
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    });
    const clouds = new THREE.Mesh(cloudGeo, cloudMat);
    scene.add(clouds);

    // Night lights (emissive on dark side)
    const nightGeo = new THREE.SphereGeometry(1.001, 64, 64);
    const nightMat = new THREE.MeshBasicMaterial({
      map: loader.load(EARTH_NIGHT),
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.55,
    });
    scene.add(new THREE.Mesh(nightGeo, nightMat));

    // ── Atmosphere glow ──
    const atmGeo = new THREE.SphereGeometry(1.06, 64, 64);
    const atmMat = new THREE.MeshPhongMaterial({
      color: 0x4488ff,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(atmGeo, atmMat));

    // Outer glow ring
    const glowGeo = new THREE.SphereGeometry(1.14, 64, 64);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x2255cc,
      transparent: true,
      opacity: 0.04,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(glowGeo, glowMat));


    // ── Animate ──
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      earth.rotation.y += 0.003;
      clouds.rotation.y += 0.004;
      starField.rotation.y += 0.0005;
      starField.rotation.x += 0.0002;
      
      // Basic twinkle by rotating local sizes or just a global pulse if we want to be simple
      // For real twinkle we'd need a custom shader, but we can modulate opacity
      starMat.opacity = 0.7 + Math.sin(Date.now() * 0.002) * 0.2;
      
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ width: size, height: size, maxWidth: '100%', position: 'relative', borderRadius: '50%', overflow: 'hidden' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
