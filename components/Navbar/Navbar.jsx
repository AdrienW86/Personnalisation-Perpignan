import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Delivery from '@/components/Delivery/Delivery'
import Hamburger from '../Hamburger/Hamburger';
import styles from './navbar.module.css';

export default function Navbar() {
  const router = useRouter();
  const [productsLength, setProductsLength] = useState(0);

  useEffect(() => {
    if (router.pathname === '/success') {
      localStorage.clear();
    } else {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProductsLength(storedProducts.length);
    }

    const updateProductsLength = () => {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProductsLength(storedProducts.length);
    };

    window.addEventListener('cartChange', updateProductsLength);

    return () => {
      window.removeEventListener('cartChange', updateProductsLength);
    };
  }, [router.pathname]);

  return (
    <nav className={styles.nav}>   
      <Delivery /> 
      <Hamburger productsLength={productsLength}  className={styles.hamburger} />    
    </nav>
  );
}