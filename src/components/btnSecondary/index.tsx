import React from 'react'
import * as C from './styles'
import { Ibtn } from '../../types/btnTypes'

const BtnSecondary: React.FC<Ibtn> = ({ handleClick, text, marginBottom }: Ibtn) => {
  return (
    <C.BtnArea
      onPress={
        () => {
          handleClick()
        }
      }
      marginBottom={marginBottom + ''}
    >
      <C.BtnText>
        {text}
      </C.BtnText>
    </C.BtnArea>
  )
}

export default BtnSecondary
