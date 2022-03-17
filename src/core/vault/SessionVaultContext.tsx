import React, { createContext, useCallback, useEffect, useState } from 'react';
import { Vault, BrowserVault, VaultType, DeviceSecurityType } from '@ionic-enterprise/identity-vault';
import createVault from './vault-factory';
import PinDialog from '../../pin-dialog/PinDialog';
import { useIonModal } from '@ionic/react';

const vault: BrowserVault | Vault = createVault({
  key: 'io.ionic.teataster',
  type: VaultType.SecureStorage,
  deviceSecurityType: DeviceSecurityType.None,
  lockAfterBackgrounded: 5000,
  shouldClearVaultAfterTooManyFailedAttempts: true,
  customPasscodeInvalidUnlockAttempts: 2,
  unlockVaultOnLoad: false,
});

export type UnlockMode = 'Device' | 'SessionPIN' | 'NeverLock' | 'ForceLogin';

export const SessionVaultContext = createContext<{
  vault: Vault | BrowserVault | undefined;
  isLocked: boolean;
  canUnlock: () => Promise<boolean>;
  setUnlockMode: (unlockMode: UnlockMode) => Promise<void>;
}>({
  vault: undefined,
  isLocked: false,
  canUnlock: async () => {
    throw new Error('Method not implemented');
  },
  setUnlockMode: async () => {
    throw new Error('Method not implemented');
  },
});

type CustomPasscodeCallback = (opts: { data: any; role?: string }) => void;
let passcodeRequestCallback: CustomPasscodeCallback = () => {};
export const SessionVaultProvider: React.FC = ({ children }) => {
  const [isLocked, setIsLocked] = useState<boolean>(false);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSetPasscodeMode, setIsSetPasscodeMode] = useState<boolean>(false);
  const [present, dismiss] = useIonModal(PinDialog, {
    isSetPasscodeMode,
    onDismiss: (opts: { data: any; role?: string }) => passcodeRequestCallback(opts),
  });

  vault.onLock(() => setIsLocked(true));

  vault.onUnlock(() => setIsLocked(false));

  vault.onConfigChanged(() => vault.isLocked().then((isLocked) => setIsLocked(isLocked)));

  vault.onPasscodeRequested(async (isPasscodeSetRequest, onComplete) => {
    return new Promise((resolve) => {
      passcodeRequestCallback = (opts: { data: any; role?: string }) => {
        if (opts.role === 'cancel') onComplete('');
        else onComplete(opts.data);
        setIsSetPasscodeMode(false);
        setShowModal(false);
        resolve();
      };
      setIsSetPasscodeMode(isPasscodeSetRequest);
      setShowModal(true);
    });
  });

  useEffect(() => {
    showModal ? present() : dismiss();
  }, [showModal, present, dismiss]);

  useEffect(() => {
    vault.isLocked().then((isLocked) => setIsLocked(isLocked));
  }, []);

  const canUnlock = useCallback(async (): Promise<boolean> => {
    return !(await vault.isEmpty()) && (await vault.isLocked());
  }, []);

  const setUnlockMode = async (unlockMode: UnlockMode): Promise<void> => {
    let type: VaultType;
    let deviceSecurityType: DeviceSecurityType;

    switch (unlockMode) {
      case 'Device':
        type = VaultType.DeviceSecurity;
        deviceSecurityType = DeviceSecurityType.Both;
        break;

      case 'SessionPIN':
        type = VaultType.CustomPasscode;
        deviceSecurityType = DeviceSecurityType.None;
        break;

      case 'ForceLogin':
        type = VaultType.InMemory;
        deviceSecurityType = DeviceSecurityType.None;
        break;

      case 'NeverLock':
        type = VaultType.SecureStorage;
        deviceSecurityType = DeviceSecurityType.None;
        break;

      default:
        type = VaultType.SecureStorage;
        deviceSecurityType = DeviceSecurityType.None;
    }

    await vault.updateConfig({
      ...vault.config,
      type,
      deviceSecurityType,
    });
  };

  return (
    <SessionVaultContext.Provider value={{ vault, isLocked, canUnlock, setUnlockMode }}>
      {children}
    </SessionVaultContext.Provider>
  );
};
