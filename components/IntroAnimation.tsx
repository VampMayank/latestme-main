"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

interface IntroAnimationProps {
  onComplete?: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const name = "MAYANK VERMA";

  // Tech Grid Background Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let rafId: number;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const drawGrid = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      
      const gridSize = 60;
      const opacity = 0.25;
      
      ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
      ctx.lineWidth = 1;

      for (let x = 0; x <= w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let y = 0; y <= h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const pulse = Math.sin(time * 0.002) * 0.5 + 0.5;
      ctx.fillStyle = `rgba(6, 182, 212, ${pulse * 0.4})`;
      for (let x = 0; x <= w; x += gridSize) {
        for (let y = 0; y <= h; y += gridSize) {
          if ((x / gridSize + y / gridSize) % 2 === 0) {
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      rafId = requestAnimationFrame(drawGrid);
    };

    window.addEventListener("resize", resize);
    rafId = requestAnimationFrame(drawGrid);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useGSAP(() => {
    if (!isImageLoaded) return;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => onComplete?.()
        });
      }
    });

    tl.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: "power3.out",
    });

    tl.to(imageContainerRef.current, {
      scale: 1,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.8");

    tl.to(canvasRef.current, {
      opacity: 0.6,
      duration: 1.2,
      ease: "power2.out"
    }, "-=1.0");

    tl.to({}, { duration: 1.0 });

  }, { scope: containerRef, dependencies: [isImageLoaded] });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
        style={{ pointerEvents: "none", opacity: 0 }}
      />

      <div 
        ref={contentRef} 
        className="relative flex flex-col items-center gap-10 z-10"
        style={{ opacity: 0, transform: "translateY(20px)" }}
      >
        <h1
          ref={textRef}
          className="text-white font-black tracking-[0.2em] md:tracking-[0.5em] text-center"
          style={{ 
            fontSize: "clamp(1.5rem, 7vw, 4rem)",
            textShadow: "0 0 30px rgba(6,182,212,0.4)",
          }}
        >
          {name}
        </h1>

        <div 
          ref={imageContainerRef}
          className="relative w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-white/30 shadow-2xl shadow-cyan-500/20"
          style={{ transform: "scale(0.9)" }}
        >
          <Image
            src="/intro-profile.jpg"
            alt="Mayank Verma"
            fill
            sizes="(max-width: 768px) 144px, 224px"
            className="object-cover"
            priority
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}
