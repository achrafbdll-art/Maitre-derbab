/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface OurStrengthSectionProps {
  onDiscoverOffices: () => void;
}

export const OurStrengthSection: React.FC<OurStrengthSectionProps> = ({
  onDiscoverOffices,
}) => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="bg-[#f5fbf9] py-16 sm:py-20 lg:py-24 border-b border-teal-100/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block: Kicker + Heading + Subtitle + Action link */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          
          {/* Slanted teal slash + "Notre force" */}
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div 
              className={`w-3.5 h-6 bg-[#009688] ${isRTL ? 'skew-x-[20deg]' : '-skew-x-[20deg]'} rounded-xs shadow-xs`} 
              aria-hidden="true" 
            />
            <span className="text-sm sm:text-base font-bold tracking-tight text-[#0a1724]">
              {t.strength.kicker}
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a1724] leading-tight mb-4">
            {t.strength.title}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
            {t.strength.desc}
          </p>

          {/* Action Link with Chevron */}
          <div>
            <button
              onClick={onDiscoverOffices}
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#0a1724] hover:text-[#009688] transition-colors cursor-pointer group"
            >
              <span className="group-hover:underline underline-offset-4">
                {t.strength.cta}
              </span>
              <span className={`text-base font-bold transition-transform ${isRTL ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`}>
                {isRTL ? '‹' : '›'}
              </span>
            </button>
          </div>

        </div>

        {/* 3 Key Stats Grid with Distinctive Angled Mint Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 max-w-5xl mx-auto pt-2">
          
          {/* Stat 1 */}
          <div className={`flex flex-col items-center md:items-start text-center md:text-start px-3 ${isRTL ? 'md:pr-8 md:pl-0' : 'md:pl-8 md:pr-0'}`}>
            <div className="relative inline-flex items-center isolate">
              <div
                className={`absolute ${isRTL ? '-right-4 sm:-right-6' : '-left-4 sm:-left-6'} top-1/2 -translate-y-1/2 w-8 sm:w-11 h-14 sm:h-20 bg-[#c0f2ec] ${isRTL ? 'skew-x-[22deg]' : '-skew-x-[22deg]'} z-0 pointer-events-none rounded-xs`}
                aria-hidden="true"
              />
              <span className="relative z-10 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#009688] leading-none select-none font-sans" dir="ltr">
                {t.strength.stat1Value}
              </span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-slate-700 font-normal leading-snug">
              {t.strength.stat1Label}
            </p>
          </div>

          {/* Stat 2 */}
          <div className={`flex flex-col items-center md:items-start text-center md:text-start px-3 ${isRTL ? 'md:pr-8 md:pl-0' : 'md:pl-8 md:pr-0'}`}>
            <div className="relative inline-flex items-center isolate">
              <div
                className={`absolute ${isRTL ? '-right-4 sm:-right-6' : '-left-4 sm:-left-6'} top-1/2 -translate-y-1/2 w-8 sm:w-11 h-14 sm:h-20 bg-[#c0f2ec] ${isRTL ? 'skew-x-[22deg]' : '-skew-x-[22deg]'} z-0 pointer-events-none rounded-xs`}
                aria-hidden="true"
              />
              <span className="relative z-10 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#009688] leading-none select-none font-sans" dir="ltr">
                {t.strength.stat2Value}
              </span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-slate-700 font-normal leading-snug">
              {t.strength.stat2Label}
            </p>
          </div>

          {/* Stat 3 */}
          <div className={`flex flex-col items-center md:items-start text-center md:text-start px-3 ${isRTL ? 'md:pr-8 md:pl-0' : 'md:pl-8 md:pr-0'}`}>
            <div className="relative inline-flex items-center isolate">
              <div
                className={`absolute ${isRTL ? '-right-4 sm:-right-6' : '-left-4 sm:-left-6'} top-1/2 -translate-y-1/2 w-8 sm:w-11 h-14 sm:h-20 bg-[#c0f2ec] ${isRTL ? 'skew-x-[22deg]' : '-skew-x-[22deg]'} z-0 pointer-events-none rounded-xs`}
                aria-hidden="true"
              />
              <span className="relative z-10 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#009688] leading-none select-none font-sans" dir="ltr">
                {t.strength.stat3Value}
              </span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-slate-700 font-normal leading-snug">
              {t.strength.stat3Label}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
