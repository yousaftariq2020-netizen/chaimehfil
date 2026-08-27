import React, { useState } from 'react';
import { Sparkles, Coffee, Heart, Flame, Plus, Check, ShoppingBag, RefreshCw, Star } from 'lucide-react';
import { MenuItem, Language } from '../types';
import { menuItemsData, cafeDetails } from '../data/chaiMehfilData';

interface ChaiSommelierProps {
  currentLang: Language;
  onAddToCart: (item: MenuItem) => void;
}

interface MoodOption {
  id: string;
  emoji: string;
  label: string;
  labelUrdu: string;
  description: string;
  matchedItems: string[]; // ids of menu items
  tagline: string;
}

export const ChaiSommelier: React.FC<ChaiSommelierProps> = ({
  currentLang,
  onAddToCart
}) => {
  const [selectedMood, setSelectedMood] = useState<string>('dosti');
  const [addedComboAnimation, setAddedComboAnimation] = useState(false);

  const moods: MoodOption[] = [
    {
      id: 'dosti',
      emoji: '👥',
      label: 'Late-Night Doston Ki Mehfil',
      labelUrdu: 'دوستوں کی گپ شپ اور محفل',
      description: 'The classic yaar-dost gossip night craving spicy crunch and endless rounds of piping hot doodh patti.',
      matchedItems: ['deal-washi', 'chai-karak-matka'],
      tagline: 'Pizza, Zinger Burgers, Stuffed Paratha & Karak Matka Chai'
    },
    {
      id: 'baarish',
      emoji: '🌧️',
      label: 'Mausam & Rainy Craving',
      labelUrdu: 'خوشگوار موسم اور بارش کے لمحات',
      description: 'Chilly breeze or rainy evening paired with aromatic steaming Kashmiri Pink Tea and crispy chicken cheese paratha.',
      matchedItems: ['chai-kashmiri-pink', 'paratha-chicken-cheese'],
      tagline: 'Kashmiri Pink Tea with Dry Fruits + Crispy Stuffed Paratha'
    },
    {
      id: 'family-feast',
      emoji: '👨‍👩‍👧‍👦',
      label: 'Family Rooftop Feast',
      labelUrdu: 'فیملی ڈنر اور پیزا پارٹی',
      description: 'Big family dinner under the stars with handcrafted stone-baked large pizza, platter fries and cardamom tea.',
      matchedItems: ['pizza-tikka-large', 'snack-mehfil-loaded-fries', 'chai-elaichi-special'],
      tagline: '13" Large Fajita Pizza + Loaded Cheese Fries + Elaichi Doodh Patti'
    },
    {
      id: 'sufi-peace',
      emoji: '🪕',
      label: 'Sufi Vibe & Solitude',
      labelUrdu: 'پرسکون صوفیانہ شام',
      description: 'Soulful evening with live harmonium echoes, authentic desi Gur (Jaggery) tea, and grilled club sandwiches.',
      matchedItems: ['chai-gur-jaggery', 'sandwich-club-classic'],
      tagline: 'Pure Desi Gur Matka Chai + Grilled Triple-Decker Club Sandwich'
    },
    {
      id: 'meetha-rush',
      emoji: '🍯',
      label: 'Late-Night Meetha Craving',
      labelUrdu: 'رات کا میٹھا اور شاہی شیک',
      description: 'Satisfy your sweet tooth with warm Gulab Jamuns, Ferrero Shake, or hot Kashmiri Chai with crushed pistachios.',
      matchedItems: ['chai-kashmiri-pink', 'bev-oreo-shake'],
      tagline: 'Royal Kashmiri Chai + Rich Thick Oreo Delight Shake'
    }
  ];

  const currentMoodObj = moods.find((m) => m.id === selectedMood) || moods[0];
  const recommendedItems = menuItemsData.filter((item) =>
    currentMoodObj.matchedItems.includes(item.id)
  );

  const comboTotal = recommendedItems.reduce((sum, item) => sum + item.price, 0);

  const handleAddAllToCart = () => {
    recommendedItems.forEach((item) => {
      onAddToCart(item);
    });
    setAddedComboAnimation(true);
    setTimeout(() => setAddedComboAnimation(false), 1200);
  };

  const handleOrderWhatsApp = () => {
    const itemNames = recommendedItems.map((i) => `${i.name} (Rs. ${i.price})`).join(', ');
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Chai Mehfil! I want to order the recommended mood combo for *${currentMoodObj.label}*:\n\nIncludes: ${itemNames}\nTotal: Rs. ${comboTotal}\nPlease dispatch with free delivery.`
    );
    window.open(`https://wa.me/${cafeDetails.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="mood-matcher" className="py-20 bg-[#0b0604] relative border-t border-amber-950/60 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold mb-3 shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Chai Mehfil Mood Sommelier / آپ کا موڈ، ہمارا ذائقہ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-50 mb-3 font-display">
            What Are You Craving Tonight?
          </h2>
          <p className="text-amber-200/75 text-xs sm:text-base">
            Select your vibe and let our chef curate the quintessential Chai & Desi Snack pairing for your table.
          </p>
        </div>

        {/* Mood Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedMood === mood.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-950 scale-105 border border-amber-300'
                  : 'bg-[#150c07] hover:bg-[#20110a] text-amber-200/80 border border-amber-900/40 hover:border-amber-700'
              }`}
            >
              <span className="text-base">{mood.emoji}</span>
              <span>{mood.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Combo Showcase Card */}
        <div className="bg-gradient-to-br from-[#1c0f08] via-[#140b06] to-[#0d0603] rounded-3xl border border-amber-500/40 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-amber-900/40 pb-6 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-1.5 mb-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                Handcrafted Pairing for {currentMoodObj.label}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-amber-100 font-display">
                {currentMoodObj.tagline}
              </h3>
              <p className="font-urdu text-base text-amber-300 mt-1">
                {currentMoodObj.labelUrdu}
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="text-right">
                <span className="text-xs text-amber-300/70 block">Combo Total:</span>
                <span className="text-2xl sm:text-3xl font-black text-amber-400">
                  Rs. {comboTotal}
                </span>
              </div>

              <button
                onClick={handleAddAllToCart}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer shadow-xl ${
                  addedComboAnimation
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black'
                }`}
              >
                {addedComboAnimation ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added Combo to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Entire Combo</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Items in Combo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recommendedItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#0e0704] rounded-2xl overflow-hidden border border-amber-900/50 p-4 flex gap-4 items-center group hover:border-amber-600/60 transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover border border-amber-900/40 shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                    {item.category.toUpperCase()}
                  </span>
                  <h4 className="text-sm font-bold text-amber-100 truncate mt-0.5">
                    {item.name}
                  </h4>
                  <p className="font-urdu text-xs text-amber-300/80 truncate">
                    {item.nameUrdu}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-black text-amber-300">
                      Rs. {item.price}
                    </span>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="px-2.5 py-1 rounded-lg bg-[#241309] hover:bg-amber-600 text-amber-200 hover:text-white text-[11px] font-bold border border-amber-800/40 transition-colors cursor-pointer"
                    >
                      + Add Item
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
