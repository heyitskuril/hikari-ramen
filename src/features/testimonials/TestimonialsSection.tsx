import { CheckCircle2, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants/testimonials';

const SELLING_POINTS = [
  'Kaldu Ayam Kental (12 Jam)',
  'Bahan Baku 100% Halal',
  'Vibe Kedai Jepang Modern',
  'Harga Bersahabat',
];

export function TestimonialsSection() {
  return (
    <section id="keunggulan" className="py-24 bg-[#1A1A1A] text-white overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BC2026] rounded-full blur-[180px] opacity-20 -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold mb-6">Nikmati Ramen Premium Tanpa Mahal</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ribuan orang di Depok sudah merasakan kelezatan Hikari. Ini alasan kenapa kamu juga harus coba.
            </p>
            <ul className="space-y-4">
              {SELLING_POINTS.map((point) => (
                <li key={point} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#BC2026] shrink-0" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={testimonial.id}
                className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex space-x-1 mb-4" aria-label={`Rating: ${testimonial.rating} bintang`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#BC2026] text-[#BC2026]" />
                  ))}
                </div>
                <blockquote className="text-gray-300 italic mb-8 leading-relaxed text-sm">
                  "{testimonial.review}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-sm tracking-tight">{testimonial.name}</p>
                    <p className="text-xs text-gray-400 uppercase font-semibold">{testimonial.city}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}