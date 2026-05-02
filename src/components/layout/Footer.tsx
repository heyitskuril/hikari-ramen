import { Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '@/constants/business';
import { NAV_ITEMS } from '@/constants/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1.5 shadow-lg">
                <img 
                  src="/favicon.svg" 
                  alt="Hikari Ramen Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">HIKARI RAMEN</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-red-500 leading-none">
                  Sawangan, Depok
                </span>
              </div>
            </div>
            <p className="text-gray-300 max-w-sm mb-8 leading-relaxed text-sm">
              Menyajikan kebahagiaan dalam setiap mangkuk ramen dengan kaldu yang otentik dan bahan berkualitas terbaik.
            </p>
            <div className="flex space-x-4">
              <a
                href={`https://instagram.com/${BUSINESS_INFO.instagram.replace('@', '')}`}
                className="p-3 bg-white/5 hover:bg-[#d62976] transition-all rounded-xl border border-white/10 group"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-8">Navigasi</h4>
            <ul className="space-y-4 text-gray-200 font-medium text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#BC2026] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-8">Info Kedai</h4>
            <ul className="space-y-4 text-gray-200 font-light text-sm">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Buka: 14.00 – 23.00 WIB
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Senin: Tutup
              </li>
              <li className="pt-2 text-gray-300 italic text-xs border-t border-white/5">
                Sawangan Baru, Depok, Jawa Barat
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© {currentYear} {BUSINESS_INFO.name}</p>
          <p>Built with ❤️ by <span className="text-white hover:text-red-500 transition-colors cursor-default">Kuril.dev</span></p>
        </div>
      </div>
    </footer>
  );
}
