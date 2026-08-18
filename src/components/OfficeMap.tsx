import { lazy, Suspense, useEffect, useState } from "react";
import type { Office } from "@/lib/site";

/*
 * Leaflet touches `window` at import time, so the real map is loaded as a
 * client-only lazy chunk after mount. Server HTML and the initial bundle
 * stay lean; the map JS is only fetched on pages that render one.
 */
const OfficeMapInner = lazy(() => import("./OfficeMapInner"));

export function OfficeMap({ office }: { office: Office }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const placeholder = (
    <div className="flex h-full w-full items-center justify-center bg-surface-card text-sm text-muted-foreground">
      Loading map…
    </div>
  );

  return (
    <div className="h-[380px] w-full overflow-clip border border-border md:h-[440px]">
      {ready ? <Suspense fallback={placeholder}><OfficeMapInner office={office} /></Suspense> : placeholder}
    </div>
  );
}
