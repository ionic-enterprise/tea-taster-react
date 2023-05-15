import { vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useAuth } from '../auth/AuthProvider';
import { useHistory } from 'react-router';

import { PreferencesEditor } from './PreferencesEditor';

vi.mock('../auth/AuthProvider');
vi.mock('react-router');

const mockOnDismiss = vi.fn();

describe('<PreferencesEditor />', () => {
  const component = <PreferencesEditor onDismiss={() => mockOnDismiss()} />;

  beforeEach(() => vi.clearAllMocks());

  it('renders without crashing', () => {
    const { baseElement } = render(component);
    expect(baseElement).toBeDefined();
  });

  it('renders consistently', () => {
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
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
