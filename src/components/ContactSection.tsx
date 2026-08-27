import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, Navigation, Instagram, Facebook, Flame, Copy, Check, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { cafeDetails } from '../data/chaiMehfilData';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const t = translations[currentLang];

  const handleCopyPhone = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedPhone(num);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const fullMsg = `*☕ CHAI MEHFIL INQUIRY* ☕\n*Name:* ${name}\n*Phone:* ${phone}\n*Message:* ${message || 'Inquiring about home delivery & rooftop seating'}\n_Location: Opposite Alrehman Garden Phase II, Lahore_`;
    window.open(`https://wa.me/${cafeDetails.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`, '_blank');
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#080503] relative border-t border-amber-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-semibold mb-3 shadow-lg">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Pata Aur Rabta / پتہ اور رابطہ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-50 mb-3 font-display">
            Visit Chai Mehfil Tonight
          </h2>
          <p className="font-urdu text-2xl text-amber-300">
            آپ کی محفل، آپ کی چائے اور دیسی باتیں
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
          {/* Location & Details Card */}
          <div className="bg-[#130b06] rounded-3xl p-6 sm:p-8 border border-amber-900/50 shadow-2xl space-y-5">
            <div>
              <h3 className="text-xl font-bold text-amber-100 font-display mb-1">
                Official Location & Delivery Lines
              </h3>
              <p className="text-xs text-amber-300/70">
                Opposite Alrehman Garden Phase II, Gate No. 2, Lahore
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#090503] border border-amber-900/40">
              <div className="p-2.5 rounded-xl bg-amber-600/20 text-amber-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-amber-100">{cafeDetails.address}</h4>
                <p className="font-urdu text-xs text-amber-300/80 mt-1">{cafeDetails.addressUrdu}</p>
                <p className="text-xs text-amber-400/70 mt-1">Main Sharaqpur Road, Lahore (Free Delivery within Area)</p>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#090503] border border-amber-900/40">
              <div className="p-2.5 rounded-xl bg-amber-600/20 text-amber-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-100">{cafeDetails.timings}</h4>
                <p className="font-urdu text-xs text-amber-300/80 mt-0.5">روزانہ شام 5:00 بجے سے صبح 4:00 بجے تک</p>
                <p className="text-xs text-amber-200/60 mt-1">Late Night Karak Chai, Mega Deals, Parathas & Qawwali</p>
              </div>
            </div>

            {/* Phone & Delivery Hotlines */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#090503] border border-amber-900/40">
              <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${cafeDetails.phone1.replace(/\s/g, '')}`}
                    className="text-sm font-bold text-amber-300 hover:text-amber-100 underline decoration-amber-500/50"
                  >
                    {cafeDetails.phone1}
                  </a>
                  <button
                    onClick={() => handleCopyPhone(cafeDetails.phone1)}
                    className="text-[11px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 hover:bg-amber-900 flex items-center gap-1 border border-amber-800/40 cursor-pointer"
                  >
                    {copiedPhone === cafeDetails.phone1 ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone === cafeDetails.phone1 ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-1.5">
                  <a
                    href={`tel:${cafeDetails.phone2.replace(/\s/g, '')}`}
                    className="text-sm font-bold text-amber-300 hover:text-amber-100 underline decoration-amber-500/50"
                  >
                    {cafeDetails.phone2}
                  </a>
                  <button
                    onClick={() => handleCopyPhone(cafeDetails.phone2)}
                    className="text-[11px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 hover:bg-amber-900 flex items-center gap-1 border border-amber-800/40 cursor-pointer"
                  >
                    {copiedPhone === cafeDetails.phone2 ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone === cafeDetails.phone2 ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="text-xs text-emerald-400 mt-1.5">Free Home Delivery & Table Booking Hotlines</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://maps.google.com/?q=Alrehman+Garden+Phase+2+Sharaqpur+Road+Lahore"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#201007] hover:bg-[#2e1509] text-amber-200 text-xs font-semibold border border-amber-700/50 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`https://wa.me/${cafeDetails.whatsappNumber}?text=Assalam%20o%20Alaikum%20Chai%20Mehfil`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-950 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Helpline</span>
              </a>
            </div>
          </div>

          {/* Direct Inquiry Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#130b06] rounded-3xl p-6 sm:p-8 border border-amber-900/50 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-amber-100 font-display mb-1">
              Send Us a Direct Message
            </h3>
            <p className="text-xs text-amber-300/70 mb-6">
              Inquire about home delivery to your colony, book rooftop tables for birthday/events, or order custom catering.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Daniyal Khan"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090503] border border-amber-900/50 text-amber-100 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1">WhatsApp / Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0321-xxxxxxx"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090503] border border-amber-900/50 text-amber-100 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1">Message / Inquiry Details</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about free home delivery to Alrehman Garden Phase 1/2/3, Washi deal order, or weekend table booking..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090503] border border-amber-900/50 text-amber-100 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-950 transition-all cursor-pointer border border-amber-400/30"
            >
              <Send className="w-4 h-4" />
              <span>Send Message to {cafeDetails.phone1}</span>
            </button>

            {isSent && (
              <div className="mt-3 p-3 rounded-xl bg-emerald-950 text-emerald-300 text-xs text-center flex items-center justify-center gap-1.5 border border-emerald-500/30">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Redirecting to WhatsApp with your inquiry!</span>
              </div>
            )}
          </form>
        </div>

        {/* Realistic Interactive Map Embed Banner */}
        <div className="rounded-3xl overflow-hidden border border-amber-900/40 bg-[#130b06] shadow-2xl relative">
          <div className="p-4 sm:p-5 border-b border-amber-900/40 bg-[#090503] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-xs sm:text-sm font-bold text-amber-100">
                Chai Mehfil Landmark Guide & Driving Directions
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=Alrehman+Garden+Phase+2+Sharaqpur+Road+Lahore"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-amber-400 hover:text-amber-200 flex items-center gap-1 font-semibold"
            >
              <span>View Fullscreen on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative h-64 sm:h-72 w-full bg-[#180e08]">
            <iframe
              title="Chai Mehfil Location Map"
              src="https://maps.google.com/maps?q=Alrehman%20Garden%20Phase%202%20Sharaqpur%20Road%20Lahore&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter grayscale-[40%] contrast-[1.2] invert-[85%] hue-rotate-[180deg]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
