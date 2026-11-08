/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { OfficeLocation, ServiceOffer, Testimonial, NewsArticle, FaqItem } from '../types.ts';

export const HERO_IMAGE = '/assets/images/hero_rydge_tangier_office_1793215125952.jpg';
export const HERO_AERIAL_IMAGE = '/assets/images/comptabilite_premium_hero_1793222750124.jpg';
export const HERO_ACCOUNTING_PREMIUM_IMAGE = '/assets/images/comptabilite_premium_hero_1793222750124.jpg';
export const TANGIER_CITY_IMAGE = '/assets/images/tangier_business_district_1793215126124.jpg';
export const TETOUAN_OFFICE_IMAGE = '/assets/images/tetouan_business_office_1793215126979.jpg';
export const ADVISORY_DISCUSSION_IMAGE = '/assets/images/accountant_advisory_discussion_1793215127369.jpg';

export const LOCATIONS: OfficeLocation[] = [
  {
    id: 'tanger-centre',
    city: 'Tanger',
    name: 'DERDAB COMPTA Tanger – City Center',
    tagline: 'Siège régional Grand Tanger & Pôle Conseil et Expertise',
    address: 'Tanger City Center, Boulevard Mohammed VI, Tour Business, 7ème étage',
    postalCode: '90000 Tanger',
    phone: '+212 (0)5 39 34 50 00',
    email: 'contact@derdabcompta.ma',
    leadExpert: 'Maître Mourad Derdab',
    leadTitle: 'Fondateur & Dirigeant · Expert-Comptable Diplômé · Membre OEC Maroc',
    workingHours: 'Lun - Ven : 08h30 - 18h30 | Samedi sur RDV',
    specialties: ['Tenue comptable dématérialisée', 'Audit légal & CAC', 'Fiscalité DGI Maroc', 'Conseil en gestion & stratégie'],
    image: TANGIER_CITY_IMAGE,
    googleMapsUrl: 'https://maps.google.com/?q=Tanger+City+Center'
  },
  {
    id: 'tanger-zone-franche',
    city: 'Grand Tanger',
    name: 'DERDAB COMPTA Tanger Automotive & Free Zone',
    tagline: 'Pôle Industrie, Équipementiers & Zones Franches (TFZ / TAC)',
    address: 'Tanger Free Zone (TFZ) & Tanger Automotive City (TAC), Avenue d\'Afrique',
    postalCode: '90013 Grand Tanger',
    phone: '+212 (0)5 39 39 20 10',
    email: 'zonefranche@derdabcompta.ma',
    leadExpert: 'Youssef El Amrani',
    leadTitle: 'Expert-Comptable Associé · Spécialiste Régimes d\'Exonération ZF & TMSA',
    workingHours: 'Lun - Ven : 08h00 - 18h00',
    specialties: ['Fiscalité des zones franches', 'Prix de transfert', 'Reporting IFRS / US GAAP', 'Comptabilité analytique industrielle'],
    image: HERO_IMAGE,
    googleMapsUrl: 'https://maps.google.com/?q=Tanger+Free+Zone'
  },
  {
    id: 'tetouan-centre',
    city: 'Tétouan',
    name: 'DERDAB COMPTA Tétouan – Wilaya Center',
    tagline: 'Cabinet de proximité pour les PME & Dirigeants de Tétouan',
    address: 'Avenue des FAR, Résidence Wilaya Center, Bloc A, 3ème étage',
    postalCode: '93000 Tétouan',
    phone: '+212 (0)5 39 96 15 20',
    email: 'tetouan@derdabcompta.ma',
    leadExpert: 'Sofia Berrada Tazi',
    leadTitle: 'Expert-Comptable & Commissaire aux Comptes OEC',
    workingHours: 'Lun - Ven : 08h30 - 18h00',
    specialties: ['Gestion comptable PME/TPE', 'Paie & Damancom CNSS', 'Création d\'entreprise CRI Tétouan', 'Optimisation fiscale locale'],
    image: TETOUAN_OFFICE_IMAGE,
    googleMapsUrl: 'https://maps.google.com/?q=Tetouan+Wilaya+Center'
  },
  {
    id: 'tanger-med-hub',
    city: 'Grand Tanger',
    name: 'DERDAB COMPTA Tanger Med Port & Logistics',
    tagline: 'Accompagnement Douane, Transit & Commerce International',
    address: 'Medhub Logistics Free Zone, Port Tanger Med 1, Bâtiment Tertiaire',
    postalCode: '94000 Ksar El Majaz / Tanger Med',
    phone: '+212 (0)5 39 58 70 80',
    email: 'tangermed@derdabcompta.ma',
    leadExpert: 'Mehdi Chraibi',
    leadTitle: 'Consultant Senior en Fiscalité Internationale & Douanes',
    workingHours: 'Lun - Ven : 08h00 - 18h00',
    specialties: ['TVA à l\'import/export', 'Régimes douaniers économiques', 'Logistique PortNet', 'Accompagnement multinationales'],
    image: ADVISORY_DISCUSSION_IMAGE,
    googleMapsUrl: 'https://maps.google.com/?q=Tanger+Med+Port'
  }
];

export const SERVICE_OFFERS: ServiceOffer[] = [
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
      'Rapprochement bancaire automatisé et tableaux de trésorerie en direct'
    ],
    deliverables: [
      'Grand livre, balance générale et journaux comptables légaux',
      'Liasse fiscale marocaine complète télédéclarée à la DGI',
      'États financiers de synthèse (Bilan, CPC, ESG, Tableau de financement)',
      'Accès permanent à votre espace client collaboratif'
    ],
    targetAudience: 'TPE, PME, start-ups, professions libérales et filiales dans le Grand Tanger et à Tétouan.',
    iconName: 'Calculator'
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
      'Calcul précis des acomptes provisionnels et régularisations annuelles'
    ],
    deliverables: [
      'Diagnostic fiscal complet et plan d\'optimisation personnalisé',
      'Dossier de justification des déductions et amortissements fiscaux',
      'Gestion des déclarations annuelles de rémunérations versées à des tiers',
      'Veille réglementaire exclusive transmise chaque mois à la direction'
    ],
    targetAudience: 'Entreprises assujetties à l\'IS, dirigeants soucieux d\'optimiser leur fiscalité pro et personnelle.',
    iconName: 'ShieldCheck'
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
      'Gestion des départs, soldes de tout compte et reçus pour solde conformes'
    ],
    deliverables: [
      'Fiches de paie électroniques individuelles et journal de paie mensuel',
      'Bordereaux de déclaration CNSS / AMO et attestation de déclaration annuelle',
      'État 9421 (déclaration annuelle des salaires pour la DGI)',
      'Assistance juridique lors des ruptures de contrat ou contentieux'
    ],
    targetAudience: 'Entreprises employant de 1 à plusieurs centaines de collaborateurs à Tanger, Tétouan et Tanger Med.',
    iconName: 'Users'
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
      'Obtention de l\'Identifiant Fiscal (IF), Taxe Professionnelle (TP), RC et ICE'
    ],
    deliverables: [
      'Certificat Négatif OMPIC officiel',
      'Statuts enregistrés et certifiés conformes',
      'Extrait du Registre de Commerce (Modèle J)',
      'Attestation d\'inscription à la Taxe Professionnelle et Identifiant Commun de l\'Entreprise (ICE)'
    ],
    targetAudience: 'Entrepreneurs marocains, MRE et investisseurs internationaux créant une structure dans le Nord.',
    iconName: 'Building2'
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
      'Rapports d\'audit clairs, pragmatiques et orientés création de valeur'
    ],
    deliverables: [
      'Rapport général du Commissaire aux Comptes sur les états de synthèse',
      'Rapport spécial sur les conventions réglementées',
      'Lettre de recommandations managériales sur le contrôle interne',
      'Attestations financières spécifiques pour appels d\'offres et partenaires'
    ],
    targetAudience: 'Sociétés Anonymes (SA), SARL dépassant les seuils légaux, filiales de groupes et institutions.',
    iconName: 'FileCheck'
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
      'Conformité stricte avec la réglementation de l\'Office des Changes'
    ],
    deliverables: [
      'Business plan et dossier de candidature pour obtention de l\'agrément en Zone Franche',
      'Schéma d\'implantation fiscale et douanière optimisé',
      'Assistance permanente lors des déclarations périodiques TMSA / DGI',
      'Rapports financiers bilingues (Français / Anglais / Espagnol)'
    ],
    targetAudience: 'Multinationales industrielles, équipementiers automobiles, transitaires et investisseurs étrangers.',
    iconName: 'Globe'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Tariq Mansouri',
    role: 'Directeur Général',
    company: 'Atlas Automotive Components',
    location: 'Tanger Automotive City (TAC)',
    quote: 'Le cabinet DERDAB COMPTA gère notre comptabilité industrielle et notre reporting trimestriel depuis 4 ans. Leur parfaite maîtrise des statuts de la Zone Franche et des télédéclarations DGI nous a évité toute mauvaise surprise fiscale. Une réactivité exemplaire.',
    metrics: '+18% d\'économies fiscales légales constatées',
    sector: 'Industrie Automobile'
  },
  {
    id: '2',
    clientName: 'Nadia El Fassi',
    role: 'Cofondatrice & CEO',
    company: 'North Logistics Express',
    location: 'Tanger Med Hub Logistique',
    quote: 'Pour notre entreprise de fret et logistique, nous avions besoin d\'un cabinet moderne, capable d\'échanger en 100% digital. Avec l\'espace client DERDAB COMPTA Connect et leur équipe à Tanger City Center, tout se fait en quelques clics.',
    metrics: 'Comptabilité 100% sans papier en 48h',
    sector: 'Logistique & Transit'
  },
  {
    id: '3',
    clientName: 'Amine Bennouna',
    role: 'Gérant Propriétaire',
    company: 'Méditerranée Distribution SARL',
    location: 'Tétouan Centre-Ville',
    quote: 'Trouver un expert-comptable de haut niveau à Tétouan était notre priorité. Le bureau DERDAB COMPTA de l\'Avenue des FAR nous apporte à la fois la proximité humaine d\'un cabinet local et la puissance méthodologique d\'un cabinet de référence.',
    metrics: 'Gestion de 45 bulletins de paie sans retard',
    sector: 'Commerce & Distribution'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'loi-de-finances-2026',
    category: 'Fiscalité Maroc',
    title: 'Loi de Finances Maroc : Ce qui change pour les PME à Tanger et Tétouan',
    date: '15 Janvier 2026',
    readTime: '5 min de lecture',
    excerpt: 'Analyse détaillée des nouveaux barèmes de l\'Impôt sur les Sociétés (IS), de l\'alignement progressif des taux et des nouvelles exigences de facturation électronique.',
    content: [
      'La nouvelle Loi de Finances poursuit la trajectoire de convergence du taux de l\'IS vers un palier harmonisé. Pour les entreprises générant un bénéfice net inférieur à 100 millions de dirhams, le taux se stabilise, tandis que les mesures incitatives pour les investissements verts et industriels dans la région Tanger-Tétouan-Al Hoceïma sont renforcées.',
      'Par ailleurs, l\'administration fiscale marocaine (DGI) accélère le déploiement du contrôle automatisé des liasses fiscales et le croisement des flux bancaires avec les déclarations de TVA.',
      'Notre recommandation : auditer dès ce trimestre vos charges déductibles et planifier vos amortissements dégressifs pour préserver votre trésorerie d\'exploitation.'
    ],
    keywords: ['Loi de Finances Maroc', 'Fiscalité Tanger', 'IS Maroc PME', 'DGI déclarations']
  },
  {
    id: 'creation-sarl-tanger-48h',
    category: 'Création d\'Entreprise',
    title: 'Créer sa société SARL à Tanger via le CRI : guide complet des étapes',
    date: '02 Février 2026',
    readTime: '6 min de lecture',
    excerpt: 'De la réservation du nom commercial à l\'OMPIC jusqu\'à l\'obtention du modèle J au tribunal de commerce, découvrez la feuille de route pas-à-pas.',
    content: [
      'Grâce à la plateforme digitale du Centre Régional d\'Investissement (CRI) de Tanger-Tétouan-Al Hoceïma, la création d\'une SARL peut aujourd\'hui s\'opérer de façon quasi instantanée.',
      'Les 5 étapes clés comprennent : 1. La délivrance du Certificat Négatif en ligne, 2. La rédaction des statuts sous seing privé, 3. La domiciliation ou le contrat de bail commercial, 4. L\'enregistrement et le dépôt au Greffe, 5. La publication légale au Bulletin Officiel et journal d\'annonces légales.',
      'Le cabinet DERDAB COMPTA prend en charge l\'intégralité du circuit administratif afin de livrer votre dossier prêt à facturer en 48 heures ouvrées.'
    ],
    keywords: ['Création SARL Tanger', 'CRI Tanger', 'OMPIC Certificat Négatif', 'Cabinet comptable Grand Tanger']
  },
  {
    id: 'avantages-zone-franche-tanger',
    category: 'Grand Tanger & Industrie',
    title: 'Implantation en Zone Franche de Tanger (TFZ / TAC) : Avantages fiscaux & douaniers',
    date: '20 Février 2026',
    readTime: '7 min de lecture',
    excerpt: 'Pourquoi Tanger attire les géants industriels mondiaux ? Zoom sur les exonérations d\'IS pendant 5 ans, l\'exemption de TVA et la libre convertibilité.',
    content: [
      'Les Zones d\'Accélération Industrielle (ZAI) du Grand Tanger, incluant TFZ et Tanger Automotive City, offrent un cadre légal exceptionnel prévu par la loi 19-94.',
      'Les entreprises exportatrices bénéficient notamment de : une exonération totale de l\'IS pendant les 5 premiers exercices consécutifs, un taux réduit avantageux au-delà, l\'exonération intégrale de la TVA sur les achats locaux et importés, ainsi que la franchise des droits de douane.',
      'Nos experts basés à Tanger accompagnent les investisseurs pour l\'obtention de l\'agrément auprès de TMSA et la mise en conformité de leur comptabilité analytique.'
    ],
    keywords: ['Zone Franche Tanger', 'Tanger Automotive City', 'Exonération fiscale Maroc', 'Investir à Tanger']
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Tarifs',
    question: 'Quels sont les tarifs d\'un cabinet comptable à Tanger ou à Tétouan ?',
    answer: 'Les honoraires d\'un expert-comptable au Maroc dépendent de la forme juridique (SARL, SA, personne physique), du volume mensuel de pièces comptables, du nombre de salariés (paies) et de la complexité fiscale. Chez DERDAB COMPTA, nos forfaits débutent à partir de 950 MAD HT/mois pour les TPE naissantes, et sont modulés en toute transparence grâce à notre simulateur en ligne, sans frais cachés.'
  },
  {
    category: 'Comptabilité',
    question: 'Comment transférer la comptabilité de mon entreprise vers le cabinet DERDAB COMPTA ?',
    answer: 'Le changement d\'expert-comptable est une procédure parfaitement encadrée par le Code de Déontologie de l\'Ordre des Experts-Comptables du Maroc. Il vous suffit de nous mandater : nous rédigeons le courrier de confraternité à votre ancien confrère, récupérons l\'historique des balances et grands livres, et prenons le relais immédiatement sans aucune interruption de vos déclarations DGI et CNSS.'
  },
  {
    category: 'Fiscalité Tanger',
    question: 'Quelles sont les obligations fiscales périodiques d\'une SARL au Maroc ?',
    answer: 'Une SARL au Maroc doit satisfaire à plusieurs échéances strictes : la déclaration de TVA (mensuelle ou trimestrielle selon le CA via SIMPL-TVA), le paiement des 4 acomptes provisionnels d\'IS (31 mars, 30 juin, 30 septembre, 31 décembre), la déclaration annuelle du résultat fiscal (Bilan & Liasse avant le 31 mars), l\'état 9421 pour les salaires, et les déclarations mensuelles de cotisations CNSS / AMO via DAMANCOM.'
  },
  {
    category: 'Création d\'entreprise',
    question: 'Accompagnez-vous les investisseurs étrangers et Marocains du Monde (MRE) ?',
    answer: 'Absolument. Une part majeure de nos clients à Tanger, Tétouan et Tanger Med est constituée d\'entrepreneurs étrangers (Européens, Américains, Moyen-Orient) et de MRE. Nous gérons pour eux l\'ensemble du parcours : domiciliation, compte bancaire en dirhams convertibles, déclarations Office des Changes pour garantir le rapatriement des dividendes, et reporting bilingue.'
  },
  {
    category: 'Fiscalité Tanger',
    question: 'Pourquoi privilégier un cabinet comptable physiquement implanté dans le Grand Tanger et à Tétouan ?',
    answer: 'La région Tanger-Tétouan-Al Hoceïma possède ses propres spécificités : le dynamisme des zones franches TMSA, les facilités du CRI régional, les services régionaux de la DGI de Tanger et Tétouan, et le Tribunal de Commerce local. Notre implantation directe avec nos bureaux vous garantit des interlocuteurs joignables, sous la direction de Maître Mourad Derdab, capables de se déplacer en 30 minutes dans vos locaux ou de vous recevoir en rendez-vous physique.'
  }
];
