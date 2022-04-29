export enum SetupPageType {
    // No Auth
    LOGIN = "Login",
    REGISTER = "Register",
    // Auth
    HOME = "Home",
    EXPLORE = "Explore",
    CART = "Cart",
    OFFER = "Offer",
    ACCOUNT = "Account",
    // Stacks
    FAVORITE = "Favorite",
    NOTIFICATION = "Notification"

}

export const pages: SetupPageType[] = [
    // No Auth
    SetupPageType.LOGIN,
    SetupPageType.REGISTER,
    // Auth
    SetupPageType.HOME,
    SetupPageType.EXPLORE,
    SetupPageType.CART,
    SetupPageType.OFFER,
    SetupPageType.ACCOUNT,
    // Stacks
    SetupPageType.FAVORITE,
    SetupPageType.NOTIFICATION,
];