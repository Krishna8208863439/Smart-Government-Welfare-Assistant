'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Phone, 
  Clock, 
  Navigation, 
  Building2, 
  Filter, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ASSISTANCE_CENTERS } from '@/lib/schemes-data';

export default function AssistanceCentersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('ALL');
  const [activeCenter, setActiveCenter] = useState(ASSISTANCE_CENTERS[0]);

  const filteredCenters = ASSISTANCE_CENTERS.filter((c) => {
    const matchesSearch = 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.pincode.includes(searchQuery);

    const matchesType = selectedType === 'ALL' || c.type.toUpperCase().includes(selectedType.toUpperCase());

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-gov-darkBg via-slate-900 to-gov-darkBg text-white py-10 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="bg-gov-saffron/20 text-gov-saffron font-extrabold text-xs px-3 py-1 rounded-full border border-gov-saffron/30">
            Physical Assistance Locator
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Nearby Government Assistance Centers</h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Locate nearest Common Service Centers (CSC), Digital Seva Kendras, Tehsil Offices, and Bank Kiosks for offline biometric help, document scanning, and application support.
          </p>

          <div className="pt-2 max-w-xl flex gap-2">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search District, City, or Pincode (e.g. 110001, NOIDA)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-800 text-white rounded-xl border border-slate-700 text-sm font-semibold"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left List of Centers */}
        <aside className="lg:col-span-5 space-y-4">
          <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300">
            <span>Found {filteredCenters.length} verified centers</span>
            
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1 outline-none text-xs"
            >
              <option value="ALL">All Center Types</option>
              <option value="CSC">CSC Centers</option>
              <option value="DIGITAL_SEVA">Digital Seva</option>
              <option value="TALUKA">Taluka Offices</option>
              <option value="BANK">Bank Kiosks</option>
            </select>
          </div>

          <div className="space-y-3 max-h-[580px] overflow-y-auto pr-1">
            {filteredCenters.map((center) => (
              <div
                key={center.id}
                onClick={() => setActiveCenter(center)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  activeCenter.id === center.id
                    ? 'glass-panel border-gov-blue dark:border-blue-500 shadow-lg scale-[1.01]'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-400'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-gov-blue/10 text-gov-blue dark:bg-blue-950 dark:text-blue-300">
                    {center.type}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-500 flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Active Operator</span>
                  </span>
                </div>

                <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                  {center.name}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                  {center.address}, {center.district}, {center.state} - {center.pincode}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs font-semibold text-slate-600 dark:text-slate-300">
                  <span className="flex items-center space-x-1">
                    <Phone className="w-3.5 h-3.5 text-gov-saffron" />
                    <span>{center.phone}</span>
                  </span>

                  <a
                    href={`https://maps.google.com/?q=${center.lat},${center.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gov-blue dark:text-blue-400 font-bold hover:underline flex items-center space-x-1"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Right Map Details Box */}
        <section className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="flex justify-between items-start border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-gov-saffron">{activeCenter.type}</span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {activeCenter.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{activeCenter.address}</p>
              </div>

              <a
                href={`https://maps.google.com/?q=${activeCenter.lat},${activeCenter.lng}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-gov-blue to-blue-700 text-white rounded-xl text-xs font-extrabold shadow flex items-center space-x-1.5 hover:opacity-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Simulated Interactive Map Display Canvas */}
            <div className="relative w-full h-72 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center p-6 text-white text-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-gov-saffron text-white flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>

                <div>
                  <p className="font-extrabold text-base">{activeCenter.name}</p>
                  <p className="text-xs text-slate-400 font-mono">Geo: {activeCenter.lat}° N, {activeCenter.lng}° E</p>
                </div>
              </div>
            </div>

            {/* Center Operational Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
                <p className="text-slate-500 font-bold flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-gov-blue" />
                  <span>Working Hours</span>
                </p>
                <p className="text-slate-900 dark:text-white font-bold">{activeCenter.timing}</p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
                <p className="text-slate-500 font-bold flex items-center space-x-1">
                  <Phone className="w-4 h-4 text-gov-saffron" />
                  <span>Operator Helpline</span>
                </p>
                <p className="text-slate-900 dark:text-white font-bold">{activeCenter.phone}</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
