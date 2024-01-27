import React, { useState } from 'react';
import Image from 'next/image';
import { data } from '@/data';
import styles from '@/pages/products/imageModal.module.css';

const Sac = () => {
  const [product, setProduct] = useState(data.products[6]);
  const [quantity, setQuantity] = useState(1);
  const [activeColorBtn, setActiveColorBtn] = useState(0);
  const [products, setProducts] = useState([]);

  const cartChangeEvent = new Event('cartChange');

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

  const addToCart = () => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts.push(product); // Ajoute directement l'objet props sans modification
    localStorage.setItem('products', JSON.stringify(storedProducts));
    console.log('Product added to the cart:', product);
    setProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
    alert('Le produit a bien été ajouté au panier');
  };


  return (
    <div>
      {product &&    
        <div className={styles.modalBackdrop} >
          <div className={styles.modalContent}>
            <Image src={product.picture} alt="Fullscreen" className={styles.fullscreenImage} width={400} height={400}/>
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
              <button className={styles.basketBtn} onClick={addToCart}> Ajouter au panier </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Sac;