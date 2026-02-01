import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();

  const content = {
    pt: {
      heading: 'Tem um projeto em mente?',
      subheading: 'Vamos conversar.',
    },
    en: {
      heading: 'Got a project in mind?',
      subheading: 'Let\'s talk.',
    },
    es: {
      heading: '¿Tienes un proyecto en mente?',
      subheading: 'Hablemos.',
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
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
          >
            {text.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-background/60 mb-16"
          >
            {text.subheading}
          </motion.p>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Email */}
            <a
              href="mailto:contato@suinit.com"
              className="group flex items-center gap-3 bg-background text-foreground px-8 py-5 font-display font-semibold transition-all hover:bg-background/90"
            >
              <Mail size={20} />
              contato@suinit.com
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5511933336922"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border-2 border-background text-background px-8 py-5 font-display font-semibold transition-all hover:bg-background hover:text-foreground"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
