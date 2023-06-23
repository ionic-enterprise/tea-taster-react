import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { IonSpinner, useIonModal } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { Session } from '../models';
import { registerCallback, unregisterCallback } from '../utils/session-vault';
import { PinDialog } from '../components/pin-dialog/PinDialog';

type Props = { children?: ReactNode };
type Context = { session?: Session };
type CustomPasscodeCallback = (opts: { data: any; role?: string }) => void;

let handlePasscodeRequest: CustomPasscodeCallback = () => {};
const AuthContext = createContext<Context | undefined>(undefined);
const AuthProvider = ({ children }: Props) => {
  const history = useHistory();
  const [session, setSession] = useState<Session | undefined>(undefined);
  const [isSetup, setIsSetup] = useState<boolean>(false);
  const [isSetPasscodeMode, setIsSetPasscodeMode] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [present, dismiss] = useIonModal(PinDialog, {
    setPasscodeMode: isSetPasscodeMode,
    onDismiss: (opts: { data: any; role?: string }) => handlePasscodeRequest(opts),
  });

  const handlePasscodeRequested = (isPasscodeSetRequest: boolean, onComplete: (code: string) => void): void => {
    handlePasscodeRequest = (opts) => {
      onComplete(opts.role === 'cancel' ? '' : opts.data);
      setIsSetPasscodeMode(false);
      setShowModal(false);
    };
    setIsSetPasscodeMode(isPasscodeSetRequest);
    setShowModal(true);
  };

  useEffect(() => {
    // Session initialization logic has been moved into src/pages/StartPage.tsx.
    // `setIsSetup` is a hold-over from previous tags and left in preparation for
    // the AuthConnect integration tag.
    setIsSetup(true);
  }, []);

  useEffect(() => {
    registerCallback('onSessionChange', (s: Session | undefined) => setSession(s));
    registerCallback('onVaultLock', () => history.replace('/unlock'));
    registerCallback('onPasscodeRequested', (isSetPasscodeMode, onComplete) =>
      handlePasscodeRequested(isSetPasscodeMode, onComplete)
    );

    return () => {
      unregisterCallback('onSessionChange');
      unregisterCallback('onVaultLock');
      unregisterCallback('onPasscodeRequested');
    };
  }, []);

  useEffect(() => {
    showModal ? present() : dismiss();
  }, [showModal]);

  return <AuthContext.Provider value={{ session }}>{isSetup ? children : <IonSpinner />}</AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
export default AuthProvider;
