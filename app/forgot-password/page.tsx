'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  KeyRound, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  EyeOff
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useAuth } from '@/lib/auth-context';
import { useTranslation } from '@/components/accessibility-provider';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const { sendResetOtp, resetPassword } = useAuth();
  const { t } = useTranslation();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Step 1: Send OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setErrorMsg('Please enter your email, mobile number, or Aadhaar.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      const res = await sendResetOtp(identifier);
      if (res.success) {
        setSuccessMsg(t('fp_otp_hint', 'OTP sent! (Demo code: 654321)'));
        setStep(2);
      } else {
        setErrorMsg('Could not find account matching your credentials.');
      }
    } catch (err) {
      setErrorMsg('Failed to dispatch verification OTP.');
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.trim() !== '654321' && otp.length !== 6) {
      setErrorMsg('Invalid OTP. Please enter demo verification code: 654321');
      return;
    }
    setErrorMsg('');
    setSuccessMsg('OTP verified successfully. Set your new password.');
    setStep(3);
  };

  // Step 3: Update Password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setErrorMsg('Password must contain at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMsg('Passwords do not match. Please verify.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      const res = await resetPassword(identifier, otp, newPassword);
      if (res.success) {
        setStep(4);
      } else {
        setErrorMsg(res.message || 'Failed to update password.');
      }
    } catch (err) {
      setErrorMsg('An error occurred during password update.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg transition-colors">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg space-y-6">
          
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-gov-saffron p-0.5 shadow-lg mx-auto flex items-center justify-center">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <KeyRound className="w-7 h-7 text-amber-500" />
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {t('fp_title', 'Reset Your Password')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                {t('fp_subtitle', 'Follow simple verification steps to recover your account securely.')}
              </p>
            </div>

            {/* Progress Stepper */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 1, label: '1. Identifier' },
                { id: 2, label: '2. Verify OTP' },
                { id: 3, label: '3. New Password' }
              ].map((s) => (
                <div
                  key={s.id}
                  className={`py-1.5 rounded-xl text-center text-[10px] font-bold border transition-all ${
                    step === s.id
                      ? 'bg-gov-blue text-white border-blue-400 shadow'
                      : step > s.id
                      ? 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {s.label}
                </div>
              ))}
            </div>

            {/* Alerts */}
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

            {/* Step 1: Request OTP */}
            {step === 1 && (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t('fp_step1_label', 'Step 1: Enter Registered Email or Mobile')}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. rajesh.sharma@example.com or +91 9876543210"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white outline-none focus:border-gov-blue"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 bg-gradient-to-r from-gov-blue to-blue-700 text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>{isLoading ? 'Sending OTP...' : t('fp_send_otp_btn', 'Send Verification OTP')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Step 2: Verify OTP */}
            {step === 2 && (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-center text-xs">
                  <p className="font-bold text-gov-blue dark:text-blue-400">
                    {t('fp_otp_hint', 'OTP sent! (Demo verification code: 654321)')}
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="block text-center text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t('fp_step2_label', 'Step 2: Enter 6-Digit OTP')}
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    required
                    placeholder="654321"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-3.5 bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-2xl text-center text-2xl font-mono font-black tracking-widest text-gov-blue dark:text-blue-400 outline-none focus:border-gov-blue"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-gov-blue to-blue-700 text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>{t('fp_verify_otp_btn', 'Verify OTP')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full text-center text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white"
                >
                  Back to Step 1
                </button>
              </form>
            )}

            {/* Step 3: New Password */}
            {step === 3 && (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t('fp_step3_label', 'Step 3: Set New Password')}
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder={t('fp_new_pwd_placeholder', 'Enter new strong password')}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white outline-none focus:border-gov-blue"
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

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t('reg_confirm_password_label', 'Confirm Password')}
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder={t('fp_conf_pwd_placeholder', 'Confirm new password')}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white outline-none focus:border-gov-blue"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 bg-gradient-to-r from-gov-green to-emerald-600 text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{isLoading ? 'Updating...' : t('fp_reset_pwd_btn', 'Update Password')}</span>
                </button>
              </form>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <div className="text-center space-y-4 py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {t('fp_success_title', 'Password Reset Successful!')}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  {t('fp_success_desc', 'Your password has been changed securely. You can now log in with your new credentials.')}
                </p>
                <Link
                  href="/login"
                  className="inline-flex items-center space-x-2 px-8 py-3 bg-gov-blue text-white rounded-xl font-extrabold text-xs shadow-lg hover:bg-blue-700 transition-colors"
                >
                  <span>{t('fp_back_to_login', 'Proceed to Login')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Back to Login */}
            {step !== 4 && (
              <div className="text-center text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  href="/login"
                  className="font-extrabold text-gov-blue dark:text-blue-400 hover:underline"
                >
                  ← {t('fp_back_to_login', 'Proceed to Login')}
                </Link>
              </div>
            )}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
