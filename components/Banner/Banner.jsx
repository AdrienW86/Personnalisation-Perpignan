import React from 'react'
import Image from 'next/image'
import Banner1 from '@/assets/banner1.jpg'
import Banner2 from '@/assets/banner2.jpg'
import Banner3 from '@/assets/banner3.jpg'
import Slider from 'react-slick';
import styles from './banner.module.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Banner() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  
        autoplaySpeed: 3000,  
      };

  return (
    <Slider  {...settings}>
        <div className={styles.banner}>   
            <Image 
                src={Banner2}
                fill
                priority       
                alt='banner'
            />    
        </div>
        <div className={styles.banner}>
            <Image 
                src={Banner1}
                fill
                priority       
                alt='banner'
            />     
        </div>
        <div className={styles.banner}>
            <Image 
                src={Banner3}
                fill
                priority       
                alt='banner'
            />     
        </div>        
    </Slider>
  )
}