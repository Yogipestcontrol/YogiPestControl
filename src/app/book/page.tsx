"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle, Phone, Loader2 } from "lucide-react";
import { SITE_CONFIG, SERVICES, OC_CITIES } from "@/lib/constants";
import { trackBookingFormSubmit, trackPhoneClick } from "@/lib/analytics";

const timeSlots = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
];

const steps = [
  { number: 1, label: "Service Details" },
  { number: 2, label: "Date & Time" },
  { number: 3, label: "Contact Info" },
];

export default function BookPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    pestType: "",
    city: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const updateField = (field: string, value: string) => {
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
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      trackBookingFormSubmit({ pestType: formData.pestType, city: formData.city });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const canProceedStep1 = formData.pestType && formData.city;
  const canProceedStep2 = formData.date && formData.time;
  const canSubmit = formData.name && formData.email && formData.phone;

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

          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
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
            ) : <>
            {/* Step 1: Pest Type + City */}
            {currentStep === 1 && (
              <div>
                <h2 className="mb-2 text-2xl font-bold text-foreground">
                  What pest do you need help with?
                </h2>
                <p className="mb-8 text-muted">
                  Select your pest type and city so we can match you with the right
                  technician.
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
                      value={formData.pestType}
                      onChange={(e) => updateField("pestType", e.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select a pest type</option>
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
                      value={formData.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select your city</option>
                      {OC_CITIES.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={nextStep}
                    disabled={!canProceedStep1}
                    className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next Step <ArrowRight className="h-5 w-5" />
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
                      type="date"
                      value={formData.date}
                      onChange={(e) => updateField("date", e.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Preferred Time Window *
                    </label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => updateField("time", slot)}
                          className={`rounded-lg border px-4 py-3 text-sm font-medium transition-all ${
                            formData.time === slot
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-background text-foreground hover:border-primary/30"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={prevStep}
                    className="flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-surface-alt"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!canProceedStep2}
                    className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next Step <ArrowRight className="h-5 w-5" />
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
                      type="text"
                      required
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
                        type="email"
                        required
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
                        type="tel"
                        required
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
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => updateField("notes", e.target.value)}
                      placeholder="Anything else we should know about your pest problem?"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-600">Something went wrong. Please try again or call us directly.</p>
                )}
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={prevStep}
                    className="flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-surface-alt"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canSubmit || status === "loading"}
                    className="flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-primary-dark transition-all hover:bg-accent-light hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="h-5 w-5 animate-spin" /> Booking...</>
                    ) : (
                      <>Book My Free Inspection <CheckCircle className="h-5 w-5" /></>
                    )}
                  </button>
                </div>
              </div>
            )}
            </>}
          </div>

          {/* Phone CTA */}
          <div className="mt-8 text-center">
            <p className="mb-2 text-sm text-muted">
              Prefer to book by phone? Call us directly:
            </p>
            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:text-primary-light"
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
