import { MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { OfficeMap } from "./OfficeMap";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, type Office } from "@/lib/site";

export function OfficeSection({ office, heading }: { office: Office; heading: string }) {
  return (
    <section className="container-site py-16 md:py-20">
      <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,420px)_1fr]">
        <Reveal variant="left" className="flex flex-col">
          <p className="eyebrow">Visit Us</p>
          <h2 className="h2-section mt-4 text-ecru">{heading}</h2>
          <div className="card-gold mt-8 flex-1 space-y-5 p-7">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-bright" aria-hidden="true" />
              <address className="not-italic leading-relaxed text-muted-foreground">
                <span className="block font-display uppercase tracking-[0.14em] text-ecru">
                  {office.label}
                </span>
                {office.entity}
                <br />
                {office.street}
                <br />
                {office.city}, {office.state} {office.zip}
              </address>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-gold-bright" aria-hidden="true" />
              <a href={PHONE_HREF} className="text-ecru hover:text-gold-bright">
                {PHONE_DISPLAY}
              </a>
            </div>
            <p className="text-muted-foreground">
              Free consultation. No Win, No Fee. Email{" "}
              <a href={`mailto:${EMAIL}`} className="text-gold-bright">
                {EMAIL}
              </a>
            </p>
            <a
              href={office.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-2 w-full"
            >
              Get Directions →
            </a>
          </div>
        </Reveal>
        <Reveal variant="right" delay={150}>
          <OfficeMap office={office} />
        </Reveal>
      </div>
    </section>
  );
}
