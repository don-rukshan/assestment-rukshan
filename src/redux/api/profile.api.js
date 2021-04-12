import axios from "axios";

export const signInUser = async (username, password) => {
  let userLogin = { username, password };

  await axios
    .post(`http://apps.avantrio.xyz:8010/api/user/login`, {
      userLogin,
    })
    .then((res) => console.log(res));
};
