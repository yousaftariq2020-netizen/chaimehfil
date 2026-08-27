import React from 'react';
import { Gift, Sparkles, ArrowRight, Heart, Coffee, Send, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface ChaiGiftAdBannerProps {
  currentLang: Language;
  onOpenGiftSection?: () => void;
}

export const ChaiGiftAdBanner: React.FC<ChaiGiftAdBannerProps> = ({ currentLang, onOpenGiftSection }) => {
  return (
    <div className="w-full bg-gradient-to-r from-[#1e0d04] via-[#2c1507] to-[#1a0b03] border-y border-amber-500/40 relative overflow-hidden py-4 sm:py-5 px-4 sm:px-6 shadow-2xl">
      {/* Background Animated Shimmer Glow */}
      <div className="absolute top-0 right-1/4 w-72 h-full bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-amber-500/10 blur-2xl pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10">
        
        {/* Left Side: Eye-Catching Icon & Titles */}
        <div className="flex items-center gap-3.5 sm:gap-5 text-center sm:text-left">
          {/* Animated 3D-styled Gift Badge */}
          <div className="relative shrink-0 hidden xs:flex">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-700 p-0.5 shadow-lg shadow-amber-950/80">
              <div className="w-full h-full bg-[#150a04] rounded-[14px] flex items-center justify-center relative overflow-hidden group">
                <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300 animate-pulse" />
                <Sparkles className="w-3 h-3 text-amber-200 absolute top-1.5 right-1.5" />
              </div>
            </div>
            {/* Pulsing Tag */}
            <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md bg-rose-600 text-white text-[9px] font-black uppercase tracking-wider shadow">
              NEW
            </span>
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Chai Mehfil E-Gift Cards
              </span>
              <span className="font-urdu text-amber-400 text-xs sm:text-sm font-semibold">
                اپنے پیاروں کو چائے کا تحفہ بھیجیں ☕
              </span>
            </div>

            <h3 className="text-base sm:text-lg md:text-xl font-black text-white font-display tracking-tight">
              Send a Piping Hot Chai & Food Treat to a Friend!
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/80 line-clamp-1 max-w-xl">
              Create a personalized digital Chai Card with your sweet wishes & instant WhatsApp voucher code (Rs. 300 – Rs. 5,000).
            </p>
          </div>
        </div>

        {/* Right Side: Quick Action Button */}
        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
          <a
            href="#gift-card"
            onClick={onOpenGiftSection}
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold text-xs sm:text-sm shadow-xl shadow-amber-950 transition-all transform hover:scale-105 flex items-center justify-center gap-2 border border-amber-200 cursor-pointer"
          >
            <Gift className="w-4 h-4 text-black" />
            <span>Design Free Gift Card</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>

      </div>
    </div>
  );
};
