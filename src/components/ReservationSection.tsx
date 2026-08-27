import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, MapPin, CheckCircle, Sparkles, Phone, MessageSquare, Heart } from 'lucide-react';
import { TableBooking, Language } from '../types';
import { translations } from '../data/translations';
import { cafeDetails } from '../data/chaiMehfilData';

interface ReservationSectionProps {
  currentLang: Language;
  prefilledEventTitle?: string;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  currentLang,
  prefilledEventTitle
}) => {
  const [formData, setFormData] = useState<TableBooking>({
    name: '',
    phone: '',
    guests: 4,
    date: new Date().toISOString().split('T')[0],
    timeSlot: '09:30 PM (Qawwali Prime)',
    seatingArea: 'rooftop-stage',
    occasion: 'Regular Get-Together',
    specialRequests: prefilledEventTitle ? `Requested: ${prefilledEventTitle}` : ''
  });

  useEffect(() => {
    if (prefilledEventTitle) {
      setFormData(prev => ({
        ...prev,
        specialRequests: `Requested: ${prefilledEventTitle}`
      }));
    }
  }, [prefilledEventTitle]);

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const t = translations[currentLang];

  const seatingOptions = [
    {
      id: 'rooftop-stage',
      title: 'Stage-Front View',
      titleUrdu: 'اسٹیج کے سامنے نشست',
      desc: 'Prime view of live qawwals & stage',
      icon: Sparkles
    },
    {
      id: 'family-pavilion',
      title: 'Family Pavilion',
      titleUrdu: 'فیملی پویلین',
      desc: 'Exclusive, cozy & private partition',
      icon: Users
    },
    {
      id: 'terrace-corner',
      title: 'Terrace Corner',
      titleUrdu: 'ٹیرس کارنر اوپن ایئر',
      desc: 'Breezy open-sky under fairy lights',
      icon: MapPin
    },
    {
      id: 'majlis-carpet',
      title: 'Traditional Majlis',
      titleUrdu: 'روایتی مجلس فرش نشینی',
      desc: 'Floor gaddi cushions & low tables',
      icon: Heart
    }
  ];

  const timeSlots = [
    '06:00 PM – Sunset Chai',
    '08:00 PM – Dinner & Snacks',
    '09:30 PM (Qawwali Prime)',
    '11:30 PM – Late Night Mehfil',
    '01:30 AM – Midnight Tea Session',
    '03:00 AM – Sehri / Pre-Dawn Brew'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const code = 'CM-' + Math.floor(10000 + Math.random() * 90000);
    setConfirmationCode(code);
    setBookingConfirmed(true);
  };

  const handleSendWhatsAppConfirmation = () => {
    const message = `*☕ CHAI MEHFIL TABLE RESERVATION* ☕\n\n` +
      `*Booking Ref:* ${confirmationCode}\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Guests:* ${formData.guests} Persons\n` +
      `*Date:* ${formData.date}\n` +
      `*Time:* ${formData.timeSlot}\n` +
      `*Area:* ${formData.seatingArea.toUpperCase()}\n` +
      (formData.specialRequests ? `*Notes:* ${formData.specialRequests}\n` : '') +
      `\n_Please confirm our table reservation. Shukriya!_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${cafeDetails.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="reserve" className="py-20 bg-[#0e0805] relative overflow-hidden border-t border-amber-950/50">
      {/* Glow decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-800/50 text-amber-300 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Reserved Seating</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-50 mb-3 font-display">
            {t.reserveTitle}
          </h2>
          <p className="text-amber-200/70 text-sm sm:text-base">
            {t.reserveSubtitle}
          </p>
        </div>

        {bookingConfirmed ? (
          /* Confirmation Card */
          <div className="bg-[#170e08] rounded-3xl border border-emerald-500/50 p-8 sm:p-12 text-center shadow-2xl animate-fadeIn max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white font-display mb-1">
              Table Reserved Successfully!
            </h3>
            <p className="font-urdu text-base text-amber-300 mb-4">
              آپ کی نشست بک کر لی گئی ہے
            </p>

            <div className="bg-[#0c0704] p-5 rounded-2xl border border-amber-900/40 text-left space-y-2 mb-6 text-xs sm:text-sm">
              <div className="flex justify-between text-amber-300">
                <span className="text-amber-400/70">Booking Code:</span>
                <strong className="text-base text-amber-300 font-mono">{confirmationCode}</strong>
              </div>
              <div className="flex justify-between text-amber-100">
                <span className="text-amber-400/70">Guest Name:</span>
                <span>{formData.name}</span>
              </div>
              <div className="flex justify-between text-amber-100">
                <span className="text-amber-400/70">Date & Slot:</span>
                <span>{formData.date} • {formData.timeSlot}</span>
              </div>
              <div className="flex justify-between text-amber-100">
                <span className="text-amber-400/70">Total Guests:</span>
                <span>{formData.guests} Persons</span>
              </div>
              <div className="flex justify-between text-amber-100">
                <span className="text-amber-400/70">Seating Choice:</span>
                <span className="capitalize">{formData.seatingArea.replace('-', ' ')}</span>
              </div>
            </div>

            <p className="text-xs text-amber-200/60 mb-6">
              We look forward to welcoming you to Chai Mehfil tonight. Our host will have your table ready 15 mins prior.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleSendWhatsAppConfirmation}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-950"
              >
                <Phone className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </button>

              <button
                onClick={() => setBookingConfirmed(false)}
                className="px-6 py-3 rounded-xl bg-[#28150a] text-amber-200 hover:bg-[#381e0e] text-xs sm:text-sm font-semibold border border-amber-800/40"
              >
                Book Another Table
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form
            onSubmit={handleSubmit}
            className="bg-[#150d08] rounded-3xl border border-amber-900/50 p-6 sm:p-10 shadow-2xl shadow-black/80"
          >
            {/* Seating Choice Grid */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-amber-100 mb-3">
                1. Select Preferred Seating Area / نشست کی جگہ کا انتخاب:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {seatingOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, seatingArea: opt.id as TableBooking['seatingArea'] })}
                    className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                      formData.seatingArea === opt.id
                        ? 'bg-amber-600/20 border-amber-500 text-amber-100 shadow-lg shadow-amber-950/40'
                        : 'bg-[#0c0704] border-amber-900/30 text-amber-300/70 hover:border-amber-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <opt.icon className={`w-4 h-4 ${formData.seatingArea === opt.id ? 'text-amber-400' : 'text-amber-600'}`} />
                        {formData.seatingArea === opt.id && (
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                        )}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-amber-100">{opt.title}</h4>
                      <p className="font-urdu text-[11px] text-amber-300/80">{opt.titleUrdu}</p>
                    </div>
                    <p className="text-[10px] text-amber-400/60 mt-2">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1.5">
                  Your Full Name / آپ کا نام *
                </label>
                <input
                  id="reserve-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Usman Tariq"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c0704] border border-amber-900/50 text-amber-100 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  id="reserve-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0300-1234567"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c0704] border border-amber-900/50 text-amber-100 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Guests Count */}
              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1.5">
                  Number of Guests / افراد کی تعداد
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c0704] border border-amber-900/50 text-amber-100 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests / افراد'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1.5">
                  Reservation Date / تاریخ
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c0704] border border-amber-900/50 text-amber-100 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Time Slot */}
              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1.5">
                  Preferred Time Slot / وقت
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c0704] border border-amber-900/50 text-amber-100 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-xs font-semibold text-amber-200 mb-1.5">
                  Occasion / تقریب
                </label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c0704] border border-amber-900/50 text-amber-100 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                >
                  <option value="Regular Get-Together">Casual Chai & Chitchat</option>
                  <option value="Live Qawwali Night">Qawwali Night Experience</option>
                  <option value="Birthday Party">Birthday Celebration</option>
                  <option value="Family Gathering">Family Dinner Gathering</option>
                  <option value="Late Night Doodh Patti">Late Night Chai Session</option>
                </select>
              </div>
            </div>

            {/* Special Instructions */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-amber-200 mb-1.5">
                Special Requests / خاص ہدایات (Decoration, High Chairs, Cake cutting, etc.):
              </label>
              <input
                type="text"
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                placeholder="e.g. Please arrange birthday cake setup or quiet corner for family"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c0704] border border-amber-900/50 text-amber-100 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Submit Button */}
            <button
              id="submit-reservation-btn"
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-amber-950/60 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 border border-amber-400/40 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-amber-200" />
              <span>{t.reserveBtn}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
