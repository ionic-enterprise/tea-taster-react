import { vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import TeaListPage, { teaData } from './TeaListPage';
import { logout } from '../../utils/auth';
import { useHistory } from 'react-router-dom';

vi.mock('react-router-dom');
vi.mock('../../utils/auth');

describe('<TeaListPage />', () => {
  it('renders consistently', () => {
    const { asFragment } = render(<TeaListPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the title', () => {
    render(<TeaListPage />);
    const titleElements = screen.getAllByText('Tea');
    expect(titleElements).toHaveLength(2);
  });

  describe('with seven teas', () => {
    it('displays two rows', () => {
      const { baseElement } = render(<TeaListPage />);
      const rows = baseElement.querySelectorAll('ion-grid ion-row');
      expect(rows).toHaveLength(2);
    });

    it('displays four columns in the first row', () => {
      const { baseElement } = render(<TeaListPage />);
      const rows = baseElement.querySelectorAll('ion-grid ion-row');
      const cols = rows[0].querySelectorAll('ion-col');
      expect(cols).toHaveLength(4);
    });

    it('displays three columns in the second row', () => {
      const { baseElement } = render(<TeaListPage />);
      const rows = baseElement.querySelectorAll('ion-grid ion-row');
      const cols = rows[1].querySelectorAll('ion-col');
      expect(cols).toHaveLength(3);
    });

    it('displays the name in the title', () => {
      const { baseElement } = render(<TeaListPage />);
      const cols = baseElement.querySelectorAll('ion-col');
      cols.forEach((c, idx) => {
        const title = c.querySelector('ion-card ion-card-header ion-card-title');
        expect(title).toHaveTextContent(teaData[idx].name);
      });
    });

    it('displays the description in the content', () => {
      const { baseElement } = render(<TeaListPage />);
      const cols = baseElement.querySelectorAll('ion-col');
      cols.forEach((c, idx) => {
        const title = c.querySelector('ion-card ion-card-content');
        expect(title).toHaveTextContent(teaData[idx].description);
      });
    });
  });

  describe('sign out button', () => {
    it('performs a logout when clicked', async () => {
      render(<TeaListPage />);
      const button = screen.getByTestId('logout-button');
      fireEvent.click(button);
      await waitFor(() => expect(logout).toHaveBeenCalledTimes(1));
    });

    it('navigates to the login page', async () => {
      const history = useHistory();
      render(<TeaListPage />);
      const button = screen.getByTestId('logout-button');
      fireEvent.click(button);
      await waitFor(() => expect(history.replace).toHaveBeenCalledTimes(1));
      expect(history.replace).toHaveBeenCalledWith('/login');
    });
  });
});
