import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield, Rocket, Code2 } from 'lucide-react';
import { staggerRevealVariants } from '@/hooks/useScrollAnimation';

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

const variants = staggerRevealVariants({ staggerDelay: 0.12 });

const DifferentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const patternY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const codeBlockRotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <section id="diferenciais" ref={ref} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern with Parallax */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: patternY }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6"
          >
            <Code2 size={16} />
            <span className="text-sm font-medium">Stack Moderna</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Tecnologia que{' '}
            <span className="text-gradient">Escala</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Utilizamos as tecnologias mais modernas do mercado para garantir 
            performance, segurança e escalabilidade.
          </motion.p>
        </motion.div>

        {/* Tech Stack Visual with Parallax Rotate */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ rotateX: codeBlockRotate }}
          className="max-w-4xl mx-auto mb-20 perspective-1000"
        >
          <div className="code-block p-6 md:p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <motion.div 
                className="w-3 h-3 rounded-full bg-red-500"
                whileHover={{ scale: 1.3 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-yellow-500"
                whileHover={{ scale: 1.3 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-green-500"
                whileHover={{ scale: 1.3 }}
              />
              <span className="ml-4 text-white/40 font-mono text-sm">suinit-stack.config.ts</span>
            </div>
            
            <div className="space-y-2 font-mono text-sm md:text-base">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-code-keyword"
              >
                {'export const stack = {'}
              </motion.div>
              
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="pl-4 flex flex-wrap items-center gap-2 cursor-default"
                >
                  <span className="text-code-string">"{tech.name.toLowerCase()}"</span>
                  <span className="text-white">:</span>
                  <span className="text-code-text">true</span>
                  <span className="text-white">,</span>
                  <span className="text-code-comment ml-2">// {tech.description}</span>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.95, duration: 0.5 }}
                className="pl-4 text-code-function"
              >
                technicalDebt: <span className="text-code-string">"zero"</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="text-code-keyword"
              >
                {'}'};
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Differentials Grid with Stagger */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={variants.container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              variants={index === 0 ? variants.itemFromLeft : index === 2 ? variants.itemFromRight : variants.item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <motion.div 
                  className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
