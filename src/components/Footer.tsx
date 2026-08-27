import React from 'react';
import { Coffee, Heart, Music, Phone, MapPin, Instagram, Facebook, Sparkles, Flame } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';
import { cafeDetails } from '../data/chaiMehfilData';

interface FooterProps {
  currentLang: Language;
  onOpenReserve: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenReserve }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-[#050302] border-t border-amber-950 text-amber-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-amber-950/80">
          {/* Brand Info & Urdu Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="sm" showSubtitle={false} className="shrink-0" />
              <div>
                <span className="text-xl font-extrabold text-amber-100 font-display tracking-wide">
                  CHAI MEHFIL
                </span>
                <span className="font-urdu text-sm text-amber-300 block">
                  چائے محفل
                </span>
              </div>
            </div>

            <p className="text-xs text-amber-300/70 leading-relaxed">
              Authentic slow-brewed Karak Doodh Patti, Tandoori Chai, Mega Fast Food Deals, Gourmet Stuffed Parathas, and live weekend Sufi Qawwali.
            </p>

            <div className="p-3.5 rounded-2xl bg-[#100804] border border-amber-900/40">
              <p className="font-urdu text-sm text-amber-200 leading-relaxed text-center font-medium">
                ”آپ کی محفل، آپ کی چائے اور دیسی باتیں“
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-sm font-bold text-amber-100 font-display uppercase tracking-wider mb-4">
              Explore Menu & Deals
            </h4>
            <ul className="space-y-2.5 text-xs text-amber-200/70">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> {t.navHome}
                </a>
              </li>
              <li>
                <a href="#deals-gallery" className="text-amber-300 font-semibold hover:text-amber-200 transition-colors flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>🔥 Mega Deals & Posters</span>
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> {t.navMenu} (Pizzas, Burgers & Chai)
                </a>
              </li>
              <li>
                <a href="#qawwali" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> {t.navQawwali} (Live Nights)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> Photo Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>›</span> Location & Hotlines
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hotlines */}
          <div>
            <h4 className="text-sm font-bold text-amber-100 font-display uppercase tracking-wider mb-4">
              Location & Delivery
            </h4>
            <ul className="space-y-2.5 text-xs text-amber-200/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{cafeDetails.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Hotline 1:</strong> {cafeDetails.phone1}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Hotline 2:</strong> {cafeDetails.phone2}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Hours:</strong> 5:00 PM to 4:00 AM Daily</span>
              </li>
            </ul>
          </div>

          {/* Reserve & Direct WhatsApp Connect */}
          <div>
            <h4 className="text-sm font-bold text-amber-100 font-display uppercase tracking-wider mb-4">
              Direct WhatsApp Order
            </h4>
            <p className="text-xs text-amber-300/70 mb-4">
              Order fresh food & hot chai directly for free home delivery or table reservation.
            </p>

            <div className="flex items-center gap-3 mb-5">
              <a
                href={`https://wa.me/${cafeDetails.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 hover:text-white hover:bg-emerald-600 flex items-center justify-center transition-colors shadow-md"
                title="WhatsApp Hotline 1"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${cafeDetails.whatsappNumberSecondary}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 hover:text-white hover:bg-emerald-600 flex items-center justify-center transition-colors shadow-md"
                title="WhatsApp Hotline 2"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#160d07] border border-amber-800/40 text-amber-300 hover:text-white hover:bg-amber-600 flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#160d07] border border-amber-800/40 text-amber-300 hover:text-white hover:bg-amber-600 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onOpenReserve}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-xs font-bold shadow-lg shadow-amber-950 transition-all flex items-center justify-center gap-2 border border-amber-400/30 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Book Table Tonight</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-400/50 gap-4">
          <p>© {new Date().getFullYear()} CHAI MEHFIL Cafe. All rights reserved.</p>
          <div className="flex items-center gap-1 text-amber-300/70 font-urdu">
            <span>آپ کی محفل، آپ کی چائے اور دیسی باتیں — لاہور</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
