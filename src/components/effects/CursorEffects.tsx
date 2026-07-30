import { useEffect, useRef, useState } from "react";

/** Mouse glow + cursor ring with a soft trail. Disabled on touch devices. */
export function CursorEffects() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let glowX = mouseX;
    let glowY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      }
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest("a, button, input, textarea, select, [role='button']");
      if (ringRef.current) {
        ringRef.current.dataset.active = interactive ? "true" : "false";
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      glowX += (mouseX - glowX) * 0.07;
      glowY += (mouseY - glowY) * 0.07;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX - 220}px, ${glowY - 220}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] hidden lg:block">
      <div
        ref={glowRef}
        className="absolute left-0 top-0 size-[440px] rounded-full bg-[radial-gradient(circle,oklch(0.68_0.17_262/0.16),transparent_62%)] blur-2xl"
      />
      <div
        ref={ringRef}
        data-active="false"
        className="absolute left-0 top-0 size-9 rounded-full border border-cyan/60 transition-[width,height,background-color,opacity] duration-200 data-[active=true]:bg-cyan/10 data-[active=true]:opacity-100 opacity-70"
      />
      <div ref={dotRef} className="absolute left-0 top-0 size-1.5 rounded-full bg-cyan" />
    </div>
  );
}
