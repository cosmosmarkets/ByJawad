"use client";

import { useEffect, useRef } from "react";

export default function HeroShader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return undefined;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = null;
    let t = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;

      ctx.clearRect(0, 0, w, h);

      const bg = ctx.createRadialGradient(w * 0.5, h * 0.15, 10, w * 0.5, h * 0.78, h * 0.9);
      bg.addColorStop(0, "rgba(255,255,255,0.50)");
      bg.addColorStop(1, "rgba(20,20,20,0.26)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const spacing = 9;
      for (let y = 0; y < h; y += spacing) {
        const horizon = Math.abs(y / h - 0.55);
        const tone = Math.max(0.12, 1 - horizon * 1.55);
        const wave = media.matches ? 0 : Math.sin(y * 0.018 + t * 0.0018) * 0.55;
        const radius = 0.35 + tone * 0.85 + wave * 0.25;
        const alpha = 0.08 + tone * 0.19;
        for (let x = 0; x < w; x += spacing) {
          const nx = x / w - 0.5;
          const vignette = 1 - Math.min(0.9, Math.abs(nx) * 1.9);
          ctx.beginPath();
          ctx.fillStyle = `rgba(27,67,50,${alpha * vignette})`;
          ctx.arc(x, y, Math.max(0.22, radius), 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function frame(now) {
      t = now;
      draw();
      if (!media.matches) raf = requestAnimationFrame(frame);
    }

    resize();
    draw();
    if (!media.matches) raf = requestAnimationFrame(frame);

    const onResize = () => {
      resize();
      draw();
    };

    window.addEventListener("resize", onResize);
    const onMedia = () => {
      if (raf) cancelAnimationFrame(raf);
      draw();
      if (!media.matches) raf = requestAnimationFrame(frame);
    };
    media.addEventListener("change", onMedia);

    return () => {
      window.removeEventListener("resize", onResize);
      media.removeEventListener("change", onMedia);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-shader-layer" aria-hidden="true" />;
}
