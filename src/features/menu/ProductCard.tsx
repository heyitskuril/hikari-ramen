import { motion } from 'motion/react';
import type { Product } from '@/types';
import { buildOrderLink } from '@/utils/whatsapp';

interface ProductCardProps {
  product: Product;
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-[#FDFBF7] rounded-[2.5rem] p-5 shadow-sm hover:shadow-xl transition-all border border-gray-100"
    >
      <div className="relative aspect-square overflow-hidden rounded-[2rem] mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 bg-[#BC2026] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
            {product.badge}
          </span>
        )}
      </div>
      <div className="px-2">
        <span className="text-[#BC2026] text-xs font-bold uppercase tracking-widest block mb-2">
          {product.category}
        </span>
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-800 text-sm mb-6 leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-[#1A1A1A] font-extrabold text-xl">{product.price}</span>
          <a
            href={buildOrderLink(product.name)}
            className="bg-[#BC2026] text-white p-3 rounded-2xl hover:bg-[#A31C22] shadow-lg shadow-red-200 transition-all hover:scale-105"
            aria-label={`Pesan ${product.name} via WhatsApp`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlusIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}