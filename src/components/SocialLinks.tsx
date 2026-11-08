/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SocialLinkItem {
  id: string;
  name: string;
  href: string;
  icon: (className?: string) => React.ReactNode;
  brandColor: string;
  bgHover: string;
  badgeText?: string;
}

interface SocialLinksProps {
  variant?: 'header' | 'footer' | 'card' | 'floating';
  className?: string;
  showLabels?: boolean;
}

export const SOCIAL_PROFILES: SocialLinkItem[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    href: 'https://wa.me/212661000000?text=Bonjour%20Cabinet%20DERDAB%20COMPTA,%20je%20souhaite%20un%20renseignement%20comptable.',
    badgeText: 'Réponse rapide',
    brandColor: '#25D366',
    bgHover: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]',
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.02.569 1.83.845 2.806.845h.005c3.18 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.768-5.773-5.768zm3.36 8.163c-.14.394-.805.74-1.125.77-.32.03-.733.151-2.399-.54-1.666-.69-2.73-2.42-2.812-2.53-.082-.11-.676-.9-.676-1.716 0-.816.425-1.218.577-1.385.152-.167.332-.209.444-.209.112 0 .224.002.321.007.104.005.244-.04.382.291.141.339.48 1.173.523 1.258.042.085.07.185.014.296-.056.11-.084.18-.168.277-.084.097-.176.216-.252.29-.084.083-.172.173-.074.341.098.168.435.717.933 1.161.642.571 1.183.748 1.35.832.167.084.266.07.365-.043.099-.113.424-.494.537-.663.113-.169.226-.141.38-.084.155.056.984.464 1.153.548.169.085.282.127.324.198.042.07.042.41-.098.804z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.981-1.398A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.16 8.16 0 0 1-4.225-1.173l-.303-.18-2.96.83.844-2.879-.197-.315A8.164 8.164 0 0 1 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/derdab-compta',
    brandColor: '#0A66C2',
    bgHover: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.45c-.89 0-1.61.72-1.61 1.61s.72 1.61 1.61 1.61 1.61-.72 1.61-1.61-.72-1.61-1.61-1.61z" />
      </svg>
    ),
  },
  {
    id: 'facebook',
    name: 'Facebook',
    href: 'https://www.facebook.com/derdabcompta',
    brandColor: '#1877F2',
    bgHover: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://www.instagram.com/derdabcompta',
    brandColor: '#E4405F',
    bgHover: 'hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white hover:border-transparent',
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: 'youtube',
    name: 'YouTube',
    href: 'https://www.youtube.com/@derdabcompta',
    brandColor: '#FF0000',
    bgHover: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]',
    icon: (cls = 'w-4 h-4') => (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = 'footer',
  className = '',
  showLabels = false,
}) => {
  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {SOCIAL_PROFILES.slice(0, 4).map((s) => (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Suivez DERDAB COMPTA sur ${s.name}`}
            className={`w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15 transition-all duration-200 ${s.bgHover}`}
            title={s.name}
          >
            {s.icon('w-3.5 h-3.5')}
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 ${className}`}>
        {SOCIAL_PROFILES.map((s) => (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-500 text-slate-200 hover:text-white transition-all group"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm"
              style={{ backgroundColor: s.brandColor }}
            >
              {s.icon('w-4 h-4')}
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-xs text-white truncate">{s.name}</div>
              <div className="text-[10px] text-slate-400 truncate">
                {s.badgeText || '@derdabcompta'}
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }

  // Default: Footer variant
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {SOCIAL_PROFILES.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Suivre DERDAB COMPTA sur ${s.name}`}
          className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 hover:bg-white/15 text-slate-300 border border-white/10 transition-all duration-200 shadow-sm hover:scale-105 ${s.bgHover}`}
          title={s.name}
        >
          {s.icon('w-4 h-4')}
          {showLabels && <span className="ml-2 text-xs font-medium">{s.name}</span>}
        </a>
      ))}
    </div>
  );
};
