
import * as C from './styled'
import React from 'react'
// IconAntHome
export const CustomDrawerContent = () => {
  return (
    <C.Area>
      <C.LogoArea>
        <C.ImageLogo
          source={require('../../assets/logo.png')}
          resizeMode='contain'
        />
      </C.LogoArea>
      sss
      <C.AreaBtn>
        <C.IconAntHome />
        <C.TextBtn>
          HOME
        </C.TextBtn>
      </C.AreaBtn>''
      <C.AreaBtn>
        <C.IconFonts />
        <C.TextBtn>
          ADD HABIT
        </C.TextBtn>
      </C.AreaBtn>
      <C.AreaBtn>
        <C.IconAnt />
        <C.TextBtn>
          ADD ACCOUNT
        </C.TextBtn>
      </C.AreaBtn>
      <C.AreaBtn>
        <C.IconAntExit />
        <C.TextBtn>
          EXIT
        </C.TextBtn>
      </C.AreaBtn>
    </C.Area>
  )
}
