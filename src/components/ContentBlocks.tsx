import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { AnchorLink, ContentSection, FAQ, PriceRow } from "@/data/local-seo-types";

/** H2 sections from the Phase 2 content data. */
export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.heading} className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">{s.heading}</h2>
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {s.bullets && s.bullets.length > 0 && (
            <ul className="mt-4 space-y-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {s.link && (
            <Link
              href={s.link.href}
              className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light md:min-h-0"
            >
              {s.link.label} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </section>
      ))}
    </>
  );
}

export function PriceTable({
  rows,
  heading,
  note = "Typical ranges. Your exact price is confirmed after a free inspection.",
}: {
  rows: PriceRow[];
  heading: string;
  note?: string;
}) {
  if (rows.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-bold text-foreground">{heading}</h2>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-alt text-xs uppercase tracking-wide text-muted">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Service</th>
              <th scope="col" className="px-4 py-3 font-semibold">Typical cost</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-surface">
            {rows.map((r) => (
              <tr key={r.item}>
                <td className="px-4 py-3 align-top">
                  <div className="font-medium text-foreground">{r.item}</div>
                  {r.note && <div className="mt-0.5 text-xs text-muted">{r.note}</div>}
                </td>
                <td className="whitespace-nowrap px-4 py-3 align-top font-semibold text-primary">{r.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted">
        {note}{" "}
        <Link href="/pest-control-cost" className="font-medium text-primary hover:text-primary-light">
          Full pricing guide
        </Link>
      </p>
    </section>
  );
}

export function FAQList({ faqs, heading }: { faqs: FAQ[]; heading: string }) {
  if (faqs.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-foreground">{heading}</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-lg border border-border bg-surface">
            <summary className="cursor-pointer px-6 py-4 text-base font-semibold text-foreground">
              {faq.question}
            </summary>
            <div className="px-6 pb-4 text-sm leading-relaxed text-muted">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function LinkGrid({ links, heading }: { links: AnchorLink[]; heading: string }) {
  if (links.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-foreground">{heading}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((l) => (
          <Link
            key={l.href + l.anchor}
            href={l.href}
            className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:shadow-md"
          >
            <span className="first-letter:uppercase">{l.anchor}</span>
            <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function faqJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
