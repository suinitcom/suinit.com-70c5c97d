import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

const Marquee = ({ children, speed = 30, direction = 'left', className = '' }: MarqueeProps) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{
          x: direction === 'left' ? [0, '-50%'] : ['-50%', 0]
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity
        }}
      >
        <div className="flex items-center gap-8">
          {children}
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
