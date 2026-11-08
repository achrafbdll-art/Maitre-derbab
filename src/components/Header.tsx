/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { SocialLinks } from './SocialLinks.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { LanguageSelector } from './LanguageSelector.tsx';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenClientPortal?: () => void;
  onSelectNav: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onSelectNav,
}) => {
  const { t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (id: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onSelectNav(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#06111c]/98 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-gradient-to-b from-[#06111c]/90 via-[#06111c]/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Logo DERDAB COMPTA */}
          <a
            href="#accueil"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('accueil');
            }}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus-visible:outline-none"
            title="DERDAB COMPTA"
          >
            <div className="rounded-xl overflow-hidden shadow-lg border border-white/20 transition-transform duration-200 group-hover:scale-105 flex items-center justify-center bg-white p-1">
              <img
                src="/assets/aistudio/image_9552ab42.png"
                alt="DERDAB COMPTA Logo"
                className="h-10 sm:h-13 w-auto object-contain"
              />
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-slate-200">
            
            {/* 1. Notre cabinet */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('cabinet')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('cabinet')}
                className="flex items-center gap-1 hover:text-white transition-colors py-2 whitespace-nowrap"
              >
                <span>{t.nav.cabinet}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
              </button>

              {activeDropdown === 'cabinet' && (
                <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} w-72 bg-[#0a1724]/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-3 py-2 text-xs z-50 text-start`}>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
                    {t.nav.presentation}
                  </div>
                  <a
                    href="#cabinet"
                    onClick={() => handleLinkClick('cabinet')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white text-start"
                  >
                    <div className="font-semibold">{t.nav.firmIntro}</div>
                    <div className="text-slate-400 text-[11px]">{t.nav.firmOEC}</div>
                  </a>
                  <a
                    href="#cabinet"
                    onClick={() => handleLinkClick('cabinet')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white text-start"
                  >
                    <div className="font-semibold">{t.nav.mouradIntro}</div>
                    <div className="text-slate-400 text-[11px]">{t.nav.mouradTitle}</div>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => handleLinkClick('contact')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white text-start"
                  >
                    <div className="font-semibold">{t.nav.officesMenu}</div>
                    <div className="text-slate-400 text-[11px]">{t.nav.officesZone}</div>
                  </a>
                </div>
              )}
            </div>

            {/* 2. Vos enjeux */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('enjeux')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('enjeux')}
                className="flex items-center gap-1 hover:text-white transition-colors py-2 whitespace-nowrap"
              >
                <span>{t.nav.enjeux}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'enjeux' && (
                <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} w-80 bg-[#0a1724]/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-3 py-2 text-xs z-50 text-start`}>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
                    {t.nav.challenges}
                  </div>
                  <a
                    href="#enjeux"
                    onClick={() => handleLinkClick('enjeux')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white text-start"
                  >
                    <div className="font-semibold">{t.nav.createBiz}</div>
                    <div className="text-slate-400 text-[11px]">{t.nav.createBizSub}</div>
                  </a>
                  <a
                    href="#enjeux"
                    onClick={() => handleLinkClick('enjeux')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white text-start"
                  >
                    <div className="font-semibold">{t.nav.freeZone}</div>
                    <div className="text-slate-400 text-[11px]">{t.nav.freeZoneSub}</div>
                  </a>
                  <a
                    href="#enjeux"
                    onClick={() => handleLinkClick('enjeux')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white text-start"
                  >
                    <div className="font-semibold">{t.nav.switchFirm}</div>
                    <div className="text-slate-400 text-[11px]">{t.nav.switchFirmSub}</div>
                  </a>
                </div>
              )}
            </div>

            {/* 3. Nos expertises */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('expertises')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('offres')}
                className="flex items-center gap-1 hover:text-white transition-colors py-2 whitespace-nowrap"
              >
                <span>{t.nav.expertises}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'expertises' && (
                <div className={`absolute top-full ${isRTL ? 'right-0' : '-left-12'} w-84 bg-[#0a1724]/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-3 py-2 text-xs z-50 text-start`}>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
                    {t.nav.missions}
                  </div>
                  <a
                    href="#offres"
                    onClick={() => handleLinkClick('offres')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white text-start"
                  >
                    <div className="font-semibold">{t.nav.exp1}</div>
                    <div className="text-slate-400 text-[11px]">{t.nav.exp1Sub}</div>
                  </a>
                  <a
                    href="#offres"
                    onClick={() => handleLinkClick('offres')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white text-start"
                  >
                    <div className="font-semibold">{t.nav.exp2}</div>
                    <div className="text-slate-400 text-[11px]">{t.nav.exp2Sub}</div>
                  </a>
                  <a
                    href="#offres"
                    onClick={() => handleLinkClick('offres')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white text-start"
                  >
                    <div className="font-semibold">{t.nav.exp3}</div>
                    <div className="text-slate-400 text-[11px]">{t.nav.exp3Sub}</div>
                  </a>
                  <a
                    href="#offres"
                    onClick={() => handleLinkClick('offres')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white text-start"
                  >
                    <div className="font-semibold">{t.nav.exp4}</div>
                    <div className="text-slate-400 text-[11px]">{t.nav.exp4Sub}</div>
                  </a>
                </div>
              )}
            </div>

            {/* 4. Nos Bureaux */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="flex items-center gap-1 hover:text-white transition-colors py-2 whitespace-nowrap text-slate-200"
            >
              <span>{t.nav.ourOffices}</span>
            </button>

            {/* 5. Ressources */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('ressources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('evenements-articles')}
                className="flex items-center gap-1 hover:text-white transition-colors py-2 whitespace-nowrap"
              >
                <span>{t.nav.resources}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'ressources' && (
                <div className={`absolute top-full ${isRTL ? 'left-0' : 'right-0'} w-72 bg-[#0a1724]/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-3 py-2 text-xs z-50 text-start`}>
                  <a
                    href="#evenements-articles"
                    onClick={() => handleLinkClick('evenements-articles')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white text-start"
                  >
                    <div className="font-semibold text-[#2dd4bf]">{t.nav.eventsArticles}</div>
                    <div className="text-slate-400 text-[11px]">{t.nav.eventsArticlesSub}</div>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => handleLinkClick('contact')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white text-start"
                  >
                    <div className="font-semibold">{t.nav.officesContact}</div>
                    <div className="text-slate-400 text-[11px]">{t.nav.officesContactSub}</div>
                  </a>
                  <a
                    href="#faq"
                    onClick={() => handleLinkClick('faq')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white text-start"
                  >
                    <div className="font-semibold">{t.nav.faq}</div>
                    <div className="text-slate-400 text-[11px]">{t.nav.faqSub}</div>
                  </a>
                </div>
              )}
            </div>

          </nav>

          {/* Right Action: Language Switcher, Client Portal, Parallelogram Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop Language Selector */}
            <div className="hidden sm:block">
              <LanguageSelector variant="desktop-header" />
            </div>

            {/* THE PARALLELOGRAM BUTTON: Soft Mint / Aquamarine color #c5f2f0 with skewed edges */}
            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center justify-center px-4 sm:px-7 py-2 sm:py-2.5 min-h-[40px] text-xs sm:text-sm font-bold text-slate-950 bg-[#c5f2f0] hover:bg-[#b0eae7] active:scale-95 transition-all shadow-md group whitespace-nowrap rounded-xs"
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
                {t.nav.contactBtn}
              </span>
            </button>

            {/* Mobile menu button with 44px min touch target */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-200 hover:text-white rounded-lg active:bg-white/10 transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#06111c]/98 backdrop-blur-xl border-b border-white/10 px-5 pt-4 pb-6 space-y-4 text-white shadow-2xl max-h-[85vh] overflow-y-auto overscroll-contain">
          {/* Mobile Language Switcher */}
          <div className="pb-3 border-b border-white/10">
            <LanguageSelector variant="mobile-drawer" />
          </div>

          <div className="flex flex-col space-y-1.5 text-sm font-semibold">
            <button
              onClick={() => handleLinkClick('cabinet')}
              className="text-start py-2.5 border-b border-white/10 flex items-center justify-between hover:text-[#2dd4bf] transition-colors"
            >
              <span>{t.nav.cabinet} ({t.nav.mouradIntro})</span>
              <span className="text-xs text-slate-400">{isRTL ? '‹' : '›'}</span>
            </button>
            <button
              onClick={() => handleLinkClick('enjeux')}
              className="text-start py-2.5 border-b border-white/10 flex items-center justify-between hover:text-[#2dd4bf] transition-colors"
            >
              <span>{t.nav.enjeux} ({t.nav.createBiz})</span>
              <span className="text-xs text-slate-400">{isRTL ? '‹' : '›'}</span>
            </button>
            <button
              onClick={() => handleLinkClick('offres')}
              className="text-start py-2.5 border-b border-white/10 flex items-center justify-between hover:text-[#2dd4bf] transition-colors"
            >
              <span>{t.nav.expertises}</span>
              <span className="text-xs text-slate-400">{isRTL ? '‹' : '›'}</span>
            </button>
            <button
              onClick={() => handleLinkClick('evenements-articles')}
              className="text-start py-2.5 border-b border-white/10 flex items-center justify-between hover:text-[#2dd4bf] transition-colors"
            >
              <span>{t.nav.eventsArticles}</span>
              <span className="text-xs text-slate-400">{isRTL ? '‹' : '›'}</span>
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-start py-2.5 border-b border-white/10 flex items-center justify-between hover:text-[#2dd4bf] transition-colors"
            >
              <span>{t.nav.officesContact}</span>
              <span className="text-xs text-slate-400">{isRTL ? '‹' : '›'}</span>
            </button>
            <button
              onClick={() => handleLinkClick('faq')}
              className="text-start py-2 text-slate-300 hover:text-white transition-colors"
            >
              <span>{t.nav.faq}</span>
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 bg-[#c5f2f0] text-slate-950 font-black text-sm rounded-xl shadow-md text-center active:scale-95 transition-all"
            >
              {t.nav.bookAppointment}
            </button>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="tel:+212539345000"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#2dd4bf]" />
                <span dir="ltr">+212 (0)5 39 34 50 00</span>
              </a>
              <a
                href="https://wa.me/212661000000?text=Bonjour,%20je%20souhaite%20un%20renseignement%20comptable."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs text-white font-semibold"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social media icons on mobile */}
            <div className="pt-3 border-t border-white/10 flex flex-col items-center gap-2">
              <span className="text-[11px] text-slate-400">DERDAB COMPTA :</span>
              <SocialLinks variant="header" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
