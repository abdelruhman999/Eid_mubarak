'use client';
import { RootState } from '@/redux/store';
import { useEffect, type FC } from 'react';
import { useSelector } from 'react-redux';
import Cardstyle from './CardStyle/Cardstyle';

interface ProductsList {}

const ProductsList : FC<ProductsList> = () => {
    const items = useSelector((state: RootState) => state.data.items);
    useEffect(()=>{
        if(items.length>0){
            console.log(items);
        }
    },[items])
   
    return (<>
        {items.length > 0 && (
          items.map((el:any) => (
            <Cardstyle 
              key={el.id} 
              image={el.image} 
              name={el.name} 
              id={el.id} 
              colors={el.colors} 
              el={el}
              season={el.season.name}
              />
          ))
        )}
    </>);
  };


export default ProductsList ;
