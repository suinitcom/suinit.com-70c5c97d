import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import CodeFlowAnimation from '../animations/CodeFlowAnimation';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-10 opacity-20 font-mono text-white text-sm hidden lg:block"
        >
          {'<Component />'}
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-20 opacity-20 font-mono text-white text-sm hidden lg:block"
        >
          {'const result = await fetch()'}
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 left-1/4 opacity-20 font-mono text-white text-sm hidden lg:block"
        >
          {'export default App'}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Desenvolvimento Web de Alta Performance</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            Sistemas que impulsionam{' '}
            <span className="relative">
              <span className="relative z-10">resultados</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-primary-glow/40 -z-0 origin-left"
              />
            </span>
            ,<br />
            não apenas sites.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          >
            Desenvolvemos soluções web com foco em ROI, escalabilidade e zero dívida técnica. 
            Seu negócio merece tecnologia que gera retorno.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Falar com Especialista
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#planos"
              className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
            >
              Ver Planos
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">50+</span>
              <span>Projetos Entregues</span>
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">99.9%</span>
              <span>Uptime Garantido</span>
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">&lt;1s</span>
              <span>Tempo de Carregamento</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Code Flow Transition */}
      <CodeFlowAnimation />
    </section>
  );
};

export default HeroSection;
