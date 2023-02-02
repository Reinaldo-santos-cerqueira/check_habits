/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from 'react'

interface IAuthContext {
  id:string,
  refreshToken:string,
  setRefreshToken: any,
  logged: boolean,
  setLogged:any
}

interface IProvider {
  children:React.ReactNode
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider : React.FC<IProvider> = ({ children }) => {
  const [refreshToken, setRefreshToken] = useState('')
  const [logged, setLogged] = useState(false)
  return (

    <AuthContext.Provider

        value={

            {
              logged,
              setLogged,
              id: '',
              refreshToken,
              setRefreshToken
            }

        }

    >

      {children}

    </AuthContext.Provider>
  )
}
