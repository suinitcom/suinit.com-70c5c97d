import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import PainPointsSection from '@/components/sections/PainPointsSection';
import DifferentialsSection from '@/components/sections/DifferentialsSection';
import SpeedComparisonSection from '@/components/sections/SpeedComparisonSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
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
        <StatsBar />
        <AdvantagesSection />
        <PainPointsSection />
        <DifferentialsSection />
        <SpeedComparisonSection />
        <TestimonialsSection />
        <PricingSection />
        <SaaSSection />
        <IntegrationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
