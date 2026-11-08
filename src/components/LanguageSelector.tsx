/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { SupportedLanguage } from '../i18n/translations.ts';

interface LanguageSelectorProps {
  variant?: 'desktop-header' | 'mobile-drawer' | 'footer';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'desktop-header',
  className = '',
}) => {
  const { language, setLanguage, languages, currentLanguageMeta } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (code: SupportedLanguage) => {
    setLanguage(code);
    setIsOpen(false);
  };

  // Mobile drawer variant: clean button grid
  if (variant === 'mobile-drawer') {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-300">
          <Globe className="w-3.5 h-3.5 text-[#2dd4bf]" />
          <span>Langue / Language / Idioma / اللغة :</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {languages.map((lang) => {
            const isActive = lang.code === language;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-xs font-bold transition-all border ${
                  isActive
                    ? 'bg-[#c5f2f0] text-slate-950 border-teal-300 shadow-md scale-102'
                    : 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10 hover:border-white/20'
                }`}
              >
                <span className="text-base mb-0.5 leading-none">{lang.flag}</span>
                <span className="text-[11px]">{lang.short}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Footer variant: segmented selector
  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl ${className}`}>
        <Globe className="w-4 h-4 text-[#2dd4bf] ml-1.5 mr-0.5 shrink-0" />
        {languages.map((lang) => {
          const isActive = lang.code === language;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleSelect(lang.code)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#c5f2f0] text-slate-950 shadow-xs font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{lang.flag}</span>
              <span className="hidden sm:inline">{lang.label}</span>
              <span className="sm:hidden">{lang.short}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Desktop header variant: stylish glassmorphism pill dropdown
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#2dd4bf]/40"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-base leading-none">{currentLanguageMeta.flag}</span>
        <span className="font-bold tracking-wide uppercase text-[11px]">{currentLanguageMeta.short}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-white' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute top-full right-0 mt-2 w-48 bg-[#0a1724]/95 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-white/10 mb-1">
            Sélectionner la langue
          </div>
          {languages.map((lang) => {
            const isActive = lang.code === language;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isActive}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-colors ${
                  isActive
                    ? 'bg-[#c5f2f0] text-slate-950 font-bold shadow-xs'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base leading-none">{lang.flag}</span>
                  <span className="tracking-wide">{lang.label}</span>
                </div>
                {isActive && <Check className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
