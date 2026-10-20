import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CineVideo } from "@/components/home/CineVideo";

// Symptom-first: people search for what they hear and see, not for "rodent control".
type Threat = {
  symptom: string;
  culprit: string;
  detail: string;
  href: string;
  linkLabel: string;
  image: string;
  video?: { src: string; poster: string; loop: boolean };
};

const THREATS: Threat[] = [
  {
    symptom: "Scratching overhead after dark",
    culprit: "Roof rats in the attic",
    detail: "They run palm fronds, ivy and power lines to the roof, then slip through gaps the size of a quarter.",
    href: "/services/rodent-control",
    linkLabel: "Rodent control",
    image: "/cine/deck-roof-rats-poster.jpg",
    video: { src: "/cine/deck-roof-rats.mp4", poster: "/cine/deck-roof-rats-poster.jpg", loop: false },
  },
  {
    symptom: "A trail across the counter after it rains",
    culprit: "Argentine ants",
    detail: "One colony can run under a whole block. Spraying the trail scatters them; baiting takes the colony out.",
    href: "/services/ant-control",
    linkLabel: "Ant control",
    image: "/cine/deck-ants.jpg",
  },
  {
    symptom: "Bites at your ankles in broad daylight",
    culprit: "Invasive Aedes mosquitoes",
    detail: "They breed in a bottle cap of water: saucers, drains, toys. Night spraying alone misses them.",
    href: "/services/mosquito-control",
    linkLabel: "Mosquito control",
    image: "/cine/deck-mosquitoes.jpg",
  },
  {
    symptom: "A buzzing cluster on the eave",
    culprit: "A honey bee swarm or new hive",
    detail: "Keep your distance. A swarm can move on in a day; bees inside a wall need the comb removed and the gap sealed.",
    href: "/services/bee-removal",
    linkLabel: "Bee removal",
    image: "/cine/deck-bees-poster.jpg",
    video: { src: "/cine/deck-bees.mp4", poster: "/cine/deck-bees-poster.jpg", loop: true },
  },
  {
    symptom: "A smell under the floor that won't quit",
    culprit: "Skunks, opossums or a dead animal",
    detail: "We find the source in the crawlspace, remove the animal, and close the way in.",
    href: "/services/wildlife-trapping",
    linkLabel: "Wildlife trapping",
    image: "/cine/deck-wildlife.jpg",
  },
  {
    symptom: "Tiny dark spots on the mattress seam",
    culprit: "Bed bugs",
    detail: "Common in apartments and after travel. Early treatment is faster and cheaper.",
    href: "/services/bed-bug-treatment",
    linkLabel: "Bed bug treatment",
    image: "/cine/deck-bed-bugs.jpg",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export function ThreatDeck() {
  const total = pad(THREATS.length);
  return (
    <section aria-labelledby="threat-deck-heading" className="relative bg-[#0B1A14] text-white">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28">
        <h2
          id="threat-deck-heading"
          className="font-[family-name:var(--font-condensed)] text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase leading-[0.95] [font-stretch:75%]"
        >
          What are you hearing?
        </h2>
        <p className="mt-4 max-w-xl text-lg text-white/70">
          Start with what you&apos;re noticing. Here&apos;s what it usually turns out to be in Orange County homes.
        </p>
      </div>

      <ol className="m-0 list-none p-0">
        {THREATS.map((t, i) => (
          <li key={t.symptom} className="cine-deck-card sticky top-0 h-svh">
            <div
              className={`cine-deck-inner cine-grain relative h-full overflow-hidden bg-[#0B1A14] ${
                i > 0 ? "rounded-t-[2rem] shadow-[0_-24px_48px_-24px_rgb(0_0_0_/_0.6)]" : ""
              }`}
            >
              {t.video ? (
                <CineVideo
                  src={t.video.src}
                  poster={t.video.poster}
                  loop={t.video.loop}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Image src={t.image} alt="" fill sizes="100vw" className="object-cover" />
              )}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#0B1A14] via-[#0B1A14]/70 to-[#0B1A14]/10 sm:bg-gradient-to-r sm:from-[#0B1A14]/95 sm:via-[#0B1A14]/60 sm:to-transparent"
              />
              <div className="cine-vignette absolute inset-0" aria-hidden />

              <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-14 sm:justify-center sm:px-8 sm:pb-0">
                <div className="max-w-2xl">
                  <p className="font-[family-name:var(--font-condensed)] text-lg font-bold tracking-[0.2em] text-[#D4A843] [font-stretch:75%]">
                    {pad(i + 1)} / {total}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-condensed)] text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.9] [font-stretch:75%] [overflow-wrap:anywhere]">
                    {t.symptom}
                  </h3>
                  <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
                    <span className="font-semibold text-[#D4A843]">{t.culprit}.</span> {t.detail}
                  </p>
                  <Link
                    href={t.href}
                    className="group mt-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-sm transition hover:border-[#D4A843] hover:text-[#D4A843] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A843]"
                  >
                    {t.linkLabel}
                    <ArrowUpRight
                      aria-hidden
                      className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
