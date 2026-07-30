'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  IndianRupee, 
  FileCheck2, 
  Bot, 
  ChevronRight, 
  Zap, 
  Smartphone, 
  Building2,
  Award,
  HelpCircle,
  Clock,
  Layers,
  Heart,
  FileText
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { IndiaMapVisualizer } from '@/components/landing/india-map-visualizer';
import { SCHEME_CATEGORIES, SCHEMES_DATABASE } from '@/lib/schemes-data';

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const stats = [
    { label: 'Active Schemes Registered', value: '1,450+', icon: Layers, color: 'text-gov-blue' },
    { label: 'Total Benefits Disbursed', value: '₹2.84 Lakh Cr', icon: IndianRupee, color: 'text-emerald-500' },
    { label: 'Applications Processed', value: '14.8 Crore+', icon: FileCheck2, color: 'text-gov-saffron' },
    { label: 'Success Match Rate', value: '99.4%', icon: Award, color: 'text-purple-500' }
  ];

  const faqs = [
    {
      q: 'How does JanSahay AI match me with government schemes?',
      a: 'JanSahay AI uses advanced NLP and rule-based similarity engines to evaluate your age, income, occupation, location, and social category against 1,000+ central and state scheme guidelines in real-time, giving you an exact match score.'
    },
    {
      q: 'Is my Aadhaar and personal document data secure?',
      a: 'Yes, absolutely. JanSahay AI uses AES-256 bank-grade encryption, follows MeitY cybersecurity directives, and integrates with official DigiLocker sandboxes. Your raw document files are never sold or shared with unauthorized third parties.'
    },
    {
      q: 'Can I apply for schemes directly through JanSahay AI?',
      a: 'Yes! The step-by-step Application Wizard allows you to upload documents, auto-fill verified forms via OCR, and submit applications directly to department portals without visiting physical offices or paying middlemen.'
    },
    {
      q: 'Does JanSahay AI support regional Indian languages?',
      a: 'JanSahay AI supports 12 major Indian languages including Hindi, English, Marathi, Gujarati, Tamil, Telugu, Kannada, Malayalam, Bengali, Punjabi, Odia, and Urdu both in text and voice interface.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg transition-colors">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gov-blue/10 dark:bg-blue-950/60 border border-gov-blue/20 text-gov-blue dark:text-blue-400 text-xs font-extrabold shadow-sm">
              <Sparkles className="w-4 h-4 text-gov-saffron animate-spin" />
              <span>Project Viksit Bharat 2026 • AI-Powered Public Welfare Engine</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Find Every Government Scheme You're{' '}
              <span className="bg-gradient-to-r from-gov-blue via-gov-saffron to-gov-green bg-clip-text text-transparent">
                Eligible For
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              Discover central, state, and local government schemes in minutes using AI. Eliminate confusion, paperwork, and middlemen with instant eligibility checking and automated application filling.
            </p>

            {/* Quick Hero Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/eligibility"
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-gov-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-base rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <Zap className="w-5 h-5 text-amber-300" />
                <span>Check Eligibility Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/schemes"
                className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-bold text-base rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all flex items-center justify-center space-x-2"
              >
                <Search className="w-5 h-5 text-gov-blue" />
                <span>Explore Schemes</span>
              </Link>

              <Link
                href="/ai-assistant"
                className="w-full sm:w-auto px-6 py-3.5 bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold text-base rounded-xl border border-amber-500/30 hover:bg-amber-500/20 shadow-sm transition-all flex items-center justify-center space-x-2"
              >
                <Bot className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>Talk to AI Assistant</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>MeitY Standard Certified</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>No Middlemen / Zero Fee</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>12 Indian Languages</span>
              </span>
            </div>

          </div>

          {/* Right Column: India Interactive Map Visualizer */}
          <div className="lg:col-span-5 relative">
            <IndiaMapVisualizer />
          </div>

        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/50 flex items-center space-x-4 shadow-sm">
                <div className={`p-3 rounded-xl bg-white dark:bg-slate-900 shadow ${stat.color}`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{stat.value}</p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Popular Scheme Categories Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-gov-saffron font-bold text-xs tracking-wider uppercase">Government Categories</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Explore Welfare Categories</h2>
          </div>
          <Link href="/schemes" className="inline-flex items-center space-x-1 text-gov-blue dark:text-blue-400 font-bold text-sm hover:underline mt-2 md:mt-0">
            <span>View All 18+ Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SCHEME_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/schemes?cat=${cat.id}`}
              className="group glass-panel p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-gov-blue dark:hover:border-blue-500 hover:shadow-lg transition-all flex flex-col items-center text-center space-y-3"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-transform group-hover:scale-110 ${cat.color}`}>
                <FileText className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-gov-blue dark:group-hover:text-blue-400 transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Government Schemes */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold text-xs px-3 py-1 rounded-full uppercase border border-emerald-500/20">
              National Priority Schemes
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-3">Popular Government Flagship Schemes</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Discover active central and state welfare initiatives with high beneficiary payouts and direct bank transfer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCHEMES_DATABASE.slice(0, 6).map((scheme) => (
              <div
                key={scheme.id}
                className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-gov-blue/10 text-gov-blue dark:bg-blue-900/40 dark:text-blue-300">
                      {scheme.level} • {scheme.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400">{scheme.code}</span>
                  </div>

                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white line-clamp-1">
                    {scheme.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {scheme.shortDescription}
                  </p>

                  <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Benefit:</span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{scheme.maxBenefit}</span>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    href={`/schemes/${scheme.id}`}
                    className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-gov-blue dark:hover:text-blue-400 flex items-center space-x-1"
                  >
                    <span>Read Requirements</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/apply/${scheme.id}`}
                    className="px-3.5 py-1.5 bg-gov-blue text-white rounded-lg text-xs font-bold shadow hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How JanSahay AI Works - Flowchart */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gov-saffron font-bold text-xs uppercase tracking-wider">Simple 4-Step Process</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">How JanSahay AI Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass-panel p-6 rounded-2xl text-center space-y-3 border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-gov-blue text-white font-black text-xl flex items-center justify-center mx-auto shadow-md">
              1
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">Enter Profile Info</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Provide basic age, income, occupation, and state location details via our quick questionnaire.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center space-y-3 border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-gov-saffron text-white font-black text-xl flex items-center justify-center mx-auto shadow-md">
              2
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">AI Scans 1,000+ Schemes</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Our similarity algorithm instantly checks criteria and generates your percentage match score.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center space-y-3 border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-gov-green text-white font-black text-xl flex items-center justify-center mx-auto shadow-md">
              3
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">AI OCR Auto-Fill</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Upload Aadhaar/PAN cards. Our vision model extracts details and auto-fills application forms.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center space-y-3 border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white font-black text-xl flex items-center justify-center mx-auto shadow-md">
              4
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">Real-Time Status Track</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Receive direct SMS updates and track verification stages from department officer review to DBT credit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <HelpCircle className="w-10 h-10 text-gov-blue mx-auto mb-2" />
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Clear answers regarding welfare discovery, document security, and application processing.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 dark:text-white flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-90 text-gov-blue' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 pt-0 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
