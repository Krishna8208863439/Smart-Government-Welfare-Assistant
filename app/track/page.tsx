'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  FileText, 
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

export default function TrackApplicationPage() {
  const [appNo, setAppNo] = useState('JAN-2026-891234');
  const [searched, setSearched] = useState(true);

  const mockTrackData = {
    applicationNo: 'JAN-2026-891234',
    schemeTitle: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    applicantName: 'Rajesh Kumar Sharma',
    aadhaarHash: 'XXXX-XXXX-8912',
    submittedAt: '2026-07-28 14:30 IST',
    currentStatus: 'UNDER_REVIEW', // SUBMITTED, VERIFIED, UNDER_REVIEW, APPROVED, COMPLETED
    benefitAmount: '₹6,000 / year direct transfer',
    district: 'Gautam Buddha Nagar, Uttar Pradesh',
    timeline: [
      { step: 'Application Submitted', date: '28 Jul 2026, 02:30 PM', done: true, remarks: 'Submitted via JanSahay AI Portal with Verified eKYC' },
      { step: 'AI Document OCR Audit', date: '28 Jul 2026, 02:32 PM', done: true, remarks: 'Aadhaar, Land Khatoni, and SBI Passbook verified with 98% confidence' },
      { step: 'District Nodal Officer Review', date: '29 Jul 2026, 11:15 AM', done: true, remarks: 'Assigned to Tehsildar Office (Gautam Buddha Nagar)' },
      { step: 'Final Sanction & DBT Credit', date: 'Estimated: 02 Aug 2026', done: false, remarks: 'Direct Benefit Transfer pending Treasury Approval' }
    ],
    notifications: [
      { type: 'SMS', to: '+91 98765 43210', text: 'JanSahay AI: Your application JAN-2026-891234 for PM-KISAN has been successfully forwarded to Tehsildar Office.', time: '28 Jul 14:31' },
      { type: 'EMAIL', to: 'rajesh.sharma@example.com', text: 'Notification: Document OCR verification completed cleanly.', time: '28 Jul 14:32' }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg">
      <Navbar />

      {/* Header Search */}
      <section className="bg-gradient-to-r from-gov-darkBg via-slate-900 to-gov-darkBg text-white py-12 px-4 border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <span className="bg-gov-blue/20 text-gov-blue dark:text-blue-400 font-extrabold text-xs px-3 py-1 rounded-full border border-blue-500/30">
            Real-Time Public Tracker
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Track Application Status</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Enter your Application Reference Number (e.g. JAN-2026-891234) or registered Mobile Number to trace your application lifecycle.
          </p>

          <div className="pt-2 max-w-xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Enter Application Ref No (e.g. JAN-2026-891234)"
                value={appNo}
                onChange={(e) => setAppNo(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-800 text-white rounded-xl border border-slate-700 font-mono font-bold text-sm"
              />
            </div>
            <button
              onClick={() => setSearched(true)}
              className="px-6 py-3 bg-gov-blue text-white rounded-xl font-bold text-sm shadow hover:bg-blue-700"
            >
              Track Now
            </button>
          </div>
        </div>
      </section>

      {searched && (
        <main className="max-w-5xl mx-auto px-4 py-8 flex-1 w-full space-y-8">
          
          {/* Main Status Header Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 dark:border-slate-800 pb-4 gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-gov-blue">Ref: {mockTrackData.applicationNo}</span>
                <h2 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  {mockTrackData.schemeTitle}
                </h2>
                <p className="text-xs text-slate-500">Applicant: {mockTrackData.applicantName} ({mockTrackData.aadhaarHash})</p>
              </div>

              <div className="bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-2 rounded-xl border border-amber-500/20 text-xs font-extrabold flex items-center space-x-2">
                <Clock className="w-4 h-4 animate-spin" />
                <span>Status: Under Nodal Review</span>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="space-y-6 pt-2">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                Application Lifecycle Stages
              </h3>

              <div className="relative pl-6 space-y-6 border-l-2 border-slate-200 dark:border-slate-800">
                {mockTrackData.timeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Node Dot */}
                    <div
                      className={`absolute -left-[31px] top-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                        item.done
                          ? 'bg-emerald-500 text-white shadow'
                          : 'bg-slate-300 dark:bg-slate-700 text-slate-500'
                      }`}
                    >
                      {item.done ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                    </div>

                    <div className="bg-white dark:bg-slate-900/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">{item.step}</h4>
                        <span className="text-[11px] text-slate-400 font-medium">{item.date}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{item.remarks}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SMS & Email Logs */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-gov-blue" />
                <span>Real-Time Dispatch Notifications</span>
              </h4>

              <div className="space-y-2">
                {mockTrackData.notifications.map((n, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-xs flex items-center justify-between border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-gov-blue">{n.type} Dispatch</span>
                    <span className="text-slate-600 dark:text-slate-300 truncate max-w-md">{n.text}</span>
                    <span className="text-slate-400 text-[10px]">{n.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </main>
      )}

      <Footer />
    </div>
  );
}
