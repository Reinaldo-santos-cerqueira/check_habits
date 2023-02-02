import React, { useState } from 'react'
import Background from '../../components/bg'
import Logo from '../../components/logo'
import BtnPrimary from '../../components/btnPrimary'
import BtnSecondary from '../../components/btnSecondary'
import Input from '../../components/input'

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <Background>
      <Logo />
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

      <Input
        nameIcon={'phone'}
        placeHolder={'Digite seu telefone'}
        input={phone}
        setInput={setPhone}
        secureTextEntry={false}

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
        text='VOLTAR AO INICIO'
        handleClick={
          () => {
            alert(123)
          }
        }
        marginBottom={'100px'}
      />
    </Background>
  )
}

export default SignUp
