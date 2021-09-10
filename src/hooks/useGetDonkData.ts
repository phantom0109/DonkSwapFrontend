import { useEffect, useState } from 'react'

type ApiResponse = {
  circulatingSupply: string
  burned: string
  totalBNBInPool: string
  liquidityPoolUSD: string
  marketcapUSD: string
  skPrice: string
}

const api = 'https://us-central1-donkswap-api.cloudfunctions.net/getDonkData'

const useGetDonkData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)
  const FAST_INTERVAL = 60000
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
        const res: ApiResponse = await response.json()

        setData(res)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [fast])

  return data
}

export default useGetDonkData
