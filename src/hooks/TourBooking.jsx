import axios from "axios"
import { setCookie } from "../Helpers"

const tourBooking = async (formData) => {
    
    const devUrl = import.meta.env.VITE_DEV_URL
    const prodUrl = import.meta.env.VITE_PROD_URL
    const environment = import.meta.env.NODE_ENV
    
    try {
        
        const response = await axios.post(`${environment ==='production'? prodUrl:devUrl}/api/tour-bookings`, formData, {
            withCredentials: true
        })
        if (response.data.jwt && typeof response.data.jwt === 'string') {
            setCookie('acst', response.data.jwt, 30)
        }
        return response.data
        
    } catch (error) {
        throw error
    }
}

export default tourBooking
