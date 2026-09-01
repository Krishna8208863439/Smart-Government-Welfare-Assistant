'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  IndianRupee, 
  Building2, 
  Phone, 
  Mail, 
  Send,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useTranslation } from '@/components/accessibility-provider';

export default function TrackApplicationPage() {
  const { t, language } = useTranslation();
  const [appNo, setAppNo] = useState('JAN-2026-891234');
  const [searched, setSearched] = useState(true);

  const mockTrackData = {
    applicationNo: 'JAN-2026-891234',
    schemeTitle: language === 'mr' 
      ? 'प्रधानमंत्री किसान सन्मान निधी योजना (PM-KISAN)' 
      : language === 'hi' 
      ? 'प्रधानमंत्री किसान सम्मान निधि योजना (PM-KISAN)' 
      : 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    applicantName: 'Rajesh Kumar Sharma (राजेश कुमार शर्मा)',
    aadhaarHash: 'XXXX-XXXX-8912',
    submittedAt: '2026-07-28 14:30 IST',
    currentStatus: language === 'mr' ? 'नोडल अधिकारी पुनरावलोकन' : language === 'hi' ? 'नोडल समीक्षाधीन' : 'Under Nodal Review',
    benefitAmount: language === 'mr' ? '₹6,000 / वर्ष थेट बँक वाटप' : language === 'hi' ? '₹6,000 / वर्ष प्रत्यक्ष अंतरण' : '₹6,000 / year direct transfer',
    district: language === 'mr' ? 'पुणे, महाराष्ट्र' : language === 'hi' ? 'गौतम बुद्ध नगर, उत्तर प्रदेश' : 'Pune, Maharashtra',
    timeline: [
      { 
        step: language === 'mr' ? 'अर्ज यशस्वीपणे सादर' : language === 'hi' ? 'आवेदन सफलतापूर्वक जमा' : 'Application Submitted', 
        date: '28 Jul 2026, 02:30 PM', 
        done: true, 
        remarks: language === 'mr' ? 'सत्यापित ई-केवायसी सह जनसहाय एआय द्वारे सादर' : language === 'hi' ? 'जनसहाय एआई पोर्टल के माध्यम से ई-केवाईसी सत्यापित' : 'Submitted via JanSahay AI Portal with Verified eKYC' 
      },
      { 
        step: language === 'mr' ? 'कागदपत्रे एआय ओसीआर पडताळणी' : language === 'hi' ? 'दस्तावेज़ एआई ओसीआर सत्यापन' : 'AI Document OCR Audit', 
        date: '28 Jul 2026, 02:32 PM', 
        done: true, 
        remarks: language === 'mr' ? 'आधार, ७/१२ आणि बँक पासबुक ९८% अचूकतेसह मंजूर' : language === 'hi' ? 'आधार, खतौनी और बैंक पासबुक 98% सटीकता से सत्यापित' : 'Aadhaar, Land Records, and Passbook verified with 98% confidence' 
      },
      { 
        step: language === 'mr' ? 'जिल्हा नोडल अधिकारी तपासणी' : language === 'hi' ? 'जिला नोडल अधिकारी समीक्षा' : 'District Nodal Officer Review', 
        date: '29 Jul 2026, 11:15 AM', 
        done: true, 
        remarks: language === 'mr' ? 'तहसीलदार कार्यालयाकडे तपासणीसाठी सोपवले' : language === 'hi' ? 'तहसीलदार कार्यालय को प्रेषित' : 'Assigned to Tehsildar Office for field report' 
      },
      { 
        step: language === 'mr' ? 'अंतिम मंजुरी व डीबीटी जमा' : language === 'hi' ? 'अंतिम स्वीकृति एवं डीबीटी क्रेडिट' : 'Final Sanction & DBT Credit', 
        date: language === 'mr' ? 'अंदाजे: ०२ ऑगस्ट २०२६' : language === 'hi' ? 'अनुमानित: 02 अगस्त 2026' : 'Estimated: 02 Aug 2026', 
        done: false, 
        remarks: language === 'mr' ? 'तिजोरी मंजुरीनंतर थेट बँक खात्यात रक्कम जमा होईल' : language === 'hi' ? 'कोषागार अनुमोदन के बाद सीधे बैंक खाते में भुगतान' : 'Direct Benefit Transfer pending Treasury Approval' 
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg transition-colors">
      <Navbar />

      {/* Header Search */}
      <section className="bg-gradient-to-r from-gov-darkBg via-slate-900 to-gov-darkBg text-white py-12 px-4 border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <span className="bg-gov-blue/20 text-gov-blue dark:text-blue-400 font-extrabold text-xs px-3 py-1 rounded-full border border-blue-500/30">
            {language === 'mr' ? 'थेट रिअल-टाइम ट्रॅकर' : language === 'hi' ? 'लाइव रीयल-टाइम ट्रैकर' : 'Real-Time Public Tracker'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            {t('track_title', 'Track Application Status in Real-Time')}
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            {t('track_subtitle', 'Enter your 12-digit Application Reference Number or registered Mobile/Aadhaar to inspect nodal verification stages.')}
          </p>

          <div className="pt-2 max-w-xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder={language === 'mr' ? 'उदा. JAN-2026-891234' : language === 'hi' ? 'उदा. JAN-2026-891234' : 'Enter Ref No (e.g. JAN-2026-891234)'}
                value={appNo}
                onChange={(e) => setAppNo(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-800 text-white rounded-xl border border-slate-700 font-mono font-bold text-sm outline-none focus:border-gov-blue"
              />
            </div>
            <button
              onClick={() => setSearched(true)}
              className="px-6 py-3 bg-gov-blue text-white rounded-xl font-bold text-sm shadow hover:bg-blue-700 transition-colors"
            >
              {t('track_btn', 'Track Status')}
            </button>
          </div>
        </div>
      </section>

      {searched && (
        <main className="max-w-5xl mx-auto px-4 py-8 flex-1 w-full space-y-8">
          
          {/* Main Status Header Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 dark:border-slate-800 pb-4 gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-gov-blue">Ref: {mockTrackData.applicationNo}</span>
                <h2 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  {mockTrackData.schemeTitle}
                </h2>
                <p className="text-xs text-slate-500">
                  {t('track_applicant_name', 'Applicant Name')}: <strong className="text-slate-700 dark:text-slate-300">{mockTrackData.applicantName}</strong> ({mockTrackData.aadhaarHash})
                </p>
              </div>

              <div className="bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-2 rounded-xl border border-amber-500/20 text-xs font-extrabold flex items-center space-x-2">
                <Clock className="w-4 h-4 animate-spin" />
                <span>Status: {mockTrackData.currentStatus}</span>
              </div>
            </div>

            {/* Timeline View */}
            <div className="space-y-6">
              <h3 className="font-extrabold text-sm text-slate-800 dark:text-slate-200">
                {language === 'mr' ? 'पडताळणी प्रगती टप्पे' : language === 'hi' ? 'सत्यापन प्रगति चरण' : 'Verification Stages'}
              </h3>

              <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
                {mockTrackData.timeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    <div
                      className={`absolute -left-[31px] top-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        item.done
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-300 dark:bg-slate-700 text-slate-500'
                      }`}
                    >
                      {item.done ? '✓' : idx + 1}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-sm text-slate-900 dark:text-white">{item.step}</p>
                        <span className="text-[11px] font-mono text-slate-400">{item.date}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.remarks}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefit Box */}
            <div className="p-4 bg-emerald-500/10 dark:bg-emerald-950/30 rounded-2xl border border-emerald-500/20 flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  {language === 'mr' ? 'मंजूर आर्थिक लाभ' : language === 'hi' ? 'स्वीकृत वित्तीय लाभ' : 'Sanctioned Welfare Benefit'}
                </p>
                <p className="text-lg font-black text-emerald-600 dark:text-emerald-400">{mockTrackData.benefitAmount}</p>
              </div>
              <span className="text-xs text-slate-500 font-semibold">{mockTrackData.district}</span>
            </div>

          </div>

        </main>
      )}

      <Footer />
    </div>
  );
}
