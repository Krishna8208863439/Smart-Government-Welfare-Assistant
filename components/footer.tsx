import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, Globe, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
        
        {/* Col 1: Platform Overview */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-gov-blue via-gov-saffron to-gov-green p-0.5 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              JanSahay AI
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-md">
            JanSahay AI is an enterprise-grade AI-powered public discovery & fulfillment engine designed under Project Viksit Bharat 2026. Empowering every citizen with transparent, middleman-free, multilingual access to 1,000+ Central and State welfare schemes.
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <span className="bg-slate-800 border border-slate-700 text-xs px-2.5 py-1 rounded text-slate-300 flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>DigiLocker Compliant</span>
            </span>
            <span className="bg-slate-800 border border-slate-700 text-xs px-2.5 py-1 rounded text-slate-300">
              UMANG Integrated
            </span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm tracking-wider uppercase border-l-2 border-gov-saffron pl-2">
            Discovery Hub
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/schemes" className="hover:text-white transition-colors">All Central Schemes</Link></li>
            <li><Link href="/eligibility" className="hover:text-white transition-colors">AI Eligibility Checker</Link></li>
            <li><Link href="/ai-assistant" className="hover:text-white transition-colors">Multilingual Voice AI</Link></li>
            <li><Link href="/track" className="hover:text-white transition-colors">Application Tracker</Link></li>
            <li><Link href="/centers" className="hover:text-white transition-colors">CSC & Bank Kiosks</Link></li>
          </ul>
        </div>

        {/* Col 3: Key Scheme Categories */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm tracking-wider uppercase border-l-2 border-gov-blue pl-2">
            Categories
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/schemes?cat=AGRICULTURE" className="hover:text-white transition-colors">Agriculture & PM-KISAN</Link></li>
            <li><Link href="/schemes?cat=HEALTHCARE" className="hover:text-white transition-colors">Ayushman Bharat Healthcare</Link></li>
            <li><Link href="/schemes?cat=HOUSING" className="hover:text-white transition-colors">PMAY Housing Subsidy</Link></li>
            <li><Link href="/schemes?cat=SCHOLARSHIPS" className="hover:text-white transition-colors">Student Scholarships</Link></li>
            <li><Link href="/schemes?cat=STARTUP" className="hover:text-white transition-colors">MUDRA MSME Loans</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact & Helpdesk */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm tracking-wider uppercase border-l-2 border-gov-green pl-2">
            Support & Helpline
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-2">
              <Phone className="w-4 h-4 text-gov-saffron mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-white">Toll-Free Helpline</p>
                <p className="text-slate-400">1800-11-2026 / 155261</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Mail className="w-4 h-4 text-gov-blue mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-white">Email Desk</p>
                <p className="text-slate-400">support@jansahay.gov.in</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-gov-green mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-white">Headquarters</p>
                <p className="text-slate-400">MeitY, Electronics Niketan, CGO Complex, New Delhi</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 space-y-4 md:space-y-0">
        <div>
          <p>© 2026 JanSahay AI. Designed for National Digital Transformation & Viksit Bharat 2026.</p>
        </div>
        <div className="flex items-center space-x-6">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">WCAG 2.2 Accessibility</span>
          <span className="hover:text-white cursor-pointer">Cybersecurity Audit Verified</span>
        </div>
      </div>
    </footer>
  );
}
