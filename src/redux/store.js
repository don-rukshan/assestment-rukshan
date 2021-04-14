import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "./userListSlice";
import userLoginReducer from "./userLoginSlice";
import userLogReducer from "./userLogSlice";

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userList: userListReducer,
    userLog: userLogReducer,
  },
});
