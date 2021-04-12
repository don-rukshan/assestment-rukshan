import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILED,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from "../../types";
import { fetchUsersList } from "../../api/users.api";
import { fetchUserProfile } from "../../api/users.api";
import { getUserProfile } from "../../api/users.api";
import { getCompanyDetails } from "../../api/config.api";

/**
 * Creates actions for fetching users
 */
export const getUsersList = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_USERS,
    });

    fetchUsersList()
      .then((data) => {
        dispatch({
          type: FETCH_USERS_SUCCESS,
          data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_USERS_FAILED,
        });
      });
  };
};

export const fetchUser = (userEmail, cognitoDetails, userEmailRegistered) => {
  return (dispatch) => {
    const dispatchExistingUser = () => {
      getUserProfile(userEmail)
        .then((data) => {
          dispatch({
            type: FETCH_USER_SUCCESS,
            data: {
              ...data,
              userEmailRegistered,
              cognitoDetails,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: FETCH_USER_FAILED,
            error,
          });
        });
    };

    const dispatchEmptyUser = () => {
      const emptyProfile = {
        message: "Success",
        result: {
          coreSkills: [],
          createdDate: "",
          dateOfAppointment: "",
          dateOfBirth: "",
          designationName: "",
          email: userEmail,
          firstName: "",
          fullName: "",
          globalId: "",
          hasGivenABadge: false,
          id: "",
          imagePaths: {
            imagePath1X: "",
            imagePath2X: "",
            imagePath3X: "",
          },
          initiatives: [],
          isDeleted: false,
          isUpdated: false,
          lastName: "",
          lastSyncedDate: "",
          lastUpdatedDate: "",
          likes: [],
          mobileNumber: "",
          nic: "",
          otherSkills: [],
          otherTags: [],
          playerIds: [],
          projects: [],
          searchTags: [],
          skypeId: "",
          story: "",
          vehicleNumbers: [],
        },
      };

      dispatch({
        type: FETCH_USER_SUCCESS,
        data: {
          ...emptyProfile,
          userEmailRegistered,
          cognitoDetails,
        },
      });
    };

    dispatch({
      type: FETCH_USER,
    });

    if (userEmailRegistered) {
      dispatchExistingUser();
    } else {
      dispatchEmptyUser();
    }
  };
};

export const readyToFetchUser = () => ({
  type: FETCH_USER,
});
