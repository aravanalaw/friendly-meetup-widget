import { useEffect, useRef, useState } from "react";

const HOLD_MS = 1500;
const TYPE_MS = 55;
const DELETE_MS = 28;

/*
 * Looping typewriter, matching the live WordPress hero: types a word,
 * holds, deletes, moves to the next. The full first word is rendered on
 * the server so crawlers and no-JS visitors see real text. Screen readers
 * get the whole word list; the animated span is aria-hidden.
 */
export function Typewriter({ words, className }: { words: readonly string[]; className?: string }) {
  const [text, setText] = useState(words[0] ?? "");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let word = 0;
    let len = words[0]?.length ?? 0;
    let deleting = false;
    let timer: number;

    const tick = () => {
      const current = words[word] ?? "";
      if (!deleting && len === current.length) {
        deleting = true;
        timer = window.setTimeout(tick, HOLD_MS);
        return;
      }
      len += deleting ? -1 : 1;
      setText(current.slice(0, Math.max(0, len)));
      if (deleting && len === 0) {
        deleting = false;
        word = (word + 1) % words.length;
      }
      timer = window.setTimeout(tick, deleting ? DELETE_MS : TYPE_MS);
    };

    timer = window.setTimeout(tick, HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [started, words]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(" ")}</span>
      <span aria-hidden="true" ref={ref}>
        {text}
        <span className="type-cursor">&nbsp;|</span>
      </span>
    </span>
  );
}
