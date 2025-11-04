import React from 'react';
import { motion, Variants } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const headingVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      filter: 'blur(8px)', 
      rotateX: 10,
      transformStyle: 'preserve-3d',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const textContainerVariants: Variants = {
    hidden: { opacity: 1 }, // Parent is visible, children are not
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };
  
  const paragraph1 = "We’re a future-focused digital agency crafting immersive experiences that blend design, technology, and intelligence.";

  return (
    <section id="about" className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 py-32 bg-black text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-600 to-purple-600 blur-[180px] opacity-30 pointer-events-none" />

      <motion.div 
        className="max-w-4xl space-y-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={headingVariants}
          className="about-heading"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">CobaltAxis</span>
        </motion.h2>

        <motion.p
          variants={textContainerVariants}
          className="about-text"
        >
          {paragraph1.split(' ').map((word, index) => (
            <motion.span
              key={word + "-" + index}
              variants={wordVariants}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
        
        {/* For the second paragraph, we manually handle the bold tag for a seamless word-by-word animation */}
        <motion.p
          variants={textContainerVariants}
          className="about-text"
        >
            <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">At</motion.span>
            <motion.b variants={wordVariants} className="inline-block">CobaltAxis</motion.b>
            {", we don’t just build websites — we create ecosystems. From brand identity and web design to AI automation, our mission is to make businesses smarter and bolder.".split(' ').map((word, index) => (
                <motion.span
                  key={word + "-" + index}
                  variants={wordVariants}
                  className={`inline-block ${index > 0 ? 'ml-[0.25em]' : ''}`}
                >
                  {word}
                </motion.span>
            ))}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
