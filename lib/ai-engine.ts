import { SCHEMES_DATABASE, Scheme } from './schemes-data';

export interface CitizenProfileInput {
  age?: number;
  gender?: string;
  state?: string;
  district?: string;
  income?: number;
  occupation?: string;
  isFarmer?: boolean;
  isStudent?: boolean;
  isDisability?: boolean;
  education?: string;
  category?: string;
  familySize?: number;
  hasExistingBenefits?: boolean;
}

export interface EligibilityResult {
  scheme: Scheme;
  matchScore: number; // 0 - 100
  isEligible: boolean;
  matchingCriteria: string[];
  missingCriteria: string[];
  estimatedBenefitAmount: string;
}

export function evaluateEligibility(profile: CitizenProfileInput): EligibilityResult[] {
  return SCHEMES_DATABASE.map((scheme) => {
    let score = 0;
    const maxScore = 100;
    const matching: string[] = [];
    const missing: string[] = [];

    const e = scheme.eligibility;

    // Age Evaluation (Weight: 20%)
    if (profile.age !== undefined && profile.age !== null) {
      const minAgeOk = e.minAge === undefined || profile.age >= e.minAge;
      const maxAgeOk = e.maxAge === undefined || profile.age <= e.maxAge;
      if (minAgeOk && maxAgeOk) {
        score += 20;
        matching.push(`Age requirement satisfied (${profile.age} years)`);
      } else {
        missing.push(`Age must be ${e.minAge || 0} - ${e.maxAge || 100} years`);
      }
    } else {
      score += 10;
    }

    // Gender Evaluation (Weight: 15%)
    if (e.gender) {
      if (profile.gender && profile.gender.toUpperCase() === e.gender.toUpperCase()) {
        score += 15;
        matching.push(`Gender match (${e.gender})`);
      } else {
        missing.push(`Exclusively for ${e.gender} beneficiaries`);
      }
    } else {
      score += 15;
    }

    // Income Evaluation (Weight: 25%)
    if (e.maxIncome !== undefined) {
      if (profile.income !== undefined && profile.income <= e.maxIncome) {
        score += 25;
        matching.push(`Annual income eligible (₹${profile.income.toLocaleString()} <= ₹${e.maxIncome.toLocaleString()})`);
      } else if (profile.income !== undefined) {
        missing.push(`Annual income must be under ₹${e.maxIncome.toLocaleString()}`);
      } else {
        score += 10;
      }
    } else {
      score += 25;
    }

    // Special Status: Farmer / Student / Disability (Weight: 25%)
    if (e.requiresFarmer) {
      if (profile.isFarmer) {
        score += 25;
        matching.push('Registered Landholding Farmer Status verified');
      } else {
        missing.push('Farmer Landholding Status required');
      }
    } else if (e.requiresStudent) {
      if (profile.isStudent) {
        score += 25;
        matching.push('Enrolled Student Status verified');
      } else {
        missing.push('Enrolled Student Status required');
      }
    } else if (e.requiresDisability) {
      if (profile.isDisability) {
        score += 25;
        matching.push('Disability Certificate status confirmed');
      } else {
        missing.push('Benchmark Disability Certificate required');
      }
    } else {
      score += 25;
    }

    // Category / Caste (Weight: 15%)
    if (e.categories && e.categories.length > 0) {
      if (profile.category && e.categories.includes(profile.category.toUpperCase())) {
        score += 15;
        matching.push(`Social category eligible (${profile.category})`);
      } else if (profile.category) {
        missing.push(`Applies to categories: ${e.categories.join(', ')}`);
      } else {
        score += 10;
      }
    } else {
      score += 15;
    }

    const matchScore = Math.min(100, Math.max(0, score));
    const isEligible = matchScore >= 60 && missing.length === 0;

    return {
      scheme,
      matchScore,
      isEligible,
      matchingCriteria: matching,
      missingCriteria: missing,
      estimatedBenefitAmount: scheme.maxBenefit
    };
  }).sort((a, b) => b.matchScore - a.matchScore);
}
