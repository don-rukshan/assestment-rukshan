import { createSlice } from "@reduxjs/toolkit";

export const userLogSlice = createSlice({
  name: "userLog",
  initialState: {
    userLog: "",
  },

  reducers: {
    logs: (state, action) => {
      state.userLog = action.payload;
    },
  },
});

export const { logs } = userLogSlice.actions;

export const selectUserLog = (state) => state.userLog.userLog;

export default userLogSlice.reducer;
