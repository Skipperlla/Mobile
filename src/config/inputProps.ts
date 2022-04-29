import { KeyboardTypeOptions } from 'react-native';
interface InputProps {
    iconName: any;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions | undefined;
    name: string;
}
export const LoginInputProps: InputProps[] = [
    {
        iconName: "email-outline",
        placeholder: "Your Email",
        name: "email",
        keyboardType: "email-address",
    },
    {
        iconName: "lock-outline",
        placeholder: "Password",
        name: "password",
        keyboardType: "email-address",
    },
];
export const RegisterInputProps: InputProps[] = [
    { iconName: "user", placeholder: "Full Name", name: "fullName" },
    {
        iconName: "email-outline",
        placeholder: "Your Email",
        keyboardType: "email-address",
        name: "name",
    },
    { iconName: "lock-outline", placeholder: "Password", name: "password" },
    {
        iconName: "lock-outline",
        placeholder: "Password Again",
        name: "passwordAgain",
    },
];