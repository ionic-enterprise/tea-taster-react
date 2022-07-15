import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import { createContext, useContext, useRef } from 'react';
import { useSession } from './useSession';

const AuthInterceptorContext = createContext<{ api: AxiosInstance }>({ api: axios });

export const AuthInterceptorProvider: React.FC = ({ children }) => {
  const { session, invalidate } = useSession();

  const instance = useRef(axios.create());
  const api = instance.current;
  api.defaults.baseURL = process.env.REACT_APP_DATA_SERVICE;

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (session) {
      if (!config) config = {};
      if (!config.headers) config.headers = {};
      config.headers.Authorization = `Bearer ${session.token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (response: AxiosResponse<any>) => response,
    async (error: any) => {
      if (error.response.status === 401) {
        await invalidate();
        return Promise.reject({ ...error, message: 'Unauthorized session.' });
      }
      return Promise.reject(error);
    }
  );

  return <AuthInterceptorContext.Provider value={{ api }}>{children}</AuthInterceptorContext.Provider>;
};

export const useAuthInterceptor = () => {
  const { api } = useContext(AuthInterceptorContext);

  if (api === undefined) {
    throw new Error('useAuthInterceptor must be used within an AuthInterceptorProvider');
  }

  return { api };
};
