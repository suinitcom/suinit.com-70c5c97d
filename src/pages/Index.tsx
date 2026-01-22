import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import PainPointsSection from '@/components/sections/PainPointsSection';
import DifferentialsSection from '@/components/sections/DifferentialsSection';
import SpeedComparisonSection from '@/components/sections/SpeedComparisonSection';
import PricingSection from '@/components/sections/PricingSection';
import SaaSSection from '@/components/sections/SaaSSection';
import IntegrationsSection from '@/components/sections/IntegrationsSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <DifferentialsSection />
        <SpeedComparisonSection />
        <PricingSection />
        <SaaSSection />
        <IntegrationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
