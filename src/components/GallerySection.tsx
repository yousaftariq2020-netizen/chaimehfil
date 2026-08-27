import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, X, Eye, Flame, Tag } from 'lucide-react';
import { GalleryItem, Language } from '../types';
import { galleryData } from '../data/chaiMehfilData';
import { translations } from '../data/translations';

interface GallerySectionProps {
  currentLang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const t = translations[currentLang];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'posters', label: '🔥 Official Posters & Cards' },
    { id: 'ambience', label: 'Rooftop Ambience' },
    { id: 'qawwali', label: 'Live Qawwali' },
    { id: 'food', label: 'Chai & Food' },
    { id: 'crowd', label: 'Mehfil Vibes' },
  ];

  const filteredGallery = selectedCategory === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-[#0a0604] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-semibold mb-3 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Manzar-e-Mehfil & Official Cards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-50 mb-3 font-display">
            {t.galleryTitle}
          </h2>
          <p className="text-amber-200/70 text-sm sm:text-base">
            {t.gallerySubtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-950 font-bold border border-amber-400/40'
                    : 'bg-[#180e08] text-amber-200/70 hover:text-amber-100 hover:bg-[#28150a] border border-amber-900/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className={`group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 shadow-xl ${
                item.isOfficialPoster
                  ? 'border-amber-500/70 bg-[#1c0f08]'
                  : 'border-amber-900/40 hover:border-amber-500 bg-[#150d08]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-85 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* View Overlay Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-amber-500/40 shadow-lg">
                <Eye className="w-4 h-4" />
              </div>

              {item.isOfficialPoster && (
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-amber-500 text-black font-extrabold text-[10px] uppercase shadow-md flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-black" />
                  <span>Official Card</span>
                </div>
              )}

              {/* Caption Card */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="font-urdu text-xs text-amber-300/80 mt-0.5">
                  {item.titleUrdu}
                </p>
                <p className="text-xs text-amber-200/70 mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#140c07] rounded-3xl overflow-hidden border border-amber-600/60 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 text-amber-200 hover:text-white border border-amber-600/50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-6 bg-[#180e08]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-amber-100 font-display">
                    {activeImage.title}
                  </h3>
                  <p className="font-urdu text-sm text-amber-300">
                    {activeImage.titleUrdu}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-600/30 border border-amber-500/40 text-amber-300 text-xs font-semibold capitalize">
                  {activeImage.category}
                </span>
              </div>
              <p className="text-sm text-amber-200/80 mt-2">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
