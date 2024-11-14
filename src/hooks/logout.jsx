import axios from 'axios'
import { clearUserData, userData } from '../Helpers'
import { toast } from 'react-toastify'

const devUrl = import.meta.env.VITE_DEV_URL
const prodUrl = import.meta.env.VITE_PROD_URL
const environment = import.meta.env.NODE_ENV

const logout = async () => {
    const {userId} = userData()
    
    try{
        await axios.delete(`${environment=== 'production'? prodUrl:devUrl}/api/logout/${userId}`)
    } catch (error) {
        clearUserData()
    }
}

export default logout
