import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, ChevronDown, Star, Zap, TrendingUp, Shield, HeadphonesIcon, BarChart3, Users } from 'lucide-react';

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

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  return (
    <section id="planos" ref={ref} className="py-20 md:py-32 section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 25%, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-2 mb-6">
            <Star size={16} />
            <span className="text-sm font-medium">Planos Flexíveis</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Escolha o Plano Ideal
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Soluções pensadas para cada estágio do seu negócio. 
            Sem surpresas, sem custos ocultos.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-white text-primary text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className={`bg-white rounded-2xl p-8 h-full ${plan.highlight ? 'ring-4 ring-white/30 shadow-2xl' : 'shadow-lg'}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-semibold py-3 rounded-lg transition-all duration-300 mb-4 ${
                    plan.highlight 
                      ? 'btn-primary' 
                      : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Contratar Agora
                </a>

                {/* Expand Button */}
                <button
                  onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                  className="flex items-center justify-center gap-2 w-full text-primary text-sm font-medium hover:text-primary-dark transition-colors"
                >
                  Saiba Mais
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${expandedPlan === plan.id ? 'rotate-180' : ''}`} 
                  />
                </button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedPlan === plan.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-border space-y-4">
                        {plan.expandedFeatures.map((feature, idx) => (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex gap-4"
                          >
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-5 h-5 text-primary" />
                            </div>
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
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
