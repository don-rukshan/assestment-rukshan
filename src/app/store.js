import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../redux/userListSlice";
import userLoginReducer from "../redux/userLoginSlice";
import userLogReducer from "../redux/userLogSlice";

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userList: userListReducer,
    userLog: userLogReducer,
  },
});
