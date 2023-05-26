import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useIonModal } from '@ionic/react';
import { PinDialog } from './PinDialog';
import { clearSessionCache, vault } from '../api/session-vault-api';
import { useHistory } from 'react-router';

type Props = { children?: ReactNode };
type CustomPasscodeCallback = (opts: { data: any; role?: string }) => void;
let handlePasscodeRequest: CustomPasscodeCallback = () => {};

const SessionVaultContext = createContext<any>({});
const SessionVaultProvider = ({ children }: Props) => {
  const history = useHistory();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSetPasscodeMode, setIsSetPasscodeMode] = useState<boolean>(false);
  const [present, dismiss] = useIonModal(PinDialog, {
    setPasscodeMode: isSetPasscodeMode,
    onDismiss: (opts: { data: any; role?: string }) => handlePasscodeRequest(opts),
  });

  useMemo(() => {
    vault.onLock(() => {
      clearSessionCache();
      history.replace('/unlock');
    });
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

  return <SessionVaultContext.Provider value={{}}>{children}</SessionVaultContext.Provider>;
};
export const useSessionVault = () => {
  const context = useContext(SessionVaultContext);
  if (context === undefined) throw new Error('useSessionVault must be used within SessionVaultContext');
  return context;
};
export default SessionVaultProvider;
