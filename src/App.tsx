import { FloatingDevBadge } from '@/components/ui/FloatingDevBadge';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { AboutSection } from '@/features/about/AboutSection';
import { ContactSection } from '@/features/contact/ContactSection';
import { GallerySection } from '@/features/gallery/GallerySection';
import { HeroSection } from '@/features/hero/HeroSection';
import { HowToOrderSection } from '@/features/how-to-order/HowToOrderSection';
import { MenuSection } from '@/features/menu/MenuSection';
import { TestimonialsSection } from '@/features/testimonials/TestimonialsSection';
import { useScrollDetection } from '@/hooks/useScrollDetection';

export default function App() {
  const { isScrolled, showFloatingActions } = useScrollDetection();

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#1A1A1A]">
      <Navbar isScrolled={isScrolled} />

      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <TestimonialsSection />
        <HowToOrderSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />

      <FloatingDevBadge visible={isScrolled} />
      <FloatingWhatsApp visible={showFloatingActions} />
    </div>
  );
}
