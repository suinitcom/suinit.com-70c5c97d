import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();

  const content = {
    pt: {
      label: 'PLANOS',
      heading: 'Investimento transparente para resultados reais',
      note: 'Todos os planos incluem Taxa de Setup Inicial para garantir a entrega de Zero Dívida Técnica.',
      cta: 'Começar agora',
      ctaEnterprise: 'Falar com especialista',
      monthly: '/mês',
      plans: [
        {
          id: 'essential',
          name: 'Essencial',
          price: 'R$ 504',
          focus: 'Estabilidade',
          description: 'Ideal para quem já tem um produto e quer segurança e performance absoluta.',
          features: [
            'Hospedagem Edge de alta performance',
            'Certificado SSL incluso',
            'Suporte técnico crítico',
            'Backups automáticos diários',
            'Monitoramento de uptime',
          ],
        },
        {
          id: 'growth',
          name: 'Growth',
          price: 'R$ 1.024',
          focus: 'Evolução',
          description: 'Integrações, SEO avançado e relatórios para quem está em fase de tração.',
          features: [
            'Tudo do plano Essencial',
            'Integração com CRM e ferramentas',
            'SEO On-page avançado',
            'Relatórios mensais de performance',
            'Suporte prioritário',
            'Atualizações de segurança proativas',
          ],
          popular: true,
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          price: null,
          focus: 'Complexidade',
          description: 'Arquiteturas customizadas e suporte dedicado 24/7 para operações críticas.',
          features: [
            'Tudo do plano Growth',
            'Arquitetura customizada',
            'Sistemas SaaS complexos',
            'Infraestrutura dedicada',
            'Gerente de conta dedicado',
            'Suporte 24/7',
          ],
        },
      ],
    },
    en: {
      label: 'PRICING',
      heading: 'Transparent investment for real results',
      note: 'All plans include an Initial Setup Fee to ensure Zero Technical Debt delivery.',
      cta: 'Get started',
      ctaEnterprise: 'Talk to specialist',
      monthly: '/month',
      plans: [
        {
          id: 'essential',
          name: 'Essential',
          price: '$97',
          focus: 'Stability',
          description: 'Ideal for those who already have a product and want absolute security and performance.',
          features: [
            'High performance Edge hosting',
            'SSL certificate included',
            'Critical technical support',
            'Daily automatic backups',
            'Uptime monitoring',
          ],
        },
        {
          id: 'growth',
          name: 'Growth',
          price: '$197',
          focus: 'Evolution',
          description: 'Integrations, advanced SEO and reports for those in traction phase.',
          features: [
            'Everything from Essential',
            'CRM and tools integration',
            'Advanced On-page SEO',
            'Monthly performance reports',
            'Priority support',
            'Proactive security updates',
          ],
          popular: true,
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          price: null,
          focus: 'Complexity',
          description: 'Custom architectures and dedicated 24/7 support for critical operations.',
          features: [
            'Everything from Growth',
            'Custom architecture',
            'Complex SaaS systems',
            'Dedicated infrastructure',
            'Dedicated account manager',
            '24/7 support',
          ],
        },
      ],
    },
    es: {
      label: 'PRECIOS',
      heading: 'Inversión transparente para resultados reales',
      note: 'Todos los planes incluyen Tarifa de Setup Inicial para garantizar la entrega de Cero Deuda Técnica.',
      cta: 'Comenzar ahora',
      ctaEnterprise: 'Hablar con especialista',
      monthly: '/mes',
      plans: [
        {
          id: 'essential',
          name: 'Esencial',
          price: '$97',
          focus: 'Estabilidad',
          description: 'Ideal para quienes ya tienen un producto y quieren seguridad y rendimiento absoluto.',
          features: [
            'Hosting Edge de alto rendimiento',
            'Certificado SSL incluido',
            'Soporte técnico crítico',
            'Backups automáticos diarios',
            'Monitoreo de uptime',
          ],
        },
        {
          id: 'growth',
          name: 'Growth',
          price: '$197',
          focus: 'Evolución',
          description: 'Integraciones, SEO avanzado e informes para quienes están en fase de tracción.',
          features: [
            'Todo del plan Esencial',
            'Integración con CRM y herramientas',
            'SEO On-page avanzado',
            'Informes mensuales de rendimiento',
            'Soporte prioritario',
            'Actualizaciones de seguridad proactivas',
          ],
          popular: true,
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          price: null,
          focus: 'Complejidad',
          description: 'Arquitecturas personalizadas y soporte dedicado 24/7 para operaciones críticas.',
          features: [
            'Todo del plan Growth',
            'Arquitectura personalizada',
            'Sistemas SaaS complejos',
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
                  {plan.price ? (
                    <>
                      <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        {plan.price}
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
