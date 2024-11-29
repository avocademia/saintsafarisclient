import axios from "axios"
import authCheck from "./AuthCheck"

const tourBooking = async (formData) => {
    
    const devUrl = import.meta.env.VITE_DEV_URL
    const prodUrl = import.meta.env.VITE_PROD_URL
    const environment = import.meta.env.NODE_ENV
    
    try {
        
        const authorized = await authCheck()
        if (authorized === true) {
            await axios.post(`${environment ==='production'? prodUrl:devUrl}/api/tour-bookings`, formData);
        }
        
    } catch (error) {
        throw error
    }
}

export default tourBooking
