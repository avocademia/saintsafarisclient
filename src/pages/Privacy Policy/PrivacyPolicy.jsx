import WhiteHeader from "../../components/White Header/WhiteHeader"
import Footer from "../../components/Footer/Footer"
import style from "./PrivacyPolicy.module.css"

const PrivacyPolicy = () => {
  return (
    <main className={style.page}>
        <WhiteHeader/>
        <section className={style.mainSection}>
      <h1>PRIVACY POLICY</h1>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>Information We Collect</h2></div>
               <div className={style.subTopicText}>
                  We collect the following types of personal information:
                  <ol> During Sign Up
                     <li className={style.terms}>Full Names</li>
                     <li className={style.terms}>email address</li>
                     <li className={style.terms}>date of birth</li>
                  </ol>
                  <ol> Through Forms within the application
                     <li className={style.terms}>Full Government Names</li>
                     <li className={style.terms}>Identification Numbers & Details</li>
                  </ol>
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>How We Use Your Information</h2></div>
               <div className={style.subTopicText}>
                  <ol>The information we collect is used to:
                     <li className={style.terms}>Facilitate the provision of our services, including bookings, safaris, and tours.</li>
                     <li className={style.terms}>Verify your identity for secure transactions and interactions.</li>
                     <li className={style.terms}>Communicate updates, notifications, and service-related messages.</li>
                     <li className={style.terms}>Improve and personalize your user experience on our platform.</li>
                     <li className={style.terms}>Comply with legal obligations and regulatory requirements.</li>
                  </ol>
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>Data Storage and Security</h2></div>
               <div className={style.subTopicText}>
                  <ol>
                     <li className={style.terms}>
                        Your information is stored securely 
                        and is protected against unauthorized access, 
                        misuse, alteration, or disclosure 
                        using industry-standard security measures. 
                        These include secure servers, 
                        data encryption, and access controls.
                     </li>
                     <li className={style.terms}>
                        While we take every reasonable precaution, 
                        no system is completely secure. 
                        Therefore, we cannot guarantee absolute security 
                        of your data.
                     </li>
                  </ol>
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>User Rights and Data Management</h2></div>
               <div className={style.subTopicText}>
                  Currently, users cannot fully edit their 
                  personal information on the platform. However, 
                  we are working to enhance this functionality and will 
                  notify you when this feature becomes available.
                  <ol>In the interim, users can:
                     <li className={style.terms}>
                        Request corrections or updates to their information 
                        by contacting our support team.
                     </li>
                     <li className={style.terms}>Request details about the data we hold about them.</li>
                  </ol>
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>Data Sharing and Disclosure</h2></div>
               <div className={style.subTopicText}>
                  <ol>
                     We do not sell or rent your personal 
                     information to third parties. 
                     However, we may share your data under 
                     the following circumstances:
                     <li className={style.terms}>With service providers who assist us in operating the platform or delivering our services, subject to confidentiality agreements.</li>
                     <li className={style.terms}>When required by law, such as to comply with a legal process or protect our legal rights.</li>
                     <li className={style.terms}>To prevent fraud, address security issues, or protect users' safety.</li>
                  </ol>
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>Cookies and Tracking Technologies</h2></div>
               <div className={style.subTopicText}>
                  Our website may use cookies and similar 
                  technologies to improve user experience, 
                  monitor site usage, and enhance service 
                  performance. You can adjust your browser 
                  settings to refuse cookies, but doing so 
                  may affect your use of certain features.
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>International Data Transfers</h2></div>
               <div className={style.subTopicText}>
                  As our company is based in Kisumu, Kenya, 
                  data is primarily processed and stored 
                  within Kenya. By using our platform, 
                  you consent to the transfer of your data 
                  to and within Kenya.
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>Updates to This Privacy Policy</h2></div>
               <div className={style.subTopicText}>
                  We may update this Privacy Policy from 
                  time to time to reflect changes in our 
                  practices or legal obligations. Any 
                  updates will be posted on this page, 
                  and the "Effective Date" will be 
                  revised accordingly.
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>Contqact Us</h2></div>
               <div className={style.subTopicText}>
                  <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us</p>
                  <p>Saint Tours and Safaris </p>
                  <p>Location: Kisumu Ports (Next to Marine School), New Station Road, House No. B28, Kisumu, Kenya. </p>
                  <p>Email: <a href="mailto:info@saintsafaris.com">info@saintsafariscom</a></p>
                  <p>Phone: <a href="tel:+254755487271">+254755487271 </a></p>
               </div>
            </article>
            <article className={style.subTopics}>
               <p>
                  By using our website, you acknowledge 
                  that you have read and understood this 
                  Privacy Policy and agree to its terms. 
                  Thank you for trusting Saint Tours and 
                  Safaris with your personal information!
               </p>
            </article>
      </section>
        <Footer/>
    </main>
    
  )
}
export default PrivacyPolicy