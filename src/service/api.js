import axios from "axios";
import LocalStorage from "../helpers Storage/localStorage";

axios.defaults.baseURL = "http://localhost:3000/api";

axios.interceptors.request.use((config) => {
  const token = LocalStorage.getItemToken("token");
  const authorization = token ? `Token ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});

export default axios;
