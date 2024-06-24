import { useEffect, useState } from 'react'
import axios from 'axios'
import { userData } from "../Helpers"

const useReviewCheck = (id) => {
  const [isReviewAdded, setIsReviewAdded] = useState(false)
  const { username } = userData()

  const devUrl = import.meta.env.VITE_DEV_URL
  const prodUrl = import.meta.env.VITE_PROD_URL
  
  useEffect(() => {
    const fetchUserReviews = async () => {
      try {

        if (username) {

          const response = await axios.get(`${devUrl}/api/reviews-by-tourid-username/${id}/${username}`);

          if (response.data.length > 0) {
            setIsReviewAdded(true)
          } else {
            setIsReviewAdded(false)
          }

        }
        
      } catch (error) {
        throw error
      }
    }

    fetchUserReviews()
  }, [id, username])

  return isReviewAdded
};

export default useReviewCheck
