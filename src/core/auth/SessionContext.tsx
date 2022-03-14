import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { IonicAuth } from '@ionic-enterprise/auth';
import { User } from '../models';
import getAuthConfig from './auth-config';
import { SessionVaultContext } from '../vault';

export const SessionContext = createContext<{
  error: string | undefined;
  isAuthenticated: boolean;
  checkAuthenticationStatus: () => Promise<void>;
  getAccessToken: () => Promise<string | undefined>;
  getUserInfo: () => Promise<User | undefined>;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}>({
  error: undefined,
  isAuthenticated: false,
  checkAuthenticationStatus: async () => {
    throw new Error('Method not implemented');
  },
  getAccessToken: async () => {
    throw new Error('Method not implemented');
  },
  getUserInfo: async () => {
    throw new Error('Method not implemented');
  },
  login: async () => {
    throw new Error('Method not implemented');
  },
  logout: async () => {
    throw new Error('Method not implemented');
  },
});

export const SessionProvider: React.FC = ({ children }) => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { config } = getAuthConfig();
  const { vault } = useContext(SessionVaultContext);
  const authConnectRef = useRef<IonicAuth>(new IonicAuth({ ...config, tokenStorageProvider: vault }));

  const checkAuthenticationStatus = async () => {
    const auth = authConnectRef.current;
    try {
      const isAuthenticated = await auth.isAuthenticated();
      setIsAuthenticated(isAuthenticated);
    } catch (error: any) {
      setError(error.toString());
      setIsAuthenticated(false);
    }
  };

  const getAccessToken = async (): Promise<string | undefined> => {
    const auth = authConnectRef.current;
    return auth.getAccessToken();
  };

  const getUserInfo = async (): Promise<User | undefined> => {
    const auth = authConnectRef.current;
    const idToken = await auth.getIdToken();

    if (!idToken) return;

    let email = idToken.email;
    if (idToken.emails instanceof Array) email = idToken.emails[0];

    return { id: idToken.sub, email, firstName: idToken.firstName, lastName: idToken.lastName };
  };

  const login = async (): Promise<void> => {
    try {
      const auth = authConnectRef.current;
      await auth.login();
      setIsAuthenticated(true);
    } catch (error: any) {
      setIsAuthenticated(false);
      setError(error);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const auth = authConnectRef.current;
      await auth.logout();
      setIsAuthenticated(false);
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <SessionContext.Provider
      value={{
        error,
        isAuthenticated,
        checkAuthenticationStatus,
        getAccessToken,
        getUserInfo,
        login,
        logout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
