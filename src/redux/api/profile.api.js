import axios from "axios";

export const signInUser = (username, password) => {
  let userLogin = { username, password };

  return axios.post(`http://apps.avantrio.xyz:8010/api/user/login`, userLogin);
};
