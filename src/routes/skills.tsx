import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/layouts/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { SkillBar } from "@/components/SkillBar";
import { SKILL_GROUPS } from "@/utils/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Anas Karim" },
      {
        name: "description",
        content:
          "Technical skills of Anas Karim across frontend (React, Next.js, TypeScript), backend (.NET, Node.js), databases and developer tools.",
      },
      { property: "og:title", content: "Skills — Anas Karim" },
      { property: "og:description", content: "Frontend, backend, database and tooling proficiency." },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit I build with"
        description="Proficiency levels reflect day-to-day production use, not tutorials."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {SKILL_GROUPS.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.08}>
            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold">
                <span className="text-gradient">{group.title}</span>
              </h3>
              <div className="mt-6 space-y-5">
                {group.skills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.05} />
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
