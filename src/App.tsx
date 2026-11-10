/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { OurStrengthSection } from './components/OurStrengthSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ArticlesEventsSection } from './components/ArticlesEventsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/Modals/BookingModal.tsx';
import { ClientPortalModal } from './components/Modals/ClientPortalModal.tsx';
import { Phone, MessageSquare } from 'lucide-react';

import { EInvoicingBanner } from './components/EInvoicingBanner.tsx';
import { InteractiveAccordionSection } from './components/InteractiveAccordionSection.tsx';
import { CabinetSection } from './components/CabinetSection.tsx';
import { EnjeuxSection } from './components/EnjeuxSection.tsx';
import { OfficesContactSection } from './components/OfficesContactSection.tsx';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton.tsx';
import { LanguageProvider, useLanguage } from './context/LanguageContext.tsx';

function MainAppContent() {
  const { t, isRTL, dir } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);
  const [mapsQuotaExceeded, setMapsQuotaExceeded] = useState(false);

  useEffect(() => {
    const handleQuota = () => setMapsQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handleQuota);
    return () => window.removeEventListener('gmp-quota-exceeded', handleQuota);
  }, []);

  // Prefill values for the booking modal
  const [bookingPrefill, setBookingPrefill] = useState<{
    office?: string;
    service?: string;
    quoteSummary?: string;
    estimatedFee?: number;
  }>({});

  const handleOpenBooking = (prefillData?: {
    office?: string;
    service?: string;
    quoteSummary?: string;
    estimatedFee?: number;
  }) => {
    if (prefillData) {
      setBookingPrefill(prefillData);
    } else {
      setBookingPrefill({});
    }
    setIsBookingOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      dir={dir}
      className={`min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white w-full max-w-full overflow-x-hidden ${
        isRTL ? 'font-cairo' : 'font-sans'
      }`}
    >
      {/* Google Maps Quota Defense Banner (Section 8 Case A) */}
      {mapsQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      {/* Sticky Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenClientPortal={() => setIsClientPortalOpen(true)}
        onSelectNav={handleNavigateSection}
      />

      <main className="flex-1 pb-16 sm:pb-0">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={(service) => handleOpenBooking(service ? { service } : undefined)}
          onOpenArticles={() => handleNavigateSection('evenements-articles')}
          onFindOffice={() => handleNavigateSection('contact')}
        />

        {/* 2. Notre force : Chiffres clés génériques comptabilité */}
        <OurStrengthSection
          onDiscoverOffices={() => handleNavigateSection('cabinet')}
        />

        {/* 3. Notre Cabinet : Maître Mourad Derdab, Histoire & OEC Maroc */}
        <CabinetSection
          onOpenBooking={(serviceName) =>
            handleOpenBooking({ service: serviceName || 'Consultation Cabinet DERDAB COMPTA' })
          }
        />


        {/* 5. Vos Enjeux : Création CRI 48h, Zone Franche, Changement cabinet */}
        <EnjeuxSection
          onOpenBooking={(serviceName) =>
            handleOpenBooking({ service: serviceName || 'Accompagnement Enjeux Dirigeant' })
          }
        />

        {/* 5. Facturation Électronique & Normes DGI */}
        <EInvoicingBanner
          onOpenBooking={(serviceName) =>
            handleOpenBooking({ service: serviceName || 'Facturation Électronique & Conformité DGI' })
          }
        />

        {/* 6. Expertise Accordéon avec Portrait de Maître Derdab */}
        <InteractiveAccordionSection
          onOpenBooking={(serviceName) =>
            handleOpenBooking({ service: serviceName || 'Expertise Comptable' })
          }
          onSelectNav={handleNavigateSection}
        />

        {/* 7. Nos Piliers d'Offres & Expertises 360° */}
        <ServicesSection
          onSelectServiceForBooking={(serviceTitle) =>
            handleOpenBooking({ service: serviceTitle })
          }
        />

        {/* 8. Nos Événements et Articles / Veille fiscale */}
        <ArticlesEventsSection
          onOpenBooking={(subject) => handleOpenBooking({ service: subject })}
        />

        {/* 9. Nos 4 Bureaux (Tanger, Tétouan, TAC, Tanger Med) & Formulaire Contact */}
        <OfficesContactSection
          onOpenBooking={(serviceName, officeName) =>
            handleOpenBooking({ service: serviceName, office: officeName })
          }
        />

        {/* 10. FAQ Régionale & Fiscale */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectNav={handleNavigateSection}
        onOpenBooking={() => handleOpenBooking()}
        onOpenClientPortal={() => setIsClientPortalOpen(true)}
      />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialOffice={bookingPrefill.office}
        initialService={bookingPrefill.service}
        initialQuoteSummary={bookingPrefill.quoteSummary}
        initialEstimatedFee={bookingPrefill.estimatedFee}
      />

      <ClientPortalModal
        isOpen={isClientPortalOpen}
        onClose={() => setIsClientPortalOpen(false)}
      />

      {/* Floating WhatsApp Contact Quick Action Button */}
      <WhatsAppFloatingButton />

      {/* Mobile Floating Action Bar */}
      <nav
        aria-label="Actions rapides mobiles"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-2 px-3 flex items-center justify-between sm:hidden shadow-xl pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]"
      >
        <a
          href="tel:+212539345000"
          className="flex flex-col items-center justify-center min-w-[48px] min-h-[44px] text-[10px] text-slate-700 font-bold px-2 rounded-lg active:bg-slate-100 transition-colors"
          aria-label={t.mobileBar.call}
        >
          <Phone className="w-4 h-4 text-blue-700 mb-0.5" />
          <span>{t.mobileBar.call}</span>
        </a>

        <a
          href="https://wa.me/212661000000?text=Bonjour,%20je%20souhaite%20un%20renseignement%20comptable%20pour%20mon%20entreprise%20%C3%A0%20Tanger."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-w-[48px] min-h-[44px] text-[10px] text-emerald-800 font-bold px-2 rounded-lg active:bg-emerald-50 transition-colors"
          aria-label={t.mobileBar.whatsapp}
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>{t.mobileBar.whatsapp}</span>
        </a>

        <button
          type="button"
          onClick={() => handleNavigateSection('contact')}
          className="flex-1 mx-1.5 min-h-[44px] py-2 px-2.5 bg-[#c5f2f0] text-slate-950 font-black text-xs rounded-xl shadow-xs text-center border border-teal-300 active:scale-95 transition-all truncate"
        >
          {t.mobileBar.offices}
        </button>

        <button
          type="button"
          onClick={() => handleOpenBooking()}
          className="min-h-[44px] py-2 px-3.5 bg-[#0a1724] text-white font-bold text-xs rounded-xl shadow-xs text-center active:scale-95 transition-all whitespace-nowrap"
        >
          {t.mobileBar.book}
        </button>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}
