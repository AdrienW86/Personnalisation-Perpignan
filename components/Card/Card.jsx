import React from 'react';
import Image from 'next/image';
import Banner2 from '@/assets/banner2.jpg'
import styles from './card.module.css'

export default function Card(props) {
  return (
    <section className={styles.card}>
        <div className={styles.banner}>   
            <Image 
                src={props.picture}
                fill
                priority   
                className={styles.picture}    
                alt='banner'
            />    
        </div>
        <div>
            <p className={styles.name}> {props.name} </p>
        </div>
        <div>
            <p className={styles.price}>{props.price}€</p>
        </div>
    </section>
  )
}
