import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageEditor from './ImageEditor';
import VideoGenerator from './VideoGenerator';
import { EditIcon, VideoCreationIcon } from './icons';

const tabs = [
  { id: 'edit', label: 'Image Editor', icon: <EditIcon /> },
  { id: 'video', label: 'Video Generator', icon: <VideoCreationIcon /> },
];

const AITools: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="ai-tools" className="py-24 sm:py-32 px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="gradient-text">AI Creative Suite</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                Bring your ideas to life. Edit images with text prompts or generate stunning videos from a single photo.
            </p>
        </div>
        
        <div className="flex justify-center border-b border-gray-800 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? 'text-blue-500' : 'text-gray-400 hover:text-white'
              } relative flex items-center gap-2 py-4 px-6 text-lg font-medium transition-colors focus:outline-none`}
            >
              {tab.icon}
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                  layoutId="underline"
                />
              )}
            </button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'edit' ? <ImageEditor /> : <VideoGenerator />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AITools;
