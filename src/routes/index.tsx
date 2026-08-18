import { createFileRoute, Link } from "@tanstack/react-router";
import { Gavel, Handshake, Map, Phone, User } from "lucide-react";
import { Divider } from "@/components/Divider";
import { PracticeTabs } from "@/components/home/PracticeTabs";
import { FreeCaseReview } from "@/components/home/FreeCaseReview";
import { PHONE_DISPLAY, PHONE_HREF, SITE_URL } from "@/lib/site";
import heroSkyline from "@/assets/hero-skyline.jpg";
import officeWindow from "@/assets/office-window.jpg";
import officeDesk from "@/assets/office-desk.jpg";
import suitBand from "@/assets/suit-band.jpg";
import araPortrait from "@/assets/ara-naljian.png.asset.json";

const TITLE = "New York & New Jersey Personal Injury Lawyer | ARAVANA LAW";
const DESCRIPTION =
  "ARAVANA LAW represents injured people across New York and New Jersey. Work directly with attorney Ara Naljian. Free consultation. No Win, No Fee. (347) 456-8567.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Index,
});

const TRUST_ITEMS = [
  { Icon: User, lines: ["Direct Attorney", "Representation"] },
  { Icon: Map, lines: ["Licensed in New York", "& New Jersey"] },
  { Icon: Gavel, lines: ["Trial-Focused", "Approach"] },
  { Icon: Handshake, lines: ["Personal Attention.", "Powerful Advocacy."] },
];

const WHY_CARDS = [
  {
    n: "01",
    title: "Your case starts with a strategy.",
    body: "Every successful case begins with a clear plan. During your consultation, we evaluate the facts, identify potential legal issues, answer your questions, and develop a strategy designed to maximize the value of your claim from the very beginning.",
  },
  {
    n: "02",
    title: "We take immediate action.",
    body: "The moment you hire our firm, we get to work. We notify the insurance companies, preserve critical evidence, obtain police reports and medical records, identify witnesses, and protect your claim before important evidence disappears.",
  },
  {
    n: "03",
    title: "We build your case to win.",
    body: "Results are earned through preparation. We conduct a comprehensive investigation, gather evidence, work with experts when necessary, and, when negotiations fail, file suit and aggressively litigate your case with one goal in mind: obtaining the best possible outcome.",
  },
  {
    n: "04",
    title: "We negotiate from a position of strength.",
    body: "Insurance companies know which attorneys are prepared to go the distance. Every demand we make is backed by evidence, thorough preparation, and a willingness to present your case to a jury if a fair settlement isn't offered.",
  },
  {
    n: "05",
    title: "We don't stop until your case is resolved.",
    body: "Whether your case ends in settlement or trial, our commitment never changes. We remain by your side through every stage of the process, protecting your interests and fighting to secure the compensation you deserve.",
  },
];

function Gold({ children }: { children: React.ReactNode }) {
  return <span className="text-gold-bright">{children}</span>;
}

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroSkyline}
          alt="New York City skyline at night"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(22,5,7,0.98) 0%, rgba(22,5,7,0.92) 42%, rgba(43,10,16,0.6) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="container-site relative grid items-center gap-8 py-20 md:min-h-[88vh] md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div>
            <p className="eyebrow">Dedicated to protecting your rights.</p>
            <h1 className="h1-hero mt-6 text-ecru">
              Your Case
              <span className="block">My Personal</span>
              <span className="block text-gold-bright">Presence.</span>
            </h1>
            <div className="mt-8 space-y-2 text-lg text-ecru md:text-xl">
              <p>
                At <Gold>ARAVANA LAW</Gold>, you work directly with Ara Naljian.
              </p>
              <p>One attorney, start to finish.</p>
              <p>Built to win, not to settle cheap.</p>
              <p>Prepared for trial from the first call.</p>
            </div>
            <Link to="/contact" className="btn-gold mt-10 w-full sm:w-auto">
              Speak with an attorney today →
            </Link>
          </div>
          <div className="hidden md:block">
            <img
              src={araPortrait.url}
              alt="Attorney Ara Naljian, founder of ARAVANA LAW"
              width={720}
              height={960}
              className="mx-auto max-h-[70vh] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="container-site relative z-10 -mt-8">
        <ul className="grid grid-cols-2 gap-6 border border-border bg-surface-raised p-6 md:grid-cols-4 md:p-8">
          {TRUST_ITEMS.map((item) => (
            <li key={item.lines[0]} className="flex flex-col items-center gap-3 text-center">
              <item.Icon className="h-7 w-7 text-gold-bright" strokeWidth={1.5} aria-hidden="true" />
              <span className="font-display text-[0.7rem] uppercase leading-relaxed tracking-[0.14em] text-ecru md:text-xs">
                {item.lines[0]}
                <span className="block">{item.lines[1]}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="container-site grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="eyebrow">About ARAVANA LAW</p>
          <h2 className="h2-section mt-5 text-ecru">
            Personal Attention
            <span className="block">Powerful Advocacy</span>
          </h2>
          <p className="mt-4 font-display text-sm uppercase tracking-[0.16em] text-gold-bright">
            Your rights. Our purpose.
          </p>
          <div className="mt-8 space-y-5 text-muted-foreground">
            <p>
              <Gold>ARAVANA LAW</Gold> was founded on a simple belief: injured people deserve more than just a
              case number. They deserve an attorney who is invested, accessible, and relentless in pursuing the
              justice they deserve.
            </p>
            <p>
              Attorney Ara Naljian handles every case personally from start to finish. You will never be passed
              off. You will always speak directly with your lawyer because your case deserves experience,
              strategy, and a commitment to doing things the right way.
            </p>
            <p>
              At <Gold>ARAVANA LAW</Gold>, we combine personalized representation with aggressive advocacy to
              secure the best possible outcomes for our clients in New York and New Jersey.
            </p>
          </div>
          <Link to="/about" className="btn-gold mt-10">
            Learn more about us →
          </Link>
        </div>
        <div className="arch-frame mx-auto max-w-md">
          <img
            src={officeWindow}
            alt="High-rise law office window overlooking the New York skyline"
            width={900}
            height={1200}
            loading="lazy"
            className="h-full w-full rounded-t-[999px] object-cover"
          />
        </div>
      </section>

      {/* FULL-WIDTH IMAGE BAND */}
      <div className="relative h-[45vh] w-full overflow-hidden md:h-[60vh]" aria-hidden="true">
        <img
          src={suitBand}
          alt=""
          width={1920}
          height={900}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #160507 0%, rgba(22,5,7,0.25) 35%, rgba(22,5,7,0.35) 65%, #160507 100%)",
          }}
        />
      </div>

      {/* STATEMENT BAND */}
      <section className="bg-background py-20 text-center md:py-24">
        <h2 className="h2-section text-ecru">
          When everything is on the line.
          <span className="block">I'm ready.</span>
        </h2>
      </section>

      <Divider />

      {/* MEET THE ATTORNEY */}
      <section className="container-site py-16 md:py-24">
        <h2 className="h2-section text-center text-ecru">Meet the Attorney</h2>
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-3">
          <div>
            <h3 className="h3-card text-ecru">Dedicated to your justice</h3>
            <p className="mt-5 text-muted-foreground">
              When you work with <Gold>ARAVANA LAW</Gold>, you work directly with Attorney Ara Naljian, a
              skilled, strategic and compassionate advocate who puts your interests first.
            </p>
          </div>
          <div className="border border-border p-2">
            <img
              src={officeDesk}
              alt="Mahogany law office desk with legal volumes at ARAVANA LAW"
              width={900}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-display text-4xl text-gold-bright">Ara Naljian</p>
            <p className="mt-3 font-display text-sm uppercase tracking-[0.16em] text-ecru">
              Founder &amp; Managing Attorney
            </p>
            <div className="card-gold mt-6 space-y-4 p-6 text-muted-foreground">
              <p>
                As the founder of <Gold>ARAVANA LAW</Gold>, I personally handle every case from start to finish.
                My focus is on providing exceptional legal representation with honesty, clear communication and
                results-driven strategy.
              </p>
              <p>You will always work directly with me because your case deserves my full attention.</p>
            </div>
          </div>
        </div>
      </section>

      <PracticeTabs />

      {/* WHY ARAVANA LAW */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <img
          src={heroSkyline}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[#160507]/85" aria-hidden="true" />
        <div className="container-site relative grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col">
            <h2 className="h2-section text-ecru">Why ARAVANA LAW</h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              An attorney who has stood in a courtroom, selected juries, cross examined defense experts, and
              tried cases to verdict.
            </p>
            <div className="mt-auto pt-14">
              <p className="font-display text-lg uppercase leading-relaxed tracking-[0.1em] text-gold-bright">
                An attorney handles your case.
                <span className="block">Not an intake specialist.</span>
                <span className="block">Not a case manager.</span>
                <span className="block">Not an AI robot.</span>
              </p>
              <a
                href={PHONE_HREF}
                className="mt-8 inline-flex items-center gap-3 font-display text-2xl tracking-[0.06em] text-gold-bright"
              >
                <Phone className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {WHY_CARDS.map((card) => (
              <article key={card.n} className="card-gold relative p-7">
                <span
                  className="absolute right-5 top-2 font-display text-5xl text-gold-bright/15"
                  aria-hidden="true"
                >
                  {card.n}
                </span>
                <h3 className="h3-card text-ecru">{card.title}</h3>
                <p className="mt-3 text-muted-foreground">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FreeCaseReview />
    </>
  );
}
