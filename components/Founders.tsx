import React from 'react';
import { motion, Variants } from 'framer-motion';
import { TwitterIcon, LinkedInIcon } from './icons';
import TiltedCard from './TiltedCard';

const teamData = [
  {
    name: 'Hari Vamshi',
    title: 'CEO & Team Lead',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop',
    bio: 'As the CEO, Hari sets the strategic direction for CobaltAxis. He makes the high-level decisions that drive our innovation and client success.',
    socials: {
      twitter: 'https://x.com/harivamshi1118?s=11',
      linkedin: 'https://www.linkedin.com/in/harivamshi-mundrathi-a6b850377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
  },
  {
    name: 'Mani Pratheek',
    title: 'Technical Lead',
    imageUrl: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=300&auto=format&fit=crop',
    bio: 'Mani leads our technical execution. With a passion for clean code and brilliant design, he is the hands-on expert delivering our digital services.',
    socials: {
      twitter: 'https://x.com/pratheek987?s=09',
      linkedin: 'https://www.linkedin.com/in/manipratheekkasuba',
    },
  },
  {
    name: 'Shashi Kumar',
    title: 'Operations Manager',
    imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=300&auto=format&fit=crop',
    bio: 'Shashi is the engine of our operations. He executes strategy, manages complex processes, and ensures every project is delivered smoothly and on time.',
    socials: {
      twitter: '#',
      linkedin: '#',
    },
  },
];

const Founders: React.FC = () => {
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
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { type: 'spring', damping: 15, stiffness: 100 } 
        },
    };

    return (
        <section id="founders" className="py-24 sm:py-32 px-4 bg-black">
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
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Meet Our <span className="gradient-text">Core Team</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        The leadership driving CobaltAxis forward with passion and expertise.
                    </p>
                </motion.div>

                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8"
                >
                    {teamData.map((member, index) => (
                        <motion.div 
                            key={index}
                            variants={cardVariants}
                            className="flex flex-col items-center text-center p-8 bg-gray-900/40 rounded-2xl border border-gray-800"
                        >
                            <TiltedCard
                                imageSrc={member.imageUrl}
                                altText={member.name}
                                captionText={member.name}
                                containerHeight="128px"
                                containerWidth="128px"
                                imageHeight="128px"
                                imageWidth="128px"
                                scaleOnHover={1.15}
                                rotateAmplitude={10}
                                showMobileWarning={false}
                                showTooltip={true}
                            />
                            <h3 className="text-2xl font-bold text-white mt-6 mb-1">{member.name}</h3>
                            <p className="text-blue-400 font-semibold mb-4">{member.title}</p>
                            <p className="text-gray-400 mb-6 flex-grow">{member.bio}</p>
                            <div className="flex items-center space-x-5">
                                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
                                    <TwitterIcon />
                                </a>
                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
                                    <LinkedInIcon />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Founders;