'use client'
import Image from 'next/image';
import type { FC } from 'react';
import { useRef } from 'react';
import logo2 from '../../../assets/6SvQd0I - Imgur.jpg';
import logo3 from '../../../assets/download-removebg-preview-removebg-preview.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Text from '@/component/Text';
import style from '../../component/Cardstyle.module.css'

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
      link.download = 'design-with-text-1.png'; 
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
      const fallbackLink = document.createElement('a');
      fallbackLink.href = logo2.src;
      fallbackLink.download = 'original-image-1.jpg';
      fallbackLink.click();
    }
  };

  return (
    <div >
    <div 
      ref={cardRef}
      onClick={handleDownload}
      className="relative max-sm:w-[90%]  h-[430px] w-[300px] cursor-pointer"
    >
      <img
        src={logo2.src}
        alt="background"
        className="absolute  object-cover rounded-2xl"
      />
      <Image
        src={logo3}
        alt="logo"
        width={60}
        height={100}
        className="absolute top-2 rounded-lg  right-2 z-10"
      />
      <div className="absolute inset-0  flex flex-col  items-center justify-end z-10">
      <p className={`${style.poppins_semibold} text-blue-900 `}>{text}</p>
      </div>
    </div>
    </div>
  );
};

export default Chooseimgone1;