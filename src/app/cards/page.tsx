'use client';
import { FC } from 'react';
import logo1 from '../../../assets/Background.jpg';
import logo2 from '../../../assets/6SvQd0I - Imgur.jpg';
import logo3 from '../../../assets/download-removebg-preview.jpg';
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
          className='absolute top-2 rounded-lg  right-2'
        />
        <div className='absolute inset-0  pb-[30px] flex flex-col items-center justify-end'>
       
      <p className={`${style.moon} ${style.eid_card}`}>{text}</p>
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
          className='absolute top-2 rounded-lg right-2'
        />
        <div className='absolute inset-0 pb-[0px] flex flex-col items-center justify-end'>
       
        <p className={`${style.moon} ${style.eid_card}`}>{text}</p>
     </div>

      </div>
     
      </Link>

    

      </div>
    </div>
  );
};

export default Cards;