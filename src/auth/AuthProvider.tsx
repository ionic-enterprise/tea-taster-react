import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import * as auth from '../api/auth-api';
import { canUnlock, getSession } from '../api/session-vault-api';
import { IonSpinner } from '@ionic/react';
import { useHistory } from 'react-router';

type Props = { children?: ReactNode };

type Context = {
  isAuthenticated?: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<Context | undefined>(undefined);
const AuthProvider = ({ children }: Props) => {
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // This strategy takes you to the login page if there is a session to be unlocked.
    // From there, the user can choose to unlock or sign in again.
    const init = async () => {
      const isUnlockable = await canUnlock();
      if (isUnlockable) {
        setIsAuthenticated(true);
        history.replace('/unlock');
      } else {
        const session = await getSession();
        setIsAuthenticated(!!session);
      }
    };
    init();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const isAuthenticated = await auth.login(email, password);
    setIsAuthenticated(isAuthenticated);
    return isAuthenticated;
  };

  const logout = async () => {
    await auth.logout();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {isAuthenticated === undefined ? <IonSpinner /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export default AuthProvider;
