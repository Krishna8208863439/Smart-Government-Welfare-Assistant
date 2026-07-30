'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  SlidersHorizontal, 
  Filter, 
  ChevronRight, 
  Layers, 
  IndianRupee, 
  CheckCircle2, 
  Building2, 
  FileText, 
  Sparkles,
  ArrowUpDown,
  BookOpen
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SCHEMES_DATABASE, SCHEME_CATEGORIES, Scheme } from '@/lib/schemes-data';

export default function SchemesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  const [benefitType, setBenefitType] = useState<string>('ALL');

  const filteredSchemes = useMemo(() => {
    return SCHEMES_DATABASE.filter((scheme) => {
      // Keyword search
      const matchesSearch = 
        scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (scheme.hindiTitle && scheme.hindiTitle.includes(searchTerm));

      // Category filter
      const matchesCat = selectedCategory === 'ALL' || scheme.category === selectedCategory;

      // Level filter
      const matchesLevel = selectedLevel === 'ALL' || scheme.level === selectedLevel;

      // Benefit filter
      const matchesBenefit = benefitType === 'ALL' || scheme.benefitType === benefitType;

      return matchesSearch && matchesCat && matchesLevel && matchesBenefit;
    });
  }, [searchTerm, selectedCategory, selectedLevel, benefitType]);

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gov-darkBg via-slate-900 to-gov-darkBg text-white py-12 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Central & State Scheme Directory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Discover Government Welfare Schemes
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Browse verified welfare schemes across Central and State ministries. Filter by eligibility criteria, department, or financial benefit type.
          </p>

          {/* Search Bar */}
          <div className="pt-2 max-w-3xl">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search scheme name, department, PM-KISAN, Ayushman Bharat..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/90 text-white rounded-xl border border-slate-700 focus:outline-none focus:border-gov-blue text-sm shadow-inner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog & Sidebar */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Filter Sidebar */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="font-extrabold text-sm flex items-center space-x-2 text-slate-900 dark:text-white">
                <SlidersHorizontal className="w-4 h-4 text-gov-blue" />
                <span>Filters</span>
              </span>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('ALL');
                  setSelectedLevel('ALL');
                  setBenefitType('ALL');
                }}
                className="text-xs text-gov-blue hover:underline font-semibold"
              >
                Reset All
              </button>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Government Level
              </label>
              <div className="space-y-1.5">
                {['ALL', 'Central', 'State'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                      selectedLevel === lvl
                        ? 'bg-gov-blue text-white font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{lvl === 'ALL' ? 'All Government Levels' : lvl}</span>
                    {selectedLevel === lvl && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Sector / Category
              </label>
              <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                <button
                  onClick={() => setSelectedCategory('ALL')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    selectedCategory === 'ALL'
                      ? 'bg-gov-blue text-white font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  All Categories ({SCHEMES_DATABASE.length})
                </button>
                {SCHEME_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-gov-blue text-white font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Benefit Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Benefit Type
              </label>
              <select
                value={benefitType}
                onChange={(e) => setBenefitType(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold rounded-lg p-2 text-slate-800 dark:text-white"
              >
                <option value="ALL">All Benefit Types</option>
                <option value="Financial Assistance">Financial Assistance</option>
                <option value="Insurance">Insurance Cover</option>
                <option value="Subsidy">Subsidy</option>
              </select>
            </div>

          </div>
        </aside>

        {/* Right Content Grid */}
        <section className="lg:col-span-9 space-y-4">
          <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-500 font-medium">
            <span>Showing <strong className="text-slate-900 dark:text-white">{filteredSchemes.length}</strong> active schemes</span>
            <span className="flex items-center space-x-1">
              <Building2 className="w-3.5 h-3.5 text-gov-blue" />
              <span>Verified Govt Sources</span>
            </span>
          </div>

          {filteredSchemes.length === 0 ? (
            <div className="glass-panel p-12 rounded-2xl text-center space-y-3">
              <Search className="w-10 h-10 text-slate-400 mx-auto" />
              <p className="font-bold text-base text-slate-800 dark:text-white">No Schemes Found</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No schemes match your current filter parameters. Try clearing your search keyword or resetting filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSchemes.map((scheme) => (
                <div
                  key={scheme.id}
                  className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-md bg-gov-blue/10 text-gov-blue dark:bg-blue-950 dark:text-blue-300">
                        {scheme.level} • {scheme.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 font-bold">{scheme.code}</span>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-base text-slate-900 dark:text-white line-clamp-1">
                        {scheme.title}
                      </h3>
                      {scheme.hindiTitle && (
                        <p className="text-xs text-slate-500 font-medium">{scheme.hindiTitle}</p>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {scheme.shortDescription}
                    </p>

                    <div className="bg-emerald-500/10 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/20 flex items-center justify-between">
                      <span className="text-xs text-emerald-800 dark:text-emerald-300 font-bold">Max Benefit:</span>
                      <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">{scheme.maxBenefit}</span>
                    </div>

                    <div className="text-[11px] text-slate-500 space-y-1 pt-1">
                      <p><strong>Department:</strong> {scheme.department}</p>
                      <p><strong>Required Docs:</strong> {scheme.requiredDocs.slice(0, 3).join(', ')}...</p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <Link
                      href={`/schemes/${scheme.id}`}
                      className="text-xs font-bold text-gov-blue dark:text-blue-400 hover:underline flex items-center space-x-1"
                    >
                      <span>Full Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/apply/${scheme.id}`}
                      className="px-4 py-2 bg-gradient-to-r from-gov-blue to-blue-700 text-white rounded-lg text-xs font-extrabold shadow hover:opacity-95 transition-opacity"
                    >
                      Apply Now
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
