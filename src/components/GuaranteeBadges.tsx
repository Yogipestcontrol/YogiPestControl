import { Clock, CheckCircle, Leaf, ShieldCheck, Heart, Search } from "lucide-react";

const badges = [
  { label: "Same-Day Response", Icon: Clock },
  { label: "100% Satisfaction Guarantee", Icon: CheckCircle },
  { label: "Eco-Friendly Products", Icon: Leaf },
  { label: "Licensed & Insured", Icon: ShieldCheck },
  { label: "Family & Pet Safe", Icon: Heart },
  { label: "Free Inspections", Icon: Search },
];

export function GuaranteeBadges() {
  return (
    <div className="border-y border-border bg-surface-alt">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {badges.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-semibold text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
