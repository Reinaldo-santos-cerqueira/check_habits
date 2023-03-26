import React from 'react'
import Background from '../../components/bg'
import Logo from '../../components/logo'
import BtnPrimary from '../../components/btnPrimary'
import BtnSecondary from '../../components/btnSecondary'
import { LoginNavigationProp } from '../../types/navigations'
import { useNavigation } from '@react-navigation/native'
import { goLogin, goSignUp } from '../../utils/index'

const PreLogin: React.FC = () => {
  const navigation = useNavigation<LoginNavigationProp>()

  return (
    <Background>
      <Logo />
      <BtnPrimary
        text='LOGIN'
        handleClick={
          () => {
            goLogin(navigation)
          }
        } />
      <BtnSecondary
        text='SIGN - UP'
        handleClick={
          () => {
            goSignUp(navigation)
          }
        }
        marginBottom={'-50px'}
      />
    </Background>
  )
}

export default PreLogin
