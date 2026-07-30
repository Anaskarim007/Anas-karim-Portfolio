import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/layouts/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { HIGHLIGHTS, PROFILE } from "@/utils/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Anas Karim — Full Stack Developer" },
      {
        name: "description",
        content:
          "Professional summary of Anas Karim: frontend and backend expertise, problem solving, clean code and modern responsive UI development.",
      },
      { property: "og:title", content: "About Anas Karim" },
      {
        property: "og:description",
        content: "Full stack developer focused on clean code, performance and modern UI.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="About me"
        title="Building the web, front to back"
        description="I'm a full stack developer who cares equally about how a product feels and how it holds up under load."
      />

      <Reveal delay={0.08} className="mt-12">
        <GlassCard className="sm:p-10">
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              I'm {PROFILE.name}, a full stack developer based in {PROFILE.location}. Over the
              past five years I've shipped e-commerce platforms, management systems and
              internal dashboards for startups, agencies and enterprise teams — owning the work
              from database schema to the final animation.
            </p>
            <p>
              My passion for web development started with curiosity about how interfaces come
              alive, and it turned into a career built on React, TypeScript and .NET. I enjoy
              the moment a messy requirement becomes a clear, elegant solution that real people
              use every day.
            </p>
            <p>
              I write code that the next developer can read, design interfaces that work on
              every screen, and measure everything — because a beautiful product that loads
              slowly is not a finished product.
            </p>
          </div>
        </GlassCard>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal key={h.title} delay={i * 0.06}>
            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
