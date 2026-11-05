import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showText = true,
  className = '',
  onClick,
}) => {
  const sizeMap = {
    sm: { img: 'h-8 w-8', text: 'text-sm sm:text-base', sub: 'text-[8px] sm:text-[9px]' },
    md: { img: 'h-9 w-9 sm:h-10 sm:w-10', text: 'text-base sm:text-lg', sub: 'text-[9px] sm:text-[10px]' },
    lg: { img: 'h-12 w-12 sm:h-14 sm:w-14', text: 'text-xl sm:text-2xl', sub: 'text-[10px] sm:text-xs' },
  };

  const currentSize = sizeMap[size];

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne rounded-sm shrink-0 ${className}`}
      aria-label="Home Care Interior - Homepage"
    >
      <div className="relative shrink-0 overflow-hidden rounded-full border border-champagne/40 p-0.5 bg-white/95 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <img
          src="/assets/brand/home-care-interior-logo.png"
          alt="Home Care Interior Emblem"
          className={`${currentSize.img} object-contain rounded-full`}
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>

      {showText && (
        <div className="flex flex-col tracking-tight text-left min-w-0">
          <span
            className={`font-serif tracking-wider font-semibold uppercase leading-tight truncate ${
              variant === 'light' ? 'text-white' : 'text-charcoal'
            } ${currentSize.text}`}
          >
            Home Care Interior
          </span>
          <span
            className={`font-sans tracking-[0.2em] uppercase font-medium mt-0.5 leading-none ${
              variant === 'light' ? 'text-champagne-light' : 'text-stone-muted'
            } ${currentSize.sub}`}
          >
            Civil Contractor · Pune
          </span>
        </div>
      )}
    </Link>
  );
};
