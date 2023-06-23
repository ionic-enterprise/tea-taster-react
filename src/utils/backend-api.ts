import axios, { InternalAxiosRequestConfig } from 'axios';
import { clearSession, getSession } from './session-vault';

const baseURL = 'https://cs-demo-api.herokuapp.com';

const client = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const session = await getSession();
  if (session && session.token && config.headers) config.headers.Authorization = `Bearer ${session.token}`;
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
