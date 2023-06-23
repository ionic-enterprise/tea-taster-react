import { Mock, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useHistory } from 'react-router-dom';
import UnlockPage from './UnlockPage';
import { clearSession, restoreSession } from '../../utils/session-vault';

vi.mock('react-router-dom');
vi.mock('../../utils/session-vault');

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
      expect(restoreSession).toHaveBeenCalledTimes(1);
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
        (restoreSession as Mock).mockRejectedValue(new Error('whatever, dude'));
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
