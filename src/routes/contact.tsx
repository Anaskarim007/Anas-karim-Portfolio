import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Section } from "@/layouts/SiteLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";
import { PROFILE } from "@/utils/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Anas Karim — Hire a Full Stack Developer" },
      {
        name: "description",
        content:
          "Get in touch with Anas Karim for full stack, React, ASP.Net or Php-Laravel development work. Email, phone and location details plus a contact form.",
      },
      { property: "og:title", content: "Contact Anas Karim" },
      { property: "og:description", content: "Let's talk about your next web project." },
    ],
  }),
  component: ContactPage,
});

const field =
  "w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-cyan/60 focus:bg-white/8";

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent — I'll reply within 24 hours.");
    }, 900);
  };

  return (
    <Section>
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Share a few details about your project and I'll get back to you quickly."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <GlassCard className="sm:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input id="name" name="name" required placeholder="Your name" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={field}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project enquiry"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project, timeline and budget…"
                  className={`${field} resize-y`}
                />
              </div>
              <GlowButton type="submit" disabled={sending} className="w-full sm:w-auto">
                <Send className="size-4" /> {sending ? "Sending…" : "Send Message"}
              </GlowButton>
            </form>
          </GlassCard>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.08}>
            <GlassCard>
              <h3 className="text-lg font-semibold">Contact details</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/5 text-cyan">
                    <Mail className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-muted-foreground">Email</span>
                    <a className="break-all hover:text-cyan" href={`mailto:${PROFILE.email}`}>
                      {PROFILE.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/5 text-cyan">
                    <Phone className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-muted-foreground">Phone</span>
                    <a className="hover:text-cyan" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
                      {PROFILE.phone}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/5 text-cyan">
                    <MapPin className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-muted-foreground">Location</span>
                    {PROFILE.location}
                  </span>
                </li>
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.16}>
            <GlassCard className="p-0">
              <div className="relative grid h-56 place-items-center overflow-hidden rounded-[inherit] bg-gradient-to-br from-primary/25 via-violet/20 to-cyan/25">
                <div className="absolute inset-0 grid-lines opacity-60" />
                <div className="relative text-center">
                  <MapPin className="mx-auto size-7 text-cyan" />
                  <p className="mt-2 text-sm font-medium">{PROFILE.location}</p>
                  <p className="text-xs text-muted-foreground">Google Map placeholder</p>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
