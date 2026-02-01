import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();

  const content = {
    pt: {
      label: 'SERVIÇOS',
      services: [
        {
          title: 'Design & Branding',
          description: 'Design de interface focado em conversão e manuais de marca que posicionam sua empresa no topo.',
          extra: 'UI/UX, identidade visual e sistemas de design.',
        },
        {
          title: 'Desenvolvimento de Elite',
          description: 'Aplicações SaaS e sistemas web robustos usando Next.js, TypeScript e Node.js. Código feito para durar.',
          extra: 'Zero dívida técnica garantida.',
        },
        {
          title: 'Manutenção & Infra',
          description: 'Hospedagem em edge e suporte crítico. Cuidamos do técnico para você focar no negócio.',
          extra: 'Uptime 99.9% e monitoramento 24/7.',
        },
      ],
    },
    en: {
      label: 'SERVICES',
      services: [
        {
          title: 'Design & Branding',
          description: 'Conversion-focused interface design and brand manuals that position your company at the top.',
          extra: 'UI/UX, visual identity and design systems.',
        },
        {
          title: 'Elite Development',
          description: 'Robust SaaS applications and web systems using Next.js, TypeScript and Node.js. Code built to last.',
          extra: 'Zero technical debt guaranteed.',
        },
        {
          title: 'Maintenance & Infra',
          description: 'Edge hosting and critical support. We handle the technical so you can focus on business.',
          extra: '99.9% uptime and 24/7 monitoring.',
        },
      ],
    },
    es: {
      label: 'SERVICIOS',
      services: [
        {
          title: 'Diseño & Branding',
          description: 'Diseño de interfaz enfocado en conversión y manuales de marca que posicionan tu empresa en la cima.',
          extra: 'UI/UX, identidad visual y sistemas de diseño.',
        },
        {
          title: 'Desarrollo de Élite',
          description: 'Aplicaciones SaaS y sistemas web robustos usando Next.js, TypeScript y Node.js. Código hecho para durar.',
          extra: 'Cero deuda técnica garantizada.',
        },
        {
          title: 'Mantenimiento & Infra',
          description: 'Hosting en edge y soporte crítico. Nos encargamos de lo técnico para que te enfoques en el negocio.',
          extra: 'Uptime 99.9% y monitoreo 24/7.',
        },
      ],
    },
  };

  const text = content[language];

  return (
    <section id="services" ref={ref} className="py-32 md:py-48 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          {text.label}
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12">
          {text.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="service-card group"
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-sm text-primary font-semibold">
                {service.extra}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
