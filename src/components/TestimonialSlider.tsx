import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/utils/portfolio";
import { cn } from "@/lib/utils";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number) => {
    setDir(next > 0 ? 1 : -1);
    setIndex((i) => (i + next + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => go(1), 6500);
    return () => window.clearInterval(id);
  }, [go]);

  const active = TESTIMONIALS[index];

  return (
    <div className="mt-12">
      <div className="glass relative overflow-hidden p-7 sm:p-12">
        <Quote className="absolute -right-3 -top-3 size-28 text-white/5" aria-hidden />
        <div className="min-h-[15rem] sm:min-h-[13rem]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <p className="text-base leading-relaxed text-foreground/90 sm:text-xl">
                “{active.quote}”
              </p>
              <footer className="mt-7 flex items-center gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary via-violet to-cyan font-semibold text-primary-foreground">
                  {active.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-semibold">{active.name}</span>
                  <span className="block truncate text-sm text-muted-foreground">
                    {active.role}
                  </span>
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-8 bg-cyan" : "w-3 bg-white/20 hover:bg-white/40",
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
