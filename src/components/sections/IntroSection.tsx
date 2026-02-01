import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();

  const content = {
    pt: {
      heading: 'O mundo digital está lotado. Para se destacar, você precisa de um sistema que realmente funcione.',
      description: 'É aí que a Suinit entra. Com experiência em design UI/UX e desenvolvimento de sistemas escaláveis, somos sua solução completa para criar uma presença digital que converte.',
      cta: 'Conheça nossos serviços',
    },
    en: {
      heading: 'The digital world is crowded. To stand out, you need a system that actually works.',
      description: 'That\'s where Suinit comes in. With expertise in UI/UX design and scalable system development, we\'re your complete solution for building a digital presence that converts.',
      cta: 'Check out our services',
    },
    es: {
      heading: 'El mundo digital está saturado. Para destacar, necesitas un sistema que realmente funcione.',
      description: 'Ahí es donde entra Suinit. Con experiencia en diseño UI/UX y desarrollo de sistemas escalables, somos tu solución completa para crear una presencia digital que convierte.',
      cta: 'Conoce nuestros servicios',
    },
  };

  const text = content[language];

  return (
    <section id="intro" ref={ref} className="py-32 md:py-48 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          {/* Large Intro Text */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground leading-tight mb-12"
          >
            {text.heading}
          </motion.h2>

          {/* Description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {text.description}
            </p>
            <a
              href="#services"
              className="btn-outline whitespace-nowrap"
            >
              {text.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
