import React from 'react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 py-32 bg-black text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-600 to-purple-600 blur-[180px] opacity-30 pointer-events-none" />

      <div className="max-w-4xl space-y-10 relative z-10">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={4}
          blurStrength={8}
          containerClassName="about-heading"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">CobaltAxis</span>
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={3}
          blurStrength={6}
          containerClassName="about-text"
        >
          We’re a future-focused digital agency crafting immersive experiences that blend design, technology, and intelligence.
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={4}
          containerClassName="about-text"
        >
          At <b>CobaltAxis</b>, we don’t just build websites — we create ecosystems. From brand identity and web design to AI automation, our mission is to make businesses smarter and bolder.
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;