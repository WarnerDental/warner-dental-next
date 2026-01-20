"use client";

import { useEffect, useMemo, useState } from "react";

type Quote = { quote: string; name: string; location: string };

export default function TestimonialCarousel({
  quotes
}: {
  quotes: Quote[];
}) {
  const safeQuotes = useMemo(() => quotes.filter(Boolean), [quotes]);
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setI((v) => (v + 1) % safeQuotes.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [safeQuotes.length]);

  const current = safeQuotes[i];

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-soft">
      <p className="text-lg leading-relaxed text-navy-900">
        “{current.quote}”
      </p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="text-sm">
          <div className="font-semibold">{current.name}</div>
          <div className="text-navy-800">{current.location}</div>
        </div>

        <div className="flex items-center gap-2">
          {safeQuotes.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === i ? "bg-gold-500" : "bg-black/10"
              }`}
              aria-label={`Show testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
