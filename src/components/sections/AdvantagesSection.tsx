import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield, Rocket, Code2, Gauge, Cloud, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const AdvantagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const advantages = [
    {
      icon: Zap,
      title: t.advantages.items[0].title,
      description: t.advantages.items[0].description,
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'hover:border-amber-500/50',
      iconColor: 'text-amber-500',
      size: 'large', // spans 2 columns
    },
    {
      icon: Shield,
      title: t.advantages.items[1].title,
      description: t.advantages.items[1].description,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'hover:border-emerald-500/50',
      iconColor: 'text-emerald-500',
      size: 'medium',
    },
    {
      icon: Rocket,
      title: t.advantages.items[2].title,
      description: t.advantages.items[2].description,
      color: 'from-blue-500/20 to-indigo-500/20',
      borderColor: 'hover:border-blue-500/50',
      iconColor: 'text-blue-500',
      size: 'medium',
    },
    {
      icon: Code2,
      title: t.advantages.items[3].title,
      description: t.advantages.items[3].description,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'hover:border-purple-500/50',
      iconColor: 'text-purple-500',
      size: 'medium',
    },
    {
      icon: Gauge,
      title: t.advantages.items[4].title,
      description: t.advantages.items[4].description,
      color: 'from-rose-500/20 to-red-500/20',
      borderColor: 'hover:border-rose-500/50',
      iconColor: 'text-rose-500',
      size: 'medium',
    },
    {
      icon: Cloud,
      title: t.advantages.items[5].title,
      description: t.advantages.items[5].description,
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'hover:border-cyan-500/50',
      iconColor: 'text-cyan-500',
      size: 'large',
    },
  ];

  return (
    <section 
      id="vantagens" 
      ref={ref} 
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full mb-6"
            >
              <span className="text-sm font-medium">{t.advantages.badge}</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {t.advantages.title1}
              <br />
              <span className="font-display italic text-primary-glow">{t.advantages.title2}</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-md text-lg"
          >
            {t.advantages.description}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`
                group relative
                ${item.size === 'large' ? 'lg:col-span-2' : ''}
              `}
            >
              <div className={`
                relative h-full p-6 md:p-8 rounded-2xl border border-border
                bg-gradient-to-br ${item.color} backdrop-blur-sm
                ${item.borderColor} transition-all duration-500
                hover:shadow-2xl hover:shadow-primary/5
              `}>
                {/* Icon */}
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-6
                  bg-background/50 backdrop-blur-sm border border-border
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                {/* Hover Arrow */}
                <motion.div
                  className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUpRight className={`w-5 h-5 ${item.iconColor}`} />
                </motion.div>
                
                {/* Decorative gradient blob */}
                <div className={`
                  absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl
                  bg-gradient-to-br ${item.color} opacity-50 group-hover:opacity-80
                  transition-opacity duration-500
                `} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
