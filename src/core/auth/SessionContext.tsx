import React, { createContext, useEffect, useReducer, useState } from 'react';
import { Storage } from '@capacitor/storage';
import Axios from 'axios';
import { IonSpinner } from '@ionic/react';
import { Session } from '../models';

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

  useEffect(() => {
    (async () => {
      try {
        const { value: token } = await Storage.get({ key: 'auth-token' });
        if (!token) throw new Error('Token not found.');

        const headers = { Authorization: 'Bearer ' + token };
        const url = `${process.env.REACT_APP_DATA_SERVICE}/users/current`;
        const { data: user } = await Axios.get(url, { headers });

        dispatch({ type: 'RESTORE_SESSION', session: { token, user } });
        setInitializing(false);
      } catch (error) {
        dispatch({ type: 'CLEAR_SESSION' });
        setInitializing(false);
      }
    })();
  }, []);

  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      {initializing ? <IonSpinner name="dots" data-testid="initializing" /> : children}
    </SessionContext.Provider>
  );
};
