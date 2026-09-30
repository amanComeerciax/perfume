'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import Button from './Button';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/lib/products';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { setIsStoryModalOpen, openQuickView } = useCart();

  const heroRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const mobileBottleRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      eyebrow: 'ESSENCE OF ELEGANCE',
      titleLine1: 'Fragrance',
      titleLine2: 'That Defines You',
      description:
        'Crafted with the world’s finest ingredients to bring you timeless scents that leave a lasting impression.',
      product: PRODUCTS[0]
    },
    {
      eyebrow: 'PURE HAUTE PERFUMERY',
      titleLine1: 'Alchemy of',
      titleLine2: 'Modern Luxury',
      description:
        'Each formulation undergoes 60 days of slow maceration in Grasse, marrying artisanal heritage with contemporary sophistication.',
      product: PRODUCTS[1]
    },
    {
      eyebrow: 'SIGNATURE SCENTS',
      titleLine1: 'Timeless Trails,',
      titleLine2: 'Unspoken Words',
      description:
        'A multi-sensory journey designed to linger intimately, leaving an unforgettable aura in every room you enter.',
      product: PRODUCTS[2]
    }
  ];

  const current = slides[activeSlide];

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // GSAP Entrance & ScrollTrigger Parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Page Load Animation Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Background subtle zoom-settle
      if (bgImageRef.current) {
        tl.fromTo(
          bgImageRef.current,
          { scale: 1.08, opacity: 0 },
          { scale: 1.02, opacity: 1, duration: 1.6, ease: 'power2.out' },
          0
        );
      }

      // Eyebrow slide & fade
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          0.3
        );
      }

      // Heading lines
      if (headingRef.current) {
        tl.fromTo(
          headingRef.current.children,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.12 },
          0.45
        );
      }

      // Gold accent line expand
      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { scaleX: 0, opacity: 0, transformOrigin: 'center center' },
          { scaleX: 1, opacity: 1, duration: 0.7 },
          0.7
        );
      }

      // Supporting description
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          0.8
        );
      }

      // CTA Buttons
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
          0.95
        );
      }

      // Mobile bottle
      if (mobileBottleRef.current) {
        tl.fromTo(
          mobileBottleRef.current,
          { y: 35, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 1 },
          0.8
        );
      }

      // Slide Indicators
      if (indicatorRef.current) {
        tl.fromTo(
          indicatorRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          1.1
        );
      }

      // 2. ScrollTrigger Parallax on Desktop
      if (heroRef.current && bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 14,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-[640px] md:min-h-[700px] lg:min-h-[760px] xl:min-h-[800px] pt-24 sm:pt-28 md:pt-32 lg:pt-32 xl:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-20 xl:pb-24 flex items-center overflow-hidden bg-[#FAF7F3]"
    >
      {/* ===== DESKTOP ONLY: FULL-BLEED COMPOSITED SCENE (lg:block) ===== */}
      <div
        ref={bgImageRef}
        className="hidden lg:block absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none origin-left"
      >
        <Image
          src="/images/heos.png"
          alt="Al Munzir Perfumes Hero Scene"
          fill
          priority
          unoptimized
          className="object-cover scale-[1.02] origin-left"
          style={{ objectPosition: '0% center' }}
        />
        {/* Soft luxury gradient scrim on desktop to guarantee 100% text readability */}
        <div className="absolute inset-y-0 left-0 w-[58%] xl:w-[50%] bg-gradient-to-r from-[#FAF7F3]/95 via-[#FAF7F3]/65 to-transparent pointer-events-none" />
      </div>

      {/* ===== MOBILE ONLY: SUBTLE AMBIENT WARMTH BACKGROUND ===== */}
      <div className="lg:hidden absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-gradient-to-b from-[#FAF7F3] via-[#F6EFE9] to-[#FAF7F3]">
        <div className="absolute top-10 right-0 w-72 h-72 bg-[#F2E5D5]/60 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-60 h-60 bg-[#EFE0D0]/50 rounded-full blur-2xl" />
      </div>

      {/* ===== HERO CONTENT OVERLAY (z-10) ===== */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Real Typography, Heading & Actions */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            {/* Eyebrow */}
            <span
              ref={eyebrowRef}
              className="font-sans-luxury text-[11px] sm:text-[12px] font-bold tracking-[3px] text-[#A07430] uppercase mb-3.5 sm:mb-4 block drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
            >
              {current.eyebrow}
            </span>

            {/* Main Heading matching Reference */}
            <h1
              ref={headingRef}
              className="font-serif-luxury text-[36px] xs:text-[42px] sm:text-[50px] md:text-[56px] lg:text-[62px] xl:text-[70px] leading-[1.06] font-medium text-[#141210] tracking-[-0.01em] mb-4 sm:mb-5 drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]"
            >
              <span className="block">{current.titleLine1}</span>
              <span className="block italic font-light">{current.titleLine2}</span>
            </h1>

            {/* Gold Decorative Line */}
            <div ref={lineRef} className="w-14 h-[2px] bg-[#B8893D] mb-4 sm:mb-5 rounded-full mx-auto lg:mx-0 shadow-[0_1px_3px_rgba(184,137,61,0.3)]" />

            {/* Supporting Description */}
            <p
              ref={descRef}
              className="font-sans-luxury text-[#23201D] text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.75] max-w-[480px] font-normal mb-7 sm:mb-8 mx-auto lg:mx-0 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
            >
              {current.description}
            </p>

            {/* ===== MOBILE ONLY: BOTTLE DISPLAY (ABOVE BUTTONS) ===== */}
            <div
              ref={mobileBottleRef}
              className="lg:hidden flex flex-col items-center justify-center pt-1 pb-6 cursor-pointer"
              onClick={() => openQuickView(current.product)}
            >
              <div className="relative w-[280px] h-[340px] xs:w-[310px] xs:h-[370px] flex items-center justify-center">
                {/* Soft pedestal base glow */}
                <div className="absolute bottom-2 w-48 h-8 bg-[#D4A359]/20 rounded-full blur-md" />
                <Image
                  src="/images/mainbottle.png"
                  alt="Al Munzir Signature Eau De Parfum"
                  fill
                  priority
                  unoptimized
                  className="object-contain drop-shadow-[0_20px_35px_rgba(40,30,20,0.18)]"
                />
              </div>
              <span className="text-[11px] text-[#B8893D] font-medium tracking-[0.2em] uppercase mt-2">
                Tap to view details · 100ml
              </span>
            </div>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-7 sm:mb-8 w-full max-w-[420px] lg:max-w-none mx-auto lg:mx-0"
            >
              <Button
                variant="gold"
                size="lg"
                onClick={scrollToCollection}
                className="font-sans-luxury flex-1 sm:flex-none justify-center px-4 xs:px-6 sm:px-8 py-3.5 text-[11px] xs:text-[11.5px] sm:text-[12px] font-semibold tracking-[1px] rounded-[4px] whitespace-nowrap text-center shadow-md"
              >
                EXPLORE COLLECTION
              </Button>

              <button
                onClick={() => setIsStoryModalOpen(true)}
                className="font-sans-luxury flex-1 sm:flex-none justify-center inline-flex items-center gap-2.5 sm:gap-3 px-4 xs:px-5 sm:px-6 py-3.5 rounded-[4px] border border-[#171717]/40 text-[#171717] bg-white/95 backdrop-blur-md hover:border-[#171717] hover:bg-white transition-all duration-300 group text-[11px] xs:text-[11.5px] sm:text-[12px] font-semibold tracking-[1px] uppercase cursor-pointer whitespace-nowrap shadow-xs"
                aria-label="Play our story video"
              >
                <span>OUR STORY</span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#171717]/40 flex items-center justify-center group-hover:border-[#B8893D] group-hover:text-[#B8893D] transition-colors shrink-0">
                  <Play className="w-2 sm:w-2.5 h-2 sm:h-2.5 fill-current ml-0.5" />
                </span>
              </button>
            </div>

            {/* Slide Indicators: 01 — 02 — 03 in Luxury Frosted Pill Badge */}
            <div
              ref={indicatorRef}
              className="inline-flex items-center justify-center lg:justify-start gap-3 text-xs tracking-[0.2em] font-medium select-none px-4 py-2 rounded-full bg-white/85 backdrop-blur-md border border-[#E8E0D8] shadow-[0_2px_12px_rgba(40,30,20,0.06)]"
            >
              {slides.map((_, idx) => {
                const num = `0${idx + 1}`;
                const isActive = activeSlide === idx;
                return (
                  <React.Fragment key={idx}>
                    <button
                      onClick={() => setActiveSlide(idx)}
                      className={`transition-all duration-300 cursor-pointer ${isActive
                        ? 'text-[#B8893D] font-bold scale-110'
                        : 'text-[#443E38] hover:text-[#171717]'
                        }`}
                      aria-label={`Slide ${num}`}
                    >
                      {num}
                    </button>
                    {idx < slides.length - 1 && (
                      <span className="text-[#C5BBB0] font-light">—</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Desktop Right Column: Clickable Bottle Region */}
          <div
            className="hidden lg:flex lg:col-span-5 xl:col-span-6 h-[260px] sm:h-[340px] lg:h-[500px] items-end justify-center lg:justify-end cursor-pointer group"
            onClick={() => openQuickView(current.product)}
          >
            <div className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
