import { Bug, Rat, Antenna, Shield, Home, Bed, TreePine, Skull, Droplets, Wind, Scissors, Sparkles, PawPrint, Search } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "rodent-control": Rat,
  "cockroach-control": Bug,
  "ant-control": Antenna,
  "wasp-control": Shield,
  "bee-removal": Sparkles,
  "mosquito-control": Droplets,
  "fly-control": Wind,
  "spider-control": Bug,
  "tick-flea-treatment": PawPrint,
  "exclusion-repairs": Scissors,
  "attic-cleanout": Home,
  "bed-bug-treatment": Bed,
  "wildlife-trapping": TreePine,
  "dead-animal-removal": Skull,
};

export function ServiceIcon({
  slug,
  className = "h-6 w-6",
}: {
  slug: string;
  className?: string;
}) {
  const Icon = iconMap[slug] || Search;
  return <Icon className={className} />;
}
