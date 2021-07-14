import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import authReducer from "./auth";
import { combineReducers } from "redux";

export default combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  auth: authReducer,
});
