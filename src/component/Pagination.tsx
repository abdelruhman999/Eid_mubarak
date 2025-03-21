'use client';
import { increment, decrement } from "../redux/slices/counterSlice";
import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface PaginationProps {}

const Pagination: FC<PaginationProps> = () => {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();
    return (
            <div>

            <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-base h-10">
                <li>
                <button
                 onClick={() => dispatch(decrement())}
                 className="flex items-center
                  justify-center px-4
                  h-10 ms-0 leading-tight
                  text-gray-500 bg-white
                   border border-e-0
                   border-gray-300 rounded-s-lg
                   hover:bg-gray-100 hover:text-gray-700
                    dark:bg-gray-800 dark:border-gray-700
                     dark:text-gray-400 dark:hover:bg-gray-700
                      dark:hover:text-white">
                        Previous
                        </button>
                </li>
               
                <li>
                <button
                onClick={() => dispatch(increment())}
                 className="flex items-center
                 justify-center px-4 h-10
                 leading-tight text-gray-500
                 bg-white border border-gray-300
                 rounded-e-lg hover:bg-gray-100 hover:text-gray-700
                  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
                   dark:hover:bg-gray-700 dark:hover:text-white
                   ">
                    Next
                   </button>
                </li>
            </ul>
            </nav>

             <h1>القيمة الحالية: {count}</h1>
            
            </div>

     
    );
}

export default Pagination ;
