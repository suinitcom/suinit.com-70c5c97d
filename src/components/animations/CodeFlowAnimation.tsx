import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface CodeFlowAnimationProps {
  variant?: 'down' | 'up';
}

const CodeFlowAnimation = ({ variant = 'down' }: CodeFlowAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const codeLines = [
    { text: '// Compilando próxima seção...', color: 'text-code-comment' },
    { text: 'import { Solution } from "@suinit/core"', color: 'text-code-keyword' },
    { text: 'const config = await loadConfig()', color: 'text-code-text' },
    { text: 'export default <Section />', color: 'text-code-function' },
  ];

  return (
    <div 
      ref={ref}
      className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
      />
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-lg px-4">
        <div className="code-block opacity-80">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: variant === 'down' ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: variant === 'down' ? -20 : 20 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: 'easeOut'
              }}
              className={`font-mono text-xs md:text-sm ${line.color} leading-relaxed`}
            >
              {line.text}
              {index === codeLines.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-primary-glow ml-1"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeFlowAnimation;
