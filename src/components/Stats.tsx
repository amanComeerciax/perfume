'use client';

import React from 'react';
import { Users, Globe, Sparkles, BadgeCheck, HeartHandshake } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Stats() {
  const cardRef = useScrollAnimation<HTMLDivElement>({ type: 'fadeUp', duration: 0.9 });
  const gridRef = useScrollAnimation<HTMLDivElement>({ type: 'staggerUp', staggerDelay: 0.12, delay: 0.15 });

  const stats = [
    {
      icon: Users,
      value: '10K+',
      label: 'Happy Customers'
    },
    {
      icon: Globe,
      value: '30+',
      label: 'Countries'
    },
    {
      icon: Sparkles,
      value: '25+',
      label: 'Exclusive Scents'
    },
    {
      icon: BadgeCheck,
      value: '100%',
      label: 'Authentic Products'
    },
    {
      icon: HeartHandshake,
      value: 'Premium',
      label: 'Customer Support'
    }
  ];

  return (
    <section className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 -mt-6 sm:-mt-8 lg:-mt-10 mb-16 sm:mb-24">
      <div
        ref={cardRef}
        className="bg-white rounded-[14px] md:rounded-[18px] shadow-[0_15px_50px_rgba(40,30,20,0.07)] border border-[#E8E0D8]/70 py-7 md:py-9 px-6 md:px-8"
      >
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-[#E8E0D8]/60"
        >
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3.5 ${
                  idx > 0 ? 'pt-4 sm:pt-0' : ''
                } lg:justify-center px-2 group`}
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF4ED] text-[#B8893D] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-5 h-5 stroke-[1.6]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-[11.5px] sm:text-[12px] text-[#66615D] font-normal whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
