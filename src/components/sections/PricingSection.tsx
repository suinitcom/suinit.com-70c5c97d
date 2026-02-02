import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage, formatPrice } from '@/i18n/LanguageContext';

// Base prices in USD
const BASE_PRICES = {
  essential: 97,
  growth: 194, // Double of essential
};

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language, exchangeRate } = useLanguage();

  const content = {
    pt: {
      label: 'PLANOS',
      heading: 'Escolha o plano ideal para seu negócio',
      note: 'Todos os planos incluem Taxa de Setup Inicial. Com ela, garantimos a entrega de arquivos editáveis, código documentado e Zero Dívida Técnica — você é dono de tudo.',
      cta: 'Quero esse plano',
      ctaEnterprise: 'Falar com especialista',
      monthly: '/mês',
      plans: [
        {
          id: 'essential',
          name: 'Essencial',
          priceUsd: BASE_PRICES.essential,
          focus: 'Presença Profissional',
          description: 'Ideal para empresas que precisam de uma presença profissional, segura e rápida na internet.',
          features: [
            'Site institucional moderno',
            'Hospedagem Edge de alta performance',
            'Certificado SSL incluso',
            'Backups automáticos diários',
            'Suporte técnico por email',
          ],
        },
        {
          id: 'growth',
          name: 'Growth',
          priceUsd: BASE_PRICES.growth,
          focus: 'Geração de Leads',
          description: 'Foco total em Geração de Leads. SEO para ser encontrado e integração com seu CRM para não perder nenhum contato.',
          features: [
            'Tudo do plano Essencial',
            'SEO On-page avançado',
            'Integração com CRM e ferramentas',
            'Relatórios mensais de performance',
            'Suporte prioritário',
            'Landing pages otimizadas',
          ],
          popular: true,
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          priceUsd: null,
          focus: 'Escala',
          description: 'Soluções robustas e sistemas específicos para operações maiores que precisam de escala.',
          features: [
            'Tudo do plano Growth',
            'Sistemas web customizados',
            'Integrações avançadas',
            'Infraestrutura dedicada',
            'Gerente de conta dedicado',
            'Suporte 24/7',
          ],
        },
      ],
    },
    en: {
      label: 'PRICING',
      heading: 'Choose the ideal plan for your business',
      note: 'All plans include an Initial Setup Fee. With it, we guarantee the delivery of editable files, documented code, and Zero Technical Debt — you own everything.',
      cta: 'I want this plan',
      ctaEnterprise: 'Talk to specialist',
      monthly: '/month',
      plans: [
        {
          id: 'essential',
          name: 'Essential',
          priceUsd: BASE_PRICES.essential,
          focus: 'Professional Presence',
          description: 'Ideal for companies that need a professional, secure and fast presence on the internet.',
          features: [
            'Modern institutional website',
            'High performance Edge hosting',
            'SSL certificate included',
            'Daily automatic backups',
            'Email technical support',
          ],
        },
        {
          id: 'growth',
          name: 'Growth',
          priceUsd: BASE_PRICES.growth,
          focus: 'Lead Generation',
          description: 'Total focus on Lead Generation. SEO to be found and CRM integration so you never lose a contact.',
          features: [
            'Everything from Essential',
            'Advanced On-page SEO',
            'CRM and tools integration',
            'Monthly performance reports',
            'Priority support',
            'Optimized landing pages',
          ],
          popular: true,
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          priceUsd: null,
          focus: 'Scale',
          description: 'Robust solutions and specific systems for larger operations that need scale.',
          features: [
            'Everything from Growth',
            'Custom web systems',
            'Advanced integrations',
            'Dedicated infrastructure',
            'Dedicated account manager',
            '24/7 support',
          ],
        },
      ],
    },
    es: {
      label: 'PRECIOS',
      heading: 'Elige el plan ideal para tu negocio',
      note: 'Todos los planes incluyen Tarifa de Setup Inicial. Con ella, garantizamos la entrega de archivos editables, código documentado y Cero Deuda Técnica — tú eres dueño de todo.',
      cta: 'Quiero este plan',
      ctaEnterprise: 'Hablar con especialista',
      monthly: '/mes',
      plans: [
        {
          id: 'essential',
          name: 'Esencial',
          priceUsd: BASE_PRICES.essential,
          focus: 'Presencia Profesional',
          description: 'Ideal para empresas que necesitan una presencia profesional, segura y rápida en internet.',
          features: [
            'Sitio institucional moderno',
            'Hosting Edge de alto rendimiento',
            'Certificado SSL incluido',
            'Backups automáticos diarios',
            'Soporte técnico por email',
          ],
        },
        {
          id: 'growth',
          name: 'Growth',
          priceUsd: BASE_PRICES.growth,
          focus: 'Generación de Leads',
          description: 'Enfoque total en Generación de Leads. SEO para ser encontrado e integración con tu CRM para no perder ningún contacto.',
          features: [
            'Todo del plan Esencial',
            'SEO On-page avanzado',
            'Integración con CRM y herramientas',
            'Informes mensuales de rendimiento',
            'Soporte prioritario',
            'Landing pages optimizadas',
          ],
          popular: true,
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          priceUsd: null,
          focus: 'Escala',
          description: 'Soluciones robustas y sistemas específicos para operaciones mayores que necesitan escala.',
          features: [
            'Todo del plan Growth',
            'Sistemas web personalizados',
            'Integraciones avanzadas',
            'Infraestructura dedicada',
            'Gerente de cuenta dedicado',
            'Soporte 24/7',
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
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 max-w-3xl"
        >
          {text.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-16 max-w-2xl"
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
                plan.popular ? 'border-primary' : 'border-transparent hover:border-primary/20'
              }`}
            >
              {/* Plan Header */}
              <div className="mb-8">
                <p className="text-xs font-display font-semibold uppercase tracking-widest text-primary mb-2">
                  {plan.focus}
                </p>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {plan.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-baseline gap-1">
                  {plan.priceUsd ? (
                    <>
                      <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        {formatPrice(plan.priceUsd, language, exchangeRate)}
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
                    <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
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
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background'
                }`}
              >
                {plan.priceUsd ? text.cta : text.ctaEnterprise}
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
