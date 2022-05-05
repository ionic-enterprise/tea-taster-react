import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useContext, useRef } from 'react';
import { SessionContext } from './SessionContext';

export const useAuthInterceptor = () => {
  const { state, dispatch } = useContext(SessionContext);

  if (state === undefined) {
    throw new Error('useAuthInterceptor must be used with an AuthProvider');
  }

  const axios = useRef(Axios.create());
  const instance = axios.current;

  instance.defaults.baseURL = process.env.REACT_APP_DATA_SERVICE;

  instance.interceptors.request.use((config: AxiosRequestConfig) => {
    if (state.session) config.headers.Authorization = `Bearer ${state.session.token}`;
    return config;
  });

  instance.interceptors.response.use(
    (response: AxiosResponse<any>) => response,
    (error: any) => {
      if (error.response.status === 401) {
        dispatch({ type: 'CLEAR_SESSION' });
        return Promise.reject({ ...error, message: 'Unauthorized session.' });
      }
      return Promise.reject(error);
    }
  );

  return { instance };
};
