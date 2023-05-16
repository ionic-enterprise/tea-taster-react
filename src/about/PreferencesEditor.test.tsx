import { vi, Mock } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useAuth } from '../auth/AuthProvider';
import { useHistory } from 'react-router';
import { PreferencesEditor } from './PreferencesEditor';
import { canHideContentsInBackground, hideContentsInBackground, isHidingContentsInBackground } from '../api/device-api';

vi.mock('react-router');
vi.mock('../auth/AuthProvider');
vi.mock('../session-vault/SessionVaultProvider');
vi.mock('../api/device-api');

const mockOnDismiss = vi.fn();

describe('<PreferencesEditor />', () => {
  const component = <PreferencesEditor onDismiss={() => mockOnDismiss()} />;
  beforeEach(() => vi.clearAllMocks());

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
