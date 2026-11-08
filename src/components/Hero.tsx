/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface HeroProps {
  onOpenBooking: (service?: string) => void;
  onOpenArticles: () => void;
  onFindOffice: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
}) => {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="accueil"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 bg-[#040e17] text-white overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background Image: Cabinet DERDAB COMPTA */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/image_4cefbb9c.png"
          alt="Cabinet Derdab Compta - Bureaux et accueil officiel Tanger & Tétouan"
          className="w-full h-full object-cover object-[center_22%] lg:object-[center_26%] filter brightness-[0.72] contrast-[1.08]"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040e17]/92 via-[#040e17]/75 to-[#040e17]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040e17] via-transparent to-[#040e17]/80" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Laurel wreath 2026, Headline & Parallelogram CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-start">
            
            {/* Laurel Wreath */}
            <div className="flex flex-wrap items-center gap-2">
              <svg className="w-5 h-7 text-white/90" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 28 C9 22 5 18 3 12 C1 8 3 3 5 2" />
                <path d="M9 24 C6 20 4 15 4 10" />
                <path d="M11 18 C8 15 6 12 7 8" />
                <path d="M11 12 C9 10 8 7 9 4" />
              </svg>

              <span className="font-mono text-sm sm:text-base font-extrabold tracking-widest text-white">
                2026
              </span>

              <svg className="w-5 h-7 text-white/90 scale-x-[-1]" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 28 C9 22 5 18 3 12 C1 8 3 3 5 2" />
                <path d="M9 24 C6 20 4 15 4 10" />
                <path d="M11 18 C8 15 6 12 7 8" />
                <path d="M11 12 C9 10 8 7 9 4" />
              </svg>

              <span className="text-xs text-teal-300 font-semibold ml-2">
                {t.hero.verifiedOEC}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-extrabold tracking-tight text-white leading-[1.15] text-balance break-words">
              {t.hero.mainTitle1} <br />
              <span className="text-[#c5f2f0]">{t.hero.mainTitle2}</span>
            </h1>

            {/* Skewed Parallelogram Main CTA button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="relative inline-flex items-center justify-center px-7 sm:px-10 py-4 text-sm sm:text-base font-bold text-slate-950 bg-[#c5f2f0] hover:bg-[#b0eae7] active:scale-95 transition-all shadow-xl hover:shadow-cyan-400/20 group rounded-xs"
                style={{
                  transform: isRTL ? 'skewX(12deg)' : 'skewX(-12deg)',
                }}
              >
                <span
                  className="font-extrabold tracking-wide"
                  style={{
                    transform: isRTL ? 'skewX(-12deg)' : 'skewX(12deg)',
                  }}
                >
                  {t.hero.ctaBooking}
                </span>
              </button>
            </div>

          </div>

          {/* Right Column: Rating, Experience Paragraph & Highlighted Specializations */}
          <div className="lg:col-span-5 space-y-5 text-slate-200 text-start">
            
            {/* Google Rating with Cyan Slash */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
              <span className="text-[#2dd4bf] font-black text-base sm:text-lg">/</span>
              <span className="text-white font-bold">4,8/5 Google</span>
              <div className="flex text-amber-400 text-xs tracking-widest">
                {'★★★★★'}
              </div>
            </div>

            {/* Experience Paragraph */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* Stats Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <div className="text-xl font-bold font-mono text-[#2dd4bf]">{t.hero.stat1Number}</div>
                <div className="text-[11px] text-slate-300 mt-0.5 leading-snug">{t.hero.stat1Label}</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <div className="text-xl font-bold font-mono text-[#2dd4bf]">{t.hero.stat2Number}</div>
                <div className="text-[11px] text-slate-300 mt-0.5 leading-snug">{t.hero.stat2Label}</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <div className="text-xl font-bold font-mono text-[#2dd4bf]">{t.hero.stat3Number}</div>
                <div className="text-[11px] text-slate-300 mt-0.5 leading-snug">{t.hero.stat3Label}</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Pied Header (Bottom of Hero): Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Expertise & Tenue comptable */}
          <div
            onClick={() => onOpenBooking(t.hero.card1Title)}
            className="group cursor-pointer p-5 sm:p-7 bg-[#0b1724]/85 hover:bg-[#0e1e2f]/95 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 shadow-xl text-start rounded-2xl sm:rounded-none"
          >
            {/* Square Icon 1 */}
            <div className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 overflow-hidden shadow-md border border-white/10 bg-[#040910] rounded-xl sm:rounded-none">
              <img
                src="/assets/aistudio/hero_footer_facturation_icon.png"
                alt={t.hero.card1Title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-2xl font-bold text-white mb-1.5 leading-snug group-hover:text-cyan-200 transition-colors">
                {t.hero.card1Title}
              </h2>
              <p className="text-xs sm:text-[15px] text-slate-200 leading-snug mb-1">
                {t.hero.card1Desc}
              </p>
              <p className="text-[11px] sm:text-sm text-slate-300 leading-snug mb-3">
                {t.hero.card1Badge}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-base font-semibold text-[#2dd4bf] group-hover:text-[#5eead4] transition-colors">
                <span>{t.hero.card1Link}</span>
                <span className={`font-bold transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                  {isRTL ? '‹' : '›'}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Conseil & Gestion d'entreprise */}
          <div
            onClick={() => onOpenBooking(t.hero.card2Title)}
            className="group cursor-pointer p-5 sm:p-7 bg-[#0b1724]/85 hover:bg-[#0e1e2f]/95 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 shadow-xl text-start rounded-2xl sm:rounded-none"
          >
            {/* Square Icon 2 */}
            <div className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 overflow-hidden shadow-md border border-white/10 bg-[#040910] rounded-xl sm:rounded-none">
              <img
                src="/assets/aistudio/hero_footer_coeur_icon.png"
                alt={t.hero.card2Title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-2xl font-bold text-white mb-1.5 leading-snug group-hover:text-cyan-200 transition-colors">
                {t.hero.card2Title}
              </h2>
              <p className="text-xs sm:text-[15px] text-slate-200 leading-snug mb-3">
                {t.hero.card2Desc}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-base font-semibold text-[#2dd4bf] group-hover:text-[#5eead4] transition-colors">
                <span>{t.hero.card2Link}</span>
                <span className={`font-bold transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                  {isRTL ? '‹' : '›'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
