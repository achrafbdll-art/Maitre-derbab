/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, X, FileText, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface EInvoicingBannerProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const EInvoicingBanner: React.FC<EInvoicingBannerProps> = ({ onOpenBooking }) => {
  const { t, isRTL } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container matching 100% the screenshot */}
        <div className="bg-[#bdf1ec] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-14 shadow-sm border border-[#a3e8e1]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Kicker, Title & Dark Parallelogram Button */}
            <div className="lg:col-span-6 space-y-6 text-start">
              
              {/* Kicker with Cyan Slash */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                <span className="text-[#059669] font-black text-lg">/</span>
                <span>{t.einvoicing.badge}</span>
              </div>

              {/* Main Banner Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-950 leading-[1.14] tracking-tight text-balance">
                {t.einvoicing.title}
              </h2>

              {/* Inverted Dark Parallelogram CTA Button */}
              <div>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="relative inline-flex items-center justify-center px-7 sm:px-9 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#0a1724] hover:bg-[#132334] active:scale-95 transition-all shadow-md group rounded-xs"
                  style={{
                    transform: isRTL ? 'skewX(12deg)' : 'skewX(-12deg)',
                  }}
                >
                  <span
                    className="tracking-wide"
                    style={{
                      transform: isRTL ? 'skewX(-12deg)' : 'skewX(12deg)',
                    }}
                  >
                    {t.einvoicing.cta}
                  </span>
                </button>
              </div>

            </div>

            {/* Right Column: Explanatory text & Checkmarks */}
            <div className={`lg:col-span-6 ${isRTL ? 'lg:border-r lg:pr-10' : 'lg:border-l lg:pl-10'} lg:border-slate-800/10 space-y-4 text-slate-900 text-start`}>
              
              <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-normal">
                {t.einvoicing.desc}
              </p>

              {/* 3 Green Checkmark Bullet Points */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm font-medium text-slate-950">
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5 stroke-[3]" />
                  <span>
                    <strong>{t.einvoicing.pill1}</strong>
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5 stroke-[3]" />
                  <span>
                    <strong>{t.einvoicing.pill2}</strong>
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5 stroke-[3]" />
                  <span>
                    <strong>{t.einvoicing.pill3}</strong>
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Modal with In-depth Facturation Électronique Guide */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 text-start">
            
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#bdf1ec] text-[#047857] rounded-xl shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                    {t.einvoicing.badge}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    {t.einvoicing.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                {t.einvoicing.desc}
              </p>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  {t.einvoicing.badge} :
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>{t.einvoicing.pill1}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>{t.einvoicing.pill2}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>{t.einvoicing.pill3}</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setModalOpen(false);
                  onOpenBooking('Diagnostic Facturation Électronique & Conformité DGI');
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.einvoicing.cta}</span>
              </button>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="py-3 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                {t.bookingModal.close}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
