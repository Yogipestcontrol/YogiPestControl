"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "./animations/AnimateIn";
import { heroImages } from "@/lib/images";

interface Breadcrumb {
  label: string;
  href?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
  children?: React.ReactNode;
}) {
  const bgImage = backgroundImage || heroImages.homepage;

  return (
    <section className="relative overflow-hidden bg-primary">
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover opacity-30"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary" />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 sm:pb-28 sm:pt-32">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 text-sm text-white/50">
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-white/70">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <AnimateIn delay={0.1}>
          <h1 className="heading-section max-w-3xl text-white">
            {title}
          </h1>
        </AnimateIn>
        {subtitle && (
          <AnimateIn delay={0.3}>
            <p className="mt-4 max-w-2xl text-lg text-white/70">{subtitle}</p>
          </AnimateIn>
        )}
        {children && (
          <AnimateIn delay={0.5}>
            <div className="mt-8">{children}</div>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
