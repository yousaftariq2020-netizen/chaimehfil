import React from 'react';
import logoImg from '../logo.jpeg';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const sizeMap = {
    xs: { container: 'w-8 h-8', imgClass: 'w-8 h-8' },
    sm: { container: 'w-9 h-9 sm:w-10 sm:h-10', imgClass: 'w-9 h-9 sm:w-10 sm:h-10' },
    md: { container: 'w-14 h-14 sm:w-16 sm:h-16', imgClass: 'w-14 h-14 sm:w-16 sm:h-16' },
    lg: { container: 'w-20 h-20 sm:w-24 sm:h-24', imgClass: 'w-20 h-20 sm:w-24 sm:h-24' },
    xl: { container: 'w-28 h-28 sm:w-36 sm:h-36', imgClass: 'w-28 h-28 sm:w-36 sm:h-36' },
    hero: { container: 'w-36 h-36 xs:w-44 xs:h-44 sm:w-52 sm:h-52 md:w-60 md:h-60', imgClass: 'w-full h-full' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Official Chai Mehfil Uploaded Logo */}
      <div className={`relative ${currentSize.container} flex items-center justify-center group shrink-0`}>
        {/* Subtle Ambient Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-600/30 via-yellow-500/20 to-orange-600/30 blur-md group-hover:blur-lg transition-all duration-300 pointer-events-none" />

        {/* Exact Uploaded Logo Image */}
        <img
          src={logoImg}
          alt="Chai Mehfil Official Logo"
          className={`${currentSize.imgClass} object-contain rounded-full drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] transition-transform duration-300 group-hover:scale-105 border border-amber-500/30`}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/logo.jpeg';
          }}
        />
      </div>

      {showSubtitle && size !== 'sm' && size !== 'xs' && (
        <div className="text-center mt-2">
          <div className="flex items-center justify-center gap-1.5">
            <span className="font-extrabold tracking-widest text-amber-200 uppercase font-display text-xs sm:text-sm">
              CHAI MEHFIL
            </span>
            <span className="text-[10px] text-amber-400 font-bold px-1.5 py-0.5 rounded bg-amber-950/80 border border-amber-600/40">
              CAFE
            </span>
          </div>
          <p className="font-urdu text-[11px] sm:text-xs text-amber-300/80 mt-0.5">
            آپ کی محفل، آپ کی چائے اور دیسی باتیں
          </p>
        </div>
      )}
    </div>
  );
};
