import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us | Yogi's Pest Control Orange County",
  description:
    "Get in touch with Yogi's Pest Control. Call 714-323-8262, email us, or fill out our contact form for a free pest control quote in Orange County, CA.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: SITE_CONFIG.phoneTel,
    detail: "Same-day response available",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    detail: "We reply within 2 hours",
  },
  {
    icon: Clock,
    label: "Hours",
    value: SITE_CONFIG.hours,
    href: null,
    detail: "Including weekends & holidays",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Orange County, CA",
    href: "/areas-we-serve",
    detail: "All 34 cities served",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary section-divider">
        <Image
          src={heroImages.contact}
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/65 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 text-center sm:pb-32 sm:pt-20">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Have a pest problem? Get in touch and we&apos;ll get back to you fast.
            Free quotes and same-day service available.
          </p>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="mb-2 text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mb-8 text-muted">
                Fill out the form below and we&apos;ll get back to you within 30
                minutes during business hours.
              </p>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
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
                      placeholder="John Smith"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="(714) 555-0123"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="pest"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Pest Type
                    </label>
                    <select
                      id="pest"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us about your pest problem, property type, and preferred service time..."
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">
                Contact Information
              </h2>
              {contactInfo.map(({ icon: Icon, label, value, href, detail }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    {label}
                  </h3>
                  {href ? (
                    <a
                      href={href}
                      className="text-base font-medium text-primary hover:text-primary-light"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-base font-medium text-foreground">{value}</p>
                  )}
                  <p className="mt-1 text-xs text-muted">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
              Our Service Area
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted">
              We serve all of Orange County, CA. Here&apos;s where you can find us.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Yogi's Pest Control Service Area — Orange County, CA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213747.3732025991!2d-118.0019!3d33.7175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc925c54d5f7cf%3A0xdea6c3618ff0d607!2sOrange%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
