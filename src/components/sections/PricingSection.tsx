import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language, exchangeRate } = useLanguage();

  const formatPrice = (usdPrice: number) => {
    if (language === 'pt' && exchangeRate) {
      const brlPrice = Math.round(usdPrice * exchangeRate);
      return `R$ ${brlPrice}`;
    }
    return `US$ ${usdPrice}`;
  };

  const content = {
    pt: {
      label: 'PLANOS',
      heading: 'Escolha o plano ideal para seu negócio',
      note: 'Todos os planos possuem uma Taxa de Setup Inicial (consultar de acordo com o projeto).',
      cta: 'Começar agora',
      ctaEnterprise: 'Falar conosco',
      monthly: '/mês',
      plans: [
        {
          id: 'essential',
          name: 'Essencial',
          price: 97,
          focus: 'Estabilidade',
          description: 'Perfeito para manter seu site funcionando com segurança.',
          features: [
            'Hospedagem Edge de alta performance',
            'Certificado SSL incluso',
            'Suporte técnico crítico',
            'Backups automáticos',
          ],
        },
        {
          id: 'growth',
          name: 'Growth',
          price: 197,
          focus: 'Conversão',
          description: 'Para quem quer crescer e converter mais visitantes.',
          features: [
            'Tudo do plano Essencial',
            'Integração com CRM',
            'SEO On-page otimizado',
            'Relatórios mensais',
            'Suporte prioritário',
          ],
          popular: true,
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          price: null,
          focus: 'Escala',
          description: 'Sistemas complexos e soluções sob medida.',
          features: [
            'Tudo do plano Growth',
            'Sistemas SaaS complexos',
            'Dashboard customizado',
            'Infraestrutura dedicada',
            'Gerente de conta dedicado',
          ],
        },
      ],
    },
    en: {
      label: 'PRICING',
      heading: 'Choose the perfect plan for your business',
      note: 'All plans have an Initial Setup Fee (consult according to the project).',
      cta: 'Get started',
      ctaEnterprise: 'Contact us',
      monthly: '/month',
      plans: [
        {
          id: 'essential',
          name: 'Essential',
          price: 97,
          focus: 'Stability',
          description: 'Perfect for keeping your site running securely.',
          features: [
            'High performance Edge hosting',
            'SSL certificate included',
            'Critical technical support',
            'Automatic backups',
          ],
        },
        {
          id: 'growth',
          name: 'Growth',
          price: 197,
          focus: 'Conversion',
          description: 'For those who want to grow and convert more visitors.',
          features: [
            'Everything from Essential',
            'CRM integration',
            'Optimized On-page SEO',
            'Monthly reports',
            'Priority support',
          ],
          popular: true,
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          price: null,
          focus: 'Scale',
          description: 'Complex systems and custom solutions.',
          features: [
            'Everything from Growth',
            'Complex SaaS systems',
            'Custom dashboard',
            'Dedicated infrastructure',
            'Dedicated account manager',
          ],
        },
      ],
    },
    es: {
      label: 'PRECIOS',
      heading: 'Elige el plan perfecto para tu negocio',
      note: 'Todos los planes tienen una Tarifa de Setup Inicial (consultar según el proyecto).',
      cta: 'Comenzar ahora',
      ctaEnterprise: 'Contáctanos',
      monthly: '/mes',
      plans: [
        {
          id: 'essential',
          name: 'Esencial',
          price: 97,
          focus: 'Estabilidad',
          description: 'Perfecto para mantener tu sitio funcionando con seguridad.',
          features: [
            'Hosting Edge de alto rendimiento',
            'Certificado SSL incluido',
            'Soporte técnico crítico',
            'Backups automáticos',
          ],
        },
        {
          id: 'growth',
          name: 'Growth',
          price: 197,
          focus: 'Conversión',
          description: 'Para quienes quieren crecer y convertir más visitantes.',
          features: [
            'Todo del plan Esencial',
            'Integración con CRM',
            'SEO On-page optimizado',
            'Informes mensuales',
            'Soporte prioritario',
          ],
          popular: true,
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          price: null,
          focus: 'Escala',
          description: 'Sistemas complejos y soluciones a medida.',
          features: [
            'Todo del plan Growth',
            'Sistemas SaaS complejos',
            'Dashboard personalizado',
            'Infraestructura dedicada',
            'Gerente de cuenta dedicado',
          ],
        },
      ],
    },
  };

  const text = content[language];

  return (
    <section id="pricing" ref={ref} className="py-32 md:py-48 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          {text.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 max-w-2xl"
        >
          {text.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-16"
        >
          {text.note}
        </motion.p>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {text.plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`bg-background p-8 md:p-10 border-2 transition-all duration-300 card-hover ${
                plan.popular ? 'border-foreground' : 'border-transparent hover:border-foreground/20'
              }`}
            >
              {/* Plan Header */}
              <div className="mb-8">
                <p className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  {plan.focus}
                </p>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {plan.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-baseline gap-1">
                  {plan.price ? (
                    <>
                      <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        {formatPrice(plan.price)}
                      </span>
                      <span className="text-muted-foreground">{text.monthly}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-display font-semibold text-foreground">
                      {language === 'pt' ? 'Sob consulta' : language === 'es' ? 'Bajo consulta' : 'Custom'}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check size={18} className="text-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/5511933336922"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-4 font-display font-semibold transition-all ${
                  plan.popular
                    ? 'bg-foreground text-background hover:bg-foreground/90'
                    : 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background'
                }`}
              >
                {plan.price ? text.cta : text.ctaEnterprise}
                <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
