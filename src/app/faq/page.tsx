import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { SITE_CONFIG } from "@/lib/constants";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Yogi's Pest Control",
  description:
    "Get answers to common pest control questions. Learn about our services, pricing, process, and more. Serving Orange County, CA. Call 714-323-8262.",
};

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    category: "General",
    faqs: [
      {
        question: "What areas do you serve?",
        answer:
          "We serve all 34 cities across Orange County, CA, including Anaheim, Irvine, Huntington Beach, Santa Ana, Costa Mesa, Fullerton, Orange, Garden Grove, Mission Viejo, Newport Beach, and more.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes, Yogi's Pest Control is fully licensed by the State of California and carries comprehensive liability insurance. All of our technicians are trained and certified pest management professionals.",
      },
      {
        question: "Do you offer emergency pest control services?",
        answer:
          "Yes, we offer same-day and emergency services for urgent pest situations. Call us at 714-323-8262 and we will dispatch a technician as quickly as possible.",
      },
      {
        question: "Are your treatments safe for kids and pets?",
        answer:
          "Absolutely. We use EPA-approved, eco-friendly products that are safe for your family and pets. Our technicians will provide specific safety instructions for each treatment.",
      },
    ],
  },
  {
    category: "Services",
    faqs: [
      {
        question: "What types of pests do you handle?",
        answer:
          "We handle all common Southern California pests including rodents (rats and mice), cockroaches, ants, wasps, bees, mosquitoes, flies, spiders, ticks, fleas, bed bugs, and wildlife. We also offer exclusion repairs and attic cleanouts.",
      },
      {
        question: "Do you offer one-time treatments or recurring plans?",
        answer:
          "We offer both. Some pest problems can be resolved with a single treatment, while others benefit from ongoing maintenance. We will recommend the best approach during your free inspection.",
      },
      {
        question: "What is integrated pest management (IPM)?",
        answer:
          "IPM is a comprehensive approach that combines prevention, monitoring, and targeted treatments to manage pests effectively while minimizing chemical use. It focuses on long-term solutions rather than just treating symptoms.",
      },
      {
        question: "Do you handle commercial pest control?",
        answer:
          "Yes, we provide commercial pest control services for restaurants, offices, warehouses, retail stores, and other businesses throughout Orange County.",
      },
      {
        question: "Can you remove bee hives without killing the bees?",
        answer:
          "Yes, we specialize in humane bee relocation. Whenever possible, we safely remove and relocate bee colonies to preserve these important pollinators.",
      },
    ],
  },
  {
    category: "Pricing",
    faqs: [
      {
        question: "How much does pest control cost?",
        answer:
          "Pricing depends on the type of pest, severity of the infestation, property size, and treatment method. General treatments typically start around $150-$250 for a one-time visit. We provide free inspections and quotes so you know the exact cost upfront.",
      },
      {
        question: "Do you offer free inspections?",
        answer:
          "Yes, we offer completely free pest inspections with no obligation. Our technician will assess your property, identify the pest problem, and provide a detailed quote before any work begins.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "Never. We believe in transparent pricing. The quote you receive during your inspection is the price you pay. There are no surprise charges or hidden fees.",
      },
      {
        question: "Do you offer any guarantees?",
        answer:
          "Yes, we back all of our work with a 100% satisfaction guarantee. If pests return between scheduled treatments, we will come back and re-treat at no additional cost.",
      },
    ],
  },
  {
    category: "Process",
    faqs: [
      {
        question: "What happens during a pest inspection?",
        answer:
          "During a free inspection, our licensed technician will thoroughly examine your property inside and out, identify pest entry points and nesting areas, determine the type and severity of the infestation, and provide a customized treatment plan with pricing.",
      },
      {
        question: "How long does a typical treatment take?",
        answer:
          "Most residential treatments take 30 to 60 minutes, depending on the size of your property and the type of pest. Larger infestations or specialty services like attic cleanouts may take longer.",
      },
      {
        question: "Do I need to leave my home during treatment?",
        answer:
          "For most treatments, you do not need to leave. However, for certain services like fumigation or heavy-duty spraying, we may recommend vacating the property for a few hours. Your technician will advise you before treatment begins.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "Many treatments show noticeable results within 24 to 48 hours. Some pest issues may take a week or two for full resolution. Your technician will set clear expectations during your appointment.",
      },
      {
        question: "How do I prepare my home for pest treatment?",
        answer:
          "Preparation varies by treatment type. Generally, we recommend clearing clutter from treatment areas, storing food in sealed containers, and keeping pets away from treated areas. We will provide specific instructions when you book your appointment.",
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((c) => c.faqs);

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary section-divider">
        <Image
          src={heroImages.faq}
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/65 to-primary/50" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 text-center sm:pb-32 sm:pt-20">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Everything you need to know about our pest control services in Orange
            County. Can&apos;t find your answer? Call us at{" "}
            <a href={SITE_CONFIG.phoneTel} className="text-accent hover:text-accent-light">
              {SITE_CONFIG.phone}
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-4">
          {faqCategories.map(({ category, faqs }) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="mb-6 text-2xl font-bold text-foreground">{category}</h2>
              <div className="space-y-4">
                {faqs.map(({ question, answer }) => (
                  <details
                    key={question}
                    className="group rounded-xl border border-border bg-surface transition-shadow hover:shadow-md"
                  >
                    <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                      {question}
                      <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-5 text-sm leading-relaxed text-muted">
                      {answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Still Have Questions?
          </h2>
          <p className="mb-8 text-lg text-muted">
            Our team is happy to answer any questions you have about pest control
            in Orange County. Reach out anytime.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg"
            >
              Contact Us <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
