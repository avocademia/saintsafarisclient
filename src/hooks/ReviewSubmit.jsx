import axios from 'axios'
import { userData } from '../Helpers'

const useSubmitReview = () => {
    const { userId, accessToken } = userData()
    const submitReview = async ({ tourTitle, review }) => {

        const devUrl = import.meta.env.VITE_DEV_URL
        const prodUrl = import.meta.env.VITE_PROD_URL
        
        try {
            if (!accessToken) {
                alert(`please log in or verify your email`, {
                    hideProgressBar: true,
                  })
            }
            const tour = tourTitle
            const response = await axios.post(
                `${devKey}/api/reviews`,
                {
                    ...review,
                    tour: tour 
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )

        } catch (error) {
            throw new Error('Error submitting review:', error)
        }
    };

    return submitReview
};

export default useSubmitReview
