'use client';
import {  useEffect, type FC } from 'react';
import logo from '../../assets/612.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { setaddText } from '@/redux/slices/count';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
interface InputNameProps {}

const InputName: FC<InputNameProps> = () => {
  const dispatch = useDispatch();
  const {text} = useSelector((state:RootState) => state.text);
 
    return (
       <div className=' w-full flex h-screen justify-center pt-[150px]'>

        <form
        className="bg-gray-900/50 flex max-sm:w-[90%] w-[440px] h-fit  items-center flex-col  gap-[20px] shadow-lg rounded-2xl p-6  text-center">
          <Image
          src={logo}
          alt="logo"
          width={150}
          height={150}
          className='rounded-full'
          />
          <div className="form">
          <input
          onChange={(e) => dispatch(setaddText(e.target.value))}
          required
           className="input "
            placeholder="ادخل اسمك هنا "
            type="text" />
          <span className="input-border"></span>
        </div>
        {
          text && text.length > 1 &&
          <Link href="/cards"
            className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mt-4"
          >
          اضغط     
          </Link>
        }
        </form>
       </div>
   
      
    );
}

export default InputName;
