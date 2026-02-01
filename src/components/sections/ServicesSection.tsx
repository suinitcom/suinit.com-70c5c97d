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
          title: 'Design',
          description: 'UI/UX design, design de interfaces, prototipagem. Criamos soluções digitais que mantêm seus clientes engajados com seu produto.',
          extra: 'Se precisar de branding, fale conosco também!',
        },
        {
          title: 'Desenvolvimento',
          description: 'Sites, sistemas web, aplicações SaaS. Transformamos pixels perfeitos em experiências online incríveis usando tecnologias modernas.',
          extra: 'React, Next.js, TypeScript, Node.js e muito mais.',
        },
        {
          title: 'Manutenção',
          description: 'Hospedagem edge, SSL, suporte técnico, atualizações de segurança. Mantemos seu sistema funcionando 24/7 sem preocupações.',
          extra: 'Planos mensais que cabem no seu bolso.',
        },
      ],
    },
    en: {
      label: 'SERVICES',
      services: [
        {
          title: 'Design',
          description: 'UI/UX design, interface design, prototyping. We create digital solutions that keep your clients engaged with your product.',
          extra: 'If you need branding, talk to us too!',
        },
        {
          title: 'Development',
          description: 'Websites, web systems, SaaS applications. We transform perfect pixels into amazing online experiences using modern technologies.',
          extra: 'React, Next.js, TypeScript, Node.js and much more.',
        },
        {
          title: 'Maintenance',
          description: 'Edge hosting, SSL, technical support, security updates. We keep your system running 24/7 without worries.',
          extra: 'Monthly plans that fit your budget.',
        },
      ],
    },
    es: {
      label: 'SERVICIOS',
      services: [
        {
          title: 'Diseño',
          description: 'Diseño UI/UX, diseño de interfaces, prototipado. Creamos soluciones digitales que mantienen a tus clientes comprometidos con tu producto.',
          extra: '¡Si necesitas branding, habla con nosotros también!',
        },
        {
          title: 'Desarrollo',
          description: 'Sitios web, sistemas web, aplicaciones SaaS. Transformamos píxeles perfectos en experiencias online increíbles usando tecnologías modernas.',
          extra: 'React, Next.js, TypeScript, Node.js y mucho más.',
        },
        {
          title: 'Mantenimiento',
          description: 'Hosting edge, SSL, soporte técnico, actualizaciones de seguridad. Mantenemos tu sistema funcionando 24/7 sin preocupaciones.',
          extra: 'Planes mensuales que caben en tu bolsillo.',
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
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-sm text-foreground/60 font-medium">
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
