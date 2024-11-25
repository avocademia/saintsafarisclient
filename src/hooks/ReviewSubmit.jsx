import axios from 'axios'
import authCheck from './AuthCheck'

const useSubmitReview = async (data) => {

    console.log(data)

    const devUrl = import.meta.env.VITE_DEV_URL
    const prodUrl = import.meta.env.VITE_PROD_URL
    const environment = import.meta.env.NODE_ENV
    
    try {

        const authorized = await authCheck(data)
        console.log(authorized)
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
