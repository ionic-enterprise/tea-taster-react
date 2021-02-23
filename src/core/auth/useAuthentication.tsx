import { AuthMode } from '@ionic-enterprise/identity-vault';
import Axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const useAuthentication = () => {
  const { state, dispatch, vault } = useContext(AuthContext);

  if (state === undefined) {
    throw new Error('useAuthentication must be used with an AuthProvider');
  }

  const login = async (username: string, password: string): Promise<void> => {
    dispatch({ type: 'LOGIN' });
    try {
      const url = `${process.env.REACT_APP_DATA_SERVICE}/login`;
      const { data } = await Axios.post(url, { username, password });

      if (!data.success) throw new Error('Failed to log in.');

      const session = { token: data.token, user: data.user };
      const mode = (await vault.isBiometricsAvailable())
        ? AuthMode.BiometricOnly
        : AuthMode.PasscodeOnly;
      await vault.login(session, mode);
      dispatch({ type: 'LOGIN_SUCCESS', session });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', error: error.message });
    }
  };

  const logout = async (): Promise<void> => {
    dispatch({ type: 'LOGOUT' });
    try {
      const url = `${process.env.REACT_APP_DATA_SERVICE}/logout`;
      const headers = { Authorization: 'Bearer ' + state.session!.token };

      await Axios.post(url, null, { headers });
      await vault.logout();
      dispatch({ type: 'LOGOUT_SUCCESS' });
    } catch (error) {
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
