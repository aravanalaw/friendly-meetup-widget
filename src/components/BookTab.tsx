import { CALENDLY_URL } from "@/lib/site";

export function BookTab() {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 origin-right rotate-180 px-4 py-3 font-display text-xs uppercase tracking-[0.18em] lg:block"
      style={{
        writingMode: "vertical-rl",
        background: "var(--cta-gradient)",
        color: "var(--cta-text)",
      }}
    >
      Book a Meeting
    </a>
  );
}
