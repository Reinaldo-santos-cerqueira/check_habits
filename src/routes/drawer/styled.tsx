import styled from 'styled-components/native'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const Area = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 1;
    background-color: #202020;
`
export const AreaBtn = styled.TouchableOpacity`
    position: relative;
    width: 100%;
    padding: 0 20px;
    margin-top:20px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #202020;
`
export const IconFonts = styled(IconEntypo).attrs(() => ({
  name: 'add-to-list',
  size: 40,
  color: '#fff'
}))`
  position: absolute;
  left:20px;
`
export const IconAnt = styled(IconAntDesign).attrs(() => ({
  name: 'addfile',
  size: 40,
  color: '#fff'
}))`
  position: absolute;
  left:20px;
`
export const IconAntExit = styled(IconMaterialCommunityIcons).attrs(() => ({
  name: 'exit-to-app',
  size: 40,
  color: '#fff'
}))`
  position: absolute;
  left:20px;
`

export const IconAntHome = styled(IconAntDesign).attrs(() => ({
  name: 'home',
  size: 40,
  color: '#fff'
}))`
  position: absolute;
  left:20px;
`
export const TextBtn = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color:#FFF;
  width:100%;
  text-align: left;
  padding-left:60px
`
export const LogoArea = styled.View`
    heigth: auto;
    width: 50%;
    margin-bottom: 50px;
`

export const ImageLogo = styled.Image`
    width:100%;
    heigth: auto;
`
