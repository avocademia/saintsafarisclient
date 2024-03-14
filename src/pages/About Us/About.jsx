import WhiteHeader from '../../components/White Header/WhiteHeader'
import Footer from "../../components/Footer/Footer"
import aboutUS from '../../assets/aboutUs.png'
import style from './About.module.css'

const About = () => {
  return (
    <main className={style.pageContainer}>
        <WhiteHeader/>
        <section className={style.firstSection}>
            <h2>About Us</h2>
            <h1>Travel Smart, Travel Saint</h1>
            <p>
                Welcome to Saint Travel & Safaris, where we redefine travel experiences 
                with expertly crafted packages, 
                seamless bookings, and unparalleled customer service.
            </p>
        </section>  
        <section className={style.secondSection}>
            <article className={style.leftContainer}>
                <h2>OUR MISSION</h2>
                <p>
                    our mission is to inspire, facilitate, 
                    and enhance unforgettable journeys, 
                    providing seamless solutions and unmatched experiences for every traveler.
                </p>
                <h2>OUR VISION</h2>
                <p>
                    Our vision is to become the foremost provider
                    of transformative travel experiences, setting the
                    standard for excellence and innovation in the industry.
                </p>
            </article>
            <article className={style.rightContainer}>
              <img src={aboutUS} alt="about us"/>
            </article>
        </section>
        <section className={style.fourthSection}> 
            <h1>Our Core Values</h1> 
            <article className={style.coreValuesContainer}> 
             <div className={style.valueContainer1}> 
              <h4>EXCELLENCE</h4> 
              <p> We strive for excellence in every aspect of our services, from meticulously crafted tour packages to seamless travel arrangements. Our commitment to excellence ensures unparalleled experiences for our valued clients. </p> 
             </div> 
             <div className={style.valueContainer2}> 
              <h4>INTEGRITY</h4> 
              <p> Integrity is at the core of everything we do. We uphold the highest ethical standards in all our interactions, fostering trust and transparency with our clients, partners, and stakeholders. </p> 
             </div> 
             <div className={style.valueContainer3}> 
              <h4>INNOVATION</h4> 
              <p> Embracing innovation drives us to constantly evolve and enhance our offerings. We harness the latest technologies and trends to deliver innovative solutions that and exceed the evolving needs of modern travelers. </p> 
             </div> 
            </article> 
        </section>  
        <Footer/>     
    </main>
  )
}
export default About