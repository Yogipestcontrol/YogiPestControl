import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Star, Bug, Shield, CheckCircle } from "lucide-react";
import { AnimateIn, CountUp, StaggerGrid, StaggerItem } from "@/components/animations";
import { CTABanner } from "@/components/CTABanner";
import { SITE_CONFIG, SERVICES, OC_CITIES } from "@/lib/constants";
import { heroImages } from "@/lib/images";
import { servicePestImages } from "@/lib/pest-images";

const highPriorityCities = OC_CITIES.filter((c) => c.priority === "high");
const featuredServices = SERVICES.slice(0, 3);
const remainingServices = SERVICES.slice(3);

const reviews = [
  {
    text: "Yogi's team responded the same day and completely eliminated our ant problem. Professional, friendly, and the price was very fair. Highly recommend to anyone in Orange County!",
    name: "Sarah M.",
    city: "Irvine",
  },
  {
    text: "We had a serious rodent issue in our attic. They sealed every entry point and cleaned everything out. Haven't seen a single mouse since.",
    name: "David R.",
    city: "Anaheim",
  },
  {
    text: "Fast, effective, and they actually care about doing the job right. Our go-to pest control company now.",
    name: "Jennifer L.",
    city: "Huntington Beach",
  },
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO — Full Viewport ═══ */}
      <section className="relative min-h-[90vh] overflow-hidden bg-primary">
        <Image
          src={heroImages.homepage}
          alt="Yogi's Pest Control serving Orange County"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-primary/50 to-primary/90" />

        <div className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pb-28 pt-16 text-center">
          <AnimateIn delay={0.1} direction="none">
            <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-accent">
              Orange County&apos;s Trusted Pest Experts
            </span>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <h1 className="max-w-5xl font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Pest-Free Living
              <br className="hidden sm:block" />
              <span className="text-accent">Starts Here</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.5}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Professional pest control for homes and businesses across all of
              Orange County. Safe, effective, eco-friendly — with same-day service.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.7}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-bold text-primary-dark shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_8px_25px_rgba(212,168,67,0.4)]"
              >
                Book Free Inspection
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </AnimateIn>
        </div>

        {/* Trust strip */}
        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-black/30 backdrop-blur-lg">
          <div className="mx-auto grid max-w-4xl grid-cols-3 px-4 py-6">
            <div className="flex flex-col items-center gap-1 border-r border-white/10">
              <CountUp target={500} suffix="+" className="text-3xl font-extrabold text-accent sm:text-4xl" />
              <p className="text-xs font-medium text-white/60 sm:text-sm">Homes Protected</p>
            </div>
            <div className="flex flex-col items-center gap-1 border-r border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="text-3xl font-extrabold text-accent sm:text-4xl">4.9</span>
                <Star className="h-5 w-5 fill-accent text-accent sm:h-6 sm:w-6" />
              </div>
              <p className="text-xs font-medium text-white/60 sm:text-sm">Star Rating</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-extrabold text-accent sm:text-4xl">24/7</span>
              <p className="text-xs font-medium text-white/60 sm:text-sm">Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF ═══ */}
      <section className="border-b border-border bg-surface py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { target: 500, suffix: "+", label: "Homes Protected" },
              { label: "Star Rating", custom: "4.9" },
              { target: 14, label: "Services" },
              { target: 34, label: "Cities Served" },
              { target: 100, suffix: "%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                {stat.custom ? (
                  <span className="text-3xl font-extrabold text-accent sm:text-4xl">{stat.custom}</span>
                ) : (
                  <CountUp target={stat.target!} suffix={stat.suffix || ""} className="text-3xl font-extrabold text-accent sm:text-4xl" />
                )}
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="relative overflow-hidden bg-primary-dark py-20 sm:py-28 lg:py-36">
        <Image
          src={heroImages.about}
          alt=""
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-dark/80 to-primary/70" />
        <div className="relative mx-auto max-w-7xl px-4">
          <AnimateIn>
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent">The Process</span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Three Steps to a Pest-Free Home
            </h2>
          </AnimateIn>

          <StaggerGrid className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { step: "01", icon: Phone, title: "Call or Book Online", desc: "Schedule your free inspection at a time that works for you. Same-day appointments available." },
              { step: "02", icon: Bug, title: "Expert Inspection", desc: "Our licensed technicians inspect your property, identify the problem, and create a custom treatment plan." },
              { step: "03", icon: Shield, title: "Pest-Free Guarantee", desc: "We treat your home with eco-friendly products and back it with our 100% satisfaction guarantee." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <StaggerItem key={step}>
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-extrabold text-accent/25">{step}</span>
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ═══ SERVICES SHOWCASE ═══ */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <AnimateIn>
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent">Our Services</span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Comprehensive Pest Solutions
            </h2>
          </AnimateIn>

          {/* Featured — large horizontal cards */}
          <div className="mt-12 flex flex-col gap-8">
            {featuredServices.map((service, i) => (
              <AnimateIn key={service.slug} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:h-80 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="relative h-64 w-full overflow-hidden md:h-auto md:w-[55%]">
                    <Image
                      src={servicePestImages[service.slug] || "/images/pests/rat.jpg"}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
                    <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent">Featured Service</span>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground transition-colors group-hover:text-primary md:text-3xl">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">{service.shortDesc}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Learn More <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          {/* Remaining — compact grid */}
          <StaggerGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {remainingServices.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={servicePestImages[service.slug] || "/images/pests/rat.jpg"}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <h3 className="absolute bottom-4 left-5 right-5 text-base font-bold text-white">{service.name}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted">{service.shortDesc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Learn More <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <AnimateIn className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-lg"
            >
              View All Services <ArrowRight className="h-5 w-5" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ═══ IMPACT STATS (dark section) ═══ */}
      <section className="relative overflow-hidden bg-primary-dark py-20 sm:py-24">
        <Image src={heroImages.services} alt="" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-primary-dark/70" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { target: 500, suffix: "+", label: "Homes Protected" },
              { label: "Average Rating", custom: "4.9/5" },
              { label: "Availability", custom: "24/7" },
              { target: 100, suffix: "%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <AnimateIn key={stat.label} className="text-center">
                {stat.custom ? (
                  <span className="text-4xl font-extrabold text-accent sm:text-5xl">{stat.custom}</span>
                ) : (
                  <CountUp target={stat.target!} suffix={stat.suffix} className="text-4xl font-extrabold text-accent sm:text-5xl" />
                )}
                <p className="mt-2 text-sm font-medium text-white/70">{stat.label}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <AnimateIn>
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent">What Clients Say</span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Trusted by Orange County Homeowners
            </h2>
          </AnimateIn>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <AnimateIn direction="left" className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
                <span className="font-serif text-[100px] leading-[0.8] text-primary/10">&ldquo;</span>
                <p className="mt-[-20px] text-xl leading-relaxed text-foreground sm:text-2xl">{reviews[0].text}</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {reviews[0].name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{reviews[0].name}</p>
                    <p className="text-sm text-muted">{reviews[0].city}, CA</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>

            <div className="flex flex-col gap-6 lg:col-span-5">
              {reviews.slice(1).map((review, i) => (
                <AnimateIn key={review.name} direction="right" delay={i * 0.15}>
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <div className="mb-3 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-foreground">{review.text}</p>
                    <p className="mt-4 text-sm font-semibold text-muted">{review.name} — {review.city}, CA</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          <AnimateIn className="mt-10 text-center">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary-light">
              Read All Reviews <ArrowRight className="h-5 w-5" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ═══ AREAS WE SERVE ═══ */}
      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <AnimateIn>
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent">Service Areas</span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Proudly Serving Orange County
            </h2>
          </AnimateIn>
          <div className="mt-8 flex flex-wrap gap-3">
            {highPriorityCities.map((city) => (
              <Link
                key={city.slug}
                href={`/areas-we-serve/${city.slug}`}
                className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/areas-we-serve" className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary-light">
              View All 34 Cities <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ PEST QUIZ CTA ═══ */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface">
            <div className="grid items-center lg:grid-cols-2">
              {/* Image side */}
              <div className="relative h-64 lg:h-full lg:min-h-[400px]">
                <Image
                  src={heroImages.quiz || heroImages.homepage}
                  alt="Identify your pest"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:bg-gradient-to-l" />
              </div>
              {/* Text side */}
              <div className="p-8 sm:p-12 lg:p-16">
                <AnimateIn>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent">Interactive Tool</span>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Not Sure What Pest You Have?
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                    Take our quick 3-question quiz to identify your pest and get personalized treatment recommendations.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/pest-quiz"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-xl"
                    >
                      Take the Pest Quiz <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link
                      href="/pests"
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-border px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                    >
                      Browse Pest Library
                    </Link>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GEO: ABOUT SNIPPET ═══ */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateIn direction="left">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent">About Yogi&apos;s Pest Control</span>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Orange County&apos;s Local Pest Control Experts
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Yogi&apos;s Pest Control is a licensed and insured pest control company serving all 34 cities in Orange County, California. We specialize in residential and commercial pest management using Integrated Pest Management (IPM) techniques and eco-friendly, EPA-approved products that are safe for families and pets.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Our licensed technicians handle over 14 types of pest problems including rodents, cockroaches, ants, bed bugs, spiders, mosquitoes, wasps, bees, wildlife, and more. We offer same-day service, free inspections, and a 100% satisfaction guarantee on every job.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  "Licensed & Insured in CA",
                  "EPA-Approved Products",
                  "Same-Day Service Available",
                  "Free Inspections",
                  "100% Satisfaction Guarantee",
                  "Eco-Friendly Treatments",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary-light"
                >
                  Learn More About Us <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn direction="right">
              <div className="relative h-96 overflow-hidden rounded-2xl">
                <Image
                  src={heroImages.team}
                  alt="Yogi's Pest Control team serving Orange County"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══ GEO: HOMEPAGE FAQ ═══ */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <AnimateIn>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent">Common Questions</span>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimateIn>
          <div className="mt-12 space-y-6">
            {[
              {
                q: "How much does pest control cost in Orange County?",
                a: "Pest control in Orange County typically costs between $150 and $300 for a one-time treatment, depending on the type of pest and size of the property. Quarterly maintenance plans range from $100 to $200 per visit. Yogi's Pest Control offers free inspections so you get an accurate quote before any work begins.",
              },
              {
                q: "Does Yogi's Pest Control offer same-day service?",
                a: "Yes, Yogi's Pest Control offers same-day and emergency pest control service across all 34 cities in Orange County. We're available 7 days a week from 8 AM to 8 PM. For urgent infestations like rodents, bed bugs, or wasps, call (714) 323-8262 for immediate assistance.",
              },
              {
                q: "Are your pest control treatments safe for kids and pets?",
                a: "Yes. We use EPA-approved, eco-friendly products and Integrated Pest Management (IPM) techniques that minimize chemical exposure. Our treatments are safe for children, pets, and the environment. Our licensed technicians follow all California Department of Pesticide Regulation guidelines.",
              },
              {
                q: "What areas does Yogi's Pest Control serve?",
                a: "Yogi's Pest Control serves all 34 cities in Orange County, California, including Anaheim, Irvine, Huntington Beach, Santa Ana, Costa Mesa, Fullerton, Orange, Newport Beach, Mission Viejo, Lake Forest, Yorba Linda, and more. We provide residential and commercial pest control throughout the entire county.",
              },
              {
                q: "What types of pests do you handle?",
                a: "We handle all common Orange County pests including rats, mice, cockroaches, ants (Argentine ants, fire ants), bed bugs, spiders (black widows, brown recluses), wasps, bees, mosquitoes, flies, fleas, ticks, raccoons, opossums, squirrels, and more. We offer 14+ specialized pest control services.",
              },
              {
                q: "Do you offer a guarantee on your pest control services?",
                a: "Yes. Yogi's Pest Control offers a 100% satisfaction guarantee. If pests return between scheduled treatments, we'll come back and re-treat your property at no additional cost. We stand behind every job we do.",
              },
            ].map(({ q, a }, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-surface p-6">
                  <h3 className="text-base font-bold text-foreground">{q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn className="mt-10 text-center">
            <Link href="/faq" className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary-light">
              View All FAQs <ArrowRight className="h-5 w-5" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <CTABanner />

      {/* GEO: Homepage FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does pest control cost in Orange County?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pest control in Orange County typically costs between $150 and $300 for a one-time treatment, depending on the type of pest and size of the property. Quarterly maintenance plans range from $100 to $200 per visit. Yogi's Pest Control offers free inspections so you get an accurate quote before any work begins.",
                },
              },
              {
                "@type": "Question",
                name: "Does Yogi's Pest Control offer same-day service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Yogi's Pest Control offers same-day and emergency pest control service across all 34 cities in Orange County. We're available 7 days a week from 8 AM to 8 PM.",
                },
              },
              {
                "@type": "Question",
                name: "Are your pest control treatments safe for kids and pets?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We use EPA-approved, eco-friendly products and Integrated Pest Management (IPM) techniques that minimize chemical exposure. Our treatments are safe for children, pets, and the environment.",
                },
              },
              {
                "@type": "Question",
                name: "What areas does Yogi's Pest Control serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yogi's Pest Control serves all 34 cities in Orange County, California, including Anaheim, Irvine, Huntington Beach, Santa Ana, Costa Mesa, Fullerton, Orange, Newport Beach, Mission Viejo, Lake Forest, Yorba Linda, and more.",
                },
              },
              {
                "@type": "Question",
                name: "What types of pests do you handle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We handle all common Orange County pests including rats, mice, cockroaches, ants, bed bugs, spiders, wasps, bees, mosquitoes, flies, fleas, ticks, raccoons, opossums, squirrels, and more. We offer 14+ specialized pest control services.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer a guarantee on your pest control services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Yogi's Pest Control offers a 100% satisfaction guarantee. If pests return between scheduled treatments, we'll come back and re-treat your property at no additional cost.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
