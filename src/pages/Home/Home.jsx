import WhiteHeader from "../../components/White Header/WhiteHeader"
import Footer from "../../components/Footer/Footer"
import style from './Home.module.css'
import { Link } from "react-router-dom"
import {userData} from "../../Helpers"

const Home = () => {
  const {firstName} = userData() || {}; // Use an empty object as the default value

  return (
    <main className={style.homePage}>
      
      <WhiteHeader/>
      <section className={style.heroSection}>
          <h1>Welcome, {firstName} </h1>
          <p>
            Embark on a Journey with Saint Travel & Safaris!
            Unlock the Wonders of the World through our Curated Tour Packages and Exotic Destinations.
            Tailor Your Adventure with Seamless Customization.
            Let Your Wanderlust Lead the Way!
          </p>
          <button className={style.signupBtn}><Link to="/userauth">Sign Up</Link></button>
      </section>
      <section className={style.toursSection}>
        <h1>Popular Tours</h1>
        <div className={style.cardContainer}>
          
        </div>
      </section>
      <Footer className={style.homeFooter}/>
    </main>
  )
    
    
}
export default Home

/*
 
      
      
      */