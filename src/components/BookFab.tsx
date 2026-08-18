import { CalendarClock } from "lucide-react";
import { CALENDLY_URL } from "@/lib/site";
import { openCalendly } from "@/lib/calendly";

/*
 * Floating gold "Book a Meeting" button, fixed bottom-right on every page.
 * Opens the Calendly popup; falls back to a plain link without JS.
 */
export function BookFab() {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        void openCalendly();
      }}
      className="btn-gold fixed bottom-6 right-6 z-40 shadow-[0_8px_30px_rgba(0,0,0,0.5)] lg:hidden"
    >
      <CalendarClock className="h-4 w-4" aria-hidden="true" />
      Book a Meeting
    </a>
  );
}
