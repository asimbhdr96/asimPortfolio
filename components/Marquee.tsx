"use client";

import { marqueeItems } from "@/lib/content";

export function Marquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="group relative flex w-full overflow-hidden border-y border-line py-5 select-none"
      aria-hidden="true"
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent" />

      <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-mono text-sm tracking-wide text-muted whitespace-nowrap">
              {item}
            </span>
            <span className="text-accent/70" aria-hidden>
              {"/"}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
