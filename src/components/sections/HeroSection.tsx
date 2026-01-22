import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useRef } from 'react';
import CodeFlowAnimation from '../animations/CodeFlowAnimation';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const floatingCodeY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  
  // Smooth spring physics
  const smoothTextY = useSpring(textY, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-gradient"
    >
      {/* Background Pattern with Parallax */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </motion.div>

      {/* Floating Code Elements with Enhanced Parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: floatingCodeY, opacity: smoothOpacity }}
      >
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-10 opacity-20 font-mono text-white text-sm hidden lg:block"
        >
          {'<Component />'}
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [-2, 2, -2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-20 opacity-20 font-mono text-white text-sm hidden lg:block"
        >
          {'const result = await fetch()'}
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15], scale: [1, 1.05, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 left-1/4 opacity-20 font-mono text-white text-sm hidden lg:block"
        >
          {'export default App'}
        </motion.div>
        <motion.div
          animate={{ y: [10, -25, 10], x: [5, -5, 5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/4 opacity-15 font-mono text-white text-xs hidden lg:block"
        >
          {'import React from "react"'}
        </motion.div>
        <motion.div
          animate={{ y: [-10, 20, -10] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-10 opacity-15 font-mono text-white text-xs hidden lg:block"
        >
          {'return <Layout />'}
        </motion.div>
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 md:px-6 pt-24 pb-16 relative z-10"
        style={{ y: smoothTextY, opacity: smoothOpacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Desenvolvimento Web de Alta Performance</span>
          </motion.div>

          {/* Headline with Staggered Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Sistemas que impulsionam{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative inline-block"
            >
              <span className="relative z-10">resultados</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-primary-glow/40 -z-0 origin-left"
              />
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              ,<br />
              não apenas sites.
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          >
            Desenvolvemos soluções web com foco em ROI, escalabilidade e zero dívida técnica. 
            Seu negócio merece tecnologia que gera retorno.
          </motion.p>

          {/* CTAs with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={20} />
              Falar com Especialista
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
            <motion.a
              href="#planos"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.6)' }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              Ver Planos
            </motion.a>
          </motion.div>

          {/* Trust Indicators with Staggered Reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm"
          >
            {[
              { value: '50+', label: 'Projetos Entregues' },
              { value: '99.9%', label: 'Uptime Garantido' },
              { value: '<1s', label: 'Tempo de Carregamento' }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
                className="flex items-center gap-2"
              >
                <motion.span 
                  className="text-2xl font-bold text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.3 + index * 0.15, type: "spring" }}
                >
                  {stat.value}
                </motion.span>
                <span>{stat.label}</span>
                {index < 2 && (
                  <motion.div 
                    className="w-px h-8 bg-white/20 hidden sm:block ml-6"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.15 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Code Flow Transition */}
      <CodeFlowAnimation />
    </section>
  );
};

export default HeroSection;
