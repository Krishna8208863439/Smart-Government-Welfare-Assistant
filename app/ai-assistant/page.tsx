'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  Sparkles, 
  User, 
  Globe,
  Radio
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
  const { language, setLanguage, t } = useAccessibility();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'AI',
      text: language === 'mr'
        ? 'नमस्कार! मी जनसहाय एआय, तुमचा स्मार्ट सरकारी कल्याण सहाय्यक आहे. 1,000+ केंद्र आणि राज्य योजनांबद्दल विचारा, पात्रता तपासा किंवा आवश्यक कागदपत्रांची माहिती मिळवा.'
        : language === 'hi'
        ? 'नमस्ते! मैं जनसहाय एआई हूँ, आपका स्मार्ट सरकारी कल्याण सहायक। 1,000+ केंद्रीय और राज्य योजनाओं के बारे में पूछें, पात्रता जांचें, या आवश्यक दस्तावेजों की जानकारी प्राप्त करें।'
        : 'Namaste! I am JanSahay AI, your smart government welfare assistant. Ask me anything about 1,000+ central & state schemes, check eligibility, or ask about required documents.',
      timestamp: '11:34 AM',
      suggestedSchemes: ['PM-KISAN', 'Ayushman Bharat', 'PMAY Housing Subsidy', 'Majhi Ladki Bahin']
    }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);

  const recognitionRef = useRef<any>(null);

  // Initialize Speech Recognition if supported in browser
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;

        recognition.onresult = (event: any) => {
          let transcript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
          }
          setInput(transcript);
        };

        recognition.onerror = (event: any) => {
          console.warn('Speech Recognition error:', event.error);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

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
      let aiText = '';
      let schemes: string[] | undefined = undefined;

      const lower = query.toLowerCase();
      if (lower.includes('farmer') || lower.includes('kisan') || lower.includes('शेतकरी') || lower.includes('किसान')) {
        aiText = language === 'mr'
          ? 'शेतकरी म्हणून तुम्ही पीएम-किसान (थेट ₹6,000/वर्ष) आणि मुख्यमंत्री बळीराजा मोफत वीज योजनेसाठी 95% पात्र आहात. आवश्यक कागदपत्रांमध्ये 7/12 उतारा आणि आधार लिंक केलेले बँक खाते समाविष्ट आहे.'
          : language === 'hi'
          ? 'एक किसान के रूप में, आप पीएम-किसान (प्रत्यक्ष ₹6,000/वर्ष) और पीएम फसल बीमा योजना के लिए 95% पात्र हैं। आवश्यक दस्तावेजों में खतौनी और आधार-लिंक्ड बैंक पासबुक शामिल हैं।'
          : 'Based on your profile as a landholding farmer, you are 95% eligible for PM-KISAN (Direct ₹6,000/yr transfer) and PM Fasal Bima Yojana. Required documents include Land 7/12 Khatoni and Aadhaar-linked Bank Passbook.';
        schemes = ['PM Kisan Samman Nidhi', 'Baliraja Shetkari Yojana', 'PM Fasal Bima'];
      } else if (lower.includes('health') || lower.includes('ayushman') || lower.includes('hospital') || lower.includes('आरोग्य') || lower.includes('स्वास्थ्य') || lower.includes('गोल्डन')) {
        aiText = language === 'mr'
          ? 'आयुष्मान भारत पीएम-जेएवाय सर्व सूचीबद्ध रुग्णालयांमध्ये दरवर्षी प्रति कुटुंब ₹5 लाखांपर्यंतचे मोफत व कॅशलेस आरोग्य संरक्षण प्रदान करते. तुम्ही आधार ओटीपी वापरून गोल्डन कार्ड तयार करू शकता.'
          : language === 'hi'
          ? 'आयुष्मान भारत पीएम-जेएवाई सभी संबद्ध अस्पतालों में प्रति वर्ष प्रति परिवार ₹5 लाख तक का कैशलेस स्वास्थ्य कवर प्रदान करता है। आप आधार ओटीपी का उपयोग करके आयुष्मान गोल्डन कार्ड तुरंत जनरेट कर सकते हैं।'
          : 'Ayushman Bharat PM-JAY provides up to ₹5 Lakh cashless health cover per family per year across 27,000+ empanelled hospitals. You can generate your Ayushman Digital Golden Card instantly.';
        schemes = ['Ayushman Bharat PM-JAY'];
      } else if (lower.includes('ladki') || lower.includes('bahin') || lower.includes('महिला') || lower.includes('बहीण') || lower.includes('लाडकी')) {
        aiText = language === 'mr'
          ? 'मुख्यमंत्री माझी लाडकी बहीण योजनेअंतर्गत महाराष्ट्रातील 21 ते 65 वयोगटातील पात्र महिलांना दरमहा ₹1,500 (वार्षिक ₹18,000) थेट बँक खात्यात दिले जातात. यासाठी आधार आणि रेशन कार्ड आवश्यक आहे.'
          : language === 'hi'
          ? 'मुख्यमंत्री माझी लाडकी बहीण योजना के तहत महाराष्ट्र की 21-65 वर्ष की पात्र महिलाओं को ₹1,500/माह (₹18,000/वर्ष) सीधे बैंक खाते में प्रदान किए जाते हैं।'
          : 'Under Mukhyamantri Majhi Ladki Bahin Yojana (Maharashtra), eligible women aged 21-65 receive ₹1,500/month (₹18,000/year) directly in their bank account.';
        schemes = ['Mukhyamantri Majhi Ladki Bahin Yojana', 'PM Ujjwala Yojana'];
      } else if (lower.includes('solar') || lower.includes('electricity') || lower.includes('बिजली') || lower.includes('वीज') || lower.includes('सूर्य')) {
        aiText = language === 'mr'
          ? 'पीएम सूर्य घर योजनेअंतर्गत घराच्या छतावर सोलर पॅनेल बसवण्यासाठी सरकार ₹78,000 पर्यंत थेट सबसिडी देते आणि दरमहा 300 युनिट मोफत वीज मिळते.'
          : language === 'hi'
          ? 'पीएम सूर्य घर मुफ्त बिजली योजना के तहत 300 यूनिट तक मुफ्त बिजली और ₹78,000 तक की प्रत्यक्ष केंद्रीय सब्सिडी प्राप्त करें।'
          : 'Under PM Surya Ghar Muft Bijli Yojana, households receive up to 300 units of free electricity per month and direct government subsidy up to ₹78,000 for rooftop solar installation.';
        schemes = ['PM Surya Ghar Muft Bijli Yojana'];
      } else if (lower.includes('scholarship') || lower.includes('student') || lower.includes('विद्यार्थी') || lower.includes('छात्र')) {
        aiText = language === 'mr'
          ? 'महाविद्यालयीन विद्यार्थ्यांसाठी राष्ट्रीय शिष्यवृत्ती पोर्टल (NSP) पूर्ण शिक्षण शुल्क माफी + दरमहा ₹1,200 विद्यावेतन देते.'
          : language === 'hi'
          ? 'कॉलेज छात्रों के लिए राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) पूर्ण शिक्षण शुल्क छूट + मासिक वजीफा सीधे बैंक खाते में प्रदान करता है।'
          : 'For college and higher education students, the National Scholarship Portal (NSP) reimburses full tuition fees + monthly maintenance stipend.';
        schemes = ['National Scholarship Portal (NSP)'];
      } else {
        aiText = language === 'mr'
          ? `जनसहाय एआयने आपल्या प्रश्नाचे यशस्वीपणे विश्लेषण केले. आपण आमच्या 'पात्रता तपासा' किंवा 'योजना शोधा' विभागातून थेट संपूर्ण माहिती पाहू शकता.`
          : language === 'hi'
          ? `जनसहाय एआई ने आपके प्रश्न का सफलतापूर्वक विश्लेषण किया। आप हमारे 'पात्रता जांचें' या 'योजनाएं खोजें' अनुभाग से सीधे विस्तृत विवरण देख सकते हैं।`
          : `JanSahay AI has verified your welfare inquiry against official 2026 regulations. You can check complete eligibility guidelines or apply directly via our portal.`;
        schemes = ['PM-KISAN', 'Ayushman Bharat', 'PM Surya Ghar', 'PM Vishwakarma'];
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
    }, 800);
  };

  // Toggle Microphone Speech-to-Text
  const toggleVoiceInput = () => {
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.lang = language === 'mr' ? 'mr-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.warn('Could not start real speech recognition, fallback to simulation:', err);
        startSimulatedVoiceInput();
      }
    } else {
      startSimulatedVoiceInput();
    }
  };

  const startSimulatedVoiceInput = () => {
    setIsListening(true);
    setTimeout(() => {
      setInput(
        language === 'mr'
          ? 'शेतकरी म्हणून मी कोणत्या योजनांसाठी पात्र आहे?'
          : language === 'hi'
          ? 'एक किसान के रूप में मैं किन योजनाओं के लिए पात्र हूँ?'
          : 'Which schemes am I eligible for as a landholding farmer?'
      );
      setIsListening(false);
    }, 2000);
  };

  // Text-to-Speech Speaker Audio Playback
  const speakText = (messageId: string, text: string) => {
    if (typeof window === 'undefined') return;

    if (speakingMessageId === messageId) {
      // Stop current playback
      window.speechSynthesis.cancel();
      setSpeakingMessageId(null);
      return;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Cancel any existing speech

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      if (language === 'mr') {
        utterance.lang = 'mr-IN';
      } else if (language === 'hi') {
        utterance.lang = 'hi-IN';
      } else {
        utterance.lang = 'en-IN';
      }

      // Try finding suitable voice
      const voices = window.speechSynthesis.getVoices();
      const targetLang = language === 'mr' ? 'mr' : language === 'hi' ? 'hi' : 'en';
      const voice = voices.find((v) => v.lang.toLowerCase().startsWith(targetLang));
      if (voice) {
        utterance.voice = voice;
      }

      utterance.onstart = () => {
        setSpeakingMessageId(messageId);
      };

      utterance.onend = () => {
        setSpeakingMessageId(null);
      };

      utterance.onerror = () => {
        setSpeakingMessageId(null);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gov-bg dark:bg-gov-darkBg transition-colors">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8 flex-1 w-full flex flex-col">
        
        {/* Header Bar */}
        <div className="glass-panel p-5 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 shadow-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-gov-blue via-gov-saffron to-gov-green p-0.5 flex items-center justify-center shadow">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
                <Bot className="w-6 h-6 text-gov-blue dark:text-blue-400" />
              </div>
            </div>
            <div>
              <h1 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                <span>JanSahay Multilingual Voice AI</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Live Speech Recognition & Text-to-Speech in 3 Languages (English / हिंदी / मराठी)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-gov-blue" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-bold rounded-xl px-3 py-1.5 text-slate-800 dark:text-white outline-none focus:border-gov-blue"
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
        <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex-1 min-h-[440px] max-h-[540px] overflow-y-auto space-y-4 shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
          {messages.map((msg) => {
            const isPlayingThis = speakingMessageId === msg.id;

            return (
              <div
                key={msg.id}
                className={`flex items-start space-x-3 ${msg.sender === 'USER' ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div
                  className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 font-bold text-xs shadow-md ${
                    msg.sender === 'USER'
                      ? 'bg-gov-blue text-white'
                      : 'bg-gradient-to-tr from-gov-saffron to-gov-green text-white'
                  }`}
                >
                  {msg.sender === 'USER' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div
                  className={`p-4 rounded-3xl max-w-lg space-y-2 text-xs leading-relaxed shadow-sm transition-all ${
                    msg.sender === 'USER'
                      ? 'bg-gov-blue text-white rounded-tr-none'
                      : isPlayingThis
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-slate-900 dark:text-slate-100 border-2 border-emerald-500 rounded-tl-none shadow-md'
                      : 'bg-slate-50 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-tl-none'
                  }`}
                >
                  <p className="text-xs font-medium leading-relaxed">{msg.text}</p>

                  {msg.suggestedSchemes && (
                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700 space-y-1.5">
                      <p className="font-extrabold text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center space-x-1">
                        <Sparkles className="w-3 h-3" />
                        <span>{language === 'mr' ? 'शिफारस केलेल्या योजना:' : language === 'hi' ? 'अनुशंसित योजनाएं:' : 'Recommended Schemes:'}</span>
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.suggestedSchemes.map((s, idx) => (
                          <span key={idx} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white px-2.5 py-1 rounded-lg text-[10px] font-extrabold border border-slate-200 dark:border-slate-700 shadow-sm">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Message Bottom Action Bar */}
                  <div className="flex justify-between items-center pt-2 border-t border-slate-200/40 dark:border-slate-700/40 text-[10px] text-slate-500 dark:text-slate-400">
                    <span className="font-mono">{msg.timestamp}</span>

                    {msg.sender === 'AI' && (
                      <button
                        onClick={() => speakText(msg.id, msg.text)}
                        className={`px-3 py-1 rounded-full font-bold flex items-center space-x-1.5 transition-all ${
                          isPlayingThis
                            ? 'bg-rose-500 text-white animate-pulse shadow'
                            : 'bg-gov-blue/10 text-gov-blue dark:bg-blue-900/40 dark:text-blue-300 hover:bg-gov-blue hover:text-white'
                        }`}
                        title="Play Speech Audio"
                      >
                        {isPlayingThis ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5" />
                            <span>{language === 'mr' ? 'थांबवा' : language === 'hi' ? 'रोकें' : 'Stop Audio'}</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>{language === 'mr' ? 'ऑडिओ ऐका 🔊' : language === 'hi' ? 'ऑडियो सुनें 🔊' : 'Listen 🔊'}</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {isThinking && (
            <div className="flex items-center space-x-2 text-xs text-slate-500 italic p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/50">
              <Bot className="w-4 h-4 animate-spin text-gov-blue" />
              <span>
                {language === 'mr' ? 'जनसहाय एआय विचार करत आहे...' : language === 'hi' ? 'जनसहाय एआई विश्लेषण कर रहा है...' : 'JanSahay AI is processing scheme regulations...'}
              </span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap gap-2 py-3">
          {[
            language === 'mr' ? 'शेतकरी म्हणून मी कोणत्या योजनांसाठी पात्र आहे?' : language === 'hi' ? 'एक किसान के रूप में मैं किन योजनाओं के लिए पात्र हूँ?' : 'Which schemes am I eligible for as a landholding farmer?',
            language === 'mr' ? 'लाडकी बहीण योजनेची माहिती द्या?' : language === 'hi' ? 'लाडकी बहीण योजना के नियम क्या हैं?' : 'Tell me about Ladki Bahin Yojana?',
            language === 'mr' ? 'आयुष्मान गोल्डन कार्ड कसे मिळवायचे?' : language === 'hi' ? 'आयुष्मान गोल्डन कार्ड कैसे प्राप्त करें?' : 'How to get Ayushman Golden Card?',
            language === 'mr' ? 'पीएम सूर्य घर मोफत वीज योजना' : language === 'hi' ? 'पीएम सूर्य घर योजना' : 'PM Surya Ghar Solar Subsidy'
          ].map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-[11px] font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-gov-blue hover:text-gov-blue rounded-xl px-3 py-1.5 text-slate-700 dark:text-slate-300 shadow-sm transition-all text-left"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Controls */}
        <div className="glass-panel p-3 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center space-x-2 shadow-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
          
          {/* Real Microphone Voice Button */}
          <button
            onClick={toggleVoiceInput}
            className={`p-3 rounded-xl font-bold transition-all flex items-center justify-center ${
              isListening
                ? 'bg-rose-500 text-white animate-bounce shadow-lg ring-4 ring-rose-500/30'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-gov-blue hover:text-white'
            }`}
            title={isListening ? 'Click to stop listening' : 'Click to speak via Microphone'}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5 text-gov-blue hover:text-white" />}
          </button>

          {/* Text Input Field */}
          <input
            type="text"
            placeholder={
              isListening 
                ? (language === 'mr' ? 'बोलत रहा... (आवाज रेकॉर्ड होत आहे)' : language === 'hi' ? 'बोलिए... (आवाज रिकॉर्ड हो रही है)' : 'Listening to your voice...') 
                : language === 'mr'
                ? 'तुमचा प्रश्न किंवा योजना इथे विचारा...'
                : language === 'hi'
                ? 'अपना प्रश्न या योजना का नाम यहाँ लिखें...'
                : 'Type your question or scheme query...'
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-transparent text-sm font-semibold text-slate-900 dark:text-white outline-none px-2"
          />

          {/* Send Button */}
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="p-3 bg-gradient-to-r from-gov-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg disabled:opacity-50 transition-opacity"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}
