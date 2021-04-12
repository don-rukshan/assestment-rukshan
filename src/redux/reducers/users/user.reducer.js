import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from "../../types";

const userInitialState = {
  loggedIn: false,
  fetching: false,
  userProfile: null,
  error: "",
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return Object.assign({}, state, { fetching: true });

    case FETCH_USER_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        userProfile: action.data.result,
        cognito: action.data.cognitoDetails,
        loggedIn: true,
      });

    case FETCH_USER_FAILED:
      return Object.assign({}, state, { error: action.error });

    default:
      return state;
  }
};
