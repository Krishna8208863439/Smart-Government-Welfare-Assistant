import { NextResponse } from 'next/server';
import { evaluateEligibility, CitizenProfileInput } from '@/lib/ai-engine';

export async function POST(request: Request) {
  try {
    const profile: CitizenProfileInput = await request.json();
    const results = evaluateEligibility(profile);

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      evaluatedProfile: profile,
      totalMatches: results.filter((r) => r.isEligible).length,
      recommendations: results
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: 'Invalid profile data provided' },
      { status: 400 }
    );
  }
}
