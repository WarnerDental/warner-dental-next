import { NextResponse } from 'next/server';

// Refresh the reviews at most once a day.
// If a refresh fails, the last good copy keeps showing.
export const revalidate = 86400;

export async function GET() {
  const { GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID } = process.env;

  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    throw new Error('[reviews] Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID');
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${GOOGLE_PLACES_API_KEY}`;

  const res = await fetch(url, { next: { revalidate: 86400 } });
  const data = await res.json();

  if (data.status !== 'OK') {
    // Shows up in Vercel logs instead of failing silently
    throw new Error(
      `[reviews] Google Places error: ${data.status} - ${data.error_message ?? 'no message'}`
    );
  }

  const reviews = (data.result?.reviews ?? [])
    .filter((r: any) => r.rating >= 4)
    .map((r: any) => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text,
      time: r.relative_time_description,
      photo: r.profile_photo_url,
    }));

  return NextResponse.json({ reviews });
}