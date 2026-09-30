'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Droplet, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AtmosphereBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mobileBottleRef = useRef<HTMLDivElement>(null);
  const mobileGlowRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Sparkles,
      title: 'Premium Oud & Amber'
    },
    {
      icon: Droplet,
      title: 'Natural Essences'
    },
    {
      icon: Clock,
      title: 'Crafted for Every Moment'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // 1. Desktop Bottle Scrubbed Entrance from OUTSIDE above -> Stops in the PROPER MIDDLE
      if (bottleRef.current) {
        gsap.set(bottleRef.current, {
          xPercent: -50,
          yPercent: -50
        });

        gsap.fromTo(
          bottleRef.current,
          {
            xPercent: -50,
            yPercent: -50,
            y: -500,
            scale: 0.72,
            opacity: 0,
            rotation: -6
          },
          {
            xPercent: -50,
            yPercent: -50,
            y: 0,
            scale: 1,
            opacity: 1,
            rotation: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              end: 'center 50%',
              scrub: 1.5
            }
          }
        );

        // Pedestal glow expands smoothly as bottle touches down in the middle
        if (glowRef.current) {
          gsap.fromTo(
            glowRef.current,
            { scale: 0.1, opacity: 0 },
            {
              scale: 1.2,
              opacity: 0.85,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 65%',
                end: 'center 50%',
                scrub: 1.2
              }
            }
          );
        }
      }

      // 2. Mobile Bottle Scrubbed On-Scroll Entrance (Direct nahi, scroll ke sath smooth uper se aayegi)
      if (mobileBottleRef.current) {
        gsap.fromTo(
          mobileBottleRef.current,
          {
            y: -240,
            scale: 0.74,
            opacity: 0,
            rotation: -6
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            rotation: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              end: 'center 50%',
              scrub: 1.2
            }
          }
        );

        if (mobileGlowRef.current) {
          gsap.fromTo(
            mobileGlowRef.current,
            { scale: 0.15, opacity: 0 },
            {
              scale: 1.2,
              opacity: 0.8,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                end: 'center 50%',
                scrub: 1.2
              }
            }
          );
        }
      }

      // 3. Left side editorial text scroll scrub
      if (leftContentRef.current) {
        gsap.fromTo(
          leftContentRef.current,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'center 52%',
              scrub: 1.2
            }
          }
        );
      }

      // 4. Right side feature badges scroll scrub
      if (rightContentRef.current) {
        gsap.fromTo(
          rightContentRef.current,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'center 52%',
              scrub: 1.2
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center overflow-visible bg-[#0C0806] z-20 py-16 sm:py-20 lg:py-0"
    >
      {/* 1. Full-Bleed Edge-to-Edge Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/animatef.png"
          alt="The Fragrance Journey — Al Munzir"
          fill
          priority
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Ambient Vignette Gradients for Crystal Clear Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-black/85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/50 pointer-events-none md:hidden" />
      </div>

      {/* 2. Desktop Bottle On-Scroll Animation (Centered in PROPER VERTICAL & HORIZONTAL MIDDLE) */}
      <div
        ref={bottleRef}
        className="hidden md:flex absolute left-1/2 top-1/2 z-30 flex-col items-center justify-center pointer-events-none overflow-visible"
      >
        {/* Soft pedestal base glow */}
        <div
          ref={glowRef}
          className="absolute bottom-4 w-64 sm:w-80 md:w-96 h-14 bg-[#D4A359]/40 rounded-full blur-3xl pointer-events-none"
        />

        {/* Majestic Centered Bottle */}
        <div className="relative w-[280px] h-[340px] xs:w-[320px] xs:h-[390px] sm:w-[370px] sm:h-[440px] md:w-[400px] md:h-[480px] lg:w-[450px] lg:h-[540px] xl:w-[480px] xl:h-[580px] overflow-visible">
          <Image
            src="/images/mainbottle.png"
            alt="Al Munzir Signature Eau De Parfum"
            fill
            priority
            unoptimized
            className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.85)]"
          />
        </div>
      </div>

      {/* 3. Full Screen Content Wrapper */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 w-full h-full flex flex-col justify-between md:grid md:grid-cols-12 gap-8 items-center overflow-visible">
        {/* Left Side: Editorial Typography & Button */}
        <div
          ref={leftContentRef}
          className="md:col-span-5 lg:col-span-4 text-left flex flex-col items-start justify-center z-10"
        >
          <span className="font-sans-luxury text-[11.5px] sm:text-[12.5px] font-semibold tracking-[0.28em] text-[#E0B268] uppercase mb-3 block drop-shadow-sm">
            THE FRAGRANCE JOURNEY
          </span>

          <h3 className="font-serif-luxury text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] leading-[1.08] font-normal text-white tracking-tight mb-4 sm:mb-5">
            More Than <br />
            <span className="italic font-light">Just a Scent</span>
          </h3>

          <p className="font-sans-luxury text-white/85 text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] max-w-[380px] font-normal mb-7 sm:mb-8">
            Each fragrance is a journey — a blend of tradition, nature and emotion. Let your senses explore a world of pure elegance.
          </p>

          <button
            onClick={scrollToCollection}
            className="font-sans-luxury inline-flex items-center gap-2.5 px-7 py-4 rounded-[4px] bg-[#B8893D] hover:bg-[#A6772D] text-white text-[11.5px] sm:text-[12px] font-semibold tracking-[1.5px] uppercase transition-all duration-300 shadow-lg hover:shadow-2xl hover:gap-3.5 cursor-pointer"
          >
            <span>EXPLORE THE COLLECTION</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Bottle with Scrubbed On-Scroll Animation (Ab direct nahi aayegi, scroll ke sath uper se aayegi) */}
        <div
          ref={mobileBottleRef}
          className="md:hidden relative flex flex-col items-center justify-center my-6 z-20 pointer-events-none"
        >
          {/* Soft mobile glow */}
          <div
            ref={mobileGlowRef}
            className="absolute bottom-2 w-56 h-10 bg-[#D4A359]/35 rounded-full blur-2xl pointer-events-none"
          />

          <div className="relative w-[260px] h-[320px] xs:w-[290px] xs:h-[360px]">
            <Image
              src="/images/mainbottle.png"
              alt="Al Munzir Signature Eau De Parfum"
              fill
              priority
              unoptimized
              className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
            />
          </div>
        </div>

        {/* Center Spacer on Desktop Grid */}
        <div className="hidden md:block md:col-span-2 lg:col-span-4 pointer-events-none" />

        {/* Right Side: 3 Feature Badges */}
        <div
          ref={rightContentRef}
          className="w-full md:w-auto md:col-span-5 lg:col-span-4 flex flex-col gap-5 sm:gap-6 md:gap-7 justify-center md:items-start md:ml-auto z-10"
        >
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 group/item cursor-default"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D4A359]/60 bg-[#1F140D]/85 backdrop-blur-md flex items-center justify-center text-[#D4A359] shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover/item:scale-110 group-hover/item:border-[#E0B268]">
                  <Icon className="w-4.5 sm:w-5 h-4.5 sm:h-5 stroke-[1.75]" />
                </div>
                <span className="font-sans-luxury text-[13.5px] sm:text-[14.5px] font-medium text-white/95 tracking-wide group-hover/item:text-white transition-colors">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
