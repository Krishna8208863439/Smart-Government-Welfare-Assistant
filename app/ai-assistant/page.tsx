'use client';

import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  Upload, 
  Sparkles, 
  User, 
  Globe, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useAccessibility, INDIAN_LANGUAGES } from '@/components/accessibility-provider';

interface Message {
  id: string;
  sender: 'USER' | 'AI';
  text: string;
  timestamp: string;
  suggestedSchemes?: string[];
}

export default function AIAssistantPage() {
  const { language, setLanguage } = useAccessibility();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'AI',
      text: 'Namaste! I am JanSahay AI, your smart government welfare assistant. Ask me anything about 1,000+ central & state schemes, check eligibility, or ask about required documents in your preferred language.',
      timestamp: '11:34 AM',
      suggestedSchemes: ['PM-KISAN', 'Ayushman Bharat', 'PMAY Housing Subsidy']
    }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'USER',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsThinking(true);

    setTimeout(() => {
      let aiText = `Under Project Viksit Bharat 2026 guidelines for query: "${query}", here is the verified information:`;
      let schemes: string[] | undefined = undefined;

      const lower = query.toLowerCase();
      if (lower.includes('farmer') || lower.includes('kisan')) {
        aiText = 'Based on your profile as a landholding farmer, you are 95% eligible for PM-KISAN (Direct ₹6,000/yr transfer) and PM Fasal Bima Yojana (Crop Insurance). Required documents include Land Khatoni and Aadhaar-linked Bank Passbook.';
        schemes = ['Pradhan Mantri Kisan Samman Nidhi', 'PM Fasal Bima Yojana'];
      } else if (lower.includes('health') || lower.includes('ayushman') || lower.includes('hospital')) {
        aiText = 'Ayushman Bharat PM-JAY provides up to ₹5 Lakh cashless health cover per family per year across all empanelled hospitals. You can generate your Ayushman Golden Card instantly using Aadhaar OTP.';
        schemes = ['Ayushman Bharat PM-JAY'];
      } else if (lower.includes('scholarship') || lower.includes('student')) {
        aiText = 'For post-matric and college students with family income under ₹2.5L, the National Scholarship Portal (NSP) reimburses full tuition fees + monthly stipend.';
        schemes = ['National Post-Matric Scholarship'];
      } else {
        aiText = `JanSahay AI evaluated your question in ${INDIAN_LANGUAGES.find(l => l.code === language)?.name || 'English'}. You can check complete eligibility rules or launch an auto-filled application directly from our Discovery catalog.`;
        schemes = ['PM-KISAN', 'Ayushman Bharat', 'PMAY Housing'];
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'AI',
        text: aiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedSchemes: schemes
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsThinking(false);
    }, 1000);
  };

  const toggleVoiceInput = () => {
    if (!isListening) {
      setIsListening(true);
      setTimeout(() => {
        setInput('Which schemes am I eligible for as a landholding farmer?');
        setIsListening(false);
      }, 2500);
    } else {
      setIsListening(false);
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis audio playback simulated.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8 flex-1 w-full flex flex-col">
        
        {/* Header Bar */}
        <div className="glass-panel p-5 rounded-3xl border border-slate-200 dark:border-slate-800 flex justify-between items-center mb-6 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-gov-blue via-gov-saffron to-gov-green p-0.5 flex items-center justify-center shadow">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-1.5">
                <span>JanSahay Multilingual AI Assistant</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </h1>
              <p className="text-[11px] text-slate-500">
                Voice & Text Assistant • Supporting 12 Indian Languages
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-gov-blue" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-bold rounded-lg p-1.5"
            >
              {INDIAN_LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.native} ({l.name})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Chat Messages Container */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex-1 min-h-[420px] max-h-[520px] overflow-y-auto space-y-4 shadow-xl">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start space-x-3 ${msg.sender === 'USER' ? 'flex-row-reverse space-x-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs shadow ${
                  msg.sender === 'USER'
                    ? 'bg-gov-blue text-white'
                    : 'bg-gradient-to-tr from-gov-saffron to-gov-green text-white'
                }`}
              >
                {msg.sender === 'USER' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-4 rounded-2xl max-w-lg space-y-2 text-xs leading-relaxed shadow-sm ${
                  msg.sender === 'USER'
                    ? 'bg-gov-blue text-white rounded-tr-none'
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-tl-none'
                }`}
              >
                <p>{msg.text}</p>

                {msg.suggestedSchemes && (
                  <div className="pt-2 border-t border-slate-200/40 dark:border-slate-700 space-y-1">
                    <p className="font-bold text-[10px] uppercase tracking-wider text-amber-500">Recommended Schemes:</p>
                    <div className="flex flex-wrap gap-1">
                      {msg.suggestedSchemes.map((s, idx) => (
                        <span key={idx} className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white px-2 py-0.5 rounded text-[10px] font-bold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-1 text-[10px] opacity-75">
                  <span>{msg.timestamp}</span>
                  {msg.sender === 'AI' && (
                    <button
                      onClick={() => speakText(msg.text)}
                      className="hover:text-amber-400 p-0.5"
                      title="Audio Speech Synthesis"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isThinking && (
            <div className="flex items-center space-x-2 text-xs text-slate-400 italic">
              <Bot className="w-4 h-4 animate-spin text-gov-blue" />
              <span>JanSahay AI is processing scheme regulations...</span>
            </div>
          )}
        </div>

        {/* Quick Trigger Chips */}
        <div className="flex flex-wrap gap-2 py-3">
          {[
            'Which schemes am I eligible for as a farmer?',
            'What documents are needed for PM-KISAN?',
            'How to get Ayushman Golden Card?',
            'Check application status JAN-2026-891234'
          ].map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-[11px] font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-gov-blue rounded-xl px-3 py-1.5 text-slate-700 dark:text-slate-300 shadow-sm transition-all"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Controls */}
        <div className="glass-panel p-3 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center space-x-2 shadow-lg">
          {/* Voice Assistant Button */}
          <button
            onClick={toggleVoiceInput}
            className={`p-3 rounded-xl transition-all ${
              isListening
                ? 'bg-rose-500 text-white animate-pulse'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
            title="Speech-to-Text Voice Input"
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5 text-gov-blue" />}
          </button>

          {/* Text Input */}
          <input
            type="text"
            placeholder={isListening ? 'Listening to voice...' : 'Type your question or scheme query...'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-transparent text-sm font-semibold text-slate-900 dark:text-white outline-none px-2"
          />

          {/* Send Button */}
          <button
            onClick={() => handleSend()}
            className="p-3 bg-gradient-to-r from-gov-blue to-blue-700 text-white rounded-xl shadow hover:opacity-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}
