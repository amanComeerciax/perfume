'use client';

import React from 'react';
import { Leaf, Hourglass, FlaskConical, Crown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Benefits() {
  const cardRef = useScrollAnimation<HTMLDivElement>({ type: 'fadeUp', duration: 0.9 });
  const gridRef = useScrollAnimation<HTMLDivElement>({ type: 'staggerUp', staggerDelay: 0.15, delay: 0.2 });

  const benefits = [
    {
      icon: Leaf,
      title: 'PREMIUM INGREDIENTS',
      description: 'Sourced from the finest origins around the world.'
    },
    {
      icon: Hourglass,
      title: 'LONG LASTING',
      description: 'Crafted to last all day, leaving a memorable trail.'
    },
    {
      icon: FlaskConical,
      title: 'EXPERTLY CRAFTED',
      description: 'Blended by master perfumers with precision and passion.'
    },
    {
      icon: Crown,
      title: 'LUXURY REDEFINED',
      description: 'Experience fragrances like never before.'
    }
  ];

  return (
    <section className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 -mt-8 sm:-mt-12 lg:-mt-16">
      <div
        ref={cardRef}
        className="bg-white rounded-[14px] md:rounded-[18px] shadow-[0_15px_50px_rgba(40,30,20,0.07)] border border-[#E8E0D8]/70 py-8 md:py-10 px-6 md:px-8"
      >
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E8E0D8]/80"
        >
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4 sm:px-6 group"
              >
                {/* Gold Line Icon Container */}
                <div className="w-12 h-12 rounded-full bg-[#FAF7F3] border border-[#E8E0D8]/80 flex items-center justify-center text-[#B8893D] mb-4.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B8893D] group-hover:text-white group-hover:border-[#B8893D]">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>

                {/* Title */}
                <h2 className="text-[12.5px] font-semibold tracking-[0.18em] text-[#171717] uppercase mb-2">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-[13px] leading-[1.6] text-[#66615D] max-w-[220px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
