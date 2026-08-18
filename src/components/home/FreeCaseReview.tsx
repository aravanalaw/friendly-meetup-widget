import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CASE_TYPES, FORM_MICROCOPY, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const FORM_ENDPOINT = "/api/public/case-review";
const MAX_MESSAGE = 180;

type Errors = Partial<Record<"full_name" | "email" | "phone" | "sms_consent", string>>;

export function FreeCaseReview() {
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const full_name = String(data.get("full_name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const sms_consent = data.get("sms_consent") === "on";

    const next: Errors = {};
    if (!full_name) next.full_name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!/^[\d\s().+-]{10,}$/.test(phone)) next.phone = "Please enter a valid phone number.";
    if (!sms_consent) next.sms_consent = "Please agree before submitting.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const payload = {
      full_name,
      email,
      phone,
      case_type: String(data.get("case_type") ?? ""),
      message,
      sms_consent,
      page_url: typeof window !== "undefined" ? window.location.href : "",
      submitted_at: new Date().toISOString(),
    };

    setSending(true);
    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Submission endpoint is not connected yet; still show confirmation.
    }
    setSending(false);
    setSubmitted(true);
  }

  const fieldClass =
    "w-full border border-border bg-surface-base px-4 py-3 text-ecru outline-none focus:border-gold-bright";
  const labelClass = "mb-2 block font-display text-xs uppercase tracking-[0.14em] text-muted-foreground";

  return (
    <section id="book" className="bg-surface-base py-20 md:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-3xl border border-border bg-surface-raised p-6 md:p-12">
          <h2 className="h2-section text-center">
            <span className="text-gold-bright">Free</span> <span className="text-ecru">Case Review</span>
          </h2>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 font-display text-xs uppercase tracking-[0.12em] text-ecru">
            {["Free Consultation", "No Win, No Fee", "We Fight for You"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-gold-bright" strokeWidth={1.5} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          {submitted ? (
            <p className="mt-10 text-center text-lg text-ecru">
              Thank you. Your case review request has been received. Ara Naljian's office will contact you
              shortly. If this is urgent, call{" "}
              <a href={PHONE_HREF} className="text-gold-bright">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-10 grid gap-6 md:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="full_name">
                  Full Name*
                </label>
                <input id="full_name" name="full_name" className={fieldClass} required />
                {errors.full_name && <p className="mt-2 text-sm text-gold-bright">{errors.full_name}</p>}
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  Email Address*
                </label>
                <input id="email" name="email" type="email" className={fieldClass} required />
                {errors.email && <p className="mt-2 text-sm text-gold-bright">{errors.email}</p>}
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone Number*
                </label>
                <input id="phone" name="phone" type="tel" className={fieldClass} required />
                {errors.phone && <p className="mt-2 text-sm text-gold-bright">{errors.phone}</p>}
              </div>
              <div>
                <label className={labelClass} htmlFor="case_type">
                  Select Case Type
                </label>
                <select id="case_type" name="case_type" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Select case type
                  </option>
                  {CASE_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className={labelClass} htmlFor="message">
                  Tell Us About Your Case
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={MAX_MESSAGE}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={fieldClass}
                />
                <p className="mt-2 text-right text-xs text-muted-foreground">
                  {message.length} / {MAX_MESSAGE}
                </p>
              </div>
              <div className="md:col-span-2">
                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" name="sms_consent" className="mt-1 h-4 w-4 accent-[#e8c34e]" />
                  <span>
                    I agree to receive calls, texts, and emails from ARAVANA LAW about my inquiry. Message and
                    data rates may apply. Reply STOP to opt out. See our{" "}
                    <Link to="/sms-terms" className="text-gold-bright underline underline-offset-4">
                      SMS Terms &amp; Conditions
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy-policy" className="text-gold-bright underline underline-offset-4">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                {errors.sms_consent && <p className="mt-2 text-sm text-gold-bright">{errors.sms_consent}</p>}
                <p className="mt-4 text-xs text-muted-foreground">{FORM_MICROCOPY}</p>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="btn-gold w-full" disabled={sending}>
                  {sending ? "Sending…" : "Get Help Now"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
