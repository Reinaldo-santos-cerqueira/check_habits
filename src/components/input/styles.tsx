import styled from 'styled-components/native'
import Ionicons from '@expo/vector-icons/FontAwesome'

export const AreaInput = styled.View`
    border-bottom-color: #ffffff;
    border-bottom-width: 2px;
    width:80%;
    height:50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    
`

export const TextInput = styled.TextInput`
    flex:1;
    color: white;
    font-size:20px;
`

export const Icon = styled(Ionicons)`
    margin:0px 20px;
`
