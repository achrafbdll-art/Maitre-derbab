/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { NewsletterBanner } from './NewsletterBanner.tsx';
import { SocialLinks } from './SocialLinks.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { LanguageSelector } from './LanguageSelector.tsx';

interface FooterProps {
  onSelectNav: (id: string) => void;
  onOpenBooking: () => void;
  onOpenClientPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectNav,
  onOpenBooking,
  onOpenClientPortal,
}) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040c16] text-white border-t border-slate-900">
      {/* 1. Pre-footer Newsletter Banner */}
      <NewsletterBanner />

      {/* 2. Main 5-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-slate-800/80 text-start">
          
          {/* Column 1: Nos implantations */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              {t.footer.col1Title}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('contact')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col1Link1}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('contact')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col1Link2}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('contact')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col1Link3}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('contact')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col1Link4}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('contact')}
                  className="text-[#2dd4bf] hover:underline font-bold transition-colors text-start"
                >
                  {t.footer.col1Link5}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Nos expertises */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              {t.footer.col2Title}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('offres')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col2Link1}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('enjeux')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col2Link2}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('offres')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col2Link3}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('enjeux')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col2Link4}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-[#2dd4bf] hover:underline font-bold transition-colors text-start"
                >
                  {t.footer.col2Link5}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Notre cabinet */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              {t.footer.col3Title}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('cabinet')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col3Link1}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('cabinet')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col3Link2}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('contact')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col3Link3}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('cabinet')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col3Link4}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('contact')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col3Link5}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Ressources */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              {t.footer.col4Title}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('evenements-articles')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col4Link1}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('evenements-articles')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col4Link2}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectNav('faq')}
                  className="hover:text-teal-300 transition-colors text-start"
                >
                  {t.footer.col4Link3}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenClientPortal}
                  className="text-teal-300 hover:underline font-semibold transition-colors text-start"
                >
                  {t.footer.col4Link4}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Brand Logo, Language Selector, Social Media & App Badges */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col items-start gap-3.5">
            {/* DERDAB COMPTA Logo */}
            <div className="flex flex-col items-start select-none">
              <div className="rounded-xl overflow-hidden shadow-lg border border-white/20 bg-white p-2 inline-block">
                <img
                  src="/assets/aistudio/image_9552ab42.png"
                  alt="DERDAB COMPTA Logo"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>
            </div>

            {/* Language Selector in Footer */}
            <div className="w-full">
              <LanguageSelector variant="footer" />
            </div>

            {/* Social Media Icons */}
            <div className="w-full pt-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                {t.footer.socialsTitle}
              </div>
              <SocialLinks variant="footer" />
            </div>

            {/* Google Play Badge */}
            <button
              type="button"
              onClick={onOpenClientPortal}
              className="inline-flex items-center gap-2.5 bg-black hover:bg-slate-900 border border-slate-700/80 px-3.5 py-1.5 rounded-md text-white transition-all shadow-sm w-44 mt-1"
              title="Disponible sur Google Play"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.793 12 3.61 22.186a2.025 2.025 0 0 1-.61-1.464V3.278c0-.573.228-1.096.61-1.464z" fill="#00E5FF"/>
                <path d="M17.18 8.614l-3.387 3.386 3.387 3.386 3.863-2.195c1.107-.63 1.107-1.747 0-2.382l-3.863-2.195z" fill="#FFD600"/>
                <path d="M3.609 1.814l10.184 10.186 3.387-3.386L5.592 2.083c-.636-.361-1.348-.372-1.983-.269z" fill="#00E676"/>
                <path d="M13.793 12L3.609 22.186c.635.103 1.347.092 1.983-.269l11.588-6.531-3.387-3.386z" fill="#FF3D00"/>
              </svg>
              <div className="text-start leading-none">
                <div className="text-[9px] uppercase tracking-wider text-slate-300">GET IT ON</div>
                <div className="text-xs font-semibold text-white tracking-wide mt-0.5">Google Play</div>
              </div>
            </button>

            {/* App Store Badge */}
            <button
              type="button"
              onClick={onOpenClientPortal}
              className="inline-flex items-center gap-2.5 bg-black hover:bg-slate-900 border border-slate-700/80 px-3.5 py-1.5 rounded-md text-white transition-all shadow-sm w-44"
              title="Télécharger sur l'App Store"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.8 0.93-2.84-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.71-.93 2.72.99.08 2.01-.48 2.63-1.23z"/>
              </svg>
              <div className="text-start leading-none">
                <div className="text-[9px] text-slate-300">Download on the</div>
                <div className="text-xs font-semibold text-white tracking-wide mt-0.5">App Store</div>
              </div>
            </button>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.footer.secureTag}</span>
            </div>
          </div>

        </div>

        {/* 3. Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-slate-400">
            <button type="button" onClick={() => onSelectNav('offres')} className="hover:text-white transition-colors">
              {t.footer.legalMentions}
            </button>
            <span aria-hidden="true">·</span>
            <button type="button" onClick={() => onSelectNav('offres')} className="hover:text-white transition-colors">
              {t.footer.privacyPolicy}
            </button>
            <span aria-hidden="true">·</span>
            <button type="button" onClick={() => onSelectNav('offres')} className="hover:text-white transition-colors">
              {t.footer.cookieMgmt}
            </button>
            <span aria-hidden="true">·</span>
            <button type="button" onClick={onOpenBooking} className="text-teal-400 hover:text-teal-300 font-semibold">
              {t.footer.bookAppointment}
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>{t.footer.topOfPage}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
