import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Carlos M.',
      role: t.testimonials.testimonial1.role,
      text: t.testimonials.testimonial1.text,
      rating: 5,
    },
    {
      name: 'Ana S.',
      role: t.testimonials.testimonial2.role,
      text: t.testimonials.testimonial2.text,
      rating: 5,
    },
    {
      name: 'Ricardo P.',
      role: t.testimonials.testimonial3.role,
      text: t.testimonials.testimonial3.text,
      rating: 5,
    },
  ];

  // Asymmetric photo grid positions
  const gridImages = [
    { size: 'small', delay: 0 },
    { size: 'medium', delay: 0.1 },
    { size: 'small', delay: 0.15 },
    { size: 'large', delay: 0.2 },
    { size: 'medium', delay: 0.25 },
    { size: 'small', delay: 0.3 },
    { size: 'medium', delay: 0.35 },
    { size: 'small', delay: 0.4 },
    { size: 'large', delay: 0.45 },
    { size: 'medium', delay: 0.5 },
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Asymmetric Photo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] md:h-[400px] mb-16 overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-6 md:grid-cols-10 gap-2 md:gap-3 w-full max-w-6xl mx-auto px-4">
              {gridImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: img.delay }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className={`
                    relative rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary-glow/20 backdrop-blur-sm border border-white/10
                    ${img.size === 'small' ? 'col-span-1 row-span-1 h-16 md:h-20' : ''}
                    ${img.size === 'medium' ? 'col-span-1 row-span-2 h-32 md:h-44' : ''}
                    ${img.size === 'large' ? 'col-span-2 row-span-2 h-32 md:h-44' : ''}
                  `}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/30"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ 
                        duration: 3 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        </motion.div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full mb-6"
          >
            <span className="text-sm font-medium">{t.testimonials.badge}</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {t.testimonials.title1}
            <br />
            <span className="font-display italic text-primary-glow">{t.testimonials.title2}</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-card border border-border p-6 md:p-8 rounded-lg hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
