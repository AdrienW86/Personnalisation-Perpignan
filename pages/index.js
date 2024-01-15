
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Banner/Banner'
import Card from '@/components/Card/Card'
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
   
      
      </main>
    </>
  )
}
