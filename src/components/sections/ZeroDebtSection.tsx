import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileCode, FolderOpen, Rocket } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const ZeroDebtSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language } = useLanguage();

  const content = {
    pt: {
      label: 'DIFERENCIAL',
      heading: 'O que é Zero Dívida Técnica?',
      subheading: 'Não apenas entregamos o sistema; entregamos liberdade.',
      features: [
        {
          icon: FileCode,
          title: 'Código Documentado',
          description: 'Estrutura clara para que qualquer equipe possa assumir.',
        },
        {
          icon: FolderOpen,
          title: 'Arquivos Editáveis',
          description: 'Você recebe os arquivos de design (UI/UX) e o repositório completo.',
        },
        {
          icon: Rocket,
          title: 'Escalabilidade Real',
          description: 'Tecnologias modernas que não precisam ser refeitas em 6 meses.',
        },
      ],
    },
    en: {
      label: 'DIFFERENTIATOR',
      heading: 'What is Zero Technical Debt?',
      subheading: "We don't just deliver the system; we deliver freedom.",
      features: [
        {
          icon: FileCode,
          title: 'Documented Code',
          description: 'Clear structure so any team can take over.',
        },
        {
          icon: FolderOpen,
          title: 'Editable Files',
          description: 'You receive the design files (UI/UX) and the complete repository.',
        },
        {
          icon: Rocket,
          title: 'Real Scalability',
          description: "Modern technologies that don't need to be redone in 6 months.",
        },
      ],
    },
    es: {
      label: 'DIFERENCIAL',
      heading: '¿Qué es Cero Deuda Técnica?',
      subheading: 'No solo entregamos el sistema; entregamos libertad.',
      features: [
        {
          icon: FileCode,
          title: 'Código Documentado',
          description: 'Estructura clara para que cualquier equipo pueda asumir.',
        },
        {
          icon: FolderOpen,
          title: 'Archivos Editables',
          description: 'Recibes los archivos de diseño (UI/UX) y el repositorio completo.',
        },
        {
          icon: Rocket,
          title: 'Escalabilidad Real',
          description: 'Tecnologías modernas que no necesitan ser rehechas en 6 meses.',
        },
      ],
    },
  };

  const text = content[language];

  return (
    <section id="zero-debt" ref={ref} className="py-32 md:py-48 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-primary-foreground/60 mb-6"
        >
          {text.label}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
        >
          {text.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl md:text-2xl text-primary-foreground/80 mb-16"
        >
          {text.subheading}
        </motion.p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {text.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="w-14 h-14 bg-primary-foreground/10 flex items-center justify-center mb-6">
                <feature.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZeroDebtSection;
