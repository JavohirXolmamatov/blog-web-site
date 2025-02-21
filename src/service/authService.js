import axios from "./api";

const AuthService = {
  userRegister: (user) => {
    const request = axios.post("/users", { user });
    return request;
  },
};

export default AuthService;
