import { Mock, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';
import { useHistory } from 'react-router-dom';
import { login } from '../../utils/auth';

vi.mock('react-router-dom');
vi.mock('../../utils/auth');

describe('<LoginPage />', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renders consistently', () => {
    const { asFragment } = render(<LoginPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the title', () => {
    render(<LoginPage />);
    const titleElements = screen.getAllByText('Login');
    expect(titleElements).toHaveLength(1);
  });

  describe('clicking the sign in button', () => {
    it('performs the login', async () => {
      render(<LoginPage />);
      const button = screen.getByTestId('signin-button') as HTMLIonButtonElement;
      fireEvent.click(button);
      await waitFor(() => expect(login).toHaveBeenCalledTimes(1));
    });

    describe('if the login succeeds', () => {
      beforeEach(() => (login as Mock).mockResolvedValue(undefined));

      it('navigates to the root page', async () => {
        const history = useHistory();
        render(<LoginPage />);
        const button = screen.getByTestId('signin-button') as HTMLIonButtonElement;
        fireEvent.click(button);
        await waitFor(() => expect(history.replace).toHaveBeenCalledTimes(1));
        expect(history.replace).toHaveBeenCalledWith('/');
      });
    });
  });
});
