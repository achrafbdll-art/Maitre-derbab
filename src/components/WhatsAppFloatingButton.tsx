/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

export const WhatsAppFloatingButton: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const greetings = {
    fr: 'Bonjour Maître Derdab, je souhaite un renseignement comptable et fiscal pour mon entreprise à Tanger.',
    es: 'Hola Maître Derdab, deseo información contable y fiscal para mi empresa en Tánger.',
    en: 'Hello Maître Derdab, I would like accounting and tax advice for my business in Tangier.',
    ar: 'مرحباً بالأستاذ مراد الدرداب، أود استشارة محاسبية وجبائية خاصة بمشروعي بطنجة.',
  };

  const currentGreeting = greetings[language] || greetings.fr;
  const whatsappUrl = `https://wa.me/212661000000?text=${encodeURIComponent(currentGreeting)}`;

  const title = t.contact.whatsappFloatingTitle || 'WhatsApp Cabinet';
  const subtitle = t.contact.whatsappFloatingSub || 'Discuter en direct avec un expert';
  const onlineText = t.contact.whatsappOnline || 'En ligne · Réponse sous 15 min';

  return (
    <div
      className={`fixed z-40 ${
        isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'
      } bottom-20 sm:bottom-6 flex flex-col ${
        isRTL ? 'items-start' : 'items-end'
      } pointer-events-auto`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Expanded Quick Chat Card */}
      {isTooltipOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200/80 p-4 animate-in fade-in slide-in-from-bottom-3 duration-200 text-start">
          <div className="flex items-start justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.115-.515-1.706-.706-2.802-2.457-2.887-2.571-.085-.113-.687-.914-.687-1.743 0-.829.435-1.238.59-1.408.156-.17.34-.213.453-.213.113 0 .227.001.326.006.104.005.244-.039.382.293.141.341.482 1.175.524 1.26.043.085.071.184.014.298-.057.113-.085.184-.17.283-.085.099-.179.222-.256.298-.085.085-.174.177-.075.347.099.17.44 1.26.963 1.725.674.599 1.242.785 1.418.87.175.085.277.071.381-.048.104-.119.444-.518.563-.695.118-.178.236-.148.397-.089.161.059 1.022.482 1.197.57.175.088.293.132.336.206.043.074.043.431-.101.836z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  {title}
                </h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-medium text-emerald-600">
                    {onlineText}
                  </span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsTooltipOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 my-3 leading-relaxed">
            {subtitle}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsTooltipOpen(false)}
            className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <span>{t.contact.whatsappBtn || 'Ouvrir WhatsApp'}</span>
            {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </a>

          <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
            <ShieldCheck className="w-3 h-3 text-teal-600" />
            <span>+212 (0)6 61 00 00 00 · Tanger</span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        {/* Subtle glowing ring pulse */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-xs animate-ping pointer-events-none"
          style={{ animationDuration: '3s' }}
        />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsTooltipOpen(true)}
          className="relative flex items-center gap-2.5 px-3.5 py-3 sm:px-4 sm:py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/30 cursor-pointer min-w-[52px] min-h-[52px]"
          aria-label="Contacter le cabinet par WhatsApp"
        >
          {/* WhatsApp Vector Icon */}
          <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.115-.515-1.706-.706-2.802-2.457-2.887-2.571-.085-.113-.687-.914-.687-1.743 0-.829.435-1.238.59-1.408.156-.17.34-.213.453-.213.113 0 .227.001.326.006.104.005.244-.039.382.293.141.341.482 1.175.524 1.26.043.085.071.184.014.298-.057.113-.085.184-.17.283-.085.099-.179.222-.256.298-.085.085-.174.177-.075.347.099.17.44 1.26.963 1.725.674.599 1.242.785 1.418.87.175.085.277.071.381-.048.104-.119.444-.518.563-.695.118-.178.236-.148.397-.089.161.059 1.022.482 1.197.57.175.088.293.132.336.206.043.074.043.431-.101.836z" />
          </svg>

          {/* Label visible on sm+ screens */}
          <span className="hidden sm:inline-block text-xs font-black tracking-wide pr-1">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};
