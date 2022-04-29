import { Auth, AuthAction, AuthState } from "../../@types/auth";
const defaultState: AuthState = {
  Auth: {} as Auth,
  loading: false,
  error: "",
  success: "",
  status: null,
};

const authReducer = (state = defaultState, action: AuthAction) => {
  switch (action.type) {
    case "USER_NAME_CHECK_START":
      return { ...state, loading: true, error: "", success: "" };
    case "USER_NAME_CHECK_SUCCESS":
      return {
        ...state,
        loading: false,
        success: action.payload,
        status: action.status,
        error: "",
      };
    case "USER_NAME_CHECK_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
        status: action.status,
        success: "",
      };
    case "USER_NAME_CHECK_RESET":
      return { ...state, loading: false, error: "", success: "", };


    default:
      return state;
  }
};

export default authReducer;
