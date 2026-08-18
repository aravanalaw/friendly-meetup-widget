import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { PageHero, PagePlaceholder } from "@/components/PageShell";
import { PRACTICE_AREAS, SITE_URL, breadcrumb } from "@/lib/site";

const REDIRECTS = ["personal-injury", "premises-liability"];

export const Route = createFileRoute("/practice-areas/$slug")({
  beforeLoad: ({ params }) => {
    if (REDIRECTS.includes(params.slug)) {
      throw redirect({ to: "/practice-areas", statusCode: 301 });
    }
    const area = PRACTICE_AREAS.find((p) => p.slug === params.slug);
    if (!area) throw notFound();
    return { area };
  },
  loader: ({ params }) => {
    const area = PRACTICE_AREAS.find((p) => p.slug === params.slug)!;
    return { title: area.title };
  },
  head: ({ params, loaderData }) => {
    const path = `/practice-areas/${params.slug}`;
    if (!loaderData) {
      return { meta: [{ title: "Unavailable | ARAVANA LAW" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.title} Lawyer | New York & New Jersey | ARAVANA LAW`;
    const description = `${loaderData.title} claims handled personally by attorney Ara Naljian in New York and New Jersey. Free consultation. No Win, No Fee.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: SITE_URL + path },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: SITE_URL + path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumb([
              { name: "Home", path: "/" },
              { name: "Practice Areas", path: "/practice-areas" },
              { name: loaderData.title, path },
            ]),
          ),
        },
      ],
    };
  },
  component: PracticeAreaPage,
});

function PracticeAreaPage() {
  const { title } = Route.useLoaderData();
  const { slug } = Route.useParams();

  return (
    <>
      <PageHero
        eyebrow="PRACTICE AREA"
        title={title}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Practice Areas", path: "/practice-areas" },
          { name: title, path: `/practice-areas/${slug}` },
        ]}
      />
      <PagePlaceholder />
    </>
  );
}
