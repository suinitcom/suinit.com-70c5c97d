import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const HeroSection = () => {
  const { language } = useLanguage();

  const headlines = {
    pt: {
      label: 'DESIGN & DESENVOLVIMENTO',
      line1: 'Transformando',
      line2: 'ideias em',
      line3: 'sistemas',
    },
    en: {
      label: 'DESIGN & DEVELOPMENT',
      line1: 'Turning your',
      line2: 'ideas into',
      line3: 'systems',
    },
    es: {
      label: 'DISEÑO Y DESARROLLO',
      line1: 'Transformando',
      line2: 'ideas en',
      line3: 'sistemas',
    },
  };

  const content = headlines[language];

  return (
    <section className="min-h-screen flex flex-col justify-between bg-background relative overflow-hidden pt-32 pb-12">
      <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          {content.label}
        </motion.p>

        {/* Main Headline */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-[clamp(3rem,12vw,10rem)] max-w-5xl"
          >
            {content.line1}
            <br />
            {content.line2}
            <br />
            {content.line3}<span className="text-accent">.</span>
          </motion.h1>

          {/* Scroll Indicator */}
          <motion.a
            href="#intro"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="scroll-indicator absolute right-0 bottom-0 md:right-12"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowDown size={20} className="text-foreground" />
          </motion.a>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
