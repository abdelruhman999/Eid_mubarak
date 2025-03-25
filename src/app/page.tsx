
import InputName from '@/component/InputName';
import type { FC } from 'react';
export const metadata = {
    title: "Home Prodcut",
    description: "This is the home page of the website", 
  }
  
interface productProps {}

const product: FC<productProps> = ({}:productProps) => 
{
    return (
        <div className='w-full flex flex-col  items-center gap-[20px]'>
         <InputName/>
        </div>
    );
}

export default product;
