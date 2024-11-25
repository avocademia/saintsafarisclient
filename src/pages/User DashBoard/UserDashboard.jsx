import style from "./UserDashboard.module.css"
import { userData, clearUserData } from "../../Helpers"
import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
import logout from "../../hooks/logout"

const UserDashboard = () => {
  const { firstName } = userData() || {}
  const [redirect, setRedirect] = useState(false)

  const handleLogout = () => {
    logout()
    clearUserData()
    setRedirect(true)
  }

  return (
    <section className={style.page}>
      {redirect && <Navigate to="/" replace />}
      {!firstName ? (
        <button className={style.logOutBtn}>
          <Link to="/userauth">Sign In/Up</Link>
        </button>
      ) : (
        <button className={style.logOutBtn} onClick={handleLogout}>
          Log Out
        </button>
      )}
    </section>
  )
}

export default UserDashboard;
