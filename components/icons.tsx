import React from 'react';
import { motion, Variants } from 'framer-motion';

export const LogoIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L22 8L12 13L2 8L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M2 11L12 16L22 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 15L12 20L22 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const GlobeIcon: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

export const RobotIcon: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="14" height="14" rx="2" ry="2"></rect>
    <line x1="9" y1="12" x2="15" y2="12"></line>
    <line x1="12" y1="9" x2="12" y2="15"></line>
    <circle cx="8.5" cy="8.5" r="0.5" fill="currentColor"></circle>
    <circle cx="15.5" cy="8.5" r="0.5" fill="currentColor"></circle>
  </svg>
);

export const BoltIcon: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

export const VideoIcon: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8z"></path>
        <rect x="2" y="6" width="14" height="12" rx="2" ry="2"></rect>
    </svg>
);

export const ChartIcon: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
);

export const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);


export const TwitterIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
);

export const LinkedInIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

export const ReactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
      <g>
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
);
  
export const NextJSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M14.68 7.26L9.32 15.34V7.26H7.93V16.74H9.32L14.68 8.66V16.74H16.07V7.26H14.68Z"/>
    </svg>
);
  
export const TypeScriptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M1.5 1.5H22.5V22.5H1.5V1.5Z" fill="#3178C6"/>
        <path d="M11.2,14.38H7.88V12.18L9.94,12.06C10.6,12,11,11.7,11,10.96V8.5H13.4V11.2C13.4,13.24,12.22,14.38,11.2,14.38ZM15.2,16.5H19.2V14.5H16.7V12.4H19.1V10.4H16.7V8.5H19.2V6.5H15.2V16.5Z" fill="white"/>
    </svg>
);
  
export const TailwindCSSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M12.001 4.529C12.001 4.529 13.223 3.308 15.011 4.529C16.8 5.75 16.8 7.538 16.8 7.538C16.8 7.538 18.022 6.316 19.811 7.538C21.6 8.759 21.6 10.547 21.6 10.547C21.6 10.547 20.378 11.769 18.589 10.547C16.8 9.326 16.8 7.538 16.8 7.538C16.8 7.538 15.578 8.759 13.789 7.538C12 6.316 12 4.529 12 4.529" fill="#38BDF8"/>
        <path d="M7.2 11.962C7.2 11.962 8.422 10.74 10.211 11.962C12 13.183 12 14.97 12 14.97C12 14.97 13.222 13.749 15.011 14.97C16.8 16.191 16.8 17.979 16.8 17.979C16.8 17.979 15.578 19.2 13.789 17.979C12 16.758 12 14.97 12 14.97C12 14.97 10.778 16.191 8.989 14.97C7.2 13.749 7.2 11.962 7.2 11.962" fill="#38BDF8"/>
    </svg>
);
  
export const VercelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2L2 22h20L12 2z"/>
    </svg>
);
  
export const DockerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
        <path d="M21.5,13.2v-2.8c0-0.7-0.3-1.4-0.8-1.8l-7.2-5.4c-0.6-0.4-1.5-0.4-2.1,0L4.3,8.6C3.8,9,3.5,9.7,3.5,10.4v2.8c0,0.7,0.3,1.4,0.8,1.8l7.2,5.4c0.6,0.4,1.5,0.4,2.1,0l7.2-5.4C21.2,14.6,21.5,13.9,21.5,13.2z"/>
        <path d="M3.5,13.4l2.8,2.1c0.6,0.4,1.5,0.4,2.1,0l2.8-2.1"/>
        <path d="M3.5,9.2l2.8,2.1c0.6,0.4,1.5,0.4,2.1,0l2.8-2.1"/>
        <path d="M7.7,11.3l2.8,2.1c0.6,0.4,1.5,0.4,2.1,0l2.8-2.1"/>
    </svg>
);
  
export const FramerMotionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
    </svg>
);
  
export const ViteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
        <path d="M13.5 2L10 12.5H16L11.5 22"/>
    </svg>
);
  
export const SvelteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M17.3,4.4C16.2,3,14.6,2.2,13,2c-0.4-0.1-0.8-0.1-1.2-0.1C9,1.9,6.5,2.9,4.7,4.7C2.9,6.5,1.9,9,1.9,11.8c0,0.4,0,0.8,0.1,1.2C2.2,14.6,3,16.2,4.4,17.3c2,1.6,4.6,2.4,7.2,2.4c0.4,0,0.8,0,1.2-0.1c2.8-0.2,5.3-1.2,7.1-3c1.8-1.8,2.8-4.3,2.8-7.1c0-0.4,0-0.8-0.1-1.2C22.2,7.7,21.1,5.9,19.6,4.4z M17.2,15.8c-0.9,0.9-2.1,1.5-3.6,1.9L6.2,7.2c-0.3-0.5-0.5-1.1-0.5-1.6c0-1.8,1.4-3.2,3.2-3.2c0.5,0,1.1,0.2,1.6,0.5L17.2,15.8z M17.8,16.8c-0.5,0.3-1.1,0.5-1.6,0.5c-1.8,0-3.2-1.4-3.2-3.2c0-0.5,0.2-1.1,0.5-1.6l-6.7-12.5C7.7,0.2,8.9-0.2,10.2,0.1L17.8,16.8z"/>
    </svg>
);


// FIX: Add and export missing icon components to resolve import errors.
export const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
);

export const VideoCreationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
        <line x1="7" y1="2" x2="7" y2="22"></line>
        <line x1="17" y1="2" x2="17" y2="22"></line>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <line x1="2" y1="7" x2="7" y2="7"></line>
        <line x1="2" y1="17" x2="7" y2="17"></line>
        <line x1="17" y1="17" x2="22" y2="17"></line>
        <line x1="17" y1="7" x2="22" y2="7"></line>
    </svg>
);

export const UploadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2L9.5 9.5H2l7.5 5.5L7 22l5-4.5L17 22l-2.5-7L22 9.5h-7.5L12 2z" />
    </svg>
);

export const LightbulbIcon: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 0-7 7c0 3.03 1.54 5.5 3.5 6.5.5.25.5 1 0 1.25-2 .97-3.5 3.47-3.5 6.25h14c0-2.78-1.5-5.28-3.5-6.25-.5-.25-.5-1 0-1.25 1.96-1 3.5-3.47 3.5-6.5a7 7 0 0 0-7-7z"></path>
        <line x1="12" y1="22" x2="12" y2="23"></line>
        <line x1="8" y1="19" x2="16" y2="19"></line>
    </svg>
);

export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

export const DiscoverIcon: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <line x1="11" y1="8" x2="11" y2="14"></line>
        <line x1="8" y1="11" x2="14" y2="11"></line>
    </svg>
);

export const DevelopIcon: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
        <line x1="12" y1="4" x2="12" y2="20"></line>
    </svg>
);

export const LaunchIcon: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12H19"></path>
        <path d="M12 5l7 7-7 7"></path>
    </svg>
);

export const WavingMascotIcon: React.FC = () => {
  // FIX: Explicitly type `handVariants` with `Variants` from framer-motion to resolve the type inference issue with `repeatType`.
  const handVariants: Variants = {
    rest: { rotate: -10, y: 5, x: -2 },
    hover: {
      rotate: [ -10, 30, -25, 30, -10 ],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };
    
  return (
    <motion.svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="drop-shadow-lg"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Body */}
      <path
        d="M90 155C125.899 155 155 125.899 155 90C155 54.1015 125.899 25 90 25C54.1015 25 25 54.1015 25 90C25 125.899 54.1015 155 90 155Z"
        fill="#1A202C"
        stroke="#4A5568"
        strokeWidth="4"
      />
      {/* Face Screen */}
      <rect
        x="55"
        y="60"
        width="70"
        height="50"
        rx="10"
        fill="#000"
        stroke="#3B82F6"
        strokeWidth="3"
        filter="url(#glow)"
      />
      {/* Eyes */}
      <motion.circle cx="75" cy="85" r="5" fill="#3B82F6" />
      <motion.circle cx="105" cy="85" r="5" fill="#3B82F6" />
      {/* Antenna */}
      <line
        x1="90"
        y1="25"
        x2="90"
        y2="10"
        stroke="#4A5568"
        strokeWidth="4"
      />
      <circle cx="90" cy="8" r="4" fill="#3B82F6" />
      {/* Arm */}
      <motion.g transform-origin="125px 120px">
        <motion.path
          variants={handVariants}
          d="M125 120L150 95"
          stroke="#4A5568"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </motion.g>
    </motion.svg>
  );
};

// FIX: Add ChatbotIcon and SendIcon to resolve import errors in Chatbot.tsx.
export const ChatbotIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

export const SendIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);

export const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 12H5m0 0l7 7m-7-7l7-7" />
  </svg>
);

export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
  </svg>
);

export const CaseStudyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);

export const SupportIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
);

export const TransparencyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

export const PartnershipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
    </svg>
);