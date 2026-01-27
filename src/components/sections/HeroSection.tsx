import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import MagneticButton from '../ui/MagneticButton';
import Marquee from '../ui/Marquee';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  // Smooth spring physics
  const smoothTextY = useSpring(textY, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const marqueeItems = [
    'Web Development',
    '✦',
    'UI/UX Design',
    '✦',
    'SaaS Solutions',
    '✦',
    'Performance',
    '✦',
    'Innovation',
    '✦',
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden section-mesh noise-overlay"
    >
      {/* Animated gradient blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary-glow/20 blur-[100px] rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-primary-light/15 blur-[80px] rounded-full"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Main Hero Content */}
      <motion.div 
        className="container mx-auto px-4 md:px-6 pt-32 pb-16 relative z-10 flex-1 flex items-center"
        style={{ y: smoothTextY, opacity: smoothOpacity, scale: smoothScale }}
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary-glow" />
            <span className="text-white/90 text-sm font-medium">Agência de Desenvolvimento Premium</span>
          </motion.div>

          {/* Main Headline with creative typography */}
          <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-16 items-center mb-12">
            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6"
              >
                <motion.span
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="block"
                >
                  Sistemas que
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block"
                >
                  impulsionam
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block relative inline-flex items-center"
                >
                  <span className="font-display italic text-primary-glow">resultados</span>
                  <motion.svg 
                    viewBox="0 0 200 20" 
                    className="absolute -bottom-2 left-0 w-full h-auto"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <motion.path
                      d="M0,10 Q50,0 100,10 T200,10"
                      fill="none"
                      stroke="hsl(225, 100%, 60%)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                    />
                  </motion.svg>
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-lg md:text-xl text-white/70 max-w-xl mb-10"
              >
                Desenvolvemos soluções web com foco em ROI, escalabilidade e 
                <span className="text-white font-medium"> zero dívida técnica</span>. 
                Seu negócio merece tecnologia que gera retorno.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <MagneticButton strength={0.2}>
                  <motion.a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-3 btn-brutal bg-white text-primary"
                  >
                    <MessageCircle size={20} />
                    Falar com Especialista
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </motion.a>
                </MagneticButton>
                
                <motion.a
                  href="#planos"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 text-white font-semibold px-8 py-4 border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  Ver Planos
                </motion.a>
              </motion.div>
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="hidden lg:flex flex-col items-end"
            >
              <div className="relative">
                <motion.div 
                  className="decorative-number-solid"
                  animate={{ rotate: [0, 2, 0, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  S.
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-primary-glow rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center gap-8 md:gap-12"
          >
            {[
              { value: '50+', label: 'Projetos' },
              { value: '99.9%', label: 'Uptime' },
              { value: '<1s', label: 'Load Time' }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
                className="flex items-baseline gap-2"
              >
                <motion.span 
                  className="text-3xl md:text-4xl font-bold text-white font-display"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.3 + index * 0.15, type: "spring" }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Marquee Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="relative z-10 py-6 border-t border-white/10 bg-black/20 backdrop-blur-sm"
      >
        <Marquee speed={25} className="text-white/80 text-lg md:text-xl font-medium">
          {marqueeItems.map((item, index) => (
            <span key={index} className="mx-4 md:mx-8">
              {item}
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default HeroSection;
