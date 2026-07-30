import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import type { Project } from "@/utils/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const initials = project.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <GlassCard className="flex h-full flex-col p-0">
      <div
        className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
        aria-hidden
      >
        <div className="absolute inset-0 grid-lines opacity-40" />
        <span className="font-display text-4xl font-black tracking-tight text-white/85 drop-shadow-lg">
          {initials}
        </span>
        <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-[11px] text-cyan"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <Github className="size-3.5" /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <ExternalLink className="size-3.5" /> Live Demo
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-cyan px-3 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View Project <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </GlassCard>
  );
}
