import { vi, Mock } from 'vitest';
import { DeviceSecurityType, VaultType } from '@ionic-enterprise/identity-vault';
import { createVault } from '../api/vault-factory-api';
import { Session } from '../models';

vi.mock('@capacitor/preferences');
vi.mock('@ionic/react', async (getOriginal) => {
  const original: any = await getOriginal();
  return { ...original, isPlatform: vi.fn() };
});
vi.mock('../api/vault-factory-api');

describe('SessionVaultProvider', () => {
  let mockVault: any;
  const testSession: Session = {
    user: { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@test.com' },
    token: '123456789',
  };

  beforeEach(() => {
    mockVault = createVault({
      key: 'io.ionic.teatasterreact',
      type: VaultType.SecureStorage,
      deviceSecurityType: DeviceSecurityType.None,
      lockAfterBackgrounded: 5000,
      shouldClearVaultAfterTooManyFailedAttempts: true,
      customPasscodeInvalidUnlockAttempts: 2,
      unlockVaultOnLoad: false,
    });
    vi.clearAllMocks();
  });

  it('starts with an undefined session', () => {});

  describe('session', () => {
    describe('setSession', () => {
      it('sets the session', async () => {
        //   const { getSession, setSession } = useSessionVault();
        // await setSession(testSession);
        // expect(await getSession()).toEqual(testSession);
      });

      it('stores the session in the vault', async () => {
        // check called with value
      });
    });

    describe('clearSession', () => {
      beforeEach(() => ({
        /* Set the session so we can clear it */
      }));

      it('clears the session', () => {});

      it('clears the vault', () => {});

      it('resets the unlock mode', () => {});
    });

    describe('getSession', () => {
      beforeEach(() => ({
        /* clear the session (local I guess?) */
      }));

      it('gets the session from the vault', () => {});

      it('caches the retrieved session', () => {});

      it('caches the session set via setSession', () => {});
    });
  });

  // describe('setUnlockMode', () => {
  //   describe.each([['Biometrics' as UnlockMode], ['BiometricsWithPasscode' as UnlockMode]])(
  //     'Biometrics security',
  //     (unlockMode: UnlockMode) => {
  //       beforeEach(() => {
  //         Device.showBiometricPrompt = vi.fn();
  //       });

  //       it('shows a bio prompt if provisioning the permission is required', async () => {
  //         Device.isBiometricsAllowed = vi.fn().mockResolvedValue(BiometricPermissionState.Prompt);
  //         const { setUnlockMode } = useSessionVault();
  //         await setUnlockMode(unlockMode);
  //         expect(Device.showBiometricPrompt).toHaveBeenCalledTimes(1);
  //         expect(Device.showBiometricPrompt).toHaveBeenCalledWith({
  //           iosBiometricsLocalizedReason: 'Please authenticate to continue',
  //         });
  //       });

  //       it('does not show a bio prompt if the permission has already been granted', async () => {
  //         Device.isBiometricsAllowed = vi.fn().mockResolvedValue(BiometricPermissionState.Granted);
  //         const { setUnlockMode } = useSessionVault();
  //         await setUnlockMode(unlockMode);
  //         expect(Device.showBiometricPrompt).not.toHaveBeenCalled();
  //       });

  //       it('does not show a bio prompt if the permission has already been denied', async () => {
  //         Device.isBiometricsAllowed = vi.fn().mockResolvedValue(BiometricPermissionState.Denied);
  //         const { setUnlockMode } = useSessionVault();
  //         await setUnlockMode(unlockMode);
  //         expect(Device.showBiometricPrompt).not.toHaveBeenCalled();
  //       });
  //     }
  //   );

  //   it.each([
  //     ['Biometrics' as UnlockMode, VaultType.DeviceSecurity, DeviceSecurityType.Biometrics],
  //     ['BiometricsWithPasscode' as UnlockMode, VaultType.DeviceSecurity, DeviceSecurityType.Both],
  //     ['SystemPasscode' as UnlockMode, VaultType.DeviceSecurity, DeviceSecurityType.SystemPasscode],
  //     ['CustomPasscode' as UnlockMode, VaultType.CustomPasscode, DeviceSecurityType.None],
  //     ['SecureStorage' as UnlockMode, VaultType.SecureStorage, DeviceSecurityType.None],
  //   ])(
  //     'Sets the unlock mode for %s',
  //     async (unlockMode: UnlockMode, type: VaultType, deviceSecurityType: DeviceSecurityType) => {
  //       const expectedConfig = {
  //         ...mockVault.config,
  //         type,
  //         deviceSecurityType,
  //       };
  //       const { setUnlockMode } = useSessionVault();
  //       await setUnlockMode(unlockMode);
  //       expect(mockVault.updateConfig).toHaveBeenCalledTimes(1);
  //       expect(mockVault.updateConfig).toHaveBeenCalledWith(expectedConfig);
  //       expect(Preferences.set).toHaveBeenCalledTimes(1);
  //       expect(Preferences.set).toHaveBeenCalledWith({ key: 'LastUnlockMode', value: unlockMode });
  //     }
  //   );
  // });

  // describe('canUnlock', () => {
  //   it.each([
  //     [false, 'SecureStorage' as UnlockMode, false, true],
  //     [false, 'SecureStorage' as UnlockMode, true, true],
  //     [false, 'SecureStorage' as UnlockMode, false, false],
  //     [true, 'Biometrics' as UnlockMode, false, true],
  //     [false, 'Biometrics' as UnlockMode, true, true],
  //     [false, 'Biometrics' as UnlockMode, false, false],
  //     [true, 'BiometricsWithPasscode' as UnlockMode, false, true],
  //     [false, 'BiometricsWithPasscode' as UnlockMode, true, true],
  //     [false, 'BiometricsWithPasscode' as UnlockMode, false, false],
  //     [true, 'SystemPasscode' as UnlockMode, false, true],
  //     [false, 'SystemPasscode' as UnlockMode, true, true],
  //     [false, 'SystemPasscode' as UnlockMode, false, false],
  //     [true, 'CustomPasscode' as UnlockMode, false, true],
  //     [false, 'CustomPasscode' as UnlockMode, true, true],
  //     [false, 'CustomPasscode' as UnlockMode, false, false],
  //   ])(
  //     'is %s for %s, empty: %s, locked: %s',
  //     async (expected: boolean, mode: UnlockMode, empty: boolean, locked: boolean) => {
  //       (mockVault.isEmpty as Mock).mockResolvedValue(empty);
  //       (mockVault.isLocked as Mock).mockResolvedValue(locked);
  //       (Preferences.get as Mock).mockResolvedValue({ value: mode });
  //       const { canUnlock } = useSessionVault();
  //       expect(await canUnlock()).toBe(expected);
  //     }
  //   );
  // });

  // describe('on lock', () => {
  //   beforeEach(async () => {
  //     const { setSession } = useSessionVault();
  //     await setSession(testSession);
  //     (mockVault.getValue as Mock).mockResolvedValue(undefined);
  //   });

  //   it('clears the session cache', async () => {
  //     const { getSession } = useSessionVault();
  //     mockVault.lock();
  //     await getSession();
  //     expect(mockVault.getValue).toHaveBeenCalledTimes(1);
  //   });

  //   it('goes to the unlock page', () => {
  //     mockVault.lock();
  //     expect(router.replace).toHaveBeenCalledTimes(1);
  //     expect(router.replace).toHaveBeenCalledWith('/unlock');
  //   });
  // });
});
