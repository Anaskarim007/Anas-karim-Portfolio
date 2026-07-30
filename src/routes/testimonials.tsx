import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/layouts/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialSlider } from "@/components/TestimonialSlider";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Anas Karim" },
      {
        name: "description",
        content:
          "What clients and colleagues say about working with Anas Karim on React, .NET and full stack projects.",
      },
      { property: "og:title", content: "Testimonials — Anas Karim" },
      { property: "og:description", content: "Client reviews and team feedback." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Testimonials"
        title="Words from clients"
        description="Feedback from founders, product managers and teams I've partnered with."
      />
      <TestimonialSlider />
    </Section>
  );
}
