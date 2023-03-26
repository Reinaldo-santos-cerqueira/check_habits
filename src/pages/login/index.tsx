import React, { useContext, useState } from 'react'
import Background from '../../components/bg'
import Logo from '../../components/logo'
import BtnPrimary from '../../components/btnPrimary'
import BtnSecondary from '../../components/btnSecondary'
import Input from '../../components/input'
import { LoginNavigationProp } from '../../types/navigations'
import { useNavigation } from '@react-navigation/native'
import { goChangePassword, login } from '../../utils/index'
import { Modal } from 'react-native'
import ModalAlert from '../../components/modal'
import { AuthContext } from '../../contexts/contextApi'

const Login: React.FC = () => {
  const navigation = useNavigation<LoginNavigationProp>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [modal, setModal] = useState(false)
  const [image, setImage] = useState('')
  const [text, setText] = useState('')
  const {
    setRefreshToken,
    setId,
    setLogged
  } = useContext(AuthContext)
  return (
    <Background>
      <Logo/>
      <Input
        nameIcon={'envelope-o'}
        placeHolder={'Enter your email'}
        input={email}
        setInput={setEmail}
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
        text={'LOGIN'}
        handleClick={
          () => {
            login(
              email,
              password,
              setModal,
              setImage,
              setText,
              setLogged,
              setId,
              setRefreshToken

            )
          }
        }
      />
      <BtnSecondary
        text='CHANGE PASSWORD'
        handleClick={
          () => {
            goChangePassword(navigation)
          }
        }
        marginBottom={'50px'}
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
              navigation.navigate('InitialDrawer')
            }
          }
        />

      </Modal>
    </Background>
  )
}

export default Login
