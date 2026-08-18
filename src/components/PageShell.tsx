import { Link } from "@tanstack/react-router";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  crumbs: { name: string; path: string }[];
}) {
  return (
    <section className="border-b border-border bg-surface-raised py-16 md:py-24">
      <Reveal className="container-site">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {crumbs.map((c, i) => (
            <span key={c.path}>
              {i > 0 && <span className="px-2 text-gold-bright">/</span>}
              {i === crumbs.length - 1 ? (
                <span className="text-gold-bright">{c.name}</span>
              ) : (
                <Link to={c.path as never} className="hover:text-gold-bright">
                  {c.name}
                </Link>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="h1-hero text-ecru">{title}</h1>
      </Reveal>
    </section>
  );
}

export function PagePlaceholder({ children }: { children?: React.ReactNode }) {
  return (
    <section className="container-site py-20">
      <div className="mx-auto max-w-3xl text-center">
        {children ?? (
          <p className="text-muted-foreground">
            This page is being prepared. To speak with Ara Naljian about your case now, call{" "}
            <a href={PHONE_HREF} className="text-gold-bright">
              {PHONE_DISPLAY}
            </a>{" "}
            or{" "}
            <Link to="/contact" className="text-gold-bright underline underline-offset-4">
              request a free case review
            </Link>
            .
          </p>
        )}
        <Divider />
        <Link to="/contact" className="btn-gold mt-4">
          Speak with an attorney today →
        </Link>
      </div>
    </section>
  );
}
