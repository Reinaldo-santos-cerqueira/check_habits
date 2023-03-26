import { DrawerScreenProps } from '@react-navigation/drawer'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type LoginStackParamList = {
    Login: undefined
    PreLogin: undefined;
    SignUp: undefined;
    ChangePassword: undefined;
    InitialDrawer: undefined;
};
export type LoginNavigationProp = NativeStackNavigationProp<
    LoginStackParamList,
    'PreLogin',
    'SignUp'
>;

export type InicialDrawerParamList = {
    Home: undefined;
};

export type InitialNavigationProp = DrawerScreenProps<
    LoginStackParamList
>
