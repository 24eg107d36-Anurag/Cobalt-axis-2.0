
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LogoLoop from './components/LogoLoop';
import Services from './components/Services';
import Projects from './components/Projects';
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BrochureModal from './components/BrochureModal';
import { 
  TwitterIcon, 
  LinkedInIcon, 
  GithubIcon,
  ReactIcon,
  NextJSIcon,
  TypeScriptIcon,
  TailwindCSSIcon,
  VercelIcon,
  DockerIcon,
  FramerMotionIcon,
  ViteIcon,
  SvelteIcon
} from './components/icons';
import ScrollVelocity from './components/ScrollVelocity';

const techLogos = [
    { node: <ReactIcon />, title: 'React' },
    { node: <NextJSIcon />, title: 'Next.js' },
    { node: <TypeScriptIcon />, title: 'TypeScript' },
    { node: <TailwindCSSIcon />, title: 'Tailwind CSS' },
    { node: <VercelIcon />, title: 'Vercel' },
    { node: <GithubIcon />, title: 'GitHub' },
    { node: <DockerIcon />, title: 'Docker' },
    { node: <FramerMotionIcon />, title: 'Framer Motion' },
    { node: <ViteIcon />, title: 'Vite' },
    { node: <SvelteIcon />, title: 'Svelte' },
];

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const socialLinks = [
    { name: 'Twitter', icon: <TwitterIcon />, url: '#' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, url: '#' },
    { name: 'GitHub', icon: <GithubIcon />, url: '#' },
  ];

  const handleGetStarted = () => setIsBrochureOpen(true);
  const handleCloseBrochure = () => setIsBrochureOpen(false);

  return (
    <div className="bg-black text-gray-300 font-sans selection:bg-blue-500/30 relative">
      {/* Cursor Glow Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      ></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero onGetStartedClick={handleGetStarted} />
          <About />
          <section className="pt-24 pb-12 bg-black">
              <div className="max-w-7xl mx-auto">
                  <LogoLoop
                      logos={techLogos}
                      speed={100}
                      direction="left"
                      logoHeight={40}
                      gap={80}
                      pauseOnHover={true}
                      scaleOnHover={true}
                      fadeOut={true}
                      fadeOutColor="black"
                      ariaLabel="Technology Stack Logos"
                  />
              </div>
          </section>
          <ScrollVelocity 
            texts={['CobaltAxis', 'CobaltAxis']}
            velocity={-25}
            className="scroll-text-gradient"
          />
          <Services />
          <ScrollVelocity 
            texts={['Innovative Solutions', 'Creative Designs']}
            velocity={-20}
            className="scroll-text-gradient"
          />
          <Projects />
          <Founders />
          <Contact />
        </main>
        <Footer socialLinks={socialLinks} />
      </div>
      <BrochureModal isOpen={isBrochureOpen} onClose={handleCloseBrochure} />
    </div>
  );
};

export default App;