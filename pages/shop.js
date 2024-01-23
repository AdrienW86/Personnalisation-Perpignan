import React from 'react'
import {data} from '@/data'
import Card from '@/components/Card/Card'
import Banner from '@/components/Banner/Banner'
import styles from '@/styles/Home.module.css'

export default function shop() {
  return (
    <>
     <Banner />
     <h2 className={styles.h2}> Top Ventes</h2>
          <section className={styles.container}>
            {data.top.map((el, index) => (
              <Card 
                key={index} 
                name={el.name} 
                price={el.price} 
                picture={el.picture}
              /> 
            ))}
          </section>
          <h2 className={styles.h2}> Nouveautés </h2>
          <section className={styles.container}>
            {data.new.map((el, index) => (
              <Card 
                key={index} 
                name={el.name} 
                price={el.price} 
                picture={el.picture}
              /> 
            ))}
          </section>
    </>
  )
}