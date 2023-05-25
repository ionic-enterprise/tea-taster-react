import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import * as auth from '../api/auth-api';
import { canUnlock, getSession } from '../api/session-vault-api';
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
    // Do we care about the `isAuthenticated` flag? Maybe expose a function that the unlock page can call?

    /*
      // This strategy takes you to the login page if there is a session to be unlocked.
      // From there, the user can choose to unlock or sign in again.
      canUnlock().then((x: boolean) => {
        if (x) {
          router.replace('/unlock');
        } else {
          router.replace('/tabs/teas');
        }
      });
      // If you comment out the above strategy and go with this one, when there is a locked session,
      // the user will be prompted to unlock the vault automatically by the auth-guard when it tries
      // to get the session.
      // router.replace('/tabs/teas');
    */
    canUnlock().then((res) => setIsAuthenticated(res));
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
