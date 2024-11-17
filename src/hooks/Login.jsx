import axios from "axios"
import { storeToken, storeUser } from "../Helpers"
import { toast } from "react-toastify"

const login = async (user) => {

  const devUrl = import.meta.env.VITE_DEV_URL
  const prodUrl = import.meta.env.VITE_PROD_URL
  const environment = import.meta.env.NODE_ENV
  const url = `${environment === 'production'? prodUrl:devUrl}/api/auth/local`

    try {

      if (user.identifier && user.password) {
        
            const res = await axios.post(url, user, {withCredentials: true})
            const {data} = res

            if (data.jwt && data.user) {
                toast.success("logged In succesfully",{
                hideProgressBar: true,
                })
                storeUser(data.user)
                storeToken(data.jwt)
            }
      }
    } catch (error) {
      toast("An error occured please try again later", {
        hideProgressBar: true,
      })
      throw error
    }
}

export default login
