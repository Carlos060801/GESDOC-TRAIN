import axios from "axios";

// URL base del backend en Docker
const API_URL = "http://localhost:9000";

// -------------------------------
// REGISTRO
// -------------------------------
export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

// -------------------------------
// LOGIN
// -------------------------------
export const loginUser = async (credentials) => {
  const formData = new FormData();
  formData.append("email", credentials.email);
  formData.append("password", credentials.password);

  return await axios.post(`${API_URL}/auth/login`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
