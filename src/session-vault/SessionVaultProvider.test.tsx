import { vi, Mock } from 'vitest';
import { DeviceSecurityType, VaultType } from '@ionic-enterprise/identity-vault';
import { createVault } from '../api/vault-factory-api';
import { Session, UnlockMode } from '../models';
import SessionVaultProvider, { useSessionVault } from './SessionVaultProvider';
import { renderHook, waitFor } from '@testing-library/react';
import { Preferences } from '@capacitor/preferences';

vi.mock('@capacitor/preferences');
vi.mock('../api/vault-factory-api');

const MockChildComponent = () => {
  return <div data-testid="session-vault"></div>;
};

const mockComponent = (
  <SessionVaultProvider>
    <MockChildComponent />
  </SessionVaultProvider>
);

describe('SessionVaultProvider', () => {
  const wrapper = ({ children }: any) => <SessionVaultProvider>{children}</SessionVaultProvider>;

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

  describe('canUnlock', () => {
    it.each([
      [false, 'SecureStorage' as UnlockMode, false, true],
      [false, 'SecureStorage' as UnlockMode, true, true],
      [false, 'SecureStorage' as UnlockMode, false, false],
      [true, 'Biometrics' as UnlockMode, false, true],
      [false, 'Biometrics' as UnlockMode, true, true],
      [false, 'Biometrics' as UnlockMode, false, false],
      [true, 'BiometricsWithPasscode' as UnlockMode, false, true],
      [false, 'BiometricsWithPasscode' as UnlockMode, true, true],
      [false, 'BiometricsWithPasscode' as UnlockMode, false, false],
      [true, 'SystemPasscode' as UnlockMode, false, true],
      [false, 'SystemPasscode' as UnlockMode, true, true],
      [false, 'SystemPasscode' as UnlockMode, false, false],
      [true, 'CustomPasscode' as UnlockMode, false, true],
      [false, 'CustomPasscode' as UnlockMode, true, true],
      [false, 'CustomPasscode' as UnlockMode, false, false],
    ])(
      'is %s for %s, empty: %s, locked: %s',
      async (expected: boolean, mode: UnlockMode, empty: boolean, locked: boolean) => {
        (mockVault.isEmpty as Mock).mockResolvedValue(empty);
        (mockVault.isLocked as Mock).mockResolvedValue(locked);
        (Preferences.get as Mock).mockResolvedValue({ value: mode });

        const { result } = renderHook(() => useSessionVault(), { wrapper });
        const canUnlock = await waitFor(() => result.current.canUnlock());
        expect(canUnlock).toBe(expected);
      }
    );
  });

  describe('getUnlockMode', () => {
    it('resolves the saved preference', async () => {
      (Preferences.get as Mock).mockResolvedValue({ value: 'BiometricsWithPasscode' });
      const { result } = renderHook(() => useSessionVault(), { wrapper });
      const unlockMode = await waitFor(() => result.current.getUnlockMode());
      expect(unlockMode).toBe('BiometricsWithPasscode');
    });

    it('resolves to SecureStorage by default', async () => {
      (Preferences.get as Mock).mockResolvedValue({ value: null });
      const { result } = renderHook(() => useSessionVault(), { wrapper });
      const unlockMode = await waitFor(() => result.current.getUnlockMode());
      expect(unlockMode).toBe('SecureStorage');
    });
  });

  describe('setUnlockMode', () => {
    it.each([
      ['Biometrics' as UnlockMode, VaultType.DeviceSecurity, DeviceSecurityType.Biometrics],
      ['BiometricsWithPasscode' as UnlockMode, VaultType.DeviceSecurity, DeviceSecurityType.Both],
      ['SystemPasscode' as UnlockMode, VaultType.DeviceSecurity, DeviceSecurityType.SystemPasscode],
      ['CustomPasscode' as UnlockMode, VaultType.CustomPasscode, DeviceSecurityType.None],
      ['SecureStorage' as UnlockMode, VaultType.SecureStorage, DeviceSecurityType.None],
    ])(
      'sets the unlock mode for %s',
      async (mode: UnlockMode, type: VaultType, deviceSecurityType: DeviceSecurityType) => {
        const expected = { ...mockVault.config, type, deviceSecurityType };

        const { result } = renderHook(() => useSessionVault(), { wrapper });
        await waitFor(() => result.current.setUnlockMode(mode));
        expect(mockVault.updateConfig).toHaveBeenCalledTimes(1);
        expect(mockVault.updateConfig).toHaveBeenCalledWith(expected);
        expect(Preferences.set).toHaveBeenCalledTimes(1);
        expect(Preferences.set).toHaveBeenCalledWith({ key: 'last-unlock-mode', value: mode });
      }
    );
  });

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
