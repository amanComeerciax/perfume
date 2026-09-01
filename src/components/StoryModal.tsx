'use client';

import React from 'react';
import Image from 'next/image';
import { X, Sparkles, Volume2, Award, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from './Button';

export default function StoryModal() {
  const { isStoryModalOpen, setIsStoryModalOpen } = useCart();

  if (!isStoryModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setIsStoryModalOpen(false)}
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center py-10">
        <div
          className="relative bg-[#FAF7F3] rounded-[20px] max-w-4xl w-full p-6 sm:p-10 text-left shadow-2xl border border-[#E8E0D8] z-10 animate-scale-up overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => setIsStoryModalOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full text-[#66615D] hover:text-[#171717] hover:bg-black/5 transition-colors z-20"
            aria-label="Close story"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-medium tracking-[0.3em] text-[#B8893D] uppercase block mb-2">
              THE ATELIER MANIFESTO
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#171717]">
              Where Passion Meets Perfection
            </h2>
            <div className="w-12 h-[2px] bg-[#B8893D] mx-auto mt-3 rounded-full" />
          </div>

          {/* Visual Showcase */}
          <div className="relative w-full aspect-[16/9] rounded-[14px] overflow-hidden mb-8 shadow-inner bg-black">
            <Image
              src="/images/craft-perfumer.jpg"
              alt="Master perfumer at work in Luxéo atelier"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D2A96A] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Grasse, France — Harvest 2026</span>
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-light italic">
                "We do not create perfumes merely to smell pleasant. We engineer invisible architectures of memory and desire."
              </h3>
              <p className="text-xs text-white/70 mt-1 uppercase tracking-widest">
                — Jean-Paul Vaneau, Master Nose
              </p>
            </div>
          </div>

          {/* Three Story Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 pb-6 border-b border-[#E8E0D8]">
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#B8893D] font-bold">01. ETHICAL HARVEST</span>
              <h4 className="font-serif-luxury text-base font-semibold text-[#171717]">Single-Origin Absolutes</h4>
              <p className="text-xs text-[#66615D] leading-relaxed">
                From organic Bulgarian roses to hand-harvested Madagascar bourbon vanilla pods, we honour the earth with zero shortcuts.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#B8893D] font-bold">02. SLOW MACERATION</span>
              <h4 className="font-serif-luxury text-base font-semibold text-[#171717]">60-Day Maturation</h4>
              <p className="text-xs text-[#66615D] leading-relaxed">
                Every batch rests in dark temperature-controlled French oak barrels to allow delicate volatile esters to harmonize completely.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#B8893D] font-bold">03. ARTISANAL CRYSTAL</span>
              <h4 className="font-serif-luxury text-base font-semibold text-[#171717]">Hand-Finished Flacons</h4>
              <p className="text-xs text-[#66615D] leading-relaxed">
                Heavyweight crystal bottles fitted with seamless gold spray collars and custom engraved caps.
              </p>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#66615D]">
              Ready to find your signature essence?
            </p>
            <Button
              variant="gold"
              size="md"
              onClick={() => {
                setIsStoryModalOpen(false);
                const el = document.getElementById('collection');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-[4px] px-6 py-2.5 text-xs"
            >
              EXPLORE THE COLLECTION
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
