import type { ArticleBody, ArticleMeta } from "./types";

export const BLOG_AUTHOR = "Ara V. Naljian, Esq.";

/* Order follows the source document; publish order is the client's call. */
export const BLOG_POSTS: ArticleMeta[] = [
  {
    slug: "new-york-car-accident-what-to-do",
    title: "What to Do After a Car Accident in New York",
    seoTitle: "What to Do After a New York Car Accident | ARAVANA LAW",
    description: "Injured in a New York car accident? Learn the immediate steps, no-fault deadlines, DMV reporting rules, and claim deadlines that may apply.",
    region: "New York",
    excerpt: "A car accident can create several legal and insurance obligations at the same time. The decisions made during the first few days may affect access to medical benefits, the availability of evidence, and the ability to…",
  },
  {
    slug: "new-york-no-fault-serious-injury-threshold",
    title: "New York No-Fault Insurance and the Serious Injury Threshold: 2026 Update",
    seoTitle: "New York No-Fault and Serious Injury Law: 2026 Update",
    description: "Understand New York no-fault benefits, claim deadlines, the serious injury threshold, and the statutory changes that took effect May 26, 2026.",
    region: "New York",
    excerpt: "New York's automobile-insurance system separates first-party no-fault benefits from a liability claim against the person or entity that caused the collision. Understanding that distinction is essential, because the…",
  },
  {
    slug: "new-york-personal-injury-statute-of-limitations",
    title: "How Long Do You Have to File a Personal Injury Lawsuit in New York?",
    seoTitle: "New York Personal Injury Statute of Limitations",
    description: "Learn New York’s general personal injury filing deadline and why municipal claims, State claims, wrongful death, and malpractice follow different rules.",
    region: "New York",
    excerpt: "CPLR § 214(5) provides a three-year period for an action to recover damages for personal injury, subject to exceptions contained in other statutes. Ordinary motor-vehicle collisions and premises-liability claims…",
  },
  {
    slug: "new-york-comparative-fault-2026-auto-accidents",
    title: "Can You Recover If You Were Partly at Fault in a New York Accident? 2026 Rules",
    seoTitle: "New York Comparative Fault Law: 2026 Auto Rules",
    description: "Learn how New York reduces damages for shared fault and how the 2026 amendment can bar recovery entirely in certain motor-vehicle personal injury actions.",
    region: "New York",
    excerpt: "A person does not always lose a personal-injury claim merely because that person contributed to the accident. New York has long used pure comparative fault, which allocates responsibility among the claimant and the…",
  },
  {
    slug: "new-york-notice-of-claim-personal-injury-deadline",
    title: "New York Notice of Claim Deadlines for Injuries Involving Municipalities",
    seoTitle: "New York Notice of Claim: 90-Day Injury Deadline",
    description: "A New York injury claim involving a municipality may require a notice of claim within 90 days. Learn the deadlines, the 50-h hearing, and late-notice relief.",
    region: "New York",
    excerpt: "An accident involving a city vehicle, a municipal employee, a public school, a fire district, a sidewalk, a roadway, a public building, or another government-related condition may trigger procedural requirements that…",
  },
  {
    slug: "new-jersey-car-accident-what-to-do",
    title: "What to Do After a Car Accident in New Jersey",
    seoTitle: "What to Do After a New Jersey Car Accident | ARAVANA LAW",
    description: "Learn the immediate steps after a New Jersey car accident, including medical care, PIP notice, accident reporting, evidence preservation, and filing deadlines.",
    region: "New Jersey",
    excerpt: "A New Jersey car accident can involve medical treatment, Personal Injury Protection benefits, property damage, liability insurance, reporting duties, and a potential injury claim. Taking organized steps early can…",
  },
  {
    slug: "new-jersey-pip-limited-right-to-sue",
    title: "New Jersey PIP Insurance and the Limited Right to Sue",
    seoTitle: "New Jersey PIP and Limited Right to Sue Explained",
    description: "Understand New Jersey PIP benefits, the Limited and Unlimited Right to Sue options, the qualifying injury categories, and the 60-day certification requirement.",
    region: "New Jersey",
    excerpt: "New Jersey automobile policies combine first-party Personal Injury Protection benefits with a choice that can affect the right to recover pain-and-suffering damages from an at-fault driver. The terms \"Limited Right…",
  },
  {
    slug: "new-jersey-personal-injury-statute-of-limitations",
    title: "How Long Do You Have to File a Personal Injury Lawsuit in New Jersey?",
    seoTitle: "New Jersey Personal Injury Statute of Limitations",
    description: "Learn New Jersey’s general two-year personal injury deadline and why public-entity notices, certification requirements, and specialized claims may expire sooner.",
    region: "New Jersey",
    excerpt: "New Jersey generally allows two years to commence an action for injury to a person caused by another's wrongful act, neglect, or default. That rule covers many automobile, premises, pedestrian, and other negligence…",
  },
  {
    slug: "new-jersey-comparative-negligence-50-percent-rule",
    title: "New Jersey Comparative Negligence: What Happens If You Were Partly at Fault?",
    seoTitle: "New Jersey Comparative Negligence and the 50% Rule",
    description: "Learn how New Jersey’s comparative negligence law reduces damages, can bar recovery above 50%, and how fault percentages affect what each defendant pays.",
    region: "New Jersey",
    excerpt: "Accidents frequently involve competing accounts of what happened. New Jersey law allows an injured person to recover when that person shares some responsibility, but only up to a point. The state follows modified…",
  },
  {
    slug: "new-jersey-tort-claims-act-90-day-notice",
    title: "New Jersey Tort Claims Act: The 90-Day Notice Deadline",
    seoTitle: "New Jersey Tort Claims Act 90-Day Notice Deadline",
    description: "Learn the Tort Claims Act’s 90-day notice rule, the six-month waiting period, the two-year bar, the $3,600 damages threshold, and late-notice relief.",
    region: "New Jersey",
    excerpt: "A personal-injury claim involving the State of New Jersey, a county, a municipality, a public school, a public authority, a public hospital, a police department, a roadway agency, or a public employee may be governed…",
  },
  {
    slug: "new-jersey-deemer-statute-new-york-drivers",
    title: "Hurt in New Jersey With a New York Policy? The Deemer Statute Explained",
    seoTitle: "NJ Deemer Statute: New York Drivers Hurt in New Jersey",
    description: "New Jersey’s Deemer Statute can extend NJ PIP benefits to an out-of-state driver while imposing New Jersey’s limitation on lawsuit threshold. Here is how it works.",
    region: "New York and New Jersey",
    excerpt: "The Hudson and the Delaware are a few minutes wide, and a great many people cross them every day in cars insured on the other side. When a New York resident with a New York automobile policy is injured in a collision…",
  },
];

export const ARTICLE_LOADERS: Record<string, () => Promise<{ default: ArticleBody }>> = {
  "new-york-car-accident-what-to-do": () => import("./articles/new-york-car-accident-what-to-do"),
  "new-york-no-fault-serious-injury-threshold": () => import("./articles/new-york-no-fault-serious-injury-threshold"),
  "new-york-personal-injury-statute-of-limitations": () => import("./articles/new-york-personal-injury-statute-of-limitations"),
  "new-york-comparative-fault-2026-auto-accidents": () => import("./articles/new-york-comparative-fault-2026-auto-accidents"),
  "new-york-notice-of-claim-personal-injury-deadline": () => import("./articles/new-york-notice-of-claim-personal-injury-deadline"),
  "new-jersey-car-accident-what-to-do": () => import("./articles/new-jersey-car-accident-what-to-do"),
  "new-jersey-pip-limited-right-to-sue": () => import("./articles/new-jersey-pip-limited-right-to-sue"),
  "new-jersey-personal-injury-statute-of-limitations": () => import("./articles/new-jersey-personal-injury-statute-of-limitations"),
  "new-jersey-comparative-negligence-50-percent-rule": () => import("./articles/new-jersey-comparative-negligence-50-percent-rule"),
  "new-jersey-tort-claims-act-90-day-notice": () => import("./articles/new-jersey-tort-claims-act-90-day-notice"),
  "new-jersey-deemer-statute-new-york-drivers": () => import("./articles/new-jersey-deemer-statute-new-york-drivers"),
};
