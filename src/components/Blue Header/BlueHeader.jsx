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
            <div className={style.buttonsContainer}>
                <button>
                    <FaPhone className={style.blueHeaderButton}/>
                </button>
                <button>
                    <FaWhatsapp className={style.blueHeaderButton}/>
                </button>
                <button>
                    <FaInstagram className={style.blueHeaderButton}/>
                </button >
                <button>
                    <FaUser className={style.blueHeaderButton}/>
                </button>   
            </div>
            <button className={style.hamburgerButton}>
                <FaTimes onClick={showNavBar} className={style.activeHamburger}/>
            </button >
        </nav>
        <button className="hamburgerButton">
                <FaBars onClick={showNavBar} className={style.blueHamburger}/>
        </button >
    </header>
  )
}
export default BlueHeader