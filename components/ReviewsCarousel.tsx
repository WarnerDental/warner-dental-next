'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

type Review = {
  author: string;
  rating: number;
  text: string;
  time?: string;
  photo?: string;
};

type ReviewData = {
  reviews: Review[];
  rating: number | null;
  total: number | null;
  url?: string;
};

const LONG_REVIEW = 280; // characters before "Read more" appears

export default function ReviewsCarousel() {
  const [data, setData] = useState<ReviewData | null>(null);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 7000 })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => setData(null));
  }, []);

  // Cards can change height when expanded; let the carousel re-measure
  useEffect(() => {
    emblaApi?.reInit();
  }, [expanded, emblaApi]);

  const reviews = data?.reviews ?? [];
  if (!reviews.length) return null;

  const toggle = (i: number) =>
    setExpanded((e) => ({ ...e, [i]: !e[i] }));

  return (
    <div>
      {data?.rating && data?.total ? (
        <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy-800">
          <span className="text-lg text-yellow-500" aria-hidden="true">★</span>
          <span className="font-semibold text-navy-900">
            {data.rating.toFixed(1)}
          </span>
          <span>·</span>
          <span>{data.total} Google reviews</span>
          {data.url && (
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-navy-700 underline underline-offset-2 hover:text-navy-900"
            >
              See all on Google
            </a>
          )}
        </div>
      ) : null}

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {reviews.map((review, i) => {
            const isLong = review.text.length > LONG_REVIEW;
            const isOpen = !!expanded[i];
            return (
              <div
                key={i}
                className="min-w-0 flex-[0_0_100%] px-2 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
              >
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
                  <div
                    className="flex gap-1 text-xl text-yellow-500"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </div>

                  <div className="flex-1">
                    <p
                      className={`leading-relaxed text-navy-800 ${
                        isLong && !isOpen ? 'line-clamp-6' : ''
                      }`}
                    >
                      “{review.text}”
                    </p>
                    {isLong && (
                      <button
                        type="button"
                        onClick={() => toggle(i)}
                        className="mt-2 text-sm font-medium text-navy-700 underline underline-offset-2 hover:text-navy-900"
                      >
                        {isOpen ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </div>

                  <div className="mt-auto flex items-center gap-3">
                    {review.photo && (
                      <Image
                        src={review.photo}
                        alt=""
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <p className="text-sm font-semibold text-navy-900">
                        {review.author}
                      </p>
                      {review.time && (
                        <p className="text-xs text-navy-800">{review.time}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous review"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-xl font-bold shadow-soft hover:bg-gold-400"
        >
          &lt;
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next review"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-xl font-bold shadow-soft hover:bg-gold-400"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}