import React from 'react'
import * as C from './styled'
import { LoginNavigationProp } from '../../types/navigations'
import { useNavigation } from '@react-navigation/native'
import { IModalAlert } from '../../types/modal'

const ModalAlert: React.FC<IModalAlert> = ({ setModal, img, text, funcNaviCorrect }: IModalAlert) => {
  const navigation = useNavigation<LoginNavigationProp>()
  console.log('====================================')
  console.log(navigation)
  console.log('====================================')
  return (

    <C.Area>

      <C.ContentArea>
        {img === 'X'
          ? <C.Img
            source={require('../../assets/modalXImg.png')}
            resizeMode="contain"
          />
          : <C.Img
            source={require('../../assets/modalOkImg.png')}
            resizeMode="contain"
          />

          }

        <C.Title>
          {text}
        </C.Title>
        <C.ButtonTrade
          onPress={
            () => {
              setModal(false)
              if (img !== 'X') {
                funcNaviCorrect()
              }
            }
          }
        >

          <C.TitleBtn>

            OK

          </C.TitleBtn>

        </C.ButtonTrade>

      </C.ContentArea>

    </C.Area>

  )
}

export default ModalAlert
