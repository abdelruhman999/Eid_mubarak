'use client';
import { FC } from 'react';
import logo1 from '../../../assets/Background.png';
import logo2 from '../../../assets/6SvQd0I - Imgur.png';
import logo3 from '../../../assets/download-removebg-preview.png';
import Image from 'next/image';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas'; 
import Text from '@/component/Text';
import Link from 'next/link';

interface CardsProps {}

const Cards: FC<CardsProps> = () => {
  const { text } = useSelector((state: RootState) => state.text);


  const handleDownload = async (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      try {
        const canvas = await html2canvas(element, {
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          scale: 2, 
          windowWidth: document.documentElement.offsetWidth,
          windowHeight: document.documentElement.offsetHeight,
          logging: true // لرؤية الأخطاء في الكونسول
        });
        // ... باقي الكود
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  return (
    <div className='flex w-full pb-[30px]  flex-col justify-center items-center gap-[10px] '>
      
     <Text 
        text="  🌙 اختر كارت التهنئة الذي تريد تحميله" 
        typingSpeed={80} 
        className="text-amber-100 animate-bounce" 
      />
      <div className='flex max-sm:flex-col   items-center justify-center gap-[50px] w-full'>
      <Link 
      href={'chooseimgone'}
      className=' max-sm:w-[90%]'
      >
      <div
        id="card1"
        className='relative    cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90'
        onClick={() => handleDownload('card1')}
        style={{ color: '#b45309' }} 
      >
        <Image
          src={logo1}
          alt="logo1"
          className='object-cover size-[400px] rounded-2xl'
        />
         <Image
          src={logo3}
          alt="logo1"
          width={60}
          height={100}
          className='absolute top-2 right-2'
        />
        <div className='absolute inset-0 pt-[40px] flex flex-col items-center justify-center'>
        <div className="eid-card">
        <span className="moon">🌙</span> عيد فطر سعيد، نهنئك بحلول عيد الفطر المبارك تقبل الله منا ومنكم صالح الاعمال
      </div>
      <p className='eid-card moon'>{text}</p>
     </div>

      </div>
      </Link>

      
      <Link 
      href={'chooseimgtwo'}
      className='max-sm:w-[90%]'
      >
      <div
        id="card1"
        className='relative   cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90'
        onClick={() => handleDownload('card1')}
        style={{ color: '#b45309' }} 
      >
        <Image
          src={logo2}
          alt="logo1"
          className='object-cover size-[400px] rounded-2xl'
        />
         <Image
          src={logo3}
          alt="logo1"
          width={60}
          height={100}
          className='absolute top-2 right-2'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <div className="eid-card">
        <span className="moon">🌙</span> عيد فطر سعيد، نهنئك بحلول عيد الفطر المبارك تقبل الله منا ومنكم صالح الاعمال
      </div>
      <p className='eid-card moon'>{text}</p>
     </div>

      </div>
     
      </Link>

    

      </div>
    </div>
  );
};

export default Cards;