import React from 'react';
import { motion } from 'framer-motion';
import TextType from './TextType';

interface HeroProps {
    onGetStartedClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
    const heroPhrases = [
        "Build Bold.",
        "Design Smart.",
        "Innovate Fast.",
        "Scale Intelligently."
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden px-4">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/50 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/50 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="w-full text-center text-5xl md:text-7xl font-bold text-white leading-tight h-24 md:h-36 flex items-center justify-center">
                 <TextType
                    texts={heroPhrases}
                    typingSpeed={100}
                    deletingSpeed={50}
                    pauseTime={2000}
                    loop={true}
                />
            </div>
            
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 max-w-3xl text-xl md:text-2xl text-gray-400 whitespace-pre-wrap"
            >
                {"We are a digital agency that partners with ambitious brands.\nTogether, we create powerful, scalable, and beautiful web experiences."}
            </motion.p>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
                <motion.button
                    onClick={onGetStartedClick}
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                    Get Started
                </motion.button>
                <motion.button
                    onClick={() => scrollToSection('projects')}
                    whileHover={{ scale: 1.05, color: '#fff' }}
                    whileTap={{ scale: 0.95 }}
                    className="relative text-gray-300 px-8 py-3 rounded-lg font-semibold transition-all duration-300 gradient-shadow"
                >
                    Our Work
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;