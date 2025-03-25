'use client';
import { FC, useEffect, useState } from 'react';

interface TextProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

const Text: FC<TextProps> = ({ 
  text = "🌙 اختر كارت التهنئة الذي تريد تحميله",
  typingSpeed = 100,
  className = ""
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // إخفاء المؤشر بعد اكتمال الكتابة
      const cursorTimeout = setTimeout(() => setShowCursor(false), 1000);
      return () => clearTimeout(cursorTimeout);
    }
  }, [currentIndex, text, typingSpeed]);

  // تأثير وميض المؤشر
  useEffect(() => {
    if (currentIndex < text.length) {
      const interval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [currentIndex, text.length]);

  return (
    <p 
      className={`
        text-2xl font-bold text-white 
        text-center mb-8 mt-4
        drop-shadow-md 
        w-[250px] min-h-[80px]
        flex justify-center items-center
        ${className}
      `}
    >
      {displayedText}
      {showCursor && (
        <span 
          className="inline-block w-[2px] h-6 bg-white ml-1 animate-blink"
          style={{ animationDuration: '0.7s' }}
        />
      )}
    </p>
  );
};

export default Text;