import React, { useState, useEffect } from 'react';
import { ArrowUp, UtensilsCrossed, ShoppingBag, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface ScrollToTopButtonProps {
  currentLang?: Language;
  onOpenCart?: () => void;
  cartCount?: number;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  currentLang = 'roman',
  onOpenCart,
  cartCount = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Calculate scroll progress percentage (0 to 100)
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setScrollProgress(scrollPercent);
      }

      // Show button when scrolled down more than 350px
      if (totalScroll > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      scrollToTop();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end gap-2.5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
      
      {/* Quick Jump to Menu (Mini pill) */}
      <button
        id="quick-menu-jump-btn"
        onClick={scrollToMenu}
        className="px-3 py-1.5 rounded-full bg-[#1e0d05]/95 hover:bg-[#2e1509] text-amber-300 border border-amber-500/40 text-[11px] font-bold shadow-lg shadow-black/80 flex items-center gap-1.5 backdrop-blur-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
        title="مینو پر جائیں (Go to Menu)"
      >
        <UtensilsCrossed className="w-3 h-3 text-amber-400" />
        <span className="font-urdu">مینو پر جائیں</span>
      </button>

      {/* Main Circular Scroll-to-Top Button with Circular Progress Border */}
      <button
        id="back-to-top-btn"
        onClick={scrollToTop}
        className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#251006] via-[#1a0c05] to-[#361708] border border-amber-500/60 text-amber-300 shadow-[0_8px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 overflow-hidden"
        title="واپس اوپر جائیں (Back to Top)"
        aria-label="Back to top"
      >
        {/* SVG Circular Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-amber-950/40 fill-none"
            strokeWidth="3"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-amber-400 fill-none transition-all duration-150"
            strokeWidth="3"
            strokeDasharray={125.6}
            strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
            strokeLinecap="round"
          />
        </svg>

        {/* Arrow & Text Content */}
        <div className="flex flex-col items-center justify-center relative z-10">
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 group-hover:-translate-y-1 transition-transform duration-200" />
          <span className="text-[9px] font-black text-amber-200/90 leading-none mt-0.5 font-urdu">
            اوپر جائیں
          </span>
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 bg-amber-400/10 opacity-0 group-hover:opacity-100 rounded-full transition-opacity" />
      </button>

    </div>
  );
};
