'use client';

import React, { useState } from 'react';
import { ShieldCheck, TrendingUp, Users, CheckCircle2, IndianRupee, Sparkles, MapPin } from 'lucide-react';

const STATE_DATA = [
  { id: 'UP', name: 'Uttar Pradesh', activeSchemes: 184, disbursed: '₹42,500 Cr', applicants: '4.2 Cr' },
  { id: 'MH', name: 'Maharashtra', activeSchemes: 162, disbursed: '₹38,200 Cr', applicants: '3.6 Cr' },
  { id: 'KA', name: 'Karnataka', activeSchemes: 145, disbursed: '₹29,100 Cr', applicants: '2.8 Cr' },
  { id: 'DL', name: 'Delhi NCR', activeSchemes: 120, disbursed: '₹14,500 Cr', applicants: '1.2 Cr' },
  { id: 'TN', name: 'Tamil Nadu', activeSchemes: 158, disbursed: '₹31,000 Cr', applicants: '3.1 Cr' },
  { id: 'GJ', name: 'Gujarat', activeSchemes: 150, disbursed: '₹27,800 Cr', applicants: '2.5 Cr' },
  { id: 'WB', name: 'West Bengal', activeSchemes: 140, disbursed: '₹24,600 Cr', applicants: '2.9 Cr' },
  { id: 'RJ', name: 'Rajasthan', activeSchemes: 135, disbursed: '₹21,300 Cr', applicants: '2.2 Cr' }
];

export function IndiaMapVisualizer() {
  const [selectedState, setSelectedState] = useState(STATE_DATA[0]);

  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center p-4">
      {/* Background Animated Gradient Aura */}
      <div className="absolute w-72 h-72 rounded-full bg-gov-blue/20 blur-3xl -top-10 -left-10 animate-pulse-slow"></div>
      <div className="absolute w-72 h-72 rounded-full bg-gov-saffron/20 blur-3xl -bottom-10 -right-10 animate-pulse-slow"></div>

      {/* Floating Real-time Metric Card 1 (Top Left) */}
      <div className="absolute top-4 left-2 sm:left-6 z-20 glass-panel p-3.5 rounded-2xl shadow-xl border border-white/40 dark:border-slate-700/50 flex items-center space-x-3 animate-float">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
          <IndianRupee className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">Total Benefits Disbursed</p>
          <p className="text-lg font-extrabold text-slate-900 dark:text-white">₹2,84,500 Cr+</p>
        </div>
      </div>

      {/* Floating Real-time Metric Card 2 (Bottom Right) */}
      <div className="absolute bottom-4 right-2 sm:right-6 z-20 glass-panel p-3.5 rounded-2xl shadow-xl border border-white/40 dark:border-slate-700/50 flex items-center space-x-3 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-10 h-10 rounded-xl bg-gov-blue/10 text-gov-blue dark:text-blue-400 flex items-center justify-center font-bold">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">Applications Approved</p>
          <p className="text-lg font-extrabold text-slate-900 dark:text-white">14.8 Crore+</p>
        </div>
      </div>

      {/* Interactive Map Graphic Representation */}
      <div className="relative z-10 w-full max-w-md bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl text-white">
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-gov-saffron animate-bounce" />
            <span className="font-bold text-sm">State Welfare Radar</span>
          </div>
          <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>LIVE 2026</span>
          </span>
        </div>

        {/* State Selection Grid */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {STATE_DATA.map((st) => (
            <button
              key={st.id}
              onClick={() => setSelectedState(st)}
              className={`py-2 px-1.5 rounded-xl text-xs font-bold transition-all border ${
                selectedState.id === st.id
                  ? 'bg-gradient-to-r from-gov-blue to-blue-600 text-white border-blue-400 shadow-lg scale-105'
                  : 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-700'
              }`}
            >
              {st.id}
            </button>
          ))}
        </div>

        {/* Selected State Live Detail Box */}
        <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 space-y-3">
          <div className="flex justify-between items-center">
            <h4 className="font-extrabold text-base text-white">{selectedState.name}</h4>
            <span className="text-xs text-gov-saffron font-bold">{selectedState.activeSchemes} Schemes</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-800">
            <div>
              <p className="text-[10px] text-slate-400">Direct Financial Benefit</p>
              <p className="text-sm font-bold text-emerald-400">{selectedState.disbursed}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400">Beneficiary Count</p>
              <p className="text-sm font-bold text-sky-400">{selectedState.applicants}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
