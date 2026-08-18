import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { SITE_URL, breadcrumb } from "@/lib/site";
import { BLOG_AUTHOR, BLOG_POSTS } from "@/content/blog";

const TITLE = "Personal Injury Blog | New York & New Jersey | ARAVANA LAW";
const DESCRIPTION =
  "Guidance on New York and New Jersey injury claims, written by attorney Ara V. Naljian, Esq., licensed in both states.";
const PATH = "/blog";

const BLOG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}${PATH}#blog`,
  name: "ARAVANA LAW Personal Injury Blog",
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  publisher: { "@id": `${SITE_URL}/#organization` },
  author: { "@id": `${SITE_URL}/#ara-naljian` },
  blogPost: BLOG_POSTS.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    url: `${SITE_URL}${PATH}/${p.slug}`,
    author: { "@id": `${SITE_URL}/#ara-naljian` },
  })),
};

export const Route = createFileRoute("/blog/")({
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
      { type: "application/ld+json", children: JSON.stringify(BLOG_SCHEMA) },
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
        eyebrow="Legal insights from a licensed NY & NJ attorney"
        title={"BLOG"}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: PATH },
        ]}
      />
      <section className="container-site py-16 md:py-20">
        <p className="mx-auto max-w-3xl text-center text-muted-foreground">
          Original, source-backed articles on New York and New Jersey injury law, written by{" "}
          <span className="text-gold-bright">{BLOG_AUTHOR}</span> — not marketing copy. Every statute and
          deadline is cited to the official source.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {BLOG_POSTS.map((post, i) => (
            <Reveal
              as="article"
              key={post.slug}
              delay={(i % 2) * 120}
              className="card-gold flex flex-col p-7"
            >
              <p className="font-display text-xs uppercase tracking-[0.16em] text-gold-bright">
                {post.region}
              </p>
              <h2 className="h3-card mt-4 text-ecru">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="transition-colors hover:text-gold-bright"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 flex-1 text-muted-foreground">{post.excerpt}</p>
              <p className="mt-5 text-sm text-muted-foreground">{BLOG_AUTHOR}</p>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="mt-3 inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.1em] text-gold-bright"
              >
                Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
