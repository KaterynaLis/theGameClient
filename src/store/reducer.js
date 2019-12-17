import { combineReducers } from "redux";
import signUp from "./signUp/reducer";
import logInReducer from "./login/reducer";

export default combineReducers({
  auth: signUp,
  login: logInReducer
});
