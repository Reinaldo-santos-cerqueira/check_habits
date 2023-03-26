import React from 'react'
import * as C from './styles'

const Logo : React.FC = () => {
  return (
    <C.LogoArea>
      <C.ImageLogo
        source={require('../../assets/logo.png')}
        resizeMode='contain'
      />
    </C.LogoArea>
  )
}

export default Logo
