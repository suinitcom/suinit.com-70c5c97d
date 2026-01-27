import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Layers, ArrowRight, Code2, Database, Workflow } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const projects = [
  { name: 'Aheadwy', type: 'Sistema de Gestão' },
  { name: 'Cardappo', type: 'Plataforma de Cardápios' },
];

const capabilities = [
  { icon: Code2, text: 'Sistemas Web', description: 'Aplicações completas' },
  { icon: Database, text: 'Plataformas SaaS', description: 'Escaláveis e seguras' },
  { icon: Workflow, text: 'Automações', description: 'Fluxos inteligentes' }
];

const SaaSSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="saas" ref={ref} className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Decorative number */}
      <motion.div 
        className="absolute -right-20 top-1/3 decorative-number select-none pointer-events-none"
        style={{ y: y1 }}
      >
        04
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Creative two-column layout */}
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 mb-6"
              >
                <Layers size={16} />
                <span className="text-sm font-bold uppercase tracking-wider">Soluções Avançadas</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Precisa de algo
                <br />
                mais <span className="font-display italic text-primary">complexo</span>?
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Desenvolvemos <strong className="text-foreground">sistemas Web e SaaS sob medida</strong> para 
                necessidades específicas. Desde plataformas de gestão até marketplaces completos.
              </p>

              {/* Portfolio mention */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <span className="text-sm text-muted-foreground">Cases de sucesso:</span>
                {projects.map((project, index) => (
                  <motion.div 
                    key={project.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-muted px-4 py-2"
                  >
                    <span className="font-bold text-foreground">{project.name}</span>
                    <span className="text-xs text-muted-foreground">• {project.type}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <MagneticButton strength={0.15}>
                <motion.a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 btn-brutal"
                >
                  Falar sobre meu projeto
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.a>
              </MagneticButton>
            </motion.div>

            {/* Right column - Capabilities cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
                  animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, rotate: 1 }}
                  className="group"
                >
                  <div className="flex items-center gap-6 p-6 bg-card border-2 border-border hover:border-primary transition-all duration-300 cursor-default">
                    <motion.div 
                      className="w-16 h-16 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
                      whileHover={{ rotate: 5 }}
                    >
                      <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{item.text}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <motion.div 
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSSection;
