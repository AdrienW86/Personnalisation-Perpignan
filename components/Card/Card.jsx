import React, { useState } from 'react';
import Image from 'next/image';
import styles from './card.module.css';

const Card = ({ name, price, picture, options }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowImage = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.card}>
      <div className={styles.banner}>
        <Image
          src={picture}
          layout="fill"
          priority
          className={styles.picture}
          alt='banner'
          onClick={handleShowImage}
        />
      </div>
      <div>
        <p className={styles.name}> {name} </p>
      </div>
      <div>
        <p className={styles.price}>{price}€</p>
      </div>
     
     
    </section>
  );
};

export default Card;
