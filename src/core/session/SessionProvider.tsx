import { IonSpinner } from '@ionic/react';
import { createContext, useCallback, useEffect, useReducer, useState } from 'react';
import { Session } from '../models';
import { useSessionVault } from './SessionVaultProvider';

interface SessionState {
  session?: Session;
  loading: boolean;
  error: string;
}

const initialState: SessionState = {
  session: undefined,
  loading: false,
  error: '',
};

export type SessionAction =
  | { type: 'CLEAR_SESSION' }
  | { type: 'RESTORE_SESSION'; session: Session }
  | { type: 'LOGIN' }
  | { type: 'LOGIN_SUCCESS'; session: Session }
  | { type: 'LOGIN_FAILURE'; error: string }
  | { type: 'LOGOUT' }
  | { type: 'LOGOUT_SUCCESS' }
  | { type: 'LOGOUT_FAILURE'; error: string };

const reducer = (state: SessionState = initialState, action: SessionAction): SessionState => {
  switch (action.type) {
    case 'CLEAR_SESSION':
      return { ...state, session: undefined };
    case 'RESTORE_SESSION':
      return { ...state, session: action.session };
    case 'LOGIN':
      return { ...state, loading: true, error: '' };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, session: action.session };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.error };
    case 'LOGOUT':
      return { ...state, loading: true, error: '' };
    case 'LOGOUT_SUCCESS':
      return { ...state, loading: false, session: undefined };
    case 'LOGOUT_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const SessionContext = createContext<{
  state: typeof initialState;
  dispatch: (action: SessionAction) => void;
}>({
  state: initialState,
  dispatch: () => {},
});

export const SessionProvider: React.FC = ({ children }) => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { getSessionData, isLocked } = useSessionVault();

  const attemptSessionRestore = useCallback(async () => {
    try {
      const session = await getSessionData();
      if (!session) throw new Error('Session not found.');
      dispatch({ type: 'RESTORE_SESSION', session });
    } catch (error) {
      dispatch({ type: 'CLEAR_SESSION' });
    }
  }, [getSessionData]);

  useEffect(() => {
    attemptSessionRestore().finally(() => setInitializing(false));
  }, [attemptSessionRestore]);

  useEffect(() => {
    isLocked && dispatch({ type: 'CLEAR_SESSION' });
  }, [isLocked]);

  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      {initializing ? <IonSpinner name="dots" data-testid="initializing" /> : children}
    </SessionContext.Provider>
  );
};
