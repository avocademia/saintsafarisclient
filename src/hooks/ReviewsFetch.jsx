import { useState, useEffect } from "react"
import axios from "axios"

const ReviewsFetch = (tourId) => {

  const devUrl = import.meta.env.VITE_DEV_URL
  const prodUrl = import.meta.env.VITE_PROD_URL
  const environment = import.meta.env.NODE_ENV

    const [reviews, setReviews] = useState([])
    const url = `${environment === 'production'? prodUrl : devUrl}/api/get-reviews-by-id/${tourId}`

    useEffect(() => {

      const getReviews = async () => {

        try {
          const res = await axios.get(url)
          setReviews(res.data)
        } catch (error) {
          throw error
        }

      }
      getReviews()
    }, [])
      
    return { reviews }
}
export default ReviewsFetch