import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PagePlaceholder } from "@/components/PageShell";
import { SITE_URL, breadcrumb } from "@/lib/site";

const TITLE = "Contact ARAVANA LAW | NY & NJ Injury Attorney | (347) 456-8567";
const DESCRIPTION = "Contact ARAVANA LAW for a free consultation. Offices in New York, NY and Rochelle Park, NJ. Call (347) 456-8567. No Win, No Fee.";
const PATH = "/contact";

export const Route = createFileRoute("/contact")({
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
            { name: "Contact Us", path: PATH },
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
        eyebrow="FREE CONSULTATION"
        title={"CONTACT US"}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: PATH },
        ]}
      />
      <PagePlaceholder />
    </>
  );
}
