'use client';

import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS } from '@/lib/products';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ReviewsSection() {
  const headerRef = useScrollAnimation<HTMLDivElement>({ type: 'fadeUp', duration: 0.9 });
  const reviewsRef = useScrollAnimation<HTMLDivElement>({ type: 'staggerUp', staggerDelay: 0.16, delay: 0.1 });

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FAF7F3] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.28em] text-[#D98991] uppercase block mb-3">
            VERIFIED EXPERIENCES
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171717] tracking-tight">
            Voices of Devotion
          </h2>
          <div className="w-12 h-[2px] bg-[#B8893D] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Review Cards with GSAP Stagger */}
        <div ref={reviewsRef} className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-[14px] p-7 sm:p-8 border border-[#E8E0D8]/70 shadow-[0_4px_25px_rgba(40,30,20,0.04)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_rgba(40,30,20,0.08)]"
            >
              <div>
                {/* Top: Stars & Fragrance Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#B8893D]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium tracking-wider text-[#B8893D] uppercase bg-[#FAF4ED] px-2.5 py-0.5 rounded-[3px]">
                    {rev.productName}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-lg font-semibold text-[#171717] mb-3">
                  &ldquo;{rev.title}&rdquo;
                </h3>

                <p className="text-[13.5px] leading-[1.7] text-[#66615D] italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Bottom: Author Info */}
              <div className="mt-6 pt-4 border-t border-[#F0EAE4] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#171717] tracking-wider uppercase">
                    {rev.author}
                  </h4>
                  <span className="text-[11px] text-[#8E8883]">{rev.location}</span>
                </div>
                {rev.verified && (
                  <div className="flex items-center gap-1 text-[11px] font-medium text-[#2E7D32]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#2E7D32]" />
                    <span>Verified Collector</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
