import { Inter } from 'next/font/google'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Banner/Banner'
import Banner2 from '@/assets/banner2.jpg'

import { data } from '@/data'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
  return (
    <>     
       
      <main className={`${styles.main} ${inter.className}`}>
      <Banner />
        <h2 className={styles.title}> Bienvenue sur notre site dédié aux cadeaux bébé personnalisés et autres !</h2>
         <div className={styles.background}>
         <Image 
            src={Banner2}
            fill
            priority       
            alt='banner'
            className={styles.banner}
          />    
          <p className={styles.p}>  {data.intro}</p>
         </div>
         
         
   
      
      </main>
    </>
  )
}
