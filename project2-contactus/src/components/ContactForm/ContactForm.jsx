import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa"; 
import {HiMail} from "react-icons/hi";

const ContactForm = () => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
  }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>

            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
          </div>
          <Button text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>} isOutline={true}/>
          <form onSubmit={handleSubmit} >
            <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
            </div>
            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"/>
            </div>
            <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"/>
            </div>
            <div style={{display:"flex", justifyContent:"end"}}>

            <Button text="SUBMIT"/>                
            </div>
          </form>
        </div>
        <div className={styles.contact_image}>
          <img src="./images/contact.svg" alt="contact_image"/>
        </div>
    </section>
  )
}

export default ContactForm