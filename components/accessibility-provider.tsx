'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, LanguageCode } from '@/lib/translations';

interface AccessibilityContextType {
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  t: (key: string, fallback?: string) => string;
}

const AccessibilityContext = createContext<AccessibilityContextType>({
  fontSize: 'normal',
  setFontSize: () => {},
  language: 'en',
  setLanguage: () => {},
  darkMode: false,
  setDarkMode: () => {},
  t: (key: string, fallback?: string) => fallback || key
});

// Strictly 3 Languages Only: English, Hindi, Marathi
export const INDIAN_LANGUAGES: { code: LanguageCode; name: string; native: string }[] = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिंदी' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' }
];

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [language, setLanguageState] = useState<LanguageCode>('en');
  const [darkMode, setDarkMode] = useState(false);

  // Load language preference from localStorage if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('jansahay_lang') as LanguageCode;
      if (savedLang && (savedLang === 'en' || savedLang === 'hi' || savedLang === 'mr')) {
        setLanguageState(savedLang);
      }
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('jansahay_lang', lang);
    }
  };

  useEffect(() => {
    // Apply Font Scale
    const root = document.documentElement;
    if (fontSize === 'normal') root.style.setProperty('--font-scale', '100%');
    if (fontSize === 'large') root.style.setProperty('--font-scale', '115%');
    if (fontSize === 'xlarge') root.style.setProperty('--font-scale', '130%');

    // Apply Dark Mode
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [fontSize, darkMode]);

  // Translation lookup helper
  const t = (key: string, fallback?: string): string => {
    if (TRANSLATIONS[key] && TRANSLATIONS[key][language]) {
      return TRANSLATIONS[key][language];
    }
    if (TRANSLATIONS[key] && TRANSLATIONS[key]['en']) {
      return TRANSLATIONS[key]['en'];
    }
    return fallback || key;
  };

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        language,
        setLanguage,
        darkMode,
        setDarkMode,
        t
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export const useAccessibility = () => useContext(AccessibilityContext);
export const useTranslation = () => {
  const { t, language, setLanguage } = useAccessibility();
  return { t, language, setLanguage };
};
