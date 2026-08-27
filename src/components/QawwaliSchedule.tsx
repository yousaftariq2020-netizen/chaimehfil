import React, { useState } from 'react';
import { Music, Sparkles, Calendar, Clock, MapPin, Play, Pause, Volume2, VolumeX, CheckCircle, Users } from 'lucide-react';
import { QawwaliNightEvent, Language } from '../types';
import { qawwaliEventsData } from '../data/chaiMehfilData';
import { translations } from '../data/translations';

interface QawwaliScheduleProps {
  currentLang: Language;
  onSelectEventForBooking: (event: QawwaliNightEvent) => void;
}

export const QawwaliSchedule: React.FC<QawwaliScheduleProps> = ({
  currentLang,
  onSelectEventForBooking
}) => {
  const t = translations[currentLang];
  const [isPlayingVibe, setIsPlayingVibe] = useState(false);
  const [audioSynthesizer, setAudioSynthesizer] = useState<AudioContext | null>(null);

  // Simple harmonious ambient Sufi drone synthesizer using Web Audio API
  const toggleAmbientDrone = () => {
    if (isPlayingVibe) {
      if (audioSynthesizer) {
        audioSynthesizer.close();
        setAudioSynthesizer(null);
      }
      setIsPlayingVibe(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();

        // Harmonium Tanpura Drone Frequencies (C# fundamental tanpura)
        const freqs = [138.59, 207.65, 277.18, 415.30];
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.04, ctx.currentTime);
        gainNode.connect(ctx.destination);

        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx % 2 === 0 ? 'sawtooth' : 'sine';
          osc.frequency.setValueAtTime(f, ctx.currentTime);

          // Subtle LFO modulation for warm vibrato
          const lfo = ctx.createOscillator();
          lfo.frequency.value = 0.3 + idx * 0.1;
          const lfoGain = ctx.createGain();
          lfoGain.gain.value = 1.2;
          lfo.connect(osc.frequency);
          lfo.start();

          osc.connect(gainNode);
          osc.start();
        });

        setAudioSynthesizer(ctx);
        setIsPlayingVibe(true);
      } catch {
        // Safe fallback if audio context blocked
        setIsPlayingVibe(true);
      }
    }
  };

  return (
    <section id="qawwali" className="py-20 bg-[#090503] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Live Ambient Vibe Audio Player */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-amber-900/30 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-300 text-xs font-semibold mb-3">
              <Music className="w-3.5 h-3.5 text-amber-400" />
              <span>Mehfil-e-Sufiana & Qawwali</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-50 font-display">
              {t.qawwaliTitle}
            </h2>
            <p className="text-amber-200/70 text-sm sm:text-base mt-2 max-w-xl">
              {t.qawwaliSubtitle}
            </p>
          </div>

          {/* Ambient Harmonium Tanpura Player Widget */}
          <div className="bg-[#180e08] p-3.5 rounded-2xl border border-amber-800/40 shadow-xl flex items-center gap-4">
            <button
              onClick={toggleAmbientDrone}
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all shadow-md ${
                isPlayingVibe
                  ? 'bg-amber-500 text-black shadow-amber-500/30 scale-105'
                  : 'bg-[#28150a] text-amber-300 hover:bg-amber-600 hover:text-white'
              }`}
              title={isPlayingVibe ? "Pause Ambient Sufi Music" : "Play Ambient Sufi Tanpura"}
            >
              {isPlayingVibe ? <Pause className="w-5 h-5 fill-black" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-amber-200">Sufi Tanpura Vibe</span>
                {isPlayingVibe && (
                  <span className="flex gap-0.5 items-end h-3">
                    <span className="w-0.5 h-3 bg-amber-400 animate-pulse" />
                    <span className="w-0.5 h-2 bg-amber-400 animate-pulse delay-75" />
                    <span className="w-0.5 h-3.5 bg-amber-400 animate-pulse delay-150" />
                  </span>
                )}
              </div>
              <p className="text-[11px] text-amber-300/60">
                {isPlayingVibe ? "Playing ambient background music..." : "Click to experience rooftop vibe"}
              </p>
            </div>
          </div>
        </div>

        {/* Qawwali Schedule Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {qawwaliEventsData.map((event) => (
            <div
              key={event.id}
              className="bg-[#140c07] rounded-2xl overflow-hidden border border-amber-900/40 hover:border-amber-600/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              {/* Event Image Banner */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140c07] via-transparent to-black/40" />

                {/* Day Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-amber-600/90 backdrop-blur-md text-white text-xs font-bold shadow-md">
                  {event.dayName}
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[11px] font-semibold">
                  {event.status}
                </div>
              </div>

              {/* Event Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-2">
                    <span className="text-[11px] font-bold tracking-wider text-amber-400 uppercase">
                      {event.genre}
                    </span>
                    <h3 className="text-lg font-bold text-amber-50 group-hover:text-amber-300 transition-colors mt-0.5">
                      {event.title}
                    </h3>
                    <p className="font-urdu text-sm text-amber-300/80 mt-0.5">
                      {event.titleUrdu}
                    </p>
                  </div>

                  {/* Artist */}
                  <div className="flex items-center gap-2 py-2 px-3 rounded-xl bg-[#0c0704] border border-amber-900/30 mb-3 text-xs text-amber-200">
                    <Music className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-medium">Lead Performer: <strong>{event.artist}</strong></span>
                  </div>

                  <p className="text-xs text-amber-200/70 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Time & Reservation CTA */}
                <div className="pt-3 border-t border-amber-900/30">
                  <div className="flex items-center justify-between text-xs text-amber-300/80 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-400 font-medium">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Free with Dining</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectEventForBooking(event)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-xs font-bold shadow-lg shadow-amber-950 transition-all flex items-center justify-center gap-2 border border-amber-400/30 cursor-pointer"
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Reserve Stage-Front Table</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
