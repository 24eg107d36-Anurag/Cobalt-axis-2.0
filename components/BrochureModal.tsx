
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
    LogoIcon, 
    CloseIcon, 
    ArrowLeftIcon, 
    ArrowRightIcon,
    CaseStudyIcon,
    VideoCreationIcon,
    UsersIcon,
    SupportIcon,
    TransparencyIcon,
    PartnershipIcon
} from './icons';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const servicesPills = ['Market Strategy', 'AI Automation', 'Video Editing', 'Custom Websites'];

const whyChooseUsFeatures = [
  { icon: <CaseStudyIcon className="w-6 h-6" />, text: 'Real Case Studies' },
  { icon: <VideoCreationIcon className="w-6 h-6" />, text: 'Cutting-Edge Tech' },
  { icon: <UsersIcon className="w-6 h-6" />, text: 'Expert Team' },
  { icon: <SupportIcon className="w-6 h-6" />, text: 'Full-Service Support' },
  { icon: <TransparencyIcon className="w-6 h-6" />, text: 'Transparency' },
  { icon: <PartnershipIcon className="w-6 h-6" />, text: 'Ongoing Partnership' },
];


const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const pageVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    }),
};

const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = (page + newDirection + 2) % 2;
    setPage([newPage, newDirection]);
  };

  const handleJoinClick = () => {
    onClose();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="brochure-backdrop"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            className="brochure-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="brochure-blob top-[-20%] left-[-20%] w-[500px] h-[500px] bg-purple-500"></div>
            <div className="brochure-blob bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-blue-500" style={{ animationDelay: '5s' }}></div>

            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white z-20">
                <CloseIcon className="w-8 h-8"/>
            </button>
            
            <div className="flex-grow relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
                        className="absolute inset-0 p-6 sm:p-10 overflow-y-auto overflow-x-hidden pb-24"
                    >
                        {page === 0 && <PageOne />}
                        {page === 1 && <PageTwo onJoinClick={handleJoinClick} />}
                    </motion.div>
                </AnimatePresence>
            </div>
            
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5">
                <button onClick={() => paginate(-1)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
                    <ArrowLeftIcon className="w-5 h-5"/>
                </button>
                 <div className="flex gap-2">
                    <div className={`w-2 h-2 rounded-full transition-colors ${page === 0 ? 'bg-white' : 'bg-white/30'}`}></div>
                    <div className={`w-2 h-2 rounded-full transition-colors ${page === 1 ? 'bg-white' : 'bg-white/30'}`}></div>
                 </div>
                <button onClick={() => paginate(1)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
                    <ArrowRightIcon className="w-5 h-5"/>
                </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const PageOne: React.FC = () => (
    <div className="flex flex-col items-center justify-center text-center gap-8 min-h-full">
        <div>
            <div className="flex items-center gap-2 justify-center">
                <LogoIcon/>
                <span className="text-white font-bold text-2xl">CobaltAxis</span>
            </div>
            <a href="mailto:cobaltaxis.7@gmail.com" className="text-gray-400 mt-4 block hover:text-white">cobaltaxis.7@gmail.com</a>
        </div>
        
        <div className="mt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">EXPERIENCE THE FUTURE OF BUSINESS — <br/><span className="gradient-text">POWERED BY AI</span></h2>
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
                {servicesPills.map(pill => <div key={pill} className="brochure-pill">{pill}</div>)}
            </div>
        </div>
    </div>
);


const pageTwoContainerVariants: Variants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const columnVariants: Variants = {
    enter: (isLeft: boolean) => ({ x: isLeft ? '-50%' : '50%', opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const featureListVariants: Variants = {
    center: { transition: { staggerChildren: 0.1 } }
};

const featureItemVariants: Variants = {
    enter: { opacity: 0, x: -20 },
    center: { opacity: 1, x: 0, transition: { ease: 'easeOut' } }
};

const AIVisual = () => {
    return (
        <div className="w-48 h-48 relative flex items-center justify-center my-6 lg:my-0">
            <motion.div
                className="absolute w-full h-full border-2 border-blue-500/50 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
                className="absolute w-2/3 h-2/3 border-2 border-teal-400/50 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div 
                className="w-8 h-8 bg-white rounded-full shadow-2xl shadow-white" 
                animate={{ scale: [1, 1.1, 1]}}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    )
}

const PageTwo: React.FC<{ onJoinClick: () => void }> = ({ onJoinClick }) => (
    <motion.div 
        className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:h-full items-start lg:items-center min-h-full"
        variants={pageTwoContainerVariants}
    >
        {/* Left Column */}
        <motion.div 
            className="lg:col-span-3 bg-gray-900/50 p-6 sm:p-8 rounded-2xl flex flex-col justify-center border border-white/10 lg:h-full w-full"
            custom={true} // isLeft
            variants={columnVariants}
        >
            <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Our Philosophy</h3>
                <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                    We build digital ecosystems that blend design, technology, and AI automation to make businesses smarter and bolder.
                </p>
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Why Partner With Us?</h3>
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-4"
                    variants={featureListVariants}
                >
                     {whyChooseUsFeatures.map((feature) => (
                        <motion.div 
                            key={feature.text} 
                            className="flex items-center gap-3 text-gray-300"
                            variants={featureItemVariants}
                        >
                            <span className="text-blue-400 flex-shrink-0">{feature.icon}</span>
                            <span className="text-sm sm:text-base">{feature.text}</span>
                        </motion.div>
                     ))}
                </motion.div>
            </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
            className="lg:col-span-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:h-full pb-8 lg:pb-0"
            custom={false} // !isLeft
            variants={columnVariants}
        >
            <AIVisual />
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">SEE AI IN THE REAL WORLD</h2>
            <p className="mt-4 text-gray-300">Discover the opportunities AI can bring to your business.</p>
            <motion.button 
                onClick={onJoinClick}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 194, 203, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold rounded-xl shadow-lg transition-shadow"
            >
                Join Us, Now!
            </motion.button>
        </motion.div>
    </motion.div>
);


export default BrochureModal;
