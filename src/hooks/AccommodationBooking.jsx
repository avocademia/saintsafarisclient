import axios from "axios"
import authCheck from '../hooks/AuthCheck'
import { toast } from "react-toastify"

const accommodationBooking = async (data) => {
    
    const devUrl = import.meta.env.VITE_DEV_URL
    const prodUrl = import.meta.env.VITE_PROD_URL
    const environment = import.meta.env.NODE_ENV

    try {
        const authorized = await authCheck()
        if (authorized === true) {
            const response = await axios.post(`${environment === 'production' ? prodUrl : devUrl}/api/accommodation-booking`, data)
            return response.data
        } else {
            toast.error('Authorization failed. Please log in again.')
            return null
        }
    } catch (error) {
        toast.error('An error occurred while processing your booking. Please try again.')
        throw error
    }
}

export default accommodationBooking