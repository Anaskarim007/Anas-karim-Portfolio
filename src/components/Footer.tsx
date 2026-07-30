import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "@/utils/portfolio";

export function Footer() {
  return (
    <footer className="relative mt-24 px-4 pb-10 sm:px-6">
      <div className="glass mx-auto max-w-6xl p-7 sm:p-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-primary via-violet to-cyan font-display text-sm font-bold text-primary-foreground">
                AK
              </span>
              <span className="font-display text-lg font-semibold">{PROFILE.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {PROFILE.tagline}
            </p>
            <div className="mt-5 flex gap-2">
              <SocialLink href={PROFILE.github} label="GitHub">
                <Github className="size-4" />
              </SocialLink>
              <SocialLink href={PROFILE.linkedin} label="LinkedIn">
                <Linkedin className="size-4" />
              </SocialLink>
              <SocialLink href={`mailto:${PROFILE.email}`} label="Email">
                <Mail className="size-4" />
              </SocialLink>
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 md:grid-cols-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a className="break-all hover:text-foreground" href={`mailto:${PROFILE.email}`}>
                  {PROFILE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a className="hover:text-foreground" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
                  {PROFILE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {PROFILE.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-9 border-t border-white/10 pt-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="grid size-10 place-items-center rounded-xl border border-white/12 bg-white/5 text-muted-foreground transition-all hover:-translate-y-1 hover:border-cyan/50 hover:text-cyan"
    >
      {children}
    </a>
  );
}
