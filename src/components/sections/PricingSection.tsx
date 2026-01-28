import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, ChevronDown, Star, Zap, TrendingUp, Shield, HeadphonesIcon, BarChart3, Users, ArrowRight, Building2 } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { useLanguage, formatPrice } from '@/i18n/LanguageContext';

const USD_PRICES = {
  essential: 97,
  growth: 197,
};

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const { t, language, exchangeRate } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const iconMap = {
    shield: Shield,
    headphones: HeadphonesIcon,
    zap: Zap,
    users: Users,
    trending: TrendingUp,
    star: Star,
    chart: BarChart3,
    building: Building2,
  };

  const plans = [
    {
      id: 'essential',
      name: t.pricing.plans.essential.name,
      focus: t.pricing.plans.essential.focus,
      price: formatPrice(USD_PRICES.essential, language, exchangeRate),
      period: '/mês',
      description: t.pricing.plans.essential.description,
      highlight: false,
      features: t.pricing.plans.essential.features,
      expandedFeatures: t.pricing.plans.essential.expandedFeatures.map((f, i) => ({
        ...f,
        icon: [Shield, Shield, HeadphonesIcon][i] || Shield,
      })),
    },
    {
      id: 'growth',
      name: t.pricing.plans.growth.name,
      focus: t.pricing.plans.growth.focus,
      price: formatPrice(USD_PRICES.growth, language, exchangeRate),
      period: '/mês',
      description: t.pricing.plans.growth.description,
      highlight: true,
      badge: t.pricing.plans.growth.badge,
      features: t.pricing.plans.growth.features,
      expandedFeatures: t.pricing.plans.growth.expandedFeatures.map((f, i) => ({
        ...f,
        icon: [Users, TrendingUp, BarChart3, Star][i] || Star,
      })),
    },
    {
      id: 'enterprise',
      name: t.pricing.plans.enterprise.name,
      focus: t.pricing.plans.enterprise.focus,
      price: t.pricing.plans.enterprise.priceLabel,
      period: '',
      description: t.pricing.plans.enterprise.description,
      highlight: false,
      features: t.pricing.plans.enterprise.features,
      expandedFeatures: t.pricing.plans.enterprise.expandedFeatures.map((f, i) => ({
        ...f,
        icon: [Building2, BarChart3, Zap, HeadphonesIcon][i] || Building2,
      })),
    },
  ];

  return (
    <section id="planos" ref={ref} className="py-24 md:py-40 section-mesh noise-overlay relative overflow-hidden">
      {/* Decorative number */}
      <motion.div 
        className="absolute -left-20 top-1/3 text-[20rem] font-display font-bold text-white/5 select-none pointer-events-none"
        style={{ y: y1 }}
      >
        03
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 mb-6"
          >
            <Star size={16} />
            <span className="text-sm font-bold uppercase tracking-wider">{t.pricing.badge}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {t.pricing.title1}
            <br />
            <span className="font-display italic text-primary-glow">{t.pricing.title2}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 max-w-xl mx-auto mb-4"
          >
            {t.pricing.description}
          </motion.p>

          {/* Setup Note */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-white/40 max-w-xl mx-auto bg-white/5 px-4 py-2 border border-white/10"
          >
            {t.pricing.setupNote}
          </motion.p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50, rotate: index === 1 ? 0 : (index === 0 ? -1 : 1) }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative ${plan.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.badge && (
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="bg-primary-glow text-white text-sm font-bold px-6 py-2 shadow-lg">
                    {plan.badge}
                  </span>
                </motion.div>
              )}
              
              <div className={`bg-white p-6 md:p-8 h-full ${plan.highlight ? 'ring-4 ring-primary-glow/30 shadow-2xl' : 'shadow-lg'}`}>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-3 py-1 mb-3">
                    {plan.focus}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-display font-bold text-primary">
                      {plan.price}
                    </span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                    >
                      <div className="w-5 h-5 bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <MagneticButton strength={0.1} className="w-full">
                  <motion.a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-center gap-2 w-full font-bold py-4 transition-all duration-300 mb-3 ${
                      plan.highlight 
                        ? 'btn-brutal' 
                        : 'bg-muted text-foreground hover:bg-primary hover:text-white'
                    }`}
                  >
                    {t.pricing.cta}
                    <ArrowRight size={18} />
                  </motion.a>
                </MagneticButton>

                {/* Expand Button */}
                <motion.button
                  onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center gap-2 w-full text-primary text-sm font-medium hover:text-primary-dark transition-colors py-2"
                >
                  {t.pricing.learnMore}
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
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t-2 border-border space-y-4">
                        {plan.expandedFeatures.map((feature, idx) => (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08, duration: 0.4 }}
                            className="flex gap-3"
                          >
                            <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground text-sm">{feature.title}</h4>
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
