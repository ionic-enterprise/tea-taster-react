import { Preferences } from '@capacitor/preferences';
import { DeviceSecurityType, IdentityVaultConfig, VaultType } from '@ionic-enterprise/identity-vault';
import { Session, UnlockMode } from '../models';
import { createVault } from './vault-factory-api';
import { provisionBiometricPermission } from './device-api';

type VaultUnlockType = Pick<IdentityVaultConfig, 'type' | 'deviceSecurityType'>;
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

let session: Session | undefined;

/* React can register a callback to fire on these events! */

const clearSession = async (): Promise<void> => {
  // FIRE CALLBACK
  session = undefined;
  await vault.clear();
  await setUnlockMode('SecureStorage');
};

const getSession = async (): Promise<Session | undefined> => {
  // FIRE CALLBACK
  if (!session) session = (await vault.getValue<Session>(keys.session)) || undefined;
  return session;
};

const setSession = async (s: Session): Promise<void> => {
  // FIRE CALLBACK
  session = s;
  return vault.setValue(keys.session, s);
};

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

const canUnlock = async (): Promise<boolean> => {
  const { value } = await Preferences.get({ key: keys.mode });
  return (value || 'SecureStorage') !== 'SecureStorage' && !(await vault.isEmpty()) && (await vault.isLocked());
};

const setUnlockMode = async (unlockMode: UnlockMode) => {
  const { type, deviceSecurityType } = await getUnlockModeConfig(unlockMode);
  await vault.updateConfig({ ...vault.config, type, deviceSecurityType });
  await Preferences.set({ key: keys.mode, value: unlockMode });
};

const getUnlockMode = async (): Promise<UnlockMode> => {
  const { value } = await Preferences.get({ key: keys.mode });
  return (value as UnlockMode | null) || 'SecureStorage';
};

export { vault, canUnlock, setUnlockMode, getUnlockMode, clearSession, getSession, setSession };
