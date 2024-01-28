import React from 'react'
import Image from 'next/image'
import Form from '@/components/Form/Form'
import Phone from '@/assets/phone.png'
import Email from '@/assets/email.png'
import Adress from '@/assets/adress2.png'
import styles from './contact.module.css'

export default function index() {
  return (
    <section className={styles.container}>
      <h2 className={styles.h2}> Contact </h2>
      <Form />
        <section className={styles.infos}>
          <div className={styles.contact_h3}>
            <Image 
              src={Phone}
              height={32}
              width={32}
              className={styles.logoBasket}
              alt="image du panier"
            />  
            <h3 className={styles.h3}> 06.66.64.35.42</h3>
          </div>
          <div className={styles.contact_h3}>
            <Image 
              src={Email}
              height={32}
              width={32}
              className={styles.logoBasket}
              alt="image du panier"
            />  
            <h3 className={styles.h3} > Gildelin_mejia@outlook.fr</h3>
          </div>
          <div className={styles.contact_h3}>
            <Image 
              src={Adress}
              height={32}
              width={32}
              className={styles.logoBasket}
              alt="image du panier"
            />  
            <h3 className={styles.h3}> 28 Avenue du Général Guillaut 66000 Perpignan</h3>
          </div>
        </section>
    </section>
  )
}