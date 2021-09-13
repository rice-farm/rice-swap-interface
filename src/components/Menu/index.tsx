import React, { useContext } from 'react'
import { Menu as UikitMenu} from '@ricefarm/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import useGetCakeBusdLpPrice from 'utils/useGetCakeBusdLpPrice'
import links from './config'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakeBusdPrice = useGetCakeBusdLpPrice()
  const pricePerBillion = cakeBusdPrice ? cakeBusdPrice * 10**9 : undefined
  const profile = useGetLocalProfile()

  return (
    <UikitMenu
      coin='TeslaSafe'
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={pricePerBillion}
      profile={profile}
      {...props}
    />
  )
}

export default Menu
