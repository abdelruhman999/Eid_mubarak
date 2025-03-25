'use client'
import Image from 'next/image';
import type { FC } from 'react';
import logo1 from '../../../assets/Background.png';
import logo3 from '../../../assets/download-removebg-preview.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface ChooseimgoneProps {}

const Chooseimgone: FC<ChooseimgoneProps> = () => {

  const { text } = useSelector((state: RootState) => state.text);
    return (
        <div className=' flex justify-center bg-red-600'>

        <div
               id="card1"
               className='relative   max-sm:w-[90%] cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-90'
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
                 className='absolute bottom-2 left-5'
               />
               <div className='absolute inset-0 flex flex-col items-center justify-center'>
               <div className="eid-card">
               <span className="moon">🌙</span> عيد فطر سعيد، نهنئك بحلول عيد الفطر المبارك تقبل الله منا ومنكم صالح الاعمال
             </div>
             <p className='eid-card moon'>{text}</p>
            </div>
       
             </div>
        </div>
    );
}

export default Chooseimgone;
