import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const HeroSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      label: 'DESIGN & DESENVOLVIMENTO',
      headline: 'Sistemas que escalam sem deixar dívidas.',
      subheadline: 'O mercado está cheio de sistemas "remendados". Na Suinit, entregamos software de alta performance com Zero Dívida Técnica. Sua empresa ganha velocidade, código limpo e total propriedade do projeto.',
      ctaPrimary: 'Iniciar meu projeto',
      ctaSecondary: 'Entenda nossa metodologia',
    },
    en: {
      label: 'DESIGN & DEVELOPMENT',
      headline: 'Systems that scale without leaving debts.',
      subheadline: 'The market is full of "patched" systems. At Suinit, we deliver high-performance software with Zero Technical Debt. Your company gains speed, clean code, and full project ownership.',
      ctaPrimary: 'Start my project',
      ctaSecondary: 'Understand our methodology',
    },
    es: {
      label: 'DISEÑO Y DESARROLLO',
      headline: 'Sistemas que escalan sin dejar deudas.',
      subheadline: 'El mercado está lleno de sistemas "remendados". En Suinit, entregamos software de alto rendimiento con Cero Deuda Técnica. Tu empresa gana velocidad, código limpio y propiedad total del proyecto.',
      ctaPrimary: 'Iniciar mi proyecto',
      ctaSecondary: 'Entiende nuestra metodología',
    },
  };

  const text = content[language];

  return (
    <section className="min-h-screen flex flex-col justify-center bg-background relative overflow-hidden pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          {text.label}
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-display text-[clamp(2.5rem,8vw,6rem)] max-w-5xl leading-[1.1]"
        >
          {text.headline.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="text-primary">{text.headline.split(' ').slice(-1)}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-8 leading-relaxed"
        >
          {text.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <a
            href="https://wa.me/5511933336922"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center gap-2"
          >
            {text.ctaPrimary}
            <ArrowRight size={18} />
          </a>
          <a
            href="#zero-debt"
            className="btn-outline flex items-center justify-center gap-2"
          >
            {text.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
