'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, type FC } from 'react';
import { MdShoppingCart } from "react-icons/md";
import { BiSolidDetail } from "react-icons/bi";
import logo from '../../assets/p_img13.png' 
interface CardstyleProps {}

const Cardstyle: FC<CardstyleProps> = () => {
    const [hover, setHover] = useState(false)
    return (
        <>
            <style>
                {`@keyframes rotBGimg {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }`}
            </style>
            <div  
            onMouseEnter={()=>setHover(true)}   
            onMouseLeave={()=>setHover(false)}
               className="relative cursor-pointer hover:translate-y-[-10px] duration-200 gap-2 w-[190px] h-[254px] flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#07182E]">
                
                <Image
                className="z-10 size-[50%] "
                src={logo} alt="logo" width={70} height={70}
                />
                <div className="z-10 text-white text-center font-semibold">منتج 1</div>
                <div className="z-10 text-white text-center font-semibold">100$</div>
                
             
                <div className="absolute w-[100px] h-[130%] bg-gradient-to-b from-cyan-500 to-pink-500" style={{ animation: "rotBGimg 3s linear infinite" }}></div>
                <div className="absolute inset-[5px] bg-[#07182E] rounded-xl"></div>
                {
                hover&&
                <div className='absolute flex flex-col items-end gap-[10px] pt-[20px] pr-[10px] inset-0  bg-gray-500 bg-opacity-50'>
                <MdShoppingCart className='text-2xl  text-white  hover:text-3xl hover:text-green-500 duration-200' />
                <Link
                 href="Productdetails/1"
                >  
                <BiSolidDetail
                className='text-2xl  text-white  hover:text-3xl hover:text-blue-500 duration-200'  />
                </Link>
                </div>
                }
            </div>
        </>
    );
}

export default Cardstyle;