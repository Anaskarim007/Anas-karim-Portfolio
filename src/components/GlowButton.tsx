import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60";

const variants = {
  primary:
    "bg-gradient-to-r from-primary via-violet to-cyan text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.68_0.17_262/0.9)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_oklch(0.72_0.15_200/0.9)]",
  glass:
    "glass text-foreground hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan",
  outline:
    "border border-white/15 bg-white/5 text-foreground hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan",
} as const;

type Variant = keyof typeof variants;

export function GlowButton({
  variant = "primary",
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function GlowLink({
  to,
  href,
  external,
  variant = "primary",
  className,
  children,
  ...rest
}: {
  to?: string;
  href?: string;
  external?: boolean;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const classes = cn(base, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
