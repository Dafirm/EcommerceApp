import axios from "axios";

const API_URL = "http://localhost:4000/api/v1/auth/";

const register = (username:string, email:string, password:string) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username:string, password:string) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
}
const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;