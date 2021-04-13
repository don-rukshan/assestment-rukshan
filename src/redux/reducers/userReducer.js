const defaultUserReducerState = {
  userLogin: null,
};

const userReducer = (state = defaultUserReducerState, action) => {
  return {
    ...state,
    userLogin: action.userLogin,
  };
};

export default userReducer;
