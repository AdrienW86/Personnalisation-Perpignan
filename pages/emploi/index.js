import React from 'react'
import styles from '@/styles/Home.module.css'

export default function index() {
  return (
   <section className={styles.infos}>
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
   </section>
  )
}
