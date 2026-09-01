'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.firstElementChild?.clientWidth || 300;
      const scrollAmount = direction === 'left' ? -(cardWidth + 24) : (cardWidth + 24);
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group/carousel">
      {/* Left Navigation Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F5E6E8] text-[#171717] hover:bg-[#B8893D] hover:text-white shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Previous Products"
      >
        <ChevronLeft className="w-5 h-5 stroke-[2] -ml-0.5" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F5E6E8] text-[#171717] hover:bg-[#B8893D] hover:text-white shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Next Products"
      >
        <ChevronRight className="w-5 h-5 stroke-[2] -mr-0.5" />
      </button>

      {/* Product List / Scroll Container */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 overflow-x-auto no-scrollbar pb-4 pt-2 snap-x snap-mandatory"
      >
        {products.map((product) => (
          <div key={product.id} className="snap-center w-full min-w-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
