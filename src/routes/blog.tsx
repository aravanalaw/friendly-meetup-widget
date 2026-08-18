import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PagePlaceholder } from "@/components/PageShell";
import { SITE_URL, breadcrumb } from "@/lib/site";

const TITLE = "Personal Injury Blog | New York & New Jersey | ARAVANA LAW";
const DESCRIPTION = "Guidance on New York and New Jersey injury claims, written by attorney Ara V. Naljian, Esq., licensed in both states.";
const PATH = "/blog";

export const Route = createFileRoute("/blog")({
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
            { name: "Blog", path: PATH },
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
        title={"BLOG"}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: PATH },
        ]}
      />
      <PagePlaceholder />
    </>
  );
}
