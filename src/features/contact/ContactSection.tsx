import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/constants/business';
import { buildGeneralLink } from '@/utils/whatsapp';

export function ContactSection() {
  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <span className="text-[#BC2026] font-bold uppercase tracking-widest text-xs mb-6 block">
              Kontak & Lokasi
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-none tracking-tight">
              Kunjungi Kedai Kami
            </h2>

            <div className="space-y-8">
              {[
                { icon: <MapPin className="w-6 h-6" />, title: 'Alamat', value: BUSINESS_INFO.address },
                { icon: <Clock className="w-6 h-6" />, title: 'Jam Operasional', value: BUSINESS_INFO.hours },
                { icon: <Phone className="w-6 h-6" />, title: 'Telepon / WhatsApp', value: BUSINESS_INFO.phone },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-6">
                  <div className="bg-red-50 p-4 rounded-2xl text-[#BC2026] shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-800 leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href={BUSINESS_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center hover:bg-black transition-all hover:scale-105"
              >
                Buka di Google Maps
              </a>
              <a
                href={buildGeneralLink('Halo Hikari Ramen, saya mau tanya lokasi.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-gray-800 px-8 py-4 rounded-2xl font-bold flex items-center justify-center hover:shadow-lg hover:shadow-green-100 transition-all hover:scale-105"
              >
                <MessageCircle className="mr-2 w-5 h-5" /> Chat via WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200 border-[12px] border-white min-h-[450px]">
            <iframe
              src={BUSINESS_INFO.mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Peta Lokasi ${BUSINESS_INFO.name}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}