import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showText = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { img: 'h-8 w-8', text: 'text-base', sub: 'text-[9px]' },
    md: { img: 'h-10 w-10', text: 'text-lg', sub: 'text-[10px]' },
    lg: { img: 'h-14 w-14', text: 'text-2xl', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne rounded-sm ${className}`}
      aria-label="Home Care Interior - Homepage"
    >
      <div className="relative shrink-0 overflow-hidden rounded-full border border-champagne/30 p-0.5 bg-white/90 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <img
          src="/assets/brand/home-care-interior-logo.png"
          alt="Home Care Interior Emblem"
          className={`${currentSize.img} object-contain rounded-full`}
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>

      {showText && (
        <div className="flex flex-col tracking-tight text-left">
          <span
            className={`font-serif tracking-wider font-semibold uppercase leading-none ${
              variant === 'light' ? 'text-white' : 'text-charcoal'
            } ${currentSize.text}`}
          >
            Home Care Interior
          </span>
          <span
            className={`font-sans tracking-[0.22em] uppercase font-medium mt-1 leading-none ${
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
