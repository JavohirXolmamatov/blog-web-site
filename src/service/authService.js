import axios from "./api";

const AuthService = {
  async userRegister(user) {
    const request = await axios.post("/users", { user });
    return request;
  },

  async userLogin(user) {
    const request = await axios.post("/users/login", { user });
    return request;
  },
};

export default AuthService;
