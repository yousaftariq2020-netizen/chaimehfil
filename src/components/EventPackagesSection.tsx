import React, { useState } from 'react';
import { Sparkles, Gift, Users, Cake, Music, Camera, Check, Phone, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { cafeDetails } from '../data/chaiMehfilData';

interface EventPackagesSectionProps {
  currentLang: Language;
}

interface EventPackage {
  id: string;
  name: string;
  nameUrdu: string;
  recommendedGuests: string;
  price: number;
  highlight: string;
  badge: string;
  image: string;
  includes: string[];
  foodMenu: string[];
}

export const EventPackagesSection: React.FC<EventPackagesSectionProps> = ({ currentLang }) => {
  const [selectedPkgId, setSelectedPkgId] = useState('royal-birthday');

  const packages: EventPackage[] = [
    {
      id: 'dosti-bash',
      name: 'Yaari & Dosti Party Feast',
      nameUrdu: 'یاری و دوستی پارٹی پیکیج',
      recommendedGuests: '4 to 6 Friends',
      price: 4999,
      highlight: 'Perfect for casual birthdays & get-togethers',
      badge: 'Best Value',
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
      includes: [
        'Dedicated Rooftop Charpayi or Terrace Table',
        'Ambient Fairy Light & Lantern Table Setting',
        'Custom Birthday Music Playback Request'
      ],
      foodMenu: [
        '1x Washi Mega Deal (Large Pizza + 2 Zinger Burgers + Paratha)',
        '1x Loaded Gourmet Cheese Fries Platter',
        '6x Karak Matka Doodh Patti Chais',
        'Complimentary Mint Margaritas'
      ]
    },
    {
      id: 'royal-birthday',
      name: 'Rooftop Royal Birthday Suite',
      nameUrdu: 'رائل برتھ ڈے و فیملی جشن پیکیج',
      recommendedGuests: '10 to 14 Guests',
      price: 11999,
      highlight: 'Full VIP Cabana with Cake Cutting Decor',
      badge: 'Most Popular',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
      includes: [
        'Curtained VIP Family Cabana Exclusive Setup',
        'Golden Birthday Ring & Balloon Arch Backdrop',
        'Wooden Cake Cutting Stand & Ambient Candles',
        'Live Qawwali Front-Row Reserved Seating',
        'Dedicated Royal Server for entire evening'
      ],
      foodMenu: [
        '2x Signature 13" Large Fajita & Tikka Pizzas',
        '4x Crunchy Zinger Burgers with Herbal Mayo Dip',
        '4x Stuffed Chicken Cheese Lachha Parathas',
        '2x Mega Loaded Cheese Fries with Jalapeños',
        '12x Matka Doodh Patti & Elaichi Chais',
        '12x Traditional Warm Gulab Jamuns'
      ]
    },
    {
      id: 'grand-mehfil',
      name: 'Grand Corporate & Family Mehfil',
      nameUrdu: 'گرینڈ کارپوریٹ و فیملی پیکیج',
      recommendedGuests: '20 to 30+ Guests',
      price: 24999,
      highlight: 'Entire Rooftop Wing Exclusive Reservation',
      badge: 'VIP Corporate',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
      includes: [
        'Private Rooftop Section Exclusively Reserved for 4 Hours',
        'Grand Stage Announcement & Artist Tribute during Qawwali',
        'Full Thematic Lighting & Sound System Setup',
        'Custom Banner with Company/Family Name'
      ],
      foodMenu: [
        '5x Large Specialty Stone-Baked Pizzas',
        '10x Zinger Burger Combos',
        '8x Stuffed Parathas (Chicken Cheese / Aloo Achari)',
        '4x Mega Platter Loaded Fries & Shawarmas',
        'Unlimited Flow of Karak Doodh Patti & Green Tea',
        'Special Dessert Platter for all guests'
      ]
    }
  ];

  const activePackage = packages.find((p) => p.id === selectedPkgId) || packages[1];

  const handleBookPackageWhatsApp = () => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Chai Mehfil! I want to book the *${activePackage.name}* (Rs. ${activePackage.price.toLocaleString()}) for our event.\n\nExpected Guests: ${activePackage.recommendedGuests}\nPlease confirm slot availability.`
    );
    window.open(`https://wa.me/${cafeDetails.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-[#080402] via-[#100804] to-[#080402] relative border-t border-amber-950/60 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold mb-3 shadow-lg">
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span>Celebrations & Private Rooftop Events</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-50 mb-3 font-display">
            Plan Your Mehfil-e-Jashn
          </h2>
          <p className="text-amber-200/75 text-xs sm:text-base">
            Birthdays, anniversaries, corporate dinners, or friend reunions — celebrate under the stars with customized food packages and fairy light setups.
          </p>
        </div>

        {/* Package Selector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg) => {
            const isSelected = pkg.id === selectedPkgId;

            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPkgId(pkg.id)}
                className={`rounded-3xl p-6 transition-all border flex flex-col justify-between cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#24130b] to-[#140a05] border-amber-400 shadow-2xl shadow-amber-950 scale-[1.02]'
                    : 'bg-[#110905]/90 hover:bg-[#180d07] border-amber-900/40 hover:border-amber-700'
                }`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                    isSelected
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'bg-amber-950/90 text-amber-300 border border-amber-800/40'
                  }`}>
                    {pkg.badge}
                  </span>
                  <span className="text-xs text-amber-300/80 font-bold flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {pkg.recommendedGuests}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-amber-100 font-display group-hover:text-amber-300 transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="font-urdu text-sm text-amber-300/80 mt-0.5 mb-2">
                    {pkg.nameUrdu}
                  </p>
                  <p className="text-xs text-amber-200/70 mb-4">
                    {pkg.highlight}
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-900/40 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-300/60 block">All-Inclusive</span>
                    <span className="text-2xl font-black text-amber-400 font-display">
                      Rs. {pkg.price.toLocaleString()}
                    </span>
                  </div>
                  <span className={`text-xs font-bold ${isSelected ? 'text-amber-300' : 'text-amber-500/70'}`}>
                    {isSelected ? '✓ Selected' : 'Select →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Package Detailed Breakdown */}
        <div className="bg-gradient-to-br from-[#1b0e08] via-[#140b06] to-[#0b0503] rounded-3xl border border-amber-500/35 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Decor and Menu Details */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Package Inclusions & Detailed Menu</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-amber-100 font-display">
                  {activePackage.name} — Full Royal Experience
                </h3>
                <p className="font-urdu text-lg text-amber-300 mt-1">
                  {activePackage.nameUrdu}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Event Setup Perks */}
                <div className="bg-[#0e0704] p-4 rounded-2xl border border-amber-900/40 space-y-2.5">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Cake className="w-4 h-4 text-amber-400" />
                    Ambiance & VIP Setup
                  </h4>
                  <ul className="space-y-2 text-xs text-amber-100/90">
                    {activePackage.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Food & Beverage Menu */}
                <div className="bg-[#0e0704] p-4 rounded-2xl border border-amber-900/40 space-y-2.5">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Grand Food Dastarkhwan
                  </h4>
                  <ul className="space-y-2 text-xs text-amber-100/90">
                    {activePackage.foodMenu.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleBookPackageWhatsApp}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-emerald-950 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Gift className="w-4 h-4" />
                  <span>Book This Package on WhatsApp</span>
                </button>

                <a
                  href={`tel:${cafeDetails.phone1.replace(/\s/g, '')}`}
                  className="px-5 py-3.5 rounded-xl bg-[#25130a] hover:bg-[#32180c] text-amber-200 font-bold text-xs sm:text-sm border border-amber-800/40 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Hotline to Customise</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl h-80 group">
                <img
                  src={activePackage.image}
                  alt={activePackage.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-amber-500/30 text-center">
                  <span className="text-[10px] text-amber-300/80 uppercase font-bold tracking-wider">Total Package Price</span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-display">
                    Rs. {activePackage.price.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium block mt-0.5">
                    Includes Tax, Setup & Free Table Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
