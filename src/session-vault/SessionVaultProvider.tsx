import { ReactNode, createContext, useContext, useState } from 'react';
import { Preferences } from '@capacitor/preferences';
import { UnlockMode } from '../models';
import { createVault } from '../api/vault-factory-api';
import { DeviceSecurityType, IdentityVaultConfig, Vault, VaultType } from '@ionic-enterprise/identity-vault';
import { provisionBiometricPermission } from '../api/device-api';

type Props = { children?: ReactNode };
type VaultUnlockType = Pick<IdentityVaultConfig, 'type' | 'deviceSecurityType'>;
type CustomPasscodeCallback = (opts: { data: any; role?: string }) => void;
let handlePasscodeRequest: CustomPasscodeCallback = () => {};

const keys = { session: 'session', mode: 'last-unlock-mode' };
const vault = createVault({
  key: 'io.ionic.teatastereact',
  type: VaultType.SecureStorage,
  deviceSecurityType: DeviceSecurityType.None,
  lockAfterBackgrounded: 5000,
  shouldClearVaultAfterTooManyFailedAttempts: true,
  customPasscodeInvalidUnlockAttempts: 2,
  unlockVaultOnLoad: false,
});

const getUnlockModeConfig = async (unlockMode: UnlockMode): Promise<VaultUnlockType> => {
  switch (unlockMode) {
    case 'Biometrics':
      await provisionBiometricPermission();
      return { type: VaultType.DeviceSecurity, deviceSecurityType: DeviceSecurityType.Biometrics };
    case 'BiometricsWithPasscode':
      await provisionBiometricPermission();
      return { type: VaultType.DeviceSecurity, deviceSecurityType: DeviceSecurityType.Both };
    case 'SystemPasscode':
      return { type: VaultType.DeviceSecurity, deviceSecurityType: DeviceSecurityType.SystemPasscode };
    case 'CustomPasscode':
      return { type: VaultType.CustomPasscode, deviceSecurityType: DeviceSecurityType.None };
    case 'SecureStorage':
    default:
      return { type: VaultType.SecureStorage, deviceSecurityType: DeviceSecurityType.None };
  }
};

type Context = {
  isLocked: boolean;
  canUnlock: () => Promise<boolean>;
  getUnlockMode: () => Promise<UnlockMode>;
  setUnlockMode: (mode: UnlockMode) => Promise<void>;
};
const SessionVaultContext = createContext<Context | undefined>(undefined);
const SessionVaultProvider = ({ children }: Props) => {
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const canUnlock = async (): Promise<boolean> => {
    const { value } = await Preferences.get({ key: keys.mode });
    return (value || 'SecureStorage') !== 'SecureStorage' && !(await vault.isEmpty()) && (await vault.isLocked());
  };

  vault.onLock(() => setIsLocked(true));
  vault.onUnlock(() => setIsLocked(false));
  vault.onConfigChanged(() => vault.isLocked().then((isLocked) => setIsLocked(isLocked)));

  const setUnlockMode = async (unlockMode: UnlockMode) => {
    const { type, deviceSecurityType } = await getUnlockModeConfig(unlockMode);
    await vault.updateConfig({ ...vault.config, type, deviceSecurityType });
    await Preferences.set({ key: keys.mode, value: unlockMode });
  };

  const getUnlockMode = async (): Promise<UnlockMode> => {
    const { value } = await Preferences.get({ key: keys.mode });
    return (value as UnlockMode | null) || 'SecureStorage';
  };

  return (
    <SessionVaultContext.Provider value={{ isLocked, canUnlock, getUnlockMode, setUnlockMode }}>
      {children}
    </SessionVaultContext.Provider>
  );
};
export const useSessionVault = () => {
  const context = useContext(SessionVaultContext);
  if (context === undefined) throw new Error('useSessionVault must be used within SessionVaultContext');
  return context;
};
export default SessionVaultProvider;
