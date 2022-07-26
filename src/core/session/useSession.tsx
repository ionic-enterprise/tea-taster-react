import axios from 'axios';
import { useContext } from 'react';
import { SessionContext } from './SessionProvider';
import { UnlockMode, useSessionVault } from './SessionVaultProvider';

export const useSession = () => {
  const { state, dispatch } = useContext(SessionContext);
  const { setSessionData, getSessionData, clearSessionData, setUnlockMode } = useSessionVault();

  if (state === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }

  const login = async (username: string, password: string, mode: UnlockMode = 'NeverLock'): Promise<void> => {
    dispatch({ type: 'LOGIN' });
    try {
      const url = `${process.env.REACT_APP_DATA_SERVICE}/login`;
      const { data } = await axios.post(url, { username, password });

      if (!data.success) throw new Error('Failed to log in.');

      const { token, user } = data;
      await setUnlockMode(mode);
      await setSessionData({ token, user });
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
      await clearSessionData();
      dispatch({ type: 'LOGOUT_SUCCESS' });
    } catch (error: any) {
      dispatch({ type: 'LOGOUT_FAILURE', error: error.message });
    }
  };

  const invalidate = async (): Promise<void> => {
    await clearSessionData();
    dispatch({ type: 'CLEAR_SESSION' });
  };

  const restoreSession = async (): Promise<void> => {
    const session = await getSessionData();
    session && dispatch({ type: 'RESTORE_SESSION', session });
  };

  return {
    session: state.session,
    loading: state.loading,
    error: state.error,
    login,
    logout,
    invalidate,
    restoreSession,
  };
};
