import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { BrowserVault, DeviceSecurityType, Vault, VaultType } from '@ionic-enterprise/identity-vault';
import createVault from '../vault-factory';
import { Session } from '../models';
import { useIonModal } from '@ionic/react';
import { PinDialog } from '../../pin-dialog/PinDialog';

const vault: BrowserVault | Vault = createVault({
  key: 'io.ionic.teataster.session',
  type: VaultType.SecureStorage,
  deviceSecurityType: DeviceSecurityType.None,
  lockAfterBackgrounded: 5000,
  shouldClearVaultAfterTooManyFailedAttempts: true,
  customPasscodeInvalidUnlockAttempts: 2,
  unlockVaultOnLoad: false,
});

export type UnlockMode = 'Device' | 'SessionPin' | 'NeverLock' | 'ForceLogin' | 'Biometric';

const SessionVaultContext = createContext<{
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

function sleep(milliseconds: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

type CustomPasscodeCallback = (opts: { data: any; role?: string }) => void;
let handlePasscodeRequest: CustomPasscodeCallback = () => {};
export const SessionVaultProvider: React.FC = ({ children }) => {
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSetPasscodeMode, setIsSetPasscodeMode] = useState<boolean>(false);
  const [present, dismiss] = useIonModal(PinDialog, {
    setPasscodeMode: isSetPasscodeMode,
    onDismiss: (opts: { data: any; role?: string }) => handlePasscodeRequest(opts),
  });

  vault.onLock(() => setIsLocked(true));
  vault.onUnlock(() => setIsLocked(false));
  vault.onConfigChanged(() => vault.isLocked().then((isLocked) => setIsLocked(isLocked)));

  vault.onPasscodeRequested(async (isPasscodeSetRequest, onComplete) => {
    return new Promise((resolve) => {
      handlePasscodeRequest = (opts: { data: any; role?: string }) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  useEffect(() => {
    vault.isLocked().then((isLocked) => setIsLocked(isLocked));
  }, []);

  const canUnlock = async (): Promise<boolean> => !(await vault.isEmpty()) && (await vault.isLocked());

  const setUnlockMode = async (unlockMode: UnlockMode) => {
    let type: VaultType;
    let deviceSecurityType: DeviceSecurityType;

    switch (unlockMode) {
      case 'Device':
        type = VaultType.DeviceSecurity;
        deviceSecurityType = DeviceSecurityType.Both;
        break;

      case 'SessionPin':
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

      case 'Biometric':
        type = VaultType.DeviceSecurity;
        deviceSecurityType = DeviceSecurityType.Biometrics;

        console.log('Biometrics selected');
        break;

      default:
        type = VaultType.SecureStorage;
        deviceSecurityType = DeviceSecurityType.None;
        break;
    }

    console.log('updating config');

    try {
      await vault.updateConfig({ ...vault.config, type, deviceSecurityType });
    } catch (e) {
      console.log('error updating config', e);
      await vault.clear();

      const newVault = createVault({
        key: 'io.ionic.teataster.session_version2',
        type: VaultType.SecureStorage,
        deviceSecurityType: DeviceSecurityType.None,
        lockAfterBackgrounded: 5000,
        shouldClearVaultAfterTooManyFailedAttempts: true,
        customPasscodeInvalidUnlockAttempts: 2,
        unlockVaultOnLoad: false,
      });

      sleep(5000);

      console.log('updating new config to system passcode');
      await newVault.updateConfig({
        ...newVault.config,
        type: VaultType.DeviceSecurity,
        deviceSecurityType: DeviceSecurityType.SystemPasscode,
      });
      console.log('finished updating new config to system passcode ');

      console.log('new config', newVault.config);

      throw new Error('error updating config');
    }
  };

  return (
    <SessionVaultContext.Provider value={{ vault, isLocked, canUnlock, setUnlockMode }}>
      {children}
    </SessionVaultContext.Provider>
  );
};

export const useSessionVault = () => {
  const { vault, isLocked, canUnlock, setUnlockMode } = useContext(SessionVaultContext);
  const key = 'session-data';

  if (vault === undefined) throw new Error('useSessionVault must be used within a SessionVaultProvider');

  const setSessionData = async (session: Session) => {
    await vault.setValue<Session>(key, session);
  };

  const getSessionData = useCallback(async () => {
    return await vault.getValue<Session>(key);
  }, [vault]);

  const clearSessionData = async () => {
    await vault.clear();
  };

  // Please note, the `vault` object is only returned here for use with Auth Connect.
  // Ionic recommends writing abstraction layers around storage mechanisms as a best practice.
  return { isLocked, canUnlock, setUnlockMode, setSessionData, getSessionData, clearSessionData, vault };
};
