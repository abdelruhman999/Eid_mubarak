'use client'
import { sendRequest } from '@/api';
import { Pagination as result } from '@/types/base';
import { HomeProduct } from '@/types/product';
import { useEffect, useState, type FC } from 'react';


interface PaginationProps {}

const Pagination: FC<PaginationProps> = () => {
    const [page , setPage] = useState<number>(2)
    const [show , setShow] = useState<string | null>(null)

    useEffect(()=>{
        sendRequest<result<HomeProduct>>({
            url:'/api/products',
            method:'GET',
            params:{
                page:String(page),   
            }
        }).then((res)=>{
            console.log(res);
            setShow(res.next);
            console.log(res.next);  
        }).catch((err)=>{
            console.log(err);
        })
      console.log(page);
    },[page])
   
    return (
     
            <>
                {
                 show &&
                        <div
                        onClick={()=>{
                            setPage(page+1)
                        }}
                        className='text-sm cursor-pointer font-semibold 
                        border-2 border-black p-[10px] text-gray-700
                        hover:text-white duration-200 hover:bg-gray-900'>   
                        اظهار الكل
                        </div>
                }
            </>
           

          
        

     
    );
}

export default Pagination ;
