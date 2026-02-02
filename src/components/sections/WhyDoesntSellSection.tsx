import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Eye, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const WhyDoesntSellSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();

  const content = {
    pt: {
      label: 'O PROBLEMA',
      heading: 'Por que seu site atual não vende?',
      subheading: 'Ter um site é fácil. Ter um site que trabalha para você 24h por dia é o que nos diferencia.',
      features: [
        {
          icon: Zap,
          title: 'Velocidade',
          description: 'Se o site demora a carregar, o cliente vai para o concorrente.',
        },
        {
          icon: Eye,
          title: 'Clareza',
          description: 'O cliente entende o que você faz em menos de 5 segundos?',
        },
        {
          icon: MessageSquare,
          title: 'Contato Fácil',
          description: 'Facilitamos o caminho para o seu WhatsApp ou formulário de orçamento.',
        },
      ],
    },
    en: {
      label: 'THE PROBLEM',
      heading: "Why doesn't your current website sell?",
      subheading: "Having a website is easy. Having a website that works for you 24/7 is what sets us apart.",
      features: [
        {
          icon: Zap,
          title: 'Speed',
          description: 'If the site takes too long to load, the customer goes to the competitor.',
        },
        {
          icon: Eye,
          title: 'Clarity',
          description: 'Does the customer understand what you do in less than 5 seconds?',
        },
        {
          icon: MessageSquare,
          title: 'Easy Contact',
          description: 'We make the path to your WhatsApp or quote form seamless.',
        },
      ],
    },
    es: {
      label: 'EL PROBLEMA',
      heading: '¿Por qué tu sitio actual no vende?',
      subheading: 'Tener un sitio es fácil. Tener un sitio que trabaja para ti 24h al día es lo que nos diferencia.',
      features: [
        {
          icon: Zap,
          title: 'Velocidad',
          description: 'Si el sitio tarda en cargar, el cliente se va con la competencia.',
        },
        {
          icon: Eye,
          title: 'Claridad',
          description: '¿El cliente entiende lo que haces en menos de 5 segundos?',
        },
        {
          icon: MessageSquare,
          title: 'Contacto Fácil',
          description: 'Facilitamos el camino hacia tu WhatsApp o formulario de presupuesto.',
        },
      ],
    },
  };

  const text = content[language];

  return (
    <section id="why-doesnt-sell" ref={ref} className="py-32 md:py-48 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-primary-foreground/60 mb-6"
        >
          {text.label}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
        >
          {text.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl md:text-2xl text-primary-foreground/80 mb-16"
        >
          {text.subheading}
        </motion.p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {text.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="w-14 h-14 bg-primary-foreground/10 flex items-center justify-center mb-6">
                <feature.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDoesntSellSection;
