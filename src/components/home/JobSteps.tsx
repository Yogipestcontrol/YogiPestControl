import { CineVideo } from "@/components/home/CineVideo";

// A real sequence (it's the order a rodent job actually runs), so numbering is earned.
// Each step is backed by a line from a real Google review.
const STEPS = [
  {
    title: "Inspect",
    body: "Yobani walks the roofline, attic, crawlspace and garage, and shows you where they're getting in. The inspection is free.",
    quote: "He was very thorough with his inspection and identified all the areas where rats could get into my attic.",
    who: "Karla G.",
  },
  {
    title: "Seal",
    body: "Gaps, vents and roof returns get closed with exclusion materials so new animals can't replace the ones we remove.",
    quote: "He sealed up all the holes to prevent them from getting back in.",
    who: "Karla G.",
  },
  {
    title: "Trap and treat",
    body: "Traps go where the activity is, set out of reach of kids and pets. Insects get a targeted treatment, not a blanket spray.",
    quote: "Yogi came in and did an evaluation and set up traps and glue boards.",
    who: "Michael N.",
  },
  {
    title: "Come back until it's done",
    body: "Follow-up visits to clear traps and confirm it's over. Recurring service if your property needs it.",
    quote: "He came several times to complete this routine. We killed 16 rats in all and the problem is gone!",
    who: "Michael N.",
  },
];

export function JobSteps() {
  return (
    <section className="relative bg-[#0B1A14] pb-28 pt-20 text-white sm:pb-36 sm:pt-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-[family-name:var(--font-condensed)] text-[clamp(2.25rem,5vw,4rem)] font-extrabold uppercase leading-[0.95] [font-stretch:75%]">
            How a rodent job actually goes
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/70">
            Trapping alone doesn&apos;t fix a rat problem. Closing the way in does. Here&apos;s the order we work in,
            in our customers&apos; words.
          </p>
          <div className="cine-grain relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#10201A] lg:aspect-[4/5] lg:max-w-sm">
            <CineVideo
              src="/cine/attic-flashlight.mp4"
              poster="/cine/attic-flashlight-poster.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <ol className="space-y-10">
          {STEPS.map((step, i) => (
            <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-x-5">
              <span
                aria-hidden
                className="font-[family-name:var(--font-condensed)] text-5xl font-extrabold leading-none text-[#D4A843] [font-stretch:70%]"
              >
                {i + 1}
              </span>
              <div className="border-b border-white/10 pb-10">
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 text-white/75">{step.body}</p>
                <figure className="mt-5 border-l-2 border-[#D4A843] pl-4">
                  <blockquote className="text-white/90">&ldquo;{step.quote}&rdquo;</blockquote>
                  <figcaption className="mt-1 text-sm text-white/55">{step.who}, Google review</figcaption>
                </figure>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
