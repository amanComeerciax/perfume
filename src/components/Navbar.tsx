'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { totalItems, setIsCartOpen, setIsSearchOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'collection', 'story', 'ingredients', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'COLLECTION', href: '#collection', id: 'collection' },
    { label: 'ABOUT', href: '#story', id: 'story' },
    { label: 'INGREDIENTS', href: '#ingredients', id: 'ingredients' },
    { label: 'REVIEWS', href: '#reviews', id: 'reviews' },
    { label: 'CONTACT', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? 'bg-[#FAF7F3]/92 backdrop-blur-md shadow-[0_4px_25px_rgba(40,30,20,0.04)] border-b border-[#E8E0D8]/60 py-3.5 md:py-4'
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-1 flex items-center">
            <Logo />
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-9" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-[11.5px] tracking-[0.2em] font-medium transition-colors duration-200 py-1 ${
                    isActive ? 'text-[#171717]' : 'text-[#66615D] hover:text-[#171717]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8893D] rounded-full transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex-1 flex items-center justify-end space-x-3 sm:space-x-5">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search Fragrances"
              className="p-2 text-[#171717] hover:text-[#B8893D] transition-colors rounded-full hover:bg-black/5"
            >
              <Search className="w-[19px] h-[19px] stroke-[1.75]" />
            </button>

            {/* Shopping Bag Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
              className="relative p-2 text-[#171717] hover:text-[#B8893D] transition-colors rounded-full hover:bg-black/5"
            >
              <ShoppingBag className="w-[19px] h-[19px] stroke-[1.75]" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#B8893D] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* SHOP NOW Button */}
            <div className="hidden sm:block">
              <Button
                variant="gold"
                size="sm"
                onClick={scrollToCollection}
                className="rounded-[4px] px-5 py-2.5 shadow-none hover:shadow-md"
              >
                SHOP NOW
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="lg:hidden p-2 text-[#171717] hover:text-[#B8893D] transition-colors rounded-md"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.75]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.75]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-400 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 w-[82%] max-w-[340px] h-full bg-[#FAF7F3] shadow-2xl p-7 flex flex-col justify-between transition-transform duration-400 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-16">
            <div className="mb-8 border-b border-[#E8E0D8] pb-4">
              <Logo />
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm tracking-[0.2em] font-medium py-2 flex items-center justify-between border-b border-[#E8E0D8]/40 ${
                    activeSection === link.id ? 'text-[#B8893D]' : 'text-[#171717]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#B8893D] opacity-60" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#E8E0D8]">
            <Button
              variant="gold"
              size="md"
              onClick={scrollToCollection}
              className="w-full justify-center"
            >
              SHOP NOW
            </Button>
            <p className="text-center text-[11px] text-[#8E8883] tracking-widest uppercase">
              Free Express Worldwide Shipping
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
