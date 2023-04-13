import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import * as auth from '../api/auth-api';
import { getSession } from '../api/session-api';
import { IonSpinner } from '@ionic/react';

type Props = { children?: ReactNode };

type Context = {
  isAuthenticated?: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<Context | undefined>(undefined);
const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    getSession().then((res) => setIsAuthenticated(!!res));
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
