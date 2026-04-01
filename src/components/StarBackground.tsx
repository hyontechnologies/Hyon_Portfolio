"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState, useMemo } from "react";
import * as THREE from "three";

// Pre-allocate objects outside the render loop (useFrame) 
// to prevent garbage collection stuttering.
const DUMMY_VECTOR = new THREE.Vector3();
const DUMMY_COLOR = new THREE.Color();

function CustomStars({ count = 5000 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // 1 & 2. Star geometry created once (useMemo) with Float32Array
  // Replaces individual meshes with a single Points geometry.
  const { geometry, material } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const radius = 300;

    for (let i = 0; i < count; i++) {
       // Spread stars inside a sphere volume
       const r = radius * Math.cbrt(Math.random());
       const theta = Math.random() * 2 * Math.PI;
       const phi = Math.acos(2 * Math.random() - 1);
       
       positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);     // x
       positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // y
       positions[i * 3 + 2] = r * Math.cos(phi);                   // z
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // 4. Cheaper unlit material (PointsMaterial acts like MeshBasicMaterial for points) -> zero lighting calculations
    const mat = new THREE.PointsMaterial({
      size: 1.2,
      color: 0xffffff,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    });
    
    return { geometry: geo, material: mat };
  }, [count]);

  // 5. Dispose geometries and materials on unmount
  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);
  
  // 6. No new objects created inside useFrame
  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.02;
      pointsRef.current.rotation.y += delta * 0.01;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

function Planet() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // OPTIMIZATION RECOMMENDATION: Textures
  // If visual textures are added instead of colors, compress them via KTX2 or basis-universal.
  // Using Drei's useKTX2() hook ensures textures are loaded directly into GPU VRAM,
  // bypassing the CPU decoding overhead and saving massive memory compared to PNG/JPEG.

  const planetGeo = useMemo(() => new THREE.SphereGeometry(2.5, 64, 64), []);
  const planetMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#4a1a8a",
    emissive: "#2d1060",
    emissiveIntensity: 0.3,
    roughness: 0.7,
    metalness: 0.3,
  }), []);

  const atmosGeo = useMemo(() => new THREE.SphereGeometry(2.7, 64, 64), []);
  const atmosMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#7c3aed",
    transparent: true,
    opacity: 0.15,
    side: THREE.BackSide,
  }), []);

  const ringGeo = useMemo(() => new THREE.TorusGeometry(3.5, 0.1, 16, 100), []);
  const ringMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#a855f7",
    emissive: "#a855f7",
    emissiveIntensity: 0.5,
    transparent: true,
    opacity: 0.4,
  }), []);

  useEffect(() => {
    return () => {
      planetGeo.dispose();
      planetMat.dispose();
      atmosGeo.dispose();
      atmosMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, [planetGeo, planetMat, atmosGeo, atmosMat, ringGeo, ringMat]);

  // Modifying scalar values (rotation.y) instead of allocating wrappers
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, -0.5, 0]} geometry={planetGeo} material={planetMat} />
      {/* Atmosphere glow */}
      <mesh position={[0, -0.5, 0]} geometry={atmosGeo} material={atmosMat} />
      {/* Ring */}
      <mesh position={[0, -0.5, 0]} rotation={[Math.PI / 3, 0.2, 0]} geometry={ringGeo} material={ringMat} />
    </Float>
  );
}

export default function StarBackground() {
  const [inView, setInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { root: null, rootMargin: '0px', threshold: 0 });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 bg-black">
      <Canvas
        frameloop={inView ? "always" : "never"}
        
        // 3. Cap device pixel ratio automatically
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 8], fov: 60 }}
        
        // OPTIMIZATION: Shadow map explicitly disabled since scene solely relies on emissive/point lighting
        shadows={false}
        
        gl={{ 
          antialias: false, 
          alpha: true,
          powerPreference: "high-performance",
          // OPTIMIZATION: LogarithmicDepthBuffer disabled. Only required for astronomical scale 
          // differences (e.g. realistic solar systems). Disabling increases rendering performance.
          logarithmicDepthBuffer: false 
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#a855f7" />
          <pointLight position={[-10, -5, -10]} intensity={0.4} color="#3b82f6" />
          <CustomStars count={5000} />
          <Planet />
        </Suspense>
      </Canvas>
    </div>
  );
}
