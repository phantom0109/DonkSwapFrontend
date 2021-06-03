import { useEffect } from 'react'
// import { CAKE } from '../constants'

const useGetDocumentTitlePrice = () => {

  const cakePriceUsd = `Elon's Favorite Swap`;

  useEffect(() => {
    document.title = `DonkSwap - ${cakePriceUsd}`
  }, [])
}
export default useGetDocumentTitlePrice
