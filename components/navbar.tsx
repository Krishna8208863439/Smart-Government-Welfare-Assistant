'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Sparkles, 
  Globe, 
  Eye, 
  Sun, 
  Moon, 
  Search, 
  User, 
  ShieldCheck, 
  MapPin, 
  FileText, 
  Bot, 
  Menu, 
  X, 
  CheckCircle,
  Building2,
  SlidersHorizontal
} from 'lucide-react';
import { useAccessibility, INDIAN_LANGUAGES } from './accessibility-provider';

export function Navbar() {
  const pathname = usePathname();
  const { fontSize, setFontSize, highContrast, setHighContrast, language, setLanguage, darkMode, setDarkMode } = useAccessibility();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRole, setActiveRole] = useState<'CITIZEN' | 'OFFICER' | 'ADMIN'>('CITIZEN');

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Find Schemes', href: '/schemes' },
    { label: 'Eligibility Checker', href: '/eligibility', highlight: true },
    { label: 'AI Assistant', href: '/ai-assistant' },
    { label: 'Track Status', href: '/track' },
    { label: 'Assistance Centers', href: '/centers' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Accessibility & Official Govt Header */}
      <div className="bg-gov-darkBg text-slate-200 text-xs px-4 py-1.5 flex flex-wrap justify-between items-center border-b border-slate-700/50">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1 font-medium">
            <span className="text-orange-500 font-bold">GOVERNMENT OF INDIA</span>
            <span className="text-slate-400">|</span>
            <span className="text-emerald-400">DIGITAL INDIA INITIATIVE</span>
          </span>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="hidden md:inline text-slate-300">Helpline: 1800-11-2026 (Toll-Free)</span>
        </div>

        {/* Accessibility Toolbar */}
        <div className="flex items-center space-x-3">
          {/* Font Size Adjuster */}
          <div className="flex items-center bg-slate-800 rounded px-1.5 py-0.5 border border-slate-700 space-x-1">
            <span className="text-[10px] text-slate-400 mr-1">Text:</span>
            <button 
              onClick={() => setFontSize('normal')} 
              className={`px-1 rounded ${fontSize === 'normal' ? 'bg-gov-blue text-white font-bold' : 'hover:bg-slate-700'}`}
              title="Normal Text Size"
            >
              A
            </button>
            <button 
              onClick={() => setFontSize('large')} 
              className={`px-1 rounded ${fontSize === 'large' ? 'bg-gov-blue text-white font-bold' : 'hover:bg-slate-700'}`}
              title="Large Text Size"
            >
              A+
            </button>
            <button 
              onClick={() => setFontSize('xlarge')} 
              className={`px-1 rounded ${fontSize === 'xlarge' ? 'bg-gov-blue text-white font-bold' : 'hover:bg-slate-700'}`}
              title="Extra Large Text Size"
            >
              A++
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button 
            onClick={() => setHighContrast(!highContrast)} 
            className={`flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] font-semibold border ${highContrast ? 'bg-yellow-400 text-black border-yellow-300' : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'}`}
            title="Toggle High Contrast Mode (WCAG 2.2)"
          >
            <Eye className="w-3 h-3" />
            <span className="hidden sm:inline">Contrast</span>
          </button>

          {/* Dark / Light Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700"
            title="Toggle Theme"
          >
            {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-300" />}
          </button>

          {/* Language Selector */}
          <div className="flex items-center bg-slate-800 rounded px-2 py-0.5 border border-slate-700">
            <Globe className="w-3 h-3 text-emerald-400 mr-1" />
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-white text-[11px] outline-none cursor-pointer"
            >
              {INDIAN_LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-slate-900 text-white">
                  {lang.native} ({lang.name})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="glass-panel border-b border-slate-200 dark:border-slate-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Tagline */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gov-blue via-gov-saffron to-gov-green p-0.5 shadow-md flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-gov-blue dark:text-blue-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-gov-blue via-gov-saffron to-gov-green bg-clip-text text-transparent">
                  JanSahay AI
                </span>
                <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  PROD 2026
                </span>
              </div>
              <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 hidden sm:block">
                One Platform. Every Government Scheme.
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gov-blue text-white shadow-sm'
                      : item.highlight
                      ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 hover:bg-amber-500/20'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons & Role Switcher */}
          <div className="hidden sm:flex items-center space-x-2">
            {/* Quick Role Switcher Pill */}
            <div className="bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg flex items-center border border-slate-200 dark:border-slate-700 text-xs font-semibold">
              <button 
                onClick={() => setActiveRole('CITIZEN')}
                className={`px-2.5 py-1 rounded-md transition-all ${activeRole === 'CITIZEN' ? 'bg-white dark:bg-slate-900 text-gov-blue font-bold shadow' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Citizen
              </button>
              <button 
                onClick={() => setActiveRole('OFFICER')}
                className={`px-2.5 py-1 rounded-md transition-all ${activeRole === 'OFFICER' ? 'bg-white dark:bg-slate-900 text-gov-saffron font-bold shadow' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Officer
              </button>
              <button 
                onClick={() => setActiveRole('ADMIN')}
                className={`px-2.5 py-1 rounded-md transition-all ${activeRole === 'ADMIN' ? 'bg-white dark:bg-slate-900 text-gov-green font-bold shadow' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Admin
              </button>
            </div>

            {/* Dashboard Navigation Button */}
            <Link
              href={
                activeRole === 'CITIZEN'
                  ? '/dashboard/citizen'
                  : activeRole === 'OFFICER'
                  ? '/dashboard/officer'
                  : '/dashboard/admin'
              }
              className="flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-gov-blue to-gov-blueDark text-white font-semibold text-sm rounded-lg shadow hover:opacity-95 transition-opacity"
            >
              <User className="w-4 h-4" />
              <span>{activeRole === 'CITIZEN' ? 'Citizen Hub' : activeRole === 'OFFICER' ? 'Officer Portal' : 'Admin Console'}</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold ${
                  pathname === item.href
                    ? 'bg-gov-blue text-white'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <Link
                href="/dashboard/citizen"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 bg-gov-blue text-white rounded-lg font-semibold text-sm shadow"
              >
                Citizen Portal
              </Link>
              <Link
                href="/dashboard/officer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 bg-slate-800 text-white rounded-lg font-semibold text-sm"
              >
                Officer Portal
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
