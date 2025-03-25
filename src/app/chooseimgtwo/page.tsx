'use client'
import Image from 'next/image';
import type { FC } from 'react';
import { useRef } from 'react';
import logo2 from '../../../assets/6SvQd0I - Imgur.jpg';
import logo3 from '../../../assets/download-removebg-preview.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface ChooseimgoneProps {}

const Chooseimgone1: FC<ChooseimgoneProps> = () => {
  const { text } = useSelector((state: RootState) => state.text);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const htmlToImage = await import('html-to-image');
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 2,
      });

      const link = document.createElement('a');
      link.download = 'design-with-text-1.png'; // اسم ملف مختلف للكومبوننت الأول
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
      // Fallback لتنزيل الصورة الأصلية إذا فشل التحويل
      const fallbackLink = document.createElement('a');
      fallbackLink.href = logo2.src;
      fallbackLink.download = 'original-image-1.jpg';
      fallbackLink.click();
    }
  };

  return (
    <div 
      ref={cardRef}
      onClick={handleDownload}
      className="relative max-sm:w-[90%] w-[400px] h-[400px] cursor-pointer"
    >
      <img
        src={logo2.src}
        alt="background"
        className="absolute w-full h-full object-cover rounded-2xl"
      />
      <Image
        src={logo3}
        alt="logo"
        width={60}
        height={100}
        className="absolute top-2 right-2 z-10"
      />
      <div className="absolute inset-0 flex flex-col pb-[30px] items-center justify-end z-10">
        <p className="eid-card moon z-20">{text}</p>
      </div>
    </div>
  );
};

export default Chooseimgone1;