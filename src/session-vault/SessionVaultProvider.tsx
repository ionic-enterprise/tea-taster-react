import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useIonModal } from '@ionic/react';
import { PinDialog } from './PinDialog';
import { vault } from '../api/session-vault-api';

type Props = { children?: ReactNode };
type CustomPasscodeCallback = (opts: { data: any; role?: string }) => void;
let handlePasscodeRequest: CustomPasscodeCallback = () => {};

type Context = { isLocked: boolean };
const SessionVaultContext = createContext<Context | undefined>(undefined);
const SessionVaultProvider = ({ children }: Props) => {
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSetPasscodeMode, setIsSetPasscodeMode] = useState<boolean>(false);
  const [present, dismiss] = useIonModal(PinDialog, {
    setPasscodeMode: isSetPasscodeMode,
    onDismiss: (opts: { data: any; role?: string }) => handlePasscodeRequest(opts),
  });

  useMemo(() => {
    vault.onLock(() => setIsLocked(true) /* Send to unlock page */);
    vault.onUnlock(() => setIsLocked(false));
    vault.onConfigChanged(() => vault.isLocked().then((isLocked) => setIsLocked(isLocked)));
    vault.onPasscodeRequested(async (isPasscodeSetRequest) => {
      return new Promise((resolve) => {
        handlePasscodeRequest = (opts) => {
          vault.setCustomPasscode(opts.role === 'cancel' ? '' : opts.data);
          setIsSetPasscodeMode(false);
          setShowModal(false);
          resolve();
        };
        setIsSetPasscodeMode(isPasscodeSetRequest);
        setShowModal(true);
      });
    });
  }, []);

  useEffect(() => {
    showModal ? present() : dismiss();
  }, [showModal]);

  useEffect(() => {
    vault.isLocked().then((isLocked) => setIsLocked(isLocked));
  }, []);

  return <SessionVaultContext.Provider value={{ isLocked }}>{children}</SessionVaultContext.Provider>;
};
export const useSessionVault = () => {
  const context = useContext(SessionVaultContext);
  if (context === undefined) throw new Error('useSessionVault must be used within SessionVaultContext');
  return context;
};
export default SessionVaultProvider;
