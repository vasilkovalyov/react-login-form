import axios, { AxiosError } from 'axios';
import { getAccessTokenFromLS } from '../utils/local-storage';
import { Page } from '../constants/pages';
import { refreshToken } from '../api/auth';
import { EndpointsEnum } from './endpoints.types';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  method: 'get, post, put, delete, patch',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((request) => {
  if (getAccessTokenFromLS()) {
    request.headers.Authorization = `Bearer ${getAccessTokenFromLS()}`;
  }
  return request;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!getAccessTokenFromLS()) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !originalRequest._retry
    ) {
      error.config._isRetry = true;
      axios.interceptors.response.eject;
      try {
        const token = localStorage.getItem(EndpointsEnum.ACCESS_TOKEN);
        if (!token) throw error;

        const response = await refreshToken(token);
        localStorage.setItem(
          EndpointsEnum.ACCESS_TOKEN,
          response.data.access_token
        );
        return api.request(originalRequest);
      } catch (e) {
        if (e instanceof AxiosError) {
          if (e.response?.data.message === 'Refresh token expired') {
            localStorage.removeItem(EndpointsEnum.ACCESS_TOKEN);
            window.location.href = Page.LOGIN;
          }
        }
        return Promise.reject(error);
      }
    }
    throw error;
  }
);

export default api;
