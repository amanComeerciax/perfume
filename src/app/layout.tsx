import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';
import SearchModal from '@/components/SearchModal';
import QuickViewModal from '@/components/QuickViewModal';
import StoryModal from '@/components/StoryModal';
import LuxuryPreloader from '@/components/LuxuryPreloader';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LUXÉO PERFUMES | Essence of Elegance — Luxury Fragrance Atelier',
  description:
    'Discover LUXÉO luxury perfumes. Crafted with the world’s rarest ingredients to bring you timeless scents that define your presence.',
  keywords: [
    'luxury perfume',
    'niche fragrance',
    'Amber Elixir',
    'Rosé Éclat',
    'Vanille Dorée',
    'Oud Noir',
    'eau de parfum',
    'haute perfumery'
  ],
  openGraph: {
    title: 'LUXÉO PERFUMES | Essence of Elegance',
    description:
      'Crafted with the world’s finest ingredients to bring you timeless scents that leave a lasting impression.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LUXÉO PERFUMES'
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/icon.svg'
  }
};

export const viewport: Viewport = {
  themeColor: '#FAF7F3',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-[#FAF7F3] text-[#171717] font-sans-luxury min-h-screen antialiased selection:bg-[#F3EBDD] selection:text-[#B8893D]">
        <LuxuryPreloader />
        <CartProvider>
          {children}
          <CartDrawer />
          <SearchModal />
          <QuickViewModal />
          <StoryModal />
        </CartProvider>
      </body>
    </html>
  );
}
