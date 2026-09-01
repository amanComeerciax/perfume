'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from './Button';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    formattedSubtotal,
    totalItems,
    clearCart
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  // Free shipping threshold = ₹8,000
  const freeShippingThreshold = 8000;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const discountAmount = promoApplied ? subtotal * 0.15 : 0;
  const finalTotal = subtotal - discountAmount;
  const formattedFinalTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(finalTotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'LUXEO15' || promoCode.trim().toUpperCase() === 'ELEGANCE') {
      setPromoApplied(true);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      setTimeout(() => {
        clearCart();
        setCheckoutComplete(false);
        setIsCartOpen(false);
      }, 2500);
    }, 1500);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/45 backdrop-blur-sm transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F3] shadow-2xl flex flex-col justify-between border-l border-[#E8E0D8] animate-slide-in">
          {/* Header */}
          <div className="p-6 border-b border-[#E8E0D8] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#B8893D]" />
              <h2 className="font-serif-luxury text-xl font-bold tracking-wider text-[#171717] uppercase">
                Shopping Bag ({totalItems})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-[#66615D] hover:text-[#171717] hover:bg-black/5 transition-colors"
              aria-label="Close Shopping Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-[#FAF4ED] px-6 py-3 border-b border-[#E8E0D8]">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium text-[#171717]">
              <span>
                {remainingForFreeShipping === 0 ? (
                  <span className="text-[#2E7D32] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    You unlocked Complimentary White Glove Delivery!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-[#B8893D]">₹{remainingForFreeShipping.toLocaleString()}</strong> more for free worldwide delivery
                  </span>
                )}
              </span>
              <span className="text-[10px] text-[#8E8883] font-mono">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#E8E0D8] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#B8893D] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
            {checkoutComplete ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-semibold text-[#171717]">
                  Order Confirmed
                </h3>
                <p className="text-xs text-[#66615D] max-w-xs mx-auto">
                  Your luxury flacons are being hand-packaged with custom wax sealing at our Parisian atelier.
                </p>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white border border-[#E8E0D8] flex items-center justify-center mx-auto text-[#8E8883]">
                  <ShoppingBag className="w-8 h-8 stroke-[1.2]" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-normal text-[#171717]">
                  Your Bag is Empty
                </h3>
                <p className="text-xs text-[#66615D] max-w-xs mx-auto">
                  Explore our signature collection to find your personal olfactory statement.
                </p>
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => {
                    setIsCartOpen(false);
                    const el = document.getElementById('collection');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-4"
                >
                  DISCOVER SCENTS
                </Button>
              </div>
            ) : (
              cart.map((item) => {
                const itemUnitPrice =
                  item.selectedSize === '50ml'
                    ? Math.round(item.product.price * 0.65)
                    : item.product.price;

                return (
                  <div
                    key={`${item.product.id}-${item.selectedSize}`}
                    className="bg-white rounded-[10px] p-4 border border-[#E8E0D8] shadow-2xs flex gap-4 items-center"
                  >
                    {/* Bottle Thumbnail */}
                    <div className="relative w-16 h-20 bg-[#FAF7F3] rounded-[6px] p-1 shrink-0 overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        sizes="64px"
                        className="object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif-luxury text-base font-semibold text-[#171717] uppercase truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                          className="text-[#8E8883] hover:text-rose-600 p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-[#66615D] mt-0.5">
                        {item.selectedSize.toUpperCase()} — {item.product.concentration}
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs font-semibold text-[#171717]">
                          ₹{(itemUnitPrice * item.quantity).toLocaleString()}
                        </span>

                        {/* Quantity Counter */}
                        <div className="flex items-center border border-[#E8E0D8] rounded-[4px] bg-[#FAF7F3]">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                            className="p-1 text-[#171717] hover:text-[#B8893D] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-medium text-[#171717]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                            className="p-1 text-[#171717] hover:text-[#B8893D] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cart.length > 0 && !checkoutComplete && (
            <div className="p-6 bg-white border-t border-[#E8E0D8] space-y-4">
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (try LUXEO15)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs bg-[#FAF7F3] border border-[#E8E0D8] rounded-[4px] uppercase focus:outline-none focus:border-[#B8893D]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#171717] text-white text-[11px] font-medium tracking-wider rounded-[4px] uppercase hover:bg-[#B8893D] transition-colors"
                >
                  Apply
                </button>
              </form>

              {promoApplied && (
                <div className="text-[11px] text-[#2E7D32] flex items-center justify-between">
                  <span>VIP 15% Atelier Privilege Applied</span>
                  <span>-₹{discountAmount.toLocaleString()}</span>
                </div>
              )}

              {/* Subtotals */}
              <div className="space-y-1.5 text-xs text-[#66615D] pt-2 border-t border-[#F0EAE4]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#171717] font-medium">{formattedSubtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>White Glove Shipping</span>
                  <span className="text-[#2E7D32] font-medium">
                    {remainingForFreeShipping === 0 ? 'FREE' : '₹499'}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-[#171717] font-bold pt-2 border-t border-[#E8E0D8]">
                  <span>Total</span>
                  <span>{formattedFinalTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                variant="gold"
                size="lg"
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full justify-center rounded-[4px]"
              >
                {isCheckingOut ? 'PREPARING ATELIER ORDER...' : `PROCEED TO CHECKOUT — ${formattedFinalTotal}`}
              </Button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#8E8883] uppercase tracking-widest pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8893D]" />
                <span>Complimentary Luxury Samples Included with Every Order</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
