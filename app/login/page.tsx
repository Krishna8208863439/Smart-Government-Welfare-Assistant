'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  User, 
  Building2, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useAuth, UserRole, DEMO_USERS } from '@/lib/auth-context';
import { useTranslation } from '@/components/accessibility-provider';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const { t } = useTranslation();

  const [role, setRole] = useState<UserRole>('CITIZEN');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setErrorMsg('');
  };

  const handleDemoLogin = (demoRole: UserRole) => {
    setRole(demoRole);
    const demo = DEMO_USERS[demoRole];
    setIdentifier(demo.email);
    setPassword('Demo@2026');
    executeLogin(demo.email, demoRole);
  };

  const executeLogin = async (idToUse: string, roleToUse: UserRole) => {
    setIsLoading(true);
    setErrorMsg('');

    try {
      const res = await login({
        identifier: idToUse || identifier,
        password: password || 'Demo@2026',
        role: roleToUse
      });

      if (res.success) {
        setSuccessMsg(t('login_title', 'Signed in successfully! Redirecting...'));
        setTimeout(() => {
          if (roleToUse === 'CITIZEN') router.push('/dashboard/citizen');
          else if (roleToUse === 'OFFICER') router.push('/dashboard/officer');
          else router.push('/dashboard/admin');
        }, 800);
      } else {
        setErrorMsg(res.message || 'Login failed. Please verify your credentials.');
      }
    } catch (err) {
      setErrorMsg('An unexpected error occurred during sign in.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setErrorMsg('Please enter your email, mobile number, or Aadhaar.');
      return;
    }
    if (!password.trim()) {
      setErrorMsg('Please enter your password.');
      return;
    }
    executeLogin(identifier, role);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg transition-colors">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg space-y-6">
          
          {/* Card Container */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl">
            
            {/* Header / Brand */}
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gov-blue via-gov-saffron to-gov-green p-0.5 shadow-lg mx-auto flex items-center justify-center">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-gov-blue dark:text-blue-400" />
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {t('login_title', 'Sign In to JanSahay AI')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                {t('login_subtitle', 'Access citizen welfare services, track applications, or manage officer approvals.')}
              </p>
            </div>

            {/* Unified Role Selector */}
            <div className="bg-slate-100 dark:bg-slate-800/80 p-1 rounded-2xl flex border border-slate-200 dark:border-slate-700">
              {[
                { id: 'CITIZEN' as UserRole, label: t('role_citizen', 'Citizen'), icon: User },
                { id: 'OFFICER' as UserRole, label: t('role_officer', 'Officer'), icon: Building2 },
                { id: 'ADMIN' as UserRole, label: t('role_admin', 'Admin'), icon: ShieldCheck }
              ].map((r) => {
                const IconComp = r.icon;
                const isSelected = role === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => handleRoleSelect(r.id)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                      isSelected
                        ? 'bg-white dark:bg-slate-900 text-gov-blue dark:text-blue-400 shadow-md scale-[1.02]'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{r.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Error / Success Notifications */}
            {errorMsg && (
              <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-2xl flex items-center space-x-2 text-xs text-rose-700 dark:text-rose-400 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center space-x-2 text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Identifier */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t('login_email_label', 'Email / Mobile Number / Aadhaar')}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder={t('login_email_placeholder', 'Enter your email, mobile, or Aadhaar number')}
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white outline-none focus:border-gov-blue transition-colors shadow-inner"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t('login_password_label', 'Password')}
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-[11px] font-bold text-gov-blue dark:text-blue-400 hover:underline"
                  >
                    {t('login_forgot_password', 'Forgot Password?')}
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder={t('login_password_placeholder', 'Enter your secure password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white outline-none focus:border-gov-blue transition-colors shadow-inner"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center space-x-2 text-xs font-semibold text-slate-600 dark:text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-gov-blue rounded border-slate-300 dark:border-slate-700"
                  />
                  <span>{t('login_remember_me', 'Remember this device')}</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-gradient-to-r from-gov-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                <span>{isLoading ? 'Verifying Credentials...' : t('login_btn', 'Sign In Securely')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick 1-Click Demo Login Options */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t('login_demo_title', 'Quick 1-Click Demo Login')}</span>
                </span>
                <span className="text-[10px] text-emerald-600 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                  Instant Test
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => handleDemoLogin('CITIZEN')}
                  className="py-2 px-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-gov-blue hover:text-white dark:hover:bg-blue-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all border border-slate-200 dark:border-slate-700 text-center"
                >
                  {t('login_demo_citizen', 'Citizen')}
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoLogin('OFFICER')}
                  className="py-2 px-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-gov-saffron hover:text-white dark:hover:bg-amber-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all border border-slate-200 dark:border-slate-700 text-center"
                >
                  {t('login_demo_officer', 'Officer')}
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoLogin('ADMIN')}
                  className="py-2 px-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-gov-green hover:text-white dark:hover:bg-emerald-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all border border-slate-200 dark:border-slate-700 text-center"
                >
                  {t('login_demo_admin', 'Admin')}
                </button>
              </div>
            </div>

            {/* Sign Up Redirect */}
            <div className="text-center text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <span>{t('login_no_account', "Don't have an account?")} </span>
              <Link
                href="/register"
                className="font-extrabold text-gov-blue dark:text-blue-400 hover:underline ml-1"
              >
                {t('login_create_one', 'Create a Free Account')}
              </Link>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
