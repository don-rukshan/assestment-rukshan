import {
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILED
} from "../../types";

const initialState = {
  fetching: false,
  error: "",
  profile: {}
};

export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return Object.assign({}, state, { fetching: true });

    case FETCH_USER_PROFILE_SUCCESS:
      return Object.assign(
        {},
        { ...initialState, profile: action.data.result }
      );

    case FETCH_USER_PROFILE_FAILED:
      return Object.assign({}, { ...initialState, error: action.error });

    default:
      return initialState;
  }
};
