import styled from 'styled-components/native'

interface Iprops{
    marginBottom: string;
}

export const BtnArea = styled.TouchableOpacity<Iprops>`
    width:80%;
    height:50px;
    margin-bottom:${props => props.marginBottom};
    border-radius:10px;
    background-color: transparent;
    border-color:#FFFFFF;
    border-width: 2px;
    justify-content: center;
    align-items: center;
`

export const BtnText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    text-vertical: middle;
    color:#FFF
`
