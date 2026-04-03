"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function EmergencyButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      const footerRect = footer.getBoundingClientRect();
      setVisible(footerRect.top > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={SITE_CONFIG.phoneTel}
      className="pulse-emergency fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-2xl transition-transform hover:scale-105 sm:px-5"
      aria-label="Emergency: Call Now"
    >
      <Phone className="h-5 w-5" />
      <span className="hidden sm:inline">Emergency? Call Now</span>
      <span className="sm:hidden">Call Now</span>
    </a>
  );
}
