'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((d) => setReviews(d.reviews));
  }, []);

  if (!reviews.length) return null;

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {reviews.map((review, i) => (
            <div key={i} style={{ flex: '0 0 50%', minWidth: '0', padding: '0 8px' }}>
              <div className="bg-white rounded-2xl shadow-md p-6 h-full flex flex-col gap-4">
                <div className="flex gap-1 text-yellow-400 text-xl">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </div>
                <p className="text-gray-600 flex-1 italic">"{review.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  {review.photo && (
                    <Image
                      src={review.photo}
                      alt={review.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-sm">{review.author}</p>
                    <p className="text-xs text-gray-400">{review.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={scrollPrev}
          className="bg-white border border-gray-200 shadow-md rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-gray-100"
        >
          &lt;
        </button>
        <button
          onClick={scrollNext}
          className="bg-white border border-gray-200 shadow-md rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}