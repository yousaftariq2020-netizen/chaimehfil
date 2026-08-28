import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { QrCode, Printer, Sparkles, Download, Check, Copy, ArrowRight, Wifi, Smartphone, CheckCircle } from 'lucide-react';
import { cafeDetails } from '../data/chaiMehfilData';

interface PrintableTableQRBannerProps {
  onOpenQRModal: () => void;
}

export const PrintableTableQRBanner: React.FC<PrintableTableQRBannerProps> = ({ onOpenQRModal }) => {
  const [qrSrc, setQrSrc] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const targetUrl = 'https://chaimehfil-flame.vercel.app';

  useEffect(() => {
    QRCode.toDataURL(targetUrl, {
      width: 400,
      margin: 1,
      color: {
        dark: '#160803',
        light: '#ffffff',
      },
    }).then(setQrSrc).catch(console.error);
  }, [targetUrl]);

  const handleCopy = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="qr-standee-section" className="py-12 bg-gradient-to-b from-[#0e0704] via-[#160a05] to-[#0a0503] relative border-t border-amber-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-[#200e06] via-[#2c1308] to-[#1a0b04] border-2 border-amber-500/50 p-6 sm:p-10 shadow-2xl shadow-black overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Subtle Background Glows */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text & Info */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-lg">
              <QrCode className="w-4 h-4 text-amber-400" />
              <span>Table QR Standee & Instant Digital Menu</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white font-display leading-tight">
              اسکین کریں اور براہِ راست مینو دیکھیں
              <span className="block text-amber-400 text-lg sm:text-2xl font-sans mt-1">
                Official QR Code for Cafe Tables & Delivery Boxes
              </span>
            </h2>

            <p className="text-amber-200/80 text-xs sm:text-sm leading-relaxed">
              Customers can simply scan with any phone camera to browse the live menu, Washi Deals, and order on WhatsApp instantly. Download high-definition acrylic table standees with WiFi credentials.
            </p>

            {/* Features Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
              <span className="px-3 py-1 rounded-lg bg-black/40 border border-amber-800/50 text-amber-200 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant Phone Camera Scan</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-black/40 border border-amber-800/50 text-amber-200 flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5 text-amber-400" />
                <span>Custom Table No & WiFi Info</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-black/40 border border-amber-800/50 text-amber-200 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                <span>1-Click WhatsApp Order</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <button
                id="open-qr-standee-btn"
                onClick={onOpenQRModal}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-extrabold text-xs sm:text-sm shadow-xl shadow-amber-950 flex items-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Customize & Print Table Standees</span>
              </button>

              <button
                onClick={handleCopy}
                className="px-4 py-3 rounded-xl bg-[#160a04] hover:bg-[#220e06] text-amber-300 border border-amber-700/60 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Link Copied!' : 'Copy Website URL'}</span>
              </button>
            </div>
          </div>

          {/* Right: Live Interactive Card Preview with Real Scannable QR */}
          <div className="relative z-10 shrink-0">
            <div 
              onClick={onOpenQRModal}
              className="group relative w-64 sm:w-72 bg-gradient-to-b from-[#160803] to-[#0c0402] border-2 border-amber-400/80 rounded-3xl p-5 text-center shadow-2xl hover:border-amber-300 transition-all duration-300 cursor-pointer"
            >
              {/* Top Mini Header */}
              <div className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                CHAI MEHFIL LAHORE
              </div>
              <div className="text-xs font-bold text-white mb-3">
                Scan to View Menu & Deals
              </div>

              {/* Scannable White QR Box */}
              <div className="bg-white p-3 rounded-2xl inline-block shadow-xl border border-amber-300/40 relative group-hover:scale-105 transition-transform">
                {qrSrc ? (
                  <img src={qrSrc} alt="Chai Mehfil QR Code" className="w-40 h-40 object-contain rounded-lg" />
                ) : (
                  <div className="w-40 h-40 flex items-center justify-center bg-gray-100 text-gray-400 text-xs">
                    Loading QR...
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px] rounded-2xl transition-opacity">
                  <span className="px-3 py-1.5 rounded-xl bg-amber-500 text-black font-black text-xs shadow-lg flex items-center gap-1">
                    <Printer className="w-3.5 h-3.5" /> Print Standee
                  </span>
                </div>
              </div>

              {/* Live URL Subtext */}
              <div className="mt-3 text-[11px] font-mono text-amber-300/90 font-bold">
                chaimehfil-flame.vercel.app
              </div>

              <div className="mt-2 text-[10px] text-amber-400/70 flex items-center justify-center gap-1">
                <Printer className="w-3 h-3" /> Click to open Print & Download Studio
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
