import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'amber-elixir',
    name: 'AMBER ELIXIR',
    subtitle: 'Warm. Rich. Addictive.',
    description: 'Warm. Rich. Addictive.',
    detailedDescription: 'A hypnotic blend of golden Baltic amber, scorched cardamom, and velvet benzoin. Amber Elixir is designed for intimate evenings and unforgettable presence.',
    price: 4999,
    formattedPrice: '₹4,999',
    originalPrice: '₹6,499',
    image: '/images/amber-elixir.jpg',
    bottleColor: '#E69C24',
    category: 'Warm & Amber',
    volume: '100 ML',
    concentration: 'Eau De Parfum',
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Bestseller',
    longevity: '10 - 14 Hours',
    sillage: 'Strong & Alluring',
    mood: 'Sensual, Opulent, Warm',
    notes: {
      top: ['Wild Cardamom', 'Sunlit Bergamot', 'Pink Pepper'],
      heart: ['Golden Amber Resin', 'Smoked Cinnamon', 'Night Jasmine'],
      base: ['Bourbon Benzoin', 'Tonka Bean', 'Velvet Cedarwood']
    }
  },
  {
    id: 'rose-eclat',
    name: 'ROSÉ ÉCLAT',
    subtitle: 'Floral. Elegant. Timeless.',
    description: 'Floral. Elegant. Timeless.',
    detailedDescription: 'Hand-picked Grasse roses distilled in dawn dew, married with crisp French lychee and powdery white musk. A luminous ode to romance and poise.',
    price: 4999,
    formattedPrice: '₹4,999',
    originalPrice: '₹6,499',
    image: '/images/rose-eclat.jpg',
    bottleColor: '#EAA6B2',
    category: 'Floral & Romantic',
    volume: '100 ML',
    concentration: 'Eau De Parfum',
    rating: 4.95,
    reviewsCount: 189,
    badge: 'Signature',
    longevity: '8 - 12 Hours',
    sillage: 'Elegant Trail',
    mood: 'Graceful, Radiant, Romantic',
    notes: {
      top: ['Morning Rose Water', 'Crisp Lychee', 'Italian Mandarin'],
      heart: ['Grasse Damask Rose', 'White Peony', 'Magnolia Petals'],
      base: ['Powdery White Musk', 'Cashmere Woods', 'Solar Amber']
    }
  },
  {
    id: 'vanille-doree',
    name: 'VANILLE DORÉE',
    subtitle: 'Soft. Sweet. Alluring.',
    description: 'Soft. Sweet. Alluring.',
    detailedDescription: 'Madagascar bourbon vanilla pods infused with roasted almond blossom and whipped honeyed cashmere. Subtle sweetness elevated to pure haute perfumery.',
    price: 4999,
    formattedPrice: '₹4,999',
    originalPrice: '₹6,499',
    image: '/images/vanille-doree.jpg',
    bottleColor: '#DEBA64',
    category: 'Gourmand & Alluring',
    volume: '100 ML',
    concentration: 'Eau De Parfum',
    rating: 4.88,
    reviewsCount: 116,
    badge: 'Award Winner',
    longevity: '10 - 12 Hours',
    sillage: 'Intimate Seduction',
    mood: 'Cozy, Luxurious, Enticing',
    notes: {
      top: ['Roasted Almond Blossom', 'Sweet Pear Nectar', 'Bergamot'],
      heart: ['Bourbon Vanilla Pod', 'Whipped Cashmere', 'Wild Orchid'],
      base: ['Warm Sandalwood', 'Golden Honeycomb', 'White Amber']
    }
  },
  {
    id: 'oud-noir',
    name: 'OUD NOIR',
    subtitle: 'Bold. Mysterious. Intense.',
    description: 'Bold. Mysterious. Intense.',
    detailedDescription: 'A majestic encounter of smoky Cambodian oud, cured Tuscan leather, and deep midnight spices. Powerful, magnetic, and undeniably regal.',
    price: 4999,
    formattedPrice: '₹4,999',
    originalPrice: '₹6,499',
    image: '/images/oud-noir.jpg',
    bottleColor: '#6B879B',
    category: 'Woody & Smoky',
    volume: '100 ML',
    concentration: 'Eau De Parfum',
    rating: 4.92,
    reviewsCount: 164,
    badge: 'Collector’s Item',
    longevity: '14+ Hours',
    sillage: 'Commanding',
    mood: 'Enigmatic, Powerful, Regal',
    notes: {
      top: ['Saffron Threads', 'Smoky Incense', 'Black Pepper'],
      heart: ['Aged Cambodian Oud', 'Tuscan Leather', 'Smoked Birch'],
      base: ['Atlas Cedarwood', 'Dark Patchouli', 'Animalic Musk']
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Elena Rostova',
    location: 'Paris, France',
    rating: 5,
    date: '2 weeks ago',
    title: 'The longevity is unprecedented',
    comment: 'Rosé Éclat is pure perfection. I put it on in the morning and can still catch the softest rose petals and white musk when going to bed. It feels whisper-soft yet incredibly luxurious.',
    verified: true,
    productName: 'Rosé Éclat'
  },
  {
    id: 'rev-2',
    author: 'Marcus Vance',
    location: 'London, UK',
    rating: 5,
    date: '1 month ago',
    title: 'Warm amber like no other niche brand',
    comment: 'Amber Elixir instantly became my signature evening fragrance. The blend of cardamom with rich benzoin feels like sitting by a warm hearth in a 5-star suite.',
    verified: true,
    productName: 'Amber Elixir'
  },
  {
    id: 'rev-3',
    author: 'Sophia Chen',
    location: 'Dubai, UAE',
    rating: 5,
    date: '3 weeks ago',
    title: 'Oud Noir is a masterclass in subtlety',
    comment: 'Many oud fragrances are overpowering, but Oud Noir balances the smoky leather with smooth saffron. Unmatched depth and craftsmanship.',
    verified: true,
    productName: 'Oud Noir'
  }
];

export const STATS = [
  {
    value: '10K+',
    label: 'Happy Customers',
    icon: 'users'
  },
  {
    value: '30+',
    label: 'Countries',
    icon: 'globe'
  },
  {
    value: '25+',
    label: 'Exclusive Scents',
    icon: 'sparkles'
  },
  {
    value: '100%',
    label: 'Authentic Products',
    icon: 'badge-check'
  },
  {
    value: 'Premium',
    label: 'Customer Support',
    icon: 'heart-handshake'
  }
];

export const BENEFITS = [
  {
    icon: 'leaf',
    title: 'PREMIUM INGREDIENTS',
    description: 'Sourced from the finest origins around the world.'
  },
  {
    icon: 'hourglass',
    title: 'LONG LASTING',
    description: 'Crafted to last all day, leaving a memorable trail.'
  },
  {
    icon: 'flask',
    title: 'EXPERTLY CRAFTED',
    description: 'Blended by master perfumers with precision and passion.'
  },
  {
    icon: 'crown',
    title: 'LUXURY REDEFINED',
    description: 'Experience fragrances like never before.'
  }
];

export const WHY_ITEMS = [
  {
    title: 'NATURAL INGREDIENTS',
    subtitle: 'Harvested at peak potency',
    description: 'Rare ingredients carefully sourced from around the world. We partner directly with multigenerational botanical harvesters in Grasse, Calabria, and Madagascar.',
    image: '/images/craft-ingredients.jpg',
    tag: 'Sustainably Sourced'
  },
  {
    title: 'MASTER PERFUMERS',
    subtitle: 'Generations of artistry',
    description: 'Created by experienced fragrance artists whose olfactory mastery elevates rare natural absolutes into unforgettable emotional tapestries.',
    image: '/images/craft-perfumer.jpg',
    tag: 'Artisanal Craft'
  },
  {
    title: 'TIMELESS CRAFT',
    subtitle: 'Crystal flacons & gold collars',
    description: 'Every detail designed to create a memorable impression. Each bottle undergoes four stages of hand polishing and rigorous maceration.',
    image: '/images/craft-timeless.jpg',
    tag: 'Macerated 60 Days'
  }
];
