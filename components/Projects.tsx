import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon } from './icons';

const projectsData = [
  {
    title: 'Sree Seetha Rama Anna Sathram',
    category: 'Charity Website',
    imageUrl: 'https://i.imgur.com/8a1Z8Xy.png',
    liveDemoUrl: 'https://sreeseetharamaannasathram.netlify.app/',
    githubUrl: '#',
  },
  {
    title: 'The Fit Nation Hyderabad',
    category: 'Fitness Website',
    imageUrl: 'https://i.imgur.com/uQd2fQG.png',
    liveDemoUrl: 'https://thefitnationhyderabad.netlify.app/',
    githubUrl: '#',
  },
  {
    title: 'Mani Pratheek Kasuba',
    category: 'Portfolio Website',
    imageUrl: 'https://i.imgur.com/Qv9fW9F.png',
    liveDemoUrl: 'https://pratheekkasuba.netlify.app/',
    githubUrl: '#',
  },
  {
    title: 'LevelUp NationX',
    category: 'Business Landing Page',
    imageUrl: 'https://i.imgur.com/c5oB4cE.png',
    liveDemoUrl: 'https://levelupnation.netlify.app/',
    githubUrl: '#',
  },
];

const Projects: React.FC = () => {
    const sectionContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };
    
    const titleItem: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    
    const gridContainer: Variants = {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
    };
    
    const gridItem: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 15, stiffness: 100 } },
    };

    const linkContainerVariants: Variants = {
        rest: { opacity: 0, y: 10 },
        hover: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
    };

    const linkItemVariants: Variants = {
        rest: { opacity: 0, y: 10 },
        hover: { opacity: 1, y: 0 }
    };


  return (
    <section id="projects" className="py-24 sm:py-32 px-4 overflow-hidden">
        <motion.div
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-7xl mx-auto"
        >
            <motion.div 
                variants={titleItem}
                className="text-center"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Our <span className="gradient-text">Masterpieces</span>
                </h2>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                    A glimpse into the innovative solutions and beautiful experiences we've crafted for our clients.
                </p>
            </motion.div>

            <motion.div
                variants={gridContainer}
                className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
                {projectsData.map((project, index) => (
                <motion.div 
                    key={index}
                    variants={gridItem}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="group relative overflow-hidden rounded-2xl"
                >
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                        <div>
                            <p className="text-sm text-blue-400 font-semibold">{project.category}</p>
                            <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                        </div>
                        <motion.div 
                            variants={linkContainerVariants}
                            className="mt-4 flex items-center space-x-4"
                        >
                            <motion.a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" variants={linkItemVariants} className="flex items-center text-sm space-x-2 text-gray-300 hover:text-white transition-colors">
                                <ExternalLinkIcon className="w-5 h-5" />
                                <span>Live Demo</span>
                            </motion.a>
                            <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" variants={linkItemVariants} className="flex items-center text-sm space-x-2 text-gray-300 hover:text-white transition-colors">
                                <GithubIcon className="w-5 h-5" />
                                <span>GitHub</span>
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </section>
  );
};

export default Projects;