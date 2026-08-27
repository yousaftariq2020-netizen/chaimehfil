import React, { useState } from 'react';
import { MapPin, Users, Moon, Music, Sparkles, Car, Check, Calendar, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { Language } from '../types';
import { cafeDetails } from '../data/chaiMehfilData';

interface SeatingPlanSectionProps {
  currentLang: Language;
  onBookZone: (zoneName: string) => void;
}

interface SeatingZone {
  id: string;
  name: string;
  nameUrdu: string;
  vibe: string;
  capacity: string;
  idealFor: string;
  image: string;
  features: string[];
  recommendedTime: string;
  badge: string;
}

export const SeatingPlanSection: React.FC<SeatingPlanSectionProps> = ({
  currentLang,
  onBookZone
}) => {
  const [activeZoneId, setActiveZoneId] = useState('stage-front');

  const zones: SeatingZone[] = [
    {
      id: 'stage-front',
      name: 'Qawwali Stage-Front Dastarkhwan',
      nameUrdu: 'صوفیانہ اسٹیج فرنٹ وی آئی پی نشستیں',
      vibe: 'Soulful & Live Performance Immersive',
      capacity: '2 to 12 Guests per Table',
      idealFor: 'Qawwali Lovers, Sufi Music Evenings, Special Guests',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      badge: 'Weekend Prime VIP',
      recommendedTime: '9:00 PM – 1:00 AM (Live Show)',
      features: [
        'Direct front-row view of live Ustad Qawwal troupe',
        'Crystal-clear acoustic soundstage acoustics',
        'Complimentary Gur (Jaggery) tea welcoming round',
        'Fast-track table service from kitchen'
      ]
    },
    {
      id: 'charpayi-terrace',
      name: 'Starlight Charpayi Open-Air Terrace',
      nameUrdu: 'کھلے آسمان تلے روایتی چارپائی بیٹھک',
      vibe: 'Desi Heritage, Breezy & Relaxed',
      capacity: '4 to 10 Guests per Charpayi',
      idealFor: 'Friends Late-Night Gossip, Chai Pe Charcha, Stargazers',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      badge: 'Most Popular',
      recommendedTime: '10:00 PM – 4:00 AM (Late Night)',
      features: [
        'Authentic handwoven Punjabi wooden charpayis with velvet takiyas',
        'Open sky view over Sharaqpur Road & Alrehman Garden',
        'Cozy coal heaters & warm fairy lighting in winter',
        'Hookah / flavored coal aromas in ambient open air'
      ]
    },
    {
      id: 'family-cabana',
      name: 'Family VIP Cabanas & Private Gazebos',
      nameUrdu: 'پردہ دار فیملی کیبانا اور گزیبو',
      vibe: 'Private, Intimate & Elegant',
      capacity: '6 to 20 Guests (Large Family Suites)',
      idealFor: 'Family Dinners, Birthdays, Anniversaries, Corporate Treats',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      badge: 'Family Exclusive',
      recommendedTime: '7:00 PM – Midnight',
      features: [
        'Curtained private enclosures for complete family privacy',
        'Dedicated server button for attentive dining service',
        'Custom birthday fairy light & balloon decor on request',
        'Spacious table layout for multi-dish Mega Feast'
      ]
    },
    {
      id: 'car-dinein',
      name: 'Car Dine-in & Drive-Thru Bay',
      nameUrdu: 'کار ڈائن اِن سروس (گاڑی میں آرڈر)',
      vibe: 'Quick, Effortless & Late-Night Chill',
      capacity: 'Any Vehicle / Car Capacity',
      idealFor: 'Late Night Long-Drive Chai Runs, Quick Takeaway',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
      badge: 'Drive-In Ready',
      recommendedTime: 'Open 5:00 PM – 4:00 AM',
      features: [
        'Window-mounted specialized tray service directly to your car',
        'Fast 5-minute Karak Chai & hot Paratha dispatch',
        'Spacious parking area outside opposite Alrehman Garden Gate 2',
        'Pay via cash or JazzCash / EasyPaisa QR'
      ]
    }
  ];

  const activeZone = zones.find((z) => z.id === activeZoneId) || zones[0];

  return (
    <section id="seating-zones" className="py-24 bg-[#0a0503] relative border-t border-amber-950/60 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold mb-3 shadow-lg">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Rooftop & Dining Zones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-50 mb-3 font-display">
            Choose Your Perfect Sitting Corner
          </h2>
          <p className="text-amber-200/75 text-xs sm:text-base">
            Whether you want the front-row spiritual rhythm of Qawwali, a starlit Punjabi charpayi, or a private family cabana, we have your spot reserved.
          </p>
        </div>

        {/* Zone Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {zones.map((zone) => {
            const isSelected = activeZoneId === zone.id;

            return (
              <button
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#22130b] to-[#160c07] border-amber-400 shadow-xl shadow-amber-950 scale-[1.02]'
                    : 'bg-[#120a06]/80 hover:bg-[#190d08] border-amber-900/40 hover:border-amber-700'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider block mb-1 ${
                    isSelected ? 'text-amber-400' : 'text-amber-500/70'
                  }`}>
                    {zone.badge}
                  </span>
                  <h4 className="text-sm font-bold text-amber-100 line-clamp-2">
                    {zone.name}
                  </h4>
                </div>
                <span className="font-urdu text-xs text-amber-300/80 mt-2 block">
                  {zone.nameUrdu}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Zone Showcase Card */}
        <div className="bg-gradient-to-br from-[#180d07] via-[#120804] to-[#080402] rounded-3xl border border-amber-500/35 p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Photo Banner */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-amber-900/50 h-72 sm:h-96 group">
              <img
                src={activeZone.image}
                alt={activeZone.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-amber-600/90 text-white text-xs font-bold shadow-lg">
                {activeZone.badge}
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-amber-500/30">
                <div className="flex items-center justify-between text-xs text-amber-200">
                  <span className="font-semibold">Capacity: {activeZone.capacity}</span>
                  <span className="text-amber-400 font-bold">{activeZone.recommendedTime}</span>
                </div>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block mb-1">
                  {activeZone.vibe}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-amber-100 font-display">
                  {activeZone.name}
                </h3>
                <p className="font-urdu text-xl text-amber-300 mt-1">
                  {activeZone.nameUrdu}
                </p>
                <p className="text-xs sm:text-sm text-amber-200/75 mt-2">
                  <strong className="text-amber-300">Ideal For:</strong> {activeZone.idealFor}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="space-y-2 pt-2">
                {activeZone.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-100">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Book This Zone Button */}
              <div className="pt-4 border-t border-amber-900/40 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onBookZone(activeZone.name)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black text-xs sm:text-sm shadow-xl shadow-amber-950 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Table in {activeZone.name}</span>
                </button>

                <a
                  href={`tel:${cafeDetails.phone1.replace(/\s/g, '')}`}
                  className="px-4 py-3.5 rounded-xl bg-[#221008] hover:bg-[#30160b] text-amber-200 text-xs font-bold border border-amber-800/40 transition-colors"
                >
                  Call Hotline: {cafeDetails.phone1}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
