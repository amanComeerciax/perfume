'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/products';
import { Sparkles, Layers, ShieldCheck, Heart } from 'lucide-react';
import Button from './Button';
import { useCart } from '@/context/CartContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FragranceNotesExplorer() {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const selectedProduct = PRODUCTS[selectedProductIndex];
  const { addToCart, openQuickView } = useCart();
  const headerRef = useScrollAnimation<HTMLDivElement>({ type: 'fadeUp', duration: 0.9 });
  const cardRef = useScrollAnimation<HTMLDivElement>({ type: 'scaleIn', duration: 1, delay: 0.15 });

  return (
    <section className="py-20 md:py-28 bg-[#F5EEE8] border-t border-[#E8E0D8]/60">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.28em] text-[#B8893D] uppercase block mb-3">
            OLFACTORY PYRAMID
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171717] tracking-tight">
            Explore Note Architecture
          </h2>
          <p className="text-[#66615D] text-sm sm:text-base mt-3 max-w-lg mx-auto">
            Each Luxéo fragrance unfolds in three distinct olfactory stages from opening burst to enduring dry-down.
          </p>
        </div>

        {/* Perfume Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {PRODUCTS.map((prod, idx) => (
            <button
              key={prod.id}
              onClick={() => setSelectedProductIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-[11.5px] tracking-[0.16em] font-medium uppercase transition-all duration-300 cursor-pointer ${
                selectedProductIndex === idx
                  ? 'bg-[#171717] text-white shadow-md'
                  : 'bg-white/80 text-[#66615D] hover:bg-white hover:text-[#171717] border border-[#E8E0D8]'
              }`}
            >
              {prod.name}
            </button>
          ))}
        </div>

        {/* Interactive Pyramid Display */}
        <div ref={cardRef} className="bg-white rounded-[18px] p-6 sm:p-10 lg:p-12 border border-[#E8E0D8]/70 shadow-[0_15px_50px_rgba(40,30,20,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Product Bottle & Quick Specs */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 sm:w-60 aspect-[3/4] mb-6 bg-[#FAF7F3] rounded-[14px] p-4 flex items-center justify-center">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  sizes="240px"
                  className="object-contain p-2 transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#171717] tracking-wider uppercase">
                {selectedProduct.name}
              </h3>
              <p className="text-xs text-[#B8893D] font-medium tracking-widest uppercase mt-1">
                {selectedProduct.subtitle}
              </p>

              <div className="flex items-center gap-6 mt-5 pt-4 border-t border-[#F0EAE4] text-xs text-[#66615D]">
                <div>
                  <span className="block font-semibold text-[#171717]">
                    {selectedProduct.longevity}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8883]">
                    Longevity
                  </span>
                </div>
                <div className="w-px h-6 bg-[#E8E0D8]" />
                <div>
                  <span className="block font-semibold text-[#171717]">
                    {selectedProduct.sillage}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8883]">
                    Sillage
                  </span>
                </div>
                <div className="w-px h-6 bg-[#E8E0D8]" />
                <div>
                  <span className="block font-semibold text-[#171717]">
                    {selectedProduct.formattedPrice}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8883]">
                    100 ML
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => addToCart(selectedProduct, 1, '100ml')}
                  className="px-6 py-2.5 text-[11.5px]"
                >
                  ADD TO BAG
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => openQuickView(selectedProduct)}
                  className="px-5 py-2.5 text-[11.5px]"
                >
                  VIEW PROFILE
                </Button>
              </div>
            </div>

            {/* Right: The 3 Pyramid Tiers */}
            <div className="lg:col-span-7 space-y-4">
              {/* TOP NOTES */}
              <div className="bg-[#FAF7F3] rounded-[12px] p-5 sm:p-6 border border-[#E8E0D8]/60 transition-all hover:border-[#B8893D]/40">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B8893D]" />
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#171717] uppercase">
                      Top Notes (First 15 Minutes)
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8E8883]">
                    First Impression
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.notes.top.map((note, nIdx) => (
                    <span
                      key={nIdx}
                      className="bg-white px-3.5 py-1.5 rounded-full text-xs font-medium text-[#171717] border border-[#E8E0D8] shadow-2xs"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* HEART NOTES */}
              <div className="bg-[#FAF7F3] rounded-[12px] p-5 sm:p-6 border border-[#E8E0D8]/60 transition-all hover:border-[#B8893D]/40">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D2A96A]" />
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#171717] uppercase">
                      Heart Notes (2 - 4 Hours)
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8E8883]">
                    Soul & Character
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.notes.heart.map((note, nIdx) => (
                    <span
                      key={nIdx}
                      className="bg-white px-3.5 py-1.5 rounded-full text-xs font-medium text-[#171717] border border-[#E8E0D8] shadow-2xs"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* BASE NOTES */}
              <div className="bg-[#FAF7F3] rounded-[12px] p-5 sm:p-6 border border-[#E8E0D8]/60 transition-all hover:border-[#B8893D]/40">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C8747C]" />
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#171717] uppercase">
                      Base Notes (8+ Hours)
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8E8883]">
                    Enduring Drydown
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.notes.base.map((note, nIdx) => (
                    <span
                      key={nIdx}
                      className="bg-white px-3.5 py-1.5 rounded-full text-xs font-medium text-[#171717] border border-[#E8E0D8] shadow-2xs"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
