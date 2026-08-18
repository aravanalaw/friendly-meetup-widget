import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PagePlaceholder } from "@/components/PageShell";
import { OfficeSection } from "@/components/OfficeSection";
import { OFFICES, SITE_URL, breadcrumb } from "@/lib/site";

const TITLE = "New Jersey Personal Injury Lawyer | ARAVANA LAW";
const DESCRIPTION = "ARAVANA LAW represents injured people throughout New Jersey from its Rochelle Park office. Free consultation. No Win, No Fee. (332) 456-8567.";
const PATH = "/areas-we-serve/new-jersey";

export const Route = createFileRoute("/areas-we-serve/new-jersey")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + PATH },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + PATH }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "New Jersey", path: PATH },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AREAS WE SERVE"
        title={"NEW JERSEY"}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "New Jersey", path: PATH },
        ]}
      />
      <OfficeSection office={OFFICES[0]} heading="Our New Jersey Office" />
      <PagePlaceholder />
    </>
  );
}
