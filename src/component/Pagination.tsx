import { sendRequest } from '@/api';
import { Product } from '@/types/product';
import { useEffect, useState, type FC } from 'react';

interface PaginationProps {}

const Pagination: FC<PaginationProps> = () => {
    const [products,setProducts] = useState<Product[]>([]);
    const [page,setPage] = useState(1);
    useEffect(()=>{
        sendRequest({
            url:"/api/products",
            method:"GET",
            params:{page:String(page)}
        }).then((res)=>{
            console.log(res);

        }).catch((err)=>{
            console.log(err);
        })
    },[page])

    return (
   
        <>

        </>
     
    );
}

export default Pagination ;
