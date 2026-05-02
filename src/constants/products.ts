import type { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Tori Paitan Ramen',
    category: 'Ramen',
    description: 'Ramen creamy dengan kaldu ayam kental, topping chicken slice & telur setengah matang.',
    price: 'Rp 35.000',
    image: '/images/menu/01-tori-paitan-ramen.webp',
    badge: 'Terlaris',
  },
  {
    id: 2,
    name: 'Shoyu Ramen',
    category: 'Ramen',
    description: 'Ramen kuah kecap Jepang dengan rasa ringan dan gurih yang otentik.',
    price: 'Rp 30.000',
    image: '/images/menu/02-shoyu-ramen.webp',
  },
  {
    id: 3,
    name: 'Miso Ramen',
    category: 'Ramen',
    description: 'Ramen dengan kuah miso khas Jepang, karakter rasa lebih bold & savory.',
    price: 'Rp 32.000',
    image: '/images/menu/04-miso-ramen.webp',
    badge: 'Rekomendasi',
  },
  {
    id: 4,
    name: 'Chicken Teriyaki Don',
    category: 'Donburi',
    description: 'Nasi pulen dengan ayam teriyaki manis gurih disajikan dengan salad segar.',
    price: 'Rp 30.000',
    image: '/images/menu/05-chicken-teriyaki-don.webp',
  },
  {
    id: 5,
    name: 'Beef Yakiniku Don',
    category: 'Donburi',
    description: 'Irisan daging sapi lembut dengan saus yakiniku khas Jepang di atas nasi hangat.',
    price: 'Rp 38.000',
    image: 'images/menu/06-beef-yakiniku-don.webp',
  },
  {
    id: 6,
    name: 'Gyoza (Grilled)',
    category: 'Side Dish',
    description: 'Dumpling isi ayam juicy, dipanggang sampai crispy di satu sisi.',
    price: 'Rp 20.000',
    image: '/images/menu/03-grilled-gyoza.webp',
  },
];