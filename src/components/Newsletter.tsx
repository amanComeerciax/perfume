'use client';

import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';
import Button from './Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const contentRef = useScrollAnimation<HTMLDivElement>({ type: 'fadeUp', duration: 1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 900);
  };

  return (
    <section className="py-20 md:py-24 bg-[#F5EEE8] border-t border-[#E8E0D8]/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FAF7F3]/80 blur-3xl rounded-full pointer-events-none -z-10" />

      <div ref={contentRef} className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.28em] text-[#B8893D] uppercase block mb-3">
          EXCLUSIVE CIRCLE
        </span>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171717] tracking-tight mb-4">
          Stay Close to the Scent
        </h2>

        <p className="text-[#66615D] text-base sm:text-lg max-w-lg mx-auto mb-8 font-normal">
          Discover new fragrances, private launches and exclusive offers.
        </p>

        {status === 'success' ? (
          <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-[8px] border border-[#B8893D]/30 shadow-md text-[#171717] text-sm animate-fade-in">
            <div className="w-6 h-6 rounded-full bg-[#B8893D] text-white flex items-center justify-center">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium tracking-wide">
              Welcome to the Al Munzir Circle. Check your inbox for private access.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-[#8E8883] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                className="w-full pl-11 pr-4 py-3.5 bg-white rounded-[4px] border border-[#E8E0D8] text-[13px] text-[#171717] placeholder:text-[#8E8883] focus:outline-none focus:border-[#B8893D] transition-colors shadow-2xs"
                aria-label="Email address for newsletter"
              />
            </div>
            <Button
              type="submit"
              variant="gold"
              size="md"
              disabled={status === 'loading'}
              className="py-3.5 px-7 rounded-[4px] text-[12px] whitespace-nowrap font-semibold tracking-[1px]"
            >
              {status === 'loading' ? 'JOINING...' : 'JOIN THE LIST'}
            </Button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-xs text-rose-600 mt-2.5 font-medium">{errorMessage}</p>
        )}

        <p className="text-[11px] text-[#8E8883] mt-5 tracking-wider uppercase">
          Respect for privacy. Unsubscribe anytime with one click.
        </p>
      </div>
    </section>
  );
}
