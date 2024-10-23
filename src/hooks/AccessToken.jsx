import { useState, useEffect } from 'react'

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState(null)
 
  const devUrl = import.meta.env.VITE_DEV_URL
  const prodUrl = import.meta.env.VITE_PROD_URL
  const environment = import.meta.env.NODE_ENV

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await fetch(`${environment === 'production'? prodUrl : devUrl}/get-user-token`)
        if (response.ok) {
          const data = await response.json()
          setAccessToken(data.accessToken)
        } else {
          throw new Error('Failed to fetch access token')
        }
      } catch (error) {
        throw error
      }
    }

    fetchAccessToken()

    return () => setAccessToken(null)
  }, [])

  return accessToken
};

export default useAccessToken
