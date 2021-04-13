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
  },
});

export const { login } = userLoginSlice.actions;

export const selectUserLogin = (state) => state.userLogin.userLogin;

export default userLoginSlice.reducer;
