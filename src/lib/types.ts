export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  price: number;
  formattedPrice: string;
  originalPrice?: string;
  image: string;
  bottleColor: string;
  category: string;
  notes: FragranceNotes;
  volume: string;
  concentration: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  longevity: string;
  sillage: string;
  mood: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: '50ml' | '100ml';
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  productName: string;
}
