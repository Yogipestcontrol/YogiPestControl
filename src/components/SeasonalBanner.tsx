"use client";

import { AlertTriangle } from "lucide-react";
import Link from "next/link";

function getSeasonalAlert() {
  const month = new Date().getMonth(); // 0-indexed

  if (month >= 2 && month <= 4) {
    return {
      headline: "Spring Alert: Ant Season Has Arrived in Orange County",
      description: "Warmer weather means ant colonies are on the move. Protect your home before they settle in.",
      link: "/services/ant-control",
      linkText: "Learn About Ant Control",
    };
  }
  if (month >= 5 && month <= 7) {
    return {
      headline: "Summer Warning: Mosquito & Wasp Activity at Peak Levels",
      description: "Breeding season is active across OC. Keep your yard safe for your family.",
      link: "/services/mosquito-control",
      linkText: "Mosquito Control Services",
    };
  }
  if (month >= 8 && month <= 10) {
    return {
      headline: "Fall Alert: Rodents Are Seeking Indoor Shelter",
      description: "As temperatures drop, rats and mice move indoors. Seal your home before they settle in.",
      link: "/services/rodent-control",
      linkText: "Rodent Control Services",
    };
  }
  return {
    headline: "Winter Reminder: Pests Don't Hibernate in Southern California",
    description: "Year-round mild weather means pest activity continues. Stay protected.",
    link: "/services",
    linkText: "View All Services",
  };
}

export function SeasonalBanner() {
  const alert = getSeasonalAlert();

  return (
    <div className="bg-accent/10 border-b border-accent/20">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <AlertTriangle className="h-5 w-5 shrink-0 text-accent" />
        <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-2">
          <span className="text-sm font-semibold text-foreground">{alert.headline}</span>
          <span className="hidden text-sm text-muted sm:inline">— {alert.description}</span>
        </div>
        <Link
          href={alert.link}
          className="shrink-0 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-primary-dark transition-colors hover:bg-accent-light"
        >
          {alert.linkText}
        </Link>
      </div>
    </div>
  );
}
