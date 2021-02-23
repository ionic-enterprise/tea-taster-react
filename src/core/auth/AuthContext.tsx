import { LockEvent } from '@ionic-enterprise/identity-vault';
import React, { createContext, useEffect, useReducer, useState } from 'react';
import { Session } from '../models';
import { SessionVault } from '../session-vault/SessionVault';

interface AuthState {
  session?: Session;
  loading: boolean;
  error: string;
}

const initialState: AuthState = {
  session: undefined,
  loading: false,
  error: '',
};

export type AuthAction =
  | { type: 'CLEAR_SESSION' }
  | { type: 'RESTORE_SESSION'; session: Session }
  | { type: 'LOGIN' }
  | { type: 'LOGIN_SUCCESS'; session: Session }
  | { type: 'LOGIN_FAILURE'; error: string }
  | { type: 'LOGOUT' }
  | { type: 'LOGOUT_SUCCESS' }
  | { type: 'LOGOUT_FAILURE'; error: string };

const reducer = (
  state: AuthState = initialState,
  action: AuthAction,
): AuthState => {
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

export const AuthContext = createContext<{
  state: typeof initialState;
  dispatch: (action: AuthAction) => void;
  vault: SessionVault;
}>({
  state: initialState,
  dispatch: () => {},
  vault: SessionVault.getInstance(),
});

export const AuthProvider: React.FC<{ displayPasscodeRequest: () => void }> = ({
  displayPasscodeRequest,
  children,
}) => {
  const vault = SessionVault.getInstance();

  // Pass a function that displays the modal.

  const [initializing, setInitializing] = useState<boolean>(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const session = await vault.restoreSession();
      if (!session) return setInitializing(false);
      dispatch({ type: 'RESTORE_SESSION', session });
      return setInitializing(false);
    })();
  }, [vault]);

  ///TODO: ADD LOCK/UNLOCK EVENTS

  vault.onVaultLocked = (event: LockEvent) => {
    dispatch({ type: 'CLEAR_SESSION' });
  };

  vault.onPasscodeRequest = async () => {
    return new Promise((res, reject) => {
      //displayPasscodeRequest(res, reject);
      // return with pin
    });
  };

  ///TODO: PROVIDE PASSCODE MECHANISM

  return (
    <AuthContext.Provider value={{ state, dispatch, vault }}>
      {initializing ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
