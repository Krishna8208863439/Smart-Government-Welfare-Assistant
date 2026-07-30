import { NextResponse } from 'next/server';
import { SCHEMES_DATABASE } from '@/lib/schemes-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const level = searchParams.get('level');
  const q = searchParams.get('q');

  let filtered = SCHEMES_DATABASE;

  if (category && category !== 'ALL') {
    filtered = filtered.filter((s) => s.category === category);
  }
  if (level && level !== 'ALL') {
    filtered = filtered.filter((s) => s.level === level);
  }
  if (q) {
    filtered = filtered.filter(
      (s) =>
        s.title.toLowerCase().includes(q.toLowerCase()) ||
        s.code.toLowerCase().includes(q.toLowerCase()) ||
        s.shortDescription.toLowerCase().includes(q.toLowerCase())
    );
  }

  return NextResponse.json({
    success: true,
    total: filtered.length,
    schemes: filtered
  });
}
