import axios, { AxiosInstance } from 'axios';

import { API_CONFIG } from '../config/api';

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_CONFIG.baseUrl,
  });

  instance.interceptors.request.use(
    (config) => {
      config.params = {
        ...config.params,
        token: API_CONFIG.apiKey,
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('API request failed:', error);
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosInstance = createAxiosInstance();
