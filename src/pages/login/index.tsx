import React, { useState } from 'react'
import Background from '../../components/bg'
import Logo from '../../components/logo'
import BtnPrimary from '../../components/btnPrimary'
import BtnSecondary from '../../components/btnSecondary'
import Input from '../../components/input'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Background>
      <Logo/>
      <Input
        nameIcon={'envelope-o'}
        placeHolder={'Digite seu email'}
        input={email}
        setInput={setEmail}
        secureTextEntry={false}

      />

      <Input
        nameIcon={'lock'}
        placeHolder={'Digite sua senha'}
        input={password}
        setInput={setPassword}
        secureTextEntry={true}

      />

      <BtnPrimary
        text={'LOGIN'}
        handleClick={
          () => {
            alert(123)
          }
        }
      />
      <BtnSecondary
        text='TROCAR SENHA'
        handleClick={
          () => {
            alert(123)
          }
        }
        marginBottom={'0px'}
      />
    </Background>
  )
}

export default Login
