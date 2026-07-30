import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/layouts/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/utils/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Anas Karim" },
      {
        name: "description",
        content:
          "Selected projects by Anas Karim: e-commerce, hospital and gym management systems, dashboards, computer vision and more.",
      },
      { property: "og:title", content: "Projects — Anas Karim" },
      { property: "og:description", content: "Eight production-style builds across the full stack." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Each card links to source and a live demo — replace the placeholder URLs with your own repositories anytime."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
