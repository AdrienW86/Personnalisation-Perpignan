import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '@/pages/products/imageModal.module.css';

export default function ProductDetails({ el }) {
  const [product, setProduct] = useState(el);
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current)
  };

  const cartChangeEvent = new Event('cartChange');

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleColorButtonClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const addToCart = () => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts.push(product);
    localStorage.setItem('products', JSON.stringify(storedProducts));
    console.log('Product added to the cart:', product);
    setProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
    alert('Le produit a bien été ajouté au panier');
  };

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
      {product &&    
        <div className={styles.modalBackdrop} >
          <div className={styles.modalContent}>
            <Slider {...settings} ref={sliderRef}>
              {product.options.map((el, index) => (
                <div key={index} className={styles.imgContainer}>
                  <Image 
                    src={el.img} 
                    fill
                    priority
                    alt={`Image ${index}`}              
                  />
                </div>
              ))}
            </Slider>
            <div className={styles.title}>
              <h2 className={styles.h2}>{product.name}</h2>
              <p className={styles.price}>{product.price}€ </p>
              <p className={styles.tva}> Taxes incluses.</p>
            </div>
            <div className={styles.custom}>
             
                 
                  <h3 className={styles.h3}> Couleur </h3>
                  {!product.color ?
                  <div className={styles.box_btn}>
                    {product.options.map((colorOption, index) => (
                      <button
                        key={index}
                        className={styles.btn}
                        onClick={() => handleColorButtonClick(index)}
                      >
                        {colorOption.color}
                      </button>
                    ))}
                  </div>
                  :
                  <div className={styles.box_btn}>
                     <button
                        className={styles.btn}
                      >
                        {product.color}
                      </button>
                    </div>

              }
              <h3 className={styles.h3}> Personnalisation </h3>
              <input placeholder='Ex: Prénom' className={styles.input} />  
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