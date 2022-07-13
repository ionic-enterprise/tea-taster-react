import { Preferences } from '@capacitor/preferences';
import axios from 'axios';
import { useContext } from 'react';
import { SessionContext } from './SessionProvider';

export const useSession = () => {
  const { state, dispatch } = useContext(SessionContext);

  if (state === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }

  const login = async (username: string, password: string): Promise<void> => {
    dispatch({ type: 'LOGIN' });
    try {
      const url = `${process.env.REACT_APP_DATA_SERVICE}/login`;
      const { data } = await axios.post(url, { username, password });

      if (!data.success) throw new Error('Failed to log in.');

      const { token, user } = data;
      Preferences.set({ key: 'auth-token', value: token });
      dispatch({ type: 'LOGIN_SUCCESS', session: { token, user } });
    } catch (error: any) {
      dispatch({ type: 'LOGIN_FAILURE', error: error.message });
    }
  };
  const logout = async (): Promise<void> => {
    dispatch({ type: 'LOGOUT' });
    try {
      const url = `${process.env.REACT_APP_DATA_SERVICE}/logout`;
      const headers = { Authorization: 'Bearer ' + state.session!.token };

      await axios.post(url, null, { headers });
      Preferences.remove({ key: 'auth-token' });
      dispatch({ type: 'LOGOUT_SUCCESS' });
    } catch (error: any) {
      dispatch({ type: 'LOGOUT_FAILURE', error: error.message });
    }
  };

  return {
    session: state.session,
    loading: state.loading,
    error: state.error,
    login,
    logout,
  };
};
