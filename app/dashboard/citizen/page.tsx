'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  User, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Award, 
  Upload, 
  Bell, 
  ShieldCheck, 
  Bookmark, 
  ArrowRight,
  Download,
  IndianRupee
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useAuth } from '@/lib/auth-context';
import { useTranslation } from '@/components/accessibility-provider';

export default function CitizenDashboardPage() {
  const { user } = useAuth();
  const { t, language } = useTranslation();
  const [activeTab, setActiveTab] = useState<'APPLICATIONS' | 'DOCUMENTS' | 'SAVED' | 'NOTIFICATIONS'>('APPLICATIONS');

  const myApplications = [
    {
      id: 'app-1',
      refNo: 'JAN-2026-891234',
      schemeName: language === 'mr' 
        ? 'प्रधानमंत्री किसान सन्मान निधी योजना (PM-KISAN)' 
        : language === 'hi' 
        ? 'प्रधानमंत्री किसान सम्मान निधि योजना (PM-KISAN)' 
        : 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
      category: 'AGRICULTURE',
      submittedDate: '28 Jul 2026',
      status: 'UNDER_REVIEW',
      statusText: language === 'mr' ? 'तहसीलदार कार्यालयाकडे प्रलंबित' : language === 'hi' ? 'तहसीलदार समीक्षाधीन' : 'Under Tehsildar Review',
      benefit: language === 'mr' ? '₹6,000 / वर्ष' : language === 'hi' ? '₹6,000 / वर्ष' : '₹6,000 / year'
    },
    {
      id: 'app-2',
      refNo: 'JAN-2026-381920',
      schemeName: language === 'mr' 
        ? 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (PM-JAY)' 
        : language === 'hi' 
        ? 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (PM-JAY)' 
        : 'Ayushman Bharat PM Jan Arogya Yojana',
      category: 'HEALTHCARE',
      submittedDate: '15 Jun 2026',
      status: 'APPROVED',
      statusText: language === 'mr' ? 'गोल्डन कार्ड तयार झाले' : language === 'hi' ? 'गोल्डन कार्ड जारी' : 'Golden Card Generated',
      benefit: language === 'mr' ? '₹5 लाख आरोग्य विमा' : language === 'hi' ? '₹5 लाख स्वास्थ्य कवर' : '₹5 Lakh Health Cover'
    }
  ];

  const myDocuments = [
    { 
      type: language === 'mr' ? 'आधार कार्ड' : language === 'hi' ? 'आधार कार्ड' : 'Aadhaar Card', 
      number: user?.aadhaarNumber || 'XXXX-XXXX-8912', 
      status: 'VERIFIED', 
      date: '2026-01-10' 
    },
    { 
      type: language === 'mr' ? 'पॅन कार्ड' : language === 'hi' ? 'पैन कार्ड' : 'PAN Card', 
      number: 'ABCPS8912K', 
      status: 'VERIFIED', 
      date: '2026-01-10' 
    },
    { 
      type: language === 'mr' ? 'उत्पन्नाचा दाखला' : language === 'hi' ? 'आय प्रमाण पत्र' : 'Income Certificate', 
      number: 'INC/MH/2026/789123', 
      status: 'VERIFIED', 
      date: '2026-01-15' 
    },
    { 
      type: language === 'mr' ? '७/१२ जमीन नोंद उतारा' : language === 'hi' ? 'खतौनी / भूमि दस्तावेज' : 'Land Records / 7/12', 
      number: 'KH-8912/2026', 
      status: 'VERIFIED', 
      date: '2026-01-20' 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg transition-colors">
      <Navbar />

      {/* Profile Header */}
      <section className="bg-slate-900 text-white py-10 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-gov-blue via-gov-saffron to-gov-green p-0.5 shadow-lg flex items-center justify-center font-black text-xl text-white">
              {user?.name ? user.name.slice(0, 2).toUpperCase() : 'RK'}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-black">{user?.name || 'Rajesh Kumar Sharma'}</h1>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>eKYC Verified</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Citizen ID: JAN-CITIZEN-981245 • {user?.district || 'Pune'}, {user?.state || 'Maharashtra'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-xs">
            <div>
              <p className="text-slate-400 font-semibold">
                {language === 'mr' ? 'मंजूर एकूण लाभ' : language === 'hi' ? 'कुल स्वीकृत लाभ' : 'Total Approved Benefit'}
              </p>
              <p className="text-lg font-black text-emerald-400">₹6,000 + Health Cover</p>
            </div>
            <div className="h-8 w-px bg-slate-700"></div>
            <div>
              <p className="text-slate-400 font-semibold">
                {language === 'mr' ? 'कर्म स्कोअर' : language === 'hi' ? 'कर्म स्कोर' : 'Citizen Karma Score'}
              </p>
              <p className="text-lg font-black text-amber-400">950 Points</p>
            </div>
          </div>

        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full space-y-6">
        
        {/* Navigation Tabs */}
        <div className="flex space-x-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          {[
            { id: 'APPLICATIONS', label: t('dash_tab_apps', 'My Applications'), icon: FileText },
            { id: 'DOCUMENTS', label: t('dash_tab_docs', 'AI Document Vault'), icon: ShieldCheck },
            { id: 'SAVED', label: t('dash_tab_saved', 'Saved Schemes'), icon: Bookmark },
            { id: 'NOTIFICATIONS', label: t('dash_tab_alerts', 'Smart Alerts'), icon: Bell }
          ].map((tab) => {
            const IconComp = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-2 transition-all ${
                  isSelected
                    ? 'bg-gov-blue text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Applications */}
        {activeTab === 'APPLICATIONS' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-black text-slate-900 dark:text-white">
                {language === 'mr' ? 'माझे सक्रिय अर्ज' : language === 'hi' ? 'मेरे सक्रिय आवेदन' : 'Active Applications'} ({myApplications.length})
              </h2>
              <Link
                href="/schemes"
                className="px-4 py-2 bg-gov-blue text-white rounded-xl text-xs font-bold shadow hover:bg-blue-700 flex items-center space-x-1"
              >
                <span>{t('hero_btn_explore', 'Apply for New Scheme')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {myApplications.map((app) => (
                <div
                  key={app.id}
                  className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono font-bold text-gov-blue dark:text-blue-400">
                      {app.refNo}
                    </span>
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${
                      app.status === 'APPROVED' 
                        ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' 
                        : 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                    }`}>
                      {app.statusText}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                    {app.schemeName}
                  </h3>

                  <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500">{t('max_benefit_label', 'Estimated Benefit:')}</span>
                    <span className="font-black text-emerald-600 dark:text-emerald-400">{app.benefit}</span>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 text-xs">
                    <span className="text-slate-400">
                      {language === 'mr' ? 'सादर दिनांक:' : language === 'hi' ? 'जमा करने की तिथि:' : 'Submitted:'} {app.submittedDate}
                    </span>
                    <Link
                      href="/track"
                      className="font-bold text-gov-blue dark:text-blue-400 hover:underline flex items-center space-x-1"
                    >
                      <span>{t('track_btn', 'Track Status')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Documents */}
        {activeTab === 'DOCUMENTS' && (
          <div className="space-y-4">
            <h2 className="text-lg font-black text-slate-900 dark:text-white">
              {language === 'mr' ? 'डिजिलॉकर सत्यापित कागदपत्रे' : language === 'hi' ? 'डिजिलॉकर सत्यापित दस्तावेज़' : 'DigiLocker Verified Documents'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {myDocuments.map((doc, idx) => (
                <div key={idx} className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
                  <div className="flex justify-between items-center">
                    <ShieldCheck className="w-6 h-6 text-emerald-500" />
                    <span className="text-[10px] font-extrabold px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded">
                      VERIFIED
                    </span>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">{doc.type}</h4>
                  <p className="text-xs font-mono font-bold text-slate-400">{doc.number}</p>
                  <p className="text-[10px] text-slate-400">Linked: {doc.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
