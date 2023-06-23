import { Mock, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { useHistory } from 'react-router-dom';
import { canUnlock } from '../utils/session-vault';
import StartPage from './StartPage';

vi.mock('react-router-dom');
vi.mock('../utils/session-vault');

describe('<StartPage />', () => {
  beforeEach(() => vi.clearAllMocks());

  it('routes to the teas when we cannot unlock', async () => {
    (canUnlock as Mock).mockResolvedValue(false);
    const history = useHistory();
    render(<StartPage />);
    await waitFor(() => expect(history.replace).toHaveBeenCalledTimes(1));
    expect(history.replace).toHaveBeenCalledWith('/tabs/tea');
  });

  it('routes to the unlock page when we can unlock', async () => {
    (canUnlock as Mock).mockResolvedValue(true);
    const history = useHistory();
    render(<StartPage />);
    await waitFor(() => expect(history.replace).toHaveBeenCalledTimes(1));
    expect(history.replace).toHaveBeenCalledWith('/unlock');
  });
});
