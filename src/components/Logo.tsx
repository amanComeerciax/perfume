import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export default function Logo({ className = '', isLight = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 group select-none ${className}`}
      aria-label="LUXÉO PERFUMES Home"
    >
      {/* Luxury Geometric Monogram */}
      <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#B8893D]"
        >
          {/* Interlocking Luxury Facets */}
          <path
            d="M20 3L35 12V28L20 37L5 28V12L20 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />
          <path
            d="M20 3V37"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="2 2"
            className="opacity-60"
          />
          <path
            d="M11 15L20 20.5L29 15"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 25L20 19.5L29 25"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="20" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Name & Subtitle */}
      <div className="flex flex-col">
        <span
          className={`font-serif-luxury text-xl md:text-2xl tracking-[0.18em] font-medium uppercase transition-colors ${
            isLight ? 'text-white' : 'text-[#171717]'
          } group-hover:text-[#B8893D]`}
        >
          LUXÉO
        </span>
        <span
          className={`text-[9px] md:text-[10px] tracking-[0.38em] uppercase -mt-0.5 ${
            isLight ? 'text-white/70' : 'text-[#66615D]'
          }`}
        >
          PERFUMES
        </span>
      </div>
    </Link>
  );
}
