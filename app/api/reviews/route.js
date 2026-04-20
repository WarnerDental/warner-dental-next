import { NextResponse } from 'next/server';

export async function GET() {
  const { GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID } = process.env;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${GOOGLE_PLACES_API_KEY}`;

  const res = await fetch(url, { next: { revalidate: 86400 } });
  const data = await res.json();

  const reviews = (data.result?.reviews ?? [])
    .filter((r) => r.rating >= 4)
    .map((r) => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text,
      time: r.relative_time_description,
      photo: r.profile_photo_url,
    }));

  return NextResponse.json({ reviews });
}