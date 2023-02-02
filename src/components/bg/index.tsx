import React from 'react'
import * as C from './styles'

interface Ichildren {
    children: React.ReactNode
}

const Background : React.FC<Ichildren> = ({ children }) => {
  return (
    <C.Container>
      <C.TriangleTop />
      <C.TriangleBottom/>
      {children}
    </C.Container>
  )
}

export default Background
