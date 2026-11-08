/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Rocket, Building2, RefreshCw, FileCode, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface EnjeuxSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const EnjeuxSection: React.FC<EnjeuxSectionProps> = ({ onOpenBooking }) => {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      badge: t.enjeux.tab1Badge,
      title: t.enjeux.tab1Title,
      desc: t.enjeux.tab1Desc,
      steps: t.enjeux.tab1Steps,
      cta: t.enjeux.tab1Cta,
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      badge: t.enjeux.tab2Badge,
      title: t.enjeux.tab2Title,
      desc: t.enjeux.tab2Desc,
      steps: t.enjeux.tab2Steps,
      cta: t.enjeux.tab2Cta,
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      badge: t.enjeux.tab3Badge,
      title: t.enjeux.tab3Title,
      desc: t.enjeux.tab3Desc,
      steps: t.enjeux.tab3Steps,
      cta: t.enjeux.tab3Cta,
      icon: <RefreshCw className="w-5 h-5" />,
    },
    {
      badge: t.enjeux.tab4Badge,
      title: t.enjeux.tab4Title,
      desc: t.enjeux.tab4Desc,
      steps: t.enjeux.tab4Steps,
      cta: t.enjeux.tab4Cta,
      icon: <FileCode className="w-5 h-5" />,
    },
  ];

  const currentEnjeu = tabs[activeTab] || tabs[0];

  return (
    <section id="enjeux" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Dotted Grid Background Pattern from uploaded asset */}
      <div
        className="absolute inset-0 pointer-events-none opacity-85"
        style={{
          backgroundImage: "url('/assets/aistudio/iil_07e2a313.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '148px auto',
        }}
        aria-hidden="true"
      />

      {/* Subtle soft edge gradients for depth & visual hierarchy */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/50 via-transparent to-[#f8fafc]/60 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.enjeux.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.enjeux.title} <br className="hidden sm:inline" />
            <span className="text-blue-700">{t.enjeux.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            {t.enjeux.subtitle}
          </p>
        </div>

        {/* Tabs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {tabs.map((item, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-start transition-all border flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0a1724] text-white border-[#0a1724] shadow-lg scale-[1.02]'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                    isActive ? 'bg-[#2dd4bf] text-slate-950' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${
                      isActive ? 'text-[#2dd4bf]' : 'text-blue-600'
                    }`}
                  >
                    {item.badge}
                  </div>
                  <div className="font-bold text-sm leading-snug line-clamp-2">
                    {item.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Tab Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
              {currentEnjeu.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              {currentEnjeu.title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {currentEnjeu.desc}
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t.enjeux.planTitle}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentEnjeu.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#071320] to-[#0d2238] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-white/10 flex flex-col justify-between h-full text-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#2dd4bf] mb-2">
                {t.enjeux.boxBadge}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {t.enjeux.boxTitle}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {t.enjeux.boxDesc}
              </p>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => onOpenBooking(currentEnjeu.title)}
                className="w-full py-3 px-5 bg-[#c5f2f0] hover:bg-[#b0eae7] text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{currentEnjeu.cta}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
              <div className="text-center text-[11px] text-slate-400">
                {t.enjeux.confidential}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
