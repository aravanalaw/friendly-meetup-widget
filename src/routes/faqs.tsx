import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PagePlaceholder } from "@/components/PageShell";
import { SITE_URL, breadcrumb } from "@/lib/site";

const TITLE = "Personal Injury FAQs | New York & New Jersey | ARAVANA LAW";
const DESCRIPTION = "Answers to common questions about personal injury claims, deadlines, and the process in New York and New Jersey. Free consultation, No Win, No Fee.";
const PATH = "/faqs";

export const Route = createFileRoute("/faqs")({
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
            { name: "FAQ's", path: PATH },
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
        title={"FAQ'S"}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ's", path: PATH },
        ]}
      />
      <PagePlaceholder />
    </>
  );
}
