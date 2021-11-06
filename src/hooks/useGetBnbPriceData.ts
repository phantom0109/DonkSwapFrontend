import { useEffect, useState } from 'react'

const api = 'https://api.coingecko.com/api/v3/coins/wbnb?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false'

const useGetBnbPriceData = () => {
  const FAST_INTERVAL = 60000
  const [data, setData] = useState(null)  
  const [fast, setFast] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(async () => {
      setFast((prev) => prev + 1)
    }, FAST_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        const res = await response.json()

        setData(res)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [])

  return data
}

export default useGetBnbPriceData
