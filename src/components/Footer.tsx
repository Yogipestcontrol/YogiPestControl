import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG, SERVICES, OC_CITIES } from "@/lib/constants";

const highPriorityCities = OC_CITIES.filter((c) => c.priority === "high");

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Yogi&apos;s<span className="text-accent"> Pest Control</span>
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Comprehensive pest management solutions for homes and businesses throughout Orange County, CA.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href={SITE_CONFIG.phoneTel} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Phone className="h-4 w-4 shrink-0" />
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Mail className="h-4 w-4 shrink-0" />
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="h-4 w-4 shrink-0" />
                Orange County, CA
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="h-4 w-4 shrink-0" />
                {SITE_CONFIG.hours}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Services</h4>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Service Areas</h4>
            <ul className="flex flex-col gap-2">
              {highPriorityCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/areas-we-serve/${city.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas-we-serve"
                  className="text-sm font-medium text-accent transition-colors hover:text-accent-light"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/about" className="text-sm text-white/70 transition-colors hover:text-white">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-white/70 transition-colors hover:text-white">Blog</Link></li>
              <li><Link href="/pests" className="text-sm text-white/70 transition-colors hover:text-white">Pest Library</Link></li>
              <li><Link href="/pest-control-cost" className="text-sm text-white/70 transition-colors hover:text-white">Pricing Guide</Link></li>
              <li><Link href="/pest-quiz" className="text-sm text-white/70 transition-colors hover:text-white">Pest Identifier Quiz</Link></li>
              <li><Link href="/faq" className="text-sm text-white/70 transition-colors hover:text-white">FAQ</Link></li>
              <li><Link href="/reviews" className="text-sm text-white/70 transition-colors hover:text-white">Reviews</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 transition-colors hover:text-white">Contact</Link></li>
              <li><Link href="/book" className="text-sm font-medium text-accent transition-colors hover:text-accent-light">Book Free Inspection →</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/sitemap.xml" className="hover:text-white/70">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
