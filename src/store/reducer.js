import { combineReducers } from "redux";
import logInReducer from "./login/reducer";

export default combineReducers({
  auth: logInReducer
});
