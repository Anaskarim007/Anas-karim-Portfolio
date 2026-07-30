import { createFileRoute } from "@tanstack/react-router";
import {
  Database,
  Layers,
  Layout,
  Plug,
  Server,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/layouts/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { GlowLink } from "@/components/GlowButton";
import { SERVICES } from "@/utils/portfolio";

const ICONS: Record<string, LucideIcon> = {
  Layout,
  Server,
  Layers,
  Smartphone,
  Plug,
  Database,
  Wrench,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Anas Karim" },
      {
        name: "description",
        content:
          "Services offered by Anas Karim: frontend, backend and full stack development, responsive design, REST APIs, database design and maintenance.",
      },
      { property: "og:title", content: "Services — Anas Karim" },
      { property: "og:description", content: "How I can help your team ship better software." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Services"
        title="How I can help"
        description="Engagements range from a focused UI sprint to owning an entire product build."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon] ?? Layers;
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.07}>
              <GlassCard className="h-full">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/30 to-cyan/25 text-cyan">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1} className="mt-10">
        <GlassCard className="flex flex-col items-center gap-5 text-center sm:p-10">
          <h3 className="text-2xl font-bold">
            <span className="text-gradient">Have a project in mind?</span>
          </h3>
          <p className="max-w-xl text-sm text-muted-foreground">
            Tell me what you're building and I'll come back with a scope, timeline and a clear
            estimate.
          </p>
          <GlowLink to="/contact">Start a conversation</GlowLink>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
