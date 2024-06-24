import { useState, useEffect } from 'react'
import axios from 'axios'

const fetchSingleTour = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {

      const devUrl = import.meta.env.VITE_DEV_URL
      const prodUrl = import.meta.env.VITE_PROD_URL
      const apiToken = import.meta.env.VITE_API_TOKEN

      try {

        const res = await axios.get(
          `${devUrl}/api/tours?populate[media]=true&populate[display_picture]=true&`,
          {
            headers: {
              Authorization: `Bearer ${apiToken}`,
            },
          }
        );
        setData(res.data.data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, error, loading }
};

export default fetchSingleTour
