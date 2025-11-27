// src/services/api.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:9000";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helpers básicos
export const registerUser = (payload) => api.post("/usuarios", payload);
export const loginUser = (payload) => api.post("/login", payload);
