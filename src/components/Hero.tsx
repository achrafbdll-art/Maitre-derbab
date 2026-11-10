/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides = [
    {
      id: 1,
      image: '/assets/aistudio/image_4cefbb9c.png',
      alt: 'Cabinet DERDAB COMPTA - Bureaux et accueil officiel Tanger',
      caption: 'Photo 1 : Accueil & Bureaux Cabinet DERDAB COMPTA',
      badge: 'Siège Social · Tanger City Center',
      objectPosition: 'object-[center_22%] lg:object-[center_26%]',
    },
    {
      id: 2,
      image: '/assets/images/hero_aerial_road_nature_1793216694983.jpg',
      alt: 'Vue panoramique Grand Tanger et littoral Nord du Maroc',
      caption: 'Photo 2 : Grand Tanger & Littoral Méditerranéen',
      badge: 'Région Grand Tanger · Pôle Économique Nord',
      objectPosition: 'object-center',
    },
  ];

  // Auto-scroll slides every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, heroSlides.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section
      id="accueil"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 bg-[#040e17] text-white overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background Carousel: 2 Photos Défilantes */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {heroSlides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover ${slide.objectPosition} filter brightness-[0.70] contrast-[1.08] transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                referrerPolicy="no-referrer"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Cinematic gradient overlays for contrast & legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#040e17]/95 via-[#040e17]/80 to-[#040e17]/55 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#040e17] via-transparent to-[#040e17]/85 pointer-events-none" />

        {/* Subtle Carousel Controls (Top Right Floating Badge) */}
        <div
          className={`absolute top-20 sm:top-24 ${
            isRTL ? 'left-4 sm:left-8' : 'right-4 sm:right-8'
          } z-20 flex items-center gap-2 bg-[#06111c]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs text-white shadow-xl`}
          dir="ltr"
        >
          <button
            type="button"
            onClick={handlePrev}
            className="p-1 rounded-full hover:bg-white/20 active:scale-90 transition-all text-slate-300 hover:text-white cursor-pointer"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Dots / Indicators */}
          <div className="flex items-center gap-1.5 px-0.5">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveSlide(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeSlide === i
                    ? 'w-5 h-2 bg-[#2dd4bf] shadow-xs'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Aller à la photo ${i + 1}`}
              />
            ))}
          </div>

          <span className="text-[10px] font-mono font-bold text-slate-300 tracking-wider">
            0{activeSlide + 1}/0{heroSlides.length}
          </span>

          <button
            type="button"
            onClick={handleNext}
            className="p-1 rounded-full hover:bg-white/20 active:scale-90 transition-all text-slate-300 hover:text-white cursor-pointer"
            aria-label="Photo suivante"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Current Slide Tagline Badge */}
        <div
          className={`hidden sm:flex absolute bottom-4 sm:bottom-6 ${
            isRTL ? 'left-8' : 'right-8'
          } z-20 items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-[11px] text-slate-300 pointer-events-none transition-opacity duration-300`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
          <span className="font-semibold">{heroSlides[activeSlide].badge}</span>
        </div>
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
