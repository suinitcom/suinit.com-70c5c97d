import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Play, Gauge, TrendingUp, TrendingDown } from 'lucide-react';

const SpeedComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isPlaying, setIsPlaying] = useState(false);
  const [regularProgress, setRegularProgress] = useState(0);
  const [suinitProgress, setSuinitProgress] = useState(0);

  const startComparison = () => {
    setIsPlaying(true);
    setRegularProgress(0);
    setSuinitProgress(0);
  };

  useEffect(() => {
    if (!isPlaying) return;

    // Suinit loads in ~0.8s (80% of animation time)
    const suinitInterval = setInterval(() => {
      setSuinitProgress(prev => {
        if (prev >= 100) {
          clearInterval(suinitInterval);
          return 100;
        }
        return prev + 12.5;
      });
    }, 100);

    // Regular site loads in ~4s (full animation time)
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Gauge size={16} />
            <span className="text-sm font-medium">Demonstração de Performance</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Veja a Diferença na{' '}
            <span className="text-gradient">Velocidade</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare o tempo de carregamento de um site comum com um site desenvolvido pela Suinit.
          </p>
        </motion.div>

        {/* Comparison Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg">
            {/* Start Button */}
            <div className="text-center mb-10">
              <button
                onClick={startComparison}
                disabled={isPlaying}
                className="inline-flex items-center gap-3 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Play size={20} />
                {isPlaying ? 'Carregando...' : 'Iniciar Comparação'}
              </button>
            </div>

            {/* Comparison Bars */}
            <div className="space-y-8">
              {/* Regular Site */}
              <div className="space-y-3">
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
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {regularProgress >= 100 && (
                    <>
                      <span className="text-destructive">✗</span>
                      <span>Lento, usuários desistem antes de carregar</span>
                    </>
                  )}
                </div>
              </div>

              {/* Suinit Site */}
              <div className="space-y-3">
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
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {suinitProgress >= 100 && (
                    <>
                      <span className="text-primary">✓</span>
                      <span>Carregamento instantâneo, melhor conversão</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Stats */}
            {(regularProgress >= 100 && suinitProgress >= 100) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 pt-8 border-t border-border grid grid-cols-3 gap-4 text-center"
              >
                <div>
                  <div className="text-3xl font-bold text-primary">5x</div>
                  <div className="text-sm text-muted-foreground">Mais rápido</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">+40%</div>
                  <div className="text-sm text-muted-foreground">Conversão</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">-53%</div>
                  <div className="text-sm text-muted-foreground">Bounce Rate</div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeedComparisonSection;
