"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle, Phone, Loader2 } from "lucide-react";
import { SITE_CONFIG, SERVICES, OC_CITIES } from "@/lib/constants";
import { trackBookingFormSubmit } from "@/lib/analytics";
import { useFormGuard } from "@/components/FormGuard";

// Local date as YYYY-MM-DD, used as the earliest selectable booking date.
function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Keep in sync with TIME_SLOTS in src/lib/inspection-request.ts (the API checks them).
const timeSlots = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
];

type BookingForm = {
  pestType: string;
  city: string;
  address: string;
  zip: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const EMPTY_FORM: BookingForm = {
  pestType: "",
  city: "",
  address: "",
  zip: "",
  date: "",
  time: "",
  name: "",
  email: "",
  phone: "",
  notes: "",
};

// Unsent answers survive a reload or a trip back to this page (people and browser
// agents both do this mid-form). Session-only, cleared after a successful booking.
const DRAFT_KEY = "yogis-book-draft";

/** Match ?pest= / ?city= by slug or name, e.g. ?pest=rodent-control or ?city=Santa%20Ana. */
function matchOption<T extends { slug: string; name: string }>(list: readonly T[], value: string | null) {
  if (!value) return "";
  const norm = (v: string) => v.trim().toLowerCase().replace(/[\s_-]+/g, " ");
  const k = norm(value);
  return list.find((o) => norm(o.slug) === k || norm(o.name) === k)?.slug ?? "";
}

const steps = [
  { number: 1, label: "Service Details" },
  { number: 2, label: "Date & Time" },
  { number: 3, label: "Contact Info" },
];

export default function BookPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { guard, honeypot } = useFormGuard();
  const [minDate] = useState(todayISO);
  const [formData, setFormData] = useState<BookingForm>(EMPTY_FORM);

  // Restore a saved draft, then apply any ?pest= / ?city= / ?zip= from the link.
  useEffect(() => {
    let draft: Partial<BookingForm> = {};
    try {
      const saved = sessionStorage.getItem(DRAFT_KEY);
      if (saved) draft = JSON.parse(saved) as Partial<BookingForm>;
    } catch {
      // Storage blocked or bad JSON: start fresh.
    }
    const params = new URLSearchParams(window.location.search);
    const fromUrl: Partial<BookingForm> = {};
    const pest = params.get("pest") === "other" ? "other" : matchOption(SERVICES, params.get("pest"));
    const city = matchOption(OC_CITIES, params.get("city"));
    const zip = (params.get("zip") || "").replace(/\D/g, "").slice(0, 5);
    if (pest) fromUrl.pestType = pest;
    if (city) fromUrl.city = city;
    if (zip) fromUrl.zip = zip;
    if (!Object.keys(draft).length && !Object.keys(fromUrl).length) return;
    setFormData((prev) => {
      const next = { ...prev };
      for (const k of Object.keys(EMPTY_FORM) as (keyof BookingForm)[]) {
        const v = fromUrl[k] ?? draft[k];
        if (typeof v === "string") next[k] = v;
      }
      return next;
    });
  }, []);

  useEffect(() => {
    try {
      if (status === "success") sessionStorage.removeItem(DRAFT_KEY);
      else sessionStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
    } catch {
      // Storage unavailable; the in-memory state still carries between steps.
    }
  }, [formData, status]);

  const updateField = (field: keyof BookingForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, ...guard }),
      });
      if (!res.ok) throw new Error("Failed");
      trackBookingFormSubmit({ pestType: formData.pestType, city: formData.city });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const zipValid = /^\d{5}$/.test(formData.zip.trim());
  const canProceedStep1 = formData.pestType && formData.city && formData.address.trim().length >= 5 && zipValid;
  const canProceedStep2 = formData.date && formData.time;
  const canSubmit = formData.name && formData.email && formData.phone;

  // Enter key / native submit: advance a step when it's complete, book on the last step.
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentStep === 1 && canProceedStep1) nextStep();
    else if (currentStep === 2 && canProceedStep2) nextStep();
    else if (currentStep === 3 && canSubmit && status !== "loading") void handleSubmit();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary section-divider">
        <img src="/images/heroes/hero-book.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/65 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 text-center sm:pb-32 sm:pt-20">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            Book a Free Pest Inspection
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Schedule your free inspection in just a few steps. Same-day appointments
            available across all of Orange County.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map(({ number, label }) => (
                <div key={number} className="flex flex-1 flex-col items-center">
                  <div className="flex items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                        currentStep > number
                          ? "bg-primary text-white"
                          : currentStep === number
                          ? "bg-accent text-primary-dark"
                          : "bg-border text-muted"
                      }`}
                    >
                      {currentStep > number ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        number
                      )}
                    </div>
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium ${
                      currentStep >= number ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-1">
              {steps.map(({ number }) => (
                <div
                  key={number}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    currentStep >= number ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl border border-border bg-surface p-8 sm:p-10">
            {honeypot}
            {/* Success State */}
            {status === "success" ? (
              <div className="py-8 text-center">
                <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-600" />
                <h2 className="mb-2 text-2xl font-bold text-foreground">Inspection Booked!</h2>
                <p className="mb-2 text-muted">
                  We&apos;ll call you shortly to confirm your appointment.
                </p>
                <p className="mb-6 text-sm text-muted">
                  Check your email at <strong>{formData.email}</strong> for a confirmation.
                </p>
                <Link
                  href="/"
                  className="inline-block rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white transition-all hover:bg-primary-light"
                >
                  Back to Home
                </Link>
              </div>
            ) : <form
              id="booking-form"
              name="booking"
              aria-label="Book a free pest inspection"
              noValidate
              onSubmit={onFormSubmit}
            >
            {/* Step 1: Pest Type + City */}
            {currentStep === 1 && (
              <div>
                <h2 className="mb-2 text-2xl font-bold text-foreground">
                  What pest do you need help with?
                </h2>
                <p className="mb-8 text-muted">
                  Tell us what you&apos;re seeing and where the property is.
                </p>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="pestType"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Pest Type *
                    </label>
                    <select
                      id="pestType"
                      name="pestType"
                      required
                      autoComplete="off"
                      value={formData.pestType}
                      onChange={(e) => updateField("pestType", e.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="" disabled>Select a pest type</option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name}
                        </option>
                      ))}
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Your City *
                    </label>
                    <select
                      id="city"
                      name="city"
                      required
                      autoComplete="address-level2"
                      value={formData.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="" disabled>Select your city</option>
                      {OC_CITIES.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="address"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Street Address *
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        required
                        minLength={5}
                        maxLength={200}
                        autoComplete="street-address"
                        value={formData.address}
                        onChange={(e) => updateField("address", e.target.value)}
                        placeholder="123 Main St, Apt 4"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="zip"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        ZIP Code *
                      </label>
                      <input
                        id="zip"
                        name="zip"
                        type="text"
                        required
                        pattern="[0-9]{5}"
                        inputMode="numeric"
                        autoComplete="postal-code"
                        maxLength={5}
                        value={formData.zip}
                        onChange={(e) => updateField("zip", e.target.value.replace(/\D/g, ""))}
                        placeholder="92780"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>
                <p id="step1-hint" className="sr-only">
                  Choose a pest type and city, and enter a street address and 5-digit ZIP code to continue.
                </p>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    disabled={!canProceedStep1}
                    aria-describedby="step1-hint"
                    className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next: Date &amp; Time <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date + Time */}
            {currentStep === 2 && (
              <div>
                <h2 className="mb-2 text-2xl font-bold text-foreground">
                  Pick a Date &amp; Time
                </h2>
                <p className="mb-8 text-muted">
                  Choose your preferred inspection date and time window.
                </p>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Preferred Date *
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      aria-describedby="date-format"
                      min={minDate}
                      suppressHydrationWarning
                      value={formData.date}
                      onChange={(e) => updateField("date", e.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <span id="date-format" className="sr-only">Date format: year-month-day, today or later.</span>
                  </div>
                  <fieldset>
                    <legend className="mb-1.5 block text-sm font-medium text-foreground">
                      Preferred Time Window *
                    </legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {timeSlots.map((slot, i) => (
                        <label
                          key={slot}
                          htmlFor={`time-${i}`}
                          className={`cursor-pointer rounded-lg border px-4 py-3 text-center text-sm font-medium transition-all focus-within:ring-2 focus-within:ring-primary/20 ${
                            formData.time === slot
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-background text-foreground hover:border-primary/30"
                          }`}
                        >
                          <input
                            id={`time-${i}`}
                            type="radio"
                            name="time"
                            value={slot}
                            required
                            checked={formData.time === slot}
                            onChange={() => updateField("time", slot)}
                            className="sr-only"
                          />
                          {slot}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>
                <p id="step2-hint" className="sr-only">
                  Pick a preferred date and a time window to continue.
                </p>
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-surface-alt"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={!canProceedStep2}
                    aria-describedby="step2-hint"
                    className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next: Contact Info <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {currentStep === 3 && (
              <div>
                <h2 className="mb-2 text-2xl font-bold text-foreground">
                  Your Contact Information
                </h2>
                <p className="mb-8 text-muted">
                  How should we reach you to confirm your appointment?
                </p>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="John Smith"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contactEmail"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contactEmail"
                        name="email"
                        type="email"
                        required
                        maxLength={254}
                        autoComplete="email"
                        inputMode="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactPhone"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="contactPhone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={30}
                        autoComplete="tel"
                        inputMode="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="(714) 555-0123"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="notes"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Additional Notes (optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      maxLength={2000}
                      value={formData.notes}
                      onChange={(e) => updateField("notes", e.target.value)}
                      placeholder="Anything else we should know about your pest problem?"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                {status === "error" && (
                  <p role="alert" className="text-sm text-red-600">
                    Something went wrong sending your booking. Please call us at{" "}
                    <a href={SITE_CONFIG.phoneTel} className="font-semibold underline">{SITE_CONFIG.phone}</a>.
                  </p>
                )}
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-surface-alt"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={!canSubmit || status === "loading"}
                    className="flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-primary-dark transition-all hover:bg-accent-light hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Booking...</>
                    ) : (
                      <>Book My Free Inspection <CheckCircle className="h-5 w-5" aria-hidden="true" /></>
                    )}
                  </button>
                </div>
              </div>
            )}
            </form>}
          </div>

          {/* Phone CTA */}
          <div className="mt-8 text-center">
            <p className="mb-2 text-sm text-muted">
              Prefer to book by phone? Call us directly:
            </p>
            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex min-h-11 items-center gap-2 text-lg font-bold text-primary hover:text-primary-light"
            >
              <Phone className="h-5 w-5" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
