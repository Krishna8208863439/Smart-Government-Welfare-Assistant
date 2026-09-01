'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  SlidersHorizontal, 
  ChevronRight, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  Users,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { 
  SCHEMES_DATABASE, 
  SCHEME_CATEGORIES, 
  Scheme, 
  getSchemeTitle, 
  getSchemeDesc, 
  getSchemeBenefit, 
  getSchemeDept, 
  getSchemeDocs, 
  getCategoryName 
} from '@/lib/schemes-data';
import { useTranslation } from '@/components/accessibility-provider';
import { useAuth } from '@/lib/auth-context';

export default function SchemesPage() {
  const { t, language } = useTranslation();
  const { isAuthenticated } = useAuth();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  const [benefitType, setBenefitType] = useState<string>('ALL');

  const filteredSchemes = useMemo(() => {
    return SCHEMES_DATABASE.filter((scheme) => {
      // Keyword search in English, Hindi, and Marathi
      const matchesSearch = 
        scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (scheme.hindiTitle && scheme.hindiTitle.includes(searchTerm)) ||
        (scheme.marathiTitle && scheme.marathiTitle.includes(searchTerm)) ||
        (scheme.hindiDesc && scheme.hindiDesc.includes(searchTerm)) ||
        (scheme.marathiDesc && scheme.marathiDesc.includes(searchTerm));

      // Category filter
      const matchesCat = selectedCategory === 'ALL' || scheme.category === selectedCategory;

      // Level filter
      const matchesLevel = selectedLevel === 'ALL' || scheme.level === selectedLevel;

      // Benefit filter
      const matchesBenefit = benefitType === 'ALL' || scheme.benefitType === benefitType;

      return matchesSearch && matchesCat && matchesLevel && matchesBenefit;
    });
  }, [searchTerm, selectedCategory, selectedLevel, benefitType]);

  const levelOptions = [
    { id: 'ALL', label: t('filter_level_all', 'All Government Levels') },
    { id: 'Central', label: t('filter_level_central', 'Central Government') },
    { id: 'State', label: t('filter_level_state', 'State Government') }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg transition-colors">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gov-darkBg via-slate-900 to-gov-darkBg text-white py-12 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{t('schemes_badge', 'Live Central & State Scheme Directory')} (myScheme & DBT Bharat)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t('schemes_title', 'Discover Government Welfare Schemes')}
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            {t('schemes_subtitle', 'Browse verified welfare schemes across Central and State ministries. Filter by eligibility criteria, department, or financial benefit type.')}
          </p>

          {/* Search Bar */}
          <div className="pt-2 max-w-3xl">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder={t('search_schemes_placeholder', 'Search scheme name, department, PM-KISAN, Ayushman Bharat...')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/90 text-white rounded-xl border border-slate-700 focus:outline-none focus:border-gov-blue text-sm shadow-inner placeholder:text-slate-400 font-semibold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog & Sidebar */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Filter Sidebar */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="font-extrabold text-sm flex items-center space-x-2 text-slate-900 dark:text-white">
                <SlidersHorizontal className="w-4 h-4 text-gov-blue" />
                <span>{t('filter_title', 'Filters')}</span>
              </span>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('ALL');
                  setSelectedLevel('ALL');
                  setBenefitType('ALL');
                }}
                className="text-xs text-gov-blue dark:text-blue-400 hover:underline font-bold"
              >
                {t('filter_reset', 'Reset All')}
              </button>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-2">
                {t('filter_level', 'Government Level')}
              </label>
              <div className="space-y-1.5">
                {levelOptions.map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setSelectedLevel(lvl.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                      selectedLevel === lvl.id
                        ? 'bg-gov-blue text-white font-bold shadow-md'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{lvl.label}</span>
                    {selectedLevel === lvl.id && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-2">
                {t('filter_category', 'Sector / Category')}
              </label>
              <div className="space-y-1 max-h-64 overflow-y-auto pr-1">
                <button
                  onClick={() => setSelectedCategory('ALL')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === 'ALL'
                      ? 'bg-gov-blue text-white font-bold shadow-md'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {t('filter_category_all', 'All Categories')} ({SCHEMES_DATABASE.length})
                </button>
                {SCHEME_CATEGORIES.map((cat) => {
                  const count = SCHEMES_DATABASE.filter(s => s.category === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                        selectedCategory === cat.id
                          ? 'bg-gov-blue text-white font-bold shadow-md'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>{getCategoryName(cat, language)}</span>
                      {count > 0 && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${selectedCategory === cat.id ? 'bg-blue-800 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                          {count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Benefit Type */}
            <div>
              <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-2">
                {t('filter_benefit_type', 'Benefit Type')}
              </label>
              <select
                value={benefitType}
                onChange={(e) => setBenefitType(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold rounded-xl p-2.5 text-slate-800 dark:text-white outline-none focus:border-gov-blue"
              >
                <option value="ALL">{t('filter_benefit_all', 'All Benefit Types')}</option>
                <option value="Financial Assistance">{t('filter_benefit_financial', 'Financial Assistance (DBT)')}</option>
                <option value="Insurance">{t('filter_benefit_insurance', 'Insurance Cover')}</option>
                <option value="Subsidy">{t('filter_benefit_subsidy', 'Subsidy')}</option>
              </select>
            </div>

          </div>
        </aside>

        {/* Right Content Grid */}
        <section className="lg:col-span-9 space-y-4">
          <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 font-medium shadow-sm">
            <span>
              {t('showing_schemes', 'Showing active schemes')}: <strong className="text-slate-900 dark:text-white font-black">{filteredSchemes.length}</strong>
            </span>
            <span className="flex items-center space-x-1 font-bold text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>LIVE DBT Data (2026)</span>
            </span>
          </div>

          {filteredSchemes.length === 0 ? (
            <div className="glass-panel p-12 rounded-3xl text-center space-y-3 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80">
              <Search className="w-10 h-10 text-slate-400 mx-auto" />
              <p className="font-bold text-base text-slate-800 dark:text-white">
                {t('no_schemes_found', 'No Schemes Found')}
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {t('no_schemes_found_desc', 'No schemes match your current filter parameters. Try clearing your search keyword or resetting filters.')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSchemes.map((scheme) => (
                <div
                  key={scheme.id}
                  className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all flex flex-col justify-between bg-white/90 dark:bg-slate-900/90 backdrop-blur-md"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-md bg-gov-blue/10 text-gov-blue dark:bg-blue-950 dark:text-blue-300">
                        {scheme.level === 'Central' ? t('filter_level_central', 'Central') : t('filter_level_state', 'State')} • {scheme.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 font-bold">{scheme.code}</span>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-base text-slate-900 dark:text-white line-clamp-2">
                        {getSchemeTitle(scheme, language)}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {getSchemeDesc(scheme, language)}
                    </p>

                    <div className="bg-emerald-500/10 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/20 flex items-center justify-between">
                      <span className="text-xs text-emerald-800 dark:text-emerald-300 font-bold">
                        {t('max_benefit_label', 'Max Benefit:')}
                      </span>
                      <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                        {getSchemeBenefit(scheme, language)}
                      </span>
                    </div>

                    {scheme.liveBeneficiaries && (
                      <div className="flex items-center space-x-1.5 text-[11px] font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-lg border border-sky-500/20">
                        <Users className="w-3.5 h-3.5" />
                        <span>Live Beneficiaries: {scheme.liveBeneficiaries}</span>
                      </div>
                    )}

                    <div className="text-[11px] text-slate-500 space-y-1 pt-1">
                      <p>
                        <strong className="text-slate-700 dark:text-slate-300">{t('department_label', 'Department:')}</strong> {getSchemeDept(scheme, language)}
                      </p>
                      <p>
                        <strong className="text-slate-700 dark:text-slate-300">{t('required_docs_label', 'Required Docs:')}</strong> {getSchemeDocs(scheme, language).slice(0, 3).join(', ')}...
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <Link
                      href={isAuthenticated ? `/schemes/${scheme.id}` : '/login'}
                      className="text-xs font-bold text-gov-blue dark:text-blue-400 hover:underline flex items-center space-x-1"
                    >
                      <span>{t('full_details', 'Full Details')}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={isAuthenticated ? `/apply/${scheme.id}` : '/login'}
                      className="px-4 py-2 bg-gradient-to-r from-gov-blue to-blue-700 text-white rounded-xl text-xs font-extrabold shadow hover:opacity-95 transition-opacity"
                    >
                      {t('apply_now', 'Apply Now')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </section>
      </main>

      <Footer />
    </div>
  );
}
