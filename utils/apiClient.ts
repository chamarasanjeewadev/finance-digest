import { FINNHUB_API_KEY } from '@env';
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://finnhub.io',
});

apiClient.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    token: FINNHUB_API_KEY,
  };
  return config;
});
