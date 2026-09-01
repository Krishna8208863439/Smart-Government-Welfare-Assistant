'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  User, 
  ArrowRight
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { evaluateEligibility, CitizenProfileInput, EligibilityResult } from '@/lib/ai-engine';
import { getSchemeTitle, getSchemeDesc, getSchemeBenefit } from '@/lib/schemes-data';
import { useTranslation } from '@/components/accessibility-provider';
import { useAuth } from '@/lib/auth-context';

export default function EligibilityPage() {
  const { t, language } = useTranslation();
  const { isAuthenticated } = useAuth();

  const [profile, setProfile] = useState<CitizenProfileInput>({
    age: 32,
    gender: 'MALE',
    state: 'Maharashtra',
    district: 'Pune',
    income: 180000,
    occupation: 'Farmer',
    isFarmer: true,
    isStudent: false,
    isDisability: false,
    category: 'OBC',
    familySize: 4
  });

  const results: EligibilityResult[] = evaluateEligibility(profile);
  const eligibleSchemes = results.filter((r) => r.isEligible || r.matchScore >= 60);

  const occupationOptions = [
    { id: 'Farmer', label: language === 'mr' ? 'शेतजमीनधारक शेतकरी' : language === 'hi' ? 'भूमिधारक किसान' : 'Landholding Farmer' },
    { id: 'Student', label: language === 'mr' ? 'शालेय / महाविद्यालयीन विद्यार्थी' : language === 'hi' ? 'अध्ययनरत छात्र' : 'Enrolled Student' },
    { id: 'Artisan', label: language === 'mr' ? 'पारंपरिक कारागीर / विश्वकर्मा' : language === 'hi' ? 'पारंपरिक कारीगर / विश्वकर्मा' : 'Artisan / Craftsman' },
    { id: 'Street Vendor', label: language === 'mr' ? 'फेरीवाला / पथविक्रेता' : language === 'hi' ? 'स्ट्रीट वेंडर / फेरीवाला' : 'Street Vendor / Hawker' },
    { id: 'Self Employed', label: language === 'mr' ? 'स्वयंरोजगार / एमएसएमई व्यावसायिक' : language === 'hi' ? 'स्व-नियोजित / एमएसएमई' : 'Self Employed / MSME' },
    { id: 'Salaried', label: language === 'mr' ? 'वेतनभोगी कर्मचारी' : language === 'hi' ? 'वेतनभोगी कर्मचारी' : 'Salaried Worker' },
    { id: 'Unemployed', label: language === 'mr' ? 'बेरोजगार / गृहिणी' : language === 'hi' ? 'बेरोजगार / गृहिणी' : 'Unemployed / Homemaker' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg transition-colors">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-gov-darkBg via-slate-900 to-gov-darkBg text-white py-10 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
            <Zap className="w-4 h-4 text-amber-300" />
            <span>{t('elig_badge', 'AI Precision Match Predictor')}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t('elig_title', 'Check Your Government Scheme Eligibility')}
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            {t('elig_subtitle', 'Input your demographic details below. JanSahay AI evaluates your profile against official government eligibility guidelines in real-time.')}
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form: Profile Questionnaire */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-5 shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="font-extrabold text-base flex items-center space-x-2 text-slate-900 dark:text-white">
                <User className="w-5 h-5 text-gov-blue" />
                <span>{t('elig_form_title', 'Citizen Profile Questionnaire')}</span>
              </span>
              <span className="text-[11px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                Live AI Scanner
              </span>
            </div>

            <div className="space-y-4 text-xs">
              
              {/* Age & Gender */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t('elig_age_label', 'Age (Years)')}
                  </label>
                  <input
                    type="number"
                    value={profile.age || ''}
                    onChange={(e) => setProfile({ ...profile, age: Number(e.target.value) })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 font-bold text-slate-900 dark:text-white outline-none focus:border-gov-blue"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t('elig_gender_label', 'Gender')}
                  </label>
                  <select
                    value={profile.gender || 'MALE'}
                    onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 font-bold text-slate-900 dark:text-white outline-none focus:border-gov-blue"
                  >
                    <option value="MALE">{t('elig_gender_male', 'Male')}</option>
                    <option value="FEMALE">{t('elig_gender_female', 'Female')}</option>
                    <option value="TRANSGENDER">{t('elig_gender_trans', 'Transgender')}</option>
                  </select>
                </div>
              </div>

              {/* Annual Income */}
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t('elig_income_label', 'Annual Household Income (₹)')}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 font-bold text-slate-400">₹</span>
                  <input
                    type="number"
                    value={profile.income || ''}
                    onChange={(e) => setProfile({ ...profile, income: Number(e.target.value) })}
                    className="w-full pl-8 pr-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 font-bold text-slate-900 dark:text-white outline-none focus:border-gov-blue"
                  />
                </div>
              </div>

              {/* Occupation */}
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t('elig_occupation_label', 'Primary Occupation')}
                </label>
                <select
                  value={profile.occupation || 'Farmer'}
                  onChange={(e) => {
                    const occ = e.target.value;
                    setProfile({ 
                      ...profile, 
                      occupation: occ,
                      isFarmer: occ === 'Farmer',
                      isStudent: occ === 'Student'
                    });
                  }}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 font-bold text-slate-900 dark:text-white outline-none focus:border-gov-blue"
                >
                  {occupationOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Category & State */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t('elig_category_label', 'Social Category')}
                  </label>
                  <select
                    value={profile.category || 'GENERAL'}
                    onChange={(e) => setProfile({ ...profile, category: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 font-bold text-slate-900 dark:text-white outline-none focus:border-gov-blue"
                  >
                    <option value="GENERAL">General (सामान्य)</option>
                    <option value="OBC">OBC (इतर मागास प्रवर्ग)</option>
                    <option value="SC">SC (अनुसूचित जाती)</option>
                    <option value="ST">ST (अनुसूचित जमाती)</option>
                    <option value="EWS">EWS (आर्थिक दुर्बल)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t('elig_state_label', 'State Location')}
                  </label>
                  <input
                    type="text"
                    value={profile.state || ''}
                    onChange={(e) => setProfile({ ...profile, state: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 font-bold text-slate-900 dark:text-white outline-none focus:border-gov-blue"
                  />
                </div>
              </div>

              {/* Checkbox Statuses */}
              <div className="pt-2 space-y-2 border-t border-slate-200 dark:border-slate-800">
                <label className="flex items-center space-x-2 font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.isFarmer || false}
                    onChange={(e) => setProfile({ ...profile, isFarmer: e.target.checked })}
                    className="w-4 h-4 text-gov-blue rounded"
                  />
                  <span>{t('elig_chk_farmer', 'Landholding Farmer Status Verified')}</span>
                </label>

                <label className="flex items-center space-x-2 font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.isStudent || false}
                    onChange={(e) => setProfile({ ...profile, isStudent: e.target.checked })}
                    className="w-4 h-4 text-gov-blue rounded"
                  />
                  <span>{t('elig_chk_student', 'Enrolled Student Status')}</span>
                </label>

                <label className="flex items-center space-x-2 font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.isDisability || false}
                    onChange={(e) => setProfile({ ...profile, isDisability: e.target.checked })}
                    className="w-4 h-4 text-gov-blue rounded"
                  />
                  <span>{t('elig_chk_pwd', 'Person with Benchmark Disability (PwD)')}</span>
                </label>
              </div>

            </div>
          </div>
        </aside>

        {/* Right Output: AI Recommendation Feed */}
        <section className="lg:col-span-7 space-y-6">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
            <div>
              <h3 className="font-black text-xl text-slate-900 dark:text-white">
                {t('elig_results_heading', 'Eligible Schemes')} ({eligibleSchemes.length})
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('elig_results_desc', 'Schemes sorted by AI Match Percentage and Direct Financial Benefit')}
              </p>
            </div>
            
            <div className="flex items-center space-x-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold text-xs px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              <Sparkles className="w-4 h-4" />
              <span>AI Verified Matches</span>
            </div>
          </div>

          {/* Scheme Match Cards */}
          <div className="space-y-6">
            {results.map((res) => {
              const { scheme, matchScore, isEligible, matchingCriteria, missingCriteria } = res;
              
              return (
                <div
                  key={scheme.id}
                  className={`glass-panel p-6 rounded-3xl border transition-all bg-white/90 dark:bg-slate-900/90 backdrop-blur-md ${
                    isEligible
                      ? 'border-emerald-500/40 bg-emerald-500/5 dark:bg-emerald-950/20 shadow-lg'
                      : matchScore >= 60
                      ? 'border-amber-500/40 bg-amber-500/5 dark:bg-amber-950/20'
                      : 'border-slate-200 dark:border-slate-800 opacity-80'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded bg-gov-blue/10 text-gov-blue dark:bg-blue-950 dark:text-blue-300">
                          {scheme.level} • {scheme.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 font-bold">{scheme.code}</span>
                      </div>
                      <h4 className="font-extrabold text-lg text-slate-900 dark:text-white">
                        {getSchemeTitle(scheme, language)}
                      </h4>
                    </div>

                    {/* AI Score Badge */}
                    <div className="flex items-center space-x-3 shrink-0">
                      <div className="text-right">
                        <span className="text-2xl font-black text-slate-900 dark:text-white">
                          {matchScore}%
                        </span>
                        <p className="text-[10px] font-bold text-slate-500">
                          {t('elig_match_score_label', 'AI Match Score')}
                        </p>
                      </div>

                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xs text-white shadow ${
                          matchScore >= 80
                            ? 'bg-emerald-500'
                            : matchScore >= 60
                            ? 'bg-amber-500'
                            : 'bg-slate-600'
                        }`}
                      >
                        {isEligible ? 'PASS' : `${matchScore}%`}
                      </div>
                    </div>
                  </div>

                  <div className="py-4 space-y-3">
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {getSchemeDesc(scheme, language)}
                    </p>

                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-semibold">{t('max_benefit_label', 'Estimated Benefit:')}</span>
                      <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                        {getSchemeBenefit(scheme, language)}
                      </span>
                    </div>

                    {/* Matching vs Missing Breakdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                      <div className="space-y-1">
                        <p className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{t('elig_matched_criteria', 'Matched Criteria')}</span>
                        </p>
                        {matchingCriteria.map((m, idx) => (
                          <p key={idx} className="text-slate-600 dark:text-slate-400 text-[11px]">• {m}</p>
                        ))}
                      </div>

                      {missingCriteria.length > 0 && (
                        <div className="space-y-1">
                          <p className="font-bold text-amber-600 dark:text-amber-400 flex items-center space-x-1">
                            <XCircle className="w-3.5 h-3.5" />
                            <span>{t('elig_action_needed', 'Action Needed')}</span>
                          </p>
                          {missingCriteria.map((m, idx) => (
                            <p key={idx} className="text-slate-500 text-[11px]">• {m}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex justify-between items-center">
                    <Link
                      href={isAuthenticated ? `/schemes/${scheme.id}` : '/login'}
                      className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-gov-blue"
                    >
                      {t('full_details', 'View Details')}
                    </Link>

                    <Link
                      href={isAuthenticated ? `/apply/${scheme.id}` : '/login'}
                      className="px-5 py-2 bg-gradient-to-r from-gov-blue to-blue-700 text-white rounded-xl text-xs font-extrabold shadow hover:opacity-95 transition-opacity flex items-center space-x-1"
                    >
                      <span>{t('elig_proceed_apply', 'Proceed to Apply')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
