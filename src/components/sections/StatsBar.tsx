import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const StatsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { t } = useLanguage();

  const stats = [
    { value: '4.9', label: t.stats.rating, suffix: '' },
    { value: '100', label: t.stats.projects, suffix: '%' },
    { value: '24', label: t.stats.support, suffix: '/7' },
    { value: '0', label: t.stats.technicalDebt, suffix: '' },
  ];

  return (
    <section ref={ref} className="relative -mt-1">
      <div className="bg-primary py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200 
                  }}
                  className="flex items-baseline justify-center gap-1 mb-2"
                >
                  <span className="text-4xl md:text-5xl font-bold text-white font-display">
                    {stat.value}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-white/80">
                    {stat.suffix}
                  </span>
                </motion.div>
                <p className="text-white/70 text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
