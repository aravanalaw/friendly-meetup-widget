export const SITE_URL = "https://aravanalaw.com";

export const PHONE_DISPLAY = "(332) 456-8567";
export const PHONE_HREF = "tel:+13324568567";
export const EMAIL = "ara@aravanalaw.com";
export const LINKEDIN = "https://www.linkedin.com/in/ara-naljian-67b4691aa";
export const CALENDLY_URL = "https://calendly.com/aravanalaw";

export const OFFICES = [
  {
    label: "NEW JERSEY OFFICE",
    entity: "Naljian Law Firm LLC",
    street: "174 Route 17 North, Suite 201",
    city: "Rochelle Park",
    state: "NJ",
    zip: "07662",
    lat: 40.9038034,
    lng: -74.0711624,
    mapsUrl: "https://maps.app.goo.gl/znijTChtVChCZJfx6",
  },
  {
    label: "NEW YORK OFFICE",
    entity: "Naljian Law Firm PLLC",
    street: "11 Park Place, 3rd Floor",
    city: "New York",
    state: "NY",
    zip: "10007",
    lat: 40.713125,
    lng: -74.008324,
    mapsUrl: "https://maps.app.goo.gl/otoCFbXv7wMzVxnU6",
  },
] as const;

export type Office = (typeof OFFICES)[number];

export const PRACTICE_AREAS = [
  { title: "Bicycle Accidents", slug: "bicycle-accidents" },
  { title: "Burn Injuries", slug: "burn-injuries" },
  { title: "Bus & Mass Transit Accidents", slug: "bus-mass-transit-accidents" },
  { title: "Catastrophic Injury & Amputation", slug: "catastrophic-injury-amputation" },
  { title: "Motorcycle Accidents", slug: "motorcycle-accidents" },
  { title: "Construction Accidents", slug: "construction-accidents" },
  { title: "Motor Vehicle Accidents", slug: "motor-vehicle-accidents" },
  { title: "Negligent Security", slug: "negligent-security" },
  { title: "Lead Paint Poisoning", slug: "lead-paint-poisoning" },
  { title: "Elevator & Escalator Accidents", slug: "elevator-escalator-accidents" },
  { title: "Dog Bites & Animal Attacks", slug: "dog-bites-animal-attacks" },
  { title: "Ceiling & Structural Collapse", slug: "ceiling-structural-collapse" },
  { title: "Pedestrian Accidents", slug: "pedestrian-accidents" },
] as const;

export const CASE_TYPES = [
  ...PRACTICE_AREAS.map((p) => p.title),
  "Wrongful Death",
  "Other",
];

export const DISCLAIMER =
  "Attorney Advertising. Prior results do not guarantee a similar outcome.";

export const FORM_MICROCOPY =
  "Submitting this form does not create an attorney-client relationship. Please do not include confidential or time-sensitive information.";

export const SITE_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "ARAVANA LAW",
      alternateName: "Aravana Law – We Do Justice",
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#organization`,
      name: "ARAVANA LAW",
      alternateName: ["Naljian Law Firm PLLC", "Naljian Law Firm LLC"],
      slogan: "We Do Justice",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.ico`,
      image: `${SITE_URL}/og-image.jpg`,
      telephone: "+1-332-456-8567",
      email: EMAIL,
      sameAs: [LINKEDIN],
      areaServed: ["New York", "New Jersey"],
      priceRange: "Free consultation, contingency fee",
      location: [
        {
          "@type": "LegalService",
          name: "ARAVANA LAW — New York Office",
          telephone: "+1-332-456-8567",
          address: {
            "@type": "PostalAddress",
            streetAddress: "11 Park Place, 3rd Floor",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10007",
            addressCountry: "US",
          },
        },
        {
          "@type": "LegalService",
          name: "ARAVANA LAW — New Jersey Office",
          telephone: "+1-332-456-8567",
          address: {
            "@type": "PostalAddress",
            streetAddress: "174 Route 17 North, Suite 201",
            addressLocality: "Rochelle Park",
            addressRegion: "NJ",
            postalCode: "07662",
            addressCountry: "US",
          },
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#ara-naljian`,
      name: "Ara Naljian",
      honorificSuffix: "Esq.",
      jobTitle: "Founder & Managing Attorney",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      knowsAbout: "Personal injury law in New York and New Jersey",
      alumniOf: "St. Thomas University School of Law",
    },
  ],
};

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
