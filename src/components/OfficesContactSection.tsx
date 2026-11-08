/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { getLocalizedLocations } from '../data/localizedData.ts';
import { SocialLinks } from './SocialLinks.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

interface OfficesContactSectionProps {
  onOpenBooking: (serviceName?: string, officeName?: string) => void;
}

export const OfficesContactSection: React.FC<OfficesContactSectionProps> = () => {
  const { language, t, isRTL } = useLanguage();
  const locations = getLocalizedLocations(language);
  const [selectedOffice, setSelectedOffice] = useState<string>('tanger-centre');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    office: locations[0]?.name || 'DERDAB COMPTA Tanger – City Center',
    service: 'Expertise comptable & fiscale',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const activeOffice = locations.find((l) => l.id === selectedOffice) || locations[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0a1622] text-white border-b border-white/10 relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-[#2dd4bf] text-xs font-bold uppercase tracking-wider mb-3">
            <span>{t.contact.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.contact.desc}
          </p>
        </div>



        {/* Detailed Office Panel + Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white/5 rounded-3xl p-6 sm:p-10 border border-white/15 backdrop-blur-md shadow-2xl">
          
          {/* Left Column: Selected Office Details */}
          <div className="lg:col-span-5 space-y-6 text-start">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-lg relative h-48 sm:h-56 bg-slate-900">
              <img
                src={activeOffice.image}
                alt={activeOffice.name}
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06111c] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-xs font-bold text-[#2dd4bf] uppercase">
                  {activeOffice.city}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeOffice.name}
                </h3>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2dd4bf] shrink-0 mt-0.5" />
                <span>{activeOffice.address} ({activeOffice.postalCode})</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#2dd4bf] shrink-0" />
                <a href={`tel:${activeOffice.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors underline" dir="ltr">
                  {activeOffice.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#2dd4bf] shrink-0" />
                <a href={`mailto:${activeOffice.email}`} className="hover:text-white transition-colors underline">
                  {activeOffice.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#2dd4bf] shrink-0 mt-0.5" />
                <span>{activeOffice.workingHours}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={activeOffice.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-medium border border-white/15 transition-all"
              >
                <span>{t.contact.openGmaps}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/212661000000?text=Bonjour,%20je%20souhaite%20contacter%20le%20cabinet%20DERDAB%20COMPTA."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs text-white font-medium transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.contact.whatsappBtn}</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="text-xs text-slate-400 mb-2">{t.contact.followTitle}</div>
              <SocialLinks variant="footer" />
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 bg-[#06101c]/90 rounded-2xl p-6 sm:p-8 border border-white/15 shadow-xl text-start">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {t.contact.formSub}
                </p>
              </div>
              <ShieldCheck className="w-6 h-6 text-[#2dd4bf]" />
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">{t.contact.formSuccessTitle}</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  {t.contact.formSuccessDesc}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#c5f2f0] text-slate-950 font-bold text-xs rounded-xl"
                >
                  {t.contact.formSendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#2dd4bf] text-base sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+212 6..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#2dd4bf] text-base sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@votre-entreprise.ma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#2dd4bf] text-base sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t.contact.companyLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="SARL / SA / Auto-entrepreneur"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#2dd4bf] text-base sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t.contact.officeLabel}
                    </label>
                    <div className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200 truncate">{activeOffice.name}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-400/20 text-[#2dd4bf] shrink-0">
                        {activeOffice.city}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t.contact.serviceLabel}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white focus:outline-none focus:border-[#2dd4bf] text-base sm:text-sm"
                    >
                      {language === 'es' ? (
                        <>
                          <option value="Asesoría contable y fiscal">Asesoría contable y fiscal</option>
                          <option value="Constitución de empresa (CRI en 48h)">Constitución de empresa (CRI en 48h)</option>
                          <option value="Implantación en Zona Franca (TFZ/TAC)">Implantación en Zona Franca (TFZ/TAC)</option>
                          <option value="Gestión laboral y nóminas (DAMANCOM)">Gestión laboral y nóminas (DAMANCOM)</option>
                          <option value="Auditoría legal y censura de cuentas">Auditoría legal y censura de cuentas</option>
                          <option value="Cambio de asesor contable">Cambio de asesor contable</option>
                        </>
                      ) : language === 'en' ? (
                        <>
                          <option value="Accounting & Tax Advisory">Accounting & Tax Advisory</option>
                          <option value="Company Incorporation (CRI 48h)">Company Incorporation (CRI 48h)</option>
                          <option value="Free Zone Setup (TFZ/TAC)">Free Zone Setup (TFZ/TAC)</option>
                          <option value="Payroll & Social Security (DAMANCOM)">Payroll & Social Security (DAMANCOM)</option>
                          <option value="Statutory Audit & Certification">Statutory Audit & Certification</option>
                          <option value="Switching Accounting Firm">Switching Accounting Firm</option>
                        </>
                      ) : language === 'ar' ? (
                        <>
                          <option value="الخبرة المحاسبية والجبائية">الخبرة المحاسبية والجبائية</option>
                          <option value="تأسيس الشركات (المركز الجهوي للاستثمار في 48 ساعة)">تأسيس الشركات (المركز الجهوي للاستثمار في 48 ساعة)</option>
                          <option value="التوطين بالمنطقة الحرة (طنجة المتوسط والمنطقة الحرة)">التوطين بالمنطقة الحرة (طنجة المتوسط والمنطقة الحرة)</option>
                          <option value="تدبير الأجور والتصريحات الاجتماعية (ضمانكم)">تدبير الأجور والتصريحات الاجتماعية (ضمانكم)</option>
                          <option value="التدقيق القانوني ومراقبة الحسابات">التدقيق القانوني ومراقبة الحسابات</option>
                          <option value="تغيير الخبير المحاسب وتحويل الملف">تغيير الخبير المحاسب وتحويل الملف</option>
                        </>
                      ) : (
                        <>
                          <option value="Expertise comptable & fiscale">Expertise comptable & fiscale</option>
                          <option value="Création de société (CRI)">Création de société (CRI en 48h)</option>
                          <option value="Implantation Zone Franche (TFZ/TAC)">Implantation Zone Franche (TFZ/TAC)</option>
                          <option value="Paie & Gestion sociale (DAMANCOM)">Paie & Gestion sociale (DAMANCOM)</option>
                          <option value="Audit légal & CAC">Audit légal & Commissariat aux comptes</option>
                          <option value="Changement d'expert-comptable">Changement d'expert-comptable</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#2dd4bf] text-base sm:text-sm"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-400">
                    {t.contact.confidentialNotice}
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 bg-[#c5f2f0] hover:bg-[#b0eae7] text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.submitBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
