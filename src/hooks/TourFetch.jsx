import { useState, useEffect } from 'react'
import axios from 'axios'

const fetchSingleTour = (url) => {

  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {

        const res = await axios.get(url)
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
