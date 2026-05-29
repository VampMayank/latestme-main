"use client";

import { useEffect, useRef } from "react";

const LINK_DIST = 160;
const MOUSE_RADIUS = 200;
const BASE_SPEED = 0.5;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  z: number; 
}

function getCount() {
  if (typeof window === "undefined") return 120;
  const w = window.innerWidth;
  if (w < 480) return 50;
  if (w < 768) return 80;
  return 150;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log("ParticleCanvas initialized");
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let rafId: number;
    let W = 0, H = 0;
    const particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
      init(); // Re-init on resize to fill new space
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < getCount(); i++) {
        const z = Math.random() * 2 + 1; 
        const speedFactor = 1 / z;
        const angle = Math.random() * Math.PI * 2;
        const speed = BASE_SPEED * (0.6 + Math.random() * 0.4) * speedFactor;
        
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: (Math.random() * 2.5 + 0.5) * speedFactor,
          z: z,
        });
      }
    }

    function tick() {
      ctx!.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
            p.x += dx * force * 0.05;
            p.y += dy * force * 0.05;
          }
        }

        if (p.x < -100) p.x = W + 100;
        if (p.x > W + 100) p.x = -100;
        if (p.y < -100) p.y = H + 100;
        if (p.y > H + 100) p.y = -100;

        const alpha = Math.min(1, (1.8 / p.z)).toFixed(2);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(103, 232, 249, ${alpha})`;
        ctx!.fill();
        
        if (p.z < 1.5) {
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(6, 182, 212, 0.25)`;
          ctx!.fill();
        }
      }

      ctx!.lineWidth = 1.0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          if (Math.abs(p1.z - p2.z) > 1.2) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < LINK_DIST) {
            const opacity = (1 - d / LINK_DIST) * (1 / (p1.z * p2.z)) * 0.7;
            ctx!.strokeStyle = `rgba(103, 232, 249, ${opacity.toFixed(3)})`;
            ctx!.beginPath();
            ctx!.moveTo(p1.x, p1.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.stroke();
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    }

    const onResize = () => { resize(); };
    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; };
    const onMouseLeave = () => { mouse.active = false; };

    resize();
    tick();

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, display: "block", zIndex: 5, pointerEvents: "none" }}
    />
  );
}
