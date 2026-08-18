import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PagePlaceholder } from "@/components/PageShell";
import { SITE_URL, breadcrumb } from "@/lib/site";

const TITLE = "About Ara Naljian | NY & NJ Injury Attorney | ARAVANA LAW";
const DESCRIPTION = "ARAVANA LAW is a personal injury firm founded by attorney Ara Naljian, serving injured people in New York and New Jersey on a contingency-fee basis.";
const PATH = "/about";

export const Route = createFileRoute("/about")({
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
            { name: "About", path: PATH },
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
        eyebrow="FOUNDER & MANAGING ATTORNEY"
        title={"MEET ARA NALJIAN"}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: PATH },
        ]}
      />
      <PagePlaceholder />
    </>
  );
}
