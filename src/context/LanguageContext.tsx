/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLanguage, LanguageMeta, LANGUAGES, translations } from '../i18n/translations.ts';

export type TranslationType = typeof translations.fr;

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationType;
  isRTL: boolean;
  dir: 'ltr' | 'rtl';
  currentLanguageMeta: LanguageMeta;
  languages: LanguageMeta[];
}

const STORAGE_KEY = 'derdab_selected_lang';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;
      if (saved && ['fr', 'es', 'en', 'ar'].includes(saved)) {
        return saved;
      }
    } catch {
      // localStorage may fail in private mode
    }
    return 'fr';
  });

  const currentMeta = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];
  const isRTL = currentMeta.dir === 'rtl';
  const dir = currentMeta.dir;

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    // Synchronize HTML attributes for accessibility and browser native handling
    document.documentElement.lang = language;
    document.documentElement.dir = dir;

    if (isRTL) {
      document.documentElement.classList.add('font-cairo');
    } else {
      document.documentElement.classList.remove('font-cairo');
    }
  }, [language, dir, isRTL]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    isRTL,
    dir,
    currentLanguageMeta: currentMeta,
    languages: LANGUAGES,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
