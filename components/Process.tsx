import React from 'react';
import { motion, Variants } from 'framer-motion';
import { DiscoverIcon, DevelopIcon, LaunchIcon } from './icons';

const processData = [
    {
        icon: <DiscoverIcon />,
        title: "01. Discover & Strategize",
        description: "We start by diving deep into your vision, goals, and audience to create a comprehensive blueprint for success.",
    },
    {
        icon: <DevelopIcon />,
        title: "02. Design & Develop",
        description: "Our team crafts pixel-perfect designs and writes clean, scalable code to bring the digital experience to life.",
    },
    {
        icon: <LaunchIcon />,
        title: "03. Launch & Scale",
        description: "We deploy your project with precision and provide ongoing support to ensure it grows and adapts with your business.",
    },
];

const Process: React.FC = () => {

    const sectionVariants: Variants = {
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
    
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 } },
    };

    return (
        <section id="process" className="py-24 sm:py-32 px-4 bg-black">
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-7xl mx-auto"
            >
                <motion.div 
                    variants={itemVariants}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        <span className="gradient-text">Our Path to Success</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        A streamlined journey from concept to creation, ensuring clarity, collaboration, and outstanding results at every stage.
                    </p>
                </motion.div>

                <div className="mt-20 relative">
                    {/* Dashed Line Connector for Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
                        <svg width="100%" height="2">
                            <line x1="0" y1="1" x2="100%" y2="1" stroke="white" strokeWidth="2" strokeDasharray="8 8" strokeOpacity="0.2" />
                        </svg>
                    </div>

                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative"
                    >
                        {processData.map((step, index) => (
                            <motion.div 
                                key={index}
                                variants={cardVariants}
                                className="text-center p-8 bg-gray-900/30 rounded-2xl border border-gray-800"
                            >
                                <div className="inline-flex items-center justify-center p-4 bg-gray-800 rounded-full mb-6 text-blue-500">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Process;