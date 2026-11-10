/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Source: Google Maps Platform Code Assist
import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { MapPin, Navigation, Phone, ExternalLink, ShieldCheck, Car, Train, Building2, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

// Coordinates for Tanger City Center - Tour Business (Boulevard Mohammed VI, Tanger)
const TANGER_COORDINATES = { lat: 35.7725, lng: -5.7954 };

export const GoogleMapComponent: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [infoOpen, setInfoOpen] = useState(true);

  const apiKey = (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY || '';

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${TANGER_COORDINATES.lat},${TANGER_COORDINATES.lng}`;
  const gmapsPlaceUrl = 'https://www.google.com/maps/search/?api=1&query=Tanger+City+Center+Boulevard+Mohammed+VI+Tanger';

  const mapTitle = t.contact.mapTitle || 'Localisation du Cabinet & Accès';
  const mapSub = t.contact.mapSub || 'Tanger City Center · Tour Business, 7ème étage · Boulevard Mohammed VI';
  const getDirectionsLabel = t.contact.mapDirections || "Obtenir l'itinéraire Google Maps";

  return (
    <div className="w-full mt-10 text-start" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header bar of the map section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#2dd4bf] uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>{mapTitle}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {mapSub}
          </p>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2dd4bf] hover:bg-[#20ba59] text-slate-950 font-bold text-xs shadow-md transition-all active:scale-95 shrink-0 self-start sm:self-auto"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>{getDirectionsLabel}</span>
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>
      </div>

      {/* Interactive Map Container */}
      <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950">
        {apiKey ? (
          <APIProvider apiKey={apiKey} language={language}>
            <Map
              defaultCenter={TANGER_COORDINATES}
              defaultZoom={16}
              mapId="DEMO_MAP_ID"
              gestureHandling="cooperative"
              disableDefaultUI={false}
              className="w-full h-full"
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
            >
              <AdvancedMarker
                position={TANGER_COORDINATES}
                onClick={() => setInfoOpen(!infoOpen)}
                title="DERDAB COMPTA - Tanger City Center"
              >
                <Pin
                  background="#0d9488"
                  borderColor="#ffffff"
                  glyphColor="#ffffff"
                  scale={1.25}
                />
              </AdvancedMarker>

              {infoOpen && (
                <InfoWindow
                  position={TANGER_COORDINATES}
                  onCloseClick={() => setInfoOpen(false)}
                >
                  <div className="p-2 max-w-[260px] text-slate-900 text-start" dir={isRTL ? 'rtl' : 'ltr'}>
                    <div className="flex items-center gap-1.5 mb-1 text-[11px] font-bold text-teal-800">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>DERDAB COMPTA · OEC</span>
                    </div>
                    <div className="font-extrabold text-xs text-slate-950 mb-1 leading-snug">
                      Tanger City Center – Tour Business
                    </div>
                    <p className="text-[11px] text-slate-600 mb-2 leading-tight">
                      Boulevard Mohammed VI, 7ème étage, 90000 Tanger
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mb-2">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>Lun – Ven : 08h30 – 18h30</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex gap-2">
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1 px-2 bg-teal-600 hover:bg-teal-700 text-white rounded text-[11px] font-bold text-center"
                      >
                        Itinéraire
                      </a>
                      <a
                        href="tel:+212539345000"
                        className="py-1 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-[11px] font-bold flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Appeler</span>
                      </a>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        ) : (
          /* Graceful interactive fallback embed with live Google Maps */
          <div className="relative w-full h-full">
            <iframe
              title="Google Maps - DERDAB COMPTA Tanger City Center"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${TANGER_COORDINATES.lat},${TANGER_COORDINATES.lng}&hl=${language}&z=16&output=embed`}
              className="w-full h-full filter contrast-[1.05]"
            />

            {/* Overlay badge with fast directions button */}
            <div className="absolute top-4 left-4 z-10 bg-slate-950/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-white/15 shadow-xl max-w-xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#2dd4bf] mb-0.5">
                <Building2 className="w-4 h-4" />
                <span>DERDAB COMPTA (Siège)</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Tanger City Center · Tour Business, 7ème étage
              </p>
              <div className="mt-2.5 flex gap-2">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#2dd4bf] text-slate-950 font-bold text-[11px] rounded-lg shadow-xs"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Itinéraire Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Transit & Accessibility Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-xs text-slate-300">
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
          <Train className="w-4 h-4 text-[#2dd4bf] shrink-0" />
          <span className="truncate">{t.contact.mapTransit || 'Gare TGV Tanger Ville à 200m'}</span>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
          <Car className="w-4 h-4 text-[#2dd4bf] shrink-0" />
          <span className="truncate">{t.contact.mapParking || 'Parking City Center'}</span>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
          <Building2 className="w-4 h-4 text-[#2dd4bf] shrink-0" />
          <span className="truncate">Tour Business · 7ème étage</span>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
          <Navigation className="w-4 h-4 text-[#2dd4bf] shrink-0" />
          <span className="truncate">{t.contact.mapAirport || 'Zone Franche TFZ (15 min)'}</span>
        </div>
      </div>
    </div>
  );
};
