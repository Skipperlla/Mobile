import type { StackScreenProps } from "@react-navigation/stack";
import { SetupPageType } from "@utils/pages";


export type IStackNavigator = {
    // Not Auth
    Login: undefined;
    Register: undefined;
    Home: undefined


    // Auth

};


// Stack Screens

type LoginStack = {
    Register: undefined;
};
export type ILoginStackProps = StackScreenProps<LoginStack, SetupPageType.REGISTER>;

type RegisterStack = {
    Login: undefined;
};
export type IRegisterStackProps = StackScreenProps<RegisterStack, SetupPageType.LOGIN>;