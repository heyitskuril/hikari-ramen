import { CheckCircle2, ChefHat, MessageCircle, UtensilsCrossed } from 'lucide-react';
import type { OrderStep } from '@/types';

export const ORDER_STEPS: OrderStep[] = [
  {
    id: 1,
    title: 'Pilih Menu',
    description: 'Lihat daftar menu lengkap kami di website atau Instagram.',
    icon: <UtensilsCrossed className="w-6 h-6" />,
  },
  {
    id: 2,
    title: 'Pesan via WA',
    description: 'Klik tombol order untuk langsung terhubung dengan admin kami.',
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    id: 3,
    title: 'Konfirmasi Payment',
    description: 'Lakukan pembayaran dan konfirmasi via chat WhatsApp.',
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    id: 4,
    title: 'Dine-in / Pickup',
    description: 'Pesanan siap disajikan panas-panas untuk Anda nikmati.',
    icon: <ChefHat className="w-6 h-6" />,
  },
];