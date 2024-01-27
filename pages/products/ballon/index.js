import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'; 
import Image from 'next/image';
import { data } from '@/data';
import styles from '@/pages/products/imageModal.module.css';

const Ballon = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(data.products[3]);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState()

  console.log(data.products[2])
  console.log(product)

  useEffect(() => {
    if (id) {
      const selectedProduct = data.products.find((el) => el.id === id) || data.productsColor.find((el) => el.id === id);
      if (selectedProduct) {
        setImage(selectedProduct.picture);
        setProduct(selectedProduct);
      } else {
        // Gérer le cas où le produit n'est pas trouvé
        console.log("Produit non trouvé pour l'ID:", id);
      }
    }
  }, [id]);

  const handleOptionClick = (newOption) => {
   setImage(newOption)
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
      {product &&    
        <div className={styles.modalBackdrop} >
          <div className={styles.modalContent}>
            <Image src={product.picture} alt="Fullscreen" className={styles.fullscreenImage} width={400} height={400}/>
            <div className={styles.title}>
                <h2 className={styles.h2}>{product.name}</h2>
                <p className={styles.price}>{product.price}€ </p>
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
              <h3 className={styles.h3}> Personnalisation </h3>
              <input className={styles.input} />  

              <div className={styles.quantity}>
                <h3 className={styles.h3quantity}> Quantité </h3>
                <select className={styles.select} value={quantity} onChange={handleQuantityChange}>
                  {[...Array(10)].map((_, index) => (
                    <option key={index} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Ballon;