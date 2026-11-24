import { NextResponse } from 'next/server';
import { getReviews } from '@/lib/reviews';

// Kept for anything that still calls /api/reviews. The homepage now gets reviews on the
// server (lib/reviews.ts). Runs per request, but the Google call itself is cached for a day.
export const dynamic = 'force-dynamic';

export async function GET() {
  const data = await getReviews();
  if (!data) {
    return NextResponse.json({ error: 'Reviews unavailable' }, { status: 502 });
  }
  return NextResponse.json(data);
}
