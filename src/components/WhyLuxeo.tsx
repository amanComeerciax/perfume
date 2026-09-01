'use client';

import React from 'react';
import Image from 'next/image';
import { WHY_ITEMS } from '@/lib/products';
import { Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WhyLuxeo() {
  const headerRef = useScrollAnimation<HTMLDivElement>({ type: 'fadeUp', duration: 0.9 });
  const cardsRef = useScrollAnimation<HTMLDivElement>({ type: 'staggerUp', staggerDelay: 0.18, delay: 0.1 });

  return (
    <section id="ingredients" className="py-20 md:py-28 bg-[#FAF7F3] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.28em] text-[#B8893D] uppercase block mb-3">
            CRAFTSMANSHIP & HERITAGE
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171717] tracking-tight">
            The Art Behind Every Scent
          </h2>
          <div className="w-12 h-[2px] bg-[#B8893D] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Editorial Cards with Stagger */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-[14px] overflow-hidden border border-[#E8E0D8]/70 shadow-[0_4px_25px_rgba(40,30,20,0.04)] hover:shadow-[0_20px_45px_rgba(40,30,20,0.1)] transition-all duration-400 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F7F2EC]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-medium tracking-widest text-[#171717] uppercase border border-[#E8E0D8]/80 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#B8893D]" />
                  <span>{item.tag}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-xl sm:text-[22px] font-semibold text-[#171717] tracking-wide uppercase mb-1 group-hover:text-[#B8893D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[12px] font-medium text-[#B8893D] tracking-wider uppercase mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-[13.5px] leading-[1.7] text-[#66615D] font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EAE4] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#8E8883] tracking-widest">
                    STEP 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-medium text-[#171717] tracking-widest uppercase group-hover:text-[#B8893D] transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
