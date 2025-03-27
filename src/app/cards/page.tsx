'use client';
import { FC } from 'react';
import logo1 from '../../../assets/Background.jpg';
import logo2 from '../../../assets/6SvQd0I - Imgur.jpg';
import logo3 from '../../../assets/download-removebg-preview-removebg-preview.png';
import Image from 'next/image';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import Text from '@/component/Text';
import Link from 'next/link';
import style from '../../component/Cardstyle.module.css'

interface CardsProps {}

const Cards: FC<CardsProps> = () => {
  const { text } = useSelector((state: RootState) => state.text);

  return (
    <div className='flex w-full pb-[30px] flex-col justify-center items-center gap-[50px]'>
      <Text 
        text="🌙 اختر كارت التهنئة الذي تريد تحميله" 
        typingSpeed={80} 
        className="text-amber-100 animate-bounce" 
      />
      
      <div className='flex max-sm:flex-col items-start justify-center gap-[50px] max-sm:w-full'>
        {/* Card 1 */}
        <Link href={'chooseimgone'} className='w-full flex justify-center'>
          <div
            id="card1"
            className='relative cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90'
            style={{ color: '#b45309' }}
          >
            <div className='relative h-[400px] w-[300px]'>
              <Image
                src={logo1}
                alt="logo1"
                fill
                className='object-cover rounded-2xl'
              />
              <Image
                src={logo3}
                alt="logo1"
                width={60}
                height={60}
                className='absolute top-2 right-2 rounded-lg'
              />
              <div className='absolute bottom-0 left-0 right-0 pb-4 flex justify-center'>
                <p className={`${style.poppins_semibold} text-gray-600  px-2 py-1 rounded-md`}>
                  {text}
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href={'chooseimgtwo'} className='w-full flex justify-center'>
          <div
            id="card1"
            className='relative cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90'
            style={{ color: '#b45309' }}
          >
            <div className='relative h-[400px] w-[300px]'>
              <Image
                src={logo2}
                alt="logo1"
                fill
                className='object-cover rounded-2xl'
              />
              <Image
                src={logo3}
                alt="logo1"
                width={60}
                height={60}
                className='absolute top-2 right-2 rounded-lg'
              />
              <div className='absolute bottom-0 left-0 right-0 pb-4 flex justify-center'>
                <p className={`${style.poppins_semibold} text-blue-950  px-2 py-1 rounded-md`}>
                  {text}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;