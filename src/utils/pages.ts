export enum SetupPageType {
  // Auth
  LOGIN = "Login",
  REGISTER = "Register",

  // Home
  HOME = "Home",
  OFFER = "Offer",
  FAVORITE = "Favorite",
  PRODUCT = "Product",
  // Review
  REVIEW_PRODUCT = "Review_Product",
  WRITE_REVIEW = "Write_Review",

  // Notification
  NOTIFICATION = "Notification",
  NOTIFICATION_OFFER = "Notification_Offer",
  NOTIFICATION_FEED = "Notification_Feed",
  NOTIFICATION_ACTIVITY = "Notification_Activity",

  // Explore
  EXPLORE = "Explore",
  SEARCH = "Search",
  SEARCH_RESULT = "Search_Result",
  LIST_CATEGORY = "List_Category",
  SHORT_BY = "Short_By",
  FILTER = "Filter",

  // CART
  CART = "Cart",
  SHIP_TO = "Ship_To",
  PAYMENT_METHOD = "Payment_Method",
  CHOOSE_CREDIT_CART = "Choose_Credit_Cart",
  SUCCESS = "Success",

  // Account
  ACCOUNT = "Account",
  PROFILE = "Profile",
  CHANGE_NAME = "Change_Name",
  GENDER = "Gender",
  BIRTHDAY = "Birthday",
  EMAIL = "Email",
  PHONE_NUMBER = "Phone_Number",
  CHANGE_PASSWORD = "Change_Password",

  // ORDER
  ORDER = "Order",
  DETAILS = "Details",

  // ADDRESS

  ADDRESS = "Address",
  ADD = "Add",
  EDIT = "Edit",
  DELETE_ADDRESS_CONFIRM = "Delete_Address_Confirm",

  // PAYMENT

  ADD_PAYMENT = "Add_Payment",
  PAYMENT_CHOOSE_CREDIT_CART = "Payment_Choose_Credit_Cart",
  ADD_CARD = "Add_Card",
  LAILYAFA_FEBRINA_CART = "Lailya_Febrina_Cart",
}

export const pages: SetupPageType[] = [
  // Auth
  SetupPageType.LOGIN,
  SetupPageType.REGISTER,

  // Home
  SetupPageType.HOME,
  SetupPageType.OFFER,
  SetupPageType.FAVORITE,
  SetupPageType.PRODUCT,

  // Review
  SetupPageType.REVIEW_PRODUCT,
  SetupPageType.WRITE_REVIEW,

  // Notification
  SetupPageType.NOTIFICATION,
  SetupPageType.NOTIFICATION_OFFER,
  SetupPageType.NOTIFICATION_FEED,
  SetupPageType.NOTIFICATION_ACTIVITY,

  // Explore
  SetupPageType.EXPLORE,
  SetupPageType.SEARCH,
  SetupPageType.SEARCH_RESULT,
  SetupPageType.LIST_CATEGORY,
  SetupPageType.SHORT_BY,
  SetupPageType.FILTER,

  // CART
  SetupPageType.CART,
  SetupPageType.SHIP_TO,
  SetupPageType.PAYMENT_METHOD,
  SetupPageType.CHOOSE_CREDIT_CART,
  SetupPageType.SUCCESS,

  // Account
  SetupPageType.ACCOUNT,
  SetupPageType.PROFILE,
  SetupPageType.CHANGE_NAME,
  SetupPageType.GENDER,
  SetupPageType.BIRTHDAY,
  SetupPageType.EMAIL,
  SetupPageType.PHONE_NUMBER,
  SetupPageType.CHANGE_PASSWORD,
  // ORDER
  SetupPageType.ORDER,
  SetupPageType.DETAILS,

  // ADDRESS

  SetupPageType.ADDRESS,
  SetupPageType.ADD,
  SetupPageType.EDIT,
  SetupPageType.DELETE_ADDRESS_CONFIRM,

  // PAYMENT

  SetupPageType.ADD_PAYMENT,
  SetupPageType.PAYMENT_CHOOSE_CREDIT_CART,
  SetupPageType.ADD_CARD,
  SetupPageType.LAILYAFA_FEBRINA_CART,
];
