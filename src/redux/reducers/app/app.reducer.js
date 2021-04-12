import { SET_IS_SIGNING_FLAG } from "../../types";

const initialState = {
  isSigningIn: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_SIGNING_FLAG:
      return Object.assign({}, initialState, { isSigningIn: action.data });

    default:
      return state;
  }
};

export default appReducer;
