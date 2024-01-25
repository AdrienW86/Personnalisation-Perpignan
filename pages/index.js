import { Inter } from 'next/font/google'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Banner/Banner'
import Banner2 from '@/assets/banner2.jpg'
import Form from '@/components/Form/Form'
import Phone from '@/assets/phone.png'
import Email from '@/assets/email.png'
import Adress from '@/assets/adress2.png'
import { data } from '@/data'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
  return (
    <>     
       <Banner />
      <main className={`${styles.main} ${inter.className}`}>
        <h2 className={styles.title}> Bienvenue sur notre site dédié aux cadeaux bébé personnalisés et autres !</h2>
         <div className={styles.background}>
         <Image 
                src={Banner2}
                fill
                priority       
                alt='banner'
            />    
          <p className={styles.p}>  {data.intro}</p>
         </div>
         <h2 className={styles.h2}> Précautions d'emploi </h2>
          <p className={styles.wash}> Assurez-vous de conserver la beauté de vos articles personnalisés 
              en suivant attentivement nos recommandations de lavage : 
          </p>
        <ul>
          <li className={styles.wash}> <span className={styles.spanWash}> Température :</span> <br></br>Respectez une limite de 30°C lors du lavage en machine pour préserver la qualité des matériaux. </li>
          <li className={styles.wash}> <span className={styles.spanWash}> Précaution avant lavage :</span> <br></br>  Avant de mettre votre article dans la machine à laver, retournez-le pour protéger les motifs et détails personnalisés. </li>
          <li className={styles.wash}> <span className={styles.spanWash}>Séchage optimal :</span> <br></br> Privilégiez le séchage à l'air libre, une méthode douce qui prolonge la durée de vie de votre article. </li>
          <li className={styles.wash}> <span className={styles.spanWash}>Repassage soigneux :</span> <br></br> Lorsque vous repassez, faites-le à l'envers du motif pour maintenir l'éclat des personnalisations. </li>
        </ul>
        <p className={styles.wash}> En suivant ces consignes, vous garantissez une préservation optimale de la qualité de vos articles personnalisés, assurant ainsi une expérience durable et agréable </p>
         
          <section className={styles.container}>
          <h2 className={styles.h2}> Contact </h2>
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
