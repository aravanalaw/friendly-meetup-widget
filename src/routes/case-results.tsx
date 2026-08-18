import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PagePlaceholder } from "@/components/PageShell";
import { SITE_URL, breadcrumb } from "@/lib/site";

const TITLE = "Case Results | ARAVANA LAW | New York & New Jersey";
const DESCRIPTION = "Case results handled by attorney Ara Naljian in New York and New Jersey. Prior results do not guarantee a similar outcome.";
const PATH = "/case-results";

export const Route = createFileRoute("/case-results")({
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
            { name: "Case Results", path: PATH },
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
        title={"CASE RESULTS"}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Case Results", path: PATH },
        ]}
      />
      <PagePlaceholder />
    </>
  );
}
