import axios, { InternalAxiosRequestConfig } from 'axios';
import { clearSession } from './session-vault';
import { getAccessToken } from './auth';

const baseURL = 'https://cs-demo-api.herokuapp.com';

const client = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = await getAccessToken();
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

client.interceptors.request.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) await clearSession();
    return Promise.reject(error);
  }
);

export { client };
