import logoBlue from "../../assets/logoWhite.png"
import { FaBars, FaTimes, FaWhatsapp, FaUser, FaInstagram, FaPhone, } from "react-icons/fa"
import { useRef } from "react"
import { Link } from "react-router-dom"
import style from "./WhiteHeader.module.css"


const WhiteHeader = () => {
    const navRef = useRef()
    const showNavBar = () => {
        navRef.current.classList.toggle(`${style.responsiveNav}`)
    }
  return (
    <header className={style.whiteHeader}>
        <img className={style.logo} src={logoBlue}/>
        <nav ref={navRef} className={style.navMenu}>
            <Link className={style.whiteNavItem} to="/">Home</Link>
            <Link className={style.whiteNavItem} to="/tours">Tours</Link>
            <Link className={style.whiteNavItem} to="/about">About Us</Link>
        <div className={style.buttonsContainer}>
            <Link to="/contact"><FaPhone className={style.whiteHeaderButton}/></Link>
            <a href="https://wa.me/254755487271" target="_blank"><FaWhatsapp className={style.whiteHeaderButton}/></a>
            <a href="https://www.instagram.com/saintsafaris" target="_blank"><FaInstagram className={style.whiteHeaderButton}/></a>
            <Link to="/userdash"><FaUser className={style.whiteHeaderButton}/></Link>
        </div>
            <button className={style.hamburgerButton}>
                <FaTimes onClick={showNavBar} className={style.activeHamburger}/>
            </button >
        </nav>
        <button className={style.hamburgerButton}>
                <FaBars onClick={showNavBar} className={style.whiteHamburger}/>
        </button >
    </header>
  )
}
export default WhiteHeader