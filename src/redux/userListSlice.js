import { createSlice } from "@reduxjs/toolkit";

export const userListSlice = createSlice({
  name: "userList",
  initialState: {
    userList: [],
  },

  reducers: {
    staff: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const { staff } = userListSlice.actions;

export const selectUserList = (state) => state.userList.userList;

export default userListSlice.reducer;
