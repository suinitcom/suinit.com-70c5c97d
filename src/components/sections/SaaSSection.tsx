import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Layers, ArrowRight, Code2, Database, Workflow } from 'lucide-react';
import { staggerRevealVariants } from '@/hooks/useScrollAnimation';

const projects = [
  { name: 'Aheadwy', type: 'Sistema de Gestão' },
  { name: 'Cardappo', type: 'Plataforma de Cardápios' },
];

const variants = staggerRevealVariants({ staggerDelay: 0.1 });

const SaaSSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const cardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -3]);
  const decorationScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  return (
    <section id="saas" ref={ref} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ rotateX: cardRotate }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden perspective-1000"
          >
            {/* Background decoration with parallax */}
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
              style={{ scale: decorationScale }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl"
              style={{ scale: decorationScale }}
            />

            <div className="relative z-10">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6"
              >
                <Layers size={16} />
                <span className="text-sm font-medium">Soluções Avançadas</span>
              </motion.div>

              {/* Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4"
              >
                Precisa de algo mais complexo?
              </motion.h2>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-muted-foreground mb-8 max-w-2xl"
              >
                Desenvolvemos <strong className="text-foreground">sistemas Web e SaaS sob medida</strong> para 
                necessidades específicas. Desde plataformas de gestão até marketplaces completos.
              </motion.p>

              {/* Capabilities with stagger */}
              <motion.div 
                className="grid md:grid-cols-3 gap-4 mb-8"
                variants={variants.container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {[
                  { icon: Code2, text: 'Sistemas Web' },
                  { icon: Database, text: 'Plataformas SaaS' },
                  { icon: Workflow, text: 'Automações' }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    variants={variants.scaleUp}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl cursor-default"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Portfolio Mention */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <span className="text-sm text-muted-foreground">Cases de sucesso:</span>
                {projects.map((project, index) => (
                  <motion.div 
                    key={project.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full"
                  >
                    <span className="font-semibold text-foreground">{project.name}</span>
                    <span className="text-xs text-muted-foreground">• {project.type}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 btn-primary group"
              >
                Falar sobre meu projeto
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SaaSSection;
