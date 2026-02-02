import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const HeroSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      label: 'SITES & PRESENÇA DIGITAL',
      headline: 'Um site que não é apenas bonito. Um site que traz clientes.',
      subheadline: 'Pare de perder oportunidades com um site que ninguém visita ou que não converte. Criamos sites profissionais focados em uma única coisa: colocar o seu cliente em contato com você.',
      ctaPrimary: 'Quero vender mais',
      ctaSecondary: 'Conheça nossa estratégia',
    },
    en: {
      label: 'WEBSITES & DIGITAL PRESENCE',
      headline: "A website that's not just beautiful. A website that brings clients.",
      subheadline: "Stop losing opportunities with a website no one visits or that doesn't convert. We create professional websites focused on one thing: putting your customer in touch with you.",
      ctaPrimary: 'I want to sell more',
      ctaSecondary: 'Learn our strategy',
    },
    es: {
      label: 'SITIOS WEB & PRESENCIA DIGITAL',
      headline: 'Un sitio que no es solo bonito. Un sitio que trae clientes.',
      subheadline: 'Deja de perder oportunidades con un sitio que nadie visita o que no convierte. Creamos sitios profesionales enfocados en una sola cosa: poner a tu cliente en contacto contigo.',
      ctaPrimary: 'Quiero vender más',
      ctaSecondary: 'Conoce nuestra estrategia',
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
          className="heading-display text-[clamp(2.5rem,8vw,5rem)] max-w-5xl leading-[1.1]"
        >
          {text.headline}
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
            href="#why-doesnt-sell"
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
