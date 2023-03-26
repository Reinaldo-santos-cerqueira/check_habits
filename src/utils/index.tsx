import { LoginNavigationProp } from '../types/navigations'
import { validPassword } from './validPassword'
import React from 'react'

// Function to go trade password screen
export const goChangePassword = (navigation: LoginNavigationProp) => {
  navigation.navigate('ChangePassword')
}
// Function to go login screen
export const goLogin = (navigation: LoginNavigationProp) => {
  navigation.navigate('Login')
}
// Function to go sign up screen
export const goSignUp = (navigation: LoginNavigationProp) => {
  navigation.navigate('SignUp')
}

// Function for trade password action through api create with node js
export const changePassword = (
  email: string,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  setImage: React.Dispatch<React.SetStateAction<string>>,
  setText: React.Dispatch<React.SetStateAction<string>>
) => {
  const mailformat = /\S+@\S+\.\S+/

  if (email === '') {
    setImage('X')
    setText('Please enter email address')
    setModal(true)
  } else if (mailformat.test(email) === false) {
    setImage('X')
    setText('Please enter valid email address')
    setModal(true)
  } else {
    setImage('Ok')
    setText('Send to email for valid trade password')
    setModal(true)
  }
}

// Function for login action through api create with node js
export const login = (
  email: string,
  password: string,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  setImage: React.Dispatch<React.SetStateAction<string>>,
  setText: React.Dispatch<React.SetStateAction<string>>,
  setLogged: (logged:boolean) => void,
  setRefreshToken: (token: string) => void,
  setId: (id: string) => void
) => {
  const mailformat = /\S+@\S+\.\S+/
  if (email === '') {
    setImage('X')
    setText('Please enter email address')
    setModal(true)
  } else if (mailformat.test(email) === false) {
    setImage('X')
    setText('Please enter valid email address')
    setModal(true)
  } else if (password === '') {
    setImage('X')
    setText('Please enter password')
    setModal(true)
  } else if (!validPassword(password)) {
    setImage('X')
    setText('Please enter strong password')
    setModal(true)
  } else {
    setImage('Ok')
    setText('Login success')
    setLogged(true)
    setRefreshToken('')
    setId('')
    setModal(true)
  }
}

// Function for sign up action through api create with node js
export const signUp = (
  email: string,
  password: string,
  phone:string,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  setImage: React.Dispatch<React.SetStateAction<string>>,
  setText: React.Dispatch<React.SetStateAction<string>>
) => {
  const mailformat = /\S+@\S+\.\S+/

  if (email === '') {
    setImage('X')
    setText('Please enter email address')
    setModal(true)
  } else if (mailformat.test(email) === false) {
    setImage('X')
    setText('Please enter valid email address')
    setModal(true)
  } else if (password === '') {
    setImage('X')
    setText('Please enter password')
    setModal(true)
  } else if (phone === '') {
    setImage('X')
    setText('Please enter phone')
    setModal(true)
  } else if (phone.length < 7) {
    setImage('X')
    setText('Please enter valid phone')
    setModal(true)
  } else if (!validPassword(password)) {
    setImage('X')
    setText('Please enter strong password')
    setModal(true)
  } else {
    setImage('Ok')
    setText('Login success')
    setModal(true)
  }
}
