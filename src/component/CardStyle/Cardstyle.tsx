'use client';
import Link from "next/link";
import { useState, type FC } from "react";
import style from "./Cardstyle.module.css";
import Image from "next/image";
// import logo from "../../../assets/p_img13.png";
import { Color } from "@/types/product";

interface CardstyleProps {
  image: string;
  name: string;
  id: number;
  colors: Color[] ;
}

const Cardstyle: FC<CardstyleProps> = ({image , name , id , colors}: CardstyleProps) => {

  const [img , setImg] = useState(image)
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div>
          {image && (
            <Image
              className={style["card-image"]}
              src={img}
              alt="logo"
              width={200}
              height={200}
            />
          )}
        </div>
        <div className={style["content"]}>
          <p className={style["title"]}>{name}</p>
        </div>

        <div className="flex gap-2">

          {colors.map((el, index: number) => {
            return (       
              <div
                onClick={()=>{
                // const element =  props.colors.find((element:any)=> el.image == element.image) 
                setImg(el.image)   
              }}
               key={index}
               className="size-[30px] p-[2px]
               flex justify-center
               items-center rounded-full 
               border-[1px] cursor-pointer border-[#c5b3b3]" 
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
              setImg(image)   
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
    </div>
  );
};

export default Cardstyle;
