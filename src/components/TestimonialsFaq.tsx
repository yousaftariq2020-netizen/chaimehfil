import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, MessageSquare, HelpCircle, Heart, Quote } from 'lucide-react';
import { Language } from '../types';
import { reviewsData } from '../data/chaiMehfilData';
import { translations } from '../data/translations';

interface TestimonialsFaqProps {
  currentLang: Language;
}

export const TestimonialsFaq: React.FC<TestimonialsFaqProps> = ({ currentLang }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const t = translations[currentLang];

  const faqs = [
    {
      q: "What are the cafe opening hours?",
      qUrdu: "چائے محفل کے اوقات کیا ہیں؟",
      a: "We are open every single day from 5:00 PM in the evening until 4:00 AM late night (Sehri times during Ramadan). Late-night chai sessions and piping hot parathas are served throughout!"
    },
    {
      q: "On which days is Live Qawwali held?",
      qUrdu: "لائیو قوالی کس دن منعقد ہوتی ہے؟",
      a: "Live Qawwali and Sufi Mehfils are hosted every Friday, Saturday, and Sunday night starting from 9:30 PM onwards. Entry is completely free with your table dining reservation."
    },
    {
      q: "Is there a dedicated family section?",
      qUrdu: "کیا فیملیز کے لیے علیحدہ اور پرسکون انتظام ہے؟",
      a: "Yes! We have an exclusive, spacious Family Pavilion with comfortable cane sofas, heaters during chilly nights, and a calm atmosphere away from heavy crowds."
    },
    {
      q: "Is valet parking available?",
      qUrdu: "کیا پارکنگ کی سہولت موجود ہے؟",
      a: "Yes, dedicated valet parking and spacious secure roadside parking is available with security guards on duty all night."
    },
    {
      q: "Can we celebrate birthdays or private events at Chai Mehfil?",
      qUrdu: "کیا سالگرہ یا پرائیویٹ ایونٹس منائے جا سکتے ہیں؟",
      a: "Absolutely! We provide customized decor, reserved rooftop zones, fairy-light setups, and customized dessert platters for birthdays, anniversaries, and reunions."
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-[#090503] relative border-t border-amber-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Customer Reviews Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-800/50 text-amber-300 text-xs font-semibold mb-3">
              <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Dilon Mein Basi Mehfil</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-50 mb-3 font-display">
              {t.reviewsTitle}
            </h2>
            <p className="text-amber-200/70 text-sm sm:text-base">
              {t.reviewsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsData.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#140c07] rounded-3xl p-6 border border-amber-900/40 hover:border-amber-600/50 transition-all flex flex-col justify-between shadow-xl relative"
              >
                <Quote className="w-8 h-8 text-amber-700/30 absolute top-5 right-5 pointer-events-none" />

                <div>
                  {/* Star Ratings */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-amber-100/90 text-sm italic leading-relaxed mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-900/30 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-amber-100">{rev.name}</h4>
                    <span className="text-[11px] text-amber-400/60">{rev.city}</span>
                  </div>
                  <span className="text-[11px] text-amber-500/40">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div id="faq" className="max-w-3xl mx-auto pt-10 border-t border-amber-900/40">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-800/50 text-amber-300 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Aapke Sawalat</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-amber-50 font-display">
              Frequently Asked Questions
            </h3>
            <p className="font-urdu text-base text-amber-300 mt-1">
              اکثر پوچھے جانے والے سوالات کے جوابات
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#140c07] rounded-2xl border border-amber-900/40 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#1f120a] transition-colors"
                  >
                    <div>
                      <span className="text-sm sm:text-base font-bold text-amber-100 block">
                        {faq.q}
                      </span>
                      <span className="font-urdu text-xs text-amber-300/80 block mt-0.5">
                        {faq.qUrdu}
                      </span>
                    </div>
                    <div className="p-1 rounded-lg bg-amber-950 text-amber-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-amber-200/80 leading-relaxed border-t border-amber-950/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
