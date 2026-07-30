import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/layouts/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { EDUCATION } from "@/utils/portfolio";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Anas Karim" },
      {
        name: "description",
        content:
          "Academic background of Anas Karim: Bachelor of Computer Science, relevant coursework and academic achievements.",
      },
      { property: "og:title", content: "Education — Anas Karim" },
      { property: "og:description", content: "Computer Science degree, coursework and achievements." },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation"
        description="Where the fundamentals came from — algorithms, databases and software architecture."
      />
      <Timeline
        items={EDUCATION.map((e) => ({
          title: e.degree,
          org: e.org,
          year: e.year,
          body: (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">{e.detail}</p>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                  Relevant coursework
                </h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {e.coursework.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {c}
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
