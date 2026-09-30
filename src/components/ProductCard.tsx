'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, ShoppingBag, Check } from 'lucide-react';
import { Product } from '@/lib/types';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, openQuickView } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1, '100ml');
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div
      onClick={() => openQuickView(product)}
      className="group relative bg-white rounded-[12px] p-5 sm:p-6 transition-all duration-400 hover:-translate-y-1.5 shadow-[0_4px_25px_rgba(40,30,20,0.04)] hover:shadow-[0_20px_45px_rgba(40,30,20,0.1)] border border-[#E8E0D8]/60 flex flex-col justify-between cursor-pointer"
    >
      {/* Top badges */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] tracking-[0.2em] font-semibold text-[#B8893D] uppercase bg-[#FAF4ED] px-2.5 py-1 rounded-[3px]">
          {product.category}
        </span>
        <span className="text-[11px] text-[#8E8883] font-mono tracking-wider">
          {product.volume}
        </span>
      </div>

      {/* Product Image Stage */}
      <div className="relative w-full aspect-[4/5] my-2 bg-[#FBF9F7] rounded-[8px] overflow-hidden flex items-center justify-center">
        <Image
          src={product.image}
          alt={`Al Munzir ${product.name} Eau De Parfum`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
          className="object-contain p-3 transition-transform duration-600 ease-out group-hover:scale-108"
        />

        {/* Hover Quick View Overlay Button */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
            className="w-10 h-10 rounded-full bg-white text-[#171717] hover:text-[#B8893D] shadow-md flex items-center justify-center transition-transform hover:scale-110"
            aria-label={`Quick view ${product.name}`}
          >
            <Eye className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleAdd}
            className="px-4 py-2 rounded-full bg-[#B8893D] text-white text-[11px] font-medium tracking-wider uppercase shadow-md flex items-center gap-1.5 transition-transform hover:scale-105 hover:bg-[#A37833]"
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Details matching reference */}
      <div className="pt-3 flex flex-col">
        <h3 className="font-serif-luxury text-lg sm:text-[19px] font-semibold text-[#171717] tracking-[0.06em] uppercase group-hover:text-[#B8893D] transition-colors">
          {product.name}
        </h3>

        <p className="text-[12.5px] text-[#66615D] mt-1 font-normal tracking-wide">
          {product.description}
        </p>

        <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#F0EAE4]">
          <span className="text-[15px] font-semibold text-[#171717] tracking-tight">
            {product.formattedPrice}
          </span>
          <span className="text-[11px] text-[#B8893D] font-medium tracking-wider uppercase group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
            Explore →
          </span>
        </div>
      </div>
    </div>
  );
}
