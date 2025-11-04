import React from 'react';
import { motion, Variants } from 'framer-motion';
import { WavingMascotIcon } from './icons';

const Contact: React.FC = () => {
    
    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { 
            duration: 0.8, 
            ease: 'easeOut',
            staggerChildren: 0.3
          },
        },
    };
    
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section id="contact" className="py-24 sm:py-32 px-4 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-7xl mx-auto"
            >
                <div className="relative rounded-3xl p-8 md:p-12 animated-gradient-bg shadow-2xl shadow-blue-900/20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
                            <WavingMascotIcon />
                        </motion.div>
                        
                        <div className="text-center md:text-left">
                            <motion.h2 
                                variants={itemVariants} 
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                            >
                                Launch Faster.
                                <br />
                                <motion.span
                                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    style={{ backgroundSize: "300% 300%" }}
                                >
                                    Build Smarter.
                                </motion.span>
                                <br />
                                Get Expert Help Today.
                            </motion.h2>

                            <motion.div variants={itemVariants} className="mt-8">
                                <a href="https://calendly.com/cobaltaxis-7/30min?month=2025-11" target="_blank" rel="noopener noreferrer">
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(59, 130, 246, 0.5)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300"
                                    >
                                        Book a Free Consultation
                                    </motion.button>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;