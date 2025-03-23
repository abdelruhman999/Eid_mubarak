'use client';
import Link from "next/link";
import { Suspense, useEffect, useState, type FC } from "react";
import style from "./Cardstyle.module.css";
import Image from "next/image";
import logo from "../../../assets/p_img13.png";

interface CardstyleProps {
  image: string;
  name: string;
  id: number;
}

const Cardstyle: FC<CardstyleProps> = ({ props }: any) => {

  const [img , setImg] = useState(props.image)
  return (
    <div className={`${style.card} relative`}>
      <div className={style.wrapper}>
        <div>
          {props.image && (
            <Image
              className={style["card-image"]}
              src={img}
              alt="logo"
              width={200}
              height={200}
            />  
          }
        </Suspense>
        </div>
        <div className={style["content"]}>
          <p className={style["title"]}>{props.name}</p>
        </div>
        

        <div className="flex gap-2">

          {props.colors.map((el: any, index: number) => {
            return (       
              <div
                onClick={()=>{
                const element =  props.colors.find((element:any)=> el.image == element.image) 
                setImg(element.image)   
              }}
               key={index}
               className="size-[30px] p-[2px]
               flex justify-center
               items-center rounded-full 
               border-[1.5px] cursor-pointer
                border-[#c5b3b3]  hover:border-gray-800" 
               >
                 <Image
                 src={el.image}
                 alt="logo"
                 className="rounded-full  hover:scale-80 duration-200"
                 width={25}
                 height={25}
                 />     
               
              </div>
            );
          })}

              <div
              onClick={()=>{
              setImg(props.image)   
            }}
             className="size-[30px] p-[12px]
             flex justify-center
             items-center rounded-full 
             border-[1px] cursor-pointer border-[#c5b3b3]" 
             >
              <p className="text-gray-500 text-[8px]">
                الاصلي
              </p>
            </div>
        </div>

      

        <Link
          href={`/product-details/${id}`}
          className={style["card-btn"]}
        >
          شاهد التفاصيل
        </Link>
      </div>

      <div className="bg-black absolute 
       w-[50px] h-[55px] 
       rounded-br-full
        top-0 left-0  flex items-center justify-center ">
           <p className="text-white pb-2  rotate-[-38deg]">
            {season}
           </p>
      </div>
    </div>
  );
};

export default Cardstyle;
