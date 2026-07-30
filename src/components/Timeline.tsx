import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";

export type TimelineEntry = {
  title: string;
  org: string;
  year: string;
  body?: ReactNode;
};

export function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="relative mt-12 pl-6 sm:pl-10">
      <span
        aria-hidden
        className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan/70 via-primary/50 to-transparent sm:left-[11px]"
      />
      <div className="flex flex-col gap-7">
        {items.map((item, i) => (
          <Reveal key={`${item.title}-${item.org}`} delay={i * 0.06} className="relative">
            <span
              aria-hidden
              className="absolute -left-6 top-8 grid size-3.5 place-items-center rounded-full bg-cyan shadow-[0_0_18px_4px_oklch(0.78_0.14_200/0.45)] sm:-left-10"
            />
            <GlassCard>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold sm:text-xl">{item.title}</h3>
                  <p className="mt-1 text-sm text-cyan">{item.org}</p>
                </div>
                <span className="shrink-0 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                  {item.year}
                </span>
              </div>
              {item.body && <div className="mt-4">{item.body}</div>}
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
