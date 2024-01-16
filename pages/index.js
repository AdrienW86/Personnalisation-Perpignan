import { Inter } from 'next/font/google'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Banner/Banner'
import Card from '@/components/Card/Card'
import Form from '@/components/Form/Form'
import Phone from '@/assets/phone.png'
import Email from '@/assets/email.png'
import Adress from '@/assets/adress2.png'
import {data} from '@/data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(data)
  return (
    <>     
       <Banner />
      <main className={`${styles.main} ${inter.className}`}>
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
          <h2 className={styles.h2}> Contact </h2>
          <section className={styles.container}>
         
           <Form />


           <div className={styles.contact_h3}>
           <Image 
            src={Email}
            height={32}
            width={32}
            className={styles.logoBasket}
            alt="image du panier"
          />  
           <h3 className={styles.h3}> 06.66.64.35.42</h3>
           </div>
           <div className={styles.contact_h3}>
           <Image 
            src={Phone}
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
   
      
      </main>
    </>
  )
}
