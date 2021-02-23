import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useContext, useRef } from 'react';
import { AuthContext } from './AuthContext';

export const useAuthInterceptor = () => {
  const { state, vault, clear } = useContext(AuthContext);

  if (state === undefined) {
    throw new Error('useAuthInterceptor must be used with an AuthProvider');
  }

  const axios = useRef(Axios.create());
  const instance = axios.current;

  instance.defaults.baseURL = process.env.REACT_APP_DATA_SERVICE;

  instance.interceptors.request.use((config: AxiosRequestConfig) => {
    if (vault.token) {
      config.headers.Authorization = `Bearer ${vault.token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response: AxiosResponse<any>) => response,
    async (error: any) => {
      if (error.response.status === 401) {
        await clear();
        return Promise.reject({ ...error, message: 'Unauthorized session.' });
      }
      return Promise.reject(error);
    },
  );

  return { instance };
};
