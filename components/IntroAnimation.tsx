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
      
      ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
      ctx.lineWidth = 1.2;

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
      ctx.fillStyle = `rgba(34, 211, 238, ${pulse * 0.5})`;
      for (let x = 0; x <= w; x += gridSize) {
        for (let y = 0; y <= h; y += gridSize) {
          if ((x / gridSize + y / gridSize) % 2 === 0) {
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
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
          duration: 1.0,
          ease: "power2.inOut",
          onComplete: () => onComplete?.()
        });
      }
    });

    tl.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    tl.to(imageContainerRef.current, {
      scale: 1,
      duration: 1.4,
      ease: "back.out(1.7)"
    }, "-=1.0");

    tl.to(canvasRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1.2");

    tl.to({}, { duration: 1.2 });

  }, { scope: containerRef, dependencies: [isImageLoaded] });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#08080a] flex items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
        style={{ pointerEvents: "none", opacity: 0 }}
      />

      <div 
        ref={contentRef} 
        className="relative flex flex-col items-center gap-12 z-10"
        style={{ opacity: 0, transform: "translateY(30px)" }}
      >
        <h1
          ref={textRef}
          className="text-white font-black tracking-[0.25em] md:tracking-[0.6em] text-center"
          style={{ 
            fontSize: "clamp(2rem, 8vw, 5rem)",
            textShadow: "0 0 40px rgba(34,211,238,0.5)",
          }}
        >
          {name}
        </h1>

        <div 
          ref={imageContainerRef}
          className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-cyan-500/30"
          style={{ transform: "scale(0.8)" }}
        >
          <Image
            src="/intro-profile.jpg"
            alt="Mayank Verma"
            fill
            sizes="(max-width: 768px) 160px, 256px"
            className="object-cover"
            priority
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}
