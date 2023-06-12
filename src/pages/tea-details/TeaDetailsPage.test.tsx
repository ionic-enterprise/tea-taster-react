import { Mock, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import TeaDetailsPage from './TeaDetailsPage';
import { useTea } from '../../providers/TeaProvider';

vi.mock('react-router-dom');
vi.mock('../../providers/TeaProvider');

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
          rating: 0,
        },
        {
          id: 2,
          name: 'Black',
          image: '/assets/images/black.jpg',
          description: 'Black tea description.',
          rating: 1,
        },
        {
          id: 3,
          name: 'Herbal',
          image: '/assets/images/herbal.jpg',
          description: 'Herbal infusions description.',
          rating: 2,
        },
        {
          id: 4,
          name: 'Oolong',
          image: '/assets/images/oolong.jpg',
          description: 'Oolong tea description.',
          rating: 3,
        },
      ],
      rate: vi.fn(),
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

  it('saves the rating on click', async () => {
    const { rate } = useTea();
    render(<TeaDetailsPage />);
    const stars = screen.getAllByTestId(/\b(star|outline)\b/);
    fireEvent.click(stars[3]);
    await waitFor(() => expect(rate).toHaveBeenCalledTimes(1));
    expect(rate).toHaveBeenCalledWith(3, 4);
  });
});
