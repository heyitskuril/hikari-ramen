import { BUSINESS_INFO } from '@/constants/business';

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.wa}?text=${encoded}`;
}

export function buildOrderLink(productName: string): string {
  return buildWhatsAppLink(`Halo ${BUSINESS_INFO.name}, saya ingin pesan ${productName}.`);
}

export function buildGeneralLink(message: string): string {
  return buildWhatsAppLink(message);
}