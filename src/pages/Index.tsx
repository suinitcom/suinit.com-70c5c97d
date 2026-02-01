import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ZeroDebtSection from '@/components/sections/ZeroDebtSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PricingSection from '@/components/sections/PricingSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ZeroDebtSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
