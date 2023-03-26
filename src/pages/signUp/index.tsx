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
import { signUp } from '../../utils'

const SignUp: React.FC = () => {
  const navigation = useNavigation<LoginNavigationProp>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [modal, setModal] = useState(false)
  const [image, setImage] = useState('')
  const [text, setText] = useState('')
  return (
    <Background>

      <Logo />

      <Input
        nameIcon={'envelope-o'}
        placeHolder={'Enter your email'}
        input={email}
        setInput={setEmail}
        secureTextEntry={false}

      />

      <Input
        nameIcon={'phone'}
        placeHolder={'Enter your phone number'}
        input={phone}
        setInput={setPhone}
        secureTextEntry={false}

      />

      <Input
        nameIcon={'lock'}
        placeHolder={'Enter your password'}
        input={password}
        setInput={setPassword}
        secureTextEntry={true}

      />

      <BtnPrimary
        text={'SIGN UP'}
        handleClick={
          () => {
            signUp(
              email,
              password,
              phone,
              setModal,
              setImage,
              setText
            )
          }
        }
      />

      <BtnSecondary
        text='VOLTAR AO INICIO'
        handleClick={
          () => {
            navigation.goBack()
          }
        }
        marginBottom={'100px'}
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
              navigation.goBack()
            }
          }
        />

      </Modal>
    </Background>
  )
}

export default SignUp
