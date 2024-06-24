import style from "./Form.module.css"
import { Link } from "react-router-dom"

const Thankyou = () => {
  return (
    <div className={style.writeReview}>
      <h3>Thank you for reviewing our tour</h3>
      <Link className={style.otherTours} to="/tours">explore other tours</Link>
    </div>
  )
}
export default Thankyou