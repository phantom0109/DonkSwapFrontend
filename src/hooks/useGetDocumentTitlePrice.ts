import { useEffect } from 'react'
// import { CAKE } from '../constants'

const useGetDocumentTitlePrice = () => {

  const cakePriceUsd = `The Official Rug-Proof BSC Exchange`;

  useEffect(() => {
    document.title = `DonkSwap - ${cakePriceUsd}`
  }, [])
}
export default useGetDocumentTitlePrice