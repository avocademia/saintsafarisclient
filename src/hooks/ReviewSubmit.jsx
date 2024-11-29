import axios from 'axios'
import authCheck from './AuthCheck'

const useSubmitReview = async (data) => {

    const devUrl = import.meta.env.VITE_DEV_URL
    const prodUrl = import.meta.env.VITE_PROD_URL
    const environment = import.meta.env.NODE_ENV
    
    try {

        const authorized = await authCheck(data)
        if (authorized === true) {
            axios.post(`${environment === 'production'? prodUrl : devUrl}/api/reviews/create`, 
                {data},
            )
        }
        
    } catch (error) {
        throw error
    }
}

export default useSubmitReview
