import { Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '@/constants/business';

const GALLERY_IMAGES = [
  {
    column: 0,
    items: [
      { src: '/images/gallery/01-ramen-close-up.jpg', alt: 'Ramen bowl close-up', aspect: 'aspect-[3/4]' },
      { src: '/images/gallery/02-ramen-toppings-detail.jpg', alt: 'Ramen topping detail', aspect: 'aspect-square' },
    ],
  },
  {
    column: 1,
    items: [
      { src: '/images/gallery/03-gyoza-plating.jpg', alt: 'Gyoza plating', aspect: 'aspect-square' },
      { src: '/images/gallery/04-japanese-food-spread.webp', alt: 'Japanese food spread', aspect: 'aspect-[3/4]' },
    ],
  },
  {
    column: 2,
    items: [
      { src: '/images/menu/04-miso-ramen.webp', alt: 'Miso ramen', aspect: 'aspect-[3/4]' },
      { src: '/images/gallery/05-donburi-bowl.jpg', alt: 'Donburi bowl', aspect: 'aspect-square' },
    ],
  },
  {
    column: 3,
    items: [
      { src: '/images/menu/03-grilled-gyoza.webp', alt: 'Grilled gyoza', aspect: 'aspect-square' },
      { src: '/images/gallery/06-ramen-steam-rising.jpg', alt: 'Ramen steam rising', aspect: 'aspect-[3/4]' },
    ],
  },
];

export function GallerySection() {
  const instagramHandle = BUSINESS_INFO.instagram.replace('@', '');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Galeri Kami</h2>
            <p className="text-gray-800 mt-2">Momen kebahagiaan di setiap mangkuk.</p>
          </div>
          <a
            href={`https://instagram.com/${instagramHandle}`}
            className="hidden sm:flex items-center text-[#BC2026] font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow Instagram <Instagram className="ml-2 w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((col) => (
            <div key={col.column} className="grid gap-4">
              {col.items.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={`rounded-2xl w-full ${img.aspect} object-cover`}
                  loading="lazy"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}