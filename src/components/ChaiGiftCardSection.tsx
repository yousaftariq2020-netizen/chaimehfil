import React, { useState } from 'react';
import { Gift, Heart, Send, Sparkles, Copy, Check, Coffee, MessageCircle, RefreshCw, Share2, Award, QrCode } from 'lucide-react';
import { Language } from '../types';
import { cafeDetails } from '../data/chaiMehfilData';

interface ChaiGiftCardSectionProps {
  currentLang: Language;
}

interface CardTemplate {
  id: string;
  name: string;
  nameUrdu: string;
  themeClass: string;
  borderClass: string;
  textColor: string;
  accentBadge: string;
  bgPattern: string;
}

export const ChaiGiftCardSection: React.FC<ChaiGiftCardSectionProps> = ({ currentLang }) => {
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [amount, setAmount] = useState<number>(500);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('royal-gold');
  const [customMessage, setCustomMessage] = useState('ایک کپ گرما گرم کڑک چائے تمہارے نام! چائے محفل پر میری طرف سے دعوت قبول کرو۔ ☕');
  const [copiedCode, setCopiedCode] = useState(false);
  const [generatedVoucher, setGeneratedVoucher] = useState<string>('MEHFIL-GIFT-786');

  const presetAmounts = [300, 500, 1000, 1500, 2500, 5000];

  const templates: CardTemplate[] = [
    {
      id: 'royal-gold',
      name: 'Royal Shahi Gold',
      nameUrdu: 'شاہی چائے تحفہ',
      themeClass: 'from-[#2b1704] via-[#1c0f03] to-[#120701]',
      borderClass: 'border-amber-400',
      textColor: 'text-amber-300',
      accentBadge: '👑 Royal Heritage',
      bgPattern: 'radial-gradient(circle at 10% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 40%)'
    },
    {
      id: 'dosti-special',
      name: 'Yaari & Dosti Treat',
      nameUrdu: 'یاری و دوستی دعوت',
      themeClass: 'from-[#201018] via-[#150a10] to-[#0a0408]',
      borderClass: 'border-rose-500/60',
      textColor: 'text-rose-300',
      accentBadge: '❤️ Yaaran Di Chah',
      bgPattern: 'radial-gradient(circle at 90% 80%, rgba(244, 63, 94, 0.15) 0%, transparent 40%)'
    },
    {
      id: 'sufi-noor',
      name: 'Sufi Rooftop Vibe',
      nameUrdu: 'صوفیانہ محبت',
      themeClass: 'from-[#08181a] via-[#050f11] to-[#020708]',
      borderClass: 'border-emerald-500/60',
      textColor: 'text-emerald-300',
      accentBadge: '🪕 Sufi Mehfil',
      bgPattern: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)'
    },
    {
      id: 'jashn-birthday',
      name: 'Birthday & Celebration',
      nameUrdu: 'جشن و سالگرہ مبارک',
      themeClass: 'from-[#1f1505] via-[#140d02] to-[#080501]',
      borderClass: 'border-amber-300',
      textColor: 'text-amber-200',
      accentBadge: '🎉 Jashn-e-Mehfil',
      bgPattern: 'radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.2) 0%, transparent 45%)'
    }
  ];

  const activeTemplate = templates.find((t) => t.id === selectedTemplate) || templates[0];

  const quickWishes = [
    'ایک کپ گرما گرم کڑک چائے تمہارے نام! چائے محفل پر میری طرف سے دعوت قبول کرو۔ ☕',
    'Chai is always better when shared with best friends! Enjoy this treat on me at Chai Mehfil. 🫖',
    'Happy Birthday! Enjoy delicious Pizza, Paratha & Matka Chai at Chai Mehfil rooftop! 🎂',
    'صوفیانہ شام اور کڑک چائے کی پیالی۔ چائے محفل پر آپ کے لیے ایک دلی تحفہ! ✨'
  ];

  const handleGenerateNewCode = () => {
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const newCode = `MEHFIL-${recipientName ? recipientName.slice(0, 3).toUpperCase() : 'GIFT'}-${randomDigits}`;
    setGeneratedVoucher(newCode);
  };

  const handleSendViaWhatsApp = () => {
    const recText = recipientName ? `*Dear ${recipientName}*, ` : '';
    const senText = senderName ? `from *${senderName}*` : 'from a friend';
    const message = encodeURIComponent(
      `🎁 *CHAI MEHFIL E-GIFT CARD* 🎁\n\n${recText}You have received a Chai Mehfil Gift Voucher of *Rs. ${amount.toLocaleString()}* ${senText}!\n\n"${customMessage}"\n\n🎟️ *Voucher Code:* \`${generatedVoucher}\`\n📍 *Redeem At:* Chai Mehfil, Main Sharaqpur Road, Opposite Alrehman Garden Gate 2, Lahore.\n📞 *Hotline:* ${cafeDetails.phone1} / ${cafeDetails.phone2}\n\nShow this voucher code during dine-in or mention on WhatsApp delivery order to redeem.`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(
      `Chai Mehfil Gift Voucher: ${generatedVoucher} (Value: Rs. ${amount}) for ${recipientName || 'Friend'}. Redeem at Chai Mehfil Lahore!`
    );
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="gift-card" className="py-24 bg-[#080402] relative border-t border-amber-950/60 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold mb-3 shadow-lg">
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span>Send Chai to a Friend / چائے کا تحفہ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-50 mb-3 font-display">
            Gift a Mehfil Chai Experience
          </h2>
          <p className="text-amber-200/75 text-xs sm:text-base">
            Surprise your friend, family or colleague with an instant digital Chai & Desi Food Gift Card. Instantly shareable via WhatsApp or SMS.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Controls (lg: 7 cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#180d07] via-[#120804] to-[#0a0503] rounded-3xl border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-amber-900/40 pb-4">
              <h3 className="text-lg font-bold text-amber-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Customize Gift Card
              </h3>
              <span className="font-urdu text-sm text-amber-300">اپنا ورچوئل کارڈ تیار کریں</span>
            </div>

            {/* Recipient & Sender Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-300/80 mb-2">
                  Recipient Name (جسے بھیج رہے ہیں) *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ali, Fatima, Hamza"
                  value={recipientName}
                  onChange={(e) => {
                    setRecipientName(e.target.value);
                    handleGenerateNewCode();
                  }}
                  className="w-full bg-[#0d0603] border border-amber-900/60 rounded-xl px-4 py-3 text-sm text-amber-100 placeholder-amber-400/30 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-300/80 mb-2">
                  Your Name (بھیجنے والے کا نام)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Usman, Aisha"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full bg-[#0d0603] border border-amber-900/60 rounded-xl px-4 py-3 text-sm text-amber-100 placeholder-amber-400/30 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Select Voucher Amount */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-300/80 mb-2">
                Gift Amount (رقم کا انتخاب کریں)
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setAmount(amt)}
                    className={`py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                      amount === amt
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black border-amber-300 shadow-md scale-105'
                        : 'bg-[#100704] text-amber-200/80 border-amber-900/40 hover:bg-[#1a0c06]'
                    }`}
                  >
                    Rs. {amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Card Visual Theme Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-300/80 mb-2">
                Card Card Theme & Aesthetic (تھیم منتخب کریں)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {templates.map((tpl) => (
                  <button
                    key={tpl.id}
                    type="button"
                    onClick={() => setSelectedTemplate(tpl.id)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                      selectedTemplate === tpl.id
                        ? 'bg-[#221209] border-amber-400 shadow-lg shadow-amber-950 scale-[1.02]'
                        : 'bg-[#100704] border-amber-900/40 hover:bg-[#180d07]'
                    }`}
                  >
                    <div className="text-xs font-bold text-amber-100 line-clamp-1">{tpl.name}</div>
                    <div className="font-urdu text-[11px] text-amber-400/80 mt-0.5">{tpl.nameUrdu}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Message & Quick Wishes */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-300/80">
                  Heartfelt Message (پیغام)
                </label>
                <span className="text-[11px] text-amber-400/60 font-urdu">مبارکباد یا محبت بھرا جملہ</span>
              </div>
              <textarea
                rows={2}
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Write your personal wishes..."
                className="w-full bg-[#0d0603] border border-amber-900/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-amber-100 placeholder-amber-400/30 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />

              {/* Quick Preset Wishes */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {quickWishes.map((wish, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCustomMessage(wish)}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-[#140a05] text-amber-300/75 hover:text-amber-200 border border-amber-900/30 hover:border-amber-700 transition-colors cursor-pointer"
                  >
                    {idx === 0 ? '☕ کڑک چائے دعوت' : idx === 1 ? '🫖 Yaari Treat' : idx === 2 ? '🎂 Birthday Wish' : '✨ صوفیانہ محبت'}
                  </button>
                ))}
              </div>
            </div>

            {/* Send Buttons */}
            <div className="pt-4 border-t border-amber-900/40 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="flex-1 min-w-[200px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-emerald-950 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp to {recipientName || 'Friend'}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyCode}
                className="px-4 py-3.5 rounded-xl bg-[#221209] hover:bg-[#30180d] text-amber-200 text-xs font-bold border border-amber-800/40 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCode ? 'Copied Voucher!' : 'Copy Code'}</span>
              </button>
            </div>
          </div>

          {/* Right Live Card Preview (lg: 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Live Card Preview
              </span>
              <button
                type="button"
                onClick={handleGenerateNewCode}
                className="text-xs text-amber-300/70 hover:text-amber-200 flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>New Voucher Code</span>
              </button>
            </div>

            {/* The Virtual Gift Card */}
            <div
              className={`rounded-3xl p-6 sm:p-7 border ${activeTemplate.borderClass} bg-gradient-to-br ${activeTemplate.themeClass} shadow-2xl relative overflow-hidden transition-all duration-300`}
              style={{ backgroundImage: activeTemplate.bgPattern }}
            >
              {/* Gold Shimmer Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-amber-300 inline-block mb-1.5">
                    {activeTemplate.accentBadge}
                  </span>
                  <h4 className="text-2xl font-black text-white font-display tracking-wide">
                    CHAI MEHFIL
                  </h4>
                  <p className="font-urdu text-xs text-amber-300/80">چائے، دسترخوان اور صوفیانہ محفل</p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-amber-200/60 uppercase font-bold block">Gift Value</span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-display">
                    Rs. {amount.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Middle Section: Recipient & Note */}
              <div className="bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 mb-6 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-amber-200/60 font-medium">To:</span>
                  <span className="text-sm font-extrabold text-amber-100">
                    {recipientName || 'Dear Friend / محترم دوست'}
                  </span>
                </div>

                {senderName && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-amber-200/60 font-medium">From:</span>
                    <span className="text-xs font-bold text-amber-200">{senderName}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-white/10 text-xs text-amber-100/90 leading-relaxed font-urdu">
                  "{customMessage}"
                </div>
              </div>

              {/* Bottom Voucher Code & QR Info */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-amber-200/50 block">Redeem Voucher Code</span>
                  <span className="text-sm sm:text-base font-mono font-black text-amber-300 tracking-wider">
                    {generatedVoucher}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                    <QrCode className="w-6 h-6 text-amber-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* How to Redeem Tip */}
            <div className="bg-[#120804] rounded-2xl p-4 border border-amber-900/40 text-xs text-amber-200/70 space-y-1.5">
              <span className="font-bold text-amber-300 block flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                How to Redeem at Chai Mehfil:
              </span>
              <p>
                1. Simply show this WhatsApp card to your server when dining in on our open-air rooftop.
              </p>
              <p>
                2. Or mention the code <strong>{generatedVoucher}</strong> when placing a home delivery order across Alrehman Garden Phase 2 & Sharaqpur Road.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
