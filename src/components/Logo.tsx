import { Link } from "@tanstack/react-router";
import colonnade from "@/assets/colonnade.png.asset.json";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="ARAVANA LAW — home">
      <img
        src={colonnade.url}
        alt=""
        aria-hidden="true"
        width={48}
        height={38}
        className="h-9 w-auto shrink-0"
      />
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-ecru"
          style={{ letterSpacing: "0.22em", fontSize: compact ? "1rem" : "1.15rem" }}
        >
          ARAVANA LAW
        </span>
        <span
          className="mt-1 font-display text-gold-bright"
          style={{ letterSpacing: "0.3em", fontSize: "0.55rem" }}
        >
          WE DO JUSTICE
        </span>
      </span>
    </Link>
  );
}
