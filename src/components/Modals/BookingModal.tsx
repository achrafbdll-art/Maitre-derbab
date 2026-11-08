/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Phone, Mail, User } from 'lucide-react';
import { getLocalizedLocations } from '../../data/localizedData.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOffice?: string;
  initialService?: string;
  initialQuoteSummary?: string;
  initialEstimatedFee?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialOffice,
  initialService,
  initialQuoteSummary,
  initialEstimatedFee,
}) => {
  const { language, t, isRTL } = useLanguage();
  const locations = getLocalizedLocations(language);
  const defaultOffice = initialOffice || locations[0]?.name || 'DERDAB COMPTA Tanger – City Center';
  const defaultService = initialService || (language === 'ar' ? 'الخبرة المحاسبية والمسك المحاسبي الرقمي' : language === 'es' ? 'Asesoría Contable y Gestión Digital' : language === 'en' ? 'Accounting Advisory & Digital Bookkeeping' : 'Expertise Comptable & Tenue Digitale');

  const [office, setOffice] = useState(defaultOffice);
  const [service, setService] = useState(defaultService);
  const [meetingType, setMeetingType] = useState<'cabinet' | 'visio'>('cabinet');
  const [selectedDate, setSelectedDate] = useState('2026-11-02');
  const [selectedTime, setSelectedTime] = useState('10:00');
  
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+212 ');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-2xl border border-slate-200 text-start">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100 gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-white p-1 shadow-xs shrink-0">
              <img
                src="/assets/aistudio/image_9552ab42.png"
                alt="DERDAB COMPTA"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                {t.bookingModal.step1}
              </div>
              <h3 className="text-base sm:text-xl font-bold text-slate-900 mt-0.5 leading-snug">
                {t.bookingModal.title}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation State */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-bold text-slate-900">
              {t.bookingModal.successTitle}
            </h4>

            <p className="text-sm text-slate-600 max-w-md mx-auto">
              {t.bookingModal.successDesc}
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-start text-xs text-slate-700 space-y-1.5 max-w-md mx-auto">
              <div>
                <span className="font-semibold text-slate-900">
                  {language === 'ar' ? 'العميل: ' : language === 'es' ? 'Cliente: ' : language === 'en' ? 'Client: ' : 'Client : '}
                </span>
                <span>{fullName} ({companyName || (language === 'ar' ? 'مشروع' : language === 'es' ? 'Proyecto' : language === 'en' ? 'Project' : 'Projet')})</span>
              </div>
              <div>
                <span className="font-semibold text-slate-900">
                  {language === 'ar' ? 'الصيغة: ' : language === 'es' ? 'Formato: ' : language === 'en' ? 'Format: ' : 'Format : '}
                </span>
                {meetingType === 'cabinet' ? `${t.bookingModal.inCabinet} (${office})` : t.bookingModal.visio}
              </div>
              <div>
                <span className="font-semibold text-slate-900">
                  {language === 'ar' ? 'الموضوع: ' : language === 'es' ? 'Asunto: ' : language === 'en' ? 'Subject: ' : 'Objet : '}
                </span>
                {service}
              </div>
              {initialEstimatedFee && (
                <div>
                  <span className="font-semibold text-slate-900">
                    {language === 'ar' ? 'التقدير: ' : language === 'es' ? 'Estimación: ' : language === 'en' ? 'Estimated Fee: ' : 'Estimation : '}
                  </span>
                  <span className="font-mono text-blue-700 font-bold">{initialEstimatedFee} MAD HT/mois</span>
                </div>
              )}
              <div>
                <span className="font-semibold text-slate-900">
                  {language === 'ar' ? 'الاتصال المباشر: ' : language === 'es' ? 'Contacto: ' : language === 'en' ? 'Contact: ' : 'Contact : '}
                </span>
                <span className="font-mono" dir="ltr">+212 (0)5 39 34 50 00</span>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Email : {email}
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
              >
                {t.bookingModal.close}
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            
            {initialEstimatedFee && (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-center justify-between">
                <div>
                  <div className="font-semibold">Estimation : {initialQuoteSummary}</div>
                  <div className="text-[11px] text-blue-700">{initialEstimatedFee} MAD HT/mois</div>
                </div>
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              </div>
            )}

            {/* Meeting Type Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.bookingModal.step1}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMeetingType('cabinet')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                    meetingType === 'cabinet'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {t.bookingModal.inCabinet}
                </button>
                <button
                  type="button"
                  onClick={() => setMeetingType('visio')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                    meetingType === 'visio'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {t.bookingModal.visio}
                </button>
              </div>
            </div>

            {/* Office Selection */}
            {meetingType === 'cabinet' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.bookingModal.officeSelect}
                </label>
                <div className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-900 font-medium flex items-center justify-between">
                  <span>{locations[0]?.name || 'DERDAB COMPTA Tanger – City Center'}</span>
                  <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {locations[0]?.city || 'Tanger'}
                  </span>
                </div>
              </div>
            )}

            {/* Mission Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.bookingModal.missionSelect}
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full text-base sm:text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
              >
                {language === 'es' ? (
                  <>
                    <option value="Asesoría Contable y Gestión Digital">Asesoría Contable y Gestión Digital</option>
                    <option value="Constitución de Sociedad (SARL/SA) en Tánger/Tetuán">Constitución de Sociedad (SARL/SA)</option>
                    <option value="Cambio de asesor contable y traspaso de expediente">Cambio de asesor contable</option>
                    <option value="Auditoría Legal y Censura de Cuentas">Auditoría Legal y Censura de Cuentas</option>
                    <option value="Implantación en Zona Franca (TFZ / TAC)">Implantación en Zona Franca (TFZ/TAC)</option>
                    <option value="Gestión Laboral, Nóminas y Liquidaciones CNSS">Gestión Laboral y Nóminas (DAMANCOM)</option>
                    <option value="Asesoramiento Fiscal y Procedimientos DGI">Asesoramiento Fiscal y Procedimientos DGI</option>
                  </>
                ) : language === 'en' ? (
                  <>
                    <option value="Accounting Advisory & Digital Bookkeeping">Accounting Advisory & Digital Bookkeeping</option>
                    <option value="Company Formation (SARL/SA) in Tangier/Tetouan">Company Formation (SARL/SA)</option>
                    <option value="Switching Accounting Firm & Handover">Switching Accounting Firm</option>
                    <option value="Statutory Audit & Certification">Statutory Audit & Certification</option>
                    <option value="Free Zone Setup (TFZ / TAC)">Free Zone Setup (TFZ/TAC)</option>
                    <option value="Payroll, Social Security & CNSS Teledeclarations">Payroll & Social Security (DAMANCOM)</option>
                    <option value="Tax Advisory & DGI Audit Defense">Tax Advisory & DGI Audit Defense</option>
                  </>
                ) : language === 'ar' ? (
                  <>
                    <option value="الخبرة المحاسبية والمسك المحاسبي الرقمي">الخبرة المحاسبية والمسك المحاسبي الرقمي</option>
                    <option value="تأسيس الشركات (SARL/SA) بطنجة وتطوان">تأسيس الشركات (SARL/SA)</option>
                    <option value="تغيير الخبير المحاسب واستلام الملف">تغيير الخبير المحاسب واستلام الملف</option>
                    <option value="التدقيق القانوني ومراقبة الحسابات">التدقيق القانوني ومراقبة الحسابات</option>
                    <option value="التوطين بالمنطقة الحرة (TFZ / TAC)">التوطين بالمنطقة الحرة (TFZ/TAC)</option>
                    <option value="تدبير الأجور والتصريحات لدى الضمان الاجتماعي">تدبير الأجور والتصريحات لدى الضمان الاجتماعي</option>
                    <option value="الاستشارة الجبائية والمواكبة أمام إدارة الضرائب">الاستشارة الجبائية والمواكبة أمام إدارة الضرائب</option>
                  </>
                ) : (
                  <>
                    <option value="Expertise Comptable & Tenue Digitale">Expertise Comptable & Tenue Digitale</option>
                    <option value="Création de Société (SARL/SA) à Tanger/Tétouan">Création de Société (SARL/SA)</option>
                    <option value="Changement d'expert-comptable & reprise de dossier">Changement d'expert-comptable</option>
                    <option value="Audit légal & Commissariat aux Comptes">Audit légal & Commissariat aux Comptes</option>
                    <option value="Implantation en Zone Franche (TFZ / TAC)">Implantation en Zone Franche (TFZ/TAC)</option>
                    <option value="Gestion Sociale, Paie & Télédéclarations CNSS">Gestion Sociale & Paie (DAMANCOM)</option>
                    <option value="Conseil Fiscal & Contrôle DGI">Conseil Fiscal & Contrôle DGI</option>
                  </>
                )}
              </select>
            </div>

            {/* Date & Time selection */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.bookingModal.dateLabel}
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  min="2026-10-29"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full text-base sm:text-xs bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.bookingModal.timeLabel}
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full text-base sm:text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
                >
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:30">11:30</option>
                  <option value="14:30">14:30</option>
                  <option value="16:00">16:00</option>
                  <option value="17:30">17:30</option>
                </select>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.bookingModal.fullName}
                </label>
                <div className="relative">
                  <User className={`w-3.5 h-3.5 text-slate-400 absolute ${isRTL ? 'right-3' : 'left-3'} top-3`} />
                  <input
                    type="text"
                    required
                    placeholder="M. ou Mme Nom"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full text-base sm:text-xs bg-slate-50 border border-slate-200 rounded-lg py-2.5 ${isRTL ? 'pr-8 pl-3' : 'pl-8 pr-3'} text-slate-900 focus:outline-none focus:border-blue-600`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.bookingModal.company}
                </label>
                <input
                  type="text"
                  placeholder="Ex: Société SARL"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full text-base sm:text-xs bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.bookingModal.email}
                </label>
                <div className="relative">
                  <Mail className={`w-3.5 h-3.5 text-slate-400 absolute ${isRTL ? 'right-3' : 'left-3'} top-3`} />
                  <input
                    type="email"
                    required
                    placeholder="dirigeant@societe.ma"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full text-base sm:text-xs bg-slate-50 border border-slate-200 rounded-lg py-2.5 ${isRTL ? 'pr-8 pl-3' : 'pl-8 pr-3'} text-slate-900 focus:outline-none focus:border-blue-600`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.bookingModal.phone}
                </label>
                <div className="relative">
                  <Phone className={`w-3.5 h-3.5 text-slate-400 absolute ${isRTL ? 'right-3' : 'left-3'} top-3`} />
                  <input
                    type="tel"
                    required
                    placeholder="+212 6 XX XX XX XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full text-base sm:text-xs bg-slate-50 border border-slate-200 rounded-lg py-2.5 ${isRTL ? 'pr-8 pl-3' : 'pl-8 pr-3'} text-slate-900 focus:outline-none focus:border-blue-600`}
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.bookingModal.notes}
              </label>
              <textarea
                rows={2}
                placeholder="Ex: Nombre de salariés actuels, date souhaitée de création..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full text-base sm:text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* Confidentiality Notice */}
            <div className="flex items-start gap-2 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {t.bookingModal.sub}
              </span>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-all active:scale-98"
              >
                {t.bookingModal.submit}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
