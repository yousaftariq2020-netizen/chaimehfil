import React, { useState, useMemo } from 'react';
import { Coffee, Search, Flame, Plus, Minus, Check, Clock, Sparkles, Tag, ShoppingBag, UtensilsCrossed } from 'lucide-react';
import { MenuItem, MenuCategory, Language } from '../types';
import { menuItemsData } from '../data/chaiMehfilData';
import { translations } from '../data/translations';

interface MenuSectionProps {
  currentLang: Language;
  onAddToCart: (item: MenuItem) => void;
  cartItemCounts: Record<string, number>;
  onUpdateQuantity?: (itemId: string, delta: number) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  currentLang,
  onAddToCart,
  cartItemCounts,
  onUpdateQuantity
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlySignatures, setOnlySignatures] = useState(false);
  const [onlyDeals, setOnlyDeals] = useState(false);
  const [addedItemAnimation, setAddedItemAnimation] = useState<string | null>(null);

  const t = translations[currentLang];

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: t.allCategories },
    { id: 'deals', label: '🔥 Mega Deals' },
    { id: 'chai', label: '☕ Karak Chai & Tea' },
    { id: 'pizza', label: '🍕 Pizzas (Large & Med)' },
    { id: 'burgers', label: '🍔 Zinger Burgers' },
    { id: 'parathas', label: '🫓 Stuffed Parathas' },
    { id: 'shawarma', label: '🌯 Shawarma Platters' },
    { id: 'sandwiches', label: '🥪 Club Sandwiches' },
    { id: 'snacks', label: '🍟 Loaded Fries & Snacks' },
    { id: 'italian_chinese', label: '🍝 Pasta & Chinese' },
    { id: 'beverages_desserts', label: '🥤 Shakes & Drinks' },
  ];

  const filteredItems = useMemo(() => {
    return menuItemsData.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSignature = !onlySignatures || item.isSignature;
      const matchesDeals = !onlyDeals || item.isDeal;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.nameUrdu.includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchesCategory && matchesSignature && matchesDeals && matchesSearch;
    });
  }, [activeCategory, onlySignatures, onlyDeals, searchQuery]);

  const handleAddClick = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemAnimation(item.id);
    setTimeout(() => {
      setAddedItemAnimation(null);
    }, 800);
  };

  return (
    <section id="menu" className="py-20 bg-[#0e0805] relative overflow-hidden border-t border-amber-950/50">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold mb-3 shadow-lg">
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
            <span>Khas Mehfil Ka Mukammal Dastarkhwan</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-50 mb-3 font-display">
            {t.menuTitle}
          </h2>
          <p className="text-amber-200/70 text-sm sm:text-base">
            {t.menuSubtitle}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#160c07]/90 p-4 sm:p-5 rounded-3xl border border-amber-900/40 shadow-2xl mb-10 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-amber-400/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="menu-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Karak Chai, Washi Deal, Pizza, Burger..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#090503] border border-amber-900/50 text-amber-100 text-xs sm:text-sm placeholder-amber-400/40 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-amber-400/70 hover:text-amber-200 font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1">
              <button
                onClick={() => setOnlyDeals(!onlyDeals)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all border whitespace-nowrap cursor-pointer ${
                  onlyDeals
                    ? 'bg-amber-500 text-black border-amber-300 font-bold shadow-md'
                    : 'bg-[#090503] text-amber-200/80 border-amber-900/40 hover:border-amber-700'
                }`}
              >
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                <span>Deals & Combos Only</span>
              </button>

              <button
                onClick={() => setOnlySignatures(!onlySignatures)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all border whitespace-nowrap cursor-pointer ${
                  onlySignatures
                    ? 'bg-amber-600 text-white border-amber-400 shadow-md shadow-amber-900/40 font-bold'
                    : 'bg-[#090503] text-amber-200/80 border-amber-900/40 hover:border-amber-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Chef's Signatures</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-3 border-t border-amber-900/30 pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`menu-cat-${cat.id}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (cat.id === 'deals') setOnlyDeals(false);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-950 font-bold border border-amber-400/40'
                    : 'bg-[#0f0805] text-amber-200/75 hover:text-amber-100 hover:bg-[#1e1008] border border-amber-900/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#130b07]/60 rounded-3xl border border-amber-900/30 max-w-md mx-auto">
            <Coffee className="w-10 h-10 text-amber-500/40 mx-auto mb-3" />
            <p className="text-amber-200 text-base font-semibold">Koi item nahi mila</p>
            <p className="text-amber-300/50 text-xs mt-1">Try another search keyword or reset category filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const inCartCount = cartItemCounts[item.id] || 0;
              const isJustAdded = addedItemAnimation === item.id;

              return (
                <div
                  key={item.id}
                  id={`item-card-${item.id}`}
                  className={`group bg-[#140b07] rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/80 ${
                    item.isDeal
                      ? 'border-amber-500/60 bg-gradient-to-b from-[#1b0e08] to-[#110804]'
                      : 'border-amber-900/40 hover:border-amber-600/60'
                  }`}
                >
                  {/* Food Image Container */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140b07] via-transparent to-black/30" />

                    {/* Badges */}
                    {item.badge && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-amber-600/95 backdrop-blur-sm text-white text-[11px] font-bold shadow-md">
                        {item.badge}
                      </div>
                    )}

                    {item.isSignature && (
                      <div className="absolute top-3 right-3 p-1.5 rounded-full bg-amber-500 text-black shadow-md" title="Signature Item">
                        <Flame className="w-3.5 h-3.5 fill-black" />
                      </div>
                    )}

                    {/* Price Tag Pill */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-[#090503]/90 backdrop-blur-md border border-amber-500/40 text-amber-300 font-black text-sm sm:text-base shadow-lg">
                      Rs. {item.price}
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      {/* English & Urdu Name */}
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="text-base font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-urdu text-sm text-amber-300/90 whitespace-nowrap pt-0.5">
                          {item.nameUrdu}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-amber-200/70 mb-2.5 leading-relaxed">
                        {currentLang === 'ur' ? item.descriptionUrdu : item.description}
                      </p>

                      {/* Deal Inclusions if any */}
                      {item.dealInclusions && item.dealInclusions.length > 0 && (
                        <div className="mt-2 p-2.5 rounded-xl bg-black/40 border border-amber-900/40 space-y-1">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block mb-1">
                            Includes in Deal:
                          </span>
                          <div className="grid grid-cols-2 gap-1 text-[11px] text-amber-200/90">
                            {item.dealInclusions.map((inc, i) => (
                              <div key={i} className="flex items-center gap-1">
                                <span className="text-emerald-400">✓</span> {inc}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Multiple sizes if any */}
                      {item.sizes && (
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          {item.sizes.map((s, idx) => (
                            <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/40 text-amber-300">
                              {s.size}: Rs. {s.price}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer Row: Prep Time & Add / Stepper Controls */}
                    <div className="pt-3 border-t border-amber-900/30 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-[11px] text-amber-400/70">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>{item.preparationTime || '5-8 Mins'}</span>
                      </div>

                      {/* Add Button or Stepper if already in cart */}
                      {inCartCount > 0 && onUpdateQuantity ? (
                        <div className="flex items-center gap-1.5 bg-[#201007] p-1 rounded-xl border border-amber-700/50">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded-lg bg-[#30160b] text-amber-300 hover:bg-amber-600 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-xs"
                            title="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-amber-100 min-w-5 text-center">
                            {inCartCount}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded-lg bg-amber-600 text-white hover:bg-amber-500 flex items-center justify-center transition-colors cursor-pointer text-xs"
                            title="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <button
                          id={`btn-add-${item.id}`}
                          onClick={() => handleAddClick(item)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md ${
                            isJustAdded
                              ? 'bg-emerald-600 text-white scale-95'
                              : 'bg-[#241208] hover:bg-amber-600 text-amber-200 hover:text-white border border-amber-800/50'
                          }`}
                        >
                          {isJustAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added!</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Order</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
