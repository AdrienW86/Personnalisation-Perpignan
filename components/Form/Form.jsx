import { useState, useEffect } from "react";
import styles from './form.module.css'
import { useForm } from "react-hook-form";

export default function Form() {
	
    const [isLoading, setIsLoading] = useState(false)  
    const [valable, setIsValable] = useState(false);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    useEffect(() => {
        if (typeof window !== 'undefined') {
          setIsValable(true);
        }
      }, []);

      const onSubmitHandler = async (data) => {
        if (!isLoading) {
            setIsLoading(true);
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
            console.log(response)
            console.log(result)
            setIsLoading(false);
    
            if (!response.ok) {
                console.log("error");
            } else {
                console.log("ok");
                reset();              
            }
        }
    };
  
  return (
    <>
    {valable ?
    <div style={{textAlign: "center"}}>
       
        <form 
            onSubmit={handleSubmit(onSubmitHandler)}
            className={styles.form}
        >  
          
            <h3> Une question ?</h3>
                <div className={styles.div}>
                   
                    <input 
                        placeholder='Prénom' 
                        id='prenom'
                        className={styles.input}
                        {...register('prenom', {required: true})}
                    />                     
                      {errors.phone && <p style={{ color: 'red', width: '100px'}}> requis</p>}                 
                </div>
                <div className={styles.div} >
                  
                    <input 
                        placeholder='Nom' 
                        name="nom" autoComplete="family-name"
                        id="nom"
                        className={styles.input}
                        {...register('nom', {required: true})} 
                    />    
                      {errors.phone && <p style={{ color: 'red', width: '100px'}}> requis</p>}       
                </div>
                 <div className={styles.div}>
                  
                    <input 
                        placeholder='Email' 
                        id="email" autoComplete="email"
                        className={styles.input}
                        {...register('email', {required: true})}
                    />
                    {errors.phone && <p style={{ color: 'red', width: '100px'}}> requis</p>} 
                </div>
                <div className={styles.div} >
                   
                    <input 
                        placeholder='Téléphone' 
                        id="phone" autoComplete="phone"
                        className={styles.input}
                        {...register('phone', {required: true})}
                    />
                    {errors.phone && <p style={{ color: 'red', width: '100px'}}> requis</p>} 
                </div>           
         
           
                <div className={styles.div} >
                    <textarea
                        rows="9"
                        id="message"
                        placeholder='Message'
                        className={styles.input}
                        {...register('message', {required: true})}
                    />
                     {errors.phone && <p style={{ color: 'red', width: '100px'}}> requis</p>}  
                </div>
                <div className={styles.box_btn}>
                  {!isLoading && <button className={styles.submit}> Envoyer </button> }
                </div>
           
        </form>
    </div>
    : null }

    </>
  )
}