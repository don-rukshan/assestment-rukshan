import { createSlice } from "@reduxjs/toolkit";

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    userLogin: "",
  },

  reducers: {
    login: (state, action) => {
      state.userLogin = action.payload;
    },
    logout: (state) => {
      state.userLogin = null;
    },
  },
});

export const { login, logout } = userLoginSlice.actions;

export const selectUserLogin = (state) => state.userLogin.userLogin;

export default userLoginSlice.reducer;
