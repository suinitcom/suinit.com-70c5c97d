import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef, RefObject } from 'react';

interface ParallaxConfig {
  offset?: number;
  clamp?: boolean;
}

interface ScrollAnimationReturn {
  ref: RefObject<HTMLElement>;
  scrollYProgress: MotionValue<number>;
  parallaxY: MotionValue<number>;
  parallaxYSmooth: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

export const useParallax = (config: ParallaxConfig = {}): ScrollAnimationReturn => {
  const { offset = 300, clamp = true } = config;
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [offset, -offset],
    { clamp }
  );

  const parallaxYSmooth = useSpring(parallaxY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return {
    ref: ref as RefObject<HTMLElement>,
    scrollYProgress,
    parallaxY,
    parallaxYSmooth,
    opacity,
    scale
  };
};

interface StaggerRevealConfig {
  staggerDelay?: number;
  threshold?: number;
}

export const staggerRevealVariants = (config: StaggerRevealConfig = {}) => {
  const { staggerDelay = 0.1, threshold = 0 } = config;

  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: threshold
        }
      }
    },
    item: {
      hidden: { 
        opacity: 0, 
        y: 40,
        scale: 0.95
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut" as const
        }
      }
    },
    itemFromLeft: {
      hidden: { 
        opacity: 0, 
        x: -60,
        rotateY: 15
      },
      visible: { 
        opacity: 1, 
        x: 0,
        rotateY: 0,
        transition: {
          duration: 0.7,
          ease: "easeOut" as const
        }
      }
    },
    itemFromRight: {
      hidden: { 
        opacity: 0, 
        x: 60,
        rotateY: -15
      },
      visible: { 
        opacity: 1, 
        x: 0,
        rotateY: 0,
        transition: {
          duration: 0.7,
          ease: "easeOut" as const
        }
      }
    },
    scaleUp: {
      hidden: { 
        opacity: 0, 
        scale: 0.8,
        y: 20
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut" as const
        }
      }
    },
    slideUp: {
      hidden: { 
        opacity: 0, 
        y: 100
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut" as const
        }
      }
    },
    fadeIn: {
      hidden: { 
        opacity: 0
      },
      visible: { 
        opacity: 1,
        transition: {
          duration: 0.8
        }
      }
    }
  };
};
