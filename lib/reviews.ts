// Google reviews for the homepage, fetched on the server so the review text is part of
// the page's HTML (search engines and AI assistants can read it). Refreshed at most once a day.
// Never throws: if Google is unreachable or the keys are missing, it returns null and the
// homepage simply renders without the reviews section.

export type Review = {
  author: string;
  rating: number;
  text: string;
  time?: string;
  photo?: string;
};

export type ReviewData = {
  reviews: Review[];
  rating: number | null;
  total: number | null;
  url?: string;
};

export async function getReviews(): Promise<ReviewData | null> {
  const { GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID } = process.env;

  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    console.error('[reviews] Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID');
    return null;
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    const data = await res.json();

    if (data.status !== 'OK') {
      // Shows up in Vercel logs instead of failing silently
      console.error(
        `[reviews] Google Places error: ${data.status} - ${data.error_message ?? 'no message'}`
      );
      return null;
    }

    const reviews: Review[] = (data.result?.reviews ?? [])
      .filter((r: any) => r.rating >= 4)
      .map((r: any) => ({
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        time: r.relative_time_description,
        photo: r.profile_photo_url,
      }));

    return {
      reviews,
      rating: data.result?.rating ?? null,
      total: data.result?.user_ratings_total ?? null,
      url: `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`,
    };
  } catch (err) {
    console.error('[reviews] Fetch failed', err);
    return null;
  }
}
