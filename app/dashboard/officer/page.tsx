'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Eye, 
  FileText, 
  Users, 
  Search, 
  Filter, 
  Clock,
  ShieldCheck,
  BarChart3
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function OfficerDashboardPage() {
  const [selectedApp, setSelectedApp] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState('ALL');

  const [applications, setApplications] = useState([
    {
      id: 'app-101',
      refNo: 'JAN-2026-891234',
      applicantName: 'Rajesh Kumar Sharma',
      schemeTitle: 'PM Kisan Samman Nidhi',
      district: 'Gautam Buddha Nagar',
      income: '₹1,80,000 / yr',
      status: 'PENDING',
      submittedDate: '28 Jul 2026',
      ocrConfidence: '98%',
      documents: ['Aadhaar Card', 'Land Khatoni Record', 'SBI Passbook']
    },
    {
      id: 'app-102',
      refNo: 'JAN-2026-778129',
      applicantName: 'Priya Sundaram',
      schemeTitle: 'Ayushman Bharat PM-JAY',
      district: 'Gautam Buddha Nagar',
      income: '₹1,20,000 / yr',
      status: 'PENDING',
      submittedDate: '29 Jul 2026',
      ocrConfidence: '99%',
      documents: ['Aadhaar Card', 'Ration Card']
    },
    {
      id: 'app-103',
      refNo: 'JAN-2026-441209',
      applicantName: 'Suresh Chandra Patel',
      schemeTitle: 'PMAY Housing Subsidy',
      district: 'Gautam Buddha Nagar',
      income: '₹2,40,000 / yr',
      status: 'APPROVED',
      submittedDate: '25 Jul 2026',
      ocrConfidence: '96%',
      documents: ['Aadhaar Card', 'Income Certificate', 'Affidavit']
    }
  ]);

  const handleAction = (appId: string, newStatus: 'APPROVED' | 'REJECTED' | 'DOCUMENT_REQUESTED') => {
    setApplications((prev) =>
      prev.map((a) => (a.id === appId ? { ...a, status: newStatus } : a))
    );
    setSelectedApp(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-10 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Building2 className="w-6 h-6 text-gov-saffron" />
              <h1 className="text-2xl font-black">Department Officer Audit Portal</h1>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Ministry of Agriculture & Farmers Welfare • Tehsil Office, Gautam Buddha Nagar
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-slate-800 p-3 rounded-2xl border border-slate-700 text-xs font-bold">
            <div>
              <p className="text-slate-400 font-semibold">Pending Queue</p>
              <p className="text-lg font-extrabold text-amber-400">
                {applications.filter((a) => a.status === 'PENDING').length} Verification Requests
              </p>
            </div>
            <div className="h-8 w-px bg-slate-700"></div>
            <div>
              <p className="text-slate-400 font-semibold">Avg Approval Speed</p>
              <p className="text-lg font-extrabold text-emerald-400">4.2 Hours</p>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left List of Queue */}
        <section className="lg:col-span-7 space-y-4">
          <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300">
            <span>Pending Application Queue</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1 outline-none text-xs"
            >
              <option value="ALL">All Statuses</option>
              <option value="PENDING">Pending Review</option>
              <option value="APPROVED">Approved</option>
              <option value="REJECTED">Rejected</option>
            </select>
          </div>

          <div className="space-y-3">
            {applications.map((app) => (
              <div
                key={app.id}
                onClick={() => setSelectedApp(app)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  selectedApp?.id === app.id
                    ? 'glass-panel border-gov-blue dark:border-blue-500 shadow-lg'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-400'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-mono font-bold text-gov-blue">{app.refNo}</span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      app.status === 'APPROVED'
                        ? 'bg-emerald-500/10 text-emerald-600'
                        : app.status === 'REJECTED'
                        ? 'bg-rose-500/10 text-rose-600'
                        : 'bg-amber-500/10 text-amber-600'
                    }`}
                  >
                    {app.status}
                  </span>
                </div>

                <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                  {app.applicantName}
                </h4>

                <p className="text-xs text-slate-500 mt-0.5">{app.schemeTitle} • {app.district}</p>

                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">AI OCR Confidence: <strong className="text-emerald-500">{app.ocrConfidence}</strong></span>
                  <span className="text-gov-blue font-bold flex items-center space-x-1">
                    <span>Review Application</span>
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Inspection & Approval Panel */}
        <aside className="lg:col-span-5">
          {selectedApp ? (
            <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl sticky top-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-gov-blue">Reviewing: {selectedApp.refNo}</span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  {selectedApp.applicantName}
                </h3>
                <p className="text-xs text-slate-500">{selectedApp.schemeTitle}</p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl space-y-1">
                  <p><strong>District:</strong> {selectedApp.district}</p>
                  <p><strong>Annual Income:</strong> {selectedApp.income}</p>
                  <p><strong>Submitted Date:</strong> {selectedApp.submittedDate}</p>
                </div>

                <div>
                  <p className="font-bold text-slate-900 dark:text-white mb-1">Attached Verified Documents:</p>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                    {selectedApp.documents.map((d: string, idx: number) => (
                      <li key={idx} className="flex items-center space-x-2 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-lg">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{d} (Verified OCR)</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => handleAction(selectedApp.id, 'APPROVED')}
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-extrabold text-xs rounded-xl shadow hover:opacity-95 flex items-center justify-center space-x-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Approve & Trigger Direct Benefit Transfer</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleAction(selectedApp.id, 'DOCUMENT_REQUESTED')}
                    className="py-2.5 bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 rounded-xl font-bold text-xs hover:bg-amber-500/20"
                  >
                    Request Additional Doc
                  </button>
                  <button
                    onClick={() => handleAction(selectedApp.id, 'REJECTED')}
                    className="py-2.5 bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/30 rounded-xl font-bold text-xs hover:bg-rose-500/20"
                  >
                    Reject Application
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-panel p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-center text-slate-500 space-y-2">
              <Eye className="w-10 h-10 text-slate-400 mx-auto" />
              <p className="font-bold text-base text-slate-800 dark:text-white">Select Application</p>
              <p className="text-xs">Click on any citizen application from the left queue to inspect document OCR and trigger approval.</p>
            </div>
          )}
        </aside>

      </main>

      <Footer />
    </div>
  );
}
