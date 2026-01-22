import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, ChevronDown, Star, Zap, TrendingUp, Shield, HeadphonesIcon, BarChart3, Users } from 'lucide-react';
import { staggerRevealVariants } from '@/hooks/useScrollAnimation';

const plans = [
  {
    id: 'essencial',
    name: 'Essencial',
    price: 'R$ 450',
    period: '/mês',
    description: 'Foco em estabilidade e suporte contínuo para seu negócio.',
    highlight: false,
    features: [
      'Hospedagem Edge Computing',
      'E-mail Gerenciado',
      'Certificado SSL',
      '1h de suporte técnico/mês',
      'Monitoramento 24/7',
      'Backups automáticos',
    ],
    expandedFeatures: [
      {
        icon: Shield,
        title: 'Hospedagem Edge Computing',
        description: 'Servidores distribuídos globalmente para latência mínima. Seu site carrega em milissegundos de qualquer lugar do mundo.'
      },
      {
        icon: HeadphonesIcon,
        title: 'E-mail Profissional',
        description: 'E-mails personalizados com seu domínio (@suaempresa.com), incluindo anti-spam e backup automático.'
      },
      {
        icon: Shield,
        title: 'Certificado SSL Premium',
        description: 'Criptografia de ponta a ponta, selo de segurança visível e melhor ranqueamento no Google.'
      },
      {
        icon: Zap,
        title: '1 Hora Técnica Mensal',
        description: 'Suporte especializado para ajustes, dúvidas e pequenas melhorias no seu sistema.'
      },
    ]
  },
  {
    id: 'evolution',
    name: 'Evolution',
    price: 'R$ 1.200',
    period: '/mês',
    description: 'Para empresas que querem escalar com inteligência.',
    highlight: true,
    badge: 'Mais Popular',
    features: [
      'Tudo do plano Essencial',
      'Integração CRM/WhatsApp',
      'SEO mensal otimizado',
      'Consultoria estratégica',
      'Dashboard de Leads',
      'Relatórios de performance',
    ],
    expandedFeatures: [
      {
        icon: Users,
        title: 'Integração CRM & WhatsApp',
        description: 'Conecte seu site diretamente ao HubSpot, RD Station ou similar. Leads capturados vão automaticamente para seu CRM e disparam mensagens no WhatsApp.'
      },
      {
        icon: TrendingUp,
        title: 'SEO Mensal Otimizado',
        description: 'Otimização contínua de palavras-chave, meta tags, velocidade e conteúdo para manter seu site no topo do Google.'
      },
      {
        icon: Star,
        title: 'Consultoria Estratégica',
        description: 'Reuniões mensais para analisar métricas, identificar oportunidades e planejar melhorias que impactam seu negócio.'
      },
      {
        icon: BarChart3,
        title: 'Dashboard de Leads',
        description: 'Painel visual em tempo real com todos os leads, origem, status e métricas de conversão.'
      },
    ]
  },
];

const variants = staggerRevealVariants({ staggerDelay: 0.15 });

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section id="planos" ref={ref} className="py-20 md:py-32 section-gradient relative overflow-hidden">
      {/* Background decoration with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 25%, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-2 mb-6"
          >
            <Star size={16} />
            <span className="text-sm font-medium">Planos Flexíveis</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Escolha o Plano Ideal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Soluções pensadas para cada estágio do seu negócio. 
            Sem surpresas, sem custos ocultos.
          </motion.p>
        </motion.div>

        {/* Plans Grid with Stagger */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={variants.container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={index === 0 ? variants.itemFromLeft : variants.itemFromRight}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative ${plan.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.badge && (
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="bg-white text-primary text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </motion.div>
              )}
              
              <div className={`bg-white rounded-2xl p-8 h-full ${plan.highlight ? 'ring-4 ring-white/30 shadow-2xl' : 'shadow-lg'}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <motion.span 
                      className="text-4xl font-bold text-primary"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: "spring" }}
                    >
                      {plan.price}
                    </motion.span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* Features List with stagger */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                    >
                      <motion.div 
                        className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Check className="w-3 h-3 text-primary" />
                      </motion.div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-center font-semibold py-3 rounded-lg transition-all duration-300 mb-4 ${
                    plan.highlight 
                      ? 'btn-primary' 
                      : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Contratar Agora
                </motion.a>

                {/* Expand Button */}
                <motion.button
                  onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center gap-2 w-full text-primary text-sm font-medium hover:text-primary-dark transition-colors"
                >
                  Saiba Mais
                  <motion.span
                    animate={{ rotate: expandedPlan === plan.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </motion.button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedPlan === plan.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-border space-y-4">
                        {plan.expandedFeatures.map((feature, idx) => (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08, duration: 0.4 }}
                            className="flex gap-4"
                          >
                            <motion.div 
                              className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <feature.icon className="w-5 h-5 text-primary" />
                            </motion.div>
                            <div>
                              <h4 className="font-medium text-foreground text-sm">{feature.title}</h4>
                              <p className="text-muted-foreground text-xs mt-1">{feature.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
