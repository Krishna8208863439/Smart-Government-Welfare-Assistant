'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Users, 
  Layers, 
  IndianRupee, 
  TrendingUp, 
  BarChart3, 
  AlertTriangle, 
  Activity, 
  Plus, 
  Settings, 
  FileSpreadsheet,
  Building2,
  Lock
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function AdminDashboardPage() {
  const metrics = [
    { label: 'Registered Citizens', value: '4.82 Crore', change: '+12.4% this mo', icon: Users, color: 'text-gov-blue' },
    { label: 'Active Schemes Configured', value: '1,450+', change: 'Central & State', icon: Layers, color: 'text-purple-500' },
    { label: 'Total Disbursed (DBT)', value: '₹2,84,500 Cr', change: '+₹14k Cr this wk', icon: IndianRupee, color: 'text-emerald-500' },
    { label: 'AI Eligibility Accuracy', value: '99.4%', change: 'MeitY Standard', icon: ShieldCheck, color: 'text-amber-500' }
  ];

  const auditLogs = [
    { id: 1, action: 'Scheme Created', details: 'Added "PM Surya Ghar Free Electricity Scheme 2026"', user: 'Admin System', time: '10 mins ago' },
    { id: 2, action: 'Fraud Alert Triggered', details: 'Duplicate PAN attempt detected on Application JAN-2026-99120', user: 'AI Fraud Guard', time: '25 mins ago' },
    { id: 3, action: 'Department Onboarded', details: 'Added Ministry of Renewable Energy Nodal Officers', user: 'Super Admin', time: '1 hour ago' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-10 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Lock className="w-6 h-6 text-gov-green" />
              <h1 className="text-2xl font-black">JanSahay AI Super Admin Console</h1>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              National Digital Public Infrastructure • MeitY Security Clearance Level 4
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              href="/schemes"
              className="px-4 py-2 bg-gov-blue text-white rounded-xl text-xs font-bold shadow hover:bg-blue-700 flex items-center space-x-1"
            >
              <Plus className="w-4 h-4" />
              <span>Configure New Scheme</span>
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full space-y-8">
        
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => {
            const IconComp = m.icon;
            return (
              <div key={idx} className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-500">{m.label}</span>
                  <IconComp className={`w-5 h-5 ${m.color}`} />
                </div>
                <p className="text-2xl font-black text-slate-900 dark:text-white">{m.value}</p>
                <p className="text-[11px] font-semibold text-emerald-500">{m.change}</p>
              </div>
            );
          })}
        </div>

        {/* Audit Log & Fraud Detection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Audit Logs */}
          <section className="lg:col-span-7 glass-panel p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-xl">
            <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                <Activity className="w-5 h-5 text-gov-blue" />
                <span>Real-Time Audit Logs</span>
              </h3>
              <span className="text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                Live Monitoring
              </span>
            </div>

            <div className="space-y-3">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-extrabold text-slate-900 dark:text-white">{log.action}</span>
                    <span className="text-[10px] text-slate-400">{log.time}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{log.details}</p>
                  <p className="text-[10px] font-mono text-slate-400">Actor: {log.user}</p>
                </div>
              ))}
            </div>
          </section>

          {/* AI Security & Fraud Guard Alerts */}
          <aside className="lg:col-span-5 glass-panel p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-xl">
            <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-gov-saffron" />
                <span>AI Fraud Guard Alerts</span>
              </h3>
              <span className="text-[10px] text-rose-500 font-bold bg-rose-500/10 px-2 py-0.5 rounded">
                0 Critical Risk
              </span>
            </div>

            <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-xs space-y-2 text-amber-900 dark:text-amber-300">
              <p className="font-bold flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>AI Duplicate Document Detection</span>
              </p>
              <p className="text-[11px] leading-relaxed">
                AI cross-checked 14.8M application records against central Aadhaar hashes. Zero duplicate disbursements detected today.
              </p>
            </div>
          </aside>

        </div>

      </main>

      <Footer />
    </div>
  );
}
