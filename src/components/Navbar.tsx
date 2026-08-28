import React, { useState, useEffect } from 'react';
import { Coffee, Flame, Music, UtensilsCrossed, Calendar, Image as ImageIcon, Phone, ShoppingBag, Menu as MenuIcon, X, Sparkles, Truck, Users, Gift, Play } from 'lucide-react';
import { Language, CartItem } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';
import { cafeDetails } from '../data/chaiMehfilData';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenReserve: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  cartItems,
  onOpenCart,
  onOpenReserve
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopNavLinks = [
    { label: '🔥 Deals', href: '#deals-gallery', isSpecial: true },
    { label: t.navMenu, href: '#menu' },
    { label: '🪑 Seating', href: '#seating-zones' },
    { label: t.navQawwali, href: '#qawwali' },
    { label: '🎁 Gift Chai', href: '#gift-card', isGift: true },
    { label: t.navGallery, href: '#gallery' },
    { label: t.navContact, href: '#contact' },
  ];

  const allNavLinks = [
    { label: t.navHome, href: '#home', icon: Coffee },
    { label: '🔥 Mega Deals', href: '#deals-gallery', icon: Flame, isSpecial: true },
    { label: '✨ Experience', href: '#experience', icon: Sparkles },
    { label: t.navMenu, href: '#menu', icon: UtensilsCrossed },
    { label: '🪑 Seating Zones', href: '#seating-zones', icon: Users },
    { label: t.navQawwali, href: '#qawwali', icon: Music },
    { label: '🎉 Events & Mehfil', href: '#events', icon: Gift },
    { label: '🎁 Gift Chai', href: '#gift-card', icon: Gift },
    { label: '🎬 Video Vlogs', href: '#video-reviews', icon: Play },
    { label: t.navGallery, href: '#gallery', icon: ImageIcon },
    { label: t.navReserve, href: '#reserve', icon: Calendar },
    { label: t.navContact, href: '#contact', icon: Phone },
  ];

  return (
    <header id="main-navbar" className="sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      {/* Top Delivery Hotline Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-[#180903] via-amber-950 to-[#180903] text-amber-200 text-[10px] sm:text-xs py-1 px-3 sm:px-4 text-center border-b border-amber-800/40 flex items-center justify-between sm:justify-center gap-2">
        <div className="flex items-center gap-1 font-bold text-amber-300 truncate">
          <Truck className="w-3 h-3 text-amber-400 shrink-0" />
          <span className="truncate">Free Delivery (Alrehman Garden Ph II):</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 font-semibold text-white">
          <a href={`tel:${cafeDetails.phone1.replace(/-/g, '')}`} className="hover:underline text-amber-300 font-bold">
            {cafeDetails.phone1}
          </a>
          <span className="text-amber-500/60 hidden xs:inline">|</span>
          <a href={`tel:${cafeDetails.phone2.replace(/-/g, '')}`} className="hover:underline text-amber-300 font-bold hidden xs:inline">
            {cafeDetails.phone2}
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0503]/98 backdrop-blur-md border-b border-amber-900/50 shadow-2xl shadow-black/90 py-2'
            : 'bg-[#0e0704]/95 backdrop-blur-sm border-b border-amber-950/60 py-2 sm:py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between gap-2">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-2 group shrink-0">
            <Logo size="sm" showSubtitle={false} className="shrink-0" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-sm sm:text-base lg:text-lg font-extrabold tracking-wide text-amber-100 font-display group-hover:text-amber-300 transition-colors whitespace-nowrap">
                  CHAI MEHFIL
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold px-1 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 whitespace-nowrap">
                  CAFE
                </span>
              </div>
              <span className="text-[9px] text-amber-400/80 font-medium tracking-wide hidden md:block whitespace-nowrap">
                Rooftop & Desi Bites • Lahore
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink">
            {desktopNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold px-2 xl:px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  link.isSpecial
                    ? 'text-amber-300 bg-amber-950/80 border border-amber-600/50 font-bold hover:bg-amber-600 hover:text-white'
                    : link.isGift
                    ? 'text-rose-300 bg-rose-950/40 border border-rose-600/40 hover:bg-rose-900/60'
                    : 'text-amber-100/85 hover:text-amber-300 hover:bg-amber-950/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Controls & Language Selector (Desktop) */}
          <div className="hidden sm:flex items-center gap-1.5 lg:gap-2 shrink-0">
            {/* Language Toggle */}
            <div className="flex items-center bg-[#180d06] p-0.5 rounded-lg border border-amber-900/50 text-xs shrink-0">
              <button
                id="lang-roman"
                onClick={() => onLanguageChange('roman')}
                className={`px-1.5 lg:px-2 py-0.5 lg:py-1 rounded text-[11px] lg:text-xs font-medium transition-all ${
                  currentLang === 'roman'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-amber-200/70 hover:text-amber-100'
                }`}
              >
                Roman
              </button>
              <button
                id="lang-ur"
                onClick={() => onLanguageChange('ur')}
                className={`px-1.5 lg:px-2 py-0.5 lg:py-1 rounded font-urdu text-[11px] lg:text-xs transition-all ${
                  currentLang === 'ur'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-amber-200/70 hover:text-amber-100'
                }`}
              >
                اردو
              </button>
              <button
                id="lang-en"
                onClick={() => onLanguageChange('en')}
                className={`px-1.5 lg:px-2 py-0.5 lg:py-1 rounded text-[11px] lg:text-xs font-medium transition-all ${
                  currentLang === 'en'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-amber-200/70 hover:text-amber-100'
                }`}
              >
                EN
              </button>
            </div>

            {/* Cart Button */}
            <button
              id="open-cart-btn"
              onClick={onOpenCart}
              className="relative p-1.5 lg:p-2 rounded-lg bg-[#201007] text-amber-300 hover:bg-[#2e160a] border border-amber-800/40 transition-colors flex items-center gap-1 cursor-pointer shadow-md shrink-0"
              title="Order Basket"
            >
              <ShoppingBag className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-400" />
              <span className="text-xs font-semibold hidden md:inline">Basket</span>
              {totalItemCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-amber-500 text-black text-[10px] font-black flex items-center justify-center animate-bounce">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Reserve Table CTA */}
            <button
              id="nav-reserve-cta"
              onClick={onOpenReserve}
              className="px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-[11px] lg:text-xs font-bold shadow-md shadow-amber-900/40 transition-all flex items-center gap-1 border border-amber-400/30 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3 h-3 text-amber-200" />
              <span>{t.btnBookTable}</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-1.5 sm:hidden">
            {/* Quick Lang Switch on mobile */}
            <button
              onClick={() => onLanguageChange(currentLang === 'ur' ? 'roman' : currentLang === 'roman' ? 'en' : 'ur')}
              className="px-2 py-1 rounded bg-[#1c0f08] border border-amber-800/40 text-amber-300 text-[10px] font-bold"
            >
              {currentLang === 'ur' ? 'اردو' : currentLang === 'roman' ? 'ROMAN' : 'ENG'}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-1.5 rounded-lg bg-[#201007] text-amber-300 border border-amber-800/40"
              aria-label="View Basket"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              {totalItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-black text-[9px] font-black flex items-center justify-center animate-pulse">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-[#140a04] text-amber-300 border border-amber-800/40"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#100703] border-b border-amber-900/40 px-4 py-3 space-y-3 shadow-2xl animate-fadeIn">
          <div className="flex justify-between items-center pb-2 border-b border-amber-900/30">
            <span className="text-xs text-amber-300/80 font-medium">Language / زبان:</span>
            <div className="flex items-center bg-[#1e1008] p-0.5 rounded border border-amber-900/50 text-xs">
              <button
                onClick={() => onLanguageChange('roman')}
                className={`px-2 py-0.5 rounded ${currentLang === 'roman' ? 'bg-amber-600 text-white' : 'text-amber-200/70'}`}
              >
                Roman
              </button>
              <button
                onClick={() => onLanguageChange('ur')}
                className={`px-2 py-0.5 rounded font-urdu text-xs ${currentLang === 'ur' ? 'bg-amber-600 text-white' : 'text-amber-200/70'}`}
              >
                اردو
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded ${currentLang === 'en' ? 'bg-amber-600 text-white' : 'text-amber-200/70'}`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {allNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs font-medium p-2 rounded-lg border flex items-center gap-2 ${
                  link.isSpecial
                    ? 'bg-amber-950/80 text-amber-300 border-amber-600/50 font-bold'
                    : 'bg-[#180d07] text-amber-100 hover:text-amber-300 border-amber-900/30'
                }`}
              >
                <link.icon className="w-3.5 h-3.5 text-amber-400" />
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-950"
            >
              <Calendar className="w-3.5 h-3.5" />
              {t.btnBookTable}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
