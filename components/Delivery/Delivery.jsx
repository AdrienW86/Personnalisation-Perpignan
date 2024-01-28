import React, { useState, useEffect } from 'react';
import styles from './delivery.module.css'

const Carousel = () => {
  const [texts] = useState(["LIVRAISON GRATUITE A PARTIR DE 80€ D'ACHATS", "BIENVENUE"]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return (
    <div className={styles.carousel}>
        <button className={styles.prev} onClick={handlePrev}>&#8249;</button>
            <div className={styles.text}>{texts[currentIndex]}</div>
        <button className={styles.next} onClick={handleNext}>&#8250;</button>     
    </div>
  );
};

export default Carousel;
