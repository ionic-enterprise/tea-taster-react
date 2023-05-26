import { vi, Mock } from 'vitest';
import { canUnlock, getSession } from '../api/session-vault-api';
import { screen, render, waitFor } from '@testing-library/react';
import AuthProvider, { useAuth } from './AuthProvider';
import { useHistory } from 'react-router';

vi.mock('react-router');
vi.mock('../api/session-vault-api');

const MockChildComponent = () => {
  const { isAuthenticated } = useAuth();
  return <div>{isAuthenticated ? 'true' : 'false'}</div>;
};

const mockComponent = (
  <AuthProvider>
    <MockChildComponent />
  </AuthProvider>
);

describe('AuthProvider', () => {
  beforeEach(() => vi.clearAllMocks());

  it('shows a spinner when checking for a session', async () => {
    (canUnlock as Mock).mockResolvedValue(true);
    const { container } = render(<AuthProvider />);
    await waitFor(() => expect(container.querySelectorAll('ion-spinner')).toHaveLength(1));
  });

  describe('when there is an unlockable vault', () => {
    beforeEach(() => (canUnlock as Mock).mockResolvedValue(true));

    it('sets isAuthenticated to true', async () => {
      render(mockComponent);
      await waitFor(() => expect(screen.getByText('true')).toBeInTheDocument());
    });

    it('redirects the user to the unlock page', async () => {
      const history = useHistory();
      render(mockComponent);
      await waitFor(() => expect(history.replace).toHaveBeenCalledTimes(1));
      expect(history.replace).toHaveBeenCalledWith('/unlock');
    });
  });

  describe('when there is not an unlockable vault', () => {
    beforeEach(() => (canUnlock as Mock).mockResolvedValue(false));

    describe('if a session exists', () => {
      beforeEach(() => (getSession as Mock).mockResolvedValue({}));

      it('sets isAuthenticated to true', async () => {
        render(mockComponent);
        await waitFor(() => expect(screen.getByText('true')).toBeInTheDocument());
      });
    });

    describe('if a session does not exist', () => {
      it('sets isAuthenticated to false', async () => {
        (getSession as Mock).mockResolvedValue(undefined);
        render(mockComponent);
        await waitFor(() => expect(screen.getByText('false')).toBeInTheDocument());
      });
    });
  });
});
