// import {
//   FETCH_USERS,
//   FETCH_USERS_SUCCESS,
//   FETCH_USERS_FAILED,
// } from "../../types";

// const initialUsersList = {
//   fetching: false,
//   error: "",
//   state: "",
//   users: null,
// };

// export const usersListReducer = (state = initialUsersList, action) => {
//   switch (action.type) {
//     case FETCH_USERS:
//       return Object.assign({}, state, { fetching: true });

//     case FETCH_USERS_SUCCESS:
//       return Object.assign({}, state, {
//         error: "",
//         users: action.data.result,
//         fetching: false,
//       });

//     case FETCH_USERS_FAILED:
//       return Object.assign({}, initialUsersList, { error: action.error });
//   }
// };
