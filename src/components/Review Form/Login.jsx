import style from "./Form.module.css"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className={style.writeReview}>
      <h3>You have to <Link className={style.otherTours}>log in</Link> to write a review</h3>
    </div>
  )
}
export default Login