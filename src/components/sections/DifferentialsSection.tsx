import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield, Rocket, Code2, Database, Server } from 'lucide-react';

const technologies = [
  { name: 'React', description: 'Interface moderna e reativa' },
  { name: 'Vite', description: 'Build ultrarrápido' },
  { name: 'Supabase', description: 'Backend escalável' },
];

const differentials = [
  {
    icon: Zap,
    title: 'Zero Dívida Técnica',
    description: 'Código limpo e documentado que facilita manutenção e evolução futura.',
  },
  {
    icon: Rocket,
    title: 'Performance Máxima',
    description: 'Sites com tempo de carregamento inferior a 1 segundo.',
  },
  {
    icon: Shield,
    title: 'Segurança Garantida',
    description: 'SSL, autenticação robusta e proteção contra vulnerabilidades.',
  },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="diferenciais" ref={ref} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Code2 size={16} />
            <span className="text-sm font-medium">Stack Moderna</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tecnologia que{' '}
            <span className="text-gradient">Escala</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utilizamos as tecnologias mais modernas do mercado para garantir 
            performance, segurança e escalabilidade.
          </p>
        </motion.div>

        {/* Tech Stack Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="code-block p-6 md:p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-white/40 font-mono text-sm">suinit-stack.config.ts</span>
            </div>
            
            <div className="space-y-2 font-mono text-sm md:text-base">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-code-keyword"
              >
                {'export const stack = {'}
              </motion.div>
              
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="pl-4 flex flex-wrap items-center gap-2"
                >
                  <span className="text-code-string">"{tech.name.toLowerCase()}"</span>
                  <span className="text-white">:</span>
                  <span className="text-code-text">true</span>
                  <span className="text-white">,</span>
                  <span className="text-code-comment ml-2">// {tech.description}</span>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="pl-4 text-code-function"
              >
                technicalDebt: <span className="text-code-string">"zero"</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="text-code-keyword"
              >
                {'}'};
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
