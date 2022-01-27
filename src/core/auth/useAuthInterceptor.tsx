import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useContext, useRef } from 'react';
import { useSession } from './useSession';

export const useAuthInterceptor = () => {
  const { getAccessToken, logout } = useSession();

  const axios = useRef(Axios.create());
  const instance = axios.current;

  instance.defaults.baseURL = process.env.REACT_APP_DATA_SERVICE;

  instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const accessToken = await getAccessToken();
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  });

  instance.interceptors.response.use(
    (response: AxiosResponse<any>) => response,
    async (error: any) => {
      if (error.response.status === 401) {
        await logout();
        return Promise.reject({ ...error, message: 'Unauthorized session.' });
      }
      return Promise.reject(error);
    }
  );

  return { instance };
};
