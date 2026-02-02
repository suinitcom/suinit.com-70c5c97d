import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();

  const content = {
    pt: {
      label: 'NOSSOS SERVIÇOS',
      services: [
        {
          title: 'Design que Atrai',
          description: 'Não é só estética. Criamos o visual do seu site focado no comportamento do seu cliente para que ele sinta confiança e clique no botão de contato.',
          extra: 'UI/UX focado em conversão.',
        },
        {
          title: 'Sites e Sistemas Web',
          description: 'Construímos sites rápidos, modernos e que aparecem no Google. De sites institucionais a ferramentas sob medida para o seu negócio.',
          extra: 'Performance + SEO otimizado.',
        },
        {
          title: 'Suporte e Evolução',
          description: 'Seu site sempre no ar, seguro e atualizado. Cuidamos da parte chata (hospedagem e segurança) para você focar no que importa: atender seus novos leads.',
          extra: 'Uptime 99.9% garantido.',
        },
      ],
    },
    en: {
      label: 'OUR SERVICES',
      services: [
        {
          title: 'Design that Attracts',
          description: "It's not just aesthetics. We create your site's visuals focused on your customer's behavior so they feel confident and click the contact button.",
          extra: 'Conversion-focused UI/UX.',
        },
        {
          title: 'Websites & Web Systems',
          description: 'We build fast, modern websites that show up on Google. From institutional sites to custom-built tools for your business.',
          extra: 'Performance + SEO optimized.',
        },
        {
          title: 'Support & Evolution',
          description: 'Your site always online, secure, and updated. We handle the boring stuff (hosting and security) so you can focus on what matters: serving your new leads.',
          extra: '99.9% uptime guaranteed.',
        },
      ],
    },
    es: {
      label: 'NUESTROS SERVICIOS',
      services: [
        {
          title: 'Diseño que Atrae',
          description: 'No es solo estética. Creamos el visual de tu sitio enfocado en el comportamiento de tu cliente para que sienta confianza y haga clic en el botón de contacto.',
          extra: 'UI/UX enfocado en conversión.',
        },
        {
          title: 'Sitios y Sistemas Web',
          description: 'Construimos sitios rápidos, modernos y que aparecen en Google. Desde sitios institucionales hasta herramientas a medida para tu negocio.',
          extra: 'Performance + SEO optimizado.',
        },
        {
          title: 'Soporte y Evolución',
          description: 'Tu sitio siempre activo, seguro y actualizado. Nos encargamos de lo aburrido (hosting y seguridad) para que te enfoques en lo que importa: atender tus nuevos leads.',
          extra: 'Uptime 99.9% garantizado.',
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
