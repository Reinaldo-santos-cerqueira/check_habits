import React from 'react'
import * as C from './styles'
import { Ibtn } from '../../types/btnTypes'

const BtnPrimary: React.FC<Ibtn> = ({ handleClick, text }: Ibtn) => {
  return (
    <C.BtnArea
      onPress={() => {
        handleClick()
      }}
    >
      <C.BtnText>
        {text}
      </C.BtnText>
    </C.BtnArea>
  )
}

export default BtnPrimary
