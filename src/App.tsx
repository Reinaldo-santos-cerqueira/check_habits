import { AuthContextProvider } from './contexts/contextApi'
import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutesLogin } from './routes/login.routes'

const App = () => {
  return (

    <NavigationContainer>

      <AuthContextProvider>

        <AuthRoutesLogin />

      </AuthContextProvider>

    </NavigationContainer>

  )
}

export default App
