import { ChevronRight } from 'lucide-react';
import { PRODUCTS } from '@/constants/products';
import { buildGeneralLink } from '@/utils/whatsapp';
import { ProductCard } from './ProductCard';

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Menu Unggulan Kami</h2>
          <p className="text-gray-800 max-w-xl mx-auto">
            Dari ramen berkuah kental hingga donburi yang mengenyangkan, nikmati sajian terbaik dari dapur Hikari.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={buildGeneralLink('Halo, saya mau lihat menu digital lengkapnya.')}
            className="inline-flex items-center text-[#BC2026] font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lihat Menu Digital Lengkap <ChevronRight className="ml-1 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}