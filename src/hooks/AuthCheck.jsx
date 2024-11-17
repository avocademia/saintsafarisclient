import {storeToken, userData} from '../Helpers'
import axios from 'axios'

const authCheck = async () => {
    
    const {accessToken, username, userId} = userData()
    const devUrl = import.meta.env.VITE_DEV_URL
    const prodUrl = import.meta.env.VITE_PROD_URL
    const environment = import.meta.env.NODE_ENV

    try {
        const response = await axios.get(
            `${environment === 'production' ? prodUrl : devUrl}/api/authcheck/${userId}/${username}`, 
            {
              headers: { Authorization: `Bearer ${accessToken}` },
              withCredentials: true,
            }
        )

        if (response.data.jwt) {
            storeToken(response.data.jwt)
        }
        return response.data.authorized
        
    } catch (error) {
        console.log(error)
        throw error
    }
}
  
export default authCheck