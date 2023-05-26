import { vi, Mock } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useAuth } from '../auth/AuthProvider';
import { useHistory } from 'react-router';
import { PreferencesEditor } from './PreferencesEditor';
import {
  canHideContentsInBackground,
  canUseBiometrics,
  canUseCustomPasscode,
  canUseSystemPasscode,
  hideContentsInBackground,
  isHidingContentsInBackground,
} from '../api/device-api';
import { UnlockMode } from '../models';
import { getUnlockMode, setUnlockMode } from '../api/session-vault-api';

vi.mock('react-router');
vi.mock('../auth/AuthProvider');
vi.mock('../api/device-api');
vi.mock('../api/session-vault-api');

const mockOnDismiss = vi.fn();

describe('<PreferencesEditor />', () => {
  const component = <PreferencesEditor onDismiss={() => mockOnDismiss()} />;
  beforeEach(() => vi.clearAllMocks());

  describe('biometric toggle', () => {
    it('is disabled if we cannot use biometrics', async () => {
      (canUseBiometrics as Mock).mockResolvedValue(false);
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('use-biometrics-toggle'));
      await waitFor(() => expect((toggle as HTMLIonToggleElement).disabled).toBe(true));
    });

    it('is not disabled if we can use biometrics', async () => {
      (canUseBiometrics as Mock).mockResolvedValue(true);
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('use-biometrics-toggle'));
      await waitFor(() => expect((toggle as HTMLIonToggleElement).disabled).toBe(false));
    });

    it.each([
      [true, 'BiometricsWithPasscode' as UnlockMode],
      [true, 'Biometrics' as UnlockMode],
      [false, 'SystemPasscode' as UnlockMode],
      [false, 'CustomPasscode' as UnlockMode],
      [false, 'SecureStorage' as UnlockMode],
    ])('is %s if the unlock mode is %s', async (value: boolean, unlockMode: UnlockMode) => {
      (getUnlockMode as Mock).mockResolvedValue(unlockMode);
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('use-biometrics-toggle'));
      await waitFor(() => expect((toggle as HTMLIonToggleElement).checked).toBe(value));
    });

    it('unchecks custom passcode when checked', async () => {
      render(component);
      const bioToggle = await waitFor(() => screen.getByTestId('use-biometrics-toggle'));
      const customPasscodeToggle = await waitFor(() => screen.getByTestId('use-custom-passcode-toggle'));
      await waitFor(() => fireEvent(customPasscodeToggle, new CustomEvent('ionChange', {})));
      expect((customPasscodeToggle as HTMLIonToggleElement).checked).toBe(true);
      await waitFor(() => fireEvent(bioToggle, new CustomEvent('ionChange', {})));
      expect((customPasscodeToggle as HTMLIonToggleElement).checked).toBe(false);
    });

    it.each([
      [true, false, 'Biometrics'],
      [true, true, 'BiometricsWithPasscode'],
    ])('sets the unlock mode correctly when checked', async (bio: boolean, sys: boolean, mode: string) => {
      render(component);
      const bioToggle = await waitFor(() => screen.getByTestId('use-biometrics-toggle') as HTMLIonToggleElement);
      const sysToggle = await waitFor(() => screen.getByTestId('use-system-passcode-toggle') as HTMLIonToggleElement);
      bio && (await waitFor(() => fireEvent(bioToggle, new CustomEvent('ionChange', {}))));
      sys && (await waitFor(() => fireEvent(sysToggle, new CustomEvent('ionChange', {}))));
      expect(setUnlockMode).toHaveBeenCalledWith(mode);
    });

    it.each([
      [true, 'SecureStorage'],
      [false, 'SystemPasscode'],
    ])('sets the unlock mode correctly when unchecked', async (sys: boolean, mode: string) => {
      render(component);
      const bioToggle = await waitFor(() => screen.getByTestId('use-biometrics-toggle') as HTMLIonToggleElement);
      const sysToggle = await waitFor(() => screen.getByTestId('use-system-passcode-toggle') as HTMLIonToggleElement);
      await waitFor(() => fireEvent(bioToggle, new CustomEvent('ionChange', {})));
      await waitFor(() => fireEvent(sysToggle, new CustomEvent('ionChange', {})));
      await waitFor(() => fireEvent(bioToggle, new CustomEvent('ionChange', {})));
      sys && (await waitFor(() => fireEvent(sysToggle, new CustomEvent('ionChange', {}))));
      expect(setUnlockMode).toHaveBeenCalledWith(mode);
    });
  });

  describe('system passcode toggle', () => {
    it('is disabled if we cannot use system passcode', async () => {
      (canUseSystemPasscode as Mock).mockResolvedValue(false);
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('use-system-passcode-toggle'));
      await waitFor(() => expect((toggle as HTMLIonToggleElement).disabled).toBe(true));
    });

    it('is not disabled if we can use system passcode', async () => {
      (canUseSystemPasscode as Mock).mockResolvedValue(true);
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('use-system-passcode-toggle'));
      await waitFor(() => expect((toggle as HTMLIonToggleElement).disabled).toBe(false));
    });

    it.each([
      [true, 'BiometricsWithPasscode' as UnlockMode],
      [false, 'Biometrics' as UnlockMode],
      [true, 'SystemPasscode' as UnlockMode],
      [false, 'CustomPasscode' as UnlockMode],
      [false, 'SecureStorage' as UnlockMode],
    ])('is %s if the unlock mode is %s', async (value: boolean, unlockMode: UnlockMode) => {
      (getUnlockMode as Mock).mockResolvedValue(unlockMode);
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('use-system-passcode-toggle'));
      await waitFor(() => expect((toggle as HTMLIonToggleElement).checked).toBe(value));
    });

    it('unchecks custom passcode when checked', async () => {
      render(component);
      const sysToggle = await waitFor(() => screen.getByTestId('use-system-passcode-toggle'));
      const customPasscodeToggle = await waitFor(() => screen.getByTestId('use-custom-passcode-toggle'));
      await waitFor(() => fireEvent(customPasscodeToggle, new CustomEvent('ionChange', {})));
      expect((customPasscodeToggle as HTMLIonToggleElement).checked).toBe(true);
      await waitFor(() => fireEvent(sysToggle, new CustomEvent('ionChange', {})));
      expect((customPasscodeToggle as HTMLIonToggleElement).checked).toBe(false);
    });

    it.each([
      [false, true, 'SystemPasscode'],
      [true, true, 'BiometricsWithPasscode'],
    ])('sets the unlock mode correctly when checked', async (bio: boolean, sys: boolean, mode: string) => {
      render(component);
      const bioToggle = await waitFor(() => screen.getByTestId('use-biometrics-toggle') as HTMLIonToggleElement);
      const sysToggle = await waitFor(() => screen.getByTestId('use-system-passcode-toggle') as HTMLIonToggleElement);
      bio && (await waitFor(() => fireEvent(bioToggle, new CustomEvent('ionChange', {}))));
      sys && (await waitFor(() => fireEvent(sysToggle, new CustomEvent('ionChange', {}))));
      expect(setUnlockMode).toHaveBeenCalledWith(mode);
    });

    it.each([
      [true, 'SecureStorage'],
      [false, 'Biometrics'],
    ])('sets the unlock mode correctly when unchecked', async (bio: boolean, mode: string) => {
      render(component);
      const bioToggle = await waitFor(() => screen.getByTestId('use-biometrics-toggle') as HTMLIonToggleElement);
      const sysToggle = await waitFor(() => screen.getByTestId('use-system-passcode-toggle') as HTMLIonToggleElement);
      await waitFor(() => fireEvent(bioToggle, new CustomEvent('ionChange', {})));
      await waitFor(() => fireEvent(sysToggle, new CustomEvent('ionChange', {})));
      await waitFor(() => fireEvent(sysToggle, new CustomEvent('ionChange', {})));
      bio && (await waitFor(() => fireEvent(bioToggle, new CustomEvent('ionChange', {}))));
      expect(setUnlockMode).toHaveBeenCalledWith(mode);
    });
  });

  describe('custom passcode toggle', () => {
    it('is disabled if we cannot use the custom passcode', async () => {
      (canUseCustomPasscode as Mock).mockReturnValue(false);
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('use-custom-passcode-toggle'));
      await waitFor(() => expect((toggle as HTMLIonToggleElement).disabled).toBe(true));
    });

    it('is not disabled if we cannot use the custom passcode', async () => {
      (canUseCustomPasscode as Mock).mockReturnValue(true);
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('use-custom-passcode-toggle'));
      await waitFor(() => expect((toggle as HTMLIonToggleElement).disabled).toBe(false));
    });

    it.each([
      [false, 'BiometricsWithPasscode' as UnlockMode],
      [false, 'Biometrics' as UnlockMode],
      [false, 'SystemPasscode' as UnlockMode],
      [true, 'CustomPasscode' as UnlockMode],
      [false, 'SecureStorage' as UnlockMode],
    ])('is %s if the unlock mode is %s', async (value: boolean, unlockMode: UnlockMode) => {
      (getUnlockMode as Mock).mockResolvedValue(unlockMode);
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('use-custom-passcode-toggle'));
      await waitFor(() => expect((toggle as HTMLIonToggleElement).checked).toBe(value));
    });

    it('unchecks bio and system passcode when checked', async () => {
      render(component);
      const bioToggle = await waitFor(() => screen.getByTestId('use-biometrics-toggle') as HTMLIonToggleElement);
      const sysToggle = await waitFor(() => screen.getByTestId('use-system-passcode-toggle') as HTMLIonToggleElement);
      const custToggle = await waitFor(() => screen.getByTestId('use-custom-passcode-toggle') as HTMLIonToggleElement);
      await waitFor(() => fireEvent(bioToggle, new CustomEvent('ionChange', {})));
      await waitFor(() => fireEvent(sysToggle, new CustomEvent('ionChange', {})));
      expect(sysToggle.checked).toBe(true);
      expect(bioToggle.checked).toBe(true);
      await waitFor(() => fireEvent(custToggle, new CustomEvent('ionChange', {})));
      expect(sysToggle.checked).toBe(false);
      expect(bioToggle.checked).toBe(false);
    });

    it('sets the vault type to use custom passcode when set', async () => {
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('use-custom-passcode-toggle') as HTMLIonToggleElement);
      await waitFor(() => fireEvent(toggle, new CustomEvent('ionChange', {})));
      expect(setUnlockMode).toHaveBeenCalledTimes(1);
      expect(setUnlockMode).toHaveBeenCalledWith('CustomPasscode');
    });

    it('sets the vault type to secure storage when unset', async () => {
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('use-custom-passcode-toggle') as HTMLIonToggleElement);
      await waitFor(() => fireEvent(toggle, new CustomEvent('ionChange', {})));
      await waitFor(() => fireEvent(toggle, new CustomEvent('ionChange', {})));
      expect(setUnlockMode).toHaveBeenCalledTimes(2);
      expect(setUnlockMode).toHaveBeenCalledWith('SecureStorage');
    });
  });

  describe('hide in background toggle', () => {
    it('is disabled if we cannot use the custom passcode', async () => {
      (canHideContentsInBackground as Mock).mockReturnValue(false);
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('hide-contents-toggle'));
      expect((toggle as HTMLIonToggleElement).disabled).toBe(true);
    });

    it('is not disabled if we can use the custom passcode', async () => {
      (canHideContentsInBackground as Mock).mockReturnValue(true);
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('hide-contents-toggle'));
      expect((toggle as HTMLIonToggleElement).disabled).toBe(false);
    });

    it.each([[true], [false]])('is %s on initialization', async (value: boolean) => {
      (isHidingContentsInBackground as Mock).mockResolvedValue(value);
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('hide-contents-toggle'));
      expect((toggle as HTMLIonToggleElement).checked).toBe(value);
    });

    it.each([[true], [false]])('sets the hide to %s', async (value: boolean) => {
      (isHidingContentsInBackground as Mock).mockResolvedValue(!value);
      render(component);
      const toggle = await waitFor(() => screen.getByTestId('hide-contents-toggle'));
      await waitFor(() => fireEvent(toggle, new CustomEvent('ionChange', {})));
      expect(hideContentsInBackground).toHaveBeenCalledTimes(1);
      expect(hideContentsInBackground).toHaveBeenCalledWith(value);
    });
  });

  describe('logout button', () => {
    it('performs a logout when clicked', async () => {
      const { logout } = useAuth();
      render(component);
      fireEvent.click(screen.getByText('Logout'));
      await waitFor(() => expect(logout).toHaveBeenCalledTimes(1));
    });

    it('calls the onDismiss prop', async () => {
      render(component);
      fireEvent.click(screen.getByText('Logout'));
      await waitFor(() => expect(mockOnDismiss).toHaveBeenCalledTimes(1));
    });

    it('navigates to the login page', async () => {
      const history = useHistory();
      render(component);
      fireEvent.click(screen.getByText('Logout'));
      await waitFor(() => expect(history.replace).toHaveBeenCalledTimes(1));
      expect(history.replace).toHaveBeenCalledWith('/login');
    });
  });
});
