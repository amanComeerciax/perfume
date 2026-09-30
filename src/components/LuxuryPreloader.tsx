'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function LuxuryPreloader() {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable body scroll while loading
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          setLoading(false);
        }
      });

      // 1. Initial Logo & Text reveal
      tl.fromTo(
        logoRef.current,
        { scale: 0.8, opacity: 0, rotation: -10 },
        { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: 'power3.out' }
      );

      tl.fromTo(
        textRef.current,
        { y: 20, opacity: 0, letterSpacing: '0.2em' },
        { y: 0, opacity: 1, letterSpacing: '0.35em', duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      );

      // 2. Animate counter from 0 to 100 and progress bar
      const counter = { val: 0 };
      tl.to(
        counter,
        {
          val: 100,
          duration: 1.4,
          ease: 'power2.inOut',
          onUpdate: () => {
            const current = Math.floor(counter.val);
            setPercent(current);
            if (barRef.current) {
              barRef.current.style.width = `${current}%`;
            }
          }
        },
        '-=0.2'
      );

      // 3. Exit Animation: Logo & text fade up, curtain lifts up smoothly
      tl.to([logoRef.current, textRef.current, percentRef.current?.parentElement], {
        y: -40,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.in',
        stagger: 0.05
      });

      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut'
      }, '-=0.2');
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#FAF7F3] flex flex-col items-center justify-center pointer-events-auto select-none overflow-hidden"
    >
      {/* Background subtle radial warm glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#F0E4D4] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Al Munzir Logo */}
        <div ref={logoRef} className="w-48 h-48 sm:w-56 sm:h-56 mb-6 relative">
          <Image
            src="/images/al-munzir-logo.png"
            alt="Al Munzir Fragrance"
            fill
            className="object-contain drop-shadow-[0_4px_12px_rgba(184,137,61,0.25)]"
            priority
          />
        </div>

        {/* Brand Name */}
        <div ref={textRef} className="text-center mb-8">
          <p className="font-sans-luxury text-[10px] tracking-[0.45em] text-[#B8893D] uppercase mt-1">
            LUXURY PERFUMERY · ESSENCE OF ELEGANCE
          </p>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="w-48 sm:w-60 flex flex-col items-center">
          <div className="w-full h-[2px] bg-[#E8E0D8] rounded-full overflow-hidden mb-3">
            <div
              ref={barRef}
              className="h-full bg-gradient-to-r from-[#D4A359] via-[#B8893D] to-[#8C6226] transition-all duration-75 ease-out rounded-full"
              style={{ width: '0%' }}
            />
          </div>

          <div className="flex items-center justify-between w-full text-[11px] font-sans-luxury text-[#8E8883] tracking-widest">
            <span>LOADING SCENT</span>
            <span ref={percentRef} className="font-mono text-[#B8893D]">
              {String(percent).padStart(2, '0')}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
