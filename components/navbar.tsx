'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Sparkles, 
  Globe, 
  Sun, 
  Moon, 
  User, 
  ShieldCheck, 
  Menu, 
  X, 
  LogOut,
  LayoutDashboard,
  ChevronDown
} from 'lucide-react';
import { useAccessibility, INDIAN_LANGUAGES } from './accessibility-provider';
import { useAuth } from '@/lib/auth-context';
import { LanguageCode } from '@/lib/translations';

export function Navbar() {
  const pathname = usePathname();
  const { fontSize, setFontSize, language, setLanguage, darkMode, setDarkMode, t } = useAccessibility();
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // When NOT logged in: ONLY "Home" is displayed.
  // After Login / Creating Account: ALL features are displayed.
  const navItems = isAuthenticated
    ? [
        { label: t('nav_home', 'Home'), href: '/' },
        { label: t('nav_schemes', 'Find Schemes'), href: '/schemes' },
        { label: t('nav_eligibility', 'Eligibility Checker'), href: '/eligibility', highlight: true },
        { label: t('nav_ai_assistant', 'AI Assistant'), href: '/ai-assistant' },
        { label: t('nav_track', 'Track Status'), href: '/track' },
        { label: t('nav_centers', 'Assistance Centers'), href: '/centers' },
      ]
    : [
        { label: t('nav_home', 'Home'), href: '/' }
      ];

  const getDashboardHref = () => {
    if (!user) return '/dashboard/citizen';
    if (user.role === 'OFFICER') return '/dashboard/officer';
    if (user.role === 'ADMIN') return '/dashboard/admin';
    return '/dashboard/citizen';
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Govt & Accessibility Header (Contrast toggle removed, strictly 3 languages) */}
      <div className="bg-gov-darkBg text-slate-200 text-xs px-4 py-1.5 flex flex-wrap justify-between items-center border-b border-slate-700/50">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1 font-medium">
            <span className="text-orange-500 font-bold">{t('govt_title', 'GOVERNMENT OF INDIA')}</span>
            <span className="text-slate-400">|</span>
            <span className="text-emerald-400 font-semibold">{t('digital_india', 'DIGITAL INDIA INITIATIVE')}</span>
          </span>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="hidden md:inline text-slate-300">{t('helpline', 'Helpline: 1800-11-2026 (Toll-Free)')}</span>
        </div>

        {/* Accessibility & Language Toolbar */}
        <div className="flex items-center space-x-3">
          {/* Font Size Adjuster */}
          <div className="flex items-center bg-slate-800 rounded px-1.5 py-0.5 border border-slate-700 space-x-1">
            <span className="text-[10px] text-slate-400 mr-1">{t('text_size', 'Text:')}</span>
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

          {/* Dark / Light Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700"
            title={t('theme_toggle', 'Toggle Theme')}
          >
            {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-300" />}
          </button>

          {/* Strictly 3 Languages Selector: Marathi, Hindi, English */}
          <div className="flex items-center bg-slate-800 rounded px-2 py-0.5 border border-slate-700">
            <Globe className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value as LanguageCode)}
              className="bg-transparent text-white text-[11px] font-semibold outline-none cursor-pointer"
            >
              {INDIAN_LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-slate-900 text-white font-sans">
                  {lang.native} ({lang.name})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="glass-panel border-b border-slate-200 dark:border-slate-800 px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
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
                {t('nav_tagline', 'One Platform. Every Government Scheme.')}
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links (Only 'Home' when not logged in, all features when logged in) */}
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
                      : (item as any).highlight
                      ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 hover:bg-amber-500/20'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Single Unified Login / Profile Action */}
          <div className="hidden sm:flex items-center space-x-3">
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-white transition-all shadow-sm"
                >
                  <div className="w-6 h-6 rounded-lg bg-gov-blue text-white flex items-center justify-center text-[11px] font-black">
                    {user.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="line-clamp-1 max-w-[120px] font-extrabold">{user.name}</p>
                    <span className="text-[9px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block">
                      {user.role}
                    </span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 py-2 z-50">
                    <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                      <p className="text-xs font-bold text-slate-900 dark:text-white">{user.name}</p>
                      <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
                    </div>

                    <Link
                      href={getDashboardHref()}
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <LayoutDashboard className="w-4 h-4 text-gov-blue" />
                      <span>{t('nav_dashboard', 'My Dashboard')}</span>
                    </Link>

                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full flex items-center space-x-2 px-4 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{t('nav_logout', 'Log Out')}</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className="flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-gov-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition-all"
                >
                  <User className="w-4 h-4" />
                  <span>{t('nav_login', 'Sign In / Login')}</span>
                </Link>

                <Link
                  href="/register"
                  className="px-3.5 py-2 text-xs font-bold text-gov-blue dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-xl transition-colors"
                >
                  {t('nav_register', 'Create Account')}
                </Link>
              </div>
            )}
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
              {isAuthenticated && user ? (
                <>
                  <Link
                    href={getDashboardHref()}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 bg-gov-blue text-white rounded-lg font-bold text-sm shadow"
                  >
                    {t('nav_dashboard', 'My Dashboard')} ({user.role})
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-center py-2.5 bg-rose-600/10 text-rose-600 rounded-lg font-bold text-sm"
                  >
                    {t('nav_logout', 'Log Out')}
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 bg-gov-blue text-white rounded-xl font-bold text-sm shadow"
                  >
                    {t('nav_login', 'Sign In')}
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl font-bold text-sm border border-slate-300 dark:border-slate-700"
                  >
                    {t('nav_register', 'Create Account')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
