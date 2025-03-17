'use client';
import Link from 'next/link';
import {type FC } from 'react';
import style from './Cardstyle.module.css';
interface CardstyleProps {}

const Cardstyle: FC<CardstyleProps> = () => {
 
    return (
      
        <div 
        className={style.card}
        >
          <div className={style.wrapper}>
            <div className={style[`card-image`]}>III</div>
            <div className={ style[`content`]}>
              <p className={style[`title`]}>UIVERSE PREMIUM FONT (REGULAR)</p>
              <p className={style[`title`]}>$3</p>
              <p className= {`${style[`title`] } ${style[`price`] } ${style[`old-price`] } `}>&nbsp;$6</p>
              <p></p>
            </div>
            <Link
              href="/product-details/1"
             className={style[`card-btn`]}>
              شاهد التفاصيل 
            </Link>
          </div>
          <p className={style[`tag`] }>-50%</p>
        </div>
        
    );
}

export default Cardstyle;