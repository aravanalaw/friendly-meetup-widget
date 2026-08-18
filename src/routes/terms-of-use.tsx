import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PagePlaceholder } from "@/components/PageShell";
import { SITE_URL, breadcrumb } from "@/lib/site";

const TITLE = "Terms of Use | ARAVANA LAW";
const DESCRIPTION = "The terms that govern use of aravanalaw.com. Attorney Advertising. Prior results do not guarantee a similar outcome.";
const PATH = "/terms-of-use";

export const Route = createFileRoute("/terms-of-use")({
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
            { name: "Terms of Use", path: PATH },
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
        title={"TERMS OF USE"}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: PATH },
        ]}
      />
      <PagePlaceholder />
    </>
  );
}
