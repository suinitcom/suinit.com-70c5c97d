import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Clock, Snail, HeadphoneOff, Lock, ArrowRight } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    number: '01',
    title: 'Prazos Estourados',
    description: 'Projetos que nunca terminam e sempre têm "só mais uma semana".',
  },
  {
    icon: Snail,
    number: '02',
    title: 'Sites Lentos',
    description: 'Páginas que demoram uma eternidade para carregar.',
  },
  {
    icon: HeadphoneOff,
    number: '03',
    title: 'Suporte Fantasma',
    description: 'Desenvolvedores que somem depois da entrega.',
  },
  {
    icon: Lock,
    number: '04',
    title: 'Código Engessado',
    description: 'Sistemas impossíveis de escalar ou modificar.',
  },
];

const PainPointsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      id="solucoes" 
      ref={ref} 
      className="py-24 md:py-40 bg-background relative overflow-hidden"
    >
      {/* Large decorative number */}
      <motion.div 
        className="absolute -left-20 top-1/4 decorative-number select-none pointer-events-none"
        style={{ y: y1 }}
      >
        01
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header - Asymmetric Layout */}
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-8 lg:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 mb-6"
            >
              <AlertTriangle size={16} />
              <span className="text-sm font-bold uppercase tracking-wider">Você já passou por isso?</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              O Trauma de
              <br />
              <span className="font-display italic text-destructive">Desenvolvedores</span>
              <br />
              Amadores
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-end"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Infelizmente, muitas empresas já sofreram com projetos mal executados. 
              Entendemos sua dor – e é por isso que fazemos diferente.
            </p>
            <motion.a 
              href="#diferenciais"
              whileHover={{ gap: '1rem' }}
              className="inline-flex items-center gap-2 text-primary font-bold text-lg underline-animate"
            >
              Nossa abordagem
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Pain Points Grid - Creative Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, rotate: 1 }}
              className="group relative"
            >
              <div className="relative bg-card border-2 border-border p-8 transition-all duration-500 group-hover:border-destructive/50 group-hover:shadow-lg">
                {/* Number */}
                <span className="absolute -top-4 -right-4 text-8xl font-display font-bold text-destructive/10 group-hover:text-destructive/20 transition-colors">
                  {point.number}
                </span>
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-14 h-14 bg-destructive/10 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <point.icon className="w-7 h-7 text-destructive" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-muted-foreground mb-2">
            Chega de frustrações.
          </p>
          <p className="text-2xl font-bold text-foreground">
            É hora de trabalhar com <span className="text-primary">profissionais de verdade</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
