/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { getLocalizedFaq } from '../data/localizedData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

export const FaqSection: React.FC = () => {
  const { language, t } = useLanguage();
  const faqItems = getLocalizedFaq(language);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            {t.faq.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {t.faq.title}
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            {t.faq.desc}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full text-start px-5 sm:px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 pr-2">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 text-start">
                    <p>{item.answer}</p>
                    <div className="mt-3 text-[11px] text-blue-700 font-semibold uppercase tracking-wider">
                      {t.faq.categoryLabel} {item.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
