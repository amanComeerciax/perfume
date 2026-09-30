import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export default function Logo({ className = '', isLight = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center group select-none ${className}`}
      aria-label="Al Munzir Fragrance Home"
    >
      <Image
        src="/images/al-munzir-logo.png"
        alt="Al Munzir Fragrance"
        width={220}
        height={80}
        className={`h-14 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03] ${
          isLight ? 'brightness-0 invert' : ''
        }`}
        priority
      />
    </Link>
  );
}
