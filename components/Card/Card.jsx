import React, { useState } from 'react';
import Image from 'next/image';
import styles from './card.module.css';
import { useRouter } from 'next/navigation';

const Card = ({ name, price, picture, url, options }) => {

  const router = useRouter()
  const [showModal, setShowModal] = useState(false);

  const handleShowImage = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const navigation = (url) => {
    router.push(`/products/${url}`)
  }

  return (
    <section className={styles.card}>
      <div className={styles.banner}>
        <Image
          src={picture}
          fill
          priority
          alt='banner'
          onClick={() => navigation(url)}
        />
      </div>
      <div>
        <p className={styles.name}> {name} </p>
      </div>
      <div>
        <p className={styles.price}>€ {price} EUR</p>
      </div>
     
     
    </section>
  );
};

export default Card;
