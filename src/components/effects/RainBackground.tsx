import { useEffect, useRef } from "react";

/**
 * Canvas rain + subtle floating particles. Runs on a single RAF loop and
 * pauses when the tab is hidden or the user prefers reduced motion.
 */
export function RainBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let raf = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const dropCount = Math.min(180, Math.round(width / 8));
    const drops = Array.from({ length: dropCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      len: 8 + Math.random() * 18,
      speed: 3 + Math.random() * 6,
      alpha: 0.08 + Math.random() * 0.28,
    }));

    const particleCount = Math.min(48, Math.round(width / 34));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.6 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.22,
      vy: -(0.1 + Math.random() * 0.35),
      alpha: 0.15 + Math.random() * 0.4,
      hue: Math.random() > 0.5 ? 195 : 265,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.lineCap = "round";
      for (const d of drops) {
        ctx.strokeStyle = `hsla(205, 100%, 82%, ${d.alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 1.6, d.y + d.len);
        ctx.stroke();
        d.y += d.speed;
        d.x -= 0.5;
        if (d.y > height) {
          d.y = -d.len;
          d.x = Math.random() * width;
        }
      }

      for (const p of particles) {
        ctx.fillStyle = `hsla(${p.hue}, 95%, 78%, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
      }

      raf = requestAnimationFrame(draw);
    };

    if (!reduced) raf = requestAnimationFrame(draw);

    const onVisibility = () => {
      if (reduced) return;
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="aurora-blob absolute -left-40 top-[-10%] size-[38rem] rounded-full bg-primary/25 blur-[120px]" />
      <div className="aurora-blob absolute -right-32 top-1/3 size-[34rem] rounded-full bg-violet/25 blur-[130px] [animation-delay:-6s]" />
      <div className="aurora-blob absolute bottom-[-15%] left-1/3 size-[32rem] rounded-full bg-cyan/20 blur-[130px] [animation-delay:-11s]" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_35%,oklch(0.12_0.03_268/0.85)_100%)]" />
    </div>
  );
}
