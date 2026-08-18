export type ArticleBlock =
  | { t: "h2"; x: string }
  | { t: "p"; x: string }
  | { t: "ul"; x: string[] };

export type ArticleFaq = { q: string; a: string };

export type ArticleSource = { label: string; url?: string };

export type ArticleBody = {
  blocks: ArticleBlock[];
  faqs: ArticleFaq[];
  sources: ArticleSource[];
};

export type ArticleMeta = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  region: string;
  excerpt: string;
};
