import React, { useState, useEffect, useRef } from 'react';

interface TextTypeProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
}

const TextType: React.FC<TextTypeProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
  loop = true,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const handleTyping = () => {
      // Determine current text and target length
      const currentText = texts[textIndex];
      const targetLength = currentText.length;

      // Handle loop termination
      if (!loop && textIndex === texts.length - 1 && subIndex === targetLength && !isDeleting) {
        return;
      }

      if (isDeleting) {
        if (subIndex > 0) {
          setSubIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % texts.length);
        }
      } else {
        if (subIndex < targetLength) {
          setSubIndex(prev => prev + 1);
        } else {
          // Pause at the end of the text
          timeoutRef.current = window.setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
          return; // Return to wait for the pause
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    timeoutRef.current = window.setTimeout(handleTyping, speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [subIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime, loop]);

  const displayedText = texts[textIndex] ? texts[textIndex].substring(0, subIndex) : '';
  
  const words = displayedText.split(' ');
  const baseWord = words[0] || '';
  const highlightedWord = words.slice(1).join(' ') || '';

  const showCursor = !(subIndex === texts[textIndex]?.length && !isDeleting);

  return (
    <div className="text-type-container">
      <span>{baseWord}</span>
      {highlightedWord && <span className="text-blue-500 ml-4">{highlightedWord}</span>}
      {showCursor && <div className="text-type-cursor h-16 md:h-20 -mb-2 md:-mb-4"></div>}
    </div>
  );
};

export default TextType;