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
    const [search, setSearch] = useState(false)

   
    return (
        <div className=' flex items-center border-b-[0.2px] border-gray-100 justify-between pr-[40px] pl-[40px]  p-2 w-full'>
            <div className='flex items-center text-xl gap-4 cursor-pointer'>
                <div className='relative'>
                <FaCartShopping/>
                <div className='size-[16px] rounded-full bg-blue-600 flex items-center text-white text-xs justify-center absolute left-[-7px] top-[-10px]'>0</div>
                </div>
                <div className='relative  flex items-center gap-2'>
                    <input
                    placeholder='بحث'
                     type="search"
                      className={` text-end duration-200 ${search? 'w-[190px] bg-gray-200' :'w-0 '} text-sm  outline-none rounded-xl h-[35px] pl-[26px]`} />
                <FaSearch
                onClick={()=>setSearch(!search)}
                className='absolute left-1'/>
                </div>

            </div>
            <div className='flex items-center pt-[20px] flex-row-reverse font-semibold text-gray-500 gap-[20px]'>
                {
                    Routes.map((el, index) => {
                        return (
                            <Link key={index} href={el.path}>
                              {el.name}
                            </Link>
                        )
                    })
                }
            </div>
            <Link href={'/'} className='cursor-pointer'>
             <Image src={logo} alt="logo" width={70} height={70}/>
            </Link>
          

            
         
        </div>
    );
}

export default Navper;
