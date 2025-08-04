import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { createCookie, createCookieSessionStorage, useNavigate, redirect } from "react-router-dom";

const api = axios.create({ baseURL: 'https://business.pikalogistics.com' });
let memoryToken = null;
let memoryRefreshToken = null;
let memoryUser = null;
const MAP_API_KEY = import.meta.env.VITE_MAP_API_KEY;

// Add interceptor for handling token and refreshing if needed
api.interceptors.request.use(async (config) => {
    try {
        const token = await auth.getToken();
        if (token) {
          // console.log("Token: ", token);
          config.headers.Authorization = `Bearer ${token}`;
        }
    } catch (error) {
        
    }
  return config;
});

const auth = {
  login: async (credentials) => {
    const response = await api.post('/api/auth/login', credentials);
    const { tokens, user } = response.data.data;
    memoryToken = tokens.accessToken;
    memoryRefreshToken = tokens.refreshToken;
    // console.log("Login: ", response.data.data);
    memoryUser = JSON.stringify(user);
    const expiresAt = new Date().getTime() + 1000 * tokens.expiresIn
    localStorage.setItem('token', memoryToken);
    localStorage.setItem('refreshToken', memoryRefreshToken);
    localStorage.setItem('user', memoryUser);
    localStorage.setItem('expiresAt', expiresAt);
    return tokens;
  },
  register: async (userData) => {
    const response = await api.post('/api/auth/register', userData);
    // console.log("Register: ", response);    
    return response.data; // {data, message, status}
    // "user": {
    //     "uid": "ACd4TLVmnWV5HZhfFnL2zXvi9mi1",
    //     "email": "walexca@gmail.com",
    //     "fullName": "Wale Business Business",
    //     "phone": "+2348123456789",
    //     "userType": "business",
    //     "imageUrl": "https://res.cloudinary.com/dncormlzh/image/upload/v1752001905/businesses/ACd4TLVmnWV5HZhfFnL2zXvi9mi1/walexca%40gmail.com.png"
    // }
  },
  logout: () => {
    // memoryToken = null;
    // memoryRefreshToken = null;
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    localStorage.removeItem('expiresAt');
  },
  getUser: () => {
    // return memoryUser;
    return JSON.parse(localStorage.getItem('user'));
  },
  getToken: async () => {
    if (auth.isTokenExpired()) {
      try {
        return await auth.refresh();
      } catch (err) {
        auth.logout();
        throw new Error('Session expired');
      }
    }
    // return memoryToken;
    return localStorage.getItem('token');
  },
  isTokenExpired: () => {
    const expiresAt = localStorage.getItem('expiresAt');
    return !expiresAt || new Date().getTime() > parseInt(expiresAt, 10);
  },
  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    return token && !auth.isTokenExpired();
  },
  refresh: async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('Refresh token missing');
    }
    const response = await api.post('/api/refresh-token', { refreshToken });
    const { token: newToken } = response.data;
    const newExpiresAt = new Date().getTime() + 1000 * newToken.expiresAt;
    memoryToken = newToken.accessToken;
    localStorage.setItem('token', newToken.accessToken);
    localStorage.setItem('expiresAt', newExpiresAt);
    return newToken;
  },
};

const requireAuth = async () => {
  if (!auth.isAuthenticated()) {
    throw redirect('/login');
  }
};

const usePersistLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isTokenExpired()) {
      auth.logout();
      navigate('/login');
    }
  }, [navigate]);
};

export { api, auth, requireAuth, usePersistLogin };