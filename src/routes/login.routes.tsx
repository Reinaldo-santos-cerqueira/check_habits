import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../pages/login'
import PreLogin from '../pages/preLogin'
import { LoginStackParamList } from '../types/navigations'
import SignUp from '../pages/signUp'
import { ChangePassword } from '../pages/changePassword'
import { InitialDrawer } from './initial.routes'

const AuthStack = createNativeStackNavigator<LoginStackParamList>()

export const AuthRoutesLogin = () => (
    <AuthStack.Navigator
        initialRouteName='PreLogin'
    >
        <AuthStack.Screen

            name="PreLogin"

            component={PreLogin}

            options={{ headerShown: false }}

        />

        <AuthStack.Screen

            name="Login"

            component={Login}

            options={{ headerShown: false }}

        />

        <AuthStack.Screen

            name="SignUp"

            component={SignUp}

            options={{ headerShown: false }}

        />

        <AuthStack.Screen

            name="ChangePassword"

            component={ChangePassword}

            options={{ headerShown: false }}

        />

        <AuthStack.Screen

            name="InitialDrawer"

            component={InitialDrawer}

            options={{ headerShown: false }}

        />

    </AuthStack.Navigator>
)
