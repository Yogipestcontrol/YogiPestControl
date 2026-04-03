"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Moon, Sun, ChevronDown, ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/areas-we-serve", label: "Areas We Serve" },
  { href: "/pests", label: "Pest Library" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_ICONS: Record<string, string> = {
  rat: "\uD83D\uDC00",
  bug: "\uD83E\uDEB3",
  ant: "\uD83D\uDC1C",
  wasp: "\uD83D\uDC1D",
  bee: "\uD83D\uDC1D",
  mosquito: "\uD83E\uDD9F",
  fly: "\uD83E\uDEB0",
  spider: "\uD83D\uDD77\uFE0F",
  tick: "\uD83E\uDEB2",
  shield: "\uD83D\uDEE1\uFE0F",
  home: "\uD83C\uDFE0",
  bed: "\uD83D\uDECF\uFE0F",
  wildlife: "\uD83E\uDD9D",
  cleanup: "\u2697\uFE0F",
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isScrolled = scrollPosition > 50;

  const linkClass = "relative text-sm font-medium text-foreground transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className={`transition-all duration-300 ${
          "bg-surface/95 backdrop-blur-xl border-b border-border shadow-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-transparent.png"
              alt="Yogi's Pest Control"
              width={160}
              height={160}
              className="h-12 w-auto sm:h-14 object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.slice(0, 1).map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}

            {/* Services mega menu trigger */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 ${linkClass}`}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full z-50 mt-4 w-[700px] -translate-x-1/2 rounded-xl border border-border bg-surface p-6 shadow-2xl"
                  >
                    {/* Header row */}
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                        Our Services
                      </h3>
                      <Link
                        href="/services"
                        className="flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-accent"
                      >
                        View All
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="my-3 h-px bg-border" />

                    {/* 3-column grid */}
                    <div className="grid grid-cols-3 gap-1">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-alt"
                        >
                          <span className="mt-0.5 text-lg leading-none">
                            {SERVICE_ICONS[service.icon] || "\uD83D\uDC1B"}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-foreground group-hover:text-primary">
                              {service.name}
                            </p>
                            <p className="text-xs text-muted">
                              {service.shortDesc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Phone link - desktop only */}
            <a
              href={SITE_CONFIG.phoneTel}
              className="hidden items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary xl:flex"
            >
              <Phone className="h-3.5 w-3.5" />
              {SITE_CONFIG.phone}
            </a>

            {/* Divider */}
            <div className="hidden h-5 w-px bg-border xl:block" />

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-muted transition-colors hover:bg-surface-alt hover:text-foreground"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>

            {/* Language toggle */}
            <div className="hidden items-center gap-1 text-sm text-muted sm:flex">
              <span className="font-semibold text-foreground">EN</span>
              <span>|</span>
              <Link href="/es" className="transition-colors hover:text-primary">
                ES
              </Link>
            </div>

            {/* CTA button */}
            <Link
              href="/book"
              className="hidden rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-lg sm:block"
            >
              Book Free Inspection
            </Link>

            {/* Animated hamburger - mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                  "bg-foreground"
                } ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                  "bg-foreground"
                } ${mobileOpen ? "scale-x-0 opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                  "bg-foreground"
                } ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu - full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-primary-dark/95 backdrop-blur-md lg:hidden"
          >
            {/* Close button */}
            <div className="flex justify-end px-4 py-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="relative flex h-10 w-10 flex-col items-center justify-center"
                aria-label="Close menu"
              >
                <span className="block h-0.5 w-6 translate-y-0.5 rotate-45 rounded-full bg-white transition-all" />
                <span className="block h-0.5 w-6 -translate-y-0 -rotate-45 rounded-full bg-white transition-all" />
              </button>
            </div>

            {/* Mobile nav links */}
            <div className="flex flex-col items-center justify-center gap-2 px-8 pt-4">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                ...NAV_LINKS.slice(1),
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-center text-2xl font-semibold text-white transition-colors hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="my-4 h-px w-48 bg-white/20"
              />

              {/* Phone link */}
              <motion.a
                href={SITE_CONFIG.phoneTel}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="flex items-center gap-2 text-lg text-white/80 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5" />
                {SITE_CONFIG.phone}
              </motion.a>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.3 }}
                className="mt-4 w-full max-w-xs"
              >
                <Link
                  href="/book"
                  className="btn-primary block w-full py-4 text-center text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Free Inspection
                </Link>
              </motion.div>

              {/* Language toggle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="mt-4 flex items-center gap-2 text-sm text-white/50"
              >
                <span className="font-semibold text-white">EN</span>
                <span>|</span>
                <Link
                  href="/es"
                  className="hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  ES
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
