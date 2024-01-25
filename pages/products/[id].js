import { useRouter } from 'next/router';
import { useState, useEffect} from 'react'; 
import Image from 'next/image';
import { data } from '@/data';
import styles from './imageModal.module.css'

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = data.products.find((el) => el.id === id) || data.productsColor.find((el) => el.id === id);

  const [option, setSelectedOption] = useState(product.picture)

  const [quantity, setQuantity] = useState(1);

  const handleOptionClick = (newOption) => {
    setSelectedOption(newOption);
    console.log(newOption)
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  useEffect(() => {

  },[option])

  return (
    <div>
      {option &&    
        <div className={styles.modalBackdrop} >
          <div className={styles.modalContent}>
            <Image src={option} alt="Fullscreen" className={styles.fullscreenImage} width={400} height={400}/>
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

export default ProductPage;



