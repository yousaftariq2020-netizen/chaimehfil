import React, { useState } from 'react';
import { Star, MessageSquare, Heart, ShieldCheck, UserCheck, Coffee, CheckCircle, Send, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  commentUrdu: string;
  favoriteItem: string;
  verified: boolean;
  likes: number;
  avatarBg: string;
}

const initialReviews: Review[] = [
  {
    id: 'rev-1',
    name: 'سردار عثمان خان (Usman Khan)',
    location: 'الرحمٰن گارڈن فیز 2',
    rating: 5,
    date: 'کل رات (Yesterday)',
    commentUrdu: 'لاہور میں اصل کڑک دودھ پتی اور ملائی مار کے چائے کا اگر کوئی ٹھکانہ ہے تو وہ صرف چائے محفل ہے۔ رات 2 بجے روف ٹاپ پر قوالی کی آواز اور گرم پراٹھا کمال تھا۔',
    favoriteItem: 'خاص کڑک دودھ پتی + چکن چیز پراٹھا',
    verified: true,
    likes: 38,
    avatarBg: 'from-amber-600 to-amber-800'
  },
  {
    id: 'rev-2',
    name: 'حارث رضا اور یار بیلی (Haris & Friends)',
    location: 'شارق پور روڈ',
    rating: 5,
    date: '2 دن پہلے',
    commentUrdu: 'ہم دوستوں کا ہر ویک اینڈ کا اڈا اب یہی بن چکا ہے۔ واشی ڈیل 2 میں جو مٹکہ چائے اور پیزا رول ملتے ہیں، قیمت بھی مناسب اور ذائقہ بھی 10/10!',
    favoriteItem: 'واشی ڈیل 2 + زعفرانی مٹکہ چائے',
    verified: true,
    likes: 27,
    avatarBg: 'from-orange-600 to-red-800'
  },
  {
    id: 'rev-3',
    name: 'مریم فاطمہ اور فیملی (Maryam Fatima)',
    location: 'لاہور کینٹ',
    rating: 5,
    date: 'پچھلے ہفتے',
    commentUrdu: 'فیملی کے لیے انتہائی پرسکون اور محفوظ ماحول۔ روف ٹاپ پر بیٹھنے کا انتظام بہت زبردست ہے، بچوں نے نوٹیلا پراٹھا بہت پسند کیا۔',
    favoriteItem: 'کشمیری گلابی چائے + نوٹیلا پراٹھا',
    verified: true,
    likes: 42,
    avatarBg: 'from-rose-600 to-amber-800'
  },
  {
    id: 'rev-4',
    name: 'بلال طارق (Bilal Tariq - Software Engineer)',
    location: 'ڈیفنس روڈ / ورک فرام کیفے',
    rating: 5,
    date: '3 دن پہلے',
    commentUrdu: 'رات گئے لیپ ٹاپ پر کام کرنے اور دوستوں سے ملنے کے لیے بہترین کیفے۔ تیز رفتار وائی فائی اور لاجواب کوئلہ کڑاہی۔',
    favoriteItem: 'گڑ والی دیسی چائے + چکن تکہ بوٹی',
    verified: true,
    likes: 19,
    avatarBg: 'from-emerald-700 to-teal-900'
  }
];

interface CustomerReviewsSectionProps {
  currentLang?: Language;
}

export const CustomerReviewsSection: React.FC<CustomerReviewsSectionProps> = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [likedReviews, setLikedReviews] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  
  // New Review Form State
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [favoriteItem, setFavoriteItem] = useState('خاص کڑک دودھ پتی');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleLike = (id: string) => {
    if (likedReviews.includes(id)) {
      setReviews(reviews.map(r => r.id === id ? { ...r, likes: r.likes - 1 } : r));
      setLikedReviews(likedReviews.filter(i => i !== id));
    } else {
      setReviews(reviews.map(r => r.id === id ? { ...r, likes: r.likes + 1 } : r));
      setLikedReviews([...likedReviews, id]);
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      location: location.trim() || 'لاہور کسٹمر',
      rating,
      date: 'ابھی ابھی (Just now)',
      commentUrdu: comment.trim(),
      favoriteItem: favoriteItem.trim(),
      verified: true,
      likes: 1,
      avatarBg: 'from-amber-600 to-orange-700'
    };

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowModal(false);
      setName('');
      setLocation('');
      setComment('');
    }, 1800);
  };

  return (
    <section id="reviews-section" className="py-16 sm:py-20 bg-gradient-to-b from-[#0e0704] via-[#150a05] to-[#0d0603] text-amber-100 relative overflow-hidden border-t border-amber-900/40">
      
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Stats */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>کسٹمرز کے تاثرات اور ریویوز • Verified Google & Dine-In Ratings</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white font-display">
              محفل کے چاہنے والوں کی رائے
              <span className="block text-amber-400 text-lg sm:text-2xl font-sans mt-1">
                What Lahore Says About Chai Mehfil
              </span>
            </h2>

            <p className="text-amber-300/75 text-xs sm:text-sm max-w-xl">
              ہزاروں مطمئن فیملیز اور دوستوں کے حقیقی تاثرات۔ ہر چسکا، ہر پراٹھا اور ہر محفل یادگار!
            </p>
          </div>

          {/* Aggregate Rating Badge & Write Review CTA */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4">
            
            {/* Google Rating Counter */}
            <div className="bg-[#1c0d06] border border-amber-800/60 rounded-2xl p-3 sm:p-4 flex items-center gap-3 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex flex-col items-center justify-center text-amber-300 font-black">
                <span className="text-lg leading-none">4.9</span>
                <div className="flex text-[8px] text-amber-400 mt-0.5">
                  {'★★★★★'}
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Google & Live Verified</span>
                </div>
                <div className="text-[11px] text-amber-400/75">
                  500+ سے زائد خوش گوار ریویوز
                </div>
              </div>
            </div>

            {/* Write Review Button */}
            <button
              id="write-review-btn"
              onClick={() => setShowModal(true)}
              className="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-black text-xs sm:text-sm shadow-xl shadow-amber-950 flex items-center gap-2 transition-all hover:scale-[1.03] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>اپنا ریویو شامل کریں (Write Review)</span>
            </button>

          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-gradient-to-b from-[#1a0c06] via-[#140804] to-[#1a0c06] border border-amber-900/60 rounded-3xl p-5 shadow-xl hover:border-amber-500/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top User Info & Stars */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${rev.avatarBg} text-amber-100 font-black text-sm flex items-center justify-center border border-amber-400/40 shadow-inner`}>
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white line-clamp-1 flex items-center gap-1">
                        <span>{rev.name}</span>
                        {rev.verified && <UserCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                      </div>
                      <div className="text-[10px] text-amber-400/70">{rev.location}</div>
                    </div>
                  </div>

                  <div className="text-[10px] text-amber-500/60 shrink-0">
                    {rev.date}
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-700'}`}
                    />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-xs text-amber-200/90 leading-relaxed font-urdu font-medium mb-3">
                  "{rev.commentUrdu}"
                </p>
              </div>

              {/* Favorite Item Tag & Like Footer */}
              <div className="pt-3 border-t border-amber-900/40 mt-2 space-y-2">
                <div className="flex items-center gap-1.5 text-[10px] text-amber-400/80 bg-[#251208] px-2.5 py-1 rounded-lg border border-amber-800/30">
                  <Coffee className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate">پسندیدہ: <strong>{rev.favoriteItem}</strong></span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-amber-300/70 pt-1">
                  <span className="text-[10px] text-emerald-400/90 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> تصدیق شدہ کسٹمر
                  </span>

                  <button
                    onClick={() => handleLike(rev.id)}
                    className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition-colors ${
                      likedReviews.includes(rev.id)
                        ? 'bg-rose-950/80 text-rose-300 font-bold border border-rose-800/50'
                        : 'hover:bg-[#2c1308] text-amber-400/70'
                    }`}
                  >
                    <Heart className={`w-3 h-3 ${likedReviews.includes(rev.id) ? 'text-rose-400 fill-rose-400' : ''}`} />
                    <span>{rev.likes}</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Add Review Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-lg bg-[#140804] border-2 border-amber-500/60 rounded-3xl p-6 sm:p-7 shadow-[0_0_50px_rgba(217,119,6,0.3)] text-amber-100 my-auto">
            
            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white font-urdu">بہت شکریہ! آپ کا ریویو شامل ہو گیا ہے</h3>
                <p className="text-xs text-amber-300/80">آپ کی محبت ہی چائے محفل کی اصل پہچان ہے۔</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-5 border-b border-amber-900/60 pb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white font-display">
                      اپنا تجربہ شیئر کریں (Write Review)
                    </h3>
                    <p className="text-xs text-amber-300/75 font-urdu">
                      چائے محفل میں آپ کا کیسا تجربہ رہا؟
                    </p>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-amber-400 hover:text-amber-200 text-lg p-1 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
                  {/* Rating Selector */}
                  <div>
                    <label className="block text-amber-300 font-bold mb-1.5">
                      اسٹار ریٹنگ منتخب کریں (Select Rating):
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-1 hover:scale-125 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-7 h-7 ${
                              star <= rating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-zinc-700'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-amber-300 ml-2">
                        {rating === 5 ? '⭐⭐⭐⭐⭐ لاجواب (5/5)' : `${rating}/5 Stars`}
                      </span>
                    </div>
                  </div>

                  {/* Name & Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-amber-300 font-bold mb-1">
                        آپ کا نام (Your Name)*:
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="مثلاً: احمد رضا"
                        className="w-full bg-[#1c0d06] border border-amber-800/50 rounded-xl px-3 py-2 text-xs text-amber-100 placeholder-amber-700 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-amber-300 font-bold mb-1">
                        علاقہ / سوسائٹی (Area / City):
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="مثلاً: الرحمٰن گارڈن فیز 2"
                        className="w-full bg-[#1c0d06] border border-amber-800/50 rounded-xl px-3 py-2 text-xs text-amber-100 placeholder-amber-700 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Favorite Item */}
                  <div>
                    <label className="block text-amber-300 font-bold mb-1">
                      آپ کی سب سے پسندیدہ آئٹم (Favorite Item):
                    </label>
                    <input
                      type="text"
                      value={favoriteItem}
                      onChange={(e) => setFavoriteItem(e.target.value)}
                      placeholder="مثلاً: کڑک چائے، چکن چیز پراٹھا، نوٹیلا پراٹھا"
                      className="w-full bg-[#1c0d06] border border-amber-800/50 rounded-xl px-3 py-2 text-xs text-amber-100 placeholder-amber-700 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-amber-300 font-bold mb-1">
                      آپ کا تفصیلی تبصرہ (Your Feedback / Review)*:
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="چائے، بیٹھک اور ماحول کے بارے میں اپنی رائے لکھیں..."
                      className="w-full bg-[#1c0d06] border border-amber-800/50 rounded-xl px-3 py-2 text-xs text-amber-100 placeholder-amber-700 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 py-2.5 rounded-xl bg-[#200e06] text-amber-300 font-bold hover:bg-[#2c1308] border border-amber-800/40 cursor-pointer"
                    >
                      بند کریں (Cancel)
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-black font-black hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>ریویو پوسٹ کریں (Submit)</span>
                    </button>
                  </div>
                </form>
              </>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
