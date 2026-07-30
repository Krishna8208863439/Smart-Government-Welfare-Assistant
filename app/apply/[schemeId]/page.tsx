'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/router';
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
  AlertCircle, 
  Download, 
  Clock, 
  RefreshCw,
  Eye
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SCHEMES_DATABASE } from '@/lib/schemes-data';
import { parseDocumentOCR, ExtractedDocumentData } from '@/lib/ocr-engine';

export default function ApplicationWizardPage() {
  const params = useParams();
  const schemeId = (params?.schemeId as string) || 'pm-kisan';
  const scheme = SCHEMES_DATABASE.find((s) => s.id === schemeId) || SCHEMES_DATABASE[0];

  const [step, setStep] = useState<number>(1); // 1: eKYC, 2: Document OCR, 3: Form Details, 4: Review, 5: Receipt
  const [ocrLoading, setOcrLoading] = useState(false);

  // Form State
  const [applicant, setApplicant] = useState({
    name: 'Rajesh Kumar Sharma',
    aadhaarNumber: '9812-4512-8912',
    panNumber: 'ABCPS8912K',
    dob: '1988-04-14',
    gender: 'Male',
    phone: '+91 98765 43210',
    email: 'rajesh.sharma@example.com',
    state: 'Uttar Pradesh',
    district: 'Gautam Buddha Nagar',
    address: 'H-42, Sector 15, NOIDA, Uttar Pradesh - 201301',
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
    }, 1200);
  };

  const submitApplication = () => {
    const generatedNo = `JAN-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setApplicationNo(generatedNo);
    setStep(5);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg">
      <Navbar />

      {/* Header Stepper */}
      <section className="bg-gradient-to-r from-gov-darkBg via-slate-900 to-gov-darkBg text-white py-8 px-4 border-b border-slate-800">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400">
            <span>Official Application Portal</span>
            <span>Scheme: {scheme.title}</span>
          </div>

          {/* Stepper Indicator */}
          <div className="grid grid-cols-5 gap-2 pt-2">
            {[
              { id: 1, label: '1. eKYC Auth' },
              { id: 2, label: '2. OCR Documents' },
              { id: 3, label: '3. Auto-Filled Form' },
              { id: 4, label: '4. Final Review' },
              { id: 5, label: '5. Receipt' }
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
          <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gov-blue/10 text-gov-blue dark:text-blue-400 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Aadhaar Instant eKYC Verification</h2>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                JanSahay AI integrates with MeitY eKYC sandbox to verify your identity using official Aadhaar OTP credentials.
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
                  className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-3 font-mono font-bold text-center tracking-widest text-slate-900 dark:text-white"
                />
              </div>

              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-300 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Simulated eKYC Status: Verified (Aadhaar Linked)</span>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-3 bg-gradient-to-r from-gov-blue to-blue-700 text-white rounded-xl font-bold text-sm shadow hover:opacity-95 transition-opacity"
              >
                Proceed to Document OCR Upload
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Document OCR Scan & Auto-Fill */}
        {step === 2 && (
          <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl">
            <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-gov-saffron" />
                  <span>AI Document OCR Extractor</span>
                </h2>
                <p className="text-xs text-slate-500">
                  Upload required documents. Our AI vision model extracts fields and populates the application automatically.
                </p>
              </div>

              <span className="text-xs font-bold text-gov-blue bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                {uploadedDocs.length} of {scheme.requiredDocs.length} Verified
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
                        <p className="text-[11px] text-slate-500">Required format: PDF, PNG, JPG</p>
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
                        {ocrLoading ? 'Scanning Document via AI OCR...' : `Simulate Upload & OCR (${docType})`}
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
          <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="text-xl font-black text-slate-900 dark:text-white">Verify Auto-Filled Application Details</h2>
              <p className="text-xs text-slate-500">Review all extracted information prior to final submission.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Full Applicant Name</label>
                <input
                  type="text"
                  value={applicant.name}
                  onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-bold text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">PAN Number</label>
                <input
                  type="text"
                  value={applicant.panNumber}
                  onChange={(e) => setApplicant({ ...applicant, panNumber: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-mono font-bold text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Bank Account Number (DBT)</label>
                <input
                  type="text"
                  value={applicant.bankAccount}
                  onChange={(e) => setApplicant({ ...applicant, bankAccount: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-mono font-bold text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">IFSC Code</label>
                <input
                  type="text"
                  value={applicant.ifscCode}
                  onChange={(e) => setApplicant({ ...applicant, ifscCode: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-mono font-bold text-slate-900 dark:text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Permanent Residential Address</label>
                <input
                  type="text"
                  value={applicant.address}
                  onChange={(e) => setApplicant({ ...applicant, address: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-bold text-slate-900 dark:text-white"
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
                Proceed to Review & Sign
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review & E-Sign */}
        {step === 4 && (
          <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="text-xl font-black text-slate-900 dark:text-white">Final Application Summary & Legal Declaration</h2>
              <p className="text-xs text-slate-500">Sign electronically to complete submission.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
              <p><strong>Applicant Name:</strong> {applicant.name}</p>
              <p><strong>Aadhaar Hash:</strong> {applicant.aadhaarNumber}</p>
              <p><strong>Scheme Name:</strong> {scheme.title}</p>
              <p><strong>Target Bank Account:</strong> {applicant.bankAccount} ({applicant.ifscCode})</p>
            </div>

            <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-xs text-amber-900 dark:text-amber-300">
              <p className="font-bold">Citizen Undertaking:</p>
              <p className="mt-1 leading-relaxed">
                I hereby declare that all details furnished above are accurate to the best of my knowledge. I understand that submitting false documents is punishable under Section 420 of the Indian Penal Code.
              </p>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => setStep(3)}
                className="px-4 py-2 text-slate-600 dark:text-slate-400 font-bold text-xs hover:underline"
              >
                Back
              </button>

              <button
                onClick={submitApplication}
                className="px-8 py-3.5 bg-gradient-to-r from-gov-green to-emerald-600 text-white rounded-xl font-extrabold text-sm shadow-lg hover:opacity-95 flex items-center space-x-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>E-Sign & Submit Application</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Application Receipt */}
        {step === 5 && (
          <div className="glass-panel p-8 rounded-3xl border border-emerald-500/40 bg-emerald-500/5 dark:bg-emerald-950/20 space-y-6 text-center shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Application Submitted Successfully!</h2>
              <p className="text-xs text-slate-500">Your application has been routed to the Department Nodal Verification Team.</p>
            </div>

            <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-md mx-auto space-y-3">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Application Reference Number</p>
                <p className="text-2xl font-black font-mono text-gov-blue dark:text-blue-400 tracking-wider">
                  {applicationNo}
                </p>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 border-t border-slate-100 dark:border-slate-800 pt-2">
                <p><strong>Applicant:</strong> {applicant.name}</p>
                <p><strong>Scheme:</strong> {scheme.title}</p>
                <p><strong>Submitted Date:</strong> {new Date().toLocaleDateString()}</p>
                <p><strong>SMS Alert Sent To:</strong> {applicant.phone}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Link
                href="/track"
                className="px-6 py-3 bg-gov-blue text-white font-bold text-xs rounded-xl shadow hover:bg-blue-700"
              >
                Track Status Real-Time
              </Link>
              <button
                onClick={() => alert('Downloading Official Government Application Receipt PDF...')}
                className="px-6 py-3 bg-slate-800 text-white font-bold text-xs rounded-xl shadow hover:bg-slate-700 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Receipt PDF</span>
              </button>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
