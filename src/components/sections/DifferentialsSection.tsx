import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield, Rocket, Code2, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const technologies = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Vite', color: '#646CFF' },
  { name: 'Supabase', color: '#3ECF8E' },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const differentials = [
    {
      icon: Zap,
      number: '01',
      title: t.differentials.featureTitle,
      description: t.differentials.featureDescription,
    },
    {
      icon: Rocket,
      number: '02',
      title: t.differentials.cards[0].title,
      description: t.differentials.cards[0].description,
    },
    {
      icon: Shield,
      number: '03',
      title: t.differentials.cards[1].title,
      description: t.differentials.cards[1].description,
    },
  ];

  return (
    <section 
      id="diferenciais" 
      ref={ref} 
      className="py-24 md:py-40 section-dark relative overflow-hidden"
    >
      {/* Animated background circles */}
      <motion.div 
        className="absolute top-20 right-20 w-[600px] h-[600px] border border-white/5 rounded-full"
        style={{ rotate }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-[400px] h-[400px] border border-white/5 rounded-full"
        style={{ rotate }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 mb-6"
            >
              <Code2 size={16} />
              <span className="text-sm font-bold uppercase tracking-wider">{t.differentials.badge}</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t.differentials.title1}
              <br />
              <span className="font-display italic text-primary-glow">{t.differentials.title2}</span>
            </h2>

            <p className="text-lg text-white/60 max-w-md">
              {t.differentials.description}
            </p>
          </motion.div>

          {/* Tech Stack Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="code-block p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-white/40 font-mono text-sm">stack.config.ts</span>
              </div>
              
              <div className="space-y-3 font-mono text-sm md:text-base">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-code-keyword"
                >
                  {'export const stack = {'}
                </motion.div>
                
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.15 }}
                    whileHover={{ x: 10 }}
                    className="pl-4 flex items-center gap-2 cursor-default group"
                  >
                    <span 
                      className="w-3 h-3 rounded-full transition-transform group-hover:scale-150" 
                      style={{ background: tech.color }} 
                    />
                    <span className="text-code-string">"{tech.name}"</span>
                    <span className="text-white">:</span>
                    <span className="text-code-text">true</span>
                    <span className="text-white">,</span>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.95 }}
                  className="pl-4"
                >
                  <span className="text-code-function">technicalDebt</span>
                  <span className="text-white">: </span>
                  <span className="text-code-string">"zero"</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.1 }}
                  className="text-code-keyword"
                >
                  {'}'};
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Differentials - Horizontal Cards */}
        <div className="space-y-6">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              whileHover={{ x: 10 }}
              className="group"
            >
              <div className="grid md:grid-cols-[auto,1fr,auto] gap-6 md:gap-10 items-center p-6 md:p-8 bg-white/5 border border-white/10 hover:border-primary-glow/50 hover:bg-white/10 transition-all duration-500">
                {/* Number */}
                <span className="text-5xl md:text-6xl font-display font-bold text-white/10 group-hover:text-primary-glow/30 transition-colors">
                  {item.number}
                </span>
                
                {/* Content */}
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="w-7 h-7 text-primary-glow group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>

                {/* Arrow */}
                <motion.div
                  className="hidden md:flex w-12 h-12 border border-white/20 items-center justify-center group-hover:border-primary-glow group-hover:bg-primary-glow transition-all duration-300"
                  whileHover={{ rotate: 45 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
