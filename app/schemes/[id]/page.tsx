'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  IndianRupee, 
  ShieldCheck, 
  Building2, 
  Calendar, 
  Phone, 
  Mail, 
  Zap
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { 
  SCHEMES_DATABASE, 
  getSchemeTitle, 
  getSchemeDesc, 
  getSchemeBenefit, 
  getSchemeDept, 
  getSchemeDocs 
} from '@/lib/schemes-data';
import { useTranslation } from '@/components/accessibility-provider';
import { useAuth } from '@/lib/auth-context';

export default function SchemeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { t, language } = useTranslation();
  const { isAuthenticated } = useAuth();
  const schemeId = params?.id as string;

  const scheme = SCHEMES_DATABASE.find((s) => s.id === schemeId) || SCHEMES_DATABASE[0];

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg transition-colors">
      <Navbar />

      {/* Top Navigation */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-gov-blue"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {language === 'mr' ? 'मागे जा (सर्व योजना)' : language === 'hi' ? 'वापस जाएं (सभी योजनाएं)' : 'Back to Scheme Directory'}
            </span>
          </button>
          <span className="text-xs font-mono font-bold text-slate-400">Scheme Code: {scheme.code}</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full space-y-8">
        
        {/* Banner Section */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-gov-blue text-white rounded-md text-xs font-bold">
                {scheme.level === 'Central' ? t('filter_level_central', 'Central') : t('filter_level_state', 'State')}
              </span>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-md text-xs font-bold border border-emerald-500/20">
                {scheme.category}
              </span>
            </div>
            <span className="text-xs font-semibold text-slate-500 flex items-center space-x-1">
              <Calendar className="w-4 h-4 text-gov-saffron" />
              <span>Deadline: {scheme.deadline || 'Ongoing'}</span>
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {getSchemeTitle(scheme, language)}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
              {getSchemeDesc(scheme, language)}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/20">
              <p className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">{t('max_benefit_label', 'Maximum Benefit')}</p>
              <p className="text-xl font-black text-emerald-600 dark:text-emerald-400">{getSchemeBenefit(scheme, language)}</p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-500/10 dark:bg-blue-950/40 border border-blue-500/20">
              <p className="text-xs text-blue-700 dark:text-blue-300 font-semibold">{t('filter_benefit_type', 'Benefit Type')}</p>
              <p className="text-lg font-bold text-gov-blue dark:text-blue-400">{scheme.benefitType}</p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/20">
              <p className="text-xs text-purple-700 dark:text-purple-300 font-semibold">{t('department_label', 'Ministry / Dept')}</p>
              <p className="text-xs font-bold text-purple-900 dark:text-purple-300 line-clamp-2">{getSchemeDept(scheme, language)}</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link
              href={isAuthenticated ? `/apply/${scheme.id}` : '/login'}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-gov-blue to-blue-700 text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all text-center flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5 text-amber-300" />
              <span>{t('apply_now', 'Apply Online via AI Auto-Fill')}</span>
            </Link>

            <Link
              href="/eligibility"
              className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-bold text-sm rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-center flex items-center justify-center space-x-2"
            >
              <ShieldCheck className="w-5 h-5 text-gov-saffron" />
              <span>{t('hero_btn_eligibility', 'Check My Eligibility Score')}</span>
            </Link>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Required Documents & Application Steps */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Required Documents */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white flex items-center space-x-2">
                <FileText className="w-5 h-5 text-gov-blue" />
                <span>{t('required_docs_label', 'Required Verification Documents')}</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {getSchemeDocs(scheme, language).map((doc, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Steps */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                {language === 'mr' ? 'अर्ज कसा करावा (पायऱ्या)' : language === 'hi' ? 'आवेदन कैसे करें (चरण)' : 'How to Apply (Step-by-Step)'}
              </h3>

              <div className="space-y-3">
                {scheme.applicationSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs">
                    <div className="w-6 h-6 rounded-full bg-gov-blue text-white font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Official Contact & Ministry Desk */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-gov-blue" />
                <span>{language === 'mr' ? 'अधिकृत संपर्क डेस्क' : language === 'hi' ? 'आधिकारिक सहायता डेस्क' : 'Official Help Desk'}</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span className="font-bold">{scheme.contactPhone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gov-blue" />
                  <span className="font-bold">{scheme.contactEmail}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
