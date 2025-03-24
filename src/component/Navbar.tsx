'use client';
import { useState, type FC } from 'react';
import logo from '../../assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import {Routes} from '../../assets/assests'
interface NavparProps {
    path: string;
   
}


const Navper: FC<NavparProps> = () => {
    const [active, setActive] = useState(0)

   
    return (
        <div className=' bg-white shadow flex items-center border-b-[0.2px] border-gray-100 justify-between pr-[40px] pl-[40px]  p-2 w-full'>
            <div className='flex items-center text-xl gap-4 cursor-pointer'>
                <div className='relative'>
                <FaCartShopping/>
                <div className='size-[16px] rounded-full bg-blue-600 flex items-center text-white text-xs justify-center absolute left-[-7px] top-[-10px]'>0</div>
                </div>
               
                  <Link
                  href={'/search'}
                  > 
                <FaSearch/>
                  </Link>
              

            </div>
            <div className='flex items-center pt-[20px] flex-row-reverse font-semibold text-gray-500 gap-[20px]'>
                {
                    Routes.map((el, index) => {
                        return (
                            <Link
                            onClick={()=>setActive(index)}
                            className={`${active === index ? 'text-blue-600' : ''} hover:text-blue-600`}
                            key={index} href={el.path}>
                              {el.name}
                            </Link>
                        )
                    })
                }
            </div>
            <Link href={'/'} className='cursor-pointer'>
             <Image
             onClick={()=>setActive(0)}
             src={logo} alt="logo" width={70} height={70}/>
            </Link>
          

            
         
        </div>
    );
}

export default Navper;
