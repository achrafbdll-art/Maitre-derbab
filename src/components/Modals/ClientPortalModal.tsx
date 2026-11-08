/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  X,
  Upload,
  FileText,
  TrendingUp,
  Download,
  CheckCircle2,
  Send,
  UserCheck,
  FileCheck
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.tsx';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  const { language, t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'upload' | 'documents' | 'chat'>('dashboard');
  const [uploadedFiles, setUploadedFiles] = useState<
    Array<{ name: string; size: string; status: string; totalMad: string; tva: string }>
  >([
    {
      name: 'Facture_Fournisseur_AutoPart_Tanger.pdf',
      size: '1.2 Mo',
      status: language === 'ar' ? 'معالج عبر OCR' : language === 'es' ? 'Procesado por OCR' : language === 'en' ? 'Processed by OCR' : 'Traité par OCR',
      totalMad: '18 450,00 MAD',
      tva: '3 075,00 MAD (20%)',
    },
    {
      name: 'Quittance_Loyer_CityCenter_Oct2026.pdf',
      size: '640 Ko',
      status: language === 'ar' ? 'مسجل في المحاسبة' : language === 'es' ? 'Contabilizado' : language === 'en' ? 'Booked' : 'Comptabilisé',
      totalMad: '12 000,00 MAD',
      tva: '2 000,00 MAD (20%)',
    },
  ]);

  const [chatMessage, setChatMessage] = useState('');

  const getInitialChat = (lang: string) => {
    switch (lang) {
      case 'es':
        return [
          {
            sender: 'expert' as const,
            text: 'Estimado Director. Su liasse fiscal ante la DGI para este trimestre está lista para teledeclaración. ¿Ha adjuntado la última factura de flete de Tanger Med?',
            time: '10:14',
          },
          {
            sender: 'user' as const,
            text: 'Hola Karim, sí, está subida en el módulo OCR bajo la referencia AutoPart Tanger.',
            time: '10:28',
          },
          {
            sender: 'expert' as const,
            text: 'Excelente, recibida. Todo está conforme; procedemos a la presentación en el portal SIMPL-IS de la Dirección General de Impuestos.',
            time: '10:30',
          },
        ];
      case 'en':
        return [
          {
            sender: 'expert' as const,
            text: 'Good morning. Your DGI tax declaration package for this quarter is ready for electronic filing. Have you uploaded the latest Tanger Med shipping invoice?',
            time: '10:14',
          },
          {
            sender: 'user' as const,
            text: 'Hello Karim, yes, it has been uploaded into the OCR folder under AutoPart Tanger.',
            time: '10:28',
          },
          {
            sender: 'expert' as const,
            text: 'Perfect, confirmed. Everything is strictly compliant; we are proceeding with submission via SIMPL-IS with the Tax Authority.',
            time: '10:30',
          },
        ];
      case 'ar':
        return [
          {
            sender: 'expert' as const,
            text: 'مرحباً بكم سيدي المسير. بيانكم الجبائي الموجه لإدارة الضرائب جاهز للإيداع الإلكتروني. هل تم إرسال فاتورة الشحن الأخيرة الخاصة بميناء طنجة المتوسط؟',
            time: '10:14',
          },
          {
            sender: 'user' as const,
            text: 'أهلاً كريم، نعم لقد تم إيداعها في فضاء المعالجة الآلية تحت اسم AutoPart Tanger.',
            time: '10:28',
          },
          {
            sender: 'expert' as const,
            text: 'ممتاز، تم التوصل بها. جميع البيانات متطابقة؛ نشرع حالياً في التصريح عبر بوابة SIMPL-IS التابعة للمديرية العامة للضرائب.',
            time: '10:30',
          },
        ];
      default:
        return [
          {
            sender: 'expert' as const,
            text: 'Bonjour M. le Dirigeant. Votre liasse fiscale DGI pour le trimestre est prête à être télédéclarée. Avez-vous transmis la dernière facture de fret Tanger Med ?',
            time: '10:14',
          },
          {
            sender: 'user' as const,
            text: 'Bonjour Karim, oui elle est déposée dans la section OCR sous la référence AutoPart Tanger.',
            time: '10:28',
          },
          {
            sender: 'expert' as const,
            text: 'Parfait, bien reçu. Tout est conforme, nous procédons au téléversement sur le portail SIMPL-IS de la Direction des Impôts.',
            time: '10:30',
          },
        ];
    }
  };

  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'user' | 'expert'; text: string; time: string }>>(() =>
    getInitialChat(language)
  );

  if (!isOpen) return null;

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const newEntry = {
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} Ko`,
        status:
          language === 'ar'
            ? 'تم التحليل بواسطة OCR الدرداب كومبتا'
            : language === 'es'
            ? 'Analizado por OCR DERDAB COMPTA'
            : language === 'en'
            ? 'Analyzed by OCR DERDAB COMPTA'
            : 'Analysé par OCR DERDAB COMPTA',
        totalMad: '8 650,00 MAD',
        tva: '1 441,67 MAD (20%)',
      };
      setUploadedFiles([newEntry, ...uploadedFiles]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = {
      sender: 'user' as const,
      text: chatMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatHistory([...chatHistory, userMsg]);
    setChatMessage('');

    setTimeout(() => {
      const reply =
        language === 'ar'
          ? 'تم استلام رسالتكم بنجاح لدى مكتب DERDAB COMPTA بطنجة. سنقوم بالتحقق الفوري مع الأستاذ مراد الدرداب.'
          : language === 'es'
          ? 'Mensaje recibido en el despacho DERDAB COMPTA en Tánger. Lo verificamos de inmediato con D. Mourad Derdab.'
          : language === 'en'
          ? 'Message received by DERDAB COMPTA in Tangier. We are reviewing this immediately with Mr. Mourad Derdab.'
          : 'Message bien reçu par votre cabinet DERDAB COMPTA à Tanger. Nous vérifions cela immédiatement avec Maître Mourad Derdab.';

      setChatHistory((prev) => [
        ...prev,
        {
          sender: 'expert',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[94vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden text-start">
        
        {/* Modal Top Bar */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-900 text-white flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="rounded-lg overflow-hidden shrink-0 border border-white/20 bg-white p-1">
              <img
                src="/assets/aistudio/image_9552ab42.png"
                alt="DERDAB COMPTA"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-black text-sm sm:text-base tracking-tight truncate">{t.clientPortalModal.title}</span>
                <span className="text-[10px] uppercase font-semibold bg-teal-500/30 text-teal-300 px-2 py-0.5 rounded shrink-0">
                  {t.clientPortalModal.badge}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 truncate">
                {language === 'ar'
                  ? 'البوابة التفاعلية للمسيرين · طنجة، تطوان وطنجة المتوسط'
                  : language === 'es'
                  ? 'Portal Colaborativo para Directivos · Tánger, Tetuán y Tanger Med'
                  : language === 'en'
                  ? 'Executive Client Portal · Tangier, Tetouan & Tangier Med'
                  : 'Portail Collaboratif Dirigeant · Tanger, Tétouan & Tanger Med'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors shrink-0"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 pt-2 text-xs font-semibold overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('dashboard')}
            className={`pb-3 px-3 transition-colors flex items-center gap-1.5 whitespace-nowrap border-b-2 ${
              activeTab === 'dashboard'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{t.clientPortalModal.tabAnalytics}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            className={`pb-3 px-3 transition-colors flex items-center gap-1.5 whitespace-nowrap border-b-2 ${
              activeTab === 'upload'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{t.clientPortalModal.tabDocs}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('documents')}
            className={`pb-3 px-3 transition-colors flex items-center gap-1.5 whitespace-nowrap border-b-2 ${
              activeTab === 'documents'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>
              {language === 'ar'
                ? 'الوثائق والبيانات الجبائية'
                : language === 'es'
                ? 'Documentos e Informes'
                : language === 'en'
                ? 'Documents & Tax Returns'
                : 'Documents & Liasses'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('chat')}
            className={`pb-3 px-3 transition-colors flex items-center gap-1.5 whitespace-nowrap border-b-2 ${
              activeTab === 'chat'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>{t.clientPortalModal.tabChat}</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              
              {/* Financial KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    {language === 'ar'
                      ? 'رقم المعاملات الفصلي (درهم)'
                      : language === 'es'
                      ? 'Facturación Trimestral (MAD)'
                      : language === 'en'
                      ? 'Quarterly Turnover (MAD)'
                      : "Chiffre d'Affaires Trimestre (MAD)"}
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900 mt-1 tabular-nums" dir="ltr">
                    1 428 500 MAD
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                    <span>↑ +14.2%</span>
                    <span className="text-slate-400 font-normal">vs 2025</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    {language === 'ar'
                      ? 'مخصص الضريبة على القيمة المضافة (DGI)'
                      : language === 'es'
                      ? 'Provisión IVA a Pagar (DGI)'
                      : language === 'en'
                      ? 'VAT Provision Payable (DGI)'
                      : 'Provision TVA Due DGI'}
                  </div>
                  <div className="text-2xl font-bold font-mono text-blue-700 mt-1 tabular-nums" dir="ltr">
                    58 420 MAD
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    SIMPL-TVA
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    {language === 'ar'
                      ? 'الأجور والضمان الاجتماعي (DAMANCOM)'
                      : language === 'es'
                      ? 'Nóminas y Seguridad Social (DAMANCOM)'
                      : language === 'en'
                      ? 'Payroll & Social Security (DAMANCOM)'
                      : 'Paie & CNSS DAMANCOM'}
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900 mt-1 tabular-nums">
                    {language === 'ar' ? '8 أجراء' : language === 'es' ? '8 Empleados' : language === 'en' ? '8 Employees' : '8 Salariés'}
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                    {language === 'ar'
                      ? 'التصريحات محينة بالكامل'
                      : language === 'es'
                      ? 'Cotizaciones presentadas al día'
                      : language === 'en'
                      ? 'Monthly filings up to date'
                      : 'Bordereaux télédéclarés à jour'}
                  </div>
                </div>
              </div>

              {/* Fiscal Calendar */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  {language === 'ar'
                    ? 'جدول الاستحقاقات القانونية المقبلة (المغرب):'
                    : language === 'es'
                    ? 'Calendario de Próximos Vencimientos Legales (Marruecos):'
                    : language === 'en'
                    ? 'Upcoming Statutory Tax Deadlines (Morocco):'
                    : 'Calendrier des Prochaines Échéances Légales (Maroc) :'}
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold text-slate-800">
                        {language === 'ar'
                          ? 'التصريح الإلكتروني SIMPL-TVA'
                          : language === 'es'
                          ? 'Teledeclaración SIMPL-TVA'
                          : language === 'en'
                          ? 'SIMPL-TVA Electronic Filing'
                          : 'Télédéclaration SIMPL-TVA'}
                      </span>
                    </div>
                    <span className="font-mono text-slate-600">20/11/2026</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold text-slate-800">
                        {language === 'ar'
                          ? 'أداء الدفعة الاحتياطية الرابعة للضريبة على الشركات'
                          : language === 'es'
                          ? 'Pago 4º Pago Fraccionado Impuesto de Sociedades (DGI)'
                          : language === 'en'
                          ? 'Corporate Tax 4th Installment Payment (DGI)'
                          : 'Paiement 4ème Acompte IS (DGI)'}
                      </span>
                    </div>
                    <span className="font-mono text-slate-600">31/12/2026</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold text-slate-800">
                        {language === 'ar'
                          ? 'تصريح الصندوق الوطني للضمان الاجتماعي والتغطية الصحية'
                          : language === 'es'
                          ? 'Declaración CNSS y Cotizaciones AMO'
                          : language === 'en'
                          ? 'CNSS & AMO Monthly Declaration'
                          : 'Déclaration CNSS & Cotisations AMO'}
                      </span>
                    </div>
                    <span className="font-mono text-slate-600">
                      {language === 'ar' ? '10 من كل شهر' : language === 'es' ? '10 de cada mes' : language === 'en' ? '10th of each month' : '10 de chaque mois'}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: UPLOAD & OCR */}
          {activeTab === 'upload' && (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-8 text-center bg-slate-50/50 transition-colors cursor-pointer relative">
                <input
                  type="file"
                  onChange={handleSimulateUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-bold text-slate-800">
                  {t.clientPortalModal.dropzoneTitle}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {t.clientPortalModal.dropzoneSub}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  {t.clientPortalModal.latestDocs}
                </h4>
                <div className="space-y-2">
                  {uploadedFiles.map((file, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <FileCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-900">{file.name}</div>
                          <div className="text-slate-500 text-[11px]">
                            {file.size} · <span className="text-emerald-700 font-semibold">{file.status}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-end">
                        <div className="font-mono font-bold text-slate-900" dir="ltr">{file.totalMad}</div>
                        <div className="text-[11px] text-slate-500 font-mono" dir="ltr">{file.tva}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DOCUMENTS */}
          {activeTab === 'documents' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                {language === 'ar'
                  ? 'الخزينة الرقمية الآمنة والتحميلات:'
                  : language === 'es'
                  ? 'Caja Fuerte Digital y Descargas:'
                  : language === 'en'
                  ? 'Digital Vault & Document Downloads:'
                  : 'Coffre-Fort Numérique & Téléchargements :'}
              </h4>
              {[
                {
                  title:
                    language === 'ar'
                      ? 'البيان الجبائي والميزانية الرسمية 2025 (نموذج DGI)'
                      : language === 'es'
                      ? 'Liasse Fiscal y Balance Oficial 2025 (Formato DGI)'
                      : language === 'en'
                      ? 'Official Tax Return & Balance Sheet 2025 (DGI Format)'
                      : 'Liasse Fiscale & Bilan Officiel 2025 (Format DGI)',
                  desc:
                    language === 'ar'
                      ? 'شهادة التصريح الإلكتروني SIMPL-IS موقعة رقمياً'
                      : language === 'es'
                      ? 'Certificado de teledeclaración SIMPL-IS firmado digitalmente'
                      : language === 'en'
                      ? 'Electronically signed SIMPL-IS filing certificate'
                      : 'Attestation de télédéclaration SIMPL-IS signée électroniquement',
                  type: 'PDF · 3.4 Mo',
                },
                {
                  title:
                    language === 'ar'
                      ? 'كشف اشتراكات الضمان الاجتماعي والتغطية الصحية (DAMANCOM)'
                      : language === 'es'
                      ? 'Liquidación Periódica CNSS y AMO - DAMANCOM'
                      : language === 'en'
                      ? 'CNSS & AMO Summary Return - DAMANCOM'
                      : 'Bordereau Récapitulatif CNSS & AMO - DAMANCOM',
                  desc:
                    language === 'ar'
                      ? 'الاشتراكات الاجتماعية لأجراء مؤسسة طنجة'
                      : language === 'es'
                      ? 'Cotizaciones sociales de la plantilla de Tánger'
                      : language === 'en'
                      ? 'Social contributions for Tangier personnel'
                      : 'Cotisations sociales du personnel de Tanger',
                  type: 'PDF · 820 Ko',
                },
                {
                  title:
                    language === 'ar'
                      ? 'مستخرج السجل التجاري (النموذج J)'
                      : language === 'es'
                      ? 'Extracto del Registro Mercantil (Modèle J)'
                      : language === 'en'
                      ? 'Commercial Register Extract (Model J)'
                      : 'Extrait du Registre de Commerce (Modèle J)',
                  desc:
                    language === 'ar'
                      ? 'كتابة الضبط بالمحكمة التجارية بطنجة - تسجيل ساري المفعول'
                      : language === 'es'
                      ? 'Juzgado de Comercio de Tánger - Registro mercantil activo'
                      : language === 'en'
                      ? 'Tangier Commercial Court Registry - Active company status'
                      : 'Greffe du Tribunal de Commerce de Tanger - Immatriculation active',
                  type: 'PDF · 450 Ko',
                },
                {
                  title:
                    language === 'ar'
                      ? 'محضر الجمع العام العادي السنوي (AGO)'
                      : language === 'es'
                      ? 'Acta de la Junta General Ordinaria (AGO)'
                      : language === 'en'
                      ? 'Minutes of the Annual General Meeting (AGM)'
                      : 'Procès-Verbal de l\'Assemblée Générale Ordinaire (AGO)',
                  desc:
                    language === 'ar'
                      ? 'المصادقة على الحسابات السنوية وتوزيع الأرباح'
                      : language === 'es'
                      ? 'Aprobación de cuentas anuales y aplicación del resultado'
                      : language === 'en'
                      ? 'Approval of annual accounts and dividend distribution'
                      : 'Approbation des comptes annuels et affectation du résultat',
                  type: 'PDF · 1.1 Mo',
                },
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs hover:bg-slate-100/70 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">{doc.title}</div>
                      <div className="text-slate-500 text-[11px] mt-0.5">{doc.desc}</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {}}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-white border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>
                      {language === 'ar' ? 'تحميل' : language === 'es' ? 'Descargar' : language === 'en' ? 'Download' : 'Télécharger'}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: CHAT */}
          {activeTab === 'chat' && (
            <div className="flex flex-col h-[350px]">
              <div className="flex-1 overflow-y-auto space-y-3 p-2">
                {chatHistory.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${
                      msg.sender === 'user'
                        ? (isRTL ? 'items-start' : 'items-end')
                        : (isRTL ? 'items-end' : 'items-start')
                    }`}
                  >
                    <div
                      className={`max-w-md p-3 rounded-xl text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-slate-100 text-slate-800 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="mt-2 pt-2 border-t border-slate-200 flex gap-2">
                <input
                  type="text"
                  placeholder={t.clientPortalModal.chatPlaceholder}
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 text-base sm:text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-blue-600"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.clientPortalModal.chatSend}</span>
                </button>
              </form>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500">
          {t.clientPortalModal.close}
        </div>

      </div>
    </div>
  );
};
