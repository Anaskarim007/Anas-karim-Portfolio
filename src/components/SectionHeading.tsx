import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span className="glass rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
