import SET_USER_LOGIN from "./types";

const setUserLogin = (userLogin) => ({
  type: SET_USER_LOGIN,
  userLogin,
});

export const UserLoginActions = {
  setUserLogin,
};
