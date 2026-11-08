/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Monitor,
  UserCheck,
  Users,
  Home,
  GraduationCap,
  Globe,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
} from 'lucide-react';
import { ADVISORY_DISCUSSION_IMAGE, TETOUAN_OFFICE_IMAGE, HERO_IMAGE } from '../data/mockData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface InteractiveAccordionSectionProps {
  onOpenBooking: (serviceName?: string) => void;
  onSelectNav: (sectionId: string) => void;
}

export const InteractiveAccordionSection: React.FC<InteractiveAccordionSectionProps> = ({
  onOpenBooking,
}) => {
  const { t, isRTL } = useLanguage();
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const icons = [
    <Monitor className="w-6 h-6" key="mon" />,
    <UserCheck className="w-6 h-6" key="usr" />,
    <Users className="w-6 h-6" key="usrs" />,
    <Home className="w-6 h-6" key="hom" />,
    <GraduationCap className="w-6 h-6" key="grad" />,
    <Globe className="w-6 h-6" key="glob" />,
  ];

  const images = [
    '/assets/aistudio/image_381f3c2c.png',
    HERO_IMAGE,
    TETOUAN_OFFICE_IMAGE,
    ADVISORY_DISCUSSION_IMAGE,
    HERO_IMAGE,
    TETOUAN_OFFICE_IMAGE,
  ];

  const currentItem = t.accordion.items[activeIdx] || t.accordion.items[0];
  const currentImage = images[activeIdx] || images[0];

  return (
    <section className="py-16 sm:py-24 bg-[#050e18] text-white overflow-hidden relative border-t border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#2dd4bf]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {t.accordion.items.map((item, idx) => {
              const isExpanded = idx === activeIdx;

              if (isExpanded) {
                // EXPANDED ITEM: Solid soft mint/cyan card
                return (
                  <div
                    key={item.id}
                    className="bg-[#bdf1ec] text-[#06101e] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 animate-in fade-in-50 text-start"
                  >
                    {/* Header of expanded card */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="text-[#059669] shrink-0">
                          {icons[idx] || <Monitor className="w-6 h-6" />}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#06101e] break-words min-w-0">
                          {item.title}
                        </h2>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveIdx(-1)}
                        className="p-1 text-[#06101e] hover:opacity-75 transition-opacity focus:outline-none shrink-0"
                        aria-label="Réduire"
                      >
                        <Minus className="w-5 h-5 stroke-[2.5]" />
                      </button>
                    </div>

                    {/* Body content */}
                    <div className="space-y-3.5 text-xs sm:text-sm text-[#0c2233] leading-relaxed pr-2">
                      <p>{item.p1}</p>
                      <p>{item.p2}</p>
                    </div>

                    {/* Action link with arrow */}
                    <div className="pt-5 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => onOpenBooking(item.title)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#06101e] hover:opacity-80 transition-opacity underline-offset-4 hover:underline"
                      >
                        <span>{item.link}</span>
                        {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                      </button>

                      <span className="text-[11px] font-semibold text-[#047857] bg-white/60 px-2.5 py-1 rounded-md">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                );
              }

              // COLLAPSED ITEM: Clean dark row
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className="w-full text-start flex items-center justify-between p-4 sm:p-5 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                >
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <div className="text-[#2dd4bf] group-hover:scale-105 transition-transform shrink-0">
                      {icons[idx] || <Monitor className="w-6 h-6" />}
                    </div>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-200 transition-colors truncate">
                      {item.title}
                    </span>
                  </div>

                  <div className="text-slate-400 group-hover:text-white transition-colors shrink-0 ml-2">
                    <Plus className="w-5 h-5 stroke-[2]" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Portrait matching photo with translated caption */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#091824] group">
              <img
                src={currentImage}
                alt={`${currentItem.title} - Cabinet DERDAB COMPTA`}
                className="w-full h-80 sm:h-[480px] lg:h-[540px] object-cover object-top filter brightness-95 contrast-105 group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06101e] via-[#06101e]/20 to-transparent" />

              {/* Floating caption badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl bg-[#06101e]/90 backdrop-blur-md border border-white/15 text-xs text-white text-start">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#2dd4bf] uppercase tracking-wider">
                    {currentItem.title}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#2dd4bf]" />
                </div>
                <p className="text-slate-300 text-xs">
                  {currentItem.caption} · {t.accordion.certifiedBy}
                </p>
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{t.accordion.subBadge}</span>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(currentItem.title)}
                    className="text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded transition-colors"
                  >
                    {t.accordion.consultBtn}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
