import { vi, Mock } from 'vitest';
import { render, renderHook, waitFor } from '@testing-library/react';
import { GetOptions, Preferences } from '@capacitor/preferences';
import { client } from '../utils/backend-api';
import { Tea } from '../models';
import TeaProvider, { useTea } from './TeaProvider';

vi.mock('@capacitor/preferences');
vi.mock('../utils/backend-api');

const MockChildComponent = () => {
  const { teas } = useTea();
  return <div data-testid="teas">{JSON.stringify(teas)}</div>;
};

const mockComponent = (
  <TeaProvider>
    <MockChildComponent />
  </TeaProvider>
);

describe('TeaProvider', () => {
  let expectedTeas: Tea[];
  let httpResultTeas: Omit<Tea, 'image' | 'rating'>[];

  beforeEach(() => {
    initializeTestData();
    vi.clearAllMocks();
    (client.get as Mock).mockResolvedValue({ data: [] });
    (Preferences.get as Mock).mockImplementation(async (opt: GetOptions) => {
      switch (opt.key) {
        case 'rating1':
        case 'rating6':
          return { value: 1 };
        case 'rating2':
        case 'rating7':
          return { value: 2 };
        case 'rating3':
        case 'rating8':
          return { value: 3 };
        case 'rating4':
          return { value: 4 };
        case 'rating5':
          return { value: 5 };
        default:
          return { value: null };
      }
    });
  });

  describe('loadTeas', () => {
    it('gets the tea categories', async () => {
      render(mockComponent);
      await waitFor(() => expect(client.get).toHaveBeenCalledTimes(1));
      expect(client.get).toHaveBeenCalledWith('/tea-categories');
    });

    it('transforms the tea data', async () => {
      (client.get as Mock).mockResolvedValue({ data: httpResultTeas });
      const { getByTestId } = render(mockComponent);
      await waitFor(() => expect(JSON.parse(getByTestId('teas').textContent || '')).toEqual(expectedTeas));
    });
  });

  describe('rate', () => {
    const wrapper = ({ children }: any) => <TeaProvider>{children}</TeaProvider>;

    beforeEach(() => (client.get as Mock).mockResolvedValue({ data: httpResultTeas }));

    it('saves the rating', async () => {
      const { result } = await waitFor(() => renderHook(() => useTea(), { wrapper }));
      await waitFor(async () => await result.current.rate(5, 4));
      expect(Preferences.set).toHaveBeenCalledTimes(1);
      expect(Preferences.set).toHaveBeenCalledWith({ key: 'rating5', value: '4' });
    });
  });

  const initializeTestData = () => {
    expectedTeas = [
      {
        id: 1,
        name: 'Green',
        description: 'Green tea description.',
        image: '/assets/images/green.jpg',
        rating: 1,
      },
      {
        id: 2,
        name: 'Black',
        description: 'Black tea description.',
        image: '/assets/images/black.jpg',
        rating: 2,
      },
      {
        id: 3,
        name: 'Herbal',
        description: 'Herbal Infusion description.',
        image: '/assets/images/herbal.jpg',
        rating: 3,
      },
      {
        id: 4,
        name: 'Oolong',
        description: 'Oolong tea description.',
        image: '/assets/images/oolong.jpg',
        rating: 4,
      },
      {
        id: 5,
        name: 'Dark',
        description: 'Dark tea description.',
        image: '/assets/images/dark.jpg',
        rating: 5,
      },
      {
        id: 6,
        name: 'Puer',
        description: 'Puer tea description.',
        image: '/assets/images/puer.jpg',
        rating: 1,
      },
      {
        id: 7,
        name: 'White',
        description: 'White tea description.',
        image: '/assets/images/white.jpg',
        rating: 2,
      },
      {
        id: 8,
        name: 'Yellow',
        description: 'Yellow tea description.',
        image: '/assets/images/yellow.jpg',
        rating: 3,
      },
    ];
    httpResultTeas = expectedTeas.map((t: Tea) => {
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      const { image, rating, ...tea } = { ...t };
      return tea;
    });
  };
});
