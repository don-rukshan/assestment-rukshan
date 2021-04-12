import { userReducer } from "../reducers/users/user.reducer";
import { combineReducers } from "redux";
import { usersListReducer } from "./users/usersList.reducer";
import { userProfileReducer } from "./users/userProfile.reducer";
import appReducer from "./app/app.reducer";

const rootReducer = combineReducers({
  app: appReducer,

  employeeProfileInViewing: userProfileReducer,
  userProfile: userReducer,
  usersList: usersListReducer,
});

export default rootReducer;
