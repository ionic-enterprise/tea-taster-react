import { Mock, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useHistory } from 'react-router';
import UnlockPage from './UnlockPage';
import { clearSession, getSession } from '../api/session-vault-api';

vi.mock('react-router');
vi.mock('../api/session-vault-api');

describe('<UnlockPage />', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renders consistently', () => {
    const { asFragment } = render(<UnlockPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('the unlock button', () => {
    it('tries to get the session', async () => {
      render(<UnlockPage />);
      await waitFor(() => fireEvent.click(screen.getByText('Unlock')));
      expect(getSession).toHaveBeenCalledTimes(1);
    });

    it('navigates to the root', async () => {
      const history = useHistory();
      render(<UnlockPage />);
      await waitFor(() => fireEvent.click(screen.getByText('Unlock')));
      expect(history.replace).toHaveBeenCalledTimes(1);
      expect(history.replace).toHaveBeenCalledWith('/');
    });

    describe('when the user cancels', () => {
      it('does not navigate', async () => {
        const history = useHistory();
        (getSession as Mock).mockRejectedValue(new Error('whatever, dude'));
        render(<UnlockPage />);
        await waitFor(() => fireEvent.click(screen.getByText('Unlock')));
        expect(history.replace).not.toHaveBeenCalled();
      });
    });
  });

  describe('the redo button', () => {
    it('clears the vault', async () => {
      render(<UnlockPage />);
      await waitFor(() => fireEvent.click(screen.getByText('Redo Sign In')));
      expect(clearSession).toHaveBeenCalledTimes(1);
    });

    it('navigates to the login page', async () => {
      const history = useHistory();
      render(<UnlockPage />);
      await waitFor(() => fireEvent.click(screen.getByText('Redo Sign In')));
      expect(history.replace).toHaveBeenCalledTimes(1);
      expect(history.replace).toHaveBeenCalledWith('/login');
    });
  });
});
