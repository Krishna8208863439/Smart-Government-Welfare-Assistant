'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { 
  CheckCircle2, 
  Upload, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  User, 
  Building2, 
  Download, 
  Clock, 
  Check
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SCHEMES_DATABASE, getSchemeTitle, getSchemeBenefit } from '@/lib/schemes-data';
import { parseDocumentOCR, ExtractedDocumentData } from '@/lib/ocr-engine';
import { useTranslation } from '@/components/accessibility-provider';
import { useAuth } from '@/lib/auth-context';

export default function ApplicationWizardPage() {
  const params = useParams();
  const router = useRouter();
  const { t, language } = useTranslation();
  const { user } = useAuth();

  const schemeId = (params?.schemeId as string) || 'pm-kisan';
  const scheme = SCHEMES_DATABASE.find((s) => s.id === schemeId) || SCHEMES_DATABASE[0];

  const [step, setStep] = useState<number>(1); // 1: eKYC, 2: Document OCR, 3: Form Details, 4: Review, 5: Receipt
  const [ocrLoading, setOcrLoading] = useState(false);

  // Form State
  const [applicant, setApplicant] = useState({
    name: user?.name || 'Rajesh Kumar Sharma',
    aadhaarNumber: user?.aadhaarNumber || '9812-4512-8912',
    panNumber: 'ABCPS8912K',
    dob: '1988-04-14',
    gender: 'Male',
    phone: user?.phone || '+91 98765 43210',
    email: user?.email || 'rajesh.sharma@example.com',
    state: user?.state || 'Maharashtra',
    district: user?.district || 'Pune',
    address: 'Plot 42, Shivajinagar, Pune, Maharashtra - 411005',
    annualIncome: 180000,
    bankAccount: '3819001298371',
    ifscCode: 'SBIN0001234',
    landRecordNo: 'KH-8912/2026'
  });

  const [uploadedDocs, setUploadedDocs] = useState<{ docType: string; fileName: string; ocr: ExtractedDocumentData }[]>([]);
  const [applicationNo, setApplicationNo] = useState<string>('');

  // Handle OCR Document Scanner
  const handleDocUpload = (docType: string) => {
    setOcrLoading(true);
    setTimeout(() => {
      const extracted = parseDocumentOCR(docType, `${docType.toLowerCase()}_sample.pdf`);
      setUploadedDocs((prev) => [
        ...prev.filter((d) => d.docType !== docType),
        { docType, fileName: `${docType}_Verified.pdf`, ocr: extracted }
      ]);

      // Auto-fill form fields from OCR
      if (extracted.name) setApplicant((prev) => ({ ...prev, name: extracted.name! }));
      if (extracted.docType === 'Aadhaar' && extracted.docNumber) setApplicant((prev) => ({ ...prev, aadhaarNumber: extracted.docNumber! }));
      if (extracted.docType === 'PAN' && extracted.docNumber) setApplicant((prev) => ({ ...prev, panNumber: extracted.docNumber! }));
      if (extracted.docType === 'Income' && extracted.incomeAnnual) setApplicant((prev) => ({ ...prev, annualIncome: extracted.incomeAnnual! }));
      if (extracted.docType === 'BankPassbook' && extracted.accountNumber) setApplicant((prev) => ({ ...prev, bankAccount: extracted.accountNumber!, ifscCode: extracted.ifscCode || prev.ifscCode }));

      setOcrLoading(false);
    }, 900);
  };

  const submitApplication = () => {
    const generatedNo = `JAN-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setApplicationNo(generatedNo);
    setStep(5);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg transition-colors">
      <Navbar />

      {/* Header Stepper */}
      <section className="bg-gradient-to-r from-gov-darkBg via-slate-900 to-gov-darkBg text-white py-8 px-4 border-b border-slate-800">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400">
            <span>
              {language === 'mr' ? 'अधिकृत अर्ज विझार्ड' : language === 'hi' ? 'आधिकारिक आवेदन पोर्टल' : 'Official Application Portal'}
            </span>
            <span>Scheme: {getSchemeTitle(scheme, language)}</span>
          </div>

          {/* Stepper Indicator */}
          <div className="grid grid-cols-5 gap-2 pt-2">
            {[
              { id: 1, label: language === 'mr' ? '१. ई-केवायसी' : language === 'hi' ? '1. ई-केवाईसी' : '1. eKYC Auth' },
              { id: 2, label: language === 'mr' ? '२. कागदपत्रे ओसीआर' : language === 'hi' ? '2. ओसीआर दस्तावेज़' : '2. OCR Documents' },
              { id: 3, label: language === 'mr' ? '३. ऑटो-फिल अर्ज' : language === 'hi' ? '3. ऑटो-फिल फॉर्म' : '3. Auto-Filled Form' },
              { id: 4, label: language === 'mr' ? '४. पुनरावलोकन' : language === 'hi' ? '4. अंतिम समीक्षा' : '4. Final Review' },
              { id: 5, label: language === 'mr' ? '५. पावती' : language === 'hi' ? '5. रसीद' : '5. Receipt' }
            ].map((s) => (
              <div
                key={s.id}
                className={`py-2 px-2 rounded-xl text-[11px] font-bold text-center border transition-all ${
                  step === s.id
                    ? 'bg-gov-blue text-white border-blue-400 shadow-md'
                    : step > s.id
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-8 flex-1 w-full">
        
        {/* Step 1: eKYC Verification */}
        {step === 1 && (
          <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gov-blue/10 text-gov-blue dark:text-blue-400 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                {language === 'mr' ? 'आधार झटपट ई-केवायसी पडताळणी' : language === 'hi' ? 'आधार त्वरित ई-केवाईसी सत्यापन' : 'Aadhaar Instant eKYC Verification'}
              </h2>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                {language === 'mr'
                  ? 'जनसहाय एआय MeitY च्या डिजिटल ई-केवायसी द्वारे सुरक्षितपणे ओळख पडताळणी करते.'
                  : language === 'hi'
                  ? 'जनसहाय एआई MeitY के डिजिटल ई-केवाईसी द्वारा सुरक्षित रूप से पहचान सत्यापित करता है।'
                  : 'JanSahay AI verifies your demographic credentials via MeitY secure DigiLocker / Aadhaar network.'}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  12-Digit Aadhaar Number
                </label>
                <input
                  type="text"
                  value={applicant.aadhaarNumber}
                  onChange={(e) => setApplicant({ ...applicant, aadhaarNumber: e.target.value })}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-3 font-mono font-bold text-center tracking-widest text-slate-900 dark:text-white outline-none focus:border-gov-blue"
                />
              </div>

              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-300 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>eKYC Status: Verified (Aadhaar Seeded Bank Linked)</span>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-3 bg-gradient-to-r from-gov-blue to-blue-700 text-white rounded-xl font-bold text-sm shadow hover:opacity-95 transition-opacity"
              >
                {language === 'mr' ? 'कागदपत्रे अपलोडकडे पुढे जा' : language === 'hi' ? 'दस्तावेज़ अपलोड के लिए आगे बढ़ें' : 'Proceed to Document OCR Upload'}
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Document OCR Scan & Auto-Fill */}
        {step === 2 && (
          <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
            <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-gov-saffron" />
                  <span>{language === 'mr' ? 'एआय कागदपत्रे ओसीआर स्कॅनर' : language === 'hi' ? 'एआई दस्तावेज़ ओसीआर स्कैनर' : 'AI Document OCR Extractor'}</span>
                </h2>
                <p className="text-xs text-slate-500">
                  {language === 'mr'
                    ? 'कागदपत्रे अपलोड करा. आमचे व्हिजन मॉडेल माहिती काढून फॉर्म आपोआप भरेल.'
                    : language === 'hi'
                    ? 'दस्तावेज़ अपलोड करें। हमारा विज़न मॉडल विवरण निकालकर फॉर्म स्वचालित भरेगा।'
                    : 'Upload required documents. Our AI vision model extracts fields and populates the application automatically.'}
                </p>
              </div>

              <span className="text-xs font-bold text-gov-blue bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                {uploadedDocs.length} Verified
              </span>
            </div>

            {/* Document Upload Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Aadhaar', 'PAN', 'Income', 'BankPassbook'].map((docType) => {
                const isUploaded = uploadedDocs.some((d) => d.docType === docType);
                
                return (
                  <div
                    key={docType}
                    className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
                      isUploaded
                        ? 'bg-emerald-500/10 border-emerald-500/40'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-gov-blue'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">{docType} Certificate</p>
                        <p className="text-[11px] text-slate-500">Format: PDF, PNG, JPG</p>
                      </div>

                      {isUploaded ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <Upload className="w-5 h-5 text-slate-400" />
                      )}
                    </div>

                    {isUploaded ? (
                      <div className="p-2 bg-white dark:bg-slate-950 rounded-xl border border-emerald-500/30 text-[11px]">
                        <p className="font-bold text-emerald-600 dark:text-emerald-400">AI OCR Extracted:</p>
                        <p className="text-slate-600 dark:text-slate-300 font-mono">
                          {uploadedDocs.find((d) => d.docType === docType)?.ocr.docNumber} (Conf: 98%)
                        </p>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleDocUpload(docType)}
                        disabled={ocrLoading}
                        className="w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold hover:bg-gov-blue hover:text-white transition-colors"
                      >
                        {ocrLoading ? 'Scanning...' : `Simulate AI Scan (${docType})`}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex justify-between items-center border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 text-slate-600 dark:text-slate-400 font-bold text-xs hover:underline"
              >
                Back
              </button>

              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 bg-gradient-to-r from-gov-blue to-blue-700 text-white rounded-xl font-bold text-xs shadow hover:opacity-95"
              >
                Confirm Extracted Details
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Form Details Confirmation */}
        {step === 3 && (
          <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                {language === 'mr' ? 'एआय ऑटो-फिल माहिती पडताळणी' : language === 'hi' ? 'एआई ऑटो-फिल विवरण समीक्षा' : 'AI Auto-Filled Application Form'}
              </h2>
              <p className="text-xs text-slate-500">
                All fields below have been pre-filled from your verified Aadhaar and OCR documents.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Full Legal Name</label>
                <input
                  type="text"
                  value={applicant.name}
                  onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-slate-900 dark:text-white outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Mobile Number</label>
                <input
                  type="text"
                  value={applicant.phone}
                  onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-slate-900 dark:text-white outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Bank Account Number (DBT)</label>
                <input
                  type="text"
                  value={applicant.bankAccount}
                  onChange={(e) => setApplicant({ ...applicant, bankAccount: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 font-mono font-bold text-slate-900 dark:text-white outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Bank IFSC Code</label>
                <input
                  type="text"
                  value={applicant.ifscCode}
                  onChange={(e) => setApplicant({ ...applicant, ifscCode: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 font-mono font-bold text-slate-900 dark:text-white outline-none"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 text-slate-600 dark:text-slate-400 font-bold text-xs hover:underline"
              >
                Back
              </button>

              <button
                onClick={() => setStep(4)}
                className="px-6 py-3 bg-gradient-to-r from-gov-blue to-blue-700 text-white rounded-xl font-bold text-xs shadow hover:opacity-95"
              >
                Review & Confirm
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Final Review */}
        {step === 4 && (
          <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                {language === 'mr' ? 'अंतिम अर्ज पुनरावलोकन' : language === 'hi' ? 'अंतिम आवेदन समीक्षा' : 'Final Application Review'}
              </h2>
              <p className="text-xs text-slate-500">
                Please confirm the details below before submitting directly to the Ministry portal.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3 text-xs">
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-500">Scheme Applied:</span>
                <span className="font-extrabold text-slate-900 dark:text-white">{getSchemeTitle(scheme, language)}</span>
              </div>

              <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-500">Beneficiary Name:</span>
                <span className="font-bold text-slate-900 dark:text-white">{applicant.name}</span>
              </div>

              <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-500">Aadhaar Linked Bank:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">{applicant.bankAccount} ({applicant.ifscCode})</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Direct Benefit Sanction:</span>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{getSchemeBenefit(scheme, language)}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setStep(3)}
                className="px-4 py-2 text-slate-600 dark:text-slate-400 font-bold text-xs hover:underline"
              >
                Back
              </button>

              <button
                onClick={submitApplication}
                className="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl font-extrabold text-sm shadow-lg hover:opacity-95 flex items-center space-x-2"
              >
                <Check className="w-5 h-5" />
                <span>Submit Application to Ministry</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Submission Receipt */}
        {step === 5 && (
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-emerald-500/40 space-y-6 shadow-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                {language === 'mr' ? 'अर्ज यशस्वीपणे सादर केला!' : language === 'hi' ? 'आवेदन सफलतापूर्वक जमा किया गया!' : 'Application Submitted Successfully!'}
              </h2>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Your application has been forwarded to the District Nodal Officer for verification.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 max-w-md mx-auto space-y-2">
              <p className="text-xs text-slate-400 font-bold uppercase">Application Reference Number</p>
              <p className="text-2xl font-black font-mono text-gov-blue dark:text-blue-400">{applicationNo}</p>
              <p className="text-[11px] text-slate-500">Save this reference number to trace your status.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Link
                href="/track"
                className="w-full sm:w-auto px-6 py-3 bg-gov-blue text-white rounded-xl font-bold text-xs shadow hover:bg-blue-700 flex items-center justify-center space-x-1.5"
              >
                <span>Track Status in Real-Time</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/dashboard/citizen"
                className="w-full sm:w-auto px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl font-bold text-xs border border-slate-200 dark:border-slate-700 hover:bg-slate-200"
              >
                Go to Citizen Dashboard
              </Link>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
