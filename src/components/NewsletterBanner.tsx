/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

export const NewsletterBanner: React.FC = () => {
  const { isRTL, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showRightsModal, setShowRightsModal] = useState(false);

  const labels = {
    fr: {
      title: 'Notre newsletter',
      sub: 'Pour suivre nos dernières actualités, abonnez-vous :',
      disclaimer: "Vous pouvez vous désinscrire à tout moment à l'aide des liens de désinscription ou en cliquant sur ce lien :",
      rights: "j'exerce mes droits",
      placeholder: 'Votre adresse email professionnelle...',
      subscribe: "S'abonner",
      success: 'Merci ! Votre inscription à notre newsletter est validée.',
      modalTitle: 'Protection des Données & Vos Droits',
      modalDesc: "Conformément à la loi marocaine n° 09-08 (CNDP) et aux réglementations RGPD :",
      r1: "Droit d'accès et de rectification de votre email",
      r2: "Droit d'opposition et de désinscription immédiate",
      r3: 'Non-cession à des tiers ou des partenaires publicitaires',
      contact: 'Pour toute demande spécifique ou suppression immédiate :',
      close: 'Fermer',
    },
    es: {
      title: 'Nuestro boletín informativo',
      sub: 'Para recibir nuestras últimas novedades fiscales y contables, suscríbase:',
      disclaimer: 'Puede darse de baja en cualquier momento a través de los enlaces de baja o en:',
      rights: 'ejercer mis derechos',
      placeholder: 'Su correo electrónico profesional...',
      subscribe: 'Suscribirse',
      success: '¡Gracias! Su suscripción ha sido confirmada con éxito.',
      modalTitle: 'Protección de Datos y sus Derechos',
      modalDesc: 'De conformidad con la Ley marroquí nº 09-08 (CNDP) y el RGPD:',
      r1: 'Derecho de acceso y rectificación de sus datos',
      r2: 'Derecho de oposición y cancelación inmediata',
      r3: 'No cesión a terceros con fines publicitarios',
      contact: 'Para cualquier consulta o baja inmediata:',
      close: 'Cerrar',
    },
    en: {
      title: 'Our Newsletter',
      sub: 'Subscribe to receive our latest tax, legal, and accounting updates:',
      disclaimer: 'You can unsubscribe at any time using the links in our emails or via:',
      rights: 'exercise my rights',
      placeholder: 'Your professional email address...',
      subscribe: 'Subscribe',
      success: 'Thank you! Your newsletter subscription has been confirmed.',
      modalTitle: 'Data Protection & Your Rights',
      modalDesc: 'In accordance with Moroccan Law No. 09-08 (CNDP) and GDPR regulations:',
      r1: 'Right of access and rectification of your data',
      r2: 'Right of immediate objection and unsubscribing',
      r3: 'No sharing with third parties or advertisers',
      contact: 'For any specific request or immediate removal:',
      close: 'Close',
    },
    ar: {
      title: 'النشرة الإخبارية',
      sub: 'لمتابعة أحدث المستجدات المحاسبية والضريبية، اشترك الآن:',
      disclaimer: 'يمكنك إلغاء الاشتراك في أي وقت عبر الروابط الموجودة في الرسائل أو عبر:',
      rights: 'ممارسة حقوقي',
      placeholder: 'بريدك الإلكتروني المهني...',
      subscribe: 'اشتراك',
      success: 'شكراً لك! تم تأكيد اشتراكك في النشرة الإخبارية بنجاح.',
      modalTitle: 'حماية البيانات وحقوقك القانونية',
      modalDesc: 'وفقاً للقانون المغربي رقم 09-08 (CNDP) والمعايير الدولية:',
      r1: 'حق الوصول إلى بياناتك وتصحيحها',
      r2: 'حق الاعتراض وإلغاء الاشتراك الفوري',
      r3: 'عدم تفويت أو نقل البيانات لأي طرف ثالث لأغراض إعلانية',
      contact: 'لأي استفسار أو حذف فوري لعنوانك البريدي:',
      close: 'إغلاق',
    },
  }[language] || {
    title: 'Notre newsletter',
    sub: 'Pour suivre nos dernières actualités, abonnez-vous :',
    disclaimer: "Vous pouvez vous désinscrire à tout moment à l'aide des liens de désinscription ou en cliquant sur ce lien :",
    rights: "j'exerce mes droits",
    placeholder: 'Votre adresse email professionnelle...',
    subscribe: "S'abonner",
    success: 'Merci ! Votre inscription à notre newsletter est validée.',
    modalTitle: 'Protection des Données & Vos Droits',
    modalDesc: "Conformément à la loi marocaine n° 09-08 (CNDP) et aux réglementations RGPD :",
    r1: "Droit d'accès et de rectification de votre email",
    r2: "Droit d'opposition et de désinscription immédiate",
    r3: 'Non-cession à des tiers ou des partenaires publicitaires',
    contact: 'Pour toute demande spécifique ou suppression immédiate :',
    close: 'Fermer',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <>
      <section className="bg-[#bdf1ec] py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-teal-200/50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Block: Slanted slash + Headlines */}
          <div className="flex items-start sm:items-center gap-5 sm:gap-6 w-full lg:w-auto text-start">
            {/* Prominent teal slanted slash */}
            <div 
              className={`w-4 sm:w-5 h-14 sm:h-16 bg-[#009688] ${isRTL ? 'skew-x-[20deg]' : '-skew-x-[20deg]'} shrink-0 rounded-xs shadow-xs`}
              aria-hidden="true"
            />

            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0a1724]">
                {labels.title}
              </h3>
              <p className="text-sm sm:text-base text-[#0a1724] font-normal mt-0.5">
                {labels.sub}
              </p>
              <p className="text-[11px] sm:text-xs text-[#0a1724]/80 italic mt-1 leading-snug">
                {labels.disclaimer}{' '}
                <button
                  type="button"
                  onClick={() => setShowRightsModal(true)}
                  className="underline hover:text-[#009688] font-medium transition-colors cursor-pointer not-italic text-[#0a1724]"
                >
                  {labels.rights}
                </button>
                .
              </p>
            </div>
          </div>

          {/* Right Block: Minimalist underline input + Parallelogram button */}
          <div className="w-full lg:w-auto flex-1 max-w-md lg:ml-auto">
            {isSubmitted ? (
              <div className="flex items-center gap-2.5 bg-[#0a1724] text-[#bdf1ec] px-4 py-3 rounded-none shadow-md">
                <CheckCircle2 className="w-5 h-5 text-[#2dd4bf] shrink-0" />
                <span className="text-xs font-semibold">
                  {labels.success}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 sm:gap-6">
                <div className="flex-1 min-w-[220px]">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={labels.placeholder}
                    aria-label="Email"
                    className="w-full bg-transparent border-0 border-b border-slate-900/60 focus:border-slate-950 pb-2 px-1 text-base sm:text-sm text-[#0a1724] placeholder-[#0a1724]/50 focus:outline-none transition-colors text-start"
                  />
                </div>

                <button
                  type="submit"
                  className={`relative group inline-flex items-center justify-center px-8 py-3 bg-[#0a1724] text-white font-bold text-xs sm:text-sm tracking-wide ${isRTL ? 'skew-x-12' : '-skew-x-12'} hover:bg-[#142336] active:scale-95 transition-all shadow-md shrink-0 cursor-pointer`}
                >
                  <span className={`${isRTL ? '-skew-x-12' : 'skew-x-12'} inline-block`}>{labels.subscribe}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Rights modal for "j'exerce mes droits" */}
      {showRightsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4">
          <div className="bg-white max-w-md w-full p-5 sm:p-6 rounded-2xl shadow-2xl relative text-start">
            <button
              type="button"
              onClick={() => setShowRightsModal(false)}
              className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-slate-400 hover:text-slate-700 rounded-lg`}
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <h4 className="text-base font-bold text-slate-900">
                {labels.modalTitle}
              </h4>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed space-y-2">
              {labels.modalDesc}
            </p>

            <ul className="my-3 space-y-1.5 text-xs text-slate-700 list-disc list-inside">
              <li>{labels.r1}</li>
              <li>{labels.r2}</li>
              <li>{labels.r3}</li>
            </ul>

            <p className="text-xs text-slate-500 mb-4">
              {labels.contact} <strong>dpo@derdabcompta.ma</strong>
            </p>

            <button
              onClick={() => setShowRightsModal(false)}
              className="w-full py-2 bg-[#0a1724] text-white text-xs font-semibold hover:bg-[#142336]"
            >
              <span>{labels.close}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
