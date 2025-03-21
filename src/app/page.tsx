
import Carousel from '@/component/Carousel';
import Pagination from '@/component/Pagination';
import Products from '@/component/Products';
import type { FC } from 'react';


interface productProps {}

const product: FC<productProps> = () => {
    return (
        <div className='w-full flex flex-col pt-[50px] items-center gap-[20px]'>
            <Carousel/>
             <Products/>
             <Pagination />
              
        </div>
    );
}

export default product;
