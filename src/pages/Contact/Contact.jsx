import BlueHeader from "../../components/Blue Header/BlueHeader"
import Footer from "../../components/Footer/Footer"
import style from "./Contact.module.css"
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa"
import { useState } from "react"
import { toast } from 'react-toastify'
import axios from 'axios'

const Contact = () => {

        const [formData, setFormData] = useState({
          full_name: '',
          email: '',
          subject: '',
          message: '',
        });
      
        const handleInputChange = (e) => {
          const { name, value } = e.target
          setFormData({ ...formData, [name]: value })
        };
      
        const handleSubmit = async (e) => {

            const devUrl = import.meta.env.VITE_DEV_URL
            const prodUrl = import.meta.env.VITE_PROD_URL

          e.preventDefault()
          try {
            const response = await axios.post(`${devUrl}/api/queries`, formData)
            toast('Query Successfully sent! We will contact you soon.', {
            hideProgressBar: true});

            setFormData({
              full_name: '',
              email: '',
              subject: '',
              message: '',
            });
          } catch (error) {
            toast (`Error submitting form. Please try again later`, {
                hideProgressbar: true,
            })
          }
        }
  return (
    <main className={style.page}>
        <BlueHeader/>
        <section className={style.containerOne}> 
            <article className={style.contactsOne}>
                <a href="tel:+254722455782">
                    <div className={style.contactOption}>
                        <div className={style.iconHolder}>
                            <FaPhone className={style.icon}/>
                        </div>
                        <div className={style.textHolder}>
                            <h4>Phone Number</h4>
                            <span>+254722455782</span>
                        </div>
                    </div>
                </a>
                <a href="tel:+254755487271">
                    <div className={style.contactOption}>
                        <div className={style.iconHolder}>
                            <FaPhone className={style.icon}/>
                        </div>
                        <div className={style.textHolder}>
                            <h4>Phone Number</h4>
                            <span>+254755487271</span>
                        </div>
                    </div>
                </a>
                <a href="https://wa.me/254722455782" target="_blank">
                    <div className={style.contactOption}>
                        <div className={style.iconHolder}>
                            <FaWhatsapp className={style.icon}/>
                        </div>
                        <div className={style.textHolder}>
                            <h4>WhatsApp</h4>
                            <span>+254722455782</span>
                        </div>
                    </div>
                </a>
                <a href="mailto:customercare@saintsafaris.com">
                    <div className={style.contactOption}>
                        <div className={style.iconHolder}>
                            <FaEnvelope className={style.icon}/>
                        </div>
                        <div className={style.textHolder}>
                            <h4>Mail</h4>
                            <span>customercare@saintsafaris.com</span>
                        </div>
                    </div>
                </a>
            </article>
            <article className={style.message}>
                <h2>Send A Message</h2>
                <form onSubmit={handleSubmit}>
                    <div className={style.labelContainer}>
                        <label htmlFor="full_name" id="labels" className={style.labels}>Full Name</label>
                    </div>
                    <div className={style.fieldContainer}>
                        <input type="text" name="full_name" className={style.inputs} autoComplete="name" placeholder="Full Name" value={formData.full_name} onChange={handleInputChange}/>
                    </div>
                    <div className={style.labelContainer}>
                        <label htmlFor="email">Email:</label>
                     </div>
                    <div className={style.fieldContainer}>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </div>  
                    <div className={style.labelContainer}>
                        <label htmlFor="subject" id="labels" className={style.labels}>Subject</label>
                    </div>
                    <div className={style.fieldContainer}>
                        <input type="text" name="subject" id="subject" className={style.inputs} autoComplete="subject" placeholder="subject" value={formData.subject} onChange={handleInputChange}/>
                     </div>
                     <div className={style.labelContainer}>
                        <label htmlFor="message" id="labels" className={style.labels}>Message</label>
                     </div>
                    <div className={style.fieldContainer}>
                        <textarea name="message" id="message" cols="30" rows="10" value={formData.message} onChange={handleInputChange}></textarea>
                    </div>
                    <div className={style.fieldContainer}>
                    <button className={style.submitBtn} type="submit">Submit</button>
                    </div>
                </form>
            </article>
            <div className={style.contactsTwo}>
                <a href="tel:+254722455782">
                        <FaPhone className={style.icon2}/>
                </a>
                <a href="tel:+254755487271" target="_blank">
                        <FaPhone className={style.icon2}/>
                </a>
                <a href="https://wa.me/254722455782" target="_blank">
                        <FaWhatsapp className={style.icon2}/>
                </a>
                <a href="mailto:customercare@saintsafaris.com">
                        <FaEnvelope className={style.icon2}/>
                </a>
            </div>
        </section> 
        <Footer/>
    </main>
    
  )
}
export default Contact