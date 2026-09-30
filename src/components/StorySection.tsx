'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { useCart } from '@/context/CartContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function StorySection() {
  const { setIsStoryModalOpen } = useCart();
  const textRef = useScrollAnimation<HTMLDivElement>({ type: 'fadeRight', duration: 1 });
  const imageRef = useScrollAnimation<HTMLDivElement>({ type: 'scaleIn', duration: 1.1, delay: 0.15 });

  return (
    <section id="story" className="py-20 md:py-28 lg:py-32 bg-[#F5EEE8] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story Narrative */}
          <div ref={textRef} className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.28em] text-[#D98991] uppercase block mb-3">
              OUR STORY
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#171717] leading-[1.08] tracking-tight mb-5">
              Where Passion <br />
              <span className="italic font-light">Meets Perfection</span>
            </h2>

            {/* Gold Decorative Line */}
            <div className="w-12 h-[2px] bg-[#B8893D] mb-6 rounded-full" />

            <p className="text-[#66615D] text-base sm:text-[17px] leading-[1.75] font-normal mb-8">
              Every bottle of Al Munzir is a story bottled in a moment. A blend of nature’s finest and the expertise of master perfumers.
            </p>

            <div>
              <Button
                variant="rose"
                size="md"
                onClick={() => setIsStoryModalOpen(true)}
                className="rounded-[4px] px-7 py-3.5 text-[12px] bg-[#C8747C] hover:bg-[#B8656E]"
              >
                DISCOVER OUR JOURNEY
              </Button>
            </div>
          </div>

          {/* Right Column: Editorial Arched Still Life */}
          <div ref={imageRef} className="lg:col-span-7 relative">
            <div className="relative w-full aspect-[3/2] max-h-[460px] rounded-[24px] md:rounded-[36px] overflow-hidden shadow-[0_20px_60px_rgba(40,30,20,0.12)] border border-white/60 group">
              <Image
                src="/images/story-still-life.jpg"
                alt="Al Munzir perfume still life with blood orange, amber crystal, and cherry blossoms on driftwood"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Editorial Frame Highlight */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[24px] md:rounded-[36px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
