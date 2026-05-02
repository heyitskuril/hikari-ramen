import { ChefHat } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="tentang" className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/hikari-ramen-about-image.webp"
              alt="Suasana Hikari Ramen House"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#BC2026] rounded-3xl -z-10" />
          <div className="absolute -top-6 -left-6 border-2 border-[#1A1A1A] w-32 h-32 rounded-3xl -z-10" />
        </div>

        <div>
          <span className="text-[#BC2026] font-bold uppercase tracking-widest text-sm mb-6 block">
            Tentang Hikari
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Membawa Rasa Asli Jepang ke Sawangan
          </h2>
          <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
            <p>
              Hikari Ramen House lahir dari kecintaan kami terhadap kuliner Jepang otentik. Sejak 2024, misi kami sederhana: menyajikan ramen berkualitas restoran premium dengan harga yang bersahabat bagi warga Sawangan dan sekitarnya.
            </p>
            <p>
              Kunci kelezatan kami adalah pada <strong>Tori Paitan</strong> kaldu ayam kental yang kami masak selama belasan jam demi mengekstrak umami maksimal tanpa bahan pengawet.
            </p>
          </div>
          <div className="mt-12 flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#BC2026]">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-[#1A1A1A]">Chef Handal</p>
              <p className="text-sm text-gray-800 font-medium tracking-tight">Resep otentik dengan teknik tradisional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}