import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CALENDLY_URL, LINKEDIN, SITE_URL, breadcrumb } from "@/lib/site";
import { openCalendly } from "@/lib/calendly";
import consultImg from "@/assets/consult.jpg";

const TITLE = "About Ara Naljian | NY & NJ Injury Attorney | ARAVANA LAW";
const DESCRIPTION =
  "ARAVANA LAW is a personal injury firm founded by attorney Ara Naljian, serving injured people in New York and New Jersey on a contingency-fee basis.";
const PATH = "/about";

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#ara-naljian`,
  name: "Ara Naljian",
  honorificSuffix: "Esq.",
  jobTitle: "Founder & Managing Attorney",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Ramapo College of New Jersey" },
    { "@type": "CollegeOrUniversity", name: "St. Thomas University School of Law" },
  ],
  knowsAbout: "Personal injury law in New York and New Jersey",
  sameAs: [LINKEDIN],
  url: SITE_URL + PATH,
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: SITE_URL + PATH },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + PATH }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(PERSON_SCHEMA) },
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

function Gold({ children }: { children: React.ReactNode }) {
  return <span className="text-gold-bright">{children}</span>;
}

function Page() {
  return (
    <>
      {/* PAGE HERO — two-tone title, intro copy, CTA (matches WP about) */}
      <section className="border-b border-border bg-surface-raised py-16 md:py-20">
        <Reveal className="container-site">
          <h1 className="h1-hero text-ecru">
            About <Gold>ARAVANA LAW</Gold>
          </h1>
          <nav
            aria-label="Breadcrumb"
            className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground"
          >
            <Link to="/" className="hover:text-gold-bright">
              Home
            </Link>
            <span className="px-2 text-gold-bright">»</span>
            <span className="text-gold-bright">About</span>
          </nav>
          <p className="mt-6 max-w-xl text-lg text-ecru">
            At <Gold>ARAVANA LAW</Gold>, we combine personalized representation with a powerful advocacy to
            protect your rights and pursue the justice you deserve.
          </p>
          <Link to="/contact" className="btn-gold mt-8">
            Speak with an attorney today →
          </Link>
        </Reveal>
      </section>

      {/* MISSION — portrait left, We Do Justice right */}
      <section className="container-site grid items-start gap-12 py-16 md:grid-cols-[minmax(0,380px)_1fr] md:py-24">
        <Reveal variant="left" className="md:sticky md:top-32">
          <img
            src="/ara.png"
            alt="Attorney Ara Naljian, founder of ARAVANA LAW"
            width={720}
            height={960}
            loading="lazy"
            decoding="async"
            className="mx-auto w-full max-w-sm object-contain"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Mission Statement</p>
          <h2 className="h2-section mt-4 text-ecru">We Do Justice</h2>
          <div className="mt-7 space-y-5 text-muted-foreground">
            <p>
              I founded <Gold>ARAVANA LAW</Gold> to represent injured people in New York and New Jersey the way
              I believe they deserve to be represented: by a lawyer who knows their case, answers their calls,
              and prepares every matter from the first day as though it will ultimately be tried.
            </p>
            <p>
              My practice is devoted exclusively to representing injured people. I do not represent insurance
              companies, and I never will. My responsibility is to the individual whose life has been disrupted
              by an injury and who has entrusted me with the responsibility of pursuing justice on their
              behalf.
            </p>
            <div className="border-l-2 border-gold-bright bg-surface-card p-5">
              <p>
                <Gold>ARAVANA LAW</Gold> is the firm I would want representing me or someone in my family. I
                built it deliberately: personal enough that every client knows the lawyer responsible for the
                case, but equipped with the technology, systems, and resources expected of a modern personal
                injury practice. The lawyer whose name is on the door is the lawyer responsible for your case.
              </p>
            </div>
            <p>
              I was born in the Bronx and raised in New Jersey, and my legal career has been rooted in both New
              York and New Jersey. I earned my Law and Society degree from Ramapo College and my Juris Doctor
              from St. Thomas University School of Law. I was admitted to practice in New Jersey in 2022 and
              New York in 2023, as well as the U.S. District Courts for New Jersey, the Southern District of
              New York, and the Eastern District of New York.
            </p>
            <p>
              I began my personal injury career at Morgan &amp; Morgan, managing serious injury claims and
              gaining firsthand experience with large-scale litigation. In 2025, I joined Aviles Law Firm PLLC
              and the Law Office of Natascia Ayers PLLC, working alongside experienced trial attorneys on
              serious and catastrophic injury cases. These experiences shaped my vision for the kind of law
              firm I wanted to build.
            </p>
          </div>
          <Link to="/contact" className="btn-gold mt-8">
            Contact Us →
          </Link>
        </Reveal>
      </section>

      {/* STATEMENT BAND — schedule a consultation */}
      <section className="border-y border-border bg-surface-raised py-16 md:py-20">
        <Reveal className="container-site">
          <h2 className="h2-section max-w-3xl text-ecru">
            You deserve a lawyer
            <span className="block">who is there for you.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Direct communication. Personal attention. Experienced representation. When you choose{" "}
            <Gold>ARAVANA LAW</Gold>, you know who is handling your case—and you can reach your lawyer when you
            need answers.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              void openCalendly();
            }}
            className="btn-gold mt-8"
          >
            Schedule a Consultation →
          </a>
        </Reveal>
      </section>

      {/* HOW I WORK — text left, image right */}
      <section className="container-site grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <Reveal>
          <p className="eyebrow">Client Experience</p>
          <h2 className="h2-section mt-4 text-ecru">How I Work With Clients</h2>
          <div className="mt-7 space-y-5 text-muted-foreground">
            <p>
              <Gold>ARAVANA LAW</Gold> is intentionally structured around direct attorney involvement. When you
              retain me, I am the attorney responsible for your case. You will not be passed from department to
              department. You will not learn about an important development or settlement offer from someone
              you have never met. You will not have to make repeated calls simply to find out where your case
              stands. You will have my direct telephone number and my email address. I answer both.
            </p>
            <p>
              Personal injury cases take time, but unnecessary delay should never result from neglect or poor
              communication. I have invested heavily in the systems and technology that keep cases moving—so
              records are requested when they are needed, deadlines are tracked, developments are communicated,
              and important decisions are made by a lawyer rather than reduced to a form or delegated without
              oversight. Technology should make a lawyer more accessible and more effective. It should never
              replace the lawyer. My clients should know what is happening in their case, why it is happening,
              and what comes next. And when they have a question, they should be able to ask the lawyer
              handling it.
            </p>
          </div>
        </Reveal>
        <Reveal variant="right" delay={150}>
          <img
            src={consultImg}
            alt="Ara Naljian meeting with a client across a desk"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="w-full rounded-[10px] border border-border object-cover"
          />
        </Reveal>
      </section>
    </>
  );
}
