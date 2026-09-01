'use client';

import React from 'react';
import Logo from './Logo';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#FAF7F3] border-t border-[#E8E0D8] pt-10 sm:pt-16 md:pt-20 pb-8 sm:pb-12 text-[#171717]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-14 border-b border-[#E8E0D8]">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Logo />
              <p className="mt-3.5 sm:mt-5 text-[13px] sm:text-[13.5px] leading-[1.65] text-[#66615D] max-w-[320px]">
                Crafted with the world’s finest ingredients to bring you timeless scents that leave a lasting impression.
              </p>
            </div>

            {/* Social Channels */}
            <div className="mt-5 sm:mt-8 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LUXÉO on Instagram"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#E8E0D8] flex items-center justify-center text-[#171717] hover:text-[#B8893D] hover:border-[#B8893D] transition-all shadow-2xs group"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LUXÉO on Facebook"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#E8E0D8] flex items-center justify-center text-[#171717] hover:text-[#B8893D] hover:border-[#B8893D] transition-all shadow-2xs group"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LUXÉO on Pinterest"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#E8E0D8] flex items-center justify-center text-[#171717] hover:text-[#B8893D] hover:border-[#B8893D] transition-all shadow-2xs group"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <path d="M8 12a4 4 0 1 1 8 0c0 3-2 5-4 5-1 0-1.5-.5-2-1l-1 4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns: 2 Columns on mobile, 4 Columns on desktop */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {/* Links Column 1: SHOP */}
            <div>
              <h4 className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#171717] mb-3 sm:mb-4">
                SHOP
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 text-[12.5px] sm:text-[13px] text-[#66615D]">
                <li>
                  <a href="#collection" className="hover:text-[#B8893D] transition-colors">
                    All Perfumes
                  </a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-[#B8893D] transition-colors">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-[#B8893D] transition-colors">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-[#B8893D] transition-colors">
                    Gift Sets
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column 2: ABOUT */}
            <div>
              <h4 className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#171717] mb-3 sm:mb-4">
                ABOUT
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 text-[12.5px] sm:text-[13px] text-[#66615D]">
                <li>
                  <a href="#story" className="hover:text-[#B8893D] transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#ingredients" className="hover:text-[#B8893D] transition-colors">
                    Ingredients
                  </a>
                </li>
                <li>
                  <a href="#story" className="hover:text-[#B8893D] transition-colors">
                    Journal
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#B8893D] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column 3: HELP */}
            <div>
              <h4 className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#171717] mb-3 sm:mb-4">
                HELP
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 text-[12.5px] sm:text-[13px] text-[#66615D]">
                <li>
                  <a href="#contact" className="hover:text-[#B8893D] transition-colors">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#B8893D] transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#B8893D] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#B8893D] transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: ATELIER */}
            <div>
              <h4 className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#171717] mb-3 sm:mb-4">
                ATELIER
              </h4>
              <address className="not-italic text-[12px] sm:text-[12.5px] text-[#66615D] space-y-1 sm:space-y-1.5">
                <p>24 Rue de la Paix</p>
                <p>75002 Paris, France</p>
                <p className="pt-1.5 text-[#171717] font-medium break-all">concierge@luxeo.com</p>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#8E8883] text-center sm:text-left">
          <p>© 2026 Luxéo Perfumes. All rights reserved.</p>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="tracking-widest uppercase text-[9.5px] sm:text-[10px]">PARIS · LONDON · DUBAI</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 sm:p-2 rounded-full hover:bg-black/5 text-[#171717] hover:text-[#B8893D] transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span className="text-[10.5px] sm:text-[11px] uppercase tracking-wider">Top</span>
              <ArrowUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
