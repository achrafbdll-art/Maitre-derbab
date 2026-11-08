/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, X, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { getLocalizedArticles, LocalizedArticleItem } from '../data/localizedData.ts';

interface ArticlesEventsSectionProps {
  onOpenBooking?: (subject?: string) => void;
}

export const ArticlesEventsSection: React.FC<ArticlesEventsSectionProps> = ({ onOpenBooking }) => {
  const { language, t, isRTL } = useLanguage();
  const allItems = getLocalizedArticles(language);
  const articles = allItems.slice(0, 3);

  const [selectedArticle, setSelectedArticle] = useState<LocalizedArticleItem | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'articles' | 'events'>('all');

  const filteredItems = allItems.filter((i) => {
    if (activeFilter === 'all') return true;
    const isEvent = i.id.startsWith('webinar') || i.id.startsWith('atelier');
    if (activeFilter === 'events') return isEvent;
    return !isEvent;
  });

  return (
    <section id="evenements-articles" className="py-16 sm:py-24 bg-[#eefaf8] border-b border-[#d8f2ed] scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-6 text-start">
          
          <div className="space-y-2.5">
            {/* Kicker with Cyan slash */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#06101e] tracking-tight">
              <span className="text-[#2dd4bf] font-black text-lg">/</span>
              <span>{t.articles.kicker}</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#06101e] leading-[1.14]">
              {t.articles.title}
            </h2>
          </div>

          {/* Right Parallelogram Button */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setShowAllModal(true)}
              className="relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#0a1724] hover:bg-[#132334] active:scale-95 transition-all shadow-md group rounded-xs"
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
                {t.articles.tabAll}
              </span>
            </button>
          </div>

        </div>

        {/* 3 Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:border-[#2dd4bf]/60 flex flex-col justify-between text-start"
            >
              <div>
                {/* Card Top Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-3.5">
                  {/* Meta Row: Soft mint badge + read time */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#040e17] bg-[#bdf1ec] px-3 py-1 rounded-md">
                      {item.type}
                    </span>
                    <span className="text-xs font-medium text-slate-700">
                      {item.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#06101e] leading-snug group-hover:text-[#0d9488] transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-[#0d9488] group-hover:translate-x-0.5 transition-transform">
                <span>{t.articles.readArticle}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4 text-[#2dd4bf]" /> : <ArrowRight className="w-4 h-4 text-[#2dd4bf]" />}
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 text-start">
            
            <div className="flex items-start justify-between pb-4 border-b border-slate-100 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#040e17] bg-[#bdf1ec] px-2.5 py-0.5 rounded">
                    {selectedArticle.type}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    · {selectedArticle.readTime} · {selectedArticle.date}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {selectedArticle.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Image Banner */}
            <div className="my-5 rounded-xl overflow-hidden aspect-[16/9] max-h-60 bg-slate-100">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Body */}
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed py-2">
              {selectedArticle.fullContent.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
              <Tag className="w-3.5 h-3.5 text-slate-400 mr-1" />
              {selectedArticle.tags.map((tg, idx) => (
                <span key={idx} className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
                  {tg}
                </span>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              {onOpenBooking && (
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedArticle.title;
                    setSelectedArticle(null);
                    onOpenBooking(title);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-[#0a1724] hover:bg-[#132334] rounded-lg transition-colors"
                >
                  <span>{t.articles.registerEvent}</span>
                  {isRTL ? <ArrowLeft className="w-4 h-4 text-[#2dd4bf]" /> : <ArrowRight className="w-4 h-4 text-[#2dd4bf]" />}
                </button>
              )}

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="py-3 px-5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                {t.articles.modalClose}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* "Voir plus" Modal with Filterable List */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 text-start">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <div className="text-xs font-bold text-[#0d9488] uppercase tracking-wider">
                  {t.articles.kicker}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {t.articles.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowAllModal(false)}
                className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 py-4 border-b border-slate-100">
              {[
                { key: 'all', label: t.articles.tabAll },
                { key: 'articles', label: t.articles.tabArticles },
                { key: 'events', label: t.articles.tabEvents },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveFilter(tab.key as any)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                    activeFilter === tab.key
                      ? 'bg-[#0a1724] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="divide-y divide-slate-100">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setShowAllModal(false);
                    setSelectedArticle(item);
                  }}
                  className="py-4 hover:bg-slate-50 px-2 rounded-xl cursor-pointer flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2 text-xs mb-1">
                        <span className="font-bold text-[#040e17] bg-[#bdf1ec] px-2 py-0.5 rounded text-[10px]">
                          {item.type}
                        </span>
                        <span className="text-slate-500">{item.readTime}</span>
                        <span className="text-slate-400">· {item.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0d9488] whitespace-nowrap shrink-0">
                    <span>{t.articles.readArticle}</span>
                    {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowAllModal(false)}
                className="py-2.5 px-5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                {t.articles.modalClose}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
