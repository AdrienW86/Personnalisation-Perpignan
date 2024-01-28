import React from 'react'
import {data} from '@/data'
import Link from 'next/link';
import Card from '@/components/Card/Card'
import styles from '@/styles/Home.module.css'

export default function Shop() {
  return (
    <>
      <h2 className={styles.h2}> Top Ventes</h2>
      <section className={styles.container}>
        {data.products.map((el, index) => (                
          <Card 
            name={el.name} 
            price={el.price} 
            picture={el.picture}
            url={el.url}
          />       
        ))}
      </section>
      <h2 className={styles.h2}> Nouveautés </h2>
      <section className={styles.container}>
        {data.productsColor.map((el, index) => (
                    
            <Card 
              name={el.name} 
              price={el.price} 
              picture={el.picture}
              url={el.url}
              options={el.options}
            />           
          
        ))}
      </section>
    </>
  );
}