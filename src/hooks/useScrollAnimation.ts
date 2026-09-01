'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export type AnimationType =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scaleIn'
  | 'staggerUp'
  | 'staggerLeft'
  | 'parallax'
  | 'revealText'
  | 'clipReveal'
  | 'rotateIn'
  | 'slideReveal';

interface UseScrollAnimationOptions {
  type?: AnimationType;
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  triggerStart?: string;
  triggerEnd?: string;
  scrub?: boolean | number;
  markers?: boolean;
}

/**
 * A reusable hook that applies GSAP ScrollTrigger animations.
 *
 * Usage:
 *   const ref = useScrollAnimation<HTMLDivElement>({ type: 'fadeUp' });
 *   <div ref={ref}>...</div>
 *
 * For stagger animations, attach the ref to the **parent** container.
 * Direct children will be stagger-animated automatically.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null);

  const {
    type = 'fadeUp',
    duration = 0.9,
    delay = 0,
    staggerDelay = 0.12,
    triggerStart = 'top 85%',
    triggerEnd = 'bottom 15%',
    scrub = false,
    markers = false
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Create a GSAP context for cleanup
    const ctx = gsap.context(() => {
      const baseScrollTrigger = {
        trigger: el,
        start: triggerStart,
        end: triggerEnd,
        toggleActions: scrub ? undefined : 'play none none none',
        scrub: scrub,
        markers,
      };

      switch (type) {
        case 'fadeUp':
          gsap.fromTo(
            el,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration, delay, ease: 'power3.out', scrollTrigger: baseScrollTrigger }
          );
          break;

        case 'fadeDown':
          gsap.fromTo(
            el,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration, delay, ease: 'power3.out', scrollTrigger: baseScrollTrigger }
          );
          break;

        case 'fadeLeft':
          gsap.fromTo(
            el,
            { x: -80, opacity: 0 },
            { x: 0, opacity: 1, duration, delay, ease: 'power3.out', scrollTrigger: baseScrollTrigger }
          );
          break;

        case 'fadeRight':
          gsap.fromTo(
            el,
            { x: 80, opacity: 0 },
            { x: 0, opacity: 1, duration, delay, ease: 'power3.out', scrollTrigger: baseScrollTrigger }
          );
          break;

        case 'scaleIn':
          gsap.fromTo(
            el,
            { scale: 0.85, opacity: 0 },
            { scale: 1, opacity: 1, duration, delay, ease: 'power2.out', scrollTrigger: baseScrollTrigger }
          );
          break;

        case 'staggerUp': {
          const children = el.children;
          if (children.length > 0) {
            gsap.fromTo(
              children,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration,
                delay,
                stagger: staggerDelay,
                ease: 'power3.out',
                scrollTrigger: baseScrollTrigger,
              }
            );
          }
          break;
        }

        case 'staggerLeft': {
          const children = el.children;
          if (children.length > 0) {
            gsap.fromTo(
              children,
              { x: -60, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration,
                delay,
                stagger: staggerDelay,
                ease: 'power3.out',
                scrollTrigger: baseScrollTrigger,
              }
            );
          }
          break;
        }

        case 'parallax':
          gsap.fromTo(
            el,
            { y: -40 },
            { y: 40, ease: 'none', scrollTrigger: { ...baseScrollTrigger, scrub: 1 } }
          );
          break;

        case 'revealText': {
          // Clip from bottom revealing text upward
          gsap.fromTo(
            el,
            { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              opacity: 1,
              duration: duration * 1.2,
              delay,
              ease: 'power4.out',
              scrollTrigger: baseScrollTrigger,
            }
          );
          break;
        }

        case 'clipReveal': {
          // Horizontal clip reveal from left
          gsap.fromTo(
            el,
            { clipPath: 'inset(0% 100% 0% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: duration * 1.4,
              delay,
              ease: 'power4.inOut',
              scrollTrigger: baseScrollTrigger,
            }
          );
          break;
        }

        case 'rotateIn':
          gsap.fromTo(
            el,
            { rotateY: 20, opacity: 0, transformPerspective: 800 },
            {
              rotateY: 0,
              opacity: 1,
              duration: duration * 1.2,
              delay,
              ease: 'power3.out',
              scrollTrigger: baseScrollTrigger,
            }
          );
          break;

        case 'slideReveal': {
          gsap.fromTo(
            el,
            { x: '100%', opacity: 0 },
            {
              x: '0%',
              opacity: 1,
              duration: duration * 1.3,
              delay,
              ease: 'power4.out',
              scrollTrigger: baseScrollTrigger,
            }
          );
          break;
        }
      }
    }, el);

    return () => ctx.revert();
  }, [type, duration, delay, staggerDelay, triggerStart, triggerEnd, scrub, markers]);

  return ref;
}
