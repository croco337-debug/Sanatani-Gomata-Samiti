'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Language } from '@/types';
import en from './translations/en';
import type { TranslationKeys } from './translations/en';

// Lazy load translations
const translations: Record<Language, () => Promise<{ default: TranslationKeys }>> = {
  en: () => Promise.resolve({ default: en }),
  hi: () => import('./translations/hi'),
  bn: () => import('./translations/bn'),
};

type NestedKeyOf<T> = T extends object
  ? { [K in keyof T & string]: T[K] extends object ? `${K}.${NestedKeyOf<T[K]>}` : K }[keyof T & string]
  : never;

type TranslationKey = NestedKeyOf<TranslationKeys>;

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path; // Return the key if not found
    }
  }
  return typeof current === 'string' ? current : path;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
  isLoading: false,
});

const STORAGE_KEY = 'sgs-language';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [currentTranslations, setCurrentTranslations] = useState<TranslationKeys>(en);
  const [isLoading, setIsLoading] = useState(false);

  // Load saved language preference
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved && ['en', 'hi', 'bn'].includes(saved)) {
      setLanguageState(saved);
      loadTranslation(saved);
    }
  }, []);

  const loadTranslation = async (lang: Language) => {
    if (lang === 'en') {
      setCurrentTranslations(en);
      return;
    }
    setIsLoading(true);
    try {
      const module = await translations[lang]();
      setCurrentTranslations(module.default);
    } catch (error) {
      console.error(`Failed to load ${lang} translations:`, error);
      setCurrentTranslations(en);
    } finally {
      setIsLoading(false);
    }
  };

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    loadTranslation(lang);
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback(
    (key: string, replacements?: Record<string, string>): string => {
      let value = getNestedValue(currentTranslations as unknown as Record<string, unknown>, key);
      if (replacements) {
        Object.entries(replacements).forEach(([k, v]) => {
          value = value.replace(`{${k}}`, v);
        });
      }
      return value;
    },
    [currentTranslations]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export type { TranslationKey };
