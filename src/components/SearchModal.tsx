'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/lib/products';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, openQuickView } = useCart();
  const [query, setQuery] = useState('');
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);

  const families = ['All', 'Warm & Amber', 'Floral & Romantic', 'Gourmand & Alluring', 'Woody & Smoky'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesFamily =
        !selectedFamily || selectedFamily === 'All' || product.category === selectedFamily;

      const q = query.toLowerCase().trim();
      if (!q) return matchesFamily;

      const matchesName = product.name.toLowerCase().includes(q);
      const matchesDesc = product.description.toLowerCase().includes(q);
      const matchesNotes = [
        ...product.notes.top,
        ...product.notes.heart,
        ...product.notes.base
      ].some((n) => n.toLowerCase().includes(q));

      return matchesFamily && (matchesName || matchesDesc || matchesNotes);
    });
  }, [query, selectedFamily]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      <div className="min-h-screen px-4 text-center flex items-start justify-center pt-20 pb-12">
        <div
          className="relative bg-[#FAF7F3] rounded-[18px] max-w-2xl w-full p-6 sm:p-8 text-left shadow-2xl border border-[#E8E0D8] z-10 animate-scale-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header & Search Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E8E0D8]">
            <div className="relative flex-1 mr-4">
              <Search className="w-5 h-5 text-[#B8893D] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                placeholder="Search by scent notes (Rose, Amber, Vanilla, Oud)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white rounded-[6px] border border-[#E8E0D8] text-sm text-[#171717] focus:outline-none focus:border-[#B8893D] shadow-2xs"
              />
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 rounded-full text-[#66615D] hover:text-[#171717] hover:bg-black/5"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Fragrance Family Tags */}
          <div className="pt-4 pb-2 flex flex-wrap gap-2 items-center">
            <span className="text-[10.5px] uppercase tracking-widest text-[#8E8883] mr-1">
              Family:
            </span>
            {families.map((fam) => (
              <button
                key={fam}
                onClick={() => setSelectedFamily(fam === 'All' ? null : fam)}
                className={`px-3 py-1 rounded-full text-[11px] tracking-wider transition-colors cursor-pointer ${
                  (selectedFamily === fam || (fam === 'All' && !selectedFamily))
                    ? 'bg-[#B8893D] text-white'
                    : 'bg-white text-[#66615D] hover:text-[#171717] border border-[#E8E0D8]'
                }`}
              >
                {fam}
              </button>
            ))}
          </div>

          {/* Search Results */}
          <div className="mt-6 space-y-3 max-h-[380px] overflow-y-auto pr-1 no-scrollbar">
            {filteredProducts.length === 0 ? (
              <div className="py-12 text-center text-[#8E8883]">
                <p className="text-sm">No fragrances found matching "{query}".</p>
                <p className="text-xs mt-1">Try searching for notes like "Cardamom", "Rose", or "Saffron".</p>
              </div>
            ) : (
              filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    setIsSearchOpen(false);
                    openQuickView(prod);
                  }}
                  className="group bg-white rounded-[10px] p-3.5 border border-[#E8E0D8] hover:border-[#B8893D] transition-all flex items-center justify-between cursor-pointer hover:shadow-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-14 bg-[#FAF7F3] rounded-[6px] overflow-hidden shrink-0">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="48px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif-luxury text-base font-semibold text-[#171717] group-hover:text-[#B8893D] transition-colors">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-[#66615D]">{prod.subtitle}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] bg-[#FAF4ED] text-[#B8893D] px-2 py-0.5 rounded font-medium">
                          {prod.category}
                        </span>
                        <span className="text-[11px] text-[#171717] font-semibold">
                          {prod.formattedPrice}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#B8893D] font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
