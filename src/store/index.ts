import { combineReducers } from "redux";
import AuthReducer from "./reducers/AuthReducer";

export interface AppState {}

const rootReducer = combineReducers<AppState>({
  auth: AuthReducer,
});

export default rootReducer;
