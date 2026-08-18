import { Link } from "@tanstack/react-router";
import { ArrowUp, Linkedin, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { DISCLAIMER, LINKEDIN, OFFICES, PRACTICE_AREAS } from "@/lib/site";

const QUICK_LINKS = [
  { label: "About", to: "/about" },
  { label: "Our Team", to: "/about" },
  { label: "Case Results", to: "/case-results" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];

const POLICIES = [
  { label: "Accessibility Statement", to: "/accessibility-statement" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "SMS Terms & Conditions", to: "/sms-terms" },
  { label: "Terms of Use", to: "/terms-of-use" },
  { label: "Legal Disclaimer", to: "/legal-disclaimer" },
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-5 font-display text-sm uppercase tracking-[0.18em] text-gold-bright">{children}</h2>;
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface-raised">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ARAVANA LAW on LinkedIn"
            className="mt-5 inline-flex h-9 w-9 items-center justify-center border border-border text-gold-bright transition-colors hover:bg-maroon"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <div className="mt-8 space-y-6">
            {OFFICES.map((o) => (
              <div key={o.label} className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-bright" aria-hidden="true" />
                <address className="not-italic text-sm leading-relaxed text-muted-foreground">
                  <span className="block font-display uppercase tracking-[0.14em] text-ecru">{o.label}</span>
                  {o.entity}
                  <br />
                  {o.street}
                  <br />
                  {o.city}, {o.state} {o.zip}
                </address>
              </div>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <ColumnTitle>Quick Links</ColumnTitle>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-gold-bright">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Practice areas">
          <ColumnTitle>Practice Areas</ColumnTitle>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {PRACTICE_AREAS.map((p) => (
              <li key={p.slug}>
                <Link to={`/practice-areas/${p.slug}`} className="hover:text-gold-bright">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Policies">
          <ColumnTitle>Policies</ColumnTitle>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {POLICIES.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="hover:text-gold-bright">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border py-8 text-center">
        <p className="font-display text-sm uppercase tracking-[0.12em] text-ecru">
          ©2026 All Rights Reserved by <span className="text-gold-bright">ARAVANA LAW</span>
        </p>
        <p className="mt-2 text-xs text-muted-foreground">{DISCLAIMER}</p>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-gold-bright transition-colors hover:bg-maroon"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
