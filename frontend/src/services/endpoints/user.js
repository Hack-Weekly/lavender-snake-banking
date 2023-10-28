import api from "../api";
import { post } from "../utils/request";

// user registration
export const register = (data) => {
  const route = "/register/";
  return post(route, data);
};

// Login
export const login = async (data) => {
  const route = "/token/";
  const response = await post(route, data);
  if (response.status === 200) {
    const { access, refresh } = response.data;
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);
    api.defaults.headers.common["Authorization"] = "Bearer " + data.access;
    return response.status;
  }
};

// Logout
export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  delete api.defaults.headers.common["Authorization"];
};

// get accessToken
export const getAccessToken = async (refreshToken) => {
  const route = "/token/refresh/";
  const data = JSON.stringify({ refresh: refreshToken });
  return post(route, data);
};
