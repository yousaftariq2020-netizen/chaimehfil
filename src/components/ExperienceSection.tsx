import React, { useState } from 'react';
import { Coffee, Music, Moon, Flame, Sparkles, Award, ShieldCheck, Heart, Volume2, VolumeX, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { cafeDetails } from '../data/chaiMehfilData';

interface ExperienceSectionProps {
  currentLang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentLang }) => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'doodh-patti',
      icon: Coffee,
      title: 'Artisanal Matka & Doodh Patti',
      titleUrdu: 'خالص کڑھی ہوئی مٹکہ چائے',
      subtitle: 'Slow-brewed on live coals with pure buffalo milk, green cardamom & saffron essence.',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      tag: '100% Pure Dairy Milk',
      features: [
        'Clay pot (Kulhad) natural earthy aroma',
        'Simmered for 20+ minutes for velvety froth',
        'Kashmiri Pink Chai with roasted pistachios & almonds',
        'Traditional Gur (Jaggery) Chai on demand'
      ]
    },
    {
      id: 'rooftop',
      icon: Moon,
      title: 'Moonlit Open-Air Rooftop',
      titleUrdu: 'کھلا آسمان اور چھت کی پُرسکون بیٹھک',
      subtitle: 'Lahore’s signature breezy open rooftop with traditional charpayis and cozy family lounge couches.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      tag: 'Panoramic Night Sky',
      features: [
        'Scenic open-air skyline view',
        'Private VIP cabanas for families & birthday gatherings',
        'Warm ambient fairy lights & traditional lanterns',
        'Open all night until 4:00 AM'
      ]
    },
    {
      id: 'qawwali',
      icon: Music,
      title: 'Live Sufi & Acoustic Qawwali',
      titleUrdu: 'صوفیانہ کلام اور جھومتی قوالی',
      subtitle: 'Immerse your senses every Friday, Saturday & Sunday in timeless poetry and classical harmonies.',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      tag: 'Weekend Soul Nights',
      features: [
        'Authentic Ustad Qawwals with harmonium & tabla',
        'Nusrat, Sabri Brothers & Bulleh Shah tributes',
        'Family-safe spiritual evening vibe',
        'Complimentary seating for all diners'
      ]
    },
    {
      id: 'kitchen',
      icon: Flame,
      title: 'Live Sizzling Desi Dastarkhwan',
      titleUrdu: 'گرما گرم پراٹھے اور میگا واشی ڈیلز',
      subtitle: 'Crispy lachha parathas, stuffed chicken cheese fillings, handcrafted stone-oven pizzas & burgers.',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
      tag: 'Fresh Made-to-Order',
      features: [
        'Signature Mega Washi Deal (Pizza + Burgers + Paratha)',
        'Stone-baked large specialty pizzas',
        'Crunchy zinger burgers with secret herbal dips',
        'Pure desi ghee preparation available'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#090503] via-[#110905] to-[#090503] relative border-t border-amber-500/20 overflow-hidden">
      {/* Subtle Gold Dust / Ambient Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-950/90 to-[#1a0f08] border border-amber-500/40 text-amber-300 text-xs font-extrabold tracking-wider uppercase mb-4 shadow-xl">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>The Chai Mehfil Royal Experience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-300 font-display mb-4 tracking-tight">
            روایت، ذائقہ اور پرسکون محفل
          </h2>

          <p className="text-amber-200/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From the crackle of burning charcoal to the soulful echoes of live harmonium, every moment at Chai Mehfil is crafted to give you an unforgettable royal evening.
          </p>
        </div>

        {/* Pillars Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`relative rounded-3xl p-6 transition-all duration-300 cursor-pointer border flex flex-col justify-between group overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-b from-[#22130b] to-[#140b06] border-amber-400 shadow-2xl shadow-amber-950/80 scale-[1.02]'
                    : 'bg-[#120a06]/80 hover:bg-[#1a0e08] border-amber-900/40 hover:border-amber-600/50'
                }`}
              >
                {/* Background Corner Glow */}
                {isActive && (
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-amber-500/20 rounded-full blur-xl pointer-events-none" />
                )}

                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-950'
                          : 'bg-amber-950/80 border border-amber-800/40 text-amber-400 group-hover:text-amber-200'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-950/90 text-amber-300 border border-amber-800/50 whitespace-nowrap">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-amber-100 font-display mb-1 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-urdu text-sm text-amber-300/90 mb-2">
                    {pillar.titleUrdu}
                  </p>
                  <p className="text-xs text-amber-200/70 leading-relaxed">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-amber-900/40 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>Explore Details</span>
                  <span className="text-amber-500 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Showcase Banner */}
        <div className="bg-gradient-to-br from-[#1b0e08] via-[#150b06] to-[#0d0704] rounded-3xl border border-amber-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Featured Signature Craft</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-amber-100 font-display">
                  {pillars[activePillar].title}
                </h3>
                <p className="font-urdu text-xl sm:text-2xl text-amber-300 mt-1">
                  {pillars[activePillar].titleUrdu}
                </p>
              </div>

              <p className="text-sm sm:text-base text-amber-200/80 leading-relaxed">
                {pillars[activePillar].subtitle}
              </p>

              {/* Bullet Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {pillars[activePillar].features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-black/40 border border-amber-900/40">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-amber-100 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="#menu"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-950 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Taste This Today</span>
                </a>
                <a
                  href="#reserve"
                  className="px-5 py-3 rounded-xl bg-[#23120a] hover:bg-[#32190e] text-amber-200 font-bold text-xs sm:text-sm border border-amber-700/50 transition-all cursor-pointer"
                >
                  Book Rooftop Table
                </a>
              </div>
            </div>

            {/* Right Image Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl h-72 sm:h-80 group">
                <img
                  src={pillars[activePillar].image}
                  alt={pillars[activePillar].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-amber-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-amber-200">Chai Mehfil Hallmark</span>
                  </div>
                  <span className="text-[11px] font-bold text-amber-300 bg-amber-950 px-2.5 py-1 rounded-lg border border-amber-800/40">
                    Lahore's Pride
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
