export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  review: string;
  avatar: string;
}

export interface OrderStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}