import { useContext } from 'react';
import { SessionContext } from './SessionProvider';

export const useSession = () => {
  const { state, login, logout, invalidate, restoreSession, getAccessToken } = useContext(SessionContext);

  if (state === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }

  return {
    user: state.user,
    loading: state.loading,
    error: state.error,
    login,
    logout,
    invalidate,
    restoreSession,
    getAccessToken,
  };
};
