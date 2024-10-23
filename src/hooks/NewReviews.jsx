import { useEffect } from 'react'
import axios from 'axios'

const useNewReviews = (id, setUpdateReviews) => {

  const devUrl = import.meta.env.VITE_DEV_URL
  const prodUrl = import.meta.env.VITE_PROD_URL
  const environment = import.meta.env.NODE_ENV
  
  useEffect(() => {
    const fetchNewReviews = async () => {
      try {
        const res = await axios.get(`${environment === 'production'? prodUrl : devUrl}/api/tours/${id}?populate[reviews][populate][user]=true/`)

      } catch (error) {
        throw error
      }
    }

    if (setUpdateReviews) {
      fetchNewReviews()
    }
  }, [id, setUpdateReviews])
}

export default useNewReviews
