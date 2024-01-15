import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Basket from '@/assets/basket.png';
import styles from './hamburger.module.css';

const Hamburger = ({productsLength}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    console.log("Clicked!");
    setIsMenuOpen(prevState => !prevState);
  };
  
  return (
    <section className={styles.hamburger_container}>
      <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`} onClick={handleMenuToggle}>
        <span className={styles.line}> </span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      <div className={styles.h1}>
        <p className={styles.p}> Personnalisation</p>
        <p className={styles.p}> Perpignan</p>
      </div>
      {isMenuOpen && (
        <ul className={styles.menu}>
          <li className={styles.menu_header}></li>
          <li className={styles.menu_link}><Link href='/'> Accueil </Link> </li>
          <li className={styles.menu_link}><Link href='/shop'> Boutique </Link>  </li>         
        </ul>
      )}
      <Link  href='/card'> 
        <li className={styles.menu_basket}>
          <Image 
            src={Basket}
            height={30}
            width={30}
            className={styles.logoBasket}
            alt="image du panier"
          />         
          {productsLength === 0 ? null : 
            <span className={styles.span}>{productsLength && `${productsLength}`}</span> 
          }
        </li>      
      </Link>
    </section>
  );
};
export default Hamburger;