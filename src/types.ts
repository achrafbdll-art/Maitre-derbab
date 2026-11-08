/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface OfficeLocation {
  id: string;
  city: string;
  name: string;
  tagline: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  leadExpert: string;
  leadTitle: string;
  workingHours: string;
  specialties: string[];
  image: string;
  googleMapsUrl: string;
}

export interface ServiceOffer {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  deliverables: string[];
  targetAudience: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  metrics: string;
  sector: string;
}

export interface NewsArticle {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keywords: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface CalculatorState {
  companyType: 'SARL' | 'SARL-AU' | 'SA' | 'Succursale' | 'Auto-Entrepreneur' | 'Personne Physique';
  locationZone: 'tanger_ville' | 'tetouan_ville' | 'zone_franche_tfz_tac' | 'tanger_med';
  annualRevenue: number; // in MAD
  employeesCount: number;
  monthlyInvoices: number;
  needDomiciliation: boolean;
  needLegalSecretariat: boolean; // AGO, Greffe tribunal de commerce
  needMonthlyReporting: boolean;
}
