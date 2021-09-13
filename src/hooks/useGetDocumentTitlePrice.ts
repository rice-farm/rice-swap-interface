import { useEffect } from 'react'
import useGetCakeBusdLpPrice from 'utils/useGetCakeBusdLpPrice'

const useGetDocumentTitlePrice = () => {
  const cakePriceBusd = useGetCakeBusdLpPrice()

  const cakePriceUsdString =
    Number.isNaN(cakePriceBusd) || cakePriceBusd === 0 || !cakePriceBusd
      ? ''
      : ` - $${cakePriceBusd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `RiceFarm${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
