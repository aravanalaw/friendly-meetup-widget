import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

let sharedObserver: IntersectionObserver | null = null;

function getObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            sharedObserver?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.1 },
    );
  }
  return sharedObserver;
}

type RevealProps = {
  as?: "div" | "section" | "article" | "li" | "span";
  /* Direction the element travels in from. "fade" is opacity only. */
  variant?: "up" | "fade" | "left" | "right";
  /* Transition delay in ms, for staggering siblings. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

/*
 * Scroll-reveal wrapper. Content is fully visible in server HTML and for
 * no-JS visitors; the hidden start state only applies once `html.js` is set
 * (see the inline script in __root.tsx), so SEO and no-JS are unaffected.
 */
export function Reveal({ as: Tag = "div", variant = "up", delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-visible");
      return;
    }
    const observer = getObserver();
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-reveal={variant}
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
