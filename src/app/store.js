import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "../redux/userLoginSlice";

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
  },
});
