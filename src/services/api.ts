import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Necessary to send/receive secure cookies
});

// Response interceptor to catch auth errors globally (optional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized logic if needed
    }
    return Promise.reject(error);
  }
);
