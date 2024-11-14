import axios from 'axios'
import { userData } from '../Helpers'

const useSubmitReview = () => {
    const { userId, accessToken } = userData()
    const submitReview = async ({ tourTitle, review }) => {

        const devUrl = import.meta.env.VITE_DEV_URL
        const prodUrl = import.meta.env.VITE_PROD_URL
        const environment = import.meta.env.NODE_ENV
        
        try {
            if (!accessToken) {
                alert(`please log in or verify your email`, {
                    hideProgressBar: true,
                  })
            }
            const tour = tourTitle
            const response = await axios.post(
                `${environment === 'production'? prodUrl : devUrl}/api/reviews`,
                {
                    ...review,
                    tour: tour 
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    withCredentials:true
                }
            )
            return response
        } catch (error) {
            throw new Error('Error submitting review:', error)
        }
    };

    return submitReview
};

export default useSubmitReview
