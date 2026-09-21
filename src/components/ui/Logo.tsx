import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'full' | 'compact' | 'white';
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  showTagline = false,
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: {
      img: 'h-8',
      text: 'text-lg',
      tagline: 'text-[9px]',
    },
    md: {
      img: 'h-9 md:h-10',
      text: 'text-xl md:text-2xl',
      tagline: 'text-[10px]',
    },
    lg: {
      img: 'h-12 md:h-14',
      text: 'text-2xl md:text-3xl',
      tagline: 'text-xs',
    },
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* Official Q Ribbon Icon */}
      <div className="relative flex items-center justify-center">
        <svg
          className={`${sizeClasses[size].img} w-auto aspect-square drop-shadow-sm transition-transform duration-300 group-hover:scale-105`}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="qGradOuter" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#00A3FF" />
              <stop offset="50%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#003D99" />
            </linearGradient>
            <linearGradient id="qGradFold" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#003882" />
              <stop offset="100%" stopColor="#0066FF" />
            </linearGradient>
            <linearGradient id="qGradTail" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0099FF" />
              <stop offset="100%" stopColor="#0055DD" />
            </linearGradient>
          </defs>
          {/* Circular folded ribbon Q */}
          <circle cx="50" cy="46" r="32" stroke="url(#qGradOuter)" strokeWidth="15" strokeLinecap="round" />
          {/* Inner ribbon loop fold */}
          <path
            d="M 32 62 C 24 50 26 34 38 25 C 49 17 65 19 73 30"
            stroke="url(#qGradFold)"
            strokeWidth="15"
            strokeLinecap="round"
          />
          {/* Q diagonal ribbon tail */}
          <path
            d="M 48 50 L 78 78 L 68 86 L 46 64 Z"
            fill="url(#qGradTail)"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight font-extrabold leading-none">
          <span className={`text-brand-navy tracking-wider font-extrabold ${sizeClasses[size].text}`}>
            QUANTUM
          </span>
          <span className={`text-brand-blue tracking-wider font-extrabold ml-1.5 ${sizeClasses[size].text}`}>
            MESH
          </span>
        </div>
        {showTagline && (
          <span className={`text-slate-400 tracking-[0.22em] uppercase font-semibold mt-1 ${sizeClasses[size].tagline}`}>
            IDEAS • TECHNOLOGY • IMPACT
          </span>
        )}
      </div>
    </Link>
  );
};
