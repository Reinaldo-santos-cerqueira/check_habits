import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type LoginStackParamList = {
    Login: undefined
    PreLogin: undefined;
    SignUp: undefined;
};
export type LoginNavigationProp = NativeStackNavigationProp<
    LoginStackParamList,
    'PreLogin',
    'SignUp'
>;
