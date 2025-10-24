import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  baseOpacity = 0,
  enableBlur = false,
  baseRotation = 0,
  blurStrength = 8,
  containerClassName = '',
}) => {
  const variants: Variants = {
    hidden: {
      opacity: baseOpacity,
      y: 50,
      filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
      rotateX: baseRotation,
      transformStyle: 'preserve-3d',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      rotateX: 0,
      transformStyle: 'preserve-3d',
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={containerClassName}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;