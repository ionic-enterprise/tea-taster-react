import { Preferences } from '@capacitor/preferences';
import { DeviceSecurityType, IdentityVaultConfig, VaultType } from '@ionic-enterprise/identity-vault';
import { AuthResult } from '@ionic-enterprise/auth';
import { createVault } from './vault-factory';
import { provisionBiometricPermission } from './device';
import { UnlockMode } from '../models';

type VaultUnlockType = Pick<IdentityVaultConfig, 'type' | 'deviceSecurityType'>;

type CallbackMap = {
  onSessionChange?: (session: AuthResult | undefined) => void;
  onVaultLock?: () => void;
  onPasscodeRequested?: (isPasscodeSetRequest: boolean, onComplete: (code: string) => void) => void;
};

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

vault.onLock(() => {
  session = undefined;
  if (callbackMap.onVaultLock) callbackMap.onVaultLock();
});

vault.onPasscodeRequested((isPasscodeSetRequest, onComplete) => {
  if (callbackMap.onPasscodeRequested) callbackMap.onPasscodeRequested(isPasscodeSetRequest, onComplete);
});

let session: AuthResult | undefined;
const callbackMap: CallbackMap = {};

const clearSession = async (): Promise<void> => {
  session = undefined;
  await vault.clear();
  await setUnlockMode('SecureStorage');
  if (callbackMap.onSessionChange) callbackMap.onSessionChange(undefined);
};

const getSession = async (): Promise<AuthResult | undefined> => {
  if (!session) session = (await vault.getValue<AuthResult>(keys.session)) || undefined;
  return session;
};

const restoreSession = async () => {
  const s = (await vault.getValue<AuthResult>(keys.session)) || undefined;
  session = s;
  if (callbackMap.onSessionChange) callbackMap.onSessionChange(session);
};

const setSession = async (s: AuthResult): Promise<void> => {
  session = s;
  await vault.setValue(keys.session, s);
  if (callbackMap.onSessionChange) callbackMap.onSessionChange(session);
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
  await vault.updateConfig({ ...vault.config!, type, deviceSecurityType });
  await Preferences.set({ key: keys.mode, value: unlockMode });
};

const getUnlockMode = async (): Promise<UnlockMode> => {
  const { value } = await Preferences.get({ key: keys.mode });
  return (value as UnlockMode | null) || 'SecureStorage';
};

const registerCallback = <T extends keyof CallbackMap>(topic: T, cb: CallbackMap[T]): void => {
  callbackMap[topic] = cb;
};

const unregisterCallback = <T extends keyof CallbackMap>(topic: T): void => {
  callbackMap[topic] = undefined;
};

export {
  clearSession,
  getSession,
  restoreSession,
  setSession,
  canUnlock,
  setUnlockMode,
  getUnlockMode,
  registerCallback,
  unregisterCallback,
};
