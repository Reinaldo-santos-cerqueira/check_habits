import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import Home from '../pages/home'
import { InicialDrawerParamList } from '../types/navigations'
import { CustomDrawerContent } from './drawer'

const Drawer = createDrawerNavigator<InicialDrawerParamList>()

export const InitialDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawerContent/>}
    >

      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false

        }}
      />

    </Drawer.Navigator>
  )
}
