/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Car, Anchor, ShoppingBag, Laptop, HardHat, Globe2, ArrowRight } from 'lucide-react';

interface SectorsSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onOpenBooking }) => {
  const sectors = [
    {
      icon: <Car className="w-6 h-6 text-blue-600" />,
      title: 'Automobile & Industrie (TAC / TFZ)',
      description:
        'Sous-traitants rang 1 & 2, équipementiers câbleurs et usines de Tanger Automotive City. Maîtrise des audits IFRS, comptabilité analytique de production et prix de transfert.',
      badge: 'Zone Franche Export',
    },
    {
      icon: <Anchor className="w-6 h-6 text-cyan-600" />,
      title: 'Logistique, Fret & Port Tanger Med',
      description:
        'Transitaires, transporteurs internationaux et opérateurs de la zone logistique Medhub. Gestion des régimes douaniers économiques, TVA à l’import/export et flux multidevises.',
      badge: 'Hub International',
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-emerald-600" />,
      title: 'Commerce, Franchises & Distribution',
      description:
        'Réseaux de magasins, grossistes et commerces de Tanger et Tétouan. Rapprochements bancaires quotidiens, gestion des caisses enregistreuses et optimisation des marges commerciales.',
      badge: 'PME & Commerce',
    },
    {
      icon: <Laptop className="w-6 h-6 text-indigo-600" />,
      title: 'Digital, Start-ups, IT & Services',
      description:
        'Agences tech, plateformes SaaS, centres d’appels et consultants. Domiciliation prestigieuse, crédit d’impôt R&D et gestion comptable 100% sans papier.',
      badge: 'Tech & Conseil',
    },
    {
      icon: <HardHat className="w-6 h-6 text-amber-600" />,
      title: 'BTP, Promotion Immobilière & Construction',
      description:
        'Promoteurs, bureaux d’études et entreprises de construction. Comptabilisation des chantiers à l’avancement ou à l’achèvement, retenues de garantie et TVA immobilière.',
      badge: 'Chantiers & BTP',
    },
    {
      icon: <Globe2 className="w-6 h-6 text-purple-600" />,
      title: 'Investisseurs Étrangers & Marocains du Monde (MRE)',
      description:
        'Création de filiales marocaines, comptes en dirhams convertibles, formalités Office des Changes pour le rapatriement des dividendes et conseil fiscal bilingue.',
      badge: 'International / MRE',
    },
  ];

  return (
    <section id="secteurs" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
              Expertise Sectorielle Régionale
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Une maîtrise pointue des écosystèmes <br className="hidden sm:inline" />
              <span className="text-[#009688]">de Tanger, Tétouan et du Grand Tanger</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Chaque métier a ses règles fiscales, ses marges moyennes et ses obligations déclaratives spécifiques.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('Conseil sectoriel sur mesure')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 self-start md:self-end"
          >
            <span>Échanger sur votre secteur</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </button>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sectors.map((sec, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-teal-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {sec.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-teal-50 text-teal-800 border border-teal-200/60">
                    {sec.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {sec.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sec.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/60">
                <button
                  onClick={() => onOpenBooking(sec.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 group-hover:translate-x-1 transition-all"
                >
                  <span>Demander un devis pour ce secteur</span>
                  <span>›</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
