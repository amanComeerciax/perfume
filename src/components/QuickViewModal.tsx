'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Star, ShoppingBag, Check, Shield, Sparkles, Clock, Compass } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from './Button';

export default function QuickViewModal() {
  const { isQuickViewOpen, closeQuickView, quickViewProduct, addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<'50ml' | '100ml'>('100ml');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!isQuickViewOpen || !quickViewProduct) return null;

  const currentPrice =
    selectedSize === '50ml'
      ? Math.round(quickViewProduct.price * 0.65)
      : quickViewProduct.price;

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(currentPrice);

  const handleAdd = () => {
    addToCart(quickViewProduct, quantity, selectedSize);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      closeQuickView();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={closeQuickView}
        className="fixed inset-0 bg-black/55 backdrop-blur-sm transition-opacity"
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center py-8">
        <div
          className="relative bg-white rounded-[18px] max-w-3xl w-full p-6 sm:p-9 text-left shadow-2xl border border-[#E8E0D8] z-10 animate-scale-up overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={closeQuickView}
            className="absolute top-5 right-5 p-2 rounded-full text-[#66615D] hover:text-[#171717] hover:bg-black/5 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Product Image */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] bg-[#FAF7F3] rounded-[14px] p-4 flex items-center justify-center border border-[#E8E0D8]/60">
                <Image
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  fill
                  sizes="320px"
                  className="object-contain p-2"
                />
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-[#66615D]">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#B8893D]" />
                  <span>{quickViewProduct.longevity}</span>
                </div>
                <div className="w-px h-4 bg-[#E8E0D8]" />
                <div className="flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#B8893D]" />
                  <span>{quickViewProduct.sillage}</span>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Purchase Form */}
            <div className="md:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10.5px] tracking-[0.2em] font-semibold text-[#B8893D] uppercase bg-[#FAF4ED] px-2.5 py-0.5 rounded-[3px]">
                  {quickViewProduct.category}
                </span>
                <span className="text-[11px] text-[#8E8883]">
                  {quickViewProduct.concentration}
                </span>
              </div>

              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#171717] uppercase tracking-wide">
                {quickViewProduct.name}
              </h2>

              <p className="text-xs text-[#B8893D] font-medium tracking-widest uppercase mt-0.5 mb-3">
                {quickViewProduct.subtitle}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-serif-luxury font-bold text-[#171717]">
                  {formattedPrice}
                </span>
                {quickViewProduct.originalPrice && selectedSize === '100ml' && (
                  <span className="text-sm text-[#8E8883] line-through">
                    {quickViewProduct.originalPrice}
                  </span>
                )}
                <span className="text-[11px] text-[#2E7D32] font-medium">Taxes Included</span>
              </div>

              {/* Description */}
              <p className="text-xs leading-[1.7] text-[#66615D] mb-5">
                {quickViewProduct.detailedDescription || quickViewProduct.description}
              </p>

              {/* Size Selector */}
              <div className="mb-5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#171717] block mb-2">
                  Select Size
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedSize('50ml')}
                    className={`flex-1 py-2.5 px-3 rounded-[5px] text-xs font-medium border transition-all cursor-pointer ${
                      selectedSize === '50ml'
                        ? 'border-[#B8893D] bg-[#FAF4ED] text-[#171717] shadow-2xs'
                        : 'border-[#E8E0D8] text-[#66615D] hover:border-[#171717]'
                    }`}
                  >
                    <span className="block font-semibold">50 ML</span>
                    <span className="text-[10px] text-[#8E8883]">Travel Size</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedSize('100ml')}
                    className={`flex-1 py-2.5 px-3 rounded-[5px] text-xs font-medium border transition-all cursor-pointer ${
                      selectedSize === '100ml'
                        ? 'border-[#B8893D] bg-[#FAF4ED] text-[#171717] shadow-2xs'
                        : 'border-[#E8E0D8] text-[#66615D] hover:border-[#171717]'
                    }`}
                  >
                    <span className="block font-semibold">100 ML</span>
                    <span className="text-[10px] text-[#B8893D] font-medium">Full Flacon</span>
                  </button>
                </div>
              </div>

              {/* Fragrance Notes Pills */}
              <div className="mb-6 p-3 bg-[#FAF7F3] rounded-[8px] border border-[#E8E0D8]/80 text-[11px] space-y-1">
                <div>
                  <strong className="text-[#171717]">Top:</strong>{' '}
                  <span className="text-[#66615D]">
                    {quickViewProduct.notes.top.join(' • ')}
                  </span>
                </div>
                <div>
                  <strong className="text-[#171717]">Heart:</strong>{' '}
                  <span className="text-[#66615D]">
                    {quickViewProduct.notes.heart.join(' • ')}
                  </span>
                </div>
                <div>
                  <strong className="text-[#171717]">Base:</strong>{' '}
                  <span className="text-[#66615D]">
                    {quickViewProduct.notes.base.join(' • ')}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#E8E0D8] rounded-[4px] bg-[#FAF7F3] py-1 px-2">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 text-sm text-[#171717] hover:text-[#B8893D]"
                  >
                    -
                  </button>
                  <span className="px-2 text-xs font-semibold text-[#171717]">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 text-sm text-[#171717] hover:text-[#B8893D]"
                  >
                    +
                  </button>
                </div>

                <Button
                  variant="gold"
                  size="md"
                  onClick={handleAdd}
                  className="flex-1 justify-center rounded-[4px]"
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag — {formattedPrice}</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
