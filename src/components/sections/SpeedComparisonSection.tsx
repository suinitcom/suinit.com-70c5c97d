import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Play, Gauge, TrendingUp, TrendingDown, RotateCcw } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { useLanguage } from '@/i18n/LanguageContext';

const SpeedComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [regularProgress, setRegularProgress] = useState(0);
  const [suinitProgress, setSuinitProgress] = useState(0);
  const { t, language } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const startComparison = () => {
    setIsPlaying(true);
    setIsComplete(false);
    setRegularProgress(0);
    setSuinitProgress(0);
  };

  const resetComparison = () => {
    setIsPlaying(false);
    setIsComplete(false);
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
          setIsComplete(true);
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

  const getSlowMessage = () => {
    if (language === 'pt') return 'Lento demais. Usuários abandonam antes de carregar.';
    if (language === 'es') return 'Demasiado lento. Los usuarios abandonan antes de cargar.';
    return 'Too slow. Users leave before it loads.';
  };

  const getFastMessage = () => {
    if (language === 'pt') return 'Instantâneo. Melhor experiência = Mais conversões.';
    if (language === 'es') return 'Instantáneo. Mejor experiencia = Más conversiones.';
    return 'Instant. Better experience = More conversions.';
  };

  return (
    <section ref={ref} className="py-24 md:py-40 bg-muted/30 relative overflow-hidden">
      {/* Decorative number */}
      <motion.div 
        className="absolute -right-20 top-1/4 decorative-number select-none pointer-events-none"
        style={{ y: y1 }}
      >
        02
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 mb-6"
            >
              <Gauge size={16} />
              <span className="text-sm font-bold uppercase tracking-wider">{t.speedComparison.badge}</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t.speedComparison.title1}
              <br />
              <span className="font-display italic text-primary">{t.speedComparison.title2}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-end"
          >
            <p className="text-lg text-muted-foreground">
              {t.speedComparison.description}
            </p>
          </motion.div>
        </div>

        {/* Comparison Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border-2 border-border p-8 md:p-12 relative">
            {/* Start/Reset Button */}
            <div className="text-center mb-12">
              <MagneticButton strength={0.15}>
                {isComplete ? (
                  <motion.button
                    onClick={resetComparison}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 btn-brutal bg-muted text-foreground"
                  >
                    <RotateCcw size={20} />
                    {language === 'pt' ? 'Repetir Comparação' : language === 'es' ? 'Repetir Comparación' : 'Repeat Comparison'}
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={startComparison}
                    disabled={isPlaying}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 btn-brutal disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Play size={20} />
                    {isPlaying ? t.speedComparison.testing : t.speedComparison.runTest}
                  </motion.button>
                )}
              </MagneticButton>
            </div>

            {/* Comparison Bars */}
            <div className="space-y-10">
              {/* Regular Site */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingDown className="w-6 h-6 text-destructive" />
                    <span className="font-bold text-foreground text-lg">{t.speedComparison.regularSite}</span>
                  </div>
                  <span className="text-2xl font-mono font-bold text-destructive">
                    {regularProgress >= 100 ? '4.2s' : '...'}
                  </span>
                </div>
                <div className="h-6 bg-muted overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-destructive/60 to-destructive"
                    style={{ width: `${regularProgress}%` }}
                  />
                </div>
                {regularProgress >= 100 && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-destructive"
                  >
                    <span>✗</span>
                    <span>{getSlowMessage()}</span>
                  </motion.p>
                )}
              </div>

              {/* Suinit Site */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <span className="font-bold text-foreground text-lg">{t.speedComparison.suinitSite}</span>
                  </div>
                  <span className="text-2xl font-mono font-bold text-primary">
                    {suinitProgress >= 100 ? '0.8s' : '...'}
                  </span>
                </div>
                <div className="h-6 bg-muted overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-primary-light"
                    style={{ width: `${suinitProgress}%` }}
                  />
                </div>
                {suinitProgress >= 100 && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-primary"
                  >
                    <span>✓</span>
                    <span>{getFastMessage()}</span>
                  </motion.p>
                )}
              </div>
            </div>

            {/* Stats */}
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-12 pt-10 border-t-2 border-border grid grid-cols-3 gap-6"
              >
                {[
                  { value: '5x', label: t.speedComparison.stats.faster },
                  { value: '+40%', label: t.speedComparison.stats.conversion },
                  { value: '100', label: t.speedComparison.stats.seo }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1, type: "spring" }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-display font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeedComparisonSection;
