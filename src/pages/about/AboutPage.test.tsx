import { vi } from 'vitest';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import AboutPage from './AboutPage';
import { useHistory } from 'react-router-dom';
import { logout } from '../../utils/auth';

vi.mock('react-router-dom');
vi.mock('../../utils/auth');

describe('<AboutPage />', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<AboutPage />);
    expect(baseElement).toBeDefined();
  });

  it('renders consistently', () => {
    const { asFragment } = render(<AboutPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('sign out button', () => {
    it('performs a logout when clicked', async () => {
      render(<AboutPage />);
      const button = screen.getByTestId('logout-button');
      fireEvent.click(button);
      await waitFor(() => expect(logout).toHaveBeenCalledTimes(1));
    });

    it('navigates to the login page', async () => {
      const history = useHistory();
      render(<AboutPage />);
      const button = screen.getByTestId('logout-button');
      fireEvent.click(button);
      await waitFor(() => expect(history.replace).toHaveBeenCalledTimes(1));
      expect(history.replace).toHaveBeenCalledWith('/login');
    });
  });
});
