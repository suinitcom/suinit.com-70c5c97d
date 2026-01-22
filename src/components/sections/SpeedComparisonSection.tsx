import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Play, Gauge, TrendingUp, TrendingDown } from 'lucide-react';

const SpeedComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isPlaying, setIsPlaying] = useState(false);
  const [regularProgress, setRegularProgress] = useState(0);
  const [suinitProgress, setSuinitProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -30]);
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.98]);

  const startComparison = () => {
    setIsPlaying(true);
    setRegularProgress(0);
    setSuinitProgress(0);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const suinitInterval = setInterval(() => {
      setSuinitProgress(prev => {
        if (prev >= 100) {
          clearInterval(suinitInterval);
          return 100;
        }
        return prev + 12.5;
      });
    }, 100);

    const regularInterval = setInterval(() => {
      setRegularProgress(prev => {
        if (prev >= 100) {
          clearInterval(regularInterval);
          setIsPlaying(false);
          return 100;
        }
        return prev + 2.5;
      });
    }, 100);

    return () => {
      clearInterval(suinitInterval);
      clearInterval(regularInterval);
    };
  }, [isPlaying]);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
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
            className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6"
          >
            <Gauge size={16} />
            <span className="text-sm font-medium">Demonstração de Performance</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Veja a Diferença na{' '}
            <span className="text-gradient">Velocidade</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Compare o tempo de carregamento de um site comum com um site desenvolvido pela Suinit.
          </motion.p>
        </motion.div>

        {/* Comparison Container with Parallax */}
        <motion.div
          style={{ y: cardY, scale: cardScale }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg"
          >
            {/* Start Button */}
            <div className="text-center mb-10">
              <motion.button
                onClick={startComparison}
                disabled={isPlaying}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Play size={20} />
                {isPlaying ? 'Carregando...' : 'Iniciar Comparação'}
              </motion.button>
            </div>

            {/* Comparison Bars */}
            <div className="space-y-8">
              {/* Regular Site */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingDown className="w-5 h-5 text-destructive" />
                    <span className="font-medium text-foreground">Site Comum</span>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">
                    {regularProgress < 100 ? '...' : '4.2s'}
                  </span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-destructive/60 to-destructive rounded-full"
                    style={{ width: `${regularProgress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground min-h-[1.5rem]">
                  {regularProgress >= 100 && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-destructive">✗</span>
                      <span>Lento, usuários desistem antes de carregar</span>
                    </motion.span>
                  )}
                </div>
              </motion.div>

              {/* Suinit Site */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Site Suinit</span>
                  </div>
                  <span className="text-sm text-primary font-mono font-bold">
                    {suinitProgress < 100 ? '...' : '0.8s'}
                  </span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                    style={{ width: `${suinitProgress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground min-h-[1.5rem]">
                  {suinitProgress >= 100 && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-primary">✓</span>
                      <span>Carregamento instantâneo, melhor conversão</span>
                    </motion.span>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            {(regularProgress >= 100 && suinitProgress >= 100) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-10 pt-8 border-t border-border grid grid-cols-3 gap-4 text-center"
              >
                {[
                  { value: '5x', label: 'Mais rápido' },
                  { value: '+40%', label: 'Conversão' },
                  { value: '-53%', label: 'Bounce Rate' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1, type: "spring" }}
                  >
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeedComparisonSection;
