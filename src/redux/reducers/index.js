import { userReducer } from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userLogin: userReducer,
});

export default rootReducer;
