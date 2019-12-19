import { combineReducers } from "redux";
import logInReducer from "./login/reducer";
import roomsReducer from "./rooms/reducer";

export default combineReducers({
  auth: logInReducer,
  rooms: roomsReducer
});
