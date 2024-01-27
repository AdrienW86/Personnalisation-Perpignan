import React, { useState } from 'react';
import Image from 'next/image';
import { data } from '@/data';
import styles from '@/pages/products/imageModal.module.css';

const Barboteuse = () => {
  const [product, setProduct] = useState(data.products[7]);
  const [quantity, setQuantity] = useState(1);
  const [activeColorBtn, setActiveColorBtn] = useState(0);
  const [image, setImage] = useState(data.products[7].picture)

  const handleOptionClick = (newOption) => {
    setImage(newOption);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleColorBtnClick = (index) => {
    setActiveColorBtn(index);
  };

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
      {product &&    
        <div className={styles.modalBackdrop} >
          <div className={styles.modalContent}>
            <Image src={image} alt="Fullscreen" className={styles.fullscreenImage} width={400} height={400}/>
            <div className={styles.title}>
              <h2 className={styles.h2}>{product.name}</h2>
              <p className={styles.price}>{product.price}€ </p>
              <p className={styles.tva}> Taxes incluses.</p>
            </div>
            <div className={styles.custom}>
              {product.options &&
                <div> 
                  <h3 className={styles.h3}> Couleur </h3>
                  <div className={styles.box_btn}>
                    {product.options.map((colorOption, index) => (
                      <button
                        key={index}
                        className={styles.btn}
                        style={{ backgroundColor: colorOption.background }}
                        onClick={() => handleOptionClick(colorOption.img)}
                      >
                        {colorOption.color}
                      </button>
                    ))}
                  </div>
                </div>
              }
              <h3 className={styles.h3}> Couleur écriture </h3>
              <div className={styles.boxBtnColor}>
                {['Or pailleté', 'Argent pailleté'].map((color, index) => (
                  <button
                    key={index}
                    className={`${styles.colorBtn} ${activeColorBtn === index ? styles.activeColorBtn : ''}`} // Appliquer une classe active si le bouton est actif
                    onClick={() => handleColorBtnClick(index)}
                  >
                    {color}
                  </button>
                ))}
              </div>
              <h3 className={styles.h3}> Personnalisation </h3>
              <input placeholder='Ex: Prénom'className={styles.input} />  

              <div className={styles.quantity}>
                <h3 className={styles.h3quantity}> Quantité </h3>
                <select className={styles.select} value={quantity} onChange={handleQuantityChange}>
                  {[...Array(10)].map((_, index) => (
                    <option key={index} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </div>
              <button className={styles.basketBtn}> Ajouter au panier </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Barboteuse;