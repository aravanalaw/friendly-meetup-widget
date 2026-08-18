import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { PHONE_DISPLAY, PHONE_HREF, PRACTICE_AREAS } from "@/lib/site";

type Item = { label: string; to: string };

const ABOUT_ITEMS: Item[] = [
  { label: "Our Team", to: "/about" },
  { label: "Blogs", to: "/blog" },
  { label: "Careers", to: "/careers" },
];

const AREA_ITEMS: Item[] = [
  { label: "New Jersey", to: "/areas-we-serve/new-jersey" },
  { label: "New York", to: "/areas-we-serve/new-york" },
];

const PRACTICE_ITEMS: Item[] = PRACTICE_AREAS.map((p) => ({
  label: p.title,
  to: `/practice-areas/${p.slug}`,
}));

function Dropdown({ label, items }: { label: string; items: Item[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="nav-link flex items-center gap-1 py-2"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 text-gold-bright" aria-hidden="true" />
      </button>
      {open && (
        <div
          className="absolute left-0 top-full z-50 min-w-[260px] border border-border bg-surface-raised shadow-2xl"
          role="menu"
        >
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to as never}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block border-b border-border px-4 py-3 font-display text-[0.8rem] uppercase tracking-[0.1em] text-ecru transition-colors last:border-b-0 hover:bg-maroon hover:text-gold-bright"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileAccordion({ label, items, onNavigate }: { label: string; items: Item[]; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="nav-link flex w-full items-center justify-between py-4"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 text-gold-bright transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="pb-3">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to as never}
              onClick={onNavigate}
              className="block py-2 pl-3 font-display text-[0.8rem] uppercase tracking-[0.1em] text-muted-foreground hover:text-gold-bright"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface-raised/95 backdrop-blur">
      <div className="container-site flex items-center justify-between gap-6 py-3">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          <Dropdown label="About" items={ABOUT_ITEMS} />
          <Dropdown label="Areas We Serve" items={AREA_ITEMS} />
          <Dropdown label="Practice Areas" items={PRACTICE_ITEMS} />
          <Link to="/faqs" className="nav-link" activeProps={{ className: "nav-link text-gold-bright" }}>
            FAQ's
          </Link>
          <Link to="/case-results" className="nav-link" activeProps={{ className: "nav-link text-gold-bright" }}>
            Case Results
          </Link>
          <Link to="/contact" className="nav-link" activeProps={{ className: "nav-link text-gold-bright" }}>
            Contact Us
          </Link>
          <a href={PHONE_HREF} className="flex items-center gap-2 font-display text-sm tracking-[0.08em] text-gold-bright">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </nav>

        <button
          type="button"
          className="text-gold-bright xl:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <Menu className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-maroon xl:hidden">
          <div className="container-site flex items-center justify-between py-3">
            <Logo compact />
            <button type="button" aria-label="Close menu" onClick={close} className="text-gold-bright">
              <X className="h-7 w-7" />
            </button>
          </div>
          <nav aria-label="Mobile" className="container-site flex-1 overflow-y-auto pb-28">
            <MobileAccordion label="About" items={ABOUT_ITEMS} onNavigate={close} />
            <MobileAccordion label="Areas We Serve" items={AREA_ITEMS} onNavigate={close} />
            <MobileAccordion label="Practice Areas" items={PRACTICE_ITEMS} onNavigate={close} />
            <Link to="/faqs" onClick={close} className="nav-link block border-b border-border py-4">
              FAQ's
            </Link>
            <Link to="/case-results" onClick={close} className="nav-link block border-b border-border py-4">
              Case Results
            </Link>
            <Link to="/contact" onClick={close} className="nav-link block border-b border-border py-4">
              Contact Us
            </Link>
          </nav>
          <div className="border-t border-border bg-surface-raised p-4">
            <a href={PHONE_HREF} className="btn-gold w-full">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
