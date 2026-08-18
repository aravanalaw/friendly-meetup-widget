import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Bike, Car, HardHat, PersonStanding, Scale, Bird } from "lucide-react";
import consultImg from "@/assets/consult.jpg";

type Tab = {
  id: string;
  label: string;
  Icon: typeof Scale;
  heading: string;
  paragraphs: string[];
  learnMore?: { label: string; slug: string };
};

const TABS: Tab[] = [
  {
    id: "personal-injury",
    label: "Personal Injury",
    Icon: Scale,
    heading: "Personal Injury",
    paragraphs: [
      "If you have been injured in New York or New Jersey, the road ahead is not easy. You should be focused on healing, but mounting medical bills and lost wages can make that feel impossible.",
      "When someone else's negligence causes your injury, you need more than advice. You need action. At ARAVANA LAW, our personal injury attorney is licensed in both New York and New Jersey, and we handle cases in the courts of both states. We will answer your questions, take on the insurance companies, and help you move forward. Schedule a free consultation today.",
    ],
  },
  {
    id: "workers-compensation",
    label: "Workers Compensation",
    Icon: HardHat,
    heading: "Workers Compensation",
    paragraphs: [
      "Job site injuries in New York and New Jersey often involve more than one claim. Benefits may cover part of your medical treatment and lost wages, while a separate case against a negligent property owner, general contractor, or equipment supplier may also exist.",
      "We look at the whole picture from day one, preserve the site evidence, and coordinate the claims so nothing is left on the table. Construction and Labor Law matters in both states are handled personally by Ara Naljian, from the first notice through litigation. Schedule a free consultation today.",
    ],
    learnMore: { label: "Construction Accidents", slug: "construction-accidents" },
  },
  {
    id: "car-accident",
    label: "Car Accident",
    Icon: Car,
    heading: "Car Accident",
    paragraphs: [
      "Crashes in New York and New Jersey run through no-fault and PIP rules with short deadlines and forms that are easy to get wrong. Insurers begin building their file the same day, and early recorded statements are used to limit what you recover.",
      "We handle the notices and paperwork, secure the police report, vehicle data, and medical records, and deal with the adjusters so you can treat your injuries. Cases are prepared for trial in the courts of both states from the first call. Schedule a free consultation today.",
    ],
    learnMore: { label: "Motor Vehicle Accidents", slug: "motor-vehicle-accidents" },
  },
  {
    id: "wrongful-death",
    label: "Wrongful Death",
    Icon: Bird,
    heading: "Wrongful Death",
    paragraphs: [
      "Losing a family member to someone else's negligence brings legal deadlines at the worst possible moment. New York and New Jersey each set their own rules for who may bring the claim, what an estate must do first, and how long a family has to act.",
      "We handle the estate steps, the investigation, and every conversation with the insurance carriers, keeping the family informed at each stage. You will always speak directly with your attorney about the case. Schedule a free consultation today.",
    ],
  },
  {
    id: "pedestrian-accident",
    label: "Pedestrian Accident",
    Icon: PersonStanding,
    heading: "Pedestrian Accident",
    paragraphs: [
      "Pedestrians struck in New York or New Jersey often face serious injuries and a driver's insurer arguing the walker was at fault. Crosswalk signals, traffic camera footage, and witness accounts can disappear within days of the collision.",
      "We move quickly to preserve that evidence, document the injuries fully, and press the claim against every responsible party. Both states' courts are familiar ground for our office, and every file is prepared as if it will be tried. Schedule a free consultation today.",
    ],
    learnMore: { label: "Pedestrian Accidents", slug: "pedestrian-accidents" },
  },
  {
    id: "motorcycle-accident",
    label: "Motorcycle Accident",
    Icon: Bike,
    heading: "Motorcycle Accident",
    paragraphs: [
      "Motorcycle riders in New York and New Jersey face bias before the first phone call, and insurers lean on it. Coverage questions are also different from a car claim, which affects how medical treatment gets paid while the case is pending.",
      "We reconstruct how the crash actually happened, work with experts when the case calls for them, and hold the responsible driver accountable in the courts of either state. You work directly with Ara Naljian throughout. Schedule a free consultation today.",
    ],
    learnMore: { label: "Motorcycle Accidents", slug: "motorcycle-accidents" },
  },
];

export function PracticeTabs() {
  const [active, setActive] = useState(TABS[0]!.id);
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <section className="container-site py-20 md:py-28">
      <div className="text-center">
        <h2 className="h2-section text-ecru">
          Our Service
          <span className="block">Practice Areas</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,360px)_1fr]">
        <div role="tablist" aria-label="Practice areas" className="flex flex-col gap-3">
          {TABS.map((t) => {
            const selected = t.id === active;
            return (
              <button
                key={t.id}
                role="tab"
                type="button"
                id={`tab-${t.id}`}
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(t.id)}
                onKeyDown={(e) => {
                  const i = TABS.findIndex((x) => x.id === active);
                  if (e.key === "ArrowDown") setActive(TABS[(i + 1) % TABS.length]!.id);
                  if (e.key === "ArrowUp") setActive(TABS[(i - 1 + TABS.length) % TABS.length]!.id);
                }}
                className={`flex items-center gap-4 border px-5 py-4 text-left font-display text-sm uppercase tracking-[0.1em] transition-colors ${
                  selected
                    ? "border-gold-bright bg-maroon text-gold-bright"
                    : "border-border bg-surface-card text-ecru hover:bg-maroon"
                }`}
              >
                <t.Icon className="h-5 w-5 shrink-0 text-gold-bright" strokeWidth={1.5} aria-hidden="true" />
                {t.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className="card-gold p-6 md:p-9"
        >
          <div className="relative">
            <img
              src={consultImg}
              alt="Attorney shaking hands with an injured client across a desk"
              width={1200}
              height={800}
              loading="lazy"
              className="h-64 w-full border border-border object-cover md:h-80"
            />
            <span className="absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold-bright bg-surface-raised">
              <tab.Icon className="h-6 w-6 text-gold-bright" strokeWidth={1.5} aria-hidden="true" />
            </span>
          </div>
          <h3 className="h3-card mt-12 text-ecru">{tab.heading}</h3>
          <div className="mt-4 space-y-4 text-muted-foreground">
            {tab.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          {tab.learnMore && (
            <Link
              to="/practice-areas/$slug"
              params={{ slug: tab.learnMore.slug }}
              className="mt-6 inline-block font-display text-sm uppercase tracking-[0.1em] text-gold-bright underline underline-offset-4"
            >
              Learn more →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
