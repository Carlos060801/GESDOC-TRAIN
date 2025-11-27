import axios from "axios";

// ==========================================
// CONFIGURACIÓN GENERAL
// ==========================================
const API_URL = "http://localhost:9000"; // Backend FastAPI en Docker

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ==========================================
//       AUTENTICACIÓN (REGISTER + LOGIN)
// ==========================================

// -----------------------
// 1. Registrar usuario
// -----------------------
export const registerUser = async (userData) => {
  return await api.post("/auth/register", userData);
};

// -----------------------
// 2. Login de usuario
// -----------------------
export const loginUser = async (email, password) => {
  return await api.post(
    `/auth/login?email=${email}&password=${password}`
  );
};

// ==========================================
// EXPORTACIÓN GLOBAL
// ==========================================
export default api;
