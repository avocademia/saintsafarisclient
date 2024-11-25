import style from "./Accordion.module.css"
import { useState } from "react"


const Accordion = ({data}) => {
    
    const [accordionOpen1, setAccordionOpen1] = useState(false)
    const [accordionOpen2, setAccordionOpen2] = useState(false)
    const [accordionOpen3, setAccordionOpen3] = useState(false)
        
    const accordionClass1 = `${accordionOpen1 ? style.visible : style.hidden}`
    const accordionClass2 = `${accordionOpen2 ? style.visible : style.hidden}`
    const accordionClass3 = `${accordionOpen3 ? style.visible : style.hidden}`
    return (
        <article className={style.accordionContainer}>
            <div className={style.accordion}>
                <button onClick={() => setAccordionOpen1(!accordionOpen1)} className={style.question}>
                    <h6>Ideal Travel dates</h6>
                    {accordionOpen1? <span>-</span> : <span>+</span>}
                </button>
                <div className={accordionClass1}>
                    <ul>
                        {Object.values(data.attributes.ideal_dates).map((date, index) => (
                            <li key={index}>
                                {date}
                            </li>
                        ))}
                    </ul>
                </div>
        </div> 
        <div className={style.accordion}>
                <button onClick={() => setAccordionOpen2(!accordionOpen2)} className={style.question}>
                    <h6>Disclaimer</h6>
                    {accordionOpen2? <span>-</span> : <span>+</span>}
                </button>
                <div className={accordionClass2}>
                {Object.values(data.attributes.disclaimer).map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}
                </div>
        </div>
        <div className={style.accordion}>
                <button onClick={() => setAccordionOpen3(!accordionOpen3)} className={style.question}>
                    <h6>Cancellations</h6>
                    {accordionOpen3? <span>-</span> : <span>+</span>}
                </button>
                <div className={accordionClass3}>
                    <ul>
                        {Object.values(data.attributes.cancellations).map((policy, id) => (
                            <li key={id}>
                                {policy}
                            </li>
                        ))}
                    </ul>
                </div>
        </div>
        </article>
    )
}

export default Accordion