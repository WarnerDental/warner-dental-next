"use client";

import { useEffect, useMemo, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

export default function PhotoCarousel({
  images,
  className = ""
}: {
  images: CarouselImage[];
  className?: string;
}) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [i, setI] = useState(0);

  const prev = () => setI((v) => (v - 1 + safeImages.length) % safeImages.length);
  const next = () => setI((v) => (v + 1) % safeImages.length);

  // Optional: auto-advance (comment out if you prefer manual only)
  useEffect(() => {
    if (safeImages.length <= 1) return;
    const id = window.setInterval(() => next(), 6500);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeImages.length]);

  // Keyboard support (left/right arrows)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeImages.length]);

  if (safeImages.length === 0) return null;

  const current = safeImages[i];

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-black/5 shadow-soft ${className}`}>
      <div className="h-[320px] bg-black/[0.04] sm:h-[420px]">
  <img
    src={current.src}
    alt={current.alt}
    className="h-full w-full object-contain"
    loading="lazy"
  />
</div>

      {/* Prev / Next */}
      {safeImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 px-3 py-2 text-sm font-medium text-navy-900 shadow-soft hover:bg-white"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 px-3 py-2 text-sm font-medium text-navy-900 shadow-soft hover:bg-white"
          >
            →
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/70 px-3 py-2 backdrop-blur">
            {safeImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Show photo ${idx + 1}`}
                className={`h-2.5 w-2.5 rounded-full ${idx === i ? "bg-gold-500" : "bg-black/20"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
