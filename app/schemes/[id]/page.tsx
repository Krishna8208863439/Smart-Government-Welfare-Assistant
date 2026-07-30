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
  HelpCircle, 
  Zap, 
  Layers,
  Award
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SCHEMES_DATABASE } from '@/lib/schemes-data';

export default function SchemeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const schemeId = params?.id as string;

  const scheme = SCHEMES_DATABASE.find((s) => s.id === schemeId) || SCHEMES_DATABASE[0];

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg">
      <Navbar />

      {/* Top Navigation */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-gov-blue"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Scheme Directory</span>
          </button>
          <span className="text-xs font-mono font-bold text-slate-400">Scheme Ref: {scheme.code}</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full space-y-8">
        
        {/* Banner Section */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-gov-blue text-white rounded-md text-xs font-bold">
                {scheme.level} Scheme
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
              {scheme.title}
            </h1>
            {scheme.hindiTitle && (
              <p className="text-sm font-semibold text-gov-saffron">{scheme.hindiTitle}</p>
            )}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
              {scheme.description}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/20">
              <p className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">Maximum Benefit</p>
              <p className="text-xl font-black text-emerald-600 dark:text-emerald-400">{scheme.maxBenefit}</p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-500/10 dark:bg-blue-950/40 border border-blue-500/20">
              <p className="text-xs text-blue-700 dark:text-blue-300 font-semibold">Benefit Type</p>
              <p className="text-lg font-bold text-gov-blue dark:text-blue-400">{scheme.benefitType}</p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/20">
              <p className="text-xs text-purple-700 dark:text-purple-300 font-semibold">Ministry / Dept</p>
              <p className="text-xs font-bold text-purple-900 dark:text-purple-300 line-clamp-2">{scheme.department}</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link
              href={`/apply/${scheme.id}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-gov-blue to-blue-700 text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all text-center flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5 text-amber-300" />
              <span>Apply Online via AI Auto-Fill</span>
            </Link>

            <Link
              href="/eligibility"
              className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-bold text-sm rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-center flex items-center justify-center space-x-2"
            >
              <ShieldCheck className="w-5 h-5 text-gov-saffron" />
              <span>Check My Eligibility Score</span>
            </Link>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Eligibility Requirements */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Eligibility Criteria</span>
              </h3>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {scheme.eligibility.minAge && (
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-gov-blue"></span>
                    <span><strong>Age Limit:</strong> Must be between {scheme.eligibility.minAge} and {scheme.eligibility.maxAge || 75} years.</span>
                  </li>
                )}
                {scheme.eligibility.maxIncome && (
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-gov-blue"></span>
                    <span><strong>Annual Family Income:</strong> Must not exceed ₹{scheme.eligibility.maxIncome.toLocaleString()} per year.</span>
                  </li>
                )}
                {scheme.eligibility.requiresFarmer && (
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-gov-blue"></span>
                    <span><strong>Occupation:</strong> Must be a landholding farmer family with valid land records.</span>
                  </li>
                )}
                {scheme.eligibility.requiresStudent && (
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-gov-blue"></span>
                    <span><strong>Enrolment:</strong> Must be enrolled in a recognized school, ITI, college, or university.</span>
                  </li>
                )}
                {scheme.eligibility.gender && (
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-gov-blue"></span>
                    <span><strong>Gender:</strong> Applicable for {scheme.eligibility.gender} citizens.</span>
                  </li>
                )}
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-gov-blue"></span>
                  <span><strong>Citizenship:</strong> Must be a permanent Indian citizen resident.</span>
                </li>
              </ul>
            </div>

            {/* Application Workflow */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white flex items-center space-x-2">
                <FileText className="w-5 h-5 text-gov-saffron" />
                <span>Step-by-Step Application Steps</span>
              </h3>

              <div className="space-y-4">
                {scheme.applicationSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="w-7 h-7 rounded-lg bg-gov-blue text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar: Required Docs & Department Contacts */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Required Documents Checklist */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                <Award className="w-5 h-5 text-purple-500" />
                <span>Required Documents</span>
              </h3>

              <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                {scheme.requiredDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-center space-x-2 p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Department Helpdesk */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-gov-blue" />
                <span>Department Nodal Office</span>
              </h3>

              <div className="text-xs space-y-2 text-slate-600 dark:text-slate-300">
                <p><strong>Ministry:</strong> {scheme.ministry}</p>
                <div className="flex items-center space-x-2 pt-1">
                  <Mail className="w-4 h-4 text-gov-blue" />
                  <span className="font-mono text-gov-blue">{scheme.contactEmail}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gov-saffron" />
                  <span className="font-mono font-bold text-slate-900 dark:text-white">{scheme.contactPhone}</span>
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
