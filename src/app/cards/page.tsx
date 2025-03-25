'use client';
import { FC } from 'react';
import logo1 from '../../../assets/7333262_cleanup.jpg';
import logo2 from '../../../assets/freepik__upload__49630_cleanup.png';
import logo3 from '../../../assets/download-removebg-preview.png';
import Image from 'next/image';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas'; 
import Text from '@/component/Text';

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
          scale: 2, // زيادة الجودة
          scrollX: 0,
          scrollY: 0,
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
    <div className='flex h-screen flex-col justify-center items-center gap-[20px] '>
      
     <Text 
        text="  🌙 اختر كارت التهنئة الذي تريد تحميله" 
        typingSpeed={80} 
        className="text-amber-100 animate-bounce" 
      />
      <div className='flex max-sm:flex-col justify-center gap-[50px] w-full'>
      <div
        id="card1"
        className='relative  w-[40%] max-sm:w-[90%] cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90'
        onClick={() => handleDownload('card1')}
        style={{ color: '#b45309' }} 
      >
        <Image
          src={logo1}
          alt="logo1"
          className='object-cover rounded-2xl'
        />
         <Image
          src={logo3}
          alt="logo1"
          width={60}
          height={100}
          className='absolute right-[190px]
           max-sm:right-[120px] max-sm:bottom-11
             max-sm:w-[35px] bottom-[20%]'
        />
       <p className='absolute right-[50px] max-sm:text-xs
        max-sm:w-[115px] max-sm:top-[35%] top-[40%] max-sm:right-[28px] text-center w-[200px] font-semibold text-lg'>
      🌙 عيد فطر سعيد، {text} نهنئك بحلول عيد الفطر المبارك تقبل الله منا ومنكم صالح الاعمال
      </p>

      </div>

      <div
        id="card2"
        className='relative w-[40%] max-sm:w-[90%] transform cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:opacity-90'
        onClick={() => handleDownload('card2')}
        style={{ color: '#a1a1aa' }} 
      >
        <Image
          src={logo2}
          alt="logo2"
          className='object-cover rounded-2xl'
        />
        <Image
          src={logo3}
          alt="logo1"
          width={60}
          height={150}
          className='absolute right-[280px] 
           max-sm:w-[35px] max-sm:right-[170px]
            max-sm:bottom-7  bottom-[20%]'
        />
        <p className='absolute right-[50px]  max-sm:w-[130px] max-sm:right-[28px]
         max-sm:text-xs top-[40%] max-sm:top-[40%]
         text-center w-[200px] font-semibold text-lg'>
        🌙 عيد فطر سعيد، {text} نهنئكم بحلول عيد الفطر المبارك تقبل الله منا ومنكم صالح الاعمال        </p>
      </div>

      </div>
    </div>
  );
};

export default Cards;