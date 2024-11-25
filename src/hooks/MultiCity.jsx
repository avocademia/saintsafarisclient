import axios from "axios"

const multiCity = async ({cities, booking}) => {

    const devUrl = import.meta.env.VITE_DEV_URL
    const prodUrl = import.meta.env.VITE_PROD_URL
    const environment = import.meta.env.NODE_ENV
    const url = `${environment === 'production'? prodUrl:devUrl}/api/multi-city`

    const data = {
        cities,
        booking
    }

    try {
        const res = await axios.post(url, data)
    } catch (error) {
        throw error
    }
}

export default multiCity
