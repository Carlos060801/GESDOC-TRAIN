import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9000",
});

// REGISTER
export const registerUser = (userData) =>
  API.post("/auth/register", userData);

// LOGIN
export const loginUser = (credentials) =>
  API.post("/auth/login", credentials);

export default API;
