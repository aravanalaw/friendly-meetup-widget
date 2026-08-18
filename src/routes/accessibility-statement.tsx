import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PagePlaceholder } from "@/components/PageShell";
import { SITE_URL, breadcrumb } from "@/lib/site";

const TITLE = "Accessibility Statement | ARAVANA LAW";
const DESCRIPTION = "ARAVANA LAW is committed to keeping this website accessible to visitors in New York and New Jersey, including people using assistive technology.";
const PATH = "/accessibility-statement";

export const Route = createFileRoute("/accessibility-statement")({
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
            { name: "Accessibility Statement", path: PATH },
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
        title={"ACCESSIBILITY STATEMENT"}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Accessibility Statement", path: PATH },
        ]}
      />
      <PagePlaceholder />
    </>
  );
}
