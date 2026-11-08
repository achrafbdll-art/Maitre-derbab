/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

interface QuoteSimulatorSectionProps {
  onOpenBooking: (prefillData: {
    service: string;
    quoteSummary: string;
    estimatedFee: number;
  }) => void;
}

export const QuoteSimulatorSection: React.FC<QuoteSimulatorSectionProps> = ({
  onOpenBooking,
}) => {
  const [legalForm, setLegalForm] = useState<'sarl' | 'sa' | 'personne' | 'auto'>('sarl');
  const [turnover, setTurnover] = useState<'tier1' | 'tier2' | 'tier3'>('tier1');
  const [invoicesCount, setInvoicesCount] = useState<number>(30);
  const [employeesCount, setEmployeesCount] = useState<number>(2);
  const [needDashboard, setNeedDashboard] = useState<boolean>(true);
  const [needTaxAuditAssistance, setNeedTaxAuditAssistance] = useState<boolean>(false);

  // Fee calculation logic in MAD HT/month
  const calculateFee = (): number => {
    let base = 950; // base price MAD

    // Legal form factor
    if (legalForm === 'sa') base += 1200;
    else if (legalForm === 'sarl') base += 250;
    else if (legalForm === 'auto') base = 450;

    // Turnover factor
    if (turnover === 'tier2') base += 350;
    else if (turnover === 'tier3') base += 850;

    // Invoices volume
    if (invoicesCount > 50) {
      base += Math.floor((invoicesCount - 50) / 20) * 120;
    }

    // Payroll (DAMANCOM bulletins)
    base += employeesCount * 65;

    // Options
    if (needDashboard) base += 200;
    if (needTaxAuditAssistance) base += 250;

    return Math.round(base);
  };

  const estimatedTotal = calculateFee();

  const handleValidateQuote = () => {
    const summary = `${legalForm.toUpperCase()} · ~${invoicesCount} factures/mois · ${employeesCount} salariés · CA: ${
      turnover === 'tier1' ? '< 1M MAD' : turnover === 'tier2' ? '1-5M MAD' : '> 5M MAD'
    }`;
    onOpenBooking({
      service: 'Devis Comptabilité & Tenue en ligne',
      quoteSummary: summary,
      estimatedFee: estimatedTotal,
    });
  };

  return (
    <section id="devis" className="py-20 sm:py-28 bg-[#f1f8f7] border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparence Tarifaire 100% Maroc</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Simulateur d’Honoraires Comptables
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Estimez instantanément le budget mensuel de tenue comptable, fiscale et sociale pour votre société à Tanger ou Tétouan.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Controls: Left 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Forme juridique */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                1. Forme Juridique de l'Entreprise
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'sarl', label: 'SARL / SARLAU' },
                  { id: 'sa', label: 'SA / SAS' },
                  { id: 'personne', label: 'Personne Physique' },
                  { id: 'auto', label: 'Auto-Entrepreneur' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLegalForm(item.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                      legalForm === item.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Chiffre d'affaires annuel */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                2. Chiffre d'Affaires Annuel Estimé
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'tier1', label: '< 1 000 000 MAD' },
                  { id: 'tier2', label: '1M – 5M MAD' },
                  { id: 'tier3', label: '> 5 000 000 MAD' },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTurnover(t.id as any)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                      turnover === t.id
                        ? 'bg-teal-700 text-white border-teal-700 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Volume de factures par mois */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  3. Volume Moyen de Pièces / Mois (Achats + Ventes)
                </label>
                <span className="text-sm font-extrabold text-teal-800">
                  ~{invoicesCount} pièces
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={invoicesCount}
                onChange={(e) => setInvoicesCount(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>10 (Démarrage)</span>
                <span>100 pièces</span>
                <span>250+ pièces</span>
              </div>
            </div>

            {/* 4. Nombre de salariés (Paies DAMANCOM) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  4. Nombre de Salariés (Bulletins & CNSS DAMANCOM)
                </label>
                <span className="text-sm font-extrabold text-teal-800">
                  {employeesCount} {employeesCount > 1 ? 'salariés' : 'salarié'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                step="1"
                value={employeesCount}
                onChange={(e) => setEmployeesCount(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>0 (Gérant seul)</span>
                <span>15 salariés</span>
                <span>40+ salariés</span>
              </div>
            </div>

            {/* 5. Options complémentaires */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needDashboard}
                  onChange={(e) => setNeedDashboard(e.target.checked)}
                  className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
                />
                <span className="text-xs font-medium text-slate-700">
                  Tableau de bord de gestion & suivi de trésorerie mensuel (+200 MAD)
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needTaxAuditAssistance}
                  onChange={(e) => setNeedTaxAuditAssistance(e.target.checked)}
                  className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
                />
                <span className="text-xs font-medium text-slate-700">
                  Assistance sérénité en cas de contrôle fiscal DGI (+250 MAD)
                </span>
              </label>
            </div>

          </div>

          {/* Result Card: Right 5 cols */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#06121f] to-[#0b243b] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2dd4bf]">
                  Estimation Forfaitaire
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-teal-400/20 text-teal-300 font-semibold">
                  Sans engagement
                </span>
              </div>

              <div className="text-center py-2">
                <div className="text-xs text-slate-400 uppercase font-semibold">
                  Honoraires Mensuels Estimés
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white mt-1 mb-1 tracking-tight">
                  {estimatedTotal.toLocaleString('fr-FR')}{' '}
                  <span className="text-xl sm:text-2xl font-bold text-[#2dd4bf]">MAD</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Hors Taxes / Mois (déductible fiscalement)
                </div>
              </div>

              {/* Inclusions checklist */}
              <div className="space-y-2 mt-6 pt-6 border-t border-white/10 text-xs text-slate-200">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#2dd4bf] mb-2">
                  Inclus dans ce forfait :
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tenue de comptabilité certifiée OEC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Télédéclarations SIMPL-IS & SIMPL-TVA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bilan annuel & Liasse fiscale DGI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Accès illimité à l'Espace Client Connect</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Conseil de gestion avec Maître Derdab</span>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleValidateQuote}
                className="w-full py-3.5 px-6 bg-[#c5f2f0] hover:bg-[#b0eae7] text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Obtenir ce devis officiel & RDV</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[10px] text-slate-400 mt-2">
                Devis personnalisé gratuit sous 24h par email ou WhatsApp.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
