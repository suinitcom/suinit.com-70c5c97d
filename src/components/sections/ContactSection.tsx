import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();

  const content = {
    pt: {
      heading: 'Pare de herdar problemas técnicos.',
      subheading: 'Comece a construir o futuro da sua empresa com a Suinit.',
      cta: 'Falar com um Especialista',
    },
    en: {
      heading: 'Stop inheriting technical problems.',
      subheading: "Start building your company's future with Suinit.",
      cta: 'Talk to a Specialist',
    },
    es: {
      heading: 'Deja de heredar problemas técnicos.',
      subheading: 'Empieza a construir el futuro de tu empresa con Suinit.',
      cta: 'Hablar con un Especialista',
    },
  };

  const text = content[language];

  return (
    <section id="contact" ref={ref} className="py-32 md:py-48 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
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
            className="text-xl md:text-2xl text-background/70 mb-12"
          >
            {text.subheading}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://wa.me/5511933336922"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 font-display font-semibold text-lg transition-all hover:bg-background/90"
            >
              <MessageCircle size={24} />
              {text.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
