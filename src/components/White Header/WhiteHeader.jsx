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
                <button>
                    <FaPhone className={style.whiteHeaderButton}/>
                </button>
                <button>
                    <FaWhatsapp className={style.whiteHeaderButton}/>
                </button>
                <button>
                    <FaInstagram className={style.whiteHeaderButton}/>
                </button >
                <button>
                    <FaUser className={style.whiteHeaderButton}/>
                </button>   
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