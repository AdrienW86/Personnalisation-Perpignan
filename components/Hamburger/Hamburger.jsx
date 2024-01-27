import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/ms-logo2.png'
import Basket from '@/assets/panier.png';
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
        <Image 
          src={Logo}
          height={100}
          width={100}
          className={styles.logoBasket}
          alt="image du panier"
        />        
      </div>
      {isMenuOpen && (
         <ul className={styles.menu}>
          <li className={styles.menu_link}><Link href='/' onClick={handleMenuToggle}> Accueil </Link> </li>
          <li className={styles.menu_link}><Link href='/products' onClick={handleMenuToggle}> Boutique </Link>  </li>   
          <li className={styles.menu_link}><Link href='/contact' onClick={handleMenuToggle}>Contact </Link>  </li>
          <li className={styles.menu_link}><Link href='/emploi' onClick={handleMenuToggle}> Précautions d'emploi </Link>  </li>
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