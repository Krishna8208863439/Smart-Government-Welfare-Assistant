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
  TrendingUp,
  Download,
  IndianRupee
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function CitizenDashboardPage() {
  const [activeTab, setActiveTab] = useState<'APPLICATIONS' | 'DOCUMENTS' | 'SAVED' | 'NOTIFICATIONS'>('APPLICATIONS');

  const myApplications = [
    {
      id: 'app-1',
      refNo: 'JAN-2026-891234',
      schemeName: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
      category: 'AGRICULTURE',
      submittedDate: '28 Jul 2026',
      status: 'UNDER_REVIEW',
      statusText: 'Under Tehsildar Review',
      benefit: '₹6,000 / year'
    },
    {
      id: 'app-2',
      refNo: 'JAN-2026-381920',
      schemeName: 'Ayushman Bharat PM Jan Arogya Yojana',
      category: 'HEALTHCARE',
      submittedDate: '15 Jun 2026',
      status: 'APPROVED',
      statusText: 'Golden Card Generated',
      benefit: '₹5 Lakh Health Cover'
    }
  ];

  const myDocuments = [
    { type: 'Aadhaar Card', number: 'XXXX-XXXX-8912', status: 'VERIFIED', date: '2026-01-10' },
    { type: 'PAN Card', number: 'ABCPS8912K', status: 'VERIFIED', date: '2026-01-10' },
    { type: 'Income Certificate', number: 'INC/UP/2026/789123', status: 'VERIFIED', date: '2026-01-15' },
    { type: 'Land Khatoni Record', number: 'KH-8912/2026', status: 'VERIFIED', date: '2026-01-20' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg">
      <Navbar />

      {/* Profile Header */}
      <section className="bg-slate-900 text-white py-10 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-gov-blue via-gov-saffron to-gov-green p-0.5 shadow-lg flex items-center justify-center font-black text-xl text-white">
              RK
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-black">Rajesh Kumar Sharma</h1>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>eKYC Verified</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Citizen ID: JAN-CITIZEN-981245 • NOIDA, Gautam Buddha Nagar, Uttar Pradesh
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-xs">
            <div>
              <p className="text-slate-400 font-semibold">Total Approved Benefit</p>
              <p className="text-lg font-black text-emerald-400">₹6,000 + Health Cover</p>
            </div>
            <div className="h-8 w-px bg-slate-700"></div>
            <div>
              <p className="text-slate-400 font-semibold">Citizen Karma Score</p>
              <p className="text-lg font-black text-amber-400">950 Points</p>
            </div>
          </div>

        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full space-y-6">
        
        {/* Navigation Tabs */}
        <div className="flex space-x-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          {[
            { id: 'APPLICATIONS', label: 'My Applications', icon: FileText },
            { id: 'DOCUMENTS', label: 'AI Document Vault', icon: Upload },
            { id: 'SAVED', label: 'Saved Schemes', icon: Bookmark },
            { id: 'NOTIFICATIONS', label: 'Smart Alerts', icon: Bell }
          ].map((tab) => {
            const IconComp = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-gov-blue text-white shadow'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'APPLICATIONS' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">Active Application Lifecycle</h3>
              <Link href="/eligibility" className="px-4 py-2 bg-gov-blue text-white rounded-xl text-xs font-bold shadow">
                Apply for New Scheme
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {myApplications.map((app) => (
                <div key={app.id} className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-md">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono font-bold text-gov-blue">{app.refNo}</span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                        app.status === 'APPROVED'
                          ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                      }`}
                    >
                      {app.statusText}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white">{app.schemeName}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Submitted on: {app.submittedDate}</p>
                  </div>

                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-500">Expected Benefit:</span>
                    <span className="text-emerald-600 font-bold">{app.benefit}</span>
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <Link href="/track" className="text-xs font-bold text-gov-blue hover:underline">
                      View Audit Log
                    </Link>
                    <button className="text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center space-x-1">
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Receipt</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'DOCUMENTS' && (
          <div className="space-y-4">
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">DigiLocker Verified Document Vault</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {myDocuments.map((doc, idx) => (
                <div key={idx} className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex justify-between items-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded">
                      {doc.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{doc.type}</h4>
                  <p className="text-xs font-mono text-slate-500">{doc.number}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'SAVED' && (
          <div className="glass-panel p-8 rounded-2xl text-center text-slate-500 space-y-2">
            <Bookmark className="w-8 h-8 mx-auto text-gov-saffron" />
            <p className="font-bold text-sm">No Bookmarked Schemes</p>
            <p className="text-xs">Browse the Scheme Catalog to save schemes for future reference.</p>
          </div>
        )}

        {activeTab === 'NOTIFICATIONS' && (
          <div className="space-y-3">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs flex justify-between items-center">
              <div>
                <p className="font-bold text-slate-900 dark:text-white">PM-KISAN Installment Released</p>
                <p className="text-slate-500">₹2,000 transferred to SBI Bank A/C ending in 8371.</p>
              </div>
              <span className="text-[10px] text-slate-400">28 Jul</span>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
