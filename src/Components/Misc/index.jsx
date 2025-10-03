"use client";
import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = 0,
      height = 0,
      dpr = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener("resize", resize);
    resize();

    const CONFIG = {
      starCount: Math.round((width * height) / 7000) || 120,
      maxSize: 8,
      minSize: 2,
      twinkleSpeed: 0.02,
      drift: 0.02,
    };

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createStar() {
      const size = rand(CONFIG.minSize, CONFIG.maxSize);
      const life = rand(80, 240);
      return {
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-0.04, 0.04),
        vy: CONFIG.drift * rand(0.3, 1.2),
        size,
        baseAlpha: rand(0.4, 1),
        alpha: 0,
        life,
        age: Math.random() * life,
        fancy: Math.random() < 0.2, // ~20% stars are sparkly ✦
      };
    }

    let stars = Array.from({ length: CONFIG.starCount }, createStar);

    function drawDotStar(s) {
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, s.size * 1.2);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, s.size * 1.2, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawSparkleStar(s) {
      // glow
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, s.size * 1.5);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, s.size * 1.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "white";
      ctx.lineWidth = 1;

      // 8 spikes (4 long, 4 short)
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI / 4) * i;
        const spikeLength = i % 2 === 0 ? s.size : s.size / 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * spikeLength, Math.sin(angle) * spikeLength);
        ctx.stroke();
      }
    }

    function update() {
      ctx.clearRect(0, 0, width, height);
      for (let s of stars) {
        s.age += CONFIG.twinkleSpeed;
        const tw = (Math.sin((s.age / s.life) * Math.PI * 2) + 1) / 2;
        s.alpha = s.baseAlpha * (0.3 + tw * 0.7);

        s.x += s.vx;
        s.y += s.vy;

        if (s.x < -50) s.x = width + 50;
        if (s.x > width + 50) s.x = -50;
        if (s.y > height + 50) s.y = -50;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.globalAlpha = s.alpha;
        if (s.fancy) {
          drawSparkleStar(s);
        } else {
          drawDotStar(s);
        }
        ctx.restore();
      }
      requestAnimationFrame(update);
    }
    update();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
