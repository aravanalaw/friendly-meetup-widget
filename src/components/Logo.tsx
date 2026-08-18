import { Link } from "@tanstack/react-router";
import logo from "@/assets/aravana-logo.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="inline-flex shrink-0 items-center" aria-label="ARAVANA LAW — home">
      <img
        src={logo}
        alt="ARAVANA LAW — We Do Justice"
        width={626}
        height={131}
        decoding="async"
        className={compact ? "h-8 w-auto" : "h-10 w-auto md:h-11"}
      />
    </Link>
  );
}
