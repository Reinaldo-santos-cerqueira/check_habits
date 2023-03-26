import React, { useState } from 'react'
import * as C from './styles'
import { Iinput } from '../../types/input'
import { TouchableOpacity } from 'react-native'

const Input: React.FC<Iinput> = ({ nameIcon, placeHolder, input, setInput, secureTextEntry }: Iinput) => {
  const [eye, setEye] = useState('eye')
  const [textEntrySecure, setTextEntrySecure] = useState(secureTextEntry)

  const handleClick = () => {
    if (eye === 'eye') {
      setEye('eye-slash')
      setTextEntrySecure(false)
    } else {
      setEye('eye')
      setTextEntrySecure(true)
    }
  }

  return (
    <C.AreaInput>
      <C.Icon
        name={nameIcon}
        size={25}
        color={'#fff'}
      />
      <C.TextInput
        value={input}
        onChangeText={setInput}
        placeholder={placeHolder}
        secureTextEntry={textEntrySecure}
        placeholderTextColor={'#fff'}
      />
      {
        secureTextEntry === true
          ? <TouchableOpacity
            onPress={() => {
              handleClick()
            }}
            >
              <C.Icon
                name={eye}
                size={25}
                color={'#fff'}
              />
            </TouchableOpacity>
          : ''
      }
    </C.AreaInput>
  )
}

export default Input
