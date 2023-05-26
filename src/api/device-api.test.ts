import { vi, Mock } from 'vitest';
import { BiometricPermissionState, Device } from '@ionic-enterprise/identity-vault';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/react';
import {
  canUseBiometrics,
  canUseCustomPasscode,
  canUseSystemPasscode,
  hideContentsInBackground,
  isHidingContentsInBackground,
  provisionBiometricPermission,
} from './device-api';

vi.mock('@capacitor/preferences');
vi.mock('@ionic/react', async (getOriginal) => {
  const original: any = await getOriginal();
  return { ...original, isPlatform: vi.fn() };
});

describe('Device API', () => {
  beforeEach(() => vi.clearAllMocks());

  describe('canUseBiometrics', () => {
    describe('on the web', () => {
      beforeEach(() => (isPlatform as Mock).mockReturnValue(false));

      it('resolves false if biometrics is not set up', async () => {
        Device.isBiometricsEnabled = vi.fn().mockResolvedValue(false);
        expect(await canUseBiometrics()).toBe(false);
      });

      it('resolves false if biometrics is set up', async () => {
        Device.isBiometricsEnabled = vi.fn().mockResolvedValue(true);
        expect(await canUseBiometrics()).toBe(false);
      });
    });

    describe('on mobile', () => {
      beforeEach(() => (isPlatform as Mock).mockReturnValue(true));

      it('resolves false if biometrics is not set up', async () => {
        Device.isBiometricsEnabled = vi.fn().mockResolvedValue(false);
        expect(await canUseBiometrics()).toBe(false);
      });

      it('resolves true if biometrics is set up', async () => {
        Device.isBiometricsEnabled = vi.fn().mockResolvedValue(true);
        expect(await canUseBiometrics()).toBe(true);
      });
    });
  });

  describe('canUseSystemPasscode', () => {
    describe('on the web', () => {
      beforeEach(() => (isPlatform as Mock).mockReturnValue(false));

      it('resolves false if the system passcode is not set', async () => {
        Device.isSystemPasscodeSet = vi.fn().mockResolvedValue(false);
        expect(await canUseSystemPasscode()).toBe(false);
      });

      it('resolves false if the system passcode is set', async () => {
        Device.isSystemPasscodeSet = vi.fn().mockResolvedValue(true);
        expect(await canUseSystemPasscode()).toBe(false);
      });
    });

    describe('on mobile', () => {
      beforeEach(() => (isPlatform as Mock).mockReturnValue(true));

      it('resolves false if the system passcode is not set', async () => {
        Device.isSystemPasscodeSet = vi.fn().mockResolvedValue(false);
        expect(await canUseSystemPasscode()).toBe(false);
      });

      it('resolves true if the system passcode is set', async () => {
        Device.isSystemPasscodeSet = vi.fn().mockResolvedValue(true);
        expect(await canUseSystemPasscode()).toBe(true);
      });
    });
  });

  describe('canUseCustomPasscode', () => {
    it('returns false if on the web ', () => {
      (isPlatform as Mock).mockReturnValue(false);
      expect(canUseCustomPasscode()).toBe(false);
    });

    it('returns true if on hybrid', () => {
      (isPlatform as Mock).mockReturnValue(true);
      expect(canUseCustomPasscode()).toBe(true);
    });
  });

  describe('canHideContentsInBackground', () => {
    it('returns false if on the web ', () => {
      (isPlatform as Mock).mockReturnValue(false);
      expect(canUseCustomPasscode()).toBe(false);
    });

    it('returns true if on hybrid', () => {
      (isPlatform as Mock).mockReturnValue(true);
      expect(canUseCustomPasscode()).toBe(true);
    });
  });

  describe('hideContentsInBackground', () => {
    it.each([[true], [false]])('calls the device API', async (value: boolean) => {
      Device.setHideScreenOnBackground = vi.fn();
      await hideContentsInBackground(value);
      expect(Device.setHideScreenOnBackground).toHaveBeenCalledTimes(1);
      expect(Device.setHideScreenOnBackground).toHaveBeenCalledWith(value, true);
    });

    it.each([[true], [false]])('saves the value to preferences', async (value: boolean) => {
      await hideContentsInBackground(value);
      expect(Preferences.set).toHaveBeenCalledTimes(1);
      expect(Preferences.set).toHaveBeenCalledWith({ key: 'hide-in-background', value: value.toString() });
    });
  });

  describe('isHidingContentsInBackground', () => {
    it.each([
      [true, 'true'],
      [false, 'false'],
      [false, null],
    ])('resolves %s for a preference of %s', async (result: boolean, value: string | null) => {
      (Preferences.get as Mock).mockResolvedValue({ value });
      expect(await isHidingContentsInBackground()).toBe(result);
    });
  });

  describe('provisionBiometricPermission', () => {
    beforeEach(() => (Device.showBiometricPrompt = vi.fn()));

    it('shows a prompt if provisioning the permission is required', async () => {
      Device.isBiometricsAllowed = vi.fn().mockResolvedValue(BiometricPermissionState.Prompt);
      await provisionBiometricPermission();
      expect(Device.showBiometricPrompt).toHaveBeenCalledTimes(1);
      expect(Device.showBiometricPrompt).toHaveBeenCalledWith({
        iosBiometricsLocalizedReason: 'Please authenticate to continue',
      });
    });

    it('does not show a prompt if the permission has already been granted', async () => {
      Device.isBiometricsAllowed = vi.fn().mockResolvedValue(BiometricPermissionState.Granted);
      await provisionBiometricPermission();
      expect(Device.showBiometricPrompt).not.toHaveBeenCalled();
    });

    it('does not show a prompt if the permission has already been denied', async () => {
      Device.isBiometricsAllowed = vi.fn().mockResolvedValue(BiometricPermissionState.Denied);
      await provisionBiometricPermission();
      expect(Device.showBiometricPrompt).not.toHaveBeenCalled();
    });
  });
});
