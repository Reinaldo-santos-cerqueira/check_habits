import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  widht:100%;
  height:100%;
  flex:1;
  background-color: #202020;
  position: relative;
  justify-content: center;
  align-items: center;
`

export const TriangleTop = styled.View`
    position: absolute;
    height: 10px;
    width: 10px;
    top: 0px;
    left: 0px;
    border-style: solid;
    border-right-width: 100px;
    border-top-width: 100px;
    border-bottom-width: 100px;
    border-left-width: 100px;
    transform: rotate(180deg);
    border-left-color: transparent;
    border-right-color: #FC6833;
    border-top-color: transparent;
    border-bottom-color: #FC6833;
`

export const TriangleBottom = styled.View`
    position: absolute;
    height: 10px;
    width: 10px;
    bottom: 0px;
    right: 0px;
    border-style: solid;
    border-right-width: 100px;
    border-top-width: 100px;
    border-bottom-width: 100px;
    border-left-width: 100px;
    transform: rotate(0deg);
    border-left-color: transparent;
    border-right-color: #FC6833;
    border-top-color: transparent;
    border-bottom-color: #FC6833;
`
