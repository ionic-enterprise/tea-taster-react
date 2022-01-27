import { useContext } from 'react';
import { SessionContext } from './SessionContext';

export const useSession = () => {
  const { error, isAuthenticated, getAccessToken, getUserInfo, login, logout } = useContext(SessionContext);

  if (SessionContext === undefined) throw new Error('useSession must be used within a SessionProvider');

  return { error, isAuthenticated, getAccessToken, getUserInfo, login, logout };
};
