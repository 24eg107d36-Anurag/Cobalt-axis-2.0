import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GlobeIcon, RobotIcon, BoltIcon, VideoIcon, ChartIcon, ChatbotIcon } from './icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const servicesData = [
  {
    icon: <GlobeIcon />,
    title: "Custom Websites",
    description: "Scalable, performance-optimized websites with modern design and brand integration.",
  },
  {
    icon: <RobotIcon />,
    title: "AI Receptionists",
    description: "24/7 intelligent virtual assistants with multi-language support and analytics.",
  },
  {
    icon: <BoltIcon />,
    title: "AI Automation Agents",
    description: "Custom automation for workflow optimization and task management.",
  },
  {
    icon: <VideoIcon />,
    title: "Video Editing",
    description: "Professional editing and production for brand content and social media.",
  },
   {
    icon: <ChartIcon />,
    title: "Brand Strategy & Growth",
    description: "Data-driven marketing and social strategies to build your brand and boost visibility.",
  },
   {
    icon: <ChatbotIcon width="40" height="40" />,
    title: "AI-Powered Chatbots",
    description: "Custom chatbot solutions to enhance customer engagement and streamline support.",
  },
];

const cardVariants: Variants = {
    rest: {
        transition: { duration: 0.3, ease: 'easeOut' }
    },
    hover: {
        y: -8,
        scale: 1.03,
        boxShadow: "0px 0px 40px rgba(59, 130, 246, 0.3)", // Neon blue glow
        transition: { duration: 0.3, ease: 'easeIn' }
    }
};

const blobVariants: Variants = {
    rest: { scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    hover: { scale: 1.25, transition: { duration: 0.4, ease: 'easeIn' } }
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const revealVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={revealVariant}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="h-full"
    >
      <motion.div
        variants={cardVariants}
        className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col"
      >
          <div className="absolute inset-0 border border-gray-800 rounded-2xl"></div>
          <motion.div
              variants={blobVariants}
              className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-600/20 to-transparent filter blur-3xl"
          />
        
        <div className="relative z-10 flex flex-col flex-grow">
          <div className="mb-4 text-blue-500">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 flex-grow">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services: React.FC = () => {
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
    <section id="services" className="pt-12 pb-32 px-4 min-h-screen flex flex-col justify-center">
      <motion.div 
        variants={containerVariants}
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions to accelerate your business growth.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;