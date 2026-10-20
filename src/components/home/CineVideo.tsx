"use client";

import { useEffect, useRef } from "react";

/**
 * Muted ambient loop. Plays only while on screen (saves battery and data), never
 * autoplays for prefers-reduced-motion, and shows the poster until it can play.
 */
export function CineVideo({
  src,
  tallSrc,
  poster,
  loop = true,
  eager = false,
  className = "",
}: {
  src: string;
  /** 9:16 variant for portrait phones. */
  tallSrc?: string;
  poster: string;
  loop?: boolean;
  /** Above-the-fold video: start loading immediately. */
  eager?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.preload === "none") video.preload = "auto";
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      playsInline
      loop={loop}
      preload={eager ? "auto" : "none"}
      aria-hidden
      tabIndex={-1}
    >
      {tallSrc && <source src={tallSrc} type="video/mp4" media="(max-aspect-ratio: 3/4)" />}
      <source src={src} type="video/mp4" />
    </video>
  );
}
