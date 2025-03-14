import type { FC } from 'react';

interface productProps {}

const product: FC<productProps> = () => {
    return (
        <div className='bg-blue-600 w-full p-[50px] text-center text-4xl'>
            prodct page under devoloper
        </div>
    );
}

export default product;
