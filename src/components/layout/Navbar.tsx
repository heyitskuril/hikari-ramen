import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { BUSINESS_INFO } from '@/constants/business';
import { NAV_ITEMS } from '@/constants/navigation';
import { buildGeneralLink } from '@/utils/whatsapp';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

interface NavbarProps {
  isScrolled: boolean;
}

export function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const orderLink = buildGeneralLink(`Halo ${BUSINESS_INFO.name}, saya ingin pesan sekarang.`);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 flex items-center justify-center bg-white rounded-full border-2 border-gray-100 shadow-md overflow-hidden p-1.5">
            <img 
              src="/favicon.svg" 
              alt="Hikari Ramen Logo" 
              className="w-full h-full object-contain transition-all duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold leading-none tracking-tight transition-colors`}>
              HIKARI RAMEN
            </span>
            <span className={`text-[10px] uppercase tracking-widest font-bold transition-colors text-red-500`}>
              Sawangan, Depok
            </span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-[#BC2026] ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={orderLink}
            className="bg-[#25D366] text-gray-800 px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Pesan Sekarang</span>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen
            ? <X className={isScrolled ? 'text-black' : 'text-white'} />
            : <Menu className={isScrolled ? 'text-black' : 'text-white'} />
          }
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 bg-white shadow-xl z-40 p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <img 
                  src="/favicon.svg" 
                  alt="Hikari Ramen Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold text-[#1A1A1A]">HIKARI RAMEN</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={buildGeneralLink(`Halo ${BUSINESS_INFO.name}, saya mau pesan.`)}
                className="bg-[#25D366] text-gray-800 text-center py-4 rounded-xl font-bold shadow-lg shadow-green-500/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pesan Sekarang via WA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
