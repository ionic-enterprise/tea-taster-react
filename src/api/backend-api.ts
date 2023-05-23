import axios, { InternalAxiosRequestConfig } from 'axios';
import { getSession } from './session-vault-api';

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
  if (session && session.token && config.headers) {
    config.headers.Authorization = `Bearer ${session.token}`;
  }
  return config;
});

export { client };
