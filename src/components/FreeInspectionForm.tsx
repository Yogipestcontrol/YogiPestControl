"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { trackContactFormSubmit } from "@/lib/analytics";
import { useFormGuard } from "@/components/FormGuard";

const inputClass =
  "rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export function FreeInspectionForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { guard, honeypot } = useFormGuard();

  const updateField = (field: keyof typeof formData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, ...guard, source: "free-inspection" }),
      });
      if (!res.ok) throw new Error("Failed");
      trackContactFormSubmit(formData.service || "free-inspection");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-6 text-center">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-600" />
        <h3 className="mb-2 text-xl font-bold text-foreground">Request received!</h3>
        <p className="text-sm text-muted">
          We&apos;ll call you shortly to confirm your inspection. Need us sooner? Call{" "}
          <a href={SITE_CONFIG.phoneTel} className="font-semibold text-primary">
            {SITE_CONFIG.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
      {honeypot}
      <input
        type="text"
        name="name"
        aria-label="Full name"
        placeholder="Full Name *"
        required
        autoComplete="name"
        value={formData.name}
        onChange={(e) => updateField("name", e.target.value)}
        className={inputClass}
      />
      <input
        type="tel"
        name="phone"
        aria-label="Phone number"
        placeholder="Phone Number *"
        required
        autoComplete="tel"
        value={formData.phone}
        onChange={(e) => updateField("phone", e.target.value)}
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        aria-label="Email address"
        placeholder="Email Address"
        autoComplete="email"
        value={formData.email}
        onChange={(e) => updateField("email", e.target.value)}
        className={inputClass}
      />
      <select
        name="service"
        aria-label="Pest type"
        value={formData.service}
        onChange={(e) => updateField("service", e.target.value)}
        className={inputClass}
      >
        <option value="">What pest are you dealing with?</option>
        {SERVICES.map((s) => (
          <option key={s.slug} value={s.slug}>
            {s.name}
          </option>
        ))}
        <option value="other">Other / Not Sure</option>
      </select>
      <textarea
        name="message"
        aria-label="Describe your pest problem"
        placeholder="Describe your pest problem (optional)"
        rows={3}
        value={formData.message}
        onChange={(e) => updateField("message", e.target.value)}
        className={inputClass}
      />
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please call us at{" "}
          <a href={SITE_CONFIG.phoneTel} className="font-semibold underline">
            {SITE_CONFIG.phone}
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-primary-dark transition-all hover:bg-accent-light hover:shadow-lg disabled:opacity-50"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending...
          </>
        ) : (
          "Get My Free Inspection"
        )}
      </button>
      <p className="text-center text-xs text-muted">No obligation. No credit card required. 100% free.</p>
    </form>
  );
}
