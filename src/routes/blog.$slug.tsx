import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Phone } from "lucide-react";
import { PageHero } from "@/components/PageShell";
import { Divider } from "@/components/Divider";
import { PHONE_DISPLAY, PHONE_HREF, SITE_URL, breadcrumb } from "@/lib/site";
import { ARTICLE_LOADERS, BLOG_AUTHOR, BLOG_POSTS } from "@/content/blog";
import type { ArticleBlock } from "@/content/blog/types";

const ARTICLE_DISCLAIMER =
  "This article is general information, not legal advice. Reading it does not create an attorney-client relationship. Deadlines and legal rights depend on the parties, location, policy language, accident date, filing date, and other facts. Results cannot be guaranteed.";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const meta = BLOG_POSTS.find((p) => p.slug === params.slug);
    const load = ARTICLE_LOADERS[params.slug];
    if (!meta || !load) throw notFound();
    const body = (await load()).default;
    return { meta, body };
  },
  head: ({ params, loaderData }) => {
    const path = `/blog/${params.slug}`;
    if (!loaderData) {
      return { meta: [{ title: "Article | ARAVANA LAW" }, { name: "robots", content: "noindex" }] };
    }
    const { meta, body } = loaderData;
    const title = `${meta.seoTitle} | ARAVANA LAW`;
    const posting = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: meta.title,
      description: meta.description,
      url: SITE_URL + path,
      mainEntityOfPage: SITE_URL + path,
      image: `${SITE_URL}/og-image.jpg`,
      author: { "@id": `${SITE_URL}/#ara-naljian` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      articleSection: meta.region,
    };
    const faqPage = body.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: body.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;
    return {
      meta: [
        { title },
        { name: "description", content: meta.description },
        { property: "og:title", content: title },
        { property: "og:description", content: meta.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: SITE_URL + path },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: SITE_URL + path }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(posting) },
        ...(faqPage ? [{ type: "application/ld+json", children: JSON.stringify(faqPage) }] : []),
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumb([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: meta.title, path },
            ]),
          ),
        },
      ],
    };
  },
  component: ArticlePage,
});

function Block({ block }: { block: ArticleBlock }) {
  if (block.t === "h2") return <h2 className="h3-card mt-10 text-ecru">{block.x}</h2>;
  if (block.t === "ul")
    return (
      <ul className="mt-5 space-y-2 pl-1">
        {block.x.map((item) => (
          <li key={item.slice(0, 40)} className="flex gap-3 text-muted-foreground">
            <span className="mt-[0.65em] block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-bright" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    );
  return <p className="mt-5 text-muted-foreground">{block.x}</p>;
}

function ArticlePage() {
  const { meta, body } = Route.useLoaderData();
  const path = `/blog/${meta.slug}`;

  return (
    <>
      <PageHero
        eyebrow={meta.region}
        title={meta.title}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: meta.title, path },
        ]}
      />

      <article className="container-site py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-sm uppercase tracking-[0.12em] text-gold-bright">
            {BLOG_AUTHOR} · Founder &amp; Managing Attorney
          </p>

          <div className="mt-8">
            {body.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {body.faqs.length > 0 && (
            <section className="mt-14">
              <h2 className="h2-section text-ecru">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-6">
                {body.faqs.map((f) => (
                  <div key={f.q} className="card-gold p-6">
                    <h3 className="h3-card text-gold-bright">{f.q}</h3>
                    <p className="mt-3 text-muted-foreground">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {body.sources.length > 0 && (
            <section className="mt-14 border-t border-border pt-8">
              <h2 className="font-display text-sm uppercase tracking-[0.16em] text-gold-bright">
                Official Authorities Reviewed
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {body.sources.map((s) => (
                  <li key={s.label}>
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-2 hover:text-gold-bright"
                      >
                        <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {s.label}
                      </a>
                    ) : (
                      s.label
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <p className="mt-10 border border-border bg-surface-card p-5 text-sm text-muted-foreground">
            {ARTICLE_DISCLAIMER}
          </p>

          <Divider />

          <div className="text-center">
            <p className="text-muted-foreground">
              Questions about your case? Speak directly with the attorney — call{" "}
              <a href={PHONE_HREF} className="text-gold-bright">
                <Phone className="mr-1 inline h-4 w-4" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gold">
                Free Case Review →
              </Link>
              <Link to="/blog" className="btn-ghost">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                All Articles
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
