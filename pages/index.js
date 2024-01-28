import { Inter } from 'next/font/google'
import { data } from '@/data'
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card/Card'
import Banner from '@/components/Banner/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>       
      <main className={`${styles.main} ${inter.className}`}>
      <Banner />
        <h2 className={styles.title}>BEST-SELLER</h2>
         <div className={styles.background}>
            <Card 
              name={data.products[5].name} 
              price={data.products[5].price}
              picture={data.products[5].picture}
              url={data.products[5].url}
            />
             <Card 
              name={data.products[3].name} 
              price={data.products[3].price}
              picture={data.products[3].picture}
              url={data.products[3].url}
            />            
         </div>
         <div className={styles.background}>
            <Card 
              name={data.products[4].name} 
              price={data.products[4].price}
              picture={data.products[4].picture}
              url={data.products[4].url}
            />
             <Card 
              name={data.products[7].name} 
              price={data.products[7].price}
              picture={data.products[7].picture}
              url={data.products[7].url}
            />            
         </div>      
      </main>
    </>
  )
}