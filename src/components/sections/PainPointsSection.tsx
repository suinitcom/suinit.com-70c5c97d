import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Clock, Snail, HeadphoneOff, Lock } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    title: 'Prazos Estourados',
    description: 'Projetos que nunca terminam e sempre têm "só mais uma semana".',
    color: 'from-red-500/20 to-orange-500/20',
  },
  {
    icon: Snail,
    title: 'Sites Lentos',
    description: 'Páginas que demoram uma eternidade para carregar e afugentam clientes.',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    icon: HeadphoneOff,
    title: 'Suporte Fantasma',
    description: 'Desenvolvedores que somem depois da entrega e nunca mais respondem.',
    color: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    icon: Lock,
    title: 'Código Engessado',
    description: 'Sistemas impossíveis de escalar ou modificar sem quebrar tudo.',
    color: 'from-amber-500/20 to-red-500/20',
  },
];

const PainPointsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solucoes" ref={ref} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive rounded-full px-4 py-2 mb-6">
            <AlertTriangle size={16} />
            <span className="text-sm font-medium">Você já passou por isso?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Trauma de Trabalhar com{' '}
            <span className="text-destructive">Desenvolvedores Amadores</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Infelizmente, muitas empresas já sofreram com projetos mal executados. 
            Entendemos sua dor – e é por isso que fazemos diferente.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${point.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative bg-card border border-border rounded-2xl p-6 h-full hover:border-destructive/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground text-sm">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solution Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Chega de frustrações. É hora de trabalhar com profissionais de verdade.
          </p>
          <a 
            href="#diferenciais"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
          >
            Conheça nossa abordagem
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
