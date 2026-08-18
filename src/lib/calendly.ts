import { CALENDLY_URL } from "./site";

const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";
const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

let loading: Promise<void> | null = null;

/*
 * Calendly's widget script/css are only fetched on the first click, so the
 * booking popup adds zero weight to page loads.
 */
function loadCalendlyAssets(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("ssr"));
  if (window.Calendly) return Promise.resolve();
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = WIDGET_CSS;
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = WIDGET_JS;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        loading = null;
        reject(new Error("Calendly widget failed to load"));
      };
      document.head.appendChild(script);
    });
  }
  return loading;
}

/* Opens the Calendly popup; falls back to a new tab if the widget can't load. */
export async function openCalendly() {
  try {
    await loadCalendlyAssets();
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  } catch {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }
}
