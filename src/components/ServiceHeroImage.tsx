import { ServiceIcon } from "./ServiceIcon";

const bgColors: Record<string, string> = {
  "rodent-control": "from-amber-800 to-amber-950",
  "cockroach-control": "from-stone-700 to-stone-900",
  "ant-control": "from-red-800 to-red-950",
  "wasp-control": "from-yellow-700 to-yellow-900",
  "bee-removal": "from-amber-600 to-amber-800",
  "mosquito-control": "from-sky-800 to-sky-950",
  "fly-control": "from-slate-700 to-slate-900",
  "spider-control": "from-violet-800 to-violet-950",
  "tick-flea-treatment": "from-orange-800 to-orange-950",
  "exclusion-repairs": "from-emerald-800 to-emerald-950",
  "attic-cleanout": "from-cyan-800 to-cyan-950",
  "bed-bug-treatment": "from-rose-800 to-rose-950",
  "wildlife-trapping": "from-green-800 to-green-950",
  "dead-animal-removal": "from-neutral-700 to-neutral-900",
};

export function ServiceHeroImage({
  slug,
  name,
  size = "large",
}: {
  slug: string;
  name: string;
  size?: "small" | "medium" | "large";
}) {
  const gradient = bgColors[slug] || "from-primary to-primary-dark";
  const sizeClasses = {
    small: "h-32 w-full",
    medium: "h-48 w-full",
    large: "h-64 w-full lg:h-80",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${gradient} ${sizeClasses[size]}`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`pattern-${slug}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pattern-${slug})`} />
        </svg>
      </div>
      {/* Icon + text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
          <ServiceIcon slug={slug} className="h-10 w-10 text-white" />
        </div>
        <span className="text-lg font-bold text-white/90">{name}</span>
      </div>
    </div>
  );
}
