import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PagePlaceholder } from "@/components/PageShell";
import { SITE_URL, breadcrumb } from "@/lib/site";

const TITLE = "Practice Areas | NY & NJ Personal Injury | ARAVANA LAW";
const DESCRIPTION = "Personal injury practice areas handled by ARAVANA LAW across New York and New Jersey, from motor vehicle collisions to construction accidents.";
const PATH = "/practice-areas";

export const Route = createFileRoute("/practice-areas/")({
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
            { name: "Practice Areas", path: PATH },
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
        title={"PRACTICE AREAS"}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Practice Areas", path: PATH },
        ]}
      />
      <PagePlaceholder />
    </>
  );
}
