import style from "./UserDashboard.module.css"
import { clearUserData } from "../../Helpers"
import { userData } from "../../Helpers"
import { Link } from "react-router-dom"

const UserDashboard = () => {
  const {firstName} = userData() || {}
  const handleLogout = () => {
    clearUserData()
  };

  return (
    <section className={style.page}>
      {!firstName? <button className={style.logOutBtn}>
        <Link to="/userauth">Sign In/Up</Link>
      </button> : <button className={style.logOutBtn} onClick={handleLogout}>
        <Link to="/">Log Out</Link>
      </button>}
    </section>
  )
}

export default UserDashboard
