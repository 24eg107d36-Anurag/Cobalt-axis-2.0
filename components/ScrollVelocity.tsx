import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from 'framer-motion';

// Maps scroll velocity to a multiplier for the animation speed.
const defaultVelocityMapping = (velocity: number) => {
  const absVelocity = Math.abs(velocity);
  if (absVelocity < 50) return 0;
  if (absVelocity < 200) return 0.2;
  if (absVelocity < 500) return 0.5;
  return 0.75;
};

interface VelocityTextProps {
  text: string;
  velocity: number;
  scrollVelocity: any; // MotionValue<number>
  direction: number;
  velocityMapping: (velocity: number) => number;
  className?: string;
  numCopies?: number;
}

// Renders a single line of infinitely scrolling text.
const VelocityText: React.FC<VelocityTextProps> = ({
  text,
  velocity,
  scrollVelocity,
  direction,
  velocityMapping,
  className,
  numCopies = 4,
}) => {
  const [scrollerWidth, setScrollerWidth] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  const baseX = useMotionValue(0);

  // Smooth scroll velocity to avoid jittery animations.
  const smoothScrollVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Wraps the x position to create an infinite scrolling effect.
  const x = useTransform(baseX, (v) => `${wrap(-scrollerWidth, 0, v)}px`);
  
  const handleResize = useCallback(() => {
    if (scrollerRef.current) {
      // Calculate the width of a single copy of the text for the wrap calculation.
      const singleCopyWidth = scrollerRef.current.offsetWidth / numCopies;
      setScrollerWidth(singleCopyWidth);
    }
  }, [numCopies]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  
  // Update the base x position every frame.
  useAnimationFrame((t, delta) => {
    const timeDelta = delta / 1000;
    
    // Base velocity movement.
    const baseDelta = velocity * direction * timeDelta;
    
    // Scroll-influenced velocity.
    // FIX: The value from `smoothScrollVelocity.get()` can be a string, which causes type errors.
    // Parsing it to a float and providing a fallback value ensures `scrollVel` is always a number.
    const scrollVel = parseFloat(smoothScrollVelocity.get()) || 0;
    const scrollMultiplier = velocityMapping(scrollVel);
    const scrollDelta = direction * scrollVel * scrollMultiplier * timeDelta;

    baseX.set(baseX.get() + baseDelta + scrollDelta);
  });
  
  return (
    <motion.div className="scroller" ref={scrollerRef} style={{ x }}>
      {Array.from({ length: numCopies }).map((_, i) => (
        <span key={i} className={className}>
          {text}&nbsp;
        </span>
      ))}
    </motion.div>
  );
};


interface ScrollVelocityProps {
  texts: string[];
  velocity?: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  className?: string; // For text spans
  numCopies?: number;
  velocityMapping?: (velocity: number) => number;
  parallaxClassName?: string;
  parallaxStyle?: React.CSSProperties;
}

/**
 * A component that displays multiple lines of horizontally scrolling text.
 * The scroll speed and direction are influenced by the page's scroll velocity.
 */
const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  texts,
  velocity = 100,
  scrollContainerRef,
  className,
  numCopies = 4,
  velocityMapping = defaultVelocityMapping,
  parallaxClassName = "parallax",
  parallaxStyle,
}) => {
  const { scrollY } = useScroll({ container: scrollContainerRef });
  const scrollYVelocity = useVelocity(scrollY);
  
  return (
    <div className={parallaxClassName} style={parallaxStyle}>
      {texts.map((text, index) => (
        <VelocityText
          key={text + index}
          text={text}
          velocity={velocity}
          scrollVelocity={scrollYVelocity}
          className={className}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          // Alternate direction for every other line for a parallax effect.
          direction={index % 2 === 0 ? 1 : -1} 
        />
      ))}
    </div>
  );
};

export default ScrollVelocity;