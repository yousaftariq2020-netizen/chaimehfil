import React, { useState, useEffect } from 'react';
import { Moon, Flame, Clock, Truck, Sparkles, Coffee, Phone, MessageCircle, ShieldCheck, Zap, Heart, Check, Plus } from 'lucide-react';
import { Language, MenuItem } from '../types';
import { cafeDetails } from '../data/chaiMehfilData';

interface MidnightCravingsSectionProps {
  currentLang: Language;
  onAddToCart: (item: MenuItem) => void;
}

interface MidnightDeal {
  id: string;
  title: string;
  titleUrdu: string;
  tagline: string;
  taglineUrdu: string;
  originalPrice: number;
  dealPrice: number;
  prepTime: string;
  image: string;
  badge: string;
  badgeUrdu: string;
  items: string[];
  itemsUrdu: string[];
  category: 'caffeine' | 'heavy' | 'pizza' | 'squad';
  asMenuItem: MenuItem;
}

const midnightDeals: MidnightDeal[] = [
  {
    id: 'midnight-deal-1',
    title: 'Late Night Study & Coding Fuel',
    titleUrdu: 'پڑھائی اور کوڈنگ کمبو 💻☕',
    tagline: 'Stay awake and focused with double kadak chai and a crunchy zinger burger',
    taglineUrdu: 'نیند کو کریں بائے بائے! دو کڑک دودھ پتی اور گرما گرم زنگر برگر',
    originalPrice: 820,
    dealPrice: 650,
    prepTime: '12-15 Mins',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    badge: '⚡ Top Midnight Pick',
    badgeUrdu: '⚡ رات کا سب سے مقبول کمبو',
    items: ['2x Kadak Doodh Patti Chai', '1x Crispy Zinger Burger', '1x Seasoned Fries'],
    itemsUrdu: ['2x خاص کڑک دودھ پتی چائے', '1x کرسپی زنگر برگر', '1x مصالحہ دار کرسپی فرائز'],
    category: 'caffeine',
    asMenuItem: {
      id: 'deal-midnight-1',
      name: 'Midnight Study & Coder Fuel Deal',
      nameUrdu: 'پڑھائی اور کوڈنگ کمبو',
      category: 'deals',
      price: 650,
      description: '2 Kadak Doodh Patti Chai + 1 Crispy Zinger Burger + French Fries',
      descriptionUrdu: '2 خاص کڑک دودھ پتی + 1 کرسپی زنگر برگر + فرائز',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      badge: '🌙 Midnight Deal',
      isDeal: true,
      preparationTime: '12-15 mins',
    },
  },
  {
    id: 'midnight-deal-2',
    title: 'Midnight Squad Hangout Box',
    titleUrdu: 'یاروں کا نائٹ آؤل میگا باکس 👥🔥',
    tagline: 'Complete late-night gossip meal with 4 matka chais, rolls, and fries',
    taglineUrdu: 'دوستوں کی گپ شپ کے لیے 4 تندوری مٹکہ چائے، 2 چکن پراٹھا رولز اور لارج فرائز',
    originalPrice: 1550,
    dealPrice: 1199,
    prepTime: '15-18 Mins',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    badge: '👑 Best for 3-4 Friends',
    badgeUrdu: '👑 3 تا 4 دوستوں کے لیے زبردست',
    items: ['4x Tandoori Matka Chai', '2x Chicken Malai Boti Paratha Roll', '1x Large Loaded Fries'],
    itemsUrdu: ['4x تندوری مٹکہ چائے', '2x چکن ملائی بوٹی پراٹھا رول', '1x لارج لوڈڈ کرسپی فرائز'],
    category: 'squad',
    asMenuItem: {
      id: 'deal-midnight-2',
      name: 'Midnight Squad Hangout Box',
      nameUrdu: 'یاروں کا نائٹ آؤل باکس',
      category: 'deals',
      price: 1199,
      description: '4 Tandoori Matka Chai + 2 Malai Boti Paratha Rolls + Large Fries',
      descriptionUrdu: '4 تندوری مٹکہ چائے + 2 ملائی بوٹی پراٹھا رول + لارج فرائز',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      badge: '🌙 Midnight Squad',
      isDeal: true,
      preparationTime: '15-18 mins',
    },
  },
  {
    id: 'midnight-deal-3',
    title: 'Midnight Pizza & Elaichi Chai Craving',
    titleUrdu: 'آدھی رات کی پیزا اور چائے میٹنگ 🍕🫖',
    tagline: '11 inch fresh baked cheesy pizza paired with hot fragrant elaichi doodh patti',
    taglineUrdu: 'گرما گرم چیزی میڈیم پیزا اور ساتھ 2 کپ چھوٹی الائچی والی خوشبودار چائے',
    originalPrice: 1300,
    dealPrice: 999,
    prepTime: '15-20 Mins',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    badge: '🔥 Cheesy Delight',
    badgeUrdu: '🔥 کرسپی چیزی پیزا کمبو',
    items: ['1x Medium 11" Special Pizza (Chicken Tikka / Fajita)', '2x Choti Elaichi Doodh Patti Chai', '2x Dipping Sauces'],
    itemsUrdu: ['1x میڈیم 11 انچ اسپیشل چیزی پیزا', '2x چھوٹی الائچی والی ملائی دار چائے', '2x خاص ڈپنگ ساس'],
    category: 'pizza',
    asMenuItem: {
      id: 'deal-midnight-3',
      name: 'Midnight Pizza & Elaichi Chai Feast',
      nameUrdu: 'آدھی رات کی پیزا میٹنگ',
      category: 'deals',
      price: 999,
      description: '1 Medium 11" Pizza + 2 Choti Elaichi Chai + 2 Sauces',
      descriptionUrdu: '1 میڈیم 11 انچ پیزا + 2 چھوٹی الائچی چائے + ساس',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      badge: '🌙 Midnight Pizza',
      isDeal: true,
      preparationTime: '15-20 mins',
    },
  },
  {
    id: 'midnight-deal-4',
    title: 'Sweet & Spicy Paratha Roll Craving',
    titleUrdu: 'رات گئے کرسپی پراٹھا رول اور زعفرانی چائے 🌯✨',
    tagline: 'Juicy BBQ roll with special creamy garlic sauce and saffron royal chai',
    taglineUrdu: 'گرلڈ ملائی بوٹی پراٹھا رول اور شاہی زعفرانی تندوری چائے کا سحر انگیز ذائقہ',
    originalPrice: 600,
    dealPrice: 460,
    prepTime: '10-12 Mins',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    badge: '🌙 Quick 15 Min Delivery',
    badgeUrdu: '🌙 فوری ایکسپریس ڈلیوری',
    items: ['1x Grilled Malai Boti Paratha Roll', '1x Shahi Zafrani Chai', '1x Mint Garlic Dip'],
    itemsUrdu: ['1x گرلڈ ملائی بوٹی پراٹھا رول', '1x شاہی زعفرانی کڑک چائے', '1x منٹ گارلک ساس'],
    category: 'heavy',
    asMenuItem: {
      id: 'deal-midnight-4',
      name: 'Midnight Paratha Roll & Zafrani Chai',
      nameUrdu: 'پراٹھا رول اور زعفرانی چائے',
      category: 'deals',
      price: 460,
      description: '1 Malai Boti Paratha Roll + 1 Shahi Zafrani Chai + Dip',
      descriptionUrdu: '1 ملائی بوٹی پراٹھا رول + 1 شاہی زعفرانی چائے',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
      badge: '🌙 Midnight Solo',
      isDeal: true,
      preparationTime: '10-12 mins',
    },
  },
];

export const MidnightCravingsSection: React.FC<MidnightCravingsSectionProps> = ({
  currentLang,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'caffeine' | 'heavy' | 'pizza' | 'squad'>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});
  
  // Real-time simulated countdown timer for midnight flash offer
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 3, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAddDeal = (deal: MidnightDeal) => {
    onAddToCart(deal.asMenuItem);
    setAddedItemIds(prev => ({ ...prev, [deal.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [deal.id]: false }));
    }, 2000);
  };

  const handleOrderWhatsApp = (deal: MidnightDeal) => {
    const text = encodeURIComponent(
      `🌙 *Assalam o Alaikum Chai Mehfil!* I want to order the *Midnight Special Deal*:\n\n` +
      `📦 *Deal:* ${deal.title} (${deal.titleUrdu})\n` +
      `💰 *Special Price:* Rs. ${deal.dealPrice}/- (Saved Rs. ${deal.originalPrice - deal.dealPrice})\n` +
      `🕒 *Time:* Midnight Express Order\n` +
      `📍 Please confirm delivery time to my location.`
    );
    window.open(`https://wa.me/${cafeDetails.whatsappNumber}?text=${text}`, '_blank');
  };

  const filteredDeals = selectedCategory === 'all'
    ? midnightDeals
    : midnightDeals.filter(d => d.category === selectedCategory);

  return (
    <section id="midnight-cravings" className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-[#050201] via-[#0c0503] to-[#080302]">
      
      {/* Background Nocturnal Glow & Moonlight Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Live Midnight Kitchen Active Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#180802] via-[#240e04] to-[#180802] border border-amber-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-lg">
                <Moon className="w-6 h-6 animate-pulse" />
              </div>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-black animate-ping" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-black" />
            </div>

            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Midnight Kitchen Active
                </span>
                <span className="text-[11px] text-amber-400/80 font-bold hidden sm:inline">
                  (11:00 PM - 04:00 AM)
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white font-urdu mt-0.5">
                رات جاگنے والوں کے لیے گرم کڑک چائے اور فاسٹ فوڈ کی اسپیشل ڈیلز
              </h2>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-3 shrink-0 bg-black/60 px-4 py-2.5 rounded-2xl border border-amber-600/40 shadow-inner">
            <Clock className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
            <div className="text-right">
              <span className="text-[10px] text-amber-400/90 font-bold block uppercase tracking-wider">
                آفر ختم ہونے میں باقی وقت
              </span>
              <div className="text-base sm:text-lg font-black font-mono text-amber-300 tracking-wider">
                {String(timeLeft.hours).padStart(2, '0')} : {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold shadow-md">
            <Flame className="w-4 h-4 text-orange-400 animate-bounce" />
            <span>Midnight Cravings & Late Night Squad</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-urdu tracking-tight">
            رات 11 بجے کے بعد کی بھوک؟ <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-500">ہم حاضر ہیں!</span>
          </h2>

          <p className="text-sm sm:text-base text-amber-200/80 font-urdu leading-relaxed max-w-2xl mx-auto">
            رات گئے پڑھائی، ریموٹ جاب، گیمنگ سیشن یا دوستوں کی چائے بیٹھک؟ پائپنگ ہاٹ چائے اور کرسپی فوڈ 20 منٹ میں آپ کے دروازے پر۔
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex items-center justify-center gap-2 pt-3 flex-wrap">
            {[
              { id: 'all', label: 'تمام نائٹ ڈیلز (All)', emoji: '🌙' },
              { id: 'caffeine', label: 'نیند بھگاؤ چائے (Focus Fuel)', emoji: '⚡' },
              { id: 'squad', label: 'یاروں کی بیٹھک (Squad Box)', emoji: '👥' },
              { id: 'pizza', label: 'نائٹ پیزا (Cheesy Pizza)', emoji: '🍕' },
              { id: 'heavy', label: 'پراٹھا رولز (Crunchy Rolls)', emoji: '🌯' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black font-black shadow-lg shadow-amber-950 scale-105 border border-amber-300/50'
                    : 'bg-[#150703] text-amber-300/80 hover:text-white hover:bg-[#200b05] border border-amber-900/60'
                }`}
              >
                <span>{tab.emoji}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Compelling Midnight Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDeals.map((deal) => {
            const isAdded = addedItemIds[deal.id];
            const discountAmount = deal.originalPrice - deal.dealPrice;
            const discountPercent = Math.round((discountAmount / deal.originalPrice) * 100);

            return (
              <div
                key={deal.id}
                className="bg-[#120502]/90 hover:bg-[#180803] border border-amber-900/60 hover:border-amber-500/80 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative"
              >
                {/* Save Badge */}
                <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-black text-xs shadow-lg shadow-red-950/80 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{discountPercent}% OFF (بچت Rs. {discountAmount})</span>
                </div>

                {/* Delivery Time Badge */}
                <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-xl bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-300 font-bold text-xs shadow-lg flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-amber-400" />
                  <span>{deal.prepTime}</span>
                </div>

                <div>
                  {/* Deal Image */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-black">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120502] via-transparent to-black/40" />
                    
                    {/* Bottom Category Tag */}
                    <div className="absolute bottom-2.5 left-3">
                      <span className="px-2.5 py-0.5 rounded-lg bg-amber-950/90 border border-amber-600/60 text-amber-300 text-[10px] font-bold">
                        {deal.badgeUrdu}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    
                    {/* Title & Urdu */}
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors font-urdu leading-normal">
                        {deal.titleUrdu}
                      </h3>
                      <div className="text-xs text-amber-400/80 font-sans font-semibold mt-0.5">
                        {deal.title}
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-baseline gap-2 bg-black/50 p-2.5 rounded-xl border border-amber-900/40">
                      <span className="text-2xl font-black text-amber-400 font-sans tracking-tight">
                        Rs. {deal.dealPrice}/-
                      </span>
                      <span className="text-xs text-amber-500/60 line-through font-sans">
                        Rs. {deal.originalPrice}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 font-urdu mr-auto">
                        مفت گرما گرم ڈلیوری
                      </span>
                    </div>

                    {/* Deal Inclusions List */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold text-amber-400/80 uppercase tracking-wider block font-urdu">
                        اس ڈیل میں شامل ہے:
                      </span>
                      <ul className="space-y-1">
                        {deal.itemsUrdu.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-amber-100 font-urdu">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => handleAddDeal(deal)}
                    className={`w-full py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                      isAdded
                        ? 'bg-emerald-600 text-white scale-95'
                        : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black border border-amber-300/40 shadow-amber-950'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span className="font-urdu">کارٹ میں شامل کر دیا گیا!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span className="font-urdu">کارٹ میں شامل کریں (Rs. {deal.dealPrice})</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleOrderWhatsApp(deal)}
                    className="w-full py-2 rounded-xl text-xs font-bold bg-[#1e0a03] hover:bg-[#2c0f05] text-emerald-400 hover:text-emerald-300 border border-emerald-800/40 hover:border-emerald-600 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-urdu">واٹس ایپ پر فوری منگوائیں ⚡</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Night Owl Guarantees & Features Bar */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-amber-900/40">
          
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#110502] border border-amber-900/50">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-urdu">20 منٹ گرم ترین ڈلیوری</h4>
              <p className="text-xs text-amber-400/70 font-urdu">رات 4 بجے تک پورے علاقے میں لائیو سروس</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#110502] border border-amber-900/50">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-urdu">تھرمل ہیٹ لاک پیکیجنگ</h4>
              <p className="text-xs text-amber-400/70 font-urdu">چائے ابلتی ہوئی گرم پہنچے گی — گارنٹی</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#110502] border border-amber-900/50">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-urdu">نائٹ ہاٹ لائن رابطہ</h4>
              <a href={`tel:${cafeDetails.phone1}`} className="text-xs text-amber-400 hover:underline font-sans font-bold">
                {cafeDetails.phone1}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
