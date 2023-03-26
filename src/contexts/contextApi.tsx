import React, { createContext, useState } from 'react'

interface IAuthContext {
  id: string,
  setId: (refreshToken: string) => void,
  refreshToken:string,
  setRefreshToken: (refreshToken:string) => void,
  logged: boolean,
  setLogged: (logged: boolean) => void
}

interface IProvider {
  children:React.ReactNode
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider : React.FC<IProvider> = ({ children }) => {
  const [refreshToken, setRefreshToken] = useState<string>('')
  const [logged, setLogged] = useState<boolean>(false)
  const [id, setId] = useState<string>('')
  return (

    <AuthContext.Provider

        value={

            {
              logged,
              setLogged,
              id,
              refreshToken,
              setRefreshToken,
              setId
            }

        }

    >

      {children}

    </AuthContext.Provider>
  )
}
