
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLinkIcon } from './icons';

const projectsData = [
  {
    title: 'Sree Seetha Rama Anna Sathram',
    category: 'Charity Website',
    imageUrl: 'https://i.ibb.co/cXR2pyr0/annadanam.jpg',
    liveDemoUrl: 'https://sreeseetharamaannasathram.netlify.app/',
    githubUrl: '#',
  },
  {
    title: 'The Fit Nation Hyderabad',
    category: 'Fitness Website',
    imageUrl: 'https://i.ibb.co/hRw8Bv1G/fitnation.jpg',
    liveDemoUrl: 'https://thefitnationhyderabad.netlify.app/',
    githubUrl: '#',
  },
  {
    title: 'Mani Pratheek Kasuba',
    category: 'Portfolio Website',
    imageUrl: 'https://i.ibb.co/BKvmZw25/Portfolio.jpg',
    liveDemoUrl: 'https://pratheekkasuba.netlify.app/',
    githubUrl: '#',
  },
  {
    title: 'CLNS',
    category: 'Legal Network Solutions',
    imageUrl: 'https://i.ibb.co/b519G5yx/clns-2.jpg',
    liveDemoUrl: 'https://clns.in/',
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
                <motion.a 
                    key={index}
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={gridItem}
                    className="group relative overflow-hidden rounded-2xl block"
                >
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 ease-out group-hover:-translate-y-4">
                        <div>
                            <p className="text-sm text-blue-400 font-semibold">{project.category}</p>
                            <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                        </div>
                        <div className="mt-4 flex items-center space-x-2 text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                           <ExternalLinkIcon className="w-5 h-5" />
                           <span>View Live Demo</span>
                        </div>
                    </div>
                </motion.a>
                ))}
            </motion.div>
        </motion.div>
    </section>
  );
};

export default Projects;
