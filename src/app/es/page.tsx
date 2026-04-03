import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Control de Plagas en Orange County, CA | Yogi's Pest Control",
  description:
    "Servicios profesionales de control de plagas en Orange County, CA. Ratas, hormigas, cucarachas, chinches, vida silvestre y más. Servicio el mismo día. Llame al 714-323-8262.",
  alternates: {
    languages: {
      en: "/",
      es: "/es",
    },
  },
};

const services = [
  { name: "Control de Roedores", desc: "Ratas, ratones y eliminación de roedores", slug: "rodent-control" },
  { name: "Control de Cucarachas", desc: "Eliminación completa de cucarachas", slug: "cockroach-control" },
  { name: "Control de Hormigas", desc: "Tratamiento de todas las especies de hormigas", slug: "ant-control" },
  { name: "Control de Avispas", desc: "Remoción segura de nidos de avispas", slug: "wasp-control" },
  { name: "Remoción de Abejas", desc: "Reubicación humanitaria de abejas", slug: "bee-removal" },
  { name: "Control de Mosquitos", desc: "Tratamiento de jardín y exteriores", slug: "mosquito-control" },
  { name: "Control de Arañas", desc: "Arañas comunes y venenosas", slug: "spider-control" },
  { name: "Chinches de Cama", desc: "Tratamiento de chinches de cama", slug: "bed-bug-treatment" },
  { name: "Trampeo de Vida Silvestre", desc: "Mapaches, zarigüeyas, ardillas", slug: "wildlife-trapping" },
  { name: "Limpieza de Ático", desc: "Limpieza y desinfección de áticos", slug: "attic-cleanout" },
];

export default function SpanishPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary section-divider">
        <Image
          src={heroImages.homepage}
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/65 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 text-center sm:pb-32 sm:pt-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
            <Shield className="h-4 w-4" />
            Licenciado y Asegurado
          </div>
          <h1 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Control de Plagas Profesional
            <span className="block text-accent">en Orange County</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
            Eliminamos plagas de forma segura y efectiva. Servicio el mismo día disponible
            en las 34 ciudades de Orange County. Inspección gratuita.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={SITE_CONFIG.phoneTel}
              className="flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-primary-dark transition-all hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Llame Ahora: {SITE_CONFIG.phone}
            </a>
            <Link
              href="/book"
              className="flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Inspección Gratuita <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              ¿Por Qué Elegir Yogi&apos;s Pest Control?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted">
              Somos el equipo de control de plagas de confianza en Orange County.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Clock, title: "Servicio el Mismo Día", desc: "Respondemos rápidamente a emergencias de plagas. Disponible 7 días a la semana." },
              { icon: Shield, title: "Licenciado y Asegurado", desc: "Técnicos certificados con productos seguros y ecológicos." },
              { icon: CheckCircle, title: "Satisfacción Garantizada", desc: "Si las plagas regresan, nosotros también. Sin costo adicional." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-surface p-8 text-center transition-shadow hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
                <p className="text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted">
              Ofrecemos soluciones completas para todo tipo de plagas.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-start gap-4 rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div>
                  <h3 className="mb-1 font-bold text-foreground group-hover:text-primary">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted">{service.desc}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            ¿Tiene un Problema de Plagas?
          </h2>
          <p className="mb-8 text-lg text-white/70">
            Llámenos hoy para una inspección gratuita. Hablamos español.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={SITE_CONFIG.phoneTel}
              className="flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-primary-dark transition-all hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-lg"
            >
              <Phone className="h-5 w-5" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Contáctenos <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PestControlService",
            name: "Yogi's Pest Control",
            url: "https://yogispestcontrol.com/es",
            telephone: "+1-714-323-8262",
            description:
              "Servicios profesionales de control de plagas en Orange County, CA. Servicio el mismo día. Licenciado y asegurado.",
            areaServed: {
              "@type": "County",
              name: "Orange County, California",
            },
            availableLanguage: ["English", "Spanish"],
          }),
        }}
      />
    </>
  );
}
