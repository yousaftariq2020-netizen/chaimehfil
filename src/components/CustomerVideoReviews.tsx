import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, Star, Sparkles, CheckCircle, Share2, X, MessageCircle, UtensilsCrossed, Calendar } from 'lucide-react';
import { CustomerVideoReview, Language } from '../types';
import { customerVideoReviewsData, cafeDetails } from '../data/chaiMehfilData';

interface CustomerVideoReviewsProps {
  currentLang: Language;
  onOpenOrderModal?: () => void;
  onOpenReserveModal?: () => void;
}

export const CustomerVideoReviews: React.FC<CustomerVideoReviewsProps> = ({
  currentLang,
  onOpenOrderModal,
  onOpenReserveModal,
}) => {
  const [activeVideo, setActiveVideo] = useState<CustomerVideoReview | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>(() =>
    customerVideoReviewsData.reduce((acc, v) => ({ ...acc, [v.id]: v.likesCount }), {})
  );

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleToggleLike = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedMap((prev) => {
      const isLiked = !!prev[id];
      const newLiked = !isLiked;
      setLikeCounts((c) => ({
        ...c,
        [id]: (c[id] || 0) + (newLiked ? 1 : -1),
      }));
      return { ...prev, [id]: newLiked };
    });
  };

  const handleOpenVideo = (rev: CustomerVideoReview) => {
    setActiveVideo(rev);
    setIsPlaying(true);
    setIsMuted(false);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="video-reviews" className="py-20 bg-[#090503] relative border-t border-amber-950/60 overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold mb-3 shadow-lg">
            <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Customer Video Vlogs & Mehfil Stories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-50 mb-3 font-display">
            Live Mehfil Clips & Food Reviews
          </h2>
          <p className="text-amber-200/75 text-xs sm:text-base">
            Watch real customers tasting our Piping Matka Chai, Washi Mega Deals, and enjoying soul-stirring live Qawwali nights on the rooftop.
          </p>
          <span className="font-urdu text-amber-400/90 text-sm block mt-1">
            ہمارے کسٹمرز کے حقیقی ویڈیو ریویوز اور صوفیانہ لمحات
          </span>
        </div>

        {/* Video Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerVideoReviewsData.map((rev) => {
            const isLiked = !!likedMap[rev.id];
            const currentLikes = likeCounts[rev.id] || rev.likesCount;

            return (
              <div
                key={rev.id}
                onClick={() => handleOpenVideo(rev)}
                className="group relative rounded-3xl overflow-hidden bg-[#140a05] border border-amber-900/40 hover:border-amber-500/70 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between aspect-[9/14] sm:aspect-[9/15]"
              >
                {/* Poster Image with Dark Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={rev.posterImage}
                    alt={rev.tagline}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />
                </div>

                {/* Top Badges: Category & Duration */}
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/30 text-[10px] font-black uppercase tracking-wider text-amber-300">
                    {rev.category === 'deals' ? '🔥 Food Deal' : rev.category === 'qawwali' ? '🪕 Live Qawwali' : rev.category === 'family' ? '👨‍👩‍👧‍👦 Family' : '☕ Matka Chai'}
                  </span>
                  
                  <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/10">
                    {rev.duration}
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500/90 text-black flex items-center justify-center shadow-2xl shadow-amber-950 transform group-hover:scale-110 group-hover:bg-amber-400 transition-all">
                    <Play className="w-6 h-6 fill-black ml-1" />
                  </div>
                </div>

                {/* Bottom Content Info */}
                <div className="relative z-10 p-4 sm:p-5 space-y-2 bg-gradient-to-t from-black via-black/80 to-transparent">
                  {/* Rating Stars & Customer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified Dine-in</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-black text-white line-clamp-1 group-hover:text-amber-300 transition-colors font-display">
                    {rev.tagline}
                  </h3>
                  <p className="text-[11px] text-amber-300/80 font-urdu line-clamp-1">
                    {rev.taglineUrdu}
                  </p>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-amber-200/70">
                    <span className="truncate font-semibold text-amber-100">{rev.customerName}</span>
                    <button
                      onClick={(e) => handleToggleLike(rev.id, e)}
                      className="flex items-center gap-1 text-rose-400 hover:text-rose-300 transition-colors"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                      <span className="text-[11px] font-mono">{currentLikes}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Reel Interactive Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg bg-[#120804] border border-amber-500/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
              
              {/* Top Header Controls */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-amber-200 truncate max-w-[180px]">
                    {activeVideo.customerName}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-amber-300 border border-white/10 cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={handleCloseVideo}
                    className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-rose-400 border border-white/10 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Video Player Container */}
              <div className="relative aspect-[9/14] w-full bg-black flex items-center justify-center overflow-hidden">
                <video
                  ref={videoRef}
                  src={activeVideo.videoUrl}
                  poster={activeVideo.posterImage}
                  autoPlay
                  loop
                  playsInline
                  muted={isMuted}
                  onClick={togglePlay}
                  className="w-full h-full object-cover cursor-pointer"
                />

                {/* Center Play/Pause indicator on click */}
                {!isPlaying && (
                  <div 
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-amber-500/90 flex items-center justify-center shadow-xl">
                      <Play className="w-8 h-8 fill-black ml-1" />
                    </div>
                  </div>
                )}

                {/* Bottom Overlay inside Video */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent space-y-3 z-10">
                  <div>
                    <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-0.5">
                      {activeVideo.dishReviewed}
                    </span>
                    <p className="text-xs sm:text-sm text-white italic font-medium leading-relaxed">
                      {activeVideo.feedbackQuote}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/15">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleToggleLike(activeVideo.id, e)}
                        className="px-3 py-1.5 rounded-full bg-black/60 border border-white/20 text-rose-400 flex items-center gap-1.5 text-xs font-bold"
                      >
                        <Heart className={`w-4 h-4 ${likedMap[activeVideo.id] ? 'fill-rose-500 text-rose-500' : ''}`} />
                        <span>{likeCounts[activeVideo.id] || activeVideo.likesCount}</span>
                      </button>
                      
                      <span className="text-[11px] text-amber-200/80 bg-black/60 px-2.5 py-1.5 rounded-full border border-white/10">
                        📍 {activeVideo.location}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/${cafeDetails.whatsappNumber}?text=${encodeURIComponent(`Salam! I watched the video review of ${activeVideo.dishReviewed} at Chai Mehfil and want to order/book table!`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order This</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
