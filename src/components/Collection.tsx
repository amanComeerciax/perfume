'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCarousel from './ProductCarousel';
import { PRODUCTS } from '@/lib/products';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Collection() {
  const headerRef = useScrollAnimation<HTMLDivElement>({ type: 'fadeLeft', duration: 0.9 });
  const carouselRef = useScrollAnimation<HTMLDivElement>({ type: 'fadeUp', duration: 1, delay: 0.2 });

  return (
    <section
      id="collection"
      className="py-20 md:py-28 lg:py-32 bg-[#FAF7F3] border-t border-[#F0EAE4] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14"
        >
          <div>
            <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.28em] text-[#D98991] uppercase block mb-3">
              OUR COLLECTION
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171717] tracking-tight">
              Find Your Signature Scent
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="#collection"
              className="group inline-flex items-center gap-2 text-[12px] tracking-[0.16em] font-medium text-[#171717] uppercase hover:text-[#B8893D] transition-colors border-b border-[#171717]/30 pb-0.5 hover:border-[#B8893D]"
            >
              <span>VIEW ALL COLLECTION</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Product Carousel Component */}
        <div ref={carouselRef}>
          <ProductCarousel products={PRODUCTS} />
        </div>
      </div>
    </section>
  );
}
