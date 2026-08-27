import React, { useState } from 'react';
import { Sparkles, Flame, Tag, CheckCircle2, MessageCircle, ExternalLink, ShoppingBag, Eye, X, Phone, Star, ShieldCheck, Check } from 'lucide-react';
import { OfficialPoster, Language, MenuItem } from '../types';
import { officialPostersData, cafeDetails, menuItemsData } from '../data/chaiMehfilData';

interface VisualDealsGalleryProps {
  currentLang: Language;
  onAddToCart: (item: MenuItem) => void;
}

export const VisualDealsGallery: React.FC<VisualDealsGalleryProps> = ({
  currentLang,
  onAddToCart
}) => {
  const [selectedPoster, setSelectedPoster] = useState<OfficialPoster | null>(null);
  const [addedDealId, setAddedDealId] = useState<string | null>(null);

  const handleOrderWhatsApp = (title: string, price?: string) => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Chai Mehfil! I want to order the special deal: *${title}* (${price || 'Featured Deal'}). Please confirm free home delivery to my address.`
    );
    window.open(`https://wa.me/${cafeDetails.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleAddDealToBasket = (poster: OfficialPoster) => {
    const matchingItem = menuItemsData.find(
      (item) => item.name.toLowerCase().includes(poster.title.toLowerCase()) || (poster.title.includes('Washi') && item.id === 'deal-washi')
    );
    if (matchingItem) {
      onAddToCart(matchingItem);
    } else {
      const fallbackItem: MenuItem = {
        id: `deal-${poster.id}`,
        name: poster.title,
        nameUrdu: poster.titleUrdu,
        category: 'deals',
        price: poster.priceTag ? parseInt(poster.priceTag.replace(/\D/g, '')) || 1200 : 1200,
        description: poster.subtitle,
        descriptionUrdu: poster.titleUrdu,
        image: poster.image,
        isDeal: true,
        dealInclusions: poster.highlights
      };
      onAddToCart(fallbackItem);
    }

    setAddedDealId(poster.id);
    setTimeout(() => {
      setAddedDealId(null);
    }, 900);
  };

  return (
    <section id="deals-gallery" className="py-20 bg-[#0c0704] relative border-y border-amber-950/60 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold mb-3 shadow-lg shadow-amber-950/70">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Official Mehfil Mega Deals & Posters</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-50 mb-3 font-display">
            خاص میگا ڈیلز اور اسپیشل آفرز
          </h2>
          <p className="text-amber-200/80 text-sm sm:text-base leading-relaxed">
            Piping hot Large Pizzas, Crispy Zinger Burgers, Stuffed Parathas, and Karak Doodh Patti — Handcrafted for Family Feast & Friends Gatherings.
          </p>

          {/* Hotline Quick Badge */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs font-semibold text-amber-300">
            <span className="flex items-center gap-1.5 bg-[#170c06] px-3.5 py-1.5 rounded-full border border-amber-800/40 shadow-sm">
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> Free Delivery: {cafeDetails.phone1} / {cafeDetails.phone2}
            </span>
            <span className="bg-[#170c06] px-3.5 py-1.5 rounded-full border border-amber-800/40 shadow-sm">
              📍 Opp. Alrehman Garden Phase II, Lahore
            </span>
          </div>
        </div>

        {/* Featured Posters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {officialPostersData.map((poster) => {
            const isAdded = addedDealId === poster.id;

            return (
              <div
                key={poster.id}
                className="bg-gradient-to-b from-[#180e08] to-[#100804] rounded-3xl overflow-hidden border border-amber-700/40 hover:border-amber-400 transition-all duration-300 shadow-2xl hover:shadow-amber-950/60 flex flex-col group"
              >
                {/* Header Banner */}
                <div className="p-5 pb-3 bg-gradient-to-r from-[#221209] to-[#180b06] border-b border-amber-900/40">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        {poster.tagline}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-amber-100 font-display mt-0.5 group-hover:text-amber-300 transition-colors">
                        {poster.title}
                      </h3>
                      <p className="font-urdu text-sm text-amber-300">
                        {poster.titleUrdu}
                      </p>
                    </div>
                    {poster.priceTag && (
                      <div className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-black text-sm sm:text-base shadow-lg shadow-amber-950 whitespace-nowrap">
                        {poster.priceTag}
                      </div>
                    )}
                  </div>
                </div>

                {/* Poster Visual Mockup Image */}
                <div
                  className="relative h-48 sm:h-52 bg-black overflow-hidden cursor-pointer"
                  onClick={() => setSelectedPoster(poster)}
                  title="Click to view full poster"
                >
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100804] via-transparent to-transparent" />

                  {/* View Poster Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-sm border border-amber-500/40 text-[11px] font-bold text-amber-300 flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>Zoom Poster</span>
                  </div>

                  {/* Mega Deal Ribbon */}
                  {poster.title.includes('Washi') && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-red-600 text-white font-extrabold text-[10px] uppercase tracking-wider shadow-md">
                      BEST SELLER DEAL 🔥
                    </div>
                  )}
                </div>

                {/* Inclusions & Details */}
                <div className="p-5 pt-3 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs text-amber-200/80 mb-3 font-medium">
                      {poster.subtitle}
                    </p>
                    <div className="space-y-1.5">
                      {poster.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-amber-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-amber-900/40 flex items-center gap-2">
                    <button
                      onClick={() => handleAddDealToBasket(poster)}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-600/25 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-600/50'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added to Order!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleOrderWhatsApp(poster.title, poster.priceTag)}
                      className="py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/60 cursor-pointer"
                      title="Direct WhatsApp Order"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Poster Inspection Lightbox Modal */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#180e08] rounded-3xl overflow-hidden border border-amber-600/60 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 text-amber-200 hover:text-white border border-amber-600/50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 border-b border-amber-900/40 bg-[#120a06]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black text-amber-100 font-display">
                    {selectedPoster.title}
                  </h3>
                  <p className="font-urdu text-base text-amber-300">
                    {selectedPoster.titleUrdu}
                  </p>
                </div>
                {selectedPoster.priceTag && (
                  <span className="px-4 py-2 rounded-xl bg-amber-500 text-black font-black text-base shadow-lg">
                    {selectedPoster.priceTag}
                  </span>
                )}
              </div>
            </div>

            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
              <img
                src={selectedPoster.image}
                alt={selectedPoster.title}
                className="w-full h-auto rounded-2xl object-contain max-h-80 mx-auto border border-amber-900/40 shadow-xl"
              />

              <div className="bg-[#1f110a] p-4 rounded-2xl border border-amber-900/40">
                <h4 className="text-sm font-bold text-amber-200 mb-2">
                  Deal Inclusions & Features:
                </h4>
                <ul className="space-y-1.5">
                  {selectedPoster.highlights.map((item, idx) => (
                    <li key={idx} className="text-xs text-amber-100 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/40 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-amber-300/80 font-medium">
                    Delivery Coverage:
                  </p>
                  <p className="text-xs font-bold text-amber-100">
                    {cafeDetails.address}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-amber-300/80 font-medium">
                    Hotlines:
                  </p>
                  <p className="text-xs font-bold text-amber-400">
                    {cafeDetails.phone1} / {cafeDetails.phone2}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-amber-900/40 bg-[#120a06] flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  handleAddDealToBasket(selectedPoster);
                  setSelectedPoster(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to My Order</span>
              </button>
              <button
                onClick={() => handleOrderWhatsApp(selectedPoster.title, selectedPoster.priceTag)}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
