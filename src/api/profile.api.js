import axios from "axios";

export const signInUser = (username, password) => {
  let userLogin = { username, password };

  return axios.post(`http://apps.avantrio.xyz:8010/api/user/login`, userLogin);
};

export const getUserList = (access_token) => {
  return axios.get("http://apps.avantrio.xyz:8010/api/users", {
    headers: {
      Authorization: `bearer ${access_token}`,
    },
  });
};

export const getUserLogs = (access_token, user_id) => {
  return axios.get(`http://apps.avantrio.xyz:8010/api/user/${user_id}/logs`, {
    headers: {
      Authorization: `bearer ${access_token}`,
    },
  });
};
