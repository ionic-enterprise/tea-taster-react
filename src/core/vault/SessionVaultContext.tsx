import React, { createContext, useEffect, useState } from 'react';
import { Vault, BrowserVault, VaultType, DeviceSecurityType } from '@ionic-enterprise/identity-vault';
import createVault from './vault-factory';

const vault: BrowserVault | Vault = createVault({
  key: 'io.ionic.teataster',
  type: VaultType.DeviceSecurity,
  deviceSecurityType: DeviceSecurityType.Both,
  lockAfterBackgrounded: 200,
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

export const SessionVaultProvider: React.FC = ({ children }) => {
  const [isLocked, setIsLocked] = useState<boolean>(false);

  vault.onLock(() => {
    setIsLocked(true);
    console.log('ERIC/ onLocked Fired.');
  });

  vault.onUnlock(() => {
    setIsLocked(false);
    console.log('ERIC/ onUnlocked Fired.');
  });

  useEffect(() => {
    vault.isLocked().then((isLocked) => setIsLocked(isLocked));
  }, []);

  const canUnlock = async (): Promise<boolean> => {
    return !(await vault.isEmpty()) && (await vault.isLocked());
  };

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
