
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const testimonialsData = [
  {
    quote: "Working with CobaltAxis was a game-changer. Their attention to detail and innovative approach elevated our brand beyond our expectations.",
    name: "Jane Doe",
    company: "CEO, QuantumLeap",
  },
  {
    quote: "The team's expertise in UI/UX is unmatched. They delivered a product that is both beautiful and incredibly intuitive for our users.",
    name: "John Smith",
    company: "Founder, Nova Financial",
  },
  {
    quote: "Fast, efficient, and brilliant. CobaltAxis delivered a high-quality product ahead of schedule. We couldn't be happier.",
    name: "Emily White",
    company: "Marketing Director, Aether Inc.",
  },
];

const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
};

const Testimonials: React.FC = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        const newPage = (page + newDirection + testimonialsData.length) % testimonialsData.length;
        setPage([newPage, newDirection]);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3 },
        },
    };
    
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };


  return (
    <section id="testimonials" className="py-24 sm:py-32 px-4 bg-gray-900/20">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto text-center relative"
      >
        <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Trusted by Industry Leaders</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about our work.
            </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-12 relative">
            <div className="h-64 overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        className="absolute w-full flex flex-col items-center justify-center p-6"
                    >
                        <p className="text-xl italic text-gray-300">"{testimonialsData[page].quote}"</p>
                        <div className="mt-6">
                            <p className="font-bold text-white">{testimonialsData[page].name}</p>
                            <p className="text-sm text-blue-400">{testimonialsData[page].company}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <button onClick={() => paginate(-1)} className="absolute top-1/2 left-0 md:-left-16 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={() => paginate(1)} className="absolute top-1/2 right-0 md:-right-16 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>

            <div className="flex justify-center space-x-2 mt-8">
                {testimonialsData.map((_, i) => (
                    <div 
                        key={i} 
                        onClick={() => setPage([i, i > page ? 1 : -1])}
                        className={`h-2 w-2 rounded-full cursor-pointer transition-colors ${page === i ? 'bg-blue-500' : 'bg-gray-600'}`}
                    />
                ))}
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
