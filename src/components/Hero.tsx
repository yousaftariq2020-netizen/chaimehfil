import React from 'react';
import { Coffee, Music, Sparkles, Moon, Clock, MapPin, MessageCircle, ChevronDown, Phone, Flame, Star, ShieldCheck, Truck, Users, Gift } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';
import { cafeDetails } from '../data/chaiMehfilData';

interface HeroProps {
  currentLang: Language;
  onOpenReserve: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenReserve,
  onOpenWhatsApp
}) => {
  const t = translations[currentLang];

  return (
    <section id="home" className="relative min-h-[94vh] flex items-center justify-center pt-8 sm:pt-14 pb-16 overflow-hidden bg-[#090503]">
      {/* Cinematic Background with Atmospheric Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Chai Mehfil Luxury Rooftop Night Ambience"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.22] contrast-[1.25]"
        />
        {/* Layered Rich Dark and Amber Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090503] via-[#090503]/85 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/70 via-transparent to-amber-950/70" />
        
        {/* Warm Ambient Glow Spots */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[250px] sm:h-[380px] bg-gradient-to-tr from-amber-600/15 via-yellow-500/10 to-orange-600/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Status & Verification Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5">
          {/* Live Open Status */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#180d07]/90 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md shadow-lg shadow-black/60">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold">OPEN TONIGHT</span>
            <span className="text-emerald-400/50">•</span>
            <span className="text-emerald-200/90">5:00 PM – 4:00 AM</span>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="truncate">Opp. Alrehman Garden Phase II, Lahore</span>
          </div>

          {/* Rating Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-amber-200">4.9 ★</span>
            <span className="text-amber-400/60 font-normal">(1,500+ Mehfil Reviews)</span>
          </div>
        </div>

        {/* Central Official Calligraphy Logo */}
        <div className="mb-5 sm:mb-7 flex justify-center">
          <Logo size="hero" showSubtitle={false} className="hover:scale-105 transition-transform duration-500" />
        </div>

        {/* Slogan & Heading with Distinctive Typography */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 font-display">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-400 drop-shadow-[0_4px_30px_rgba(245,158,11,0.35)]">
            Good Conversations Happen Over a Cup of Chai!
          </span>
          <span className="block font-urdu text-3xl sm:text-4xl md:text-5xl text-amber-200 mt-2 sm:mt-3 font-normal leading-relaxed">
            آپ کی محفل، آپ کی چائے اور دیسی باتیں
          </span>
        </h1>

        <p className="text-xs sm:text-base md:text-lg text-amber-100/80 max-w-3xl mx-auto mb-7 sm:mb-9 leading-relaxed font-normal">
          {t.heroDesc}
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-9 sm:mb-11 max-w-2xl mx-auto">
          {/* View Deals CTA */}
          <a
            id="hero-deals-cta"
            href="#deals-gallery"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-extrabold text-xs sm:text-sm shadow-xl shadow-amber-950/70 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 border border-amber-300/60 cursor-pointer"
          >
            <Flame className="w-4 h-4 fill-black text-black" />
            <span>🔥 Explore Mega Deals</span>
          </a>

          {/* Send Gift Chai CTA */}
          <a
            id="hero-gift-cta"
            href="#gift-card"
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-gradient-to-r from-rose-950/90 to-amber-950/90 hover:from-rose-900 hover:to-amber-900 text-amber-200 font-extrabold text-xs sm:text-sm border border-rose-500/50 shadow-lg shadow-rose-950/50 backdrop-blur-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Gift className="w-4 h-4 text-rose-400" />
            <span>🎁 Send Chai to a Friend</span>
          </a>

          {/* View Menu CTA */}
          <a
            id="hero-menu-cta"
            href="#menu"
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#1d0e07]/90 hover:bg-[#2c150b] text-amber-200 font-bold text-xs sm:text-sm border border-amber-700/60 backdrop-blur-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Coffee className="w-4 h-4 text-amber-400" />
            <span>{t.btnViewMenu}</span>
          </a>

          {/* Direct WhatsApp Call */}
          <button
            id="hero-whatsapp-cta"
            onClick={onOpenWhatsApp}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-800/90 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm border border-emerald-500/50 backdrop-blur-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/80 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>WhatsApp Delivery</span>
          </button>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-5 border-t border-amber-900/40 text-left">
          <div className="p-3 sm:p-4 rounded-2xl bg-[#140b06]/85 border border-amber-900/50 backdrop-blur-sm flex items-start gap-3 hover:border-amber-600/40 transition-colors">
            <div className="p-2 rounded-xl bg-amber-600/20 text-amber-400 shrink-0">
              <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-amber-100">Karak Doodh Patti</h3>
              <p className="text-[10px] sm:text-[11px] text-amber-300/70 mt-0.5">Slow-Brewed Matka & Kashmiri</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-[#140b06]/85 border border-amber-900/50 backdrop-blur-sm flex items-start gap-3 hover:border-amber-600/40 transition-colors">
            <div className="p-2 rounded-xl bg-amber-600/20 text-amber-400 shrink-0">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-amber-100">Washi Mega Deal</h3>
              <p className="text-[10px] sm:text-[11px] text-amber-300/70 mt-0.5">Pizza + Burgers + Paratha (Rs. 2300)</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-[#140b06]/85 border border-amber-900/50 backdrop-blur-sm flex items-start gap-3 hover:border-amber-600/40 transition-colors">
            <div className="p-2 rounded-xl bg-amber-600/20 text-amber-400 shrink-0">
              <Music className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-amber-100">Live Sufi Qawwali</h3>
              <p className="text-[10px] sm:text-[11px] text-amber-300/70 mt-0.5">Fri, Sat & Sun Evenings</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-[#140b06]/85 border border-amber-900/50 backdrop-blur-sm flex items-start gap-3 hover:border-amber-600/40 transition-colors">
            <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400 shrink-0">
              <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-amber-100">Free Home Delivery</h3>
              <p className="text-[10px] sm:text-[11px] text-emerald-400 mt-0.5">{cafeDetails.phone1}</p>
            </div>
          </div>
        </div>

        {/* Smooth Down Arrow */}
        <div className="mt-8 flex justify-center">
          <a href="#deals-gallery" className="text-amber-400/50 hover:text-amber-300 transition-colors animate-bounce p-1" title="Scroll down">
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
