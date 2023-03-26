import React, { useState } from 'react'
import Background from '../../components/bg'
import Logo from '../../components/logo'
import BtnPrimary from '../../components/btnPrimary'
import BtnSecondary from '../../components/btnSecondary'
import Input from '../../components/input'
import { useNavigation } from '@react-navigation/native'
import { LoginNavigationProp } from '../../types/navigations'
import { Modal } from 'react-native'
import ModalAlert from '../../components/modal'
import { goLogin, changePassword } from '../../utils/index'

export const ChangePassword: React.FC = () => {
  const navigation = useNavigation<LoginNavigationProp>()

  const [email, setEmail] = useState('')
  const [modal, setModal] = useState(false)
  const [image, setImage] = useState('')
  const [text, setText] = useState('')

  return (
    <Background>
      <Logo />
      <Input
        nameIcon={'envelope-o'}
        placeHolder={'Enter seu email'}
        input={email}
        setInput={setEmail}
        secureTextEntry={false}
      />

      <BtnPrimary
        text={'CHANGE PASSWORD'}
        handleClick={
          () => {
            changePassword(
              email,
              setModal,
              setImage,
              setText
            )
          }
        }
      />
      <BtnSecondary
        text='BACK TO LOGIN'
        handleClick={
          () => {
            goLogin(navigation)
          }
        }
        marginBottom={'0px'}
      />

      <Modal

        visible={modal}
        transparent={true}

      >

        <ModalAlert
          text={text}
          img={image}
          modal={modal}
          setModal={setModal}
          funcNaviCorrect={
            () => {
              navigation.navigate('Login')
            }
          }
        />

      </Modal>

    </Background>
  )
}
