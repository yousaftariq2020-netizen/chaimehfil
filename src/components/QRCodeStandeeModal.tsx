import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { QrCode, Printer, Download, Copy, Check, Sparkles, X, Wifi, Phone, Coffee, Flame, Utensils, RefreshCw, Share2 } from 'lucide-react';
import { cafeDetails } from '../data/chaiMehfilData';
import { Logo } from './Logo';

interface QRCodeStandeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type StandeeType = 'table' | 'counter' | 'delivery' | 'wifi';
type StandeeTheme = 'royal' | 'print' | 'vintage';

export const QRCodeStandeeModal: React.FC<QRCodeStandeeModalProps> = ({ isOpen, onClose }) => {
  const [standeeType, setStandeeType] = useState<StandeeType>('table');
  const [theme, setTheme] = useState<StandeeTheme>('royal');
  const [tableNumber, setTableNumber] = useState<string>('01');
  const [includeWifi, setIncludeWifi] = useState<boolean>(true);
  const [wifiName, setWifiName] = useState<string>('ChaiMehfil-Guest');
  const [wifiPass, setWifiPass] = useState<string>('mehfil2026');
  const [customHeading, setCustomHeading] = useState<string>('Scan for Digital Menu & Instant Order');
  const [copied, setCopied] = useState<boolean>(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  const printAreaRef = useRef<HTMLDivElement | null>(null);

  // Target website URL
  const targetUrl = 'https://chaimehfil-flame.vercel.app';
  
  // URL with optional table parameter
  const finalQrUrl = tableNumber.trim() 
    ? `${targetUrl}?table=${encodeURIComponent(tableNumber.trim())}#menu`
    : `${targetUrl}#menu`;

  useEffect(() => {
    // Generate high resolution QR code data URL
    const generateQR = async () => {
      try {
        const darkColor = theme === 'print' ? '#000000' : '#1a0903';
        const lightColor = theme === 'print' ? '#ffffff' : '#ffffff';
        
        const url = await QRCode.toDataURL(finalQrUrl, {
          width: 800,
          margin: 2,
          color: {
            dark: darkColor,
            light: lightColor,
          },
          errorCorrectionLevel: 'H',
        });
        setQrDataUrl(url);
      } catch (err) {
        console.error('Error generating QR code', err);
      }
    };

    generateQR();
  }, [finalQrUrl, theme]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    if (!printAreaRef.current) return;
    const printContent = printAreaRef.current.innerHTML;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Chai Mehfil - Table Standee QR</title>
            <meta charset="utf-8" />
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;900&family=Plus+Jakarta+Sans:wght@400;600;800&family=Noto+Nastaliq+Urdu:wght@700&display=swap" rel="stylesheet">
            <style>
              body {
                margin: 0;
                padding: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #fff;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              @page {
                size: auto;
                margin: 10mm;
              }
            </style>
          </head>
          <body>
            <div style="max-width: 480px; width: 100%;">
              ${printContent}
            </div>
            <script>
              window.onload = function() {
                setTimeout(function() {
                  window.print();
                  window.close();
                }, 400);
              };
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const handleDownloadImage = () => {
    if (!qrDataUrl) return;
    const a = document.createElement('a');
    a.href = qrDataUrl;
    a.download = `ChaiMehfil-QR-${tableNumber || 'Menu'}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#120804] border-2 border-amber-600/50 rounded-3xl shadow-[0_0_50px_rgba(217,119,6,0.3)] text-amber-100 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#1d0b04] via-[#2a1207] to-[#1d0b04] border-b border-amber-900/60 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
              <QrCode className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-2xl font-black text-amber-100 font-display">
                  Official Table QR Standee & Digital Menu
                </h2>
                <span className="text-[10px] bg-amber-500 text-black font-extrabold px-2 py-0.5 rounded-full">
                  HD PRINT READY
                </span>
              </div>
              <p className="text-xs text-amber-300/75">
                Generate high-resolution printable table cards for tables, counter & parcel boxes
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#230f06] hover:bg-rose-950/80 text-amber-300 hover:text-rose-300 border border-amber-800/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Body Grid: Controls on Left, Live Standee Preview on Right */}
        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-y-auto flex-1">
          
          {/* LEFT: Customizer & Options (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 1. Target URL Box with Copy */}
            <div className="bg-[#1a0c06] p-3.5 rounded-2xl border border-amber-900/60 space-y-2">
              <label className="text-[11px] font-bold uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Live Website Destination
              </label>
              <div className="flex items-center gap-2 bg-black/60 p-2 rounded-xl border border-amber-800/40">
                <span className="text-xs text-amber-200 truncate font-mono flex-1">
                  {targetUrl}
                </span>
                <button
                  onClick={handleCopyLink}
                  className="px-2.5 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 shrink-0 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* 2. Standee Template Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-amber-300">Choose Card Type:</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'table', label: '🪑 Table Standee', sub: 'For Dine-in Tables' },
                  { id: 'counter', label: '🏪 Counter Stand', sub: 'For Billing Desk' },
                  { id: 'delivery', label: '📦 Parcel Sticker', sub: 'For Delivery Boxes' },
                  { id: 'wifi', label: '📶 WiFi & Menu Card', sub: 'Guest WiFi + Deals' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => {
                      setStandeeType(st.id as StandeeType);
                      if (st.id === 'delivery') setCustomHeading('Scan to Re-Order & Win Free Chai');
                      else if (st.id === 'counter') setCustomHeading('Explore Today’s Mega Deals & Qawwali');
                      else setCustomHeading('Scan for Digital Menu & Instant Order');
                    }}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      standeeType === st.id
                        ? 'bg-amber-500/20 border-amber-500 text-amber-100 shadow-md'
                        : 'bg-[#180b05] border-amber-950 text-amber-300/70 hover:border-amber-800'
                    }`}
                  >
                    <div className="text-xs font-bold">{st.label}</div>
                    <div className="text-[10px] text-amber-400/60">{st.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Theme Style Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-amber-300">Visual Print Theme:</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'royal', label: '👑 Royal Dark', desc: 'Acrylic/Display' },
                  { id: 'print', label: '📄 White Paper', desc: 'Saves Printer Ink' },
                  { id: 'vintage', label: '🪔 Desi Amber', desc: 'Mehfil Warmth' },
                ].map((th) => (
                  <button
                    key={th.id}
                    onClick={() => setTheme(th.id as StandeeTheme)}
                    className={`p-2 rounded-xl text-center border text-xs font-bold transition-all ${
                      theme === th.id
                        ? 'bg-amber-600 text-white border-amber-400 shadow'
                        : 'bg-[#180b05] border-amber-900/60 text-amber-300/80 hover:bg-[#220f07]'
                    }`}
                  >
                    <div>{th.label}</div>
                    <div className="text-[9px] opacity-75 font-normal">{th.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Table Number & Custom Text */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[11px] font-bold text-amber-300 block mb-1">
                  Table / Zone Number:
                </label>
                <input
                  type="text"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder="e.g. Table 04, Rooftop 2"
                  className="w-full bg-[#180b05] border border-amber-800/50 rounded-xl px-3 py-2 text-xs text-amber-100 placeholder-amber-700 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-amber-300 block mb-1">
                  Custom Card Heading:
                </label>
                <input
                  type="text"
                  value={customHeading}
                  onChange={(e) => setCustomHeading(e.target.value)}
                  className="w-full bg-[#180b05] border border-amber-800/50 rounded-xl px-3 py-2 text-xs text-amber-100 placeholder-amber-700 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* 5. WiFi Toggle & Details */}
            <div className="bg-[#180b05] p-3 rounded-xl border border-amber-900/50 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-amber-300 flex items-center gap-1.5 cursor-pointer">
                  <Wifi className="w-3.5 h-3.5 text-amber-400" />
                  <span>Show Guest WiFi Info on Card</span>
                </label>
                <input
                  type="checkbox"
                  checked={includeWifi}
                  onChange={(e) => setIncludeWifi(e.target.checked)}
                  className="rounded border-amber-700 text-amber-500 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                />
              </div>

              {includeWifi && (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-[10px] text-amber-400/80 block">WiFi Name (SSID):</span>
                    <input
                      type="text"
                      value={wifiName}
                      onChange={(e) => setWifiName(e.target.value)}
                      className="w-full bg-black/50 border border-amber-800/40 rounded-lg px-2 py-1 text-xs text-amber-200"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-400/80 block">WiFi Password:</span>
                    <input
                      type="text"
                      value={wifiPass}
                      onChange={(e) => setWifiPass(e.target.value)}
                      className="w-full bg-black/50 border border-amber-800/40 rounded-lg px-2 py-1 text-xs text-amber-200"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={handlePrint}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-black text-xs sm:text-sm shadow-xl shadow-amber-950 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
              >
                <Printer className="w-4 h-4" />
                <span>Print Standee / Card</span>
              </button>

              <button
                onClick={handleDownloadImage}
                className="py-3 px-4 rounded-xl bg-[#220e06] hover:bg-[#2e1408] text-amber-300 border border-amber-700/60 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Save PNG</span>
              </button>
            </div>

          </div>

          {/* RIGHT: Live High-Resolution Standee Preview (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-3 sm:p-5 bg-black/60 rounded-3xl border border-amber-900/40">
            <div className="text-[11px] font-bold text-amber-400/80 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Live Print-Ready Preview
            </div>

            {/* Printable Container */}
            <div ref={printAreaRef} className="w-full max-w-sm">
              <div
                className={`w-full rounded-3xl p-6 sm:p-7 text-center shadow-2xl transition-all relative overflow-hidden border-4 ${
                  theme === 'print'
                    ? 'bg-white text-gray-900 border-gray-800'
                    : theme === 'vintage'
                    ? 'bg-gradient-to-b from-[#241107] via-[#1a0a03] to-[#2b1207] text-amber-100 border-amber-500/80'
                    : 'bg-gradient-to-b from-[#140803] via-[#0d0402] to-[#180904] text-amber-50 border-amber-400'
                }`}
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {/* Decorative Traditional Corner Accents */}
                <div className={`absolute top-2 left-2 text-xs font-serif ${theme === 'print' ? 'text-gray-400' : 'text-amber-500/50'}`}>❖</div>
                <div className={`absolute top-2 right-2 text-xs font-serif ${theme === 'print' ? 'text-gray-400' : 'text-amber-500/50'}`}>❖</div>
                <div className={`absolute bottom-2 left-2 text-xs font-serif ${theme === 'print' ? 'text-gray-400' : 'text-amber-500/50'}`}>❖</div>
                <div className={`absolute bottom-2 right-2 text-xs font-serif ${theme === 'print' ? 'text-gray-400' : 'text-amber-500/50'}`}>❖</div>

                {/* Cafe Header & Logo */}
                <div className="space-y-1 mb-4">
                  <div className="inline-block">
                    <div className="flex items-center justify-center gap-2">
                      <Coffee className={`w-5 h-5 ${theme === 'print' ? 'text-amber-700' : 'text-amber-400'}`} />
                      <span className={`text-xl sm:text-2xl font-black tracking-wider uppercase font-display ${theme === 'print' ? 'text-black' : 'text-amber-100'}`}>
                        CHAI MEHFIL
                      </span>
                    </div>
                  </div>
                  <div className={`text-[10px] font-bold tracking-widest uppercase ${theme === 'print' ? 'text-amber-800' : 'text-amber-400'}`}>
                    Rooftop & Desi Bites • Lahore
                  </div>
                  <div className={`text-xs font-urdu font-bold ${theme === 'print' ? 'text-gray-700' : 'text-amber-300'}`}>
                    چائے محفل کیفے • آپ کی محفل، آپ کا ذائقہ
                  </div>
                </div>

                {/* Table Badge (If Table Standee) */}
                {tableNumber && (
                  <div className="inline-block mb-3">
                    <div className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider border shadow-sm ${
                      theme === 'print'
                        ? 'bg-amber-100 text-amber-900 border-amber-300'
                        : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-300/40 shadow-amber-950'
                    }`}>
                      🪑 {tableNumber}
                    </div>
                  </div>
                )}

                {/* Main QR Code Box */}
                <div className="my-2 flex flex-col items-center justify-center">
                  <div className={`p-3.5 rounded-2xl inline-block border-2 shadow-xl ${
                    theme === 'print'
                      ? 'bg-white border-gray-900 shadow-gray-400/50'
                      : 'bg-white border-amber-400 shadow-amber-950/80'
                  }`}>
                    {qrDataUrl ? (
                      <img
                        src={qrDataUrl}
                        alt="Chai Mehfil Menu QR"
                        className="w-48 h-48 sm:w-52 sm:h-52 object-contain rounded-lg"
                      />
                    ) : (
                      <div className="w-48 h-48 sm:w-52 sm:h-52 flex items-center justify-center bg-gray-100 text-gray-400">
                        Generating QR...
                      </div>
                    )}
                  </div>
                  <div className={`mt-2 text-[11px] font-mono font-bold ${theme === 'print' ? 'text-gray-500' : 'text-amber-300/80'}`}>
                    chaimehfil-flame.vercel.app
                  </div>
                </div>

                {/* Instructions / Catchy Slogan */}
                <div className="my-3 space-y-0.5">
                  <p className={`text-xs sm:text-sm font-extrabold ${theme === 'print' ? 'text-gray-900' : 'text-amber-200'}`}>
                    📱 {customHeading}
                  </p>
                  <p className={`text-[10px] sm:text-[11px] ${theme === 'print' ? 'text-gray-600' : 'text-amber-300/70'}`}>
                    Open Camera & Scan to browse Washi Deals, Chai & Sufi Qawwali
                  </p>
                </div>

                {/* Optional WiFi Block */}
                {includeWifi && (
                  <div className={`my-3 p-2 rounded-xl text-[11px] font-mono border ${
                    theme === 'print'
                      ? 'bg-gray-100 border-gray-300 text-gray-800'
                      : 'bg-[#1d0c05] border-amber-800/60 text-amber-200'
                  }`}>
                    <div className="flex items-center justify-center gap-3">
                      <span>📶 WiFi: <strong>{wifiName}</strong></span>
                      <span>🔑 Pass: <strong>{wifiPass}</strong></span>
                    </div>
                  </div>
                )}

                {/* Footer Details: Hotline & Address */}
                <div className={`pt-3 border-t text-[10px] space-y-0.5 ${
                  theme === 'print' ? 'border-gray-200 text-gray-600' : 'border-amber-900/60 text-amber-300/75'
                }`}>
                  <div className="flex items-center justify-center gap-2 font-bold">
                    <Phone className="w-3 h-3 text-emerald-500" />
                    <span>Free Delivery & Orders: <strong>0321-9597119</strong> / <strong>0323-9017091</strong></span>
                  </div>
                  <div className="truncate text-[9px] opacity-80">
                    Opp. Alrehman Garden Phase II, Gate 2, Main Sharaqpur Rd, Lahore
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
