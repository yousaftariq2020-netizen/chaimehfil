import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Moon, CloudRain, Play, Pause, Sparkles } from 'lucide-react';

export const AmbientPlayerWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSound, setSelectedSound] = useState<'tanpura' | 'rain' | 'breeze'>('tanpura');
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  const startAudio = (type: 'tanpura' | 'rain' | 'breeze') => {
    try {
      if (audioCtx) {
        audioCtx.close();
      }

      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
      masterGain.connect(ctx.destination);

      if (type === 'tanpura') {
        // Tanpura / Sufi drone harmonics (C#, G#, C#, F)
        const notes = [138.59, 207.65, 277.18, 349.23];
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          osc.type = i % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          const lfo = ctx.createOscillator();
          lfo.frequency.value = 0.2 + i * 0.15;
          const lfoGain = ctx.createGain();
          lfoGain.gain.value = 1.5;
          lfo.connect(osc.frequency);
          lfo.start();

          osc.connect(masterGain);
          osc.start();
        });
      } else if (type === 'rain') {
        // Pink noise generator for soothing rain
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          data[i] *= 0.11;
          b6 = white * 0.115926;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;
        noise.connect(masterGain);
        noise.start();
      } else {
        // Night breeze ambient warmth
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(110, ctx.currentTime);
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 350;
        osc.connect(filter);
        filter.connect(masterGain);
        osc.start();
      }

      setAudioCtx(ctx);
      setIsPlaying(true);
    } catch {
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    if (audioCtx) {
      audioCtx.close();
      setAudioCtx(null);
    }
    setIsPlaying(false);
  };

  const toggleSound = (type: 'tanpura' | 'rain' | 'breeze') => {
    if (isPlaying && selectedSound === type) {
      stopAudio();
    } else {
      setSelectedSound(type);
      startAudio(type);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtx) {
        audioCtx.close();
      }
    };
  }, [audioCtx]);

  return (
    <div className="fixed bottom-5 left-5 z-40">
      {/* Expanded Sound Panel */}
      {isOpen && (
        <div className="mb-3 bg-gradient-to-b from-[#1c0f08] to-[#100804] border border-amber-500/40 rounded-2xl p-4 shadow-2xl w-64 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between border-b border-amber-900/40 pb-2 mb-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Mehfil-e-Sufi Ambience</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-amber-400/60 hover:text-amber-200 cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => toggleSound('tanpura')}
              className={`w-full p-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                isPlaying && selectedSound === 'tanpura'
                  ? 'bg-amber-500 text-black font-bold'
                  : 'bg-[#24130a] text-amber-200 hover:bg-[#341b0e]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Music className="w-3.5 h-3.5" />
                <span>Sufi Harmonium Tanpura</span>
              </span>
              {isPlaying && selectedSound === 'tanpura' ? <Volume2 className="w-3.5 h-3.5" /> : <Play className="w-3 h-3" />}
            </button>

            <button
              onClick={() => toggleSound('rain')}
              className={`w-full p-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                isPlaying && selectedSound === 'rain'
                  ? 'bg-amber-500 text-black font-bold'
                  : 'bg-[#24130a] text-amber-200 hover:bg-[#341b0e]'
              }`}
            >
              <span className="flex items-center gap-2">
                <CloudRain className="w-3.5 h-3.5" />
                <span>Monsoon Rooftop Rain</span>
              </span>
              {isPlaying && selectedSound === 'rain' ? <Volume2 className="w-3.5 h-3.5" /> : <Play className="w-3 h-3" />}
            </button>

            <button
              onClick={() => toggleSound('breeze')}
              className={`w-full p-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                isPlaying && selectedSound === 'breeze'
                  ? 'bg-amber-500 text-black font-bold'
                  : 'bg-[#24130a] text-amber-200 hover:bg-[#341b0e]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Moon className="w-3.5 h-3.5" />
                <span>Night Starlight Breeze</span>
              </span>
              {isPlaying && selectedSound === 'breeze' ? <Volume2 className="w-3.5 h-3.5" /> : <Play className="w-3 h-3" />}
            </button>
          </div>

          <p className="text-[10px] text-amber-400/60 text-center mt-3">
            Relaxing soothing audio for your evening
          </p>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-3.5 py-2.5 rounded-full border shadow-2xl flex items-center gap-2 text-xs font-bold transition-all cursor-pointer ${
          isPlaying
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black border-amber-300 shadow-amber-950 scale-105'
            : 'bg-[#180e08]/90 hover:bg-[#25130b] text-amber-300 border-amber-600/50 backdrop-blur-md'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 animate-bounce" />
            <span className="hidden sm:inline">Playing Vibe: {selectedSound.toUpperCase()}</span>
            <span className="sm:hidden">Playing</span>
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-amber-400" />
            <span>Mehfil Music Vibe</span>
          </>
        )}
      </button>
    </div>
  );
};
