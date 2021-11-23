import { useEffect, useState } from 'react'
import moment from 'moment'

type ApiResponse = object

const api = 'https://us-central1-projectsidekick-9feaf.cloudfunctions.net/getCandleData'

const useGetChartData = () => {
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
        let dateTimeFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
        let startDate = moment().utc().subtract(7, 'd');
        let endDate = moment(startDate).add(7, 'd');

        
        let params = {
          tokenAddress: '0x3969Fe107bAe2537cb58047159a83C33dfbD73f9',
          timeframe: (7).toString(), 
          since: startDate.format(dateTimeFormat), 
          till: endDate.format(dateTimeFormat),
          network: 'bsc'
        }
        let url = new URL(api);
        url.search = new URLSearchParams(params).toString();
        const response = await fetch(url.toString());
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

export default useGetChartData
