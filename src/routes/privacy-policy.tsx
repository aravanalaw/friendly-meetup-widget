import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PagePlaceholder } from "@/components/PageShell";
import { SITE_URL, breadcrumb } from "@/lib/site";

const TITLE = "Privacy Policy | ARAVANA LAW";
const DESCRIPTION = "How ARAVANA LAW collects, uses, and protects information submitted through aravanalaw.com by visitors in New York and New Jersey.";
const PATH = "/privacy-policy";

export const Route = createFileRoute("/privacy-policy")({
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
            { name: "Privacy Policy", path: PATH },
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
        title={"PRIVACY POLICY"}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: PATH },
        ]}
      />
      <PagePlaceholder />
    </>
  );
}
