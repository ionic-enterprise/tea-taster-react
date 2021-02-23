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
  isPasscodeSetRequest: boolean;
  displayPasscodeRequest: boolean;
}>({
  state: initialState,
  dispatch: () => {},
  vault: SessionVault.getInstance(),
  displayPasscodeRequest: false,
  isPasscodeSetRequest: false,
});

export const AuthProvider: React.FC<{
  handlePasscodeRequest: (opts?: any) => string | undefined;
}> = ({ handlePasscodeRequest, children }) => {
  const vault = SessionVault.getInstance();
  const [initializing, setInitializing] = useState<boolean>(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [displayPasscodeRequest, setDisplayPasscodeRequest] = useState<boolean>(
    false,
  );
  const [isPasscodeSetRequest, setIsPasscodeSetRequest] = useState<boolean>(
    false,
  );

  useEffect(() => {
    (async () => {
      const session = await vault.restoreSession();
      if (!session) return setInitializing(false);
      dispatch({ type: 'RESTORE_SESSION', session });
      return setInitializing(false);
    })();
  }, [vault]);

  vault.onVaultLocked = (event: LockEvent) => {
    dispatch({ type: 'CLEAR_SESSION' });
  };

  vault.onVaultUnlocked = async () => {
    await vault.restoreSession();
  };

  vault.onPasscodeRequest = async (
    _isPasscodeSetRequest: boolean,
  ): Promise<string | undefined> => {
    setIsPasscodeSetRequest(_isPasscodeSetRequest);
    setDisplayPasscodeRequest(true);

    return new Promise((resolve, reject) => {
      setDisplayPasscodeRequest(false);
      setIsPasscodeSetRequest(false);

      return resolve(handlePasscodeRequest());
    });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        vault,
        displayPasscodeRequest,
        isPasscodeSetRequest,
      }}
    >
      {initializing ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
