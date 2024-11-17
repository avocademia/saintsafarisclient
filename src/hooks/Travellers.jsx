import axios from "axios"

const travellers = async ({travelers, booking}) => {
    
    const devUrl = import.meta.env.VITE_DEV_URL
    const prodUrl = import.meta.env.VITE_PROD_URL
    const environment = import.meta.env.NODE_ENV
    const url = `${environment === 'production'? prodUrl:devUrl}/api/travellers`

    const data = {
        travelers,
        booking
    }

    try {
        const res = axios.post(url, data)
        return res
    } catch (error) {
        throw error
    }

}

export default travellers