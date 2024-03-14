import WhiteHeader from "../../components/White Header/WhiteHeader"
import style from './TermsConditions.module.css'
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom"

const TermsnConditions = () => {
  return (
    <main className={style.tcPage}>
      <WhiteHeader/>
      <section className={style.mainSection}>
      <h1>TERMS AND CONDITIONS</h1>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>BOOKING & CONFIRMATION</h2></div>
               <div className={style.subTopicText}>
                  <ol>
                     <li className={style.terms}>All bookings are subject to availability and confirmation.</li>
                     <li className={style.terms}>To secure a booking, a deposit or full payment may be required.</li>
                     <li className={style.terms}>Once confirmed, bookings are subject to the cancellation and amendment policies outlined below.</li>
                  </ol>
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>PRICING & PAYMENT</h2></div>
               <div className={style.subTopicText}>
                  <ol>
                     <li className={style.terms}>Prices for tour packages are indicative and subject to change based on factors such as the time of year, exchange rates, accommodation rates, government tax rates, and other external factors.</li>
                     <li className={style.terms}>Full payment is required by the specified deadline to confirm the booking.</li>
                     <li className={style.terms}>Accepted payment methods include M-PESA, PayPal, Credit/Debit Cards & Cash Payment.</li>
                  </ol>
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>CANCELLATION & REFUNDS</h2></div>
               <div className={style.subTopicText}>
                  <ol>
                     <li className={style.terms}>Cancellations must be made in writing via email and are subject to the cancellation policies specific to each service or tour package.</li>
                     <li className={style.terms}>Refunds, if applicable, will be processed according to the refund policies outlined for each tour package.</li>
                     <li className={style.terms}>Additional fees or penalties may apply for cancellations or modifications.</li>
                  </ol>
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>HEALTH & SAFETY</h2></div>
               <div className={style.subTopicText}>
                  <ol>
                     <li className={style.terms}>Participants are responsible for ensuring compliance with health and safety guidelines, including vaccination requirements, <a class={style.bodyLinks} href="#">insurance</a>, and any specific health protocols for the destinations included in the tour packages.</li>
                     <li className={style.terms}>We recommend consulting with healthcare professionals and relevant authorities for up-to-date health and safety information.</li>
                  </ol>
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>LIABILITY & DEISCLAIMER</h2></div>
               <div className={style.subTopicText}>
                  <ol>
                     <li className={style.terms}>We strive to provide accurate and up-to-date information; however, we do not warrant the accuracy, completeness, or reliability of any information provided on our website or promotional materials.</li>
                     <li className={style.terms}>Participants are responsible for obtaining necessary <a class={style.bodyLinks} href="#">travel documentation</a>,<a class={style.bodyLinks} href="#">including visas</a> , passports, permits, and complying with applicable laws and regulations.</li>
                     <li className={style.terms}>We are not liable for any loss, damage, injury, or inconvenience arising from participation in our tour packages, except where prohibited by law.</li>
                  </ol>
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>DISPUTE RESOLUTION</h2></div>
               <div className={style.subTopicText}>
                  <ol>
                     <li className={style.terms}>Any disputes or complaints arising from these terms and conditions will be resolved in accordance with applicable laws and regulations.</li>
                     <li className={style.terms}>Parties agree to engage in good faith negotiations to resolve disputes amicably, and if necessary, seek legal remedies.</li>
                  </ol>
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>AMENDMENTS & UPDATES</h2></div>
               <div className={style.subTopicText}>
                  <ol>
                     <li className={style.terms}>We reserve the right to amend or update these terms and conditions at any time without prior notice.</li>
                     <li className={style.terms}>It is the responsibility of participants to review these terms and conditions periodically for updates and changes.</li>
                  </ol>
               </div>
            </article>
            <article className={style.subTopics}>
               <div className={style.subTopicHeading}><h2>GOVERNING LAW & JURISDICTION</h2></div>
               <div className={style.subTopicText}>
                  <ol>
                     <li className={style.terms}>These terms and conditions are governed by the laws of the Republic of Kenya.</li>
                     <li className={style.terms}>Any disputes or claims arising out of or in connection with these terms and conditions, including non-contractual disputes or claims, are subject to the exclusive jurisdiction of the courts of Kisumu, Kenya.</li>
                  </ol>
               </div>
            </article>
      </section>
        <Footer/>
    </main>
  )
}
export default TermsnConditions