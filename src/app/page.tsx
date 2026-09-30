import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Collection from '@/components/Collection';
import AtmosphereBanner from '@/components/AtmosphereBanner';
import StorySection from '@/components/StorySection';
import Stats from '@/components/Stats';
import WhyLuxeo from '@/components/WhyLuxeo';
import FragranceNotesExplorer from '@/components/FragranceNotesExplorer';
import ReviewsSection from '@/components/ReviewsSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F3] text-[#171717] selection:bg-[#F3EBDD] selection:text-[#B8893D]">
      {/* Sticky Luxury Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Floating Benefits Card */}
      <Benefits />

      {/* Collection Section with Carousel */}
      <Collection />

      {/* Cinematic Fragrance Atmosphere Banner */}
      <AtmosphereBanner />

      {/* Our Story Editorial Split Section */}
      <StorySection />

      {/* Floating Trust / Statistics Bar */}
      <Stats />

      {/* Why Al Munzir: The Art Behind Every Scent */}
      <WhyLuxeo />

      {/* Interactive Olfactory Note Pyramid Explorer */}
      <FragranceNotesExplorer />

      {/* Customer Reviews Section */}
      <ReviewsSection />

      {/* Newsletter Signup */}
      <Newsletter />

      {/* Luxury Footer */}
      <Footer />
    </main>
  );
}
