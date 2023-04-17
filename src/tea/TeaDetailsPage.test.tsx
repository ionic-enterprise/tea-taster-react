import { Mock, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useTea } from './TeaProvider';
import { useParams } from 'react-router';
import TeaDetailsPage from './TeaDetailsPage';

vi.mock('../tea/TeaProvider');
vi.mock('react-router');

describe('<TeaDetailsPage />', () => {
  beforeEach(() => {
    (useParams as Mock).mockReturnValue({ id: '3' });
    (useTea as Mock).mockReturnValue({
      teas: [
        {
          id: 1,
          name: 'Green',
          image: '/assets/images/green.jpg',
          description: 'Green tea description.',
        },
        {
          id: 2,
          name: 'Black',
          image: '/assets/images/black.jpg',
          description: 'Black tea description.',
        },
        {
          id: 3,
          name: 'Herbal',
          image: '/assets/images/herbal.jpg',
          description: 'Herbal infusions description.',
        },
        {
          id: 4,
          name: 'Oolong',
          image: '/assets/images/oolong.jpg',
          description: 'Oolong tea description.',
        },
      ],
    });
    vi.clearAllMocks();
  });

  it('renders consistently', () => {
    const { asFragment } = render(<TeaDetailsPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the title', () => {
    const { baseElement } = render(<TeaDetailsPage />);
    const titleELements = baseElement.querySelectorAll('ion-title');
    expect(titleELements).toHaveLength(1);
  });

  it('renders the tea name', () => {
    render(<TeaDetailsPage />);
    expect(screen.getByTestId('name')).toHaveTextContent('Herbal');
  });

  it('renders the tea description', () => {
    render(<TeaDetailsPage />);
    expect(screen.getByTestId('description')).toHaveTextContent('Herbal infusions description.');
  });
});
