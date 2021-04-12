import { SET_IS_SIGNING_FLAG } from "../../types";

const setIsSigningFlag = (isSigning) => {
  return (dispatch) => {
    dispatch({
      type: SET_IS_SIGNING_FLAG,
      data: isSigning,
    });
  };
};

export { setIsSigningFlag };
