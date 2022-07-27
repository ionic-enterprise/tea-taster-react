import { IonicAuth } from '@ionic-enterprise/auth';
import { IonSpinner } from '@ionic/react';
import { createContext, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { User } from '../models';
import { UnlockMode, useSessionVault } from './SessionVaultProvider';
import getAuthConfig from './ac-config';

interface SessionState {
  user?: User;
  loading: boolean;
  error: string;
}

const initialState: SessionState = {
  user: undefined,
  loading: false,
  error: '',
};

export type SessionAction =
  | { type: 'CLEAR_SESSION' }
  | { type: 'RESTORE_SESSION'; user: User }
  | { type: 'LOGIN' }
  | { type: 'LOGIN_SUCCESS'; user: User }
  | { type: 'LOGIN_FAILURE'; error: string }
  | { type: 'LOGOUT' }
  | { type: 'LOGOUT_SUCCESS' }
  | { type: 'LOGOUT_FAILURE'; error: string };

const reducer = (state: SessionState = initialState, action: SessionAction): SessionState => {
  switch (action.type) {
    case 'CLEAR_SESSION':
      return { ...state, user: undefined };
    case 'RESTORE_SESSION':
      return { ...state, user: action.user };
    case 'LOGIN':
      return { ...state, loading: true, error: '' };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.user };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.error };
    case 'LOGOUT':
      return { ...state, loading: true, error: '' };
    case 'LOGOUT_SUCCESS':
      return { ...state, loading: false, user: undefined };
    case 'LOGOUT_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const SessionContext = createContext<{
  state: typeof initialState;
  dispatch: (action: SessionAction) => void;
  login: (mode: UnlockMode) => Promise<void>;
  logout: () => Promise<void>;
  invalidate: () => Promise<void>;
  restoreSession: () => Promise<void>;
  getAccessToken: () => Promise<string | undefined>;
}>({
  state: initialState,
  dispatch: () => {},
  login: () => {
    throw new Error('Method not implemented');
  },
  logout: () => {
    throw new Error('Method not implemented');
  },
  invalidate: () => {
    throw new Error('Method not implemented');
  },
  restoreSession: () => {
    throw new Error('Method not implemented');
  },
  getAccessToken: () => {
    throw new Error('Method not implemented');
  },
});

export const SessionProvider: React.FC = ({ children }) => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLocked, vault, setUnlockMode, clearSessionData } = useSessionVault();
  const { config } = getAuthConfig();
  const authConnectRef = useRef<IonicAuth>(new IonicAuth({ ...config, tokenStorageProvider: vault }));

  const restoreSession = useCallback(async () => {
    const auth = authConnectRef.current;
    try {
      const isAuthenticated = await auth.isAuthenticated();
      if (!isAuthenticated) return dispatch({ type: 'CLEAR_SESSION' });
      const user = await getUserInfo();

      if (!user) throw new Error('No user information.');
      dispatch({ type: 'RESTORE_SESSION', user });
    } catch (error) {
      dispatch({ type: 'CLEAR_SESSION' });
    }
  }, []);

  useEffect(() => {
    restoreSession().finally(() => setInitializing(false));
  }, [restoreSession]);

  useEffect(() => {
    isLocked && dispatch({ type: 'CLEAR_SESSION' });
  }, [isLocked]);

  const login = async (mode: UnlockMode): Promise<void> => {
    const auth = authConnectRef.current;
    dispatch({ type: 'LOGIN' });
    try {
      await auth.login();
      await setUnlockMode(mode);

      const user = await getUserInfo();
      user && dispatch({ type: 'LOGIN_SUCCESS', user });
    } catch (error: any) {
      dispatch({ type: 'LOGIN_FAILURE', error: error.message });
    }
  };

  const logout = async (): Promise<void> => {
    const auth = authConnectRef.current;
    dispatch({ type: 'LOGOUT' });
    try {
      await auth.logout();
      dispatch({ type: 'LOGOUT_SUCCESS' });
    } catch (error: any) {
      dispatch({ type: 'LOGOUT_FAILURE', error: error.message });
    }
  };

  const invalidate = async (): Promise<void> => {
    await clearSessionData();
    dispatch({ type: 'CLEAR_SESSION' });
  };

  const getAccessToken = async (): Promise<string | undefined> => {
    const auth = authConnectRef.current;
    return auth.getAccessToken();
  };

  const getUserInfo = async (): Promise<User | undefined> => {
    const auth = authConnectRef.current;
    const idToken = await auth.getIdToken();
    if (!idToken) return;

    const { sub, firstName, lastName } = idToken;
    let email = idToken.email;
    if (idToken.emails instanceof Array) {
      email = idToken.emails[0];
    }

    return { id: sub, email, firstName, lastName };
  };

  return (
    <SessionContext.Provider value={{ state, dispatch, login, logout, invalidate, restoreSession, getAccessToken }}>
      {initializing ? <IonSpinner name="dots" data-testid="initializing" /> : children}
    </SessionContext.Provider>
  );
};
