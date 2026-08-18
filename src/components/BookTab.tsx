import { CALENDLY_URL } from "@/lib/site";
import { openCalendly } from "@/lib/calendly";

/*
 * Side "Book a Meeting" tab. With JS it opens the Calendly popup widget;
 * without JS the plain link still works in a new tab.
 */
export function BookTab() {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        void openCalendly();
      }}
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 origin-right rotate-180 px-4 py-3 font-display text-xs uppercase tracking-[0.18em] lg:block"
      style={{
        writingMode: "vertical-rl",
        background: "var(--aravana-ecru)",
        color: "var(--aravana-maroon)",
      }}
    >
      Book a Meeting
    </a>
  );
}
