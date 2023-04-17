import { Mock, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useAuth } from '../auth/AuthProvider';
import { useHistory } from 'react-router';
import TeaListPage from './TeaListPage';
import { useTea } from './TeaProvider';

vi.mock('../auth/AuthProvider');
vi.mock('react-router');
vi.mock('./TeaProvider');

describe('<TeaListPage />', () => {
  beforeEach(() => {
    (useTea as Mock).mockReturnValue({
      teas: [
        {
          id: 1,
          name: 'Green',
          image: '/assets/images/green.jpg',
          description:
            'Green teas have the oxidation process stopped very early on, leaving them with a very subtle flavor and ' +
            'complex undertones. These teas should be steeped at lower temperatures for shorter periods of time.',
        },
        {
          id: 2,
          name: 'Black',
          image: '/assets/images/black.jpg',
          description:
            'A fully oxidized tea, black teas have a dark color and a full robust and pronounced flavor. Black teas tend ' +
            'to have a higher caffeine content than other teas.',
        },
        {
          id: 3,
          name: 'Herbal',
          image: '/assets/images/herbal.jpg',
          description:
            'Herbal infusions are not actually "tea" but are more accurately characterized as infused beverages ' +
            'consisting of various dried herbs, spices, and fruits.',
        },
        {
          id: 4,
          name: 'Oolong',
          image: '/assets/images/oolong.jpg',
          description:
            'Oolong teas are partially oxidized, giving them a flavor that is not as robust as black teas but also ' +
            'not as subtle as green teas. Oolong teas often have a flowery fragrance.',
        },
        {
          id: 5,
          name: 'Dark',
          image: '/assets/images/dark.jpg',
          description:
            'From the Hunan and Sichuan provinces of China, dark teas are flavorful aged probiotic teas that steeps ' +
            'up very smooth with slightly sweet notes.',
        },
        {
          id: 6,
          name: 'Puer',
          image: '/assets/images/puer.jpg',
          description:
            'An aged black tea from china. Puer teas have a strong rich flavor that could be described as "woody" or "peaty."',
        },
        {
          id: 7,
          name: 'White',
          image: '/assets/images/white.jpg',
          description:
            'White tea is produced using very young shoots with no oxidation process. White tea has an extremely ' +
            'delicate flavor that is sweet and fragrant. White tea should be steeped at lower temperatures for ' +
            'short periods of time.',
        },
      ],
    });
    vi.clearAllMocks();
  });

  it('renders consistently', () => {
    const { asFragment } = render(<TeaListPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the title', () => {
    render(<TeaListPage />);
    const titleElements = screen.getAllByText('Tea');
    expect(titleElements).toHaveLength(2);
  });

  it('navigates to the details page when a tea card is clicked', async () => {
    const history = useHistory();
    const { baseElement } = render(<TeaListPage />);
    const cards = baseElement.querySelectorAll('ion-card');
    fireEvent.click(cards[3]);
    await waitFor(() => expect(history.push).toHaveBeenCalledTimes(1));
    expect(history.push).toHaveBeenCalledWith('/tea/4');
  });

  describe('with seven teas', () => {
    it('displays two rows', async () => {
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
        expect(title).toHaveTextContent(useTea().teas[idx].name);
      });
    });

    it('displays the description in the content', () => {
      const { baseElement } = render(<TeaListPage />);
      const cols = baseElement.querySelectorAll('ion-col');
      cols.forEach((c, idx) => {
        const title = c.querySelector('ion-card ion-card-content');
        expect(title).toHaveTextContent(useTea().teas[idx].description);
      });
    });
  });

  describe('sign out button', () => {
    it('performs a logout when clicked', async () => {
      const { logout } = useAuth();
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
