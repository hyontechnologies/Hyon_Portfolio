"use client";

import { useRef, useEffect, useCallback } from "react";

interface ParticlesProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  alpha: number;
  baseAlpha: number;
}

export default function Particles({
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleColors = ["#ffffff", "#645bec", "#ffffff"],
  moveParticlesOnHover = true,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 50,
  sizeRandomness = 1.2,
  cameraDistance = 40,
  disableRotation = false,
  className = "",
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);
  const rotationRef = useRef({ x: 0, y: 0 });

  const initParticles = useCallback(() => {
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      const baseAlpha = alphaParticles ? 0.3 + Math.random() * 0.7 : 1;
      particles.push({
        x: (Math.random() - 0.5) * particleSpread,
        y: (Math.random() - 0.5) * particleSpread,
        z: (Math.random() - 0.5) * particleSpread,
        vx: (Math.random() - 0.5) * speed * 0.5,
        vy: (Math.random() - 0.5) * speed * 0.5,
        vz: (Math.random() - 0.5) * speed * 0.5,
        size: (particleBaseSize / 50) * (1 + (Math.random() - 0.5) * sizeRandomness),
        color,
        alpha: baseAlpha,
        baseAlpha,
      });
    }
    particlesRef.current = particles;
  }, [particleCount, particleSpread, speed, particleColors, alphaParticles, particleBaseSize, sizeRandomness]);

  useEffect(() => {
    initParticles();
  }, [initParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let running = true;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = (e.clientY - rect.top) / rect.height;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    if (moveParticlesOnHover) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    const project = (x: number, y: number, z: number, w: number, h: number) => {
      const fov = cameraDistance;
      const scale = fov / (fov + z);
      return {
        sx: x * scale * (w / 8) + w / 2,
        sy: y * scale * (h / 8) + h / 2,
        scale,
      };
    };

    const animate = () => {
      if (!running) return;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      if (!disableRotation) {
        rotationRef.current.y += speed * 0.005;
        rotationRef.current.x += speed * 0.002;
      }

      const cosRY = Math.cos(rotationRef.current.y);
      const sinRY = Math.sin(rotationRef.current.y);
      const cosRX = Math.cos(rotationRef.current.x);
      const sinRX = Math.sin(rotationRef.current.x);

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around
        const halfSpread = particleSpread / 2;
        if (p.x > halfSpread) p.x -= particleSpread;
        if (p.x < -halfSpread) p.x += particleSpread;
        if (p.y > halfSpread) p.y -= particleSpread;
        if (p.y < -halfSpread) p.y += particleSpread;
        if (p.z > halfSpread) p.z -= particleSpread;
        if (p.z < -halfSpread) p.z += particleSpread;

        // Hover attraction
        if (moveParticlesOnHover && mouseRef.current.active) {
          const targetX = (mouseRef.current.x - 0.5) * particleSpread;
          const targetY = (mouseRef.current.y - 0.5) * particleSpread;
          p.vx += (targetX - p.x) * 0.0002 * particleHoverFactor;
          p.vy += (targetY - p.y) * 0.0002 * particleHoverFactor;
        }

        // Apply rotation
        let rx = p.x;
        let ry = p.y;
        let rz = p.z;

        if (!disableRotation) {
          // Y rotation
          const tx = rx * cosRY - rz * sinRY;
          const tz = rx * sinRY + rz * cosRY;
          rx = tx;
          rz = tz;
          // X rotation
          const ty = ry * cosRX - rz * sinRX;
          const tz2 = ry * sinRX + rz * cosRX;
          ry = ty;
          rz = tz2;
        }

        const { sx, sy, scale } = project(rx, ry, rz, w, h);

        const radius = Math.max(0.5, p.size * scale);
        const alpha = p.baseAlpha * Math.min(1, scale * 0.8);

        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // Add glow for larger particles
        if (radius > 1.5) {
          ctx.beginPath();
          ctx.arc(sx, sy, radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha * 0.15;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      if (moveParticlesOnHover) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [speed, cameraDistance, disableRotation, moveParticlesOnHover, particleHoverFactor, particleSpread]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: "block" }}
    />
  );
}
