import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row w-full min-h-[calc(100vh-80px)]">
        <div className="w-full md:w-1/2 px-6 sm:px-12 py-16 flex flex-col justify-center gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#BC2026] rounded-full text-xs font-bold w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BC2026]" />
            </span>
            Japanese Food terlaris di Sawangan
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-[#1A1A1A]"
          >
            Authentic Japanese <span className="text-[#BC2026]">Taste</span> In Every Bite
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-800 max-w-md"
          >
            Nikmati ramen kualitas premium dengan kaldu ayam kental mulai dari{' '}
            <span className="font-bold text-[#1A1A1A]">Rp 25.000</span>. Hidden gem ramen terbaik di Sawangan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 pt-4"
          >
            <a
              href="#menu"
              className="bg-[#BC2026] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-red-200 text-lg hover:bg-[#A31C22] transition-all hover:-translate-y-1"
            >
              Lihat Menu Lengkap
            </a>
            <div className="flex flex-col">
              <div className="flex text-yellow-400 text-sm" aria-label="5 stars">★★★★★</div>
              <span className="text-sm font-medium">4.9/5 Rating Google Maps</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-3 gap-8 mt-12 border-t border-gray-100 pt-8"
          >
            {[
              { value: '500+', label: 'Portion / Day' },
              { value: '25k+', label: 'Price Starts' },
              { value: '100%', label: 'Halal & Toyyib' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-[10px] text-gray-800 uppercase font-semibold tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden md:grid md:w-1/2 p-8 grid-cols-2 grid-rows-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="row-span-2 relative group overflow-hidden rounded-[2.5rem]"
          >
            <img
              src="images/menu/hero-tori-paitan-ramen.webp"
              alt="Tori Paitan Ramen — Best Seller"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
              <p className="text-sm font-bold text-[#BC2026] uppercase mb-2 tracking-widest">Best Seller</p>
              <h3 className="text-3xl font-bold mb-1">Tori Paitan Ramen</h3>
              <p className="text-sm opacity-80 mb-6">Kaldu kental creamy gurih mantap.</p>
              <span className="text-2xl font-bold">Rp 35.000</span>
            </div>
          </motion.div>

          {[
            { src: '/images/menu/hero-shoyu-ramen.webp', name: 'Shoyu Ramen', price: 'Rp 30.000', delay: 0.2 },
            { src: '/images/menu/03-grilled-gyoza.webp', name: 'Grilled Gyoza', price: 'Rp 20.000', delay: 0.4 },
          ].map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              className="relative overflow-hidden rounded-[2.5rem] group"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white scale-90 group-hover:scale-100 transition-transform">
                  <p className="font-bold text-lg">{item.name}</p>
                  <p className="text-sm opacity-80">{item.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}