import React, { useState } from 'react';
import { Sparkles, Coffee, Heart, Check, Plus, RefreshCw, Flame, ArrowRight, Share2, Award, Zap, Moon, CloudRain, BookOpen, Users, Smile } from 'lucide-react';
import { MenuItem, Language } from '../types';
import { menuItemsData } from '../data/chaiMehfilData';

interface MoodOption {
  id: string;
  emoji: string;
  titleUrdu: string;
  titleEnglish: string;
  taglineUrdu: string;
  taglineEnglish: string;
  icon: any;
  accentColor: string;
  borderColor: string;
  bgGradient: string;
  recommendedItemIds: string[];
  poeticNoteUrdu: string;
  vibesDescription: string;
}

const moodOptions: MoodOption[] = [
  {
    id: 'tired',
    emoji: '😴',
    titleUrdu: 'شدید تھکن اور نیند',
    titleEnglish: 'Tired & Need Instant Energy',
    taglineUrdu: 'سر درد یا دن بھر کی تھکاوٹ دور کرنی ہے؟',
    taglineEnglish: 'Need a powerful kick to wake up?',
    icon: Zap,
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/60',
    bgGradient: 'from-amber-950/60 via-[#1c0d06] to-[#120703]',
    recommendedItemIds: ['c-karak-chai', 'pr-grill-paratha-roll'],
    poeticNoteUrdu: 'اک پیالی کڑک چائے کی اور ساری تھکن ہوا ہو جائے!',
    vibesDescription: 'تیز پتی، کڑک پتی اور گرما گرم لچھا پراٹھا جو سستی پل بھر میں بھگا دے۔'
  },
  {
    id: 'rainy',
    emoji: '🌧️',
    titleUrdu: 'رومانوی یا بارش کا موسم',
    titleEnglish: 'Rainy & Cozy Weather',
    taglineUrdu: 'سرد ہوا اور خوبصورت شام کا لطف',
    taglineEnglish: 'Warm vibes for chilled evenings',
    icon: CloudRain,
    accentColor: 'text-rose-400',
    borderColor: 'border-rose-500/60',
    bgGradient: 'from-rose-950/60 via-[#1c0d06] to-[#120703]',
    recommendedItemIds: ['c-matka-kulhad', 'pr-smoked-cheese-paratha'],
    poeticNoteUrdu: 'بارش ہو اور ہاتھ میں دہکتی تندوری مٹکہ چائے، اس سے بہتر کیا ہوگا؟',
    vibesDescription: 'دھوئیں دار تندوری مٹکہ چائے اور پگھلی ہوئی پنیر سے بھرا اسموکڈ پراٹھا۔'
  },
  {
    id: 'study',
    emoji: '📚',
    titleUrdu: 'پڑھائی یا رات گئے کام',
    titleEnglish: 'Late Night Study & Work',
    taglineUrdu: 'فوکس بڑھانا ہے اور رات جاگنا ہے؟',
    taglineEnglish: 'Keep the brain sharp and eyes open',
    icon: BookOpen,
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/60',
    bgGradient: 'from-emerald-950/60 via-[#1c0d06] to-[#120703]',
    recommendedItemIds: ['c-doodh-pati', 'deal-1'],
    poeticNoteUrdu: 'محنت اور رات کی خاموشی میں چائے محفل آپ کا سچا ساتھی۔',
    vibesDescription: 'خاص کڑک دودھ پتی اور کرسپی زنگر برگر جو آپ کے دماغ کو رات 4 بجے تک ایکٹیو رکھے۔'
  },
  {
    id: 'friends',
    emoji: '👥',
    titleUrdu: 'یاروں کی بیٹھک و گپ شپ',
    titleEnglish: 'Squad Hangout & Gossip',
    taglineUrdu: 'دوستوں کے ساتھ قہقہے اور لمبی محفل',
    taglineEnglish: 'Best deals for squad gatherings',
    icon: Users,
    accentColor: 'text-orange-400',
    borderColor: 'border-orange-500/60',
    bgGradient: 'from-orange-950/60 via-[#1c0d06] to-[#120703]',
    recommendedItemIds: ['deal-washi', 'c-matka-kulhad'],
    poeticNoteUrdu: 'چائے تو اک بہانہ ہے، اصل مقصد یاروں کی محفل سجانا ہے!',
    vibesDescription: 'واشی میگا ڈیل جس میں پیزا، برگر، فرائز اور ڈرنکس کے ساتھ مٹکہ چائے شامل ہے۔'
  },
  {
    id: 'sweet',
    emoji: '🤤',
    titleUrdu: 'میٹھے کی زبردست طلب',
    titleEnglish: 'Sweet Tooth Cravings',
    taglineUrdu: 'کچھ میٹھا، شاہی اور خوشبودار ہو جائے',
    taglineEnglish: 'Rich, aromatic royal sweetness',
    icon: Heart,
    accentColor: 'text-pink-400',
    borderColor: 'border-pink-500/60',
    bgGradient: 'from-pink-950/60 via-[#1c0d06] to-[#120703]',
    recommendedItemIds: ['c-doodh-pati', 'p-malai-boti'],
    poeticNoteUrdu: 'چھوٹی الائچی کی مہک اور خالص دودھ کی مٹھاس، دل خوش ہو جائے گا۔',
    vibesDescription: 'چھوٹی الائچی والی ملائی دار دودھ پتی اور اسپیشل پیزا۔'
  },
  {
    id: 'chill',
    emoji: '🌙',
    titleUrdu: 'پرسکون تنہائی و صوفی نائٹ',
    titleEnglish: 'Sufi Soul & Chill Mood',
    taglineUrdu: 'روف ٹاپ پر بیٹھ کر قوالی سننا',
    taglineEnglish: 'Peaceful rooftop vibe with live feel',
    icon: Moon,
    accentColor: 'text-amber-300',
    borderColor: 'border-amber-400/60',
    bgGradient: 'from-amber-950/60 via-[#150a04] to-[#0d0602]',
    recommendedItemIds: ['c-matka-kulhad', 'pr-malai-boti-roll'],
    poeticNoteUrdu: 'صوفی کلام کی تان اور گرم چائے کا گھونٹ، روح کو تازگی بخشے۔',
    vibesDescription: 'تندوری مٹکہ چائے اور نرم ملائی بوٹی پراٹھا رول کا شاہی کمبو۔'
  }
];

interface ChaiMoodMatcherProps {
  onAddToCart: (item: MenuItem) => void;
  currentLang?: Language;
}

export const ChaiMoodMatcher: React.FC<ChaiMoodMatcherProps> = ({ onAddToCart }) => {
  const [selectedMoodId, setSelectedMoodId] = useState<string>('tired');
  const [addedIds, setAddedIds] = useState<string[]>([]);

  const currentMood = moodOptions.find((m) => m.id === selectedMoodId) || moodOptions[0];

  // Find matching items from menu
  const recommendedItems = currentMood.recommendedItemIds
    .map((id) => menuItemsData.find((item) => item.id === id))
    .filter(Boolean) as MenuItem[];

  const handleAddCombo = () => {
    recommendedItems.forEach((item) => {
      onAddToCart(item);
      setAddedIds((prev) => [...prev, item.id]);
    });
    setTimeout(() => {
      setAddedIds([]);
    }, 2000);
  };

  const handleAddSingle = (item: MenuItem) => {
    onAddToCart(item);
    setAddedIds((prev) => [...prev, item.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== item.id));
    }, 2000);
  };

  const totalPrice = recommendedItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <section id="mood-matcher" className="py-16 sm:py-20 bg-gradient-to-b from-[#0c0502] via-[#160a04] to-[#0e0703] text-amber-100 relative overflow-hidden border-t border-amber-900/40">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>چائے موڈ میچر • Chai & Meal Matcher AI Quiz</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white font-display">
            آج آپ کا موڈ کیسا ہے؟
            <span className="block text-amber-400 text-lg sm:text-2xl font-sans mt-1">
              Select Your Mood & Get Your Perfect Chai Combo
            </span>
          </h2>

          <p className="text-amber-300/80 text-xs sm:text-sm font-urdu">
            اپنے دل کی کیفیت منتخب کریں، چائے محفل آپ کے موڈ کے مطابق بہترین کڑک چائے اور ذائقے دار جوڑی تجویز کرے گا!
          </p>
        </div>

        {/* Mood Selection Pills / Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {moodOptions.map((mood) => {
            const isSelected = mood.id === selectedMoodId;
            const MoodIcon = mood.icon;

            return (
              <button
                key={mood.id}
                id={`mood-btn-${mood.id}`}
                onClick={() => setSelectedMoodId(mood.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? `${mood.borderColor} bg-gradient-to-b ${mood.bgGradient} shadow-[0_0_25px_rgba(245,158,11,0.25)] scale-[1.03]`
                    : 'border-amber-900/50 bg-[#150a04]/80 hover:border-amber-700/60 hover:bg-[#1f0d06]'
                }`}
              >
                {/* Active Top Glow Line */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{mood.emoji}</span>
                  <MoodIcon className={`w-4 h-4 ${isSelected ? mood.accentColor : 'text-amber-600'}`} />
                </div>

                <div className="space-y-1 pt-1">
                  <div className={`text-xs sm:text-sm font-black font-urdu leading-normal ${isSelected ? 'text-white' : 'text-amber-200'}`}>
                    {mood.titleUrdu}
                  </div>
                  <div className="text-[10px] text-amber-400/80 truncate">
                    {mood.titleEnglish}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Matched Result Card */}
        <div className={`bg-gradient-to-r ${currentMood.bgGradient} border-2 ${currentMood.borderColor} rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-500`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Poetic Vibe & Mood Details */}
            <div className="lg:col-span-5 space-y-5">
              
              <div className="flex items-center gap-3.5">
                <span className="text-3xl sm:text-4xl p-2.5 rounded-2xl bg-black/50 border border-amber-500/40 shadow-md shrink-0">
                  {currentMood.emoji}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] sm:text-xs font-bold text-amber-400 px-2.5 py-0.5 rounded-md bg-amber-950/80 border border-amber-600/40 w-fit">
                    آپ کے موڈ کے لیے تجویز کردہ
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-urdu leading-relaxed">
                    {currentMood.titleUrdu}
                  </h3>
                </div>
              </div>

              {/* Poetic Quote Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0d0502]/90 border border-amber-800/60 shadow-inner space-y-2.5">
                <p className="text-xs sm:text-sm text-amber-100 font-urdu leading-loose italic">
                  "{currentMood.poeticNoteUrdu}"
                </p>
                <div className="text-[11px] sm:text-xs text-amber-400/90 font-sans font-semibold pt-2 border-t border-amber-900/40">
                  {currentMood.vibesDescription}
                </div>
              </div>

              {/* Combo Total & 1-Click Order All */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#110602]/70 p-3.5 rounded-2xl border border-amber-900/50">
                <div>
                  <div className="text-[11px] text-amber-400/90 font-urdu">مکمل کمبو کی کل قیمت:</div>
                  <div className="text-2xl font-black text-white font-sans">
                    Rs. {totalPrice}/-
                  </div>
                </div>

                <button
                  id="add-full-mood-combo-btn"
                  onClick={handleAddCombo}
                  className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-black text-xs sm:text-sm shadow-xl shadow-amber-950 flex items-center justify-center gap-2 transition-all hover:scale-[1.03] active:scale-95 cursor-pointer"
                >
                  <Coffee className="w-4 h-4" />
                  <span className="font-bold">پورا کمبو کارٹ میں ایڈ کریں</span>
                </button>
              </div>

            </div>

            {/* Right: The 2 Recommended Food & Chai Items */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedItems.map((item) => {
                  const isAdded = addedIds.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      className="bg-[#140804]/95 border border-amber-900/60 hover:border-amber-500/70 rounded-2xl p-4 shadow-xl flex flex-col justify-between transition-all group"
                    >
                      <div>
                        {/* Item Image with Badge */}
                        <div className="relative h-32 rounded-xl overflow-hidden mb-3 border border-amber-950">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-amber-300 border border-amber-500/40">
                            {item.preparationTime || '5 Mins'}
                          </div>
                          {item.badge && (
                            <div className="absolute bottom-2 left-2 bg-gradient-to-r from-amber-600 to-orange-600 px-2 py-0.5 rounded text-[9px] font-black text-black">
                              {item.badge}
                            </div>
                          )}
                        </div>

                        {/* Title & Description */}
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h4 className="text-sm sm:text-base font-black text-white font-urdu leading-normal">
                            {item.nameUrdu || item.name}
                          </h4>
                          <span className="text-xs font-black text-amber-400 font-sans shrink-0 bg-black/50 px-2 py-0.5 rounded-lg border border-amber-500/30">
                            Rs. {item.price}
                          </span>
                        </div>

                        <p className="text-[11px] sm:text-xs text-amber-200/80 leading-relaxed font-urdu mb-3 line-clamp-2">
                          {item.descriptionUrdu || item.description}
                        </p>
                      </div>

                      {/* Add Button */}
                      <button
                        onClick={() => handleAddSingle(item)}
                        className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#281308] hover:bg-amber-600 text-amber-200 hover:text-black font-black border border-amber-700/50 hover:border-amber-400 shadow-md'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>شامل ہو گیا (Added)</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>آرڈر میں شامل کریں</span>
                          </>
                        )}
                      </button>

                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
