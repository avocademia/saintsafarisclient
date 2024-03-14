import style from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FaPhone, FaWhatsapp, FaInstagram, FaTiktok  } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer> 
         <div className={style.footerIcons}> 
                 <button className={style.footerBtn}>
                   <Link to="/contact"><FaPhone className={style.icons}/></Link>
                 </button>
                 <button className={style.footerBtn}>
                    <a href="" target='_blank'><FaWhatsapp className={style.icons}/></a>
                 </button>
                 <button className={style.footerBtn}>
                    <a href="https://www.instagram.com" target='_blank'><FaInstagram className={style.icons}/></a> 
                 </button>
                 <button className={style.footerBtn}>
                    <a href="https://www.tiktok.com" target='_blank'><FaTiktok className={style.icons}/></a> 
                 </button>
         </div> 
         <div className={style.footerPages}> 
          <ul> 
           <li><Link to="/privacypolicy">Privacy Policy</Link></li> 
           <li><Link to="/terms+conditions">Terms &amp; Conditions</Link></li> 
          </ul> 
         </div> 
         <div className={style.copyrightStatement}> 
          <p>Saint Travel &amp; Safaris © 2024 All Rights Reserved</p> 
         </div> 
        </footer> 
  )
}
export default Footer