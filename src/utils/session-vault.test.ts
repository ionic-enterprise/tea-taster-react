import { Mock, vi } from 'vitest';
import { Preferences } from '@capacitor/preferences';
import { VaultType, DeviceSecurityType } from '@ionic-enterprise/identity-vault';
import { UnlockMode } from '../models';
import { createVault } from './vault-factory';

import {
  canUnlock,
  clearSession,
  getSession,
  getUnlockMode,
  registerCallback,
  restoreSession,
  setSession,
  setUnlockMode,
  unregisterCallback,
} from './session-vault';
import { AuthResult } from '@ionic-enterprise/auth';

vi.mock('@capacitor/preferences');

describe('Session Utilities', () => {
  let mockVault: any;
  const testSession = {
    accessToken: 'test-access-token',
    refreshToken: 'test-refresh-token',
    idToken: 'test-id-token',
  };
  const mockVaultOptions = {
    key: 'io.ionic.teatasterreact',
    type: VaultType.SecureStorage,
    deviceSecurityType: DeviceSecurityType.None,
    lockAfterBackgrounded: 5000,
    shouldClearVaultAfterTooManyFailedAttempts: true,
    customPasscodeInvalidUnlockAttempts: 2,
    unlockVaultOnLoad: false,
  };

  beforeEach(() => {
    mockVault = createVault(mockVaultOptions);
    vi.clearAllMocks();
  });

  it('starts with an undefined session', async () => {
    expect(await getSession()).toBeUndefined();
  });

  describe('setSession', () => {
    it('sets the session', async () => {
      await setSession(testSession as AuthResult);
      expect(await getSession()).toEqual(testSession);
    });

    it('stores the session in the Vault', async () => {
      await setSession(testSession as AuthResult);
      expect(mockVault.setValue).toHaveBeenCalledTimes(1);
      expect(mockVault.setValue).toHaveBeenCalledWith('session', testSession);
    });

    describe('session change callback', () => {
      let mockCallback: any;

      beforeEach(() => {
        mockCallback = vi.fn();
        unregisterCallback('onSessionChange');
      });

      it('passes the session to the callback if a callback is defined', async () => {
        registerCallback('onSessionChange', mockCallback);
        await setSession(testSession as AuthResult);
        expect(mockCallback).toHaveBeenCalledTimes(1);
        expect(mockCallback).toHaveBeenCalledWith(testSession);
      });

      it('does not call the callback if it is undefined', async () => {
        await setSession(testSession as AuthResult);
        expect(mockCallback).not.toHaveBeenCalled();
      });
    });
  });

  describe('clearSession', () => {
    beforeEach(async () => await setSession(testSession as AuthResult));

    it('clears the session', async () => {
      await clearSession();
      expect(await getSession()).toBeUndefined();
    });

    it('clears the Vault', async () => {
      await clearSession();
      expect(mockVault.clear).toHaveBeenCalledTimes(1);
    });

    it('resets the unlock mode', async () => {
      const type = VaultType.SecureStorage;
      const deviceSecurityType = DeviceSecurityType.None;
      const expectedConfig = { ...mockVault.config, type, deviceSecurityType };
      await clearSession();
      expect(mockVault.updateConfig).toHaveBeenCalledTimes(1);
      expect(mockVault.updateConfig).toHaveBeenCalledWith(expectedConfig);
    });

    describe('session change callback', () => {
      let mockCallback: any;

      beforeEach(() => {
        mockCallback = vi.fn();
        unregisterCallback('onSessionChange');
      });

      it('passes the session to the callback if a callback is defined', async () => {
        registerCallback('onSessionChange', mockCallback);
        await clearSession();
        expect(mockCallback).toHaveBeenCalledTimes(1);
        expect(mockCallback).toHaveBeenCalledWith(undefined);
      });

      it('does not call the callback if it is undefined', async () => {
        await clearSession();
        expect(mockCallback).not.toHaveBeenCalled();
      });
    });
  });

  describe('getSession', () => {
    beforeEach(async () => await clearSession());

    it('gets the session from the Vault', async () => {
      (mockVault.getValue as Mock).mockResolvedValue(testSession);
      expect(await getSession()).toEqual(testSession);
      expect(mockVault.getValue).toHaveBeenCalledTimes(1);
      expect(mockVault.getValue).toHaveBeenCalledWith('session');
    });

    it('caches the retrieved session', async () => {
      (mockVault.getValue as Mock).mockResolvedValue(testSession);
      await getSession();
      await getSession();
      expect(mockVault.getValue).toHaveBeenCalledTimes(1);
    });

    it('caches the session set via setSession', async () => {
      await setSession(testSession as AuthResult);
      expect(await getSession()).toEqual(testSession);
      expect(mockVault.getValue).not.toHaveBeenCalled();
    });
  });

  describe('restoreSession', () => {
    beforeEach(async () => {
      await clearSession();
      (mockVault.getValue as Mock).mockResolvedValue(testSession);
    });

    it('gets the session from the Vault', async () => {
      await restoreSession();
      expect(mockVault.getValue).toHaveBeenCalledTimes(1);
      expect(mockVault.getValue).toHaveBeenCalledWith('session');
    });

    it('caches the session', async () => {
      await restoreSession();
      await getSession();
      expect(mockVault.getValue).toHaveBeenCalledTimes(1);
    });

    it('calls the session change callback', async () => {
      let mockCallback = vi.fn();
      registerCallback('onSessionChange', mockCallback);
      await restoreSession();
      expect(mockCallback).toHaveBeenCalledTimes(1);
      expect(mockCallback).toHaveBeenCalledWith(testSession);
      unregisterCallback('onSessionChange');
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
        expect(await canUnlock()).toBe(expected);
      }
    );
  });

  describe('getUnlockMode', () => {
    it('resolves the saved preference', async () => {
      (Preferences.get as Mock).mockResolvedValue({ value: 'BiometricsWithPasscode' });
      expect(await getUnlockMode()).toBe('BiometricsWithPasscode');
    });

    it('resolves to SecureStorage by default', async () => {
      (Preferences.get as Mock).mockResolvedValue({ value: null });
      expect(await getUnlockMode()).toBe('SecureStorage');
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
        await setUnlockMode(mode);
        expect(mockVault.updateConfig).toHaveBeenCalledTimes(1);
        expect(mockVault.updateConfig).toHaveBeenCalledWith(expected);
        expect(Preferences.set).toHaveBeenCalledTimes(1);
        expect(Preferences.set).toHaveBeenCalledWith({ key: 'last-unlock-mode', value: mode });
      }
    );
  });

  describe('onVaultLock', () => {
    let mockCallback: any;

    beforeEach(async () => {
      mockCallback = vi.fn();
      unregisterCallback('onVaultLock');
      unregisterCallback('onSessionChange');
      await setSession(testSession as AuthResult);
    });

    it('calls the onVaultLock callback', async () => {
      registerCallback('onVaultLock', mockCallback);
      await mockVault.lock();
      expect(mockCallback).toHaveBeenCalledTimes(1);
    });
  });
});
