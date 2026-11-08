/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SupportedLanguage } from '../i18n/translations.ts';
import { OfficeLocation, ServiceOffer, FaqItem } from '../types.ts';
import {
  TANGIER_CITY_IMAGE,
  HERO_IMAGE,
  TETOUAN_OFFICE_IMAGE,
  ADVISORY_DISCUSSION_IMAGE,
} from './mockData.ts';

// -------------------------------------------------------------
// 1. LOCALIZED FAQ ITEMS
// -------------------------------------------------------------
export const getLocalizedFaq = (lang: SupportedLanguage): FaqItem[] => {
  switch (lang) {
    case 'es':
      return [
        {
          category: 'Tarifas',
          question: '¿Cuáles son las tarifas de una asesoría contable en Tánger o Tetuán?',
          answer:
            'Los honorarios de un asesor contable colegiado en Marruecos dependen de la forma jurídica (SARL, SA, persona física), del volumen mensual de facturas, del número de empleados (nóminas) y de la complejidad fiscal. En DERDAB COMPTA, nuestras tarifas comienzan desde 950 MAD netos/mes para empresas de nueva creación, con total transparencia y sin costes ocultos.',
        },
        {
          category: 'Contabilidad',
          question: '¿Cómo transferir la contabilidad de mi empresa al despacho DERDAB COMPTA?',
          answer:
            'El cambio de asesor contable está estrictamente regulado por el Código Deontológico del Colegio de Expertos Contables de Marruecos (OEC). Solo necesita conferirnos poder: redactamos la comunicación de confraternidad a su anterior asesor, recopilamos los balances y libros mayores históricos, y asumimos la gestión de inmediato sin interrupción alguna en sus declaraciones ante la DGI y la CNSS.',
        },
        {
          category: 'Fiscalidad Tánger',
          question: '¿Cuáles son las obligaciones fiscales periódicas de una SARL en Marruecos?',
          answer:
            'Una sociedad SARL en Marruecos debe cumplir con plazos fiscales periódicos: declaración del IVA (mensual o trimestral a través de SIMPL-TVA), pago de los 4 pagos fraccionados del Impuesto de Sociedades (31 de marzo, 30 de junio, 30 de septiembre, 31 de diciembre), declaración anual del resultado fiscal (Balance y liasse fiscal antes del 31 de marzo), y declaraciones mensuales de cotizaciones a la CNSS/AMO mediante DAMANCOM.',
        },
        {
          category: 'Creación de empresas',
          question: '¿Acompañan a inversores extranjeros y miembros de la diáspora marroquí (MRE)?',
          answer:
            'Por supuesto. Una parte sustancial de nuestros clientes en Tánger, Tetuán y Tanger Med son empresarios españoles, europeos y miembros de la diáspora. Gestionamos todo el proceso: domiciliación mercantil, apertura de cuentas bancarias en dírhams convertibles, declaraciones ante la Oficina de Cambios para repatriación de dividendos y asesoramiento bilingüe en español.',
        },
        {
          category: 'Sede central',
          question: '¿Dónde se encuentra la sede del despacho DERDAB COMPTA?',
          answer:
            'Nuestra sede principal está estratégicamente ubicada en el emblemático Tanger City Center, en el Boulevard Mohammed VI (Torre de Negocios, 7ª planta), en pleno corazón financiero de Tánger. Bajo la dirección de Maître Mourad Derdab, recibimos a directivos, inversores y emprendedores en un entorno profesional de primer nivel, o nos desplazamos directamente a sus instalaciones.',
        },
      ];

    case 'en':
      return [
        {
          category: 'Pricing & Fees',
          question: 'What are the fees of a chartered accounting firm in Tangier or Tetouan?',
          answer:
            'Accounting fees in Morocco depend on your legal structure (SARL, SA, sole proprietorship), monthly transaction volume, employee headcount (payroll), and fiscal complexity. At DERDAB COMPTA, packages start from 950 MAD excl. VAT/month for early-stage companies, with full fee transparency and no hidden costs.',
        },
        {
          category: 'Accounting Transfer',
          question: 'How do I transfer my company accounting to DERDAB COMPTA?',
          answer:
            'Changing your certified accountant is a standard procedure fully governed by the Code of Ethics of the Moroccan Order of Chartered Accountants (OEC). You simply mandate our firm: we handle the professional courtesy notice to your former accountant, retrieve all trial balances and general ledgers, and ensure a seamless handover with zero disruption to your DGI and CNSS filings.',
        },
        {
          category: 'Moroccan Taxation',
          question: 'What are the periodic tax obligations of a Moroccan SARL (LLC)?',
          answer:
            'A Moroccan LLC must satisfy strict statutory deadlines: VAT returns (monthly or quarterly via the SIMPL-TVA portal), payment of the 4 corporate income tax (IS) advance installments, filing of the annual tax return (Balance sheet & tax package before March 31), and monthly social security declarations via DAMANCOM CNSS.',
        },
        {
          category: 'Foreign Investment',
          question: 'Do you assist foreign investors and Moroccan Expats (MRE)?',
          answer:
            'Yes, definitely. A significant portion of our clients in Tangier, Tetouan, and Tanger Med are international corporations, UK/European entrepreneurs, and Moroccan diaspora investors. We manage the entire lifecycle: commercial domiciliation, convertible dirham bank accounts, Moroccan Foreign Exchange Office filings for dividend repatriation, and English reporting.',
        },
        {
          category: 'Headquarters',
          question: 'Where is DERDAB COMPTA headquarters located?',
          answer:
            'Our corporate headquarters is established at the prestigious Tanger City Center, Boulevard Mohammed VI (Business Tower, 7th Floor) in Tangier. Under the direct leadership of Maître Mourad Derdab, we welcome executives, investors, and business leaders in an executive boardroom environment or travel directly to your facilities.',
        },
      ];

    case 'ar':
      return [
        {
          category: 'الأتعاب والأسعار',
          question: 'ما هي أتعاب مكتب محاسبة وخبير محاسب بطنجة وتطوان؟',
          answer:
            'تعتمد أتعاب الخبير المحاسب في المغرب على الشكل القانوني للشركة (ش.م.م SARL أو ش.م SA أو شخص ذاتي)، وحجم الفواتير الشهرية، وعدد الأجراء (كشوفات الرواتب) والخصوصيات الجبائية. تبدأ باقاتنا في مكتب DERDAB COMPTA من 950 درهم دون احتساب الرسوم شهرياً للشركات الناشئة، مع شفافية كاملة وبدون أي تكاليف خفية.',
        },
        {
          category: 'تحويل الملف المحاسبي',
          question: 'كيف يمكنني نقل وتغيير المحاسبة إلى مكتب الأستاذ مراد الدرداب؟',
          answer:
            'تغيير الخبير المحاسب مسطرة قانونية مؤطرة بدقة بموجب ميثاق أخلاقيات هيئة الخبراء المحاسبين بالمغرب (OEC). يكفي توكيل مكتبنا: نقوم بإرسال إشعار الزمالة المهنية إلى المحاسب السابق، واسترداد موازين الحسابات والدفاتر اليومية السابقة، ومباشرة التسيير فوراً دون أي انقطاع في تصريحاتكم لدى إدارة الضرائب DGI والضمان الاجتماعي CNSS.',
        },
        {
          category: 'الجبايات بالمغرب',
          question: 'ما هي الالتزامات الضريبية الدورية للشركة ذات المسؤولية المحدودة (SARL)؟',
          answer:
            'تخضع شركة SARL في المغرب لآجال دورية صارمة: التصريح بالضريبة على القيمة المضافة (شهرياً أو فصلياً عبر بوابة SIMPL-TVA)، وأداء الدفعات الاحتياطية الأربع للضريبة على الشركات IS، وإيداع الإقرار الجبائي السنوي (الميزانية وقائمة التركيب قبل 31 مارس)، والتصريح الشهري بالأجور والضمان الاجتماعي عبر بوابة DAMANCOM.',
        },
        {
          category: 'الاستثمار الأجنبي ومغاربة العالم',
          question: 'هل تواكبون المستثمرين الأجانب ومغاربة العالم (MRE)؟',
          answer:
            'بالتأكيد. يشكل المستثمرون الدوليون ومغاربة العالم جزءاً كبيراً من زبنائنا بطنجة وتطوان وميناء طنجة المتوسط. نتكفل بجميع المساطر: التوطين التجاري، فتح الحسابات البنكية بالدرهم القابل للتحويل، تصريحات مكتب الصرف لضمان تحويل الأرباح إلى الخارج، والتقارير المحاسبية بلغات متعددة.',
        },
        {
          category: 'المقر الرئيسي',
          question: 'أين يقع المقر الرئيسي لمكتب DERDAB COMPTA؟',
          answer:
            'يقع مقرنا الرئيسي في موقع استراتيجي ومرموق بـ طنجة سيتي سنتر، شارع محمد السادس (البرج التجاري، الطابق السابع) في قلب الحي المالي لطنجة. تحت إشراف الأستاذ مراد الدرداب، نستقبل المسيرين والمستثمرين وأصحاب المشاريع في فضاء عمل راقٍ، أو ننتقل مباشرة إلى مقراتكم.',
        },
      ];

    case 'fr':
    default:
      return [
        {
          category: 'Tarifs',
          question: "Quels sont les tarifs d'un cabinet comptable à Tanger ou à Tétouan ?",
          answer:
            "Les honoraires d'un expert-comptable au Maroc dépendent de la forme juridique (SARL, SA, personne physique), du volume mensuel de pièces comptables, du nombre de salariés (paies) et de la complexité fiscale. Chez DERDAB COMPTA, nos forfaits débutent à partir de 950 MAD HT/mois pour les TPE naissantes, et sont modulés en toute transparence, sans frais cachés.",
        },
        {
          category: 'Comptabilité',
          question: 'Comment transférer la comptabilité de mon entreprise vers le cabinet DERDAB COMPTA ?',
          answer:
            "Le changement d'expert-comptable est une procédure parfaitement encadrée par le Code de Déontologie de l'Ordre des Experts-Comptables du Maroc. Il vous suffit de nous mandater : nous rédigeons le courrier de confraternité à votre ancien confrère, récupérons l'historique des balances et grands livres, et prenons le relais immédiatement sans aucune interruption de vos déclarations DGI et CNSS.",
        },
        {
          category: 'Fiscalité Tanger',
          question: 'Quelles sont les obligations fiscales périodiques d\'une SARL au Maroc ?',
          answer:
            "Une SARL au Maroc doit satisfaire à plusieurs échéances strictes : la déclaration de TVA (mensuelle ou trimestrielle selon le CA via SIMPL-TVA), le paiement des 4 acomptes provisionnels d'IS (31 mars, 30 juin, 30 septembre, 31 décembre), la déclaration annuelle du résultat fiscal (Bilan & Liasse avant le 31 mars), l'état 9421 pour les salaires, et les déclarations mensuelles de cotisations CNSS / AMO via DAMANCOM.",
        },
        {
          category: "Création d'entreprise",
          question: 'Accompagnez-vous les investisseurs étrangers et Marocains du Monde (MRE) ?',
          answer:
            "Absolument. Une part majeure de nos clients à Tanger, Tétouan et Tanger Med est constituée d'entrepreneurs étrangers (Européens, Américains, Moyen-Orient) et de MRE. Nous gérons pour eux l'ensemble du parcours : domiciliation, compte bancaire en dirhams convertibles, déclarations Office des Changes pour garantir le rapatriement des dividendes, et reporting bilingue.",
        },
        {
          category: 'Siège principal',
          question: 'Où est situé le siège officiel du cabinet DERDAB COMPTA ?',
          answer:
            "Notre siège principal est idéalement implanté au sein du prestigieux complexe d'affaires Tanger City Center, sur le Boulevard Mohammed VI (Tour Business, 7ème étage), au cœur du centre névralgique de Tanger. Sous la direction directe de Maître Mourad Derdab, nous vous recevons dans nos bureaux de prestige ou nous nous déplaçons directement dans vos locaux d'entreprise.",
        },
      ];
  }
};

// -------------------------------------------------------------
// 2. LOCALIZED SERVICE OFFERS (6 PILLARS)
// -------------------------------------------------------------
export const getLocalizedServices = (lang: SupportedLanguage): ServiceOffer[] => {
  switch (lang) {
    case 'es':
      return [
        {
          id: 'expertise-comptable',
          number: '01',
          title: 'Contabilidad y Gestión Digital',
          shortDesc: 'Contabilidad 100% digitalizada, balances certificados y teledeclaraciones SIMPL-DGI en tiempo real.',
          fullDesc: 'Llevanza contable integral de su empresa conforme al Plan General Contable Marroquí (CGNC). Gracias a nuestras herramientas digitales, sus facturas se escanean con OCR automático y sus indicadores financieros están disponibles 24/7.',
          benefits: [
            'Cero pérdida de justificantes gracias al escaneo móvil y OCR certificado',
            'Elaboración del balance anual, cuenta de resultados (CPC) y liasse fiscal',
            'Teledeclaraciones puntuales SIMPL-IS, SIMPL-IVA y SIMPL-IR',
            'Conciliación bancaria automatizada e informes de tesorería en tiempo real',
          ],
          deliverables: [
            'Libro mayor, balance de comprobación y diarios oficiales',
            'Liasse fiscal marroquí completa presentada ante la DGI',
            'Estados financieros de síntesis certificados',
            'Acceso continuo al portal de clientes DERDAB COMPTA Connect',
          ],
          targetAudience: 'Pymes, autónomos, empresas industriales y filiales en Tánger y Tetuán.',
          iconName: 'Calculator',
        },
        {
          id: 'fiscalite-optimisation',
          number: '02',
          title: 'Fiscalidad Marroquí y Asesoría Estratégica',
          shortDesc: 'Optimización fiscal legal, seguimiento de la Ley de Presupuestos y seguridad frente a inspecciones DGI.',
          fullDesc: 'La fiscalidad marroquí evoluciona continuamente. Nuestros fiscalistas analizan sus operaciones para maximizar las deducciones legítimas, evitar sanciones y anticipar el impacto de las reformas del Impuesto de Sociedades y del IVA.',
          benefits: [
            'Aprovechamiento de los regímenes fiscales preferenciales del norte de Marruecos',
            'Auditoría fiscal preventiva antes del cierre para eliminar riesgos de regularización',
            'Asistencia técnica y defensa jurídica ante inspecciones de la DGI',
            'Cálculo exacto de pagos fraccionados y regularizaciones anuales',
          ],
          deliverables: [
            'Diagnóstico fiscal y plan de optimización personalizado',
            'Expediente justificativo de deducciones y amortizaciones',
            'Declaración anual de honorarios y pagos a terceros',
            'Boletín mensual de novedades normativas marroquíes',
          ],
          targetAudience: 'Empresas sujetas al IS y administradores que buscan optimizar su carga tributaria.',
          iconName: 'ShieldCheck',
        },
        {
          id: 'gestion-sociale-paie',
          number: '03',
          title: 'Gestión Laboral, Nóminas y RRHH (DAMANCOM)',
          shortDesc: 'Nóminas conforme al Código de Trabajo marroquí, altas en la CNSS y contratos de trabajo seguros.',
          fullDesc: 'Externalice su departamento laboral con total tranquilidad. Gestionamos todas las formalidades: altas, nóminas mensuales, declaraciones a la Seguridad Social (DAMANCOM CNSS), seguro médico AMO y asistencia en bajas laborales.',
          benefits: [
            'Emisión puntual de nóminas cada fin de mes',
            'Teledeclaración y pago telemático sin errores en DAMANCOM CNSS',
            'Redacción de contratos de trabajo (indefinidos, temporales, convenios ANAPEC, extranjeros)',
            'Finiquitos, liquidaciones y certificados de trabajo conformes a ley',
          ],
          deliverables: [
            'Nóminas electrónicas individuales y libro de salarios',
            'Boletines oficiales de cotización CNSS / AMO',
            'Estado 9421 (declaración anual de salarios para la DGI)',
            'Asistencia jurídica en despidos o conciliaciones laborales',
          ],
          targetAudience: 'Empresas con plantilla laboral en Tánger, Tetuán y zonas industriales.',
          iconName: 'Users',
        },
        {
          id: 'creation-domiciliation',
          number: '04',
          title: 'Creación de Empresas y Domiciliación (CRI)',
          shortDesc: 'Constitución de sociedad SARL o SA en 48 horas en Tánger y Tetuán. Domiciliación de prestigio.',
          fullDesc: 'Desde la obtención del Certificado Negativo ante la OMPIC hasta la inscripción en el Registro Mercantil (Modèle J), nuestros expertos gestionan el 100% de los trámites ante el CRI sin desplazamientos innecesarios.',
          benefits: [
            'Inscripción acelerada a través de la ventanilla única del CRI',
            'Redacción personalizada de estatutos societarios según su actividad',
            'Domiciliación comercial de prestigio en Tanger City Center o Tetuán',
            'Obtención de Identificador Fiscal (IF), Tasa Profesional (TP), RC e ICE',
          ],
          deliverables: [
            'Certificado Negativo OMPIC oficial',
            'Estatutos sellados y legalizados',
            'Extracto del Registro Mercantil (Modèle J)',
            'Certificado de inscripción fiscal e Identificador Común de Empresa (ICE)',
          ],
          targetAudience: 'Emprendedores, inversores extranjeros y miembros de la diáspora en Marruecos.',
          iconName: 'Building2',
        },
        {
          id: 'audit-commissariat',
          number: '05',
          title: 'Auditoría Legal y Censura de Cuentas',
          shortDesc: 'Certificación anual de estados financieros, auditoría contractual y revisión de control interno.',
          fullDesc: 'Como auditores colegiados inscritos en el Colegio de Expertos Contables de Marruecos (OEC), aportamos garantía de independencia y rigor requerida por socios, bancos y entidades públicas.',
          benefits: [
            'Certificación legal según normas contables marroquíes e internacionales',
            'Identificación proactiva de debilidades de control interno',
            'Refuerzo de credibilidad ante entidades bancarias para financiación',
            'Informes de auditoría rigurosos y orientados a la creación de valor',
          ],
          deliverables: [
            'Informe general del auditor sobre los estados financieros de síntesis',
            'Informe especial sobre operaciones vinculadas',
            'Carta de recomendaciones a la dirección',
            'Certificaciones financieras para licitaciones públicas',
          ],
          targetAudience: 'Sociedades Anónimas (SA), SARL que superan los umbrales legales y filiales de grupos.',
          iconName: 'FileCheck',
        },
        {
          id: 'zone-franche-tanger-med',
          number: '06',
          title: 'Asesoría en Zona Franca e Inversores',
          shortDesc: 'Exenciones fiscales TFZ/TAC, Tanger Med Port, autorizaciones industriales y convenios de inversión.',
          fullDesc: 'El norte de Marruecos alberga el principal polo logístico e industrial de África. Asesoramos en la obtención de autorizaciones ante TMSA, exención de IVA y aranceles, y convenios de inversión.',
          benefits: [
            'Dominio del régimen fiscal de las Zonas de Aceleración Industrial (ZAI)',
            'Exención total de derechos arancelarios y del IVA en bienes de equipo',
            'Gestión de expedientes ante TMSA (Tanger Med) y el CRI regional',
            'Cumplimiento estricto con la normativa de la Oficina de Cambios',
          ],
          deliverables: [
            'Plan de negocio y expediente de solicitud de implantación en Zona Franca',
            'Estructuración fiscal y aduanera optimizada',
            'Asistencia continua en declaraciones periódicas TMSA / DGI',
            'Informes contables multilingües (Español / Francés / Inglés)',
          ],
          targetAudience: 'Multinacionales, empresas de automoción, transitarios e inversores internacionales.',
          iconName: 'Globe',
        },
      ];

    case 'en':
      return [
        {
          id: 'expertise-comptable',
          number: '01',
          title: 'Chartered Accounting & Digital Bookkeeping',
          shortDesc: '100% paperless accounting, certified financial statements, and real-time SIMPL-DGI filings.',
          fullDesc: 'Full accounting management compliant with the Moroccan General Accounting Code (CGNC). Through our cutting-edge collaborative tools, invoices are scanned via OCR and financial metrics are accessible 24/7.',
          benefits: [
            'Zero lost receipts with mobile scanning and certified OCR',
            'Preparation of annual balance sheets, income statements (CPC), and tax packages',
            'Timely SIMPL-IS, SIMPL-TVA, and SIMPL-IR electronic tax submissions',
            'Automated bank reconciliations and live cash-flow reporting',
          ],
          deliverables: [
            'General ledger, trial balance, and official statutory journals',
            'Complete Moroccan tax package successfully filed with the DGI',
            'Certified summary financial statements',
            'Continuous access to the DERDAB COMPTA Connect client portal',
          ],
          targetAudience: 'SMEs, startups, multinational subsidiaries, and professionals in Tangier and Tetouan.',
          iconName: 'Calculator',
        },
        {
          id: 'fiscalite-optimisation',
          number: '02',
          title: 'Moroccan Taxation & Strategic Advisory',
          shortDesc: 'Statutory tax optimization, Finance Act monitoring, and comprehensive protection during DGI audits.',
          fullDesc: 'Moroccan tax legislation is rapidly modernizing. Our tax specialists analyze your operations to maximize allowable deductions, eliminate penalty risks, and prepare for statutory corporate tax and VAT shifts.',
          benefits: [
            'Leverage preferential tax regimes across Northern Morocco',
            'Pre-closing tax health checks to prevent tax reassessments',
            'Complete legal representation and defense during DGI audits',
            'Accurate calculation of corporate tax quarterly installments',
          ],
          deliverables: [
            'Comprehensive tax diagnostic and customized optimization strategy',
            'Documentation supporting tax deductions and capital depreciation',
            'Annual filings of third-party fees and dividends',
            'Monthly regulatory tax brief for executive leadership',
          ],
          targetAudience: 'Companies subject to corporate tax and executives seeking tax efficiency.',
          iconName: 'ShieldCheck',
        },
        {
          id: 'gestion-sociale-paie',
          number: '03',
          title: 'Payroll, HR & Social Security (DAMANCOM)',
          shortDesc: 'Moroccan Labor Code compliant payslips, CNSS e-declarations, and employment contract drafting.',
          fullDesc: 'Outsource your payroll with total peace of mind. We handle all social formalities: new hires, monthly payslips, mandatory social declarations (DAMANCOM CNSS), health insurance (AMO), and termination settlements.',
          benefits: [
            'Punctual and secure payslip delivery every month',
            'Error-free filing and payments on the DAMANCOM CNSS portal',
            'Drafting of compliant employment agreements (Permanent, Fixed-term, ANAPEC, Expat)',
            'Compliant final settlements, severance calculations, and discharge waivers',
          ],
          deliverables: [
            'Electronic employee payslips and monthly payroll journals',
            'CNSS / AMO contribution statements and annual social compliance certificates',
            'Form 9421 (annual employer salary declaration for the DGI)',
            'Legal guidance during staff dismissals and workplace conciliations',
          ],
          targetAudience: 'Employers with 1 to hundreds of staff across Tangier, Tetouan, and Tanger Med.',
          iconName: 'Users',
        },
        {
          id: 'creation-domiciliation',
          number: '04',
          title: 'Company Incorporation & Domiciliation (CRI)',
          shortDesc: 'Set up your SARL or SA within 48 hours in Tangier & Tetouan. Prime registered office address.',
          fullDesc: 'From official negative certificate issuance at OMPIC to Trade Registry registration (Modèle J) at the Commercial Court, our experts handle 100% of the incorporation workflow seamlessly.',
          benefits: [
            'Fast-track registration via the CRI Regional Investment Centre one-stop shop',
            'Tailored Articles of Association drafted to suit your business operations',
            'Prestigious commercial registered address at Tangier City Center or Tetouan',
            'Acquisition of Tax ID (IF), Business Tax (TP), Commercial Register (RC), and ICE',
          ],
          deliverables: [
            'Official OMPIC Negative Certificate',
            'Registered and legalized Articles of Association',
            'Commercial Register Certificate (Modèle J)',
            'Business Tax (TP) certificate and Common Company Identifier (ICE)',
          ],
          targetAudience: 'Entrepreneurs, international investors, and Moroccan expatriates establishing in Morocco.',
          iconName: 'Building2',
        },
        {
          id: 'audit-commissariat',
          number: '05',
          title: 'Statutory Audit & Account Certification',
          shortDesc: 'Statutory financial statement certification, contractual audit, and internal control reviews.',
          fullDesc: 'As sworn statutory auditors registered with the Moroccan Order of Chartered Accountants (OEC), we provide the independence and analytical rigor required by shareholders, banks, and regulators.',
          benefits: [
            'Statutory certification under Moroccan and international auditing standards',
            'Proactive identification of internal control weaknesses and practical remediation',
            'Strengthened banking credibility for loans and institutional investments',
            'Pragmatic, value-oriented audit opinions and managerial recommendations',
          ],
          deliverables: [
            'Auditor’s General Report on the annual financial statements',
            'Special Report on regulated and related-party agreements',
            'Management letter on internal accounting controls',
            'Financial certifications for public tenders and credit facilities',
          ],
          targetAudience: 'Joint-stock companies (SA), large SARLs exceeding statutory thresholds, and subsidiaries.',
          iconName: 'FileCheck',
        },
        {
          id: 'zone-franche-tanger-med',
          number: '06',
          title: 'Free Zone Advisory & Foreign Investment',
          shortDesc: 'TFZ/TAC tax exemptions, Tanger Med Port integration, industrial licensing, and foreign exchange compliance.',
          fullDesc: 'Northern Morocco hosts Africa’s primary industrial and transshipment hub. We assist foreign manufacturers and logistics operators in obtaining TMSA licenses, customs exemptions, and dividend repatriation via the Foreign Exchange Office.',
          benefits: [
            'Deep expertise in the Industrial Acceleration Zone (ZAI) tax regulations',
            'Full exemption from customs duties and VAT on imported equipment and raw materials',
            'Direct licensing representation before TMSA (Tanger Med) and the CRI',
            'Strict adherence to Moroccan Foreign Exchange Office (Office des Changes) rules',
          ],
          deliverables: [
            'Comprehensive business plan and Free Zone licensing application dossier',
            'Optimized corporate tax, customs, and withholding tax structuring',
            'Ongoing compliance support for periodic TMSA / DGI filings',
            'Multilingual financial reporting (English / French / Spanish)',
          ],
          targetAudience: 'Automotive suppliers, industrial manufacturers, freight forwarders, and foreign entities.',
          iconName: 'Globe',
        },
      ];

    case 'ar':
      return [
        {
          id: 'expertise-comptable',
          number: '01',
          title: 'الخبرة المحاسبية والمسك الرقمي',
          shortDesc: 'مسك الحسابات بنسبة 100% رقمياً، ميزانيات مصادق عليها، وتصريحات إلكترونية فورية لدى إدارة الضرائب.',
          fullDesc: 'نتولى التسيير المحاسبي الشامل لشركتكم وفقاً للمخطط المحاسبي العام المغربي (CGNC). بفضل حلولنا التكنولوجية، تتم معالجة فواتيركم ومراقبة مؤشراتكم المالية على مدار الساعة.',
          benefits: [
            'ضمان عدم ضياع أي وثيقة بفضل المسح الضوئي وتقنية التعرف الضوئي OCR',
            'إعداد الميزانية السنوية، وحساب النتائج (CPC)، والملف الجبائي الشامل',
            'التصريحات الإلكترونية في المواعيد المحددة (SIMPL-IS ،SIMPL-TVA ،SIMPL-IR)',
            'مطابقة بنكية آلية وتتبع فوري للسيولة النقدية',
          ],
          deliverables: [
            'دفتر الأستاذ، ميزان المراجعة، واليوميات المحاسبية القانونية',
            'الملف الجبائي المغربي المودع إلكترونياً لدى إدارة الضرائب DGI',
            'القوائم المالية التركيبية المعتمدة رسمياً',
            'ولوج دائم ومؤمن إلى فضاء الزبناء DERDAB COMPTA Connect',
          ],
          targetAudience: 'المقاولات الصغرى والمتوسطة، الشركات الصناعية، والمهن الحرة بطنجة وتطوان.',
          iconName: 'Calculator',
        },
        {
          id: 'fiscalite-optimisation',
          number: '02',
          title: 'الجبايات المغربية والاستشارة الاستراتيجية',
          shortDesc: 'التحسين الضريبي القانوني، مواكبة قوانين المالية، والحماية الشاملة أثناء عمليات المراقبة الجبائية.',
          fullDesc: 'تتطور المنظومة الجبائية المغربية باستمرار. يحلل خبراؤنا معاملاتكم للاستفادة من الإعفاءات المشروعة، وتجنب الغرامات، واستباق التعديلات الضريبية المستمرة.',
          benefits: [
            'الاستفادة القصوى من الامتيازات الجبائية الخاصة بشمال المغرب',
            'افتحاص جبائي وقائي قبل اختتام السنة المالية لتفادي أي تصحيح ضريبي',
            'مواكبة ودفاع قانوني كامل أمام مفتشي إدارة الضرائب (DGI)',
            'حساب دقيق للدفعات الاحتياطية والتسويات الضريبية السنوية',
          ],
          deliverables: [
            'تشخيص جبائي مفصل وخطة تحسين ضريبي مخصصة',
            'ملف تبرير الخصومات والاستهلاكات الجبائية القانونية',
            'التصريح السنوي بالأتعاب والمكافآت المدفوعة للأغيار',
            'نشرة إخبارية دورية بأحدث المستجدات القانونية والضريبية',
          ],
          targetAudience: 'الشركات الخاضعة للضريبة على الشركات والمسيرون الراغبون في تدبير ضريبي محكم.',
          iconName: 'ShieldCheck',
        },
        {
          id: 'gestion-sociale-paie',
          number: '03',
          title: 'التدبير الاجتماعي، الأجور والضمان الاجتماعي (DAMANCOM)',
          shortDesc: 'بيانات رواتب مطابقة لمدونة الشغل المغربية، تصريحات الضمان الاجتماعي، وعقود عمل محصنة.',
          fullDesc: 'فوضوا تدبير الأجور بكل اطمئنان. نتكفل بجميع الإجراءات الاجتماعية: كشوفات الرواتب، التصريحات الشهرية للضمان الاجتماعي (DAMANCOM CNSS)، والتأمين الصحي الإجباري AMO.',
          benefits: [
            'إصدار دقيق ومنتظم لبيانات الرواتب في نهاية كل شهر',
            'تصريح وأداء إلكتروني خالٍ من الأخطاء عبر بوابة DAMANCOM',
            'صياغة عقود العمل (عقود غير محددة المدة CDI، محددة المدة CDD، عقود الوكالة الوطنية ANAPEC)',
            'تصفية المستحقات وشهادات العمل ومخالصات نهاية الخدمة القانونية',
          ],
          deliverables: [
            'بيانات رواتب إلكترونية فردية وسجل الأجور الشهري',
            'بيانات التصريح بالضمان الاجتماعي والتأمين الصحي AMO',
            'الجدول 9421 (التصريح السنوي بمجموع الأجور لإدارة الضرائب)',
            'استشارة قانونية واكبة خلال نزاعات الشغل أو إنهاء العقود',
          ],
          targetAudience: 'المقاولات المشغلة للأجراء في طنجة، تطوان، والمناطق الحرة.',
          iconName: 'Users',
        },
        {
          id: 'creation-domiciliation',
          number: '04',
          title: 'تأسيس الشركات والتوطين التجاري (CRI)',
          shortDesc: 'إنشاء شركتكم ش.م.م (SARL) أو ش.م (SA) في 48 ساعة بطنجة وتطوان، مع توطين تجاري راقٍ.',
          fullDesc: 'من استخراج الشهادة السلبية من المكتب المغربي للملكية الصناعية والتجارية (OMPIC) إلى التسجيل بالسجل التجاري (نموذج J)، يتكفل خبراؤنا بجميع الإجراءات القانونية عبر الشباك الوحيد.',
          benefits: [
            'تسجيل سريع عبر الشباك الوحيد للمركز الجهوي للاستثمار (CRI)',
            'صياغة قانونية محكمة للنظام الأساسي متلائمة مع نشاطكم التجاري',
            'عنوان توطين تجاري وجبائي راقٍ بمركز طنجة سيتي سنتر أو تطوان',
            'استخراج رقم التعريف الضريبي (IF)، والرسم المهني (TP)، والسجل التجاري (RC)، ورقم ICE',
          ],
          deliverables: [
            'الشهادة السلبية الرسمية من OMPIC',
            'النظام الأساسي المسجل والمصادق عليه قانونياً',
            'مستخرج السجل التجاري الرسمي (نموذج J)',
            'شهادة التسجيل في الرسم المهني ورقم التعريف الموحد للمقاولة (ICE)',
          ],
          targetAudience: 'رواد الأعمال، المستثمرون الأجانب، ومغاربة العالم الراغبون في الاستثمار.',
          iconName: 'Building2',
        },
        {
          id: 'audit-commissariat',
          number: '05',
          title: 'التدقيق القانوني ومراقبة الحسابات',
          shortDesc: 'المصادقة على القوائم التركيبية السنوية، مهام الافتحاص التعاقدي، ومراجعة أنظمة الرقابة الداخلية.',
          fullDesc: 'بصفتنا مراقبي حسابات معتمدين لدى هيئة الخبراء المحاسبين بالمغرب، نوفر ضمانة الاستقلالية والمصداقية المطلوبة من طرف الشركاء، الأبناك، والجهات المؤسساتية.',
          benefits: [
            'المصادقة القانونية على الحسابات وفقاً للمعايير المحاسبية المعتمدة',
            'تحديد استباقي لنقاط الضعف في الرقابة الداخلية وتقديم توصيات ملموسة',
            'تعزيز المصداقية والشفافية أمام الأبناك والمستثمرين لتمويل المشاريع',
            'تقارير تدقيق مهنية واضحة وموجهة نحو خلق القيمة',
          ],
          deliverables: [
            'التقرير العام لمراقب الحسابات حول القوائم التركيبية السنوية',
            'التقرير الخاص حول الاتفاقيات المنظمة قانونياً',
            'مذكرة التوصيات الموجهة للإدارة العامة لتحسين الرقابة الداخلية',
            'شهادات مالية خاصة لطلبات العروض والمؤسسات المالية',
          ],
          targetAudience: 'شركات المساهمة (SA)، والشركات ذات المسؤولية المحدودة متجاوزة السقوف القانونية.',
          iconName: 'FileCheck',
        },
        {
          id: 'zone-franche-tanger-med',
          number: '06',
          title: 'مواكبة المناطق الحرة والمستثمرين',
          shortDesc: 'امتيازات المناطق الحرة TFZ وTAC وميناء طنجة المتوسط، التراخيص الصناعية وتدفقات العملات.',
          fullDesc: 'يعد شمال المغرب أول قطب صناعي ولوجستي في القارة. نوجه المستثمرين لإعداد ملفات القبول لدى الوكالة الخاصة طنجة المتوسط (TMSA)، والإعفاءات الجمركية، وتحويل الأرباح عبر مكتب الصرف.',
          benefits: [
            'إتقان كامل للنظام الضريبي الخاص بمناطق التسريع الصناعي (ZAI)',
            'إعفاء تام من الرسوم الجمركية والضريبة على القيمة المضافة للسلع والمعدات',
            'متابعة الملفات لدى الوكالة الخاصة طنجة المتوسط (TMSA) والمركز الجهوي للاستثمار',
            'مطابقة صارمة لمقتضيات وضوابط مكتب الصرف المغربي',
          ],
          deliverables: [
            'مخطط الأعمال وملف الترشيح الكامل للاستقرار بالمنطقة الحرة',
            'هيكلة جبائية وجمركية مثلى للأنشطة الموجهة للتصدير',
            'مواكبة مستمرة في التصريحات الدورية لدى إدارة الجمارك والضرائب',
            'تقارير مالية بلغات متعددة (عربية / فرنسية / إنجليزية / إسبانية)',
          ],
          targetAudience: 'الشركات متعددة الجنسيات، مصنعو أجزاء السيارات، ووكلاء النقل الدولي.',
          iconName: 'Globe',
        },
      ];

    case 'fr':
    default:
      return [
        {
          id: 'expertise-comptable',
          number: '01',
          title: 'Expertise Comptable & Tenue Digitale',
          shortDesc: 'Tenue de comptes 100% dématérialisée, bilans certifiés et télédéclarations SIMPL-DGI en temps réel.',
          fullDesc: 'Nous assurons la gestion comptable intégrale de votre société conformément au Code Général de Normalisation Comptable (CGNC) marocain. Grâce à nos outils digitaux, vos factures sont scannées, rapprochées automatiquement et vos indicateurs financiers sont consultables 24h/24.',
          benefits: [
            'Zéro perte de justificatifs grâce au scan mobile et à l\'OCR certifié',
            'Établissement du bilan annuel, compte de résultat (CPC) et liasse fiscale',
            'Télédéclarations fiscales SIMPL-IS, SIMPL-TVA et SIMPL-IR ponctuelles',
            'Rapprochement bancaire automatisé et tableaux de trésorerie en direct',
          ],
          deliverables: [
            'Grand livre, balance générale et journaux comptables légaux',
            'Liasse fiscale marocaine complète télédéclarée à la DGI',
            'États financiers de synthèse (Bilan, CPC, ESG, Tableau de financement)',
            'Accès permanent à votre espace client collaboratif',
          ],
          targetAudience: 'TPE, PME, start-ups, professions libérales et filiales dans le Grand Tanger et à Tétouan.',
          iconName: 'Calculator',
        },
        {
          id: 'fiscalite-optimisation',
          number: '02',
          title: 'Fiscalité Marocaine & Conseil Stratégique',
          shortDesc: 'Optimisation fiscale légale, veille Loi de Finances et sécurisation complète face aux contrôles DGI.',
          fullDesc: 'La fiscalité marocaine évolue rapidement avec les réformes progressives de l\'IS et de la TVA. Nos fiscalistes analysent vos opérations afin de maximiser les déductions licites, d\'éviter les pénalités et d\'anticiper les impacts de chaque nouvelle Loi de Finances.',
          benefits: [
            'Bénéficiez des régimes fiscaux préférentiels du Nord du Maroc',
            'Audit préventif fiscal avant clôture pour éradiquer tout risque de redressement',
            'Assistance et défense complète en cas de vérification fiscale de la DGI',
            'Calcul précis des acomptes provisionnels et régularisations annuelles',
          ],
          deliverables: [
            'Diagnostic fiscal complet et plan d\'optimisation personnalisé',
            'Dossier de justification des déductions et amortissements fiscaux',
            'Gestion des déclarations annuelles de rémunérations versées à des tiers',
            'Veille réglementaire exclusive transmise chaque mois à la direction',
          ],
          targetAudience: 'Entreprises assujetties à l\'IS, dirigeants soucieux d\'optimiser leur fiscalité pro et personnelle.',
          iconName: 'ShieldCheck',
        },
        {
          id: 'gestion-sociale-paie',
          number: '03',
          title: 'Gestion Sociale, Paie & RH (DAMANCOM)',
          shortDesc: 'Bulletins de paie conformes au Code du Travail marocain, déclarations CNSS et contrats de travail.',
          fullDesc: 'Externalisez votre pôle paie en toute sérénité. Nous gérons l\'ensemble des formalités sociales : de l\'embauche aux déclarations mensuelles CNSS (via DAMANCOM), AMO, CIMR et assurance accident de travail, tout en veillant au strict respect du droit social marocain.',
          benefits: [
            'Édition ponctuelle et sécurisée de vos bulletins de paie chaque fin de mois',
            'Télédéclaration et télépaiement sans erreur sur le portail DAMANCOM CNSS',
            'Rédaction de contrats de travail (CDI, CDD, conventions ANAPEC, contrats étrangers)',
            'Gestion des départs, soldes de tout compte et reçus pour solde conformes',
          ],
          deliverables: [
            'Fiches de paie électroniques individuelles et journal de paie mensuel',
            'Bordereaux de déclaration CNSS / AMO et attestation de déclaration annuelle',
            'État 9421 (déclaration annuelle des salaires pour la DGI)',
            'Assistance juridique lors des ruptures de contrat ou contentieux',
          ],
          targetAudience: 'Entreprises employant de 1 à plusieurs centaines de collaborateurs à Tanger, Tétouan et Tanger Med.',
          iconName: 'Users',
        },
        {
          id: 'creation-domiciliation',
          number: '04',
          title: 'Création d\'Entreprise & Domiciliation (CRI)',
          shortDesc: 'Constitution de votre SARL ou SA en 48h chrono à Tanger et Tétouan. Domiciliation prestigieuse.',
          fullDesc: 'De la délivrance du Certificat Négatif par l\'OMPIC jusqu\'au dépôt au Greffe du Tribunal de Commerce de Tanger ou de Tétouan, nos experts prennent en charge 100% des démarches légales pour immatriculer votre société sans déplacement inutile.',
          benefits: [
            'Immatriculation accélérée via le guichet unique du CRI Tanger-Tétouan-Al Hoceima',
            'Rédaction sur-mesure des statuts juridiques adaptés à votre activité',
            'Adresse de domiciliation fiscale de premier ordre au Tanger City Center ou Tétouan',
            'Obtention de l\'Identifiant Fiscal (IF), Taxe Professionnelle (TP), RC et ICE',
          ],
          deliverables: [
            'Certificat Négatif OMPIC officiel',
            'Statuts enregistrés et certifiés conformes',
            'Extrait du Registre de Commerce (Modèle J)',
            'Attestation d\'inscription à la Taxe Professionnelle et Identifiant Commun de l\'Entreprise (ICE)',
          ],
          targetAudience: 'Entrepreneurs marocains, MRE et investisseurs internationaux créant une structure dans le Nord.',
          iconName: 'Building2',
        },
        {
          id: 'audit-commissariat',
          number: '05',
          title: 'Audit Légal & Commissariat aux Comptes',
          shortDesc: 'Certification des comptes sociaux, missions d\'audit contractuel et revue des procédures internes.',
          fullDesc: 'En tant que commissaires aux comptes inscrits au tableau de l\'Ordre des Experts-Comptables du Maroc, nous apportons une garantie d\'indépendance et de rigueur à vos états financiers, requise pour vos actionnaires, banques partenaires et tiers institutionnels.',
          benefits: [
            'Certification légale des comptes conformément aux normes marocaines et internationales',
            'Identification proactive des faiblesses de contrôle interne et recommandations',
            'Renforcement de votre crédibilité auprès des banques pour vos levées de fonds',
            'Rapports d\'audit clairs, pragmatiques et orientés création de valeur',
          ],
          deliverables: [
            'Rapport général du Commissaire aux Comptes sur les états de synthèse',
            'Rapport spécial sur les conventions réglementées',
            'Lettre de recommandations managériales sur le contrôle interne',
            'Attestations financières spécifiques pour appels d\'offres et partenaires',
          ],
          targetAudience: 'Sociétés Anonymes (SA), SARL dépassant les seuils légaux, filiales de groupes et institutions.',
          iconName: 'FileCheck',
        },
        {
          id: 'zone-franche-tanger-med',
          number: '06',
          title: 'Accompagnement Zone Franche & Investisseurs',
          shortDesc: 'Exonérations fiscales TFZ/TAC, Tanger Med Port, agréments industriels et investissements étrangers.',
          fullDesc: 'Le Nord du Maroc dispose du premier hub logistique et industriel d\'Afrique. Nous guidons les investisseurs dans le montage de dossiers d\'éligibilité, les exonérations douanières, les conventions d\'investissement avec l\'État marocain et le rapatriement des dividendes via l\'Office des Changes.',
          benefits: [
            'Maîtrise complète du régime fiscal spécifique des Zones d\'Accélération Industrielle (ZAI)',
            'Exonération totale des droits de douane et de la TVA sur les biens d\'équipement',
            'Assistance aux démarches auprès de TMSA (Tanger Med Special Agency) et du CRI',
            'Conformité stricte avec la réglementation de l\'Office des Changes',
          ],
          deliverables: [
            'Business plan et dossier de candidature pour obtention de l\'agrément en Zone Franche',
            'Schéma d\'implantation fiscale et douanière optimisé',
            'Assistance permanente lors des déclarations périodiques TMSA / DGI',
            'Rapports financiers bilingues (Français / Anglais / Espagnol)',
          ],
          targetAudience: 'Multinationales industrielles, équipementiers automobiles, transitaires et investisseurs étrangers.',
          iconName: 'Globe',
        },
      ];
  }
};

// -------------------------------------------------------------
// 3. LOCALIZED LOCATION (SIÈGE TANGER CITY CENTER)
// -------------------------------------------------------------
export const getLocalizedLocations = (lang: SupportedLanguage): OfficeLocation[] => {
  return [
    {
      id: 'tanger-centre',
      city: lang === 'es' ? 'Tánger' : lang === 'ar' ? 'طنجة' : 'Tanger',
      name:
        lang === 'es'
          ? 'DERDAB COMPTA Tánger – City Center'
          : lang === 'ar'
          ? 'مكتب DERDAB COMPTA طنجة – سيتي سنتر'
          : 'DERDAB COMPTA Tanger – City Center',
      tagline:
        lang === 'es'
          ? 'Sede principal · Pôle Conseil et Expertise'
          : lang === 'en'
          ? 'Main Headquarters · Advisory & Accounting'
          : lang === 'ar'
          ? 'المقر الرئيسي · قطب الاستشارة والخبرة المحاسبية'
          : 'Siège principal & Pôle Conseil et Expertise',
      address:
        lang === 'es'
          ? 'Tanger City Center, Boulevard Mohammed VI, Torre de Negocios, 7ª planta'
          : lang === 'en'
          ? 'Tanger City Center, Boulevard Mohammed VI, Business Tower, 7th Floor'
          : lang === 'ar'
          ? 'طنجة سيتي سنتر، شارع محمد السادس، البرج التجاري، الطابق 7'
          : 'Tanger City Center, Boulevard Mohammed VI, Tour Business, 7ème étage',
      postalCode: '90000 Tanger',
      phone: '+212 (0)5 39 34 50 00',
      email: 'contact@derdabcompta.ma',
      leadExpert: lang === 'ar' ? 'الأستاذ مراد الدرداب' : 'Maître Mourad Derdab',
      leadTitle:
        lang === 'es'
          ? 'Fundador y Director General · Miembro OEC Marruecos'
          : lang === 'en'
          ? 'Founder & Managing Partner · Chartered Accountant OEC'
          : lang === 'ar'
          ? 'المؤسس والمدير العام · خبير محاسب معتمد · عضو هيئة الخبراء المحاسبين بالمغرب'
          : 'Fondateur & Dirigeant · Expert-Comptable Diplômé · Membre OEC Maroc',
      workingHours:
        lang === 'es'
          ? 'Lun - Vie: 08:30 - 18:30 | Sábado con cita previa'
          : lang === 'en'
          ? 'Mon - Fri: 08:30 AM - 06:30 PM | Saturday by appt.'
          : lang === 'ar'
          ? 'الاثنين - الجمعة: 08:30 - 18:30 | السبت بالموعد'
          : 'Lun - Ven : 08h30 - 18h30 | Samedi sur RDV',
      specialties:
        lang === 'es'
          ? ['Contabilidad digitalizada', 'Auditoría legal OEC', 'Fiscalidad DGI', 'Estrategia empresarial']
          : lang === 'en'
          ? ['Digital bookkeeping', 'Statutory audit OEC', 'Moroccan DGI tax', 'Management advisory']
          : lang === 'ar'
          ? ['المسك المحاسبي الرقمي', 'التدقيق القانوني OEC', 'الجبايات وإدارة الضرائب', 'الاستشارة الاستراتيجية']
          : ['Tenue comptable dématérialisée', 'Audit légal & CAC', 'Fiscalité DGI Maroc', 'Conseil en gestion & stratégie'],
      image: TANGIER_CITY_IMAGE,
      googleMapsUrl: 'https://maps.google.com/?q=Tanger+City+Center',
    },
  ];
};

// -------------------------------------------------------------
// 4. LOCALIZED ARTICLES AND EVENTS
// -------------------------------------------------------------
export interface LocalizedArticleItem {
  id: string;
  type: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  fullContent: string[];
  date: string;
  tags: string[];
}

export const getLocalizedArticles = (lang: SupportedLanguage): LocalizedArticleItem[] => {
  switch (lang) {
    case 'es':
      return [
        {
          id: 'transparence-salaires',
          type: 'Artículos',
          readTime: '6 min de lectura',
          date: 'Octubre 2026',
          image: '/assets/images/articles_abstract_blue_waves_1793223724475.jpg',
          title: 'Transparencia salarial: 6 pautas clave de RRHH para directivos',
          excerpt:
            'Nuevas directrices de transparencia en las tablas salariales: categorización, derecho a la información, contratación objetiva y cumplimiento legal.',
          tags: ['Derecho Laboral', 'RRHH', 'Salarios', 'Cumplimiento'],
          fullContent: [
            'La exigencia de transparencia salarial se impone progresivamente en las empresas en Marruecos. Los directores de recursos humanos deben adaptar sus políticas retributivas.',
            '1. Cartografiar todos los puestos y salarios efectivos para evitar discrepancias no justificadas.',
            '2. Establecer bandas salariales transparentes y objetivas desde la publicación de las ofertas de empleo.',
            '3. Garantizar el derecho a la información sobre niveles y criterios salariales para la plantilla.',
            '4. Alinear nóminas y complementos variables con las directrices de la inspección de trabajo.',
            '5. Disponer del respaldo de un despacho de expertos contables para asegurar las liquidaciones ante la CNSS DAMANCOM.',
          ],
        },
        {
          id: 'abandon-creance',
          type: 'Artículos',
          readTime: '3 min de lectura',
          date: 'Octubre 2026',
          image: '/assets/images/articles_business_conversation_1793223725277.jpg',
          title: 'Condonación de deudas intra-grupo y cláusula de mejor fortuna',
          excerpt:
            'Tratamiento fiscal de las condonaciones de deuda entre matrices y filiales: aspectos clave del Impuesto de Sociedades y jurisprudencia tributaria.',
          tags: ['Fiscalidad', 'DGI', 'Sociedades', 'Reestructuración'],
          fullContent: [
            'La condonación de deuda otorgada por una matriz o socio financiero es un mecanismo habitual de saneamiento de tesorería para filiales en dificultad.',
            'La jurisprudencia tributaria confirma que la cláusula de mejor fortuna no genera doble imposición si la deducción previa tuvo un tratamiento neutralizado.',
            'Los asesores fiscales de DERDAB COMPTA le asisten en la redacción de contratos intra-grupo conformes a las exigencias del Código General de Impuestos de Marruecos.',
          ],
        },
        {
          id: 'violences-urbaines',
          type: 'Artículos',
          readTime: '4 min de lectura',
          date: 'Septiembre 2026',
          image: '/assets/images/hero_aerial_road_nature_1793216694983.jpg',
          title: 'Interrupción de actividad comercial: medidas de apoyo y liquidez',
          excerpt:
            'Dispositivos de salvaguardia y cese temporal de actividad: ayudas financieras de emergencia, exoneraciones de cotizaciones y cobertura aseguradora.',
          tags: ['Actividad', 'Tesorería', 'Ayudas', 'Seguros'],
          fullContent: [
            'Ante siniestros, cierres forzosos o perturbaciones operativas, existen mecanismos de contingencia para preservar la tesorería de la empresa.',
            'La gestión del cese temporal permite aliviar el coste salarial garantizando las indemnizaciones a los trabajadores.',
            'Nuestros equipos tramitan los expedientes ante las administraciones y aseguradoras colaboradoras para proteger la rentabilidad empresarial.',
          ],
        },
        {
          id: 'webinar-loi-finances-2026',
          type: 'Eventos',
          readTime: 'Webinar 45 min',
          date: '12 Noviembre 2026',
          image: '/assets/images/comptabilite_concept_rydge_1793223600063.jpg',
          title: 'Webinar: Ley de Presupuestos de Marruecos y novedades fiscales',
          excerpt:
            'Sesión interactiva en directo dirigida por Maître Mourad Derdab. Análisis de deducciones industriales e inspecciones telemáticas de la DGI.',
          tags: ['Webinar', 'Ley de Presupuestos', 'Impuesto Sociedades', 'En Directo'],
          fullContent: [
            'Participe en nuestro seminario online exclusivo para directores generales y financieros.',
            'En el programa: reformas fiscales clave, simulación del impacto en su beneficio neto y turno de preguntas y respuestas en directo.',
          ],
        },
        {
          id: 'atelier-facturation-electronique',
          type: 'Eventos',
          readTime: 'Taller presencial',
          date: '26 Noviembre 2026',
          image: '/assets/images/tangier_business_district_1793215126124.jpg',
          title: 'Taller Práctico: Transición a la Facturación Electrónica DGI',
          excerpt:
            'Encuentro presencial en nuestras oficinas de Tanger City Center. Demostración del software DERDAB COMPTA Connect y formatos legales.',
          tags: ['Taller', 'Tanger City Center', 'Facturación DGI', 'Digitalización'],
          fullContent: [
            'Taller técnico en grupos reducidos en nuestra sede de Tanger City Center.',
            'Configuración paso a paso de su flujo de facturación electrónica y cumplimiento de las normativas de la DGI.',
          ],
        },
      ];

    case 'en':
      return [
        {
          id: 'transparence-salaires',
          type: 'Articles',
          readTime: '6 min read',
          date: 'October 2026',
          image: '/assets/images/articles_abstract_blue_waves_1793223724475.jpg',
          title: 'Pay Transparency: 6 HR Priorities for Business Executives',
          excerpt:
            'Emerging salary transparency regulations: pay grading, employee disclosure rights, recruitment compliance, and proactive social audit.',
          tags: ['Labor Law', 'HR', 'Salary Scales', 'Compliance'],
          fullContent: [
            'Pay transparency mandates are increasingly influencing Moroccan corporations. HR directors and business owners must adapt salary structuring and compensation reviews.',
            '1. Map all job descriptions and compensation packages to detect unjustified disparities.',
            '2. Publish objective and transparent salary ranges across all job openings.',
            '3. Institute clear internal disclosure mechanisms regarding salary progression.',
            '4. Align variable pay and bonuses with labor inspectorate compliance criteria.',
            '5. Partner with a chartered accounting firm to safeguard CNSS DAMANCOM social security filings.',
          ],
        },
        {
          id: 'abandon-creance',
          type: 'Articles',
          readTime: '3 min read',
          date: 'October 2026',
          image: '/assets/images/articles_business_conversation_1793223725277.jpg',
          title: 'Debt Forgiveness in Inter-Company Loans & Clawback Clauses',
          excerpt:
            'Tax implications of parent-subsidiary debt waivers: Moroccan corporate tax neutrality and formal documentation standards.',
          tags: ['Taxation', 'DGI', 'Corporate Tax', 'Restructuring'],
          fullContent: [
            'Debt waivers granted by parent companies or financial partners represent a classic cash-flow restructuring tool for struggling subsidiaries.',
            'Tax case law confirms that clawback clauses (return to better fortune) avoid double taxation when initial deductions adhered to tax neutrality rules.',
            'DERDAB COMPTA tax attorneys assist international groups in structuring compliant inter-company agreements under the Moroccan General Tax Code.',
          ],
        },
        {
          id: 'violences-urbaines',
          type: 'Articles',
          readTime: '4 min read',
          date: 'September 2026',
          image: '/assets/images/hero_aerial_road_nature_1793216694983.jpg',
          title: 'Business Disruption: Contingency Support & Cash-Flow Relief',
          excerpt:
            'Emergency financial measures, partial unemployment mechanisms, and insurance settlement recovery for commercial enterprises.',
          tags: ['Disruption', 'Cash Flow', 'Business Support', 'Insurance'],
          fullContent: [
            'In the event of involuntary closures or operational disruptions, statutory relief mechanisms can be activated immediately.',
            'Partial unemployment allowances mitigate payroll burdens while guaranteeing partial indemnities to retained workers.',
            'Our advisory teams assemble documentation for submission to state funds and insurance providers to safeguard business solvency.',
          ],
        },
        {
          id: 'webinar-loi-finances-2026',
          type: 'Events',
          readTime: '45 min Webinar',
          date: 'November 12, 2026',
          image: '/assets/images/comptabilite_concept_rydge_1793223600063.jpg',
          title: 'Executive Webinar: Moroccan Finance Act & Corporate Tax Shifts',
          excerpt:
            'Live interactive session led by Maître Mourad Derdab. In-depth review of green industrial incentives and automated DGI audit protocols.',
          tags: ['Webinar', 'Finance Act', 'Corporate Tax', 'Live Broadcast'],
          fullContent: [
            'Join our quarterly briefing tailored exclusively for CEOs, CFOs, and international managing directors.',
            'Agenda: analysis of corporate tax reforms, net margin impact simulations, and live interactive Q&A.',
          ],
        },
        {
          id: 'atelier-facturation-electronique',
          type: 'Events',
          readTime: 'In-Person Workshop',
          date: 'November 26, 2026',
          image: '/assets/images/tangier_business_district_1793215126124.jpg',
          title: 'Hands-on Workshop: Implementing DGI E-Invoicing Stress-Free',
          excerpt:
            'Face-to-face masterclass at our Tangier City Center offices. Live demonstration of DERDAB COMPTA Connect compliant XML/EDI formats.',
          tags: ['Workshop', 'Tangier City Center', 'E-Invoicing', 'Paperless'],
          fullContent: [
            'Technical masterclass in small executive groups at our Tangier City Center headquarters.',
            'Step-by-step guidance on calibrating your electronic invoicing workflow and securing flawless VAT compliance.',
          ],
        },
      ];

    case 'ar':
      return [
        {
          id: 'transparence-salaires',
          type: 'مقالات',
          readTime: '6 دقائق للقراءة',
          date: 'أكتوبر 2026',
          image: '/assets/images/articles_abstract_blue_waves_1793223724475.jpg',
          title: 'شفافية الأجور: 6 توجيهات أساسية في الموارد البشرية للمسيرين',
          excerpt:
            'المعايير الحديثة للشفافية في سلالم الرواتب: التصنيف المهني، الحق في المعلومة، التوظيف الموضوعي، والامتثال لمدونة الشغل.',
          tags: ['قانون الشغل', 'الموارد البشرية', 'سلم الأجور', 'الامتثال القانوني'],
          fullContent: [
            'تفرض متطلبات الشفافية في الأجور نفسها تدريجياً على الشركات في المغرب. يتعين على مديري الموارد البشرية والمسيرين تطوير سياسات الأجور وتوثيقها بدقة.',
            '1. إعداد خريطة شاملة لجميع المناصب والأجور الفعلية لتفادي أي فروقات غير مبررة.',
            '2. وضع مستويات وسلالم رواتب شفافة وموضوعية منذ نشر إعلانات التوظيف.',
            '3. إرساء آليات واضحة تتيح للأجراء معرفة معايير التدرج والترقية.',
            '4. مطابقة كشوفات الأجور مع توصيات وملاحظات مفتشية الشغل.',
            '5. الاستعانة بمكتب خبير محاسب لضمان سلامة تصريحات الضمان الاجتماعي DAMANCOM CNSS.',
          ],
        },
        {
          id: 'abandon-creance',
          type: 'مقالات',
          readTime: '3 دقائق للقراءة',
          date: 'أكتوبر 2026',
          image: '/assets/images/articles_business_conversation_1793223725277.jpg',
          title: 'التنازل عن الديون بين الشركات الأم والفروع والشرط الجزائي',
          excerpt:
            'المعالجة الجبائية للتنازل عن الديون بين الشركات: الضريبة على الشركات، وشرط العودة إلى يسر مالي دون فرض ضريبة مزدوجة.',
          tags: ['الجبايات', 'إدارة الضرائب', 'الشركات', 'إعادة الهيكلة'],
          fullContent: [
            'يعد التنازل عن الديون الممنوح من طرف الشركة الأم أو الشريك المالي وسيلة كلاسيكية لمعالجة عجز السيولة لدى الفروع.',
            'تؤكد المحاكم الجبائية أن شرط العودة إلى يسر مالي لا يؤدي إلى فرض ضريبة مزدوجة إذا تمت معالجة الخصم المسبق بشكل جبائي محايد.',
            'يساعدكم الخبراء الجبائيون بمكتب DERDAB COMPTA في صياغة الاتفاقيات بين الشركات وفق مقتضيات المدونة العامة للضرائب.',
          ],
        },
        {
          id: 'violences-urbaines',
          type: 'مقالات',
          readTime: '4 دقائق للقراءة',
          date: 'سبتمبر 2026',
          image: '/assets/images/hero_aerial_road_nature_1793216694983.jpg',
          title: 'توقف النشاط التجاري الطارئ: آليات الدعم المالي والإنقاذ',
          excerpt:
            'إجراءات الحماية في حالات تعليق النشاط أو الطوارئ: تدابير الدعم المالي الاستعجالي، وتخفيف أعباء الأجور والتعويضات.',
          tags: ['نشاط تجاري', 'السيولة', 'دعم المقاولات', 'التأمين'],
          fullContent: [
            'في حالات الطوارئ أو التوقف غير الإرادي عن ممارسة النشاط، يمكن تفعيل تدابير استثنائية لحماية استمرارية المقاولة.',
            'تتيح مساطر التوقف المؤقت تخفيف تكاليف الأجور مع ضمان مستحقات العمال المتضررين.',
            'تواكب فرقنا أرباب العمل لإعداد الملفات وتقديمها لصناديق الدعم وشركات التأمين المعنية.',
          ],
        },
        {
          id: 'webinar-loi-finances-2026',
          type: 'فعاليات',
          readTime: 'ندوة عن بعد 45 دقيقة',
          date: '12 نونبر 2026',
          image: '/assets/images/comptabilite_concept_rydge_1793223600063.jpg',
          title: 'ندوة رقمية: قانون المالية والمستجدات الجبائية للشركات',
          excerpt:
            'جلسة تفاعلية مباشرة يؤطرها الأستاذ مراد الدرداب، لتحليل التدابير التحفيزية للصناعة وإجراءات المراقبة الإلكترونية لإدارة الضرائب.',
          tags: ['ندوة رقمية', 'قانون المالية', 'الضريبة على الشركات', 'بث مباشر'],
          fullContent: [
            'انضموا إلى ندوتنا الفصلية المخصصة للمديرين العامين والمديرين الماليين بالمغرب.',
            'في برنامج الندوة: تفكيك الإصلاحات الجبائية، محاكاة التأثير على الأرباح الصافية، والإجابة المباشرة عن الأسئلة.',
          ],
        },
        {
          id: 'atelier-facturation-electronique',
          type: 'فعاليات',
          readTime: 'ورشة حضورية',
          date: '26 نونبر 2026',
          image: '/assets/images/tangier_business_district_1793215126124.jpg',
          title: 'ورشة تطبيقية: الانتقال إلى الفاتورة الإلكترونية بكل أمان',
          excerpt:
            'لقاء حضوري بمقرنا في طنجة سيتي سنتر. عرض تطبيقي لبوابة DERDAB COMPTA Connect والنماذج الرقمية المعتمدة رسمياً.',
          tags: ['ورشة عمل', 'طنجة سيتي سنتر', 'الفاتورة الإلكترونية', 'الرقمنة'],
          fullContent: [
            'ورشة تقنية بمجموعات محدودة بمقرنا في طنجة سيتي سنتر.',
            'مواكبة خطوة بخطوة لضبط منظومة الفوترة الإلكترونية وضمان الامتثال التام لمتطلبات إدارة الضرائب DGI.',
          ],
        },
      ];

    case 'fr':
    default:
      return [
        {
          id: 'transparence-salaires',
          type: 'Articles',
          readTime: '6 min de lecture',
          date: 'Octobre 2026',
          image: '/assets/images/articles_abstract_blue_waves_1793223724475.jpg',
          title: 'Transparence des salaires : 6 réflexes RH à anticiper',
          excerpt:
            "Projet de loi sur la transparence salariale : catégorisation, droit à l'information, index, recrutement... découvrez les 6 réflexes RH à anticiper pour vos équipes.",
          tags: ['Droit Social', 'RH', 'Grille des Salaires', 'Conformité'],
          fullContent: [
            "L'obligation de transparence salariale et de publication des grilles de rémunération s'impose progressivement aux entreprises. Face à ces nouvelles exigences, les dirigeants et directeurs des ressources humaines doivent faire évoluer leurs processus de fixation des salaires.",
            "1. Cartographier l'ensemble des postes et des rémunérations effectives pour identifier les écarts injustifiés.",
            '2. Structurer des fourchettes salariales transparentes et objectives dès la publication des offres d’embauche.',
            '3. Mettre en place un droit d’information clair permettant aux collaborateurs de situer leur niveau de salaire.',
            '4. Ajuster les fiches de paie et les variables avec un reporting social trimestriel conforme aux recommandations des inspecteurs du travail.',
            '5. Se faire accompagner par un cabinet d’expertise comptable pour sécuriser le volet paie et DAMANCOM CNSS.',
          ],
        },
        {
          id: 'abandon-creance',
          type: 'Articles',
          readTime: '2 min de lecture',
          date: 'Octobre 2026',
          image: '/assets/images/articles_business_conversation_1793223725277.jpg',
          title: 'Abandon de créance : retour à meilleure fortune et imposition',
          excerpt:
            "Le Conseil d'État précise que le retour à meilleure fortune n'est pas imposable si l'abandon de créance initial n'a pas été déduit du résultat fiscal de la société.",
          tags: ['Fiscalité', 'DGI', 'Contentieux', 'IS & Restructuration'],
          fullContent: [
            "L'abandon de créance consenti par une société mère ou un partenaire financier est un levier classique de redressement de trésorerie pour les filiales en difficulté.",
            'Dans une décision récente confirmée par les juridictions fiscales, il est rappelé le traitement des clauses de retour à meilleure fortune :',
            'Lorsque la filiale renoue avec les bénéfices et rembourse la créance initialement abandonnée, ce remboursement ne donne pas lieu à une double imposition si la déduction préalable avait fait l’objet d’un traitement fiscal neutralisé.',
            'Les experts fiscaux de DERDAB COMPTA vous aident à auditer vos conventions intra-groupe et à rédiger des clauses de retour à meilleure fortune conformes aux exigences du Code Général des Impôts.',
          ],
        },
        {
          id: 'violences-urbaines',
          type: 'Articles',
          readTime: '4 min de lecture',
          date: 'Septembre 2026',
          image: '/assets/images/hero_aerial_road_nature_1793216694983.jpg',
          title: 'Violences urbaines : activité partielle et zéro reste à charge',
          excerpt:
            "Bénéficiez du zéro reste à charge suite aux aléas d'activité : cas d'éligibilité, démarches administratives et mesures de soutien financier d'urgence pour les entreprises.",
          tags: ['Activité Partielle', 'Aide Dirigeant', 'Trésorerie', 'Assurance'],
          fullContent: [
            'En cas de sinistre, de fermeture involontaire ou de perturbations d’exploitation affectant l’activité économique, plusieurs dispositifs de sauvegarde sont activables.',
            'Le mécanisme d’activité partielle permet d’alléger immédiatement la charge salariale tout en garantissant un maintien d’indemnité pour les employés.',
            'Nos équipes assistent les directeurs d’établissement pour constituer les dossiers de prise en charge auprès des caisses et compagnies d’assurance partenaires, afin d’atteindre un objectif de zéro reste à charge pour l’entreprise.',
          ],
        },
        {
          id: 'webinar-loi-finances-2026',
          type: 'Événements',
          readTime: 'Webinar 45 min',
          date: '12 Novembre 2026',
          image: '/assets/images/comptabilite_concept_rydge_1793223600063.jpg',
          title: 'Webinar Dirigeants : Loi de Finances & Nouveaux seuils fiscaux',
          excerpt:
            "Session interactive en direct animée par nos experts-comptables certifiés OEC. Analyse des mesures d'incitation industrielle et des contrôles DGI.",
          tags: ['Webinar', 'Loi de Finances', 'IS & TVA', 'Direct Live'],
          fullContent: [
            'Rejoignez notre webconférence trimestrielle réservée aux dirigeants et directeurs financiers.',
            'Au programme : décryptage des réformes fiscales, simulation d’impact sur votre résultat net et session de questions/réponses en direct.',
          ],
        },
        {
          id: 'atelier-facturation-electronique',
          type: 'Événements',
          readTime: 'Atelier Tanger City',
          date: '26 Novembre 2026',
          image: '/assets/images/tangier_business_district_1793215126124.jpg',
          title: 'Atelier Pratique : Passer à la facturation électronique sans stress',
          excerpt:
            "Rencontre en présentiel à nos bureaux de Tanger City Center. Démonstration de l'outil DERDAB COMPTA Connect et validation des formats conformes.",
          tags: ['Atelier', 'Tanger City Center', 'Facturation', 'Dématérialisation'],
          fullContent: [
            'Atelier technique en petit comité (12 participants maximum) dans nos locaux de Tanger City Center.',
            'Accompagnement pas-à-pas pour paramétrer votre chaîne de facturation dématérialisée et sécuriser vos déclarations de TVA.',
          ],
        },
      ];
  }
};
