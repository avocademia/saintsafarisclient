import logoBlue from "../../assets/logo.svg"
import { FaBars, FaTimes, FaWhatsapp, FaUser, FaInstagram, FaPhone, } from "react-icons/fa"
import { useRef } from "react"
import { Link } from "react-router-dom"
import style from "./BlueHeader.module.css"


const BlueHeader = () => {
    const navRef = useRef()
    const showNavBar = () => {
        navRef.current.classList.toggle(`${style.responsiveNav}`)
    }
  return (
    <header className={style.blueHeader}>
        <img className={style.logo} src={logoBlue}/>
        <nav ref={navRef} className={style.navMenu}>
            <Link className={style.blueNavItem} to="/">Home</Link>
            <Link className={style.blueNavItem} to="/tours">Tours</Link>
            <Link className={style.blueNavItem} to="/about">About Us</Link>
            <Link className={style.blueNavItem} to="/accommodationbooking">Accommodation</Link>
            <div className={style.buttonsContainer}>
                <Link to="/contact"><FaPhone className={style.blueHeaderButton}></FaPhone></Link>
                <a href="https://wa.me/254755487271" target="_blank"><FaWhatsapp className={style.blueHeaderButton}/></a>
                <a href="https://www.instagram.com/saintsafaris" target="_blank"><FaInstagram className={style.blueHeaderButton}/></a>
                <Link to ="/userdash"><FaUser className={style.blueHeaderButton}/></Link>
            </div>
            <button className={style.hamburgerButton}>
                <FaTimes onClick={showNavBar} className={style.activeHamburger}/>
            </button >
        </nav>
        <button className={style.hamburgerButton}>
                <FaBars onClick={showNavBar} className={style.blueHamburger}/>
        </button >
    </header>
  )
}
export default BlueHeader