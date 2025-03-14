import Products from '@/component/Products';
import type { FC } from 'react';

interface productProps {}

const product: FC<productProps> = () => {
    return (
        <div className='w-full'>
           <Products />
        </div>
    );
}

export default product;
