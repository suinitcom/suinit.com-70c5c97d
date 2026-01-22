import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, ArrowRight, Code2, Database, Workflow } from 'lucide-react';

const projects = [
  { name: 'Aheadwy', type: 'Sistema de Gestão' },
  { name: 'Cardappo', type: 'Plataforma de Cardápios' },
];

const SaaSSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="saas" ref={ref} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
                <Layers size={16} />
                <span className="text-sm font-medium">Soluções Avançadas</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Precisa de algo mais complexo?
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Desenvolvemos <strong className="text-foreground">sistemas Web e SaaS sob medida</strong> para 
                necessidades específicas. Desde plataformas de gestão até marketplaces completos.
              </p>

              {/* Capabilities */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                  <Code2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Sistemas Web</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                  <Database className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Plataformas SaaS</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                  <Workflow className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Automações</span>
                </div>
              </div>

              {/* Portfolio Mention */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="text-sm text-muted-foreground">Cases de sucesso:</span>
                {projects.map((project) => (
                  <div 
                    key={project.name}
                    className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full"
                  >
                    <span className="font-semibold text-foreground">{project.name}</span>
                    <span className="text-xs text-muted-foreground">• {project.type}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary group"
              >
                Falar sobre meu projeto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SaaSSection;
