import Link from "next/link";
import { CITY_DATA } from "@/data/cities";

const W = 640;
const H = 560;
const PAD = 36;
const HOME = "tustin";

// Equirectangular projection with a cos(latitude) correction: accurate enough at county scale.
function project() {
  const lats = CITY_DATA.map((c) => c.lat);
  const lngs = CITY_DATA.map((c) => c.lng);
  const [minLat, maxLat] = [Math.min(...lats), Math.max(...lats)];
  const [minLng, maxLng] = [Math.min(...lngs), Math.max(...lngs)];
  const kx = Math.cos(((minLat + maxLat) / 2) * (Math.PI / 180));
  const spanX = (maxLng - minLng) * kx;
  const spanY = maxLat - minLat;
  const s = Math.min((W - PAD * 2) / spanX, (H - PAD * 2) / spanY);
  const offX = (W - spanX * s) / 2;
  const offY = (H - spanY * s) / 2;
  return CITY_DATA.map((c) => ({
    ...c,
    x: offX + (c.lng - minLng) * kx * s,
    y: offY + (maxLat - c.lat) * s,
  }));
}

export function CoverageMap() {
  const points = project();
  const home = points.find((p) => p.slug === HOME)!;
  const priority = points.filter((p) => p.priority === "high");

  return (
    <section className="cine-curtain bg-[#EEF2EC] py-20 text-[#10201A] sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="font-[family-name:var(--font-condensed)] text-[clamp(2.25rem,5vw,4rem)] font-extrabold uppercase leading-[0.95] [font-stretch:75%]">
            Based in Tustin, working all 34 cities
          </h2>
          <p className="mt-4 max-w-lg text-lg text-[#10201A]/70">
            Tustin sits in the middle of the county, so most of Orange County is a short drive away. That&apos;s how same-day
            visits stay realistic.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
            {priority.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/areas-we-serve/${c.slug}`}
                  className="inline-flex min-h-11 items-center md:min-h-0 text-base font-semibold text-[#1B4332] underline decoration-[#1B4332]/25 underline-offset-4 hover:decoration-[#1B4332]"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/areas-we-serve" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold md:min-h-0 text-[#10201A]/70 hover:text-[#10201A]">
            See every city we serve
          </Link>
        </div>

        <figure>
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full"
            role="img"
            aria-labelledby="coverage-title"
          >
            <title id="coverage-title">Map of the 34 Orange County cities Yogi&apos;s Pest Control serves, centered on Tustin</title>
            {/* drive-time rings around home base */}
            {[90, 180, 270].map((r) => (
              <circle key={r} cx={home.x} cy={home.y} r={r} fill="none" stroke="#1B4332" strokeOpacity={0.12} strokeDasharray="3 6" />
            ))}
            {points.map((p) => (
              <line key={`l-${p.slug}`} x1={home.x} y1={home.y} x2={p.x} y2={p.y} stroke="#1B4332" strokeOpacity={0.07} />
            ))}
            {points.map((p) => {
              const isHome = p.slug === HOME;
              const isPriority = p.priority === "high";
              return (
                <a key={p.slug} href={`/areas-we-serve/${p.slug}`} aria-label={`Pest control in ${p.name}`}>
                  {/* Invisible larger hit area: the SVG scales down ~45% on phones */}
                  <circle cx={p.x} cy={p.y} r={28} fill="transparent" />
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isHome ? 9 : isPriority ? 5.5 : 3.5}
                    fill={isHome ? "#D4A843" : isPriority ? "#1B4332" : "#2D6A4F"}
                    fillOpacity={isPriority || isHome ? 1 : 0.55}
                    stroke={isHome ? "#0B1A14" : "none"}
                    strokeWidth={2}
                  />
                  {(isPriority || isHome) && (
                    <text
                      x={p.x + (isHome ? 14 : 9)}
                      y={p.y + 4}
                      fontSize={isHome ? 17 : 13}
                      fontWeight={isHome ? 800 : 600}
                      fill="#10201A"
                    >
                      {p.name}
                    </text>
                  )}
                </a>
              );
            })}
          </svg>
          <figcaption className="mt-2 text-sm text-[#10201A]/60">
            Gold: home base in Tustin. Labeled: cities we work most often. Every dot links to its local page.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
