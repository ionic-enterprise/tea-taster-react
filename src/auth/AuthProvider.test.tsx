import { vi, Mock } from 'vitest';
import { getSession } from '../api/session-api';
import { screen, render, waitFor } from '@testing-library/react';
import AuthProvider, { useAuth } from './AuthProvider';

vi.mock('../api/session-api');

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

  describe('when rendered', () => {
    it('shows a spinner when checking for a session', async () => {
      const { container } = render(<AuthProvider />);
      await waitFor(() => expect(container.querySelectorAll('ion-spinner')).toHaveLength(1));
    });

    describe('if a session exists', () => {
      beforeEach(() => (getSession as Mock).mockResolvedValue({}));

      it('sets isAuthenticated to true', async () => {
        render(mockComponent);
        await waitFor(() => expect(screen.getByText('true')).toBeInTheDocument());
      });
    });

    describe('if a session does not exists', () => {
      beforeEach(() => (getSession as Mock).mockResolvedValue(undefined));

      it('sets isAuthenticated to false', async () => {
        render(mockComponent);
        await waitFor(() => expect(screen.getByText('false')).toBeInTheDocument());
      });
    });
  });
});
