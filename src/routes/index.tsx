import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MessageCircle, Sparkles } from "lucide-react";
import portrait from "@/assets/anas-portrait.jpg";
import { Section } from "@/layouts/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { GlowLink } from "@/components/GlowButton";
import { TypingText } from "@/components/TypingText";
import { CountUp } from "@/components/CountUp";
import { SectionHeading } from "@/components/SectionHeading";
import { PROFILE, STATS, HIGHLIGHTS } from "@/utils/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anas Karim — Full Stack, ASP.NET & Php Developer" },
      {
        name: "description",
        content:
          "Portfolio of Anas Karim, a full stack developer building fast React interfaces and reliable .NET APIs. View projects, skills, experience and services.",
      },
      { property: "og:title", content: "Anas Karim — Full Stack Developer" },
      {
        property: "og:description",
        content: "React, Next.js, TypeScript, .NET Php and SQL — premium web products, end to end.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Section className="pt-2">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-cyan">
                <Sparkles className="size-3.5" /> Available for freelance & full-time roles
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
                <span className="block text-muted-foreground text-base font-medium tracking-[0.3em] uppercase sm:text-sm">
                  Hello, I'm
                </span>
                <span className="mt-3 block text-gradient">{PROFILE.name}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-4 font-mono text-lg text-cyan sm:text-2xl">
                <TypingText words={PROFILE.roles} />
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {PROFILE.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-3">
                <GlowLink href={PROFILE.resume} external variant="primary">
                  <Download className="size-4" /> Download Resume
                </GlowLink>
                <GlowLink href={`mailto:${PROFILE.email}?subject=Project%20enquiry`} variant="outline">
                  <MessageCircle className="size-4" /> Hire Me
                </GlowLink>
                <GlowLink to="/contact" variant="glass">
                  <Mail className="size-4" /> Contact
                </GlowLink>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex gap-3">
                {[
                  { href: PROFILE.github, label: "GitHub", Icon: Github },
                  { href: PROFILE.linkedin, label: "LinkedIn", Icon: Linkedin },
                  { href: `mailto:${PROFILE.email}`, label: "Email", Icon: Mail },
                ].map(({ href, label, Icon }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer noopener"
                    whileHover={{ y: -6, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 320, damping: 16 }}
                    className="glass grid size-12 place-items-center rounded-2xl text-muted-foreground hover:text-cyan"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <Icon className="size-5" />
                  </motion.a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative mx-auto w-full max-w-sm">
            <div className="floaty relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-primary/40 via-violet/30 to-cyan/40 blur-3xl" />
              <div className="glass relative overflow-hidden rounded-[2rem] p-3">
                <img
                  src={portrait}
                  alt="Portrait of Anas Karim, full stack developer"
                  width={1024}
                  height={1280}
                  className="h-auto w-full rounded-[1.5rem] object-cover"
                />
                <span className="pointer-events-none absolute inset-3 rounded-[1.5rem] bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <GlassCard className="p-5 text-center">
                <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What I do"
          title="Engineering that feels designed"
          description="A quick look at how I work across the stack — the full story lives on the About page."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.slice(0, 6).map((h, i) => (
            <Reveal key={h.title} delay={i * 0.06}>
              <GlassCard className="h-full">
                <h3 className="text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
