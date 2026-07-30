import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/layouts/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { EXPERIENCE } from "@/utils/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Anas Karim" },
      {
        name: "description",
        content:
          "Professional experience of Anas Karim across full stack development, React engineering, freelancing and team leadership.",
      },
      { property: "og:title", content: "Experience — Anas Karim" },
      { property: "og:description", content: "Roles, responsibilities and measurable achievements." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Experience"
        title="A track record of shipping"
        description="From supervising support teams to leading full stack delivery — every role added a layer to how I build."
      />
      <Timeline
        items={EXPERIENCE.map((e) => ({
          title: e.role,
          org: e.org,
          year: e.year,
          body: (
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                  Responsibilities
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {e.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                  Achievements
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {e.achievements.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ),
        }))}
      />
    </Section>
  );
}
