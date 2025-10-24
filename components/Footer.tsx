import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

interface FooterProps {
  socialLinks: SocialLink[];
}

const brandName = "CobaltAxis";

const containerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants: Variants = {
  initial: {
    color: '#374151', // gray-700
    opacity: 0.5,
  },
  animate: {
    color: ['#374151', '#3b82f6', '#a855f7', '#374151'],
    opacity: [0.5, 1, 1, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  },
};

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer className="py-20 bg-black px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="animated-footer-text"
          aria-label={brandName}
        >
          {brandName.split('').map((letter, index) => (
            <motion.span key={`${letter}-${index}`} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <div className="flex flex-col items-center gap-6">
            <div className="flex items-center space-x-6">
                {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                >
                    {link.icon}
                </a>
                ))}
            </div>
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} CobaltAxis. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;