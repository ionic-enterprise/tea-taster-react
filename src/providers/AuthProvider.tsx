import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { IonSpinner } from '@ionic/react';
import { Session } from '../models';
import { getSession, registerSessionChangeCallback, unregisterSessionChangeCallback } from '../utils/session';

type Props = { children?: ReactNode };
type Context = { session?: Session };

const AuthContext = createContext<Context | undefined>(undefined);
const AuthProvider = ({ children }: Props) => {
  const [session, setSession] = useState<Session | undefined>(undefined);
  const [isSetup, setIsSetup] = useState<boolean>(false);

  useEffect(() => {
    getSession().then((s) => {
      setSession(s);
      setIsSetup(true);
    });
  }, []);

  useEffect(() => {
    registerSessionChangeCallback((s: Session | undefined) => setSession(s));
    return () => unregisterSessionChangeCallback();
  }, []);

  return <AuthContext.Provider value={{ session }}>{isSetup ? children : <IonSpinner />}</AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
export default AuthProvider;
